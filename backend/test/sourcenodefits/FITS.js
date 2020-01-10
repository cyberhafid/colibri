/*
 * FITS
 *
 * A NodeJS module that FITS astronomical files
 * http://fits.gsfc.nasa.gov/
 *
 * Copyright (c) 2014 Joe Rosa <joe.rosa@itpmngt.co.uk>
 * MIT License, see LICENSE.txt, see http://www.opensource.org/licenses/mit-license.php
 */

//var path = require('path'),
fs = require('fs'),
  // events = require('events'), util = require('util'), // Events


  FITS = function (s) {
    this.HDU = {
      "primary": {},
      "extensions": []
    };
    this.images = [];
    this.tables = []; //FITS object
    self = this;
  }


//util.inherits(FITS, events.EventEmitter); // Events

FITS.prototype.readFile = function (filepath, callback) {
  fs.readFile(filepath, function (err, buffer) {
    self.getFITSdata(buffer, function (err, self) {
      return callback(err, self)
    })
  })
}



FITS.prototype.getFITSdata = function (data, callback) { // Parse multiple headers

  var data = data.toString(); // Needs to extract images and tables according

  var headerFlag = true,
    headerBlock = {},
    dataBlock = [],
    line = '',
    primary = true;

  var saveHeader = function (headerBlock, dataBlock) {
    if (primary) {
      self.HDU.primary = headerBlock;
      primary = false;
    } else {
      self.HDU.extensions.push(headerBlock);
    }
    self.images.push(dataBlock.join(''));
  } // Needs to save image according

  for (var i = 0; i < (data.length / 80); i++) {
    line = data.substring(i * 80, (i * 80) + 80);

    if (!headerFlag) {
      if (line.substring(0, 8) == 'XTENSION') { // Check if starts a new header (XTENSION)
        saveHeader(headerBlock, dataBlock);
        headerFlag = true;
        headerBlock = {};
        dataBlock = [];
      }
      
    } else {
      dataBlock.push(line)
      // affichage premiere ligne 
//console.log ('eeeeeeeeeeeeeeeeeee' + dataBlock);
    }

    if (headerFlag) {
      if (line.substring(0, 8) == 'END     ') {
        headerFlag = false
      } else {
        if (line.indexOf("=") != -1) {
          main = line.split('/');
          prop = main[0].split('=');
          //affichage des valeurs des HDUI
          console.log(prop[0].trim() + ' = ' + prop[1].trim()); // data
          //affichage des commentaires des HDU
          //console.log(prop[0].trim() + ' = ' + main[1].trim()); // metadata
          headerBlock[prop[0].trim()] = prop[1].trim();
        } else {
          return callback('FITS HDU is faulty: ' + line);
        }
      }
    }
  }

  saveHeader(headerBlock, dataBlock);
  return callback(null, self);
}

module.exports = new FITS();