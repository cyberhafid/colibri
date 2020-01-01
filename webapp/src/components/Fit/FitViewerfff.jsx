 
import React, { Component } from 'react';
const Fits = require('./fits');




    export default class FitsViewer extends Component {
    render () {

        var NROIS = 2;			// number of ROIS -- sufficient for code but not for html
        var fits;				// FITS instance
        var last_mouse_loc;			// last-known mouse location, in FITS coords

        // handy
        function gebi (id) {
        return document.getElementById (id);
        }

            // one-time code after page is loaded
      window.onload = function() {

        // instantiate a FITS handler with NROIS ROIs
        fits = new FITS (gebi ("fits_div"), NROIS);

        // set initial stretch
        fits.setStretch (gebi("stretch_sel").value);

        // set the ROI control colors to match
        for (var i = 1; i <= NROIS; i++)
            gebi('roi_label_'+i).style.background = fits.rois[i].color;

        // turn off all but highest prioroty ROI iniitially
        for (var i = 1; i <= NROIS; i++) {
            var state = (i == NROIS);
            fits.enableROI (i, state);
            gebi("display_roi_"+i).checked = state;
       // }

        // add handler to report new mouse location
        fits.addMouseHandler (onMouse);

        // add handler to report new ROI
        fits.addROIChangedHandler (onROIChange);

        // connect callback when user selects a local file to display
        gebi ('filesel').addEventListener('change', handleLocalFileSelect, false);

        // connect to our mag glass canvas
        fits.addGlassCanvas (gebi('glass_canvas'));

        // connect clean up function
        window.onunload = function() {
            if (fits.header_win)
            fits.header_win.close();
        };

        }
    }

        // called when user opens a local file for display
        function handleLocalFileSelect(event) {

        var hiev = event.target;			// HTMLInputElement
        var fill = hiev.files;				// FileList
        var file = fill[0];				// File
        var reader = new FileReader();

        // define callback to display file after it is received
        reader.onload = function(event) {
            var fr = event.target;			// FileReader
            var ab = fr.result;				// ArrayBuffer
            try {
            fits.setNewImage (file.name, ab);
            fits.showHeader(false);
            } catch (e) {
            alert (e);
            }
        };

        // read file, triggers onload when complete
        reader.readAsArrayBuffer(file);
        }

        // called to display header
        function showHeader () {
        fits.showHeader(true);
        }

        // called when a contrast slider is moved
        function newContrast (event) {
        // collect both values
        var name = event.target.id;
        var number = event.target.id.substring (name.length-1, name.length);
        var contrast_value = gebi ('contrast_slider_' + number).value;

        // update tracking number
        var contrast_value_id = gebi ("contrast_value_" + number);
        contrast_value_id.innerHTML = contrast_value;

        // update image
        fits.setContrast (fits.rois[number], contrast_value/100.0);
        }

            // called when the user makes a stretch selection
            function onStretchSel() {
        fits.setStretch (gebi("stretch_sel").value);
            }

        // called when mouse moved over the image, mouseloc is in image coords
        function onMouse (mouseloc) {
        last_mouse_loc = fits.image2FITS(mouseloc);
        showMouseLoc();
        }

        // called to display pixel value at last_mouse_loc
        function showMouseLoc() {
        var lid = gebi ('cursor_loc');
        if (lid && last_mouse_loc) {
            var pixel = fits.getPixelAtFITS (last_mouse_loc);
            lid.innerHTML = "[" + pad(last_mouse_loc.x,5) + ","
                        + pad(last_mouse_loc.y,5) + "] = "
                    + pad(pixel.toFixed(1),9);
        }
        }

        // called when an ROI changes, roi is in image coords.
        function onROIChange (roi, redef, moved) {
        var eid = gebi ('roiinfo_' + roi.z);
        var title = roi.z == 0 ? "Image" : "ROI " + roi.z;
        displayStats (eid, "black", title, roi);
        fits.displayHistogram (roi, gebi ("roihcanvas_" + roi.z));
        }

        // called when user turns an ROI on or off
        function onDisplayROI (roi_n) {
        var cb = gebi("display_roi_"+roi_n);
        fits.enableROI(roi_n, cb.checked);
        }

        // display roi and stats in an orderly manner in given DOM id in given color.
        function displayStats (id, color, title, roi) {
        var stats = roi.stats;
        var fits_coords = fits.image2FITS(roi);
        var minat_coords = fits.image2FITS(roi.stats.minat);
        var maxat_coords = fits.image2FITS(roi.stats.maxat);
        id.innerHTML =
            title + ": " + pad(roi.width,4) + " x " + pad(roi.height,5)
              + " @ [" + pad(fits_coords.x,5) + ", "
              + pad(fits_coords.y,5) + "]<br>"
            + "Min " + pad(stats.min.toFixed(1),11) + pad("",4)
            + " @ [" + pad(minat_coords.x.toFixed(0),5) + ", "
            + pad(minat_coords.y.toFixed(0),5) + "]<br>"
            + "Max " + pad(stats.max.toFixed(1),11) + pad("",4)
            + " @ [" + pad(maxat_coords.x.toFixed(0),5) + ", "
            + pad(maxat_coords.y.toFixed(0),5) + "]<br>"
            + "Mean " + pad(stats.mean.toFixed(1),10) + pad("",2)
                + "StdDev " + pad(stats.stddev.toFixed(1),12) + "<br>"
            + "Median " + pad(stats.median.toFixed(1),8) + pad("",1) 
            + " Sum " + pad(stats.sum.toFixed(1),15);
        id.style.color = color;
        }

        // return s padded on left to n chars
        function pad (s, n) {
        s = s.toString();
        var nadd = n - s.length;
        for (var i = 0; i < nadd; i++)
            s = "&nbsp;" + s;
        return (s);
        }


      return (
  
           
            <div>
        
        <div className="container">
        <Fits />
                 </div>
        
            </div>
     
        
      )
    }
}