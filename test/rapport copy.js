function chargerFichier(idInputFile, idSortie) {
    "use strict";
    var entree, fichier, fr;

    if (typeof window.FileReader !== "function") {
        alert("L’API file n’est pas encore supportée par votre navigateur.");
        return;
    }

    entree = document.getElementById(idInputFile);
    if (!entree.files[0]) {
        alert("S’il vous plaît sélectionnez un fichier avant de cliquer sur «Chargement».");
    } else {
        fichier = entree.files[0];
        fr = new FileReader();
        fr.onload = function () {
            document.getElementById(idSortie).innerHTML = fr.result;
        };
        fr.readAsText(fichier);
    }
}

function FITS(div_id, n_rois) {
    // check args
    if (!div_id || div_id.tagName != "DIV") // must be a div
        throw ("FITS requires a div");
    if (isNaN(parseInt(n_rois))) // default to no ROIs
        n_rois = 0;

    // add a resize listener (see code at end)
    var thisfits = this;
    createResizeListener();
    addResizeListener(div_id, function () {
        thisfits.handleResize();
    });

    // build each ROI, including first one for the image
    this.rois = new Array(n_rois + 1);
    // TODO: test for too few colors
    var roicolors = ["#bbb", "#55f", "#393", "orange", "#1ff", "#f1f", "#fa1", "white"];
    for (var i = 0; i <= n_rois; i++) {
        var roi = {};
        roi.x = 0; // ul roi x, image coords
        roi.y = 0; // ul roi y, image coords
        roi.z = i; // canvas z depth
        roi.enabled = true; // whether to display
        roi.width = 10000000; // roi width (start huge to force resize)
        roi.height = 10000000; // roi height (start huge to force resize)
        roi.contrast = 0; // display contrast, 0 .. 1
        roi.color = roicolors[i]; // border color
        roi.stats = {}; // see computeROIStats()
        roi.black = undefined; // black pixel, once contrast is defined
        roi.white = undefined; // white pixel, once contrast is defined
        //roi.cvs = FITS_newCanvas(div_id, "roi_canvas" + i, i + 1); // new canvas
        //roi.ctx = roi.cvs.getContext("2d"); // handy canvas 2d context 
        this.rois[i] = roi; // add to array of all ROIs
    }

    // build the glass layer on top
    // this.gcvs = FITS_newCanvas (div_id, "glass_canvas", n_rois+2); // glass canvas
   // this.gctx = this.gcvs.getContext("2d"); // handy glass 2d context

    // connect our mouse and keyboard handlers
    //window.addEventListener ("mousemove", function(event) { FITS_handleMouse (event, thisfits);}, true);
    //window.addEventListener ("mousedown", function(event) { FITS_handleMouse (event, thisfits);}, true);
    //window.addEventListener ("keydown", function(event) { FITS_handleKeyboard (event, thisfits);}, true);
    //window.addEventListener ("keyup", function(event) { FITS_handleKeyboard (event, thisfits);}, true);

    // use highest priority roi for entire image contrast
    this.icroi = n_rois;

    // init instance variables, most are undefined until an image is set
    this.div_id = div_id; // canvases container
    this.image = undefined; // image, flipped in Y and phys values
    this.filename = undefined; // original FITS file name
    this.header = {}; // FITS header index by keyword
    this.rawheader = []; // array of literal header cards
    //this.drew_glass = false;					// whether glass is currently visible
    //this.glass_size = 0.05;					// glass image fraction (before mag)
    // this.glass_mag = 4;						// default glass mag factor
    // this.glass_mic = undefined;					// center glass click location
    this.mic = undefined; // current mouse image coordinates
    this.width = undefined; // handy image size
    this.height = undefined; // handy image size
    this.resize_scale = undefined; // display size / image size
    this.header_win = undefined; // separate window for header
    // this.stretch = "square";					// default stretch
    this.palette = "gray"; // display color scheme
    this.ignore = undefined; // ignore this pixel value in stats

    // place to record user's callbacks
    // this.userMouseHandler = undefined;				// user's mouse event callback
    this.userROIChangedHandler = undefined; // user's ROI changed callback
    //this.userGlassCanvas = undefined;				// user's canvas for drawing glass

    // ROI dragging state
    this.drag_roi = undefined; // rois[] index currently being dragged
    this.drag_code = undefined; // which edge, corner or all being dragged
    this.drag_mvos = {
        dx: 0,
        dy: 0
    }; // clicked move offset from roi center 
    this.cursors = { // map of drag_codes to javacript cursors
        "n-resize": "ns-resize",
        "s-resize": "ns-resize",
        "e-resize": "ew-resize",
        "w-resize": "ew-resize",
        "ne-resize": "nesw-resize",
        "sw-resize": "nesw-resize",
        "nw-resize": "nwse-resize",
        "se-resize": "nwse-resize",
        "move": "move"
    };
}

function createResizeListener() {
    var attachEvent = document.attachEvent;
    var isIE = navigator.userAgent.match(/Trident/);
    var requestFrame = (function () {
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
            function (fn) {
                return window.setTimeout(fn, 20);
            };
        return function (fn) {
            return raf(fn);
        };
    })();

    var cancelFrame = (function () {
        var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
            window.clearTimeout;
        return function (id) {
            return cancel(id);
        };
    })();

    function resizeListener(e) {
        var win = e.target || e.srcElement;
        if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
        win.__resizeRAF__ = requestFrame(function () {
            var trigger = win.__resizeTrigger__;
            trigger.__resizeListeners__.forEach(function (fn) {
                fn.call(trigger, e);
            });
        });
    }

    function objectLoad(e) {
        this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
        this.contentDocument.defaultView.addEventListener('resize', resizeListener);
    }

    window.addResizeListener = function (element, fn) {
        if (!element.__resizeListeners__) {
            element.__resizeListeners__ = [];
            if (attachEvent) {
                element.__resizeTrigger__ = element;
                element.attachEvent('onresize', resizeListener);
            } else {
                if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
                var obj = element.__resizeTrigger__ = document.createElement('object');
                obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
                obj.__resizeElement__ = element;
                obj.onload = objectLoad;
                obj.type = 'text/html';
                if (isIE) element.appendChild(obj);
                obj.data = 'about:blank';
                if (!isIE) element.appendChild(obj);
            }
        }
        element.__resizeListeners__.push(fn);
    };

    window.removeResizeListener = function (element, fn) {
        element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
        if (!element.__resizeListeners__.length) {
            if (attachEvent) element.detachEvent('onresize', resizeListener);
            else {
                element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
                element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
            }
        }
    }
}


FITS.prototype.enableROI = function (roi_n, enable) {
    if (roi_n < 1 || roi_n >= this.rois.length)
        throw ('enableROI(' + roi_n + ') must be 1 .. ' + (this.rois.length - 1));

    var roi = this.rois[roi_n];
    roi.enabled = enable;
    this.renderROI(roi, false, false);
}

FITS.prototype.renderROI = function (roi, redef, moved) {
    // harmless if no image yet
    if (!this.image)
        return;

    // compute our stats
    roi.stats = this.computeROIStats(roi);

    // find black and white.
    var bw = this.findBlackAndWhite(roi.contrast, roi.stats);
    var black = roi.black = bw.black;
    var white = roi.white = bw.white;

    // N.B.: whole image in rois[0] uses stats from rois[icroi]
    if (roi == this.rois[0] && this.rois.length > 1 && this.rois[this.icroi].enabled) {
        var icroi_stats = this.computeROIStats(this.rois[this.icroi]);
        var bw = this.findBlackAndWhite(roi.contrast, icroi_stats);
        black = bw.black;
        white = bw.white;
    }

    black = roi.stats.min;
    white = roi.stats.max;

    // handy
    var ctx = roi.ctx;
    var range = white - black;
    if (range <= 0)
        range = 1e10;

    // set up stretch option

    // fast pallete test
    const use_rainbow = this.palette == "rainbow";

    // render as gray scale from black to white, or all transparent if disabled
    if (roi.enabled) {
        var roiimage = new ImageData(roi.width, roi.height);
        var roidata = roiimage.data; // detach from DOM for potentially faster access?
        var datai = 0; // RGBA tuple index
        for (var y = roi.y; y < roi.y + roi.height; y++) {
            for (var x = roi.x; x < roi.x + roi.width; x++) {
                var p = this.image[y * this.width + x];
                if (p === this.ignore) {
                    roidata[4 * datai] = 0; // red
                    roidata[4 * datai + 1] = 0; // green
                    roidata[4 * datai + 2] = 0; // blue
                }
                roidata[4 * datai + 3] = 255; // alpha
                datai++;
            }
        }
        roiimage.data = roidata; // reattach

        // display it, must go through a temp canvas in order to use drawImage
        var tempcan = document.createElement("canvas");
        tempcan.width = roi.width;
        tempcan.height = roi.height;
        var tcctx = tempcan.getContext("2d");
        tcctx.putImageData(roiimage, 0, 0);
        this.clearLayer(ctx);
        noSmoothing(ctx);
        ctx.drawImage(tempcan, roi.x, roi.y); // resizes according to ctx

        // garbage collector will clean up tempcvs because it has no parent but give it a kick anyway
        tempcan = undefined;

        // add outline
        ctx.strokeStyle = roi.color;
        ctx.beginPath();
        ctx.moveTo(roi.x, roi.y);
        ctx.lineTo(roi.x + roi.width, roi.y);
        ctx.lineTo(roi.x + roi.width, roi.y + roi.height);
        ctx.lineTo(roi.x, roi.y + roi.height);
        ctx.lineTo(roi.x, roi.y);
        ctx.lineTo(roi.x + roi.width, roi.y); // fill corner if highly magnified
        ctx.stroke();
    } else {
        this.clearLayer(ctx);
    }

    // inform user if interested
    if (this.userROIChangedHandler != undefined)
        this.userROIChangedHandler(roi, redef, moved);
}



FITS.prototype.setNewImage = function (filename, fitsab) {
    // save file name
    this.filename = filename;

    // init header collections
    this.header = {};
    this.rawheader = [];

    // fill header from 80 byte cards blocked in units of 2880 bytes.
    var hlen = 0;
    try {
        for (hlen = 0; hlen < fitsab.byteLength; hlen += 80) {
            var card = String.fromCharCode.apply(null, new Uint8Array(fitsab, hlen, 80));
            // console.log (card);
            if (card.match(/^END */)) { // finished when see END
                hlen += 80;
                break;
            }

            this.rawheader.push(card); // capture the raw card image

            if (card.indexOf("=") < 0) // skip COMMENT, HISTORY etc
                continue;

            var key = card.substring(0, 8); // key is always the first 8 chars ...
            key = key.replace(/ *$/, ""); // without trailing blanks

            var val = card.substring(10); // value starts in col 11 but ...
            val = val.replace(/^ */, ""); // remove leading blanks
            val = val.replace(/\/.*$/, ""); // remove comments
            val = val.replace(/ *$/, ""); // remove trailing blanks
            if (val.indexOf("'") >= 0) // looks like a string
                val = val.substring(1, val.length - 2);
            else if (val.indexOf("T") >= 0) // looks like a True boolean
                val = true;
            else if (val.indexOf("F") >= 0) // looks like a False boolean
                val = false;
            else if (val.indexOf(".") >= 0) // looks like a float
                val = parseFloat(val);
            else // must be an int
                val = parseInt(val);
            this.header[key] = val;
            // console.log (key + ": #" + this.header[key] + "#");
        }
    } catch (e) {
        throw (this.filename + ": not a FITS file: " + e);
    }

    // confirm minimal header
    if (!(this.header.SIMPLE &&
            typeof this.header.NAXIS1 == "number" &&
            typeof this.header.NAXIS2 == "number" &&
            typeof this.header.BITPIX == "number")) {
        throw (this.filename + ": not a valid FITS file");
    }

    // pixels start on next whole 2880 block
    if ((hlen % 2880) > 0)
        hlen += 2880 - (hlen % 2880);

    // save image size
    // console.log (this.header.NAXIS1 + " x " + this.header.NAXIS2 + " x " + this.header.BITPIX);
    this.width = this.rois[0].width = this.header.NAXIS1;
    this.height = this.rois[0].height = this.header.NAXIS2;
    var npixels = this.width * this.height;
    var nbytes = npixels * Math.abs(this.header.BITPIX) / 8;
    if (fitsab.byteLength < hlen + nbytes)
        throw (this.filename + ": too short: " + fitsab.byteLength + " < " + (hlen + nbytes));
    // console.log (npixels + " pixels in " + nbytes + " bytes");

    // convert remainder of file to an array of physical values, depending on type.
    // along the way also flip vertically.
    var bzero = this.header.BZERO || 0;
    var bscale = this.header.BSCALE || 1;
    this.image = new Array(npixels);
    var dv = new DataView(fitsab, hlen, nbytes);
    if (this.header.BITPIX == 8) {
        // data is array of unsigned bytes
        var imgi = 0;
        for (var y = 0; y < this.height; y++) {
            var fitsi = (this.height - 1 - y) * this.width;
            for (var x = 0; x < this.width; x++) {
                this.image[imgi] = bzero + bscale * dv.getUint8(fitsi);
                imgi++;
                fitsi++;
            }
        }
    } else if (this.header.BITPIX == 16) {
        // data is array of signed words, big endian
        var imgi = 0;
        for (var y = 0; y < this.height; y++) {
            var fitsi = (this.height - 1 - y) * this.width;
            for (var x = 0; x < this.width; x++) {
                this.image[imgi] = bzero + bscale * dv.getInt16(fitsi * 2, false);
                imgi++;
                fitsi++;
            }
        }
    } else if (this.header.BITPIX == 32) {
        // data are array of signed double words, big endian
        var imgi = 0;
        for (var y = 0; y < this.height; y++) {
            var fitsi = (this.height - 1 - y) * this.width;
            for (var x = 0; x < this.width; x++) {
                this.image[imgi] = bzero + bscale * dv.getInt32(fitsi * 4, false);
                imgi++;
                fitsi++;
            }
        }
    } else if (this.header.BITPIX == -32) {
        // data are array of IEEE single precising floating point, big endian
        var imgi = 0;
        for (var y = 0; y < this.height; y++) {
            var fitsi = (this.height - 1 - y) * this.width;
            for (var x = 0; x < this.width; x++) {
                this.image[imgi] = bzero + bscale * dv.getFloat32(fitsi * 4, false);
                imgi++;
                fitsi++;
            }
        }
    } else {
        throw (this.filename + ": BITPIX " + this.header.BITPIX + " is not yet supported");
    }


    // display by faking a resize event which does everything
    this.handleResize();
}
FITS.prototype.showHeader = function (force) {
    // check null cases
    if (!this.filename || !this.rawheader)
        return; // no image yet
    var isup = this.header_win && !this.header_win.closed;
    if (!isup && !force)
        return; // not up but don't care

    // create window if it does not exist or last one was closed
    if (this.header_win == undefined || this.header_win.closed) {
        this.header_win = window.open("", "_blank", "width=500, height=500, scrollbars=yes");
        // build outer html element in document, then updates go inside this
        this.header_win.document.write("<html></html>");
    }

    // build text that will go inside html element
    var text = "<head><title>" + this.filename + " Header</title></head><body><pre>";
    for (var i = 0; i < this.rawheader.length; i++)
        text += this.rawheader[i] + "<br>";
    text += "</pre></body>";

    // display
    this.header_win.document.documentElement.innerHTML = text;
}