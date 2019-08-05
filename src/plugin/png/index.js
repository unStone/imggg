const { dataStructure, multChunkType } = require('./dataStructure')
const { readIntN, bufferToString } = require('../../util');

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
      const type = this.decollateChunk();

      // 部分图片在 IEND 类型后还有脏数据
      if (type === 'IEND') break;
    }

    console.log('this.dataList',this.dataList)
  }

  /**
   * 将魔数放到 this.dataList 中去
   */
  addMagicNumber() {
    this.dataList.magicNumber = this.sliceBuffer(this.index, 8);
    this._updateIndex(this.index + 8);
  }

  /**
   * 切割各个数据块，并把数据放到 this.dataList 中去
   */
  decollateChunk() {
    // 获取数据块长度Code
    const chunkLength = this.sliceBuffer(this.index, 4);
    // 解析数据块中的数据长度
    const length = readIntN(chunkLength);
    // 获取数据块类型码Code
    const ChunkTypeCode = this.sliceBuffer(this.index + 4, 4);
    // 解析数据块类型
    const type = bufferToString(ChunkTypeCode);
    // 获取数据块数据Code
    // const ChunkData = this.sliceBuffer(this.index + 8, length);
    // 获取数据块循环冗余检测Code
    // const CRC = this.sliceBuffer(this.index + chunkLength + 8, 4);
    // 获取整块数据块
    const chunkData = this.sliceBuffer(this.index, 12 + length)
    console.log('chunkLength', chunkLength)
    console.log('length', length)
    console.log('ChunkTypeCode', ChunkTypeCode)
    console.log('type', type)

    this._updateIndex(this.index + 12 + length);

    if(multChunkType.indexOf(type) !== -1) {
      this.dataList[type].push(chunkData)
    } else {
      this.dataList[type] = (chunkData)
    }

    return type
  }
}

module.exports = Png