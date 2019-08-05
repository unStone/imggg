'use strict';

exports.stringToBytes = string => [...string].map(character => character.charCodeAt(0));

/**
 * 将buffer数组转为字符串
 * @param  {Array}  buffer buffer数组
 * @return {String}        字符串
 */
exports.bufferToString = (buffer) => {
  let str = '';
  for (let i = 0, len = buffer.length; i < len; i++){
    str += String.fromCharCode(buffer[i]);
  }
  return str;
}

/**
 * 读取n位无符号整型数
 * @param  {Array | Buffer}  buffer buffer数组
 * @return {Number}                 读取到的整型数
 */
exports.readIntN = buffer => {
  let intN = 0;
  for(let i=0; i<buffer.length; i++) {
    intN += buffer[i] << ((buffer.length - 1 - i) * 8)
  }

  return intN
}