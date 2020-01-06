function FITS(div_id, n_rois) {
    n_rois = 0;
    this.rois = new Array(n_rois + 1);
 
for (var i = 0; i <= n_rois; i++) {
    var roi = {};
    roi.x = 1; // ul roi x, image coords
    roi.y = 2; // ul roi y, image coords
    roi.stats = {}; // see computeROIStats()
   this.rois[i] = roi; // add to array of all ROIs
}

    this.div_id = div_id; // canvases container
    this.image = undefined; // image, flipped in Y and phys values
    this.filename = undefined; // original FITS file name
    this.header = {}; // FITS header index by keyword
    this.rawheader = []; 
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
             //console.log (key + ": #" + this.header[key] + "#");
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
}

FITS.prototype.showHeader = function () {
 var text =  this.filename ;
 var txt = document.getElementById('fits_div');
 for (var i = 0; i < this.rawheader.length; i++)
 text += "<p>" + this.rawheader[i] + "</p>";
  txt.innerHTML = text;
}

