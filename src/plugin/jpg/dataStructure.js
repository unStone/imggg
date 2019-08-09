module.exports = {
  dataStructure: {
    
  },
  sectionTypeList: {
    // 文件头
    0xD8: 'SOI',
    // 文件尾
    0xD9: 'EOI',
    // 帧开始（标准 JPEG）
    0xC0: 'SOF0',
    // 帧开始（标准 JPEG）
    0xC1: 'SOF1',
    // 定义 Huffman 表（霍夫曼表）
    0xC4: 'DHT',
    // 扫描行开始
    0xDA: 'SOS',
    // 定义量化表
    0xDB: 'DQT',
    // 定义重新开始间隔
    0xDD: 'DRI',
    // 定义交换格式和图像识别信息
    0xE0: 'APP0',
    // 注释
    0xFE: 'COM',
  }
}