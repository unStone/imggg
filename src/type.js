const fileType = require('file-type');

const getFileType = (buffer) => fileType(buffer);

module.export = {
  getFileType
}