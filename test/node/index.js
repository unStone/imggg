const fs = require('fs')
const path = require('path')
const { Jpg, Png, getImgType } = require('../../src/index')

fs.readFile(path.resolve(__dirname, 'jpg1.jpg'), function (err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data, getImgType(data));

      console.log('data', data.length)
      const p = new Jpg(data)
      console.log('data', data.length)
      // const buffer = new Uint8Array(data)
      // console.log('buffer', buffer, fileType(buffer))
  }
});