module.exports = {
  dataStructure: {
    magicNumber: null,
    // 文件头数据块|单个|必需
    IHDR: null,
    // 基色和白色点数据块|单个|非必需
    cHRM: null,
    // 图像γ数据块|单个|非必需
    gAMA: null,
    // 样本有效位数据块|单个|非必需
    sBIT: null,
    // 调色板数据块|单个|非必需
    PLTE: null,
    // 背景颜色数据块|单个|非必需
    bKGD: null,
    // 图像直方图数据块|单个|非必需
    hIST: null,
    // 图像透明数据块|单个|非必需
    tRNS: null,
    // (专用公共数据块)|单个|非必需
    oFFs: null,
    // 物理像素尺寸数据块|单个|非必需
    pHYs: null,
    // (专用公共数据块)|单个|非必需
    sCAL: null,
    // 图像数据块|多个|必需
    IDAT: [],
    // 图像最后修改时间数据块|单个|非必需
    tIME: null,
    // 文本信息数据块|多个|非必需
    tEXt: [],
    // 压缩文本数据块|多个|非必需
    zTXt: [],
    // (专用公共数据块)|多个|非必需
    fRAc: [],
    // (专用公共数据块)|多个|非必需
    gIFg: [],
    // (专用公共数据块)|多个|非必需
    gIFt: [],
    // (专用公共数据块)|多个|非必需
    gIFx: [],
    // 图像结束数据|单个|必需
    IEND: null,
  },
  multChunkType: ['IDAT', 'tEXt', 'zTXt', 'fRAc', 'gIFg', 'gIFt', 'gIFx']
}