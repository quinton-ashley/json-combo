const deepExtend = require('deep-extend');
const fs = require('fs');

let json0 = JSON.parse(fs.readFileSync(process.argv[2]));
let json1 = JSON.parse(fs.readFileSync(process.argv[3]));
deepExtend(json0, json1);
let file = process.argv[2].slice(0, -5) + '_combo.json';
fs.writeFileSync(file, JSON.stringify(json0, null, '\t'));
console.log(file);
