const { dataStructure, sectionTypeList } = require('./dataStructure')
const { readIntN, bufferToString } = require('../../util');

const HEADER = [0xff, 0xd8];
const FOOTER = [0xff, 0xd9];

/**
 * 简介：png是一种使用无损压缩的图片格式
 * 
 * 
 */
class Png {
  constructor(data) {
		this.index = 0; // 解码游标
    this.buffer = data;
    this.dataList = dataStructure;

    this.init()
  }

  _updateIndex(index) {
    if(typeof index === 'number') {
      this.index = index
    } else {
      this.index = 0
    }
  }

  /**
   * 用于获取 this.buffer 部分数据的函数
   * @param {number} index
   * @param {number} length
   * @return {Array|Buffer}
   */
  sliceBuffer(index=0, length=0) {
    console.log('index', index, length)
    if(this.buffer.length < index + length) {
      throw new Error('超出buffer界限');
    }

    // subarray 为node中Buffer的切割方法
    return this.buffer.slice(index, index + length)
  }

  init() {
    this.addMagicNumber()
    while(this.index < this.buffer.length) {
      const type = this.decollateSection();
      // 数据错误
      if (type === 'FAIL') break;

      // 部分图片在 IEND 类型后还有脏数据
      if (type === 'IEND') break;
    }

    console.log('this.dataList',this.dataList)
  }

  /**
   * 将魔数放到 this.dataList 中去
   */
  addMagicNumber() {
    this.dataList.magicNumber = this.sliceBuffer(this.index, 2);
    this._updateIndex(this.index + 2);
  }

  /**
   * 分割段
   * 
   * 段的格式为以下形式
   * 
   * - 段标识 1个字节 0XFF 每个新段的开始标识
   * - 段类型 1个字节 多种 类型编码（称作“标记码”）
   * - 段长度 2个字节     包括段内容和段长度本身,不包括段标识和段类型
   * - 段内容 ≤65533字节
   * 
   */
  decollateSection() {
    // 获取段标识
    const sectionBegin = this.sliceBuffer(this.index, 1)[0];
    console.log('sectionBegin', sectionBegin)
    if(sectionBegin !== 0xff) return 'FAIL';
    const sectionType = this.sliceBuffer(this.index + 1, 1)[0];
    if(sectionTypeList[sectionType]) console.log('sectionTypeList[sectionType]', sectionTypeList[sectionType])
    const sectionLength = this.sliceBuffer(this.index + 2, 2);
    const length = readIntN(sectionLength);
    
    this._updateIndex(this.index + 2 + length);
    console.log('type', sectionTypeList[sectionType], this.sliceBuffer(this.index, 1000))
    console.log('length-------------', sectionLength, length)
    return sectionTypeList[sectionType]
  }
}

module.exports = Png