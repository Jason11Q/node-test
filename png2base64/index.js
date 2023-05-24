const path = require('path');
const fs = require('fs');
const util = require('util');

let fileUrl = path.join(__dirname, '../unzip-avws/texture/5f2bfd3d91cf4d1694a716f17e8a6b13.png'); //文件路径

util.promisify(fs.readFileSync(fileUrl)).then((imageData) => {
  const imageBase64 = imageData.toString('base64');
  const imagePrefix = 'data:image/png;base64,';
  console.log(imagePrefix + imageBase64);
});
