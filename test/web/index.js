const getFileType = require('../../dist/bundle.js');

const file = document.getElementById('file');
console.log('file', file)
file.onchange = function(e) {
  console.log('e', e)
  console.log('e', e.target.value)
  console.log('e', e.target.files)
  console.log('e', e.target.files[0])

  if(!e.target.files[0]) return;

  var reader = new FileReader();
  reader.onload = putImage2Canvas
  reader.readAsArrayBuffer(e.target.files[0]);
}

function putImage2Canvas(event) {
  
  const arrayBuffer = event.target.result;
  
  const buffer = new Uint8Array(arrayBuffer)
  
  console.log('getFileType(buffer)', getFileType(buffer))
  console.log('util', util)
}