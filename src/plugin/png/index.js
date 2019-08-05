const dataStructure = require('./dataStructure')
const { readIntN } = require('../../util');

/**
 * 简介：png是一种使用无损压缩的图片格式
 * 
 *                     - 文件头
 * - png文件的数据结构 -            - 数据块
 *                     - 数据   - - ... (无数个数据块)
 *                               - 数据块
 * 
 * 1. 文件头（魔数） 8个字节
 * [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]
 * 或
 * [137, 80, 78, 71, 13, 10, 26, 10]
 * 
 * 2. 数据块（chunk）
 * 去掉头部信息剩余的数据是由无数个数据块组合而成的
 * 
 * - 关键数据块(critical chunk)
 * IHDR：存放图片信息
 * PLTE：存放索引颜色（调色板数据库）
 * IDAT：存放图片数据
 * IEND：图片数据结束标志
 * 
 * - 辅助数据块(ancillary chunks)
 * ...看 pngReadme
 * 
 */
class Png {
  constructor(data) {
		this.index = 0; // 解码游标
    this.buffer = data;
    this.dataList = dataStructure;

    this.init()
  }

  /**
   * 用于分割 this.buffer 的函数
   * @param {number} index
   * @param {number} offset
   * @return {Array|Buffer}
   */
  spliceBuffer(index, offset) {
    if(this.buffer.length < index + offset) {
      throw new Error('超出buffer界限');
    }

    // subarray 为node中Buffer的切割方法
    return this.buffer.subarray ? this.buffer.subarray(index, offset) : this.buffer.splice(index, offset)
  }

  /**
   * 用于获取 this.buffer 部分数据的函数
   * @param {number} index
   * @param {number} offset
   * @return {Array|Buffer}
   */
  sliceBuffer(index, offset) {
    if(this.buffer.length < index + 1 + offset) {
      throw new Error('超出buffer界限');
    }

    // subarray 为node中Buffer的切割方法
    return this.buffer.slice(index, offset)
  }

  init() {
    this.setHeader();
  }

  setHeader() {
    console.log('this.buffer1', this.buffer[0])
    this.header = this.getHeader();
    console.log('this.buffer2', this.buffer[0])
    // this.getChunkLength()
  }


  getHeader() {
    return this.spliceBuffer(0, 8)
  }

  getChunkLength() {
    let length = readIntN(this.sliceBuffer(0, 4)); // 数据块长度

    console.log('readIntN', length)
		if (length < 0) {
			throw new Error('不合法的数据块长度信息');
		}

  }

  setChunk() {
    
  }
}

module.exports = Png