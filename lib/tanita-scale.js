/*
 * fuel-bar-scale
 * none
 *
 * Copyright (c) 2013 Deedod
 * Licensed under the Closed Source license.
 */

'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;
var device = require("serialport");

function TanitaScale(){
	
	var self = this;

	var port = "/dev/cu.usbserial-A900fS9w";
	var serialPort = new device.SerialPort(port, { parser: device.parsers.readline("\r\n") });

	serialPort.on("open", function () {

	    serialPort.on('data', function(data) {
			var processedData = processData(data);
			self.emit('data', processedData);
		
	    });

	    serialPort.on('error', function(error){
		  	self.emit('error', error);

	    });
	});

}

util.inherits(TanitaScale, EventEmitter);

module.exports = new TanitaScale();

function processData(data){
    var values = data.split(',');
    var keyedData = {};

    while(values.length > 0){
        keyedData[key[values.shift()]] = values.shift();
    }

   return keyedData;
}

var key = {
	Wp : "weight",
	Pt : "presetTare",
	MO : "model",
	SN : "serial",
	Bt : "bodyType",
	GE : "gender",
	AG : "age",
	Hm : "height",
	Wk : "bodyWeight",
	FW : "fatPercent",
	fW : "fatMass",
	MW : "ffm",
	mW : "muscleMass",
	sW : "muscleScore",
	bW : "boneMass",
	wW : "bodyWater",
	ww : "bodyWaterPercent",
	MI : "bmi",
	Sw : "idealBodyWeight",
	OV : "obesityDegree",
	IF : "visceralFatRating",
	rb : "kJbmr",
	rB : "kcalbmr",
	rJ : "bmrScore",
	rA : "metabolicAge",
	ZF : "impedance",
	CS : "checksum",
	'{0' : "Control1",
	'~0' : "Control2",
	'~1' : "Control3",
	'~2' : "Control4"
}



