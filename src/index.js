const fileType = require('./image-type/index')
const { Png, Jpg } = require('./plugin')

module.exports = {
  // 获取图片类型
  getImgType: data => fileType(data),
  // 对图片进行隐形加密并同步返回
  encryption: data => data,
  
  Png,
  Jpg
};