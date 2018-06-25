/**
 * goal is to modify lukas input data [Array] of stops, 
 * and re-create it as Key:value hash map - based on stopid for the Key.
 */

var startTime = new Date();

var fs = require('fs');
var path = require('path');
var fileInput = path.join(__dirname, 'bus_stops.json')
var fileOutput = path.join(__dirname, 'output.json')
var obj = JSON.parse(fs.readFileSync(fileInput, 'utf8'));

res = {}
obj.forEach((e, i) => {
    res[e.stopid] = e
});

fs.writeFileSync(fileOutput, JSON.stringify(res, null, 4), 'utf8')

var endTime = (new Date() - startTime) / 1000;
console.log(`Process took ${endTime} sec`)

console.log("finished...")
