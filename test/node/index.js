const fs = require('fs')
const path = require('path')
const { Png, getImgType } = require('../../src/index')

fs.readFile(path.resolve(__dirname, 'png.png'), function (err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data, getImgType(data));

      const p = new Png(data)
      console.log(p)
      // const buffer = new Uint8Array(data)
      // console.log('buffer', buffer, fileType(buffer))
  }
});