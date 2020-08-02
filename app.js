#!/usr/bin/env node

const log = console.log;
const deepExtend = require('deep-extend');
const fs = require('fs');

let file0 = process.argv[2];
let file1 = process.argv[3];

if (!file0 || !file1) {
	log('error: file paths required');
	log('$ json-combo /file/1.json /file/2.json');
	return;
}

let json0 = JSON.parse(fs.readFileSync(file0));
let json1 = JSON.parse(fs.readFileSync(file1));
deepExtend(json0, json1);
let outFile = file0.slice(0, -5) + '_combo.json';
fs.writeFileSync(outFile, JSON.stringify(json0, null, '\t'));
log("output: " + outFile);
