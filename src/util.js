'use strict';

exports.stringToBytes = string => [...string].map(character => character.charCodeAt(0));

/**
 * 读取n位无符号整型数
 * @param  {Array | Buffer}  buffer buffer数组
 * @return {Number}                 读取到的整型数
 */
exports.readIntN = buffer => {
  let intN = 0;
  console.log('buffer', buffer)
  for(let i=0; i<=buffer.length; i++) {
    console.log(buffer[i])
    intN += buffer[i] << (buffer.length - i) * 8
  }

  return intN
}