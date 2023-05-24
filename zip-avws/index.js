const path = require('path');
const fs = require('fs');

const JSZip = require('jszip');

const getPackSettings = (settings, onProgress) => {
  return new Promise((resolve) => {
    let zip = new JSZip();
    zip.file('setting.json', JSON.stringify(settings));
    zip
      .generateAsync(
        {
          type: 'base64',
          streamFiles: true,
          // 如果不设置压缩级别，默认不压缩
          compression: 'DEFLATE', //压缩算法
          // compressionOptions: {
          //   //压缩级别`
          //   level: 9,
          // },
        },
        (progress) => {
          onProgress && onProgress(progress);
        }
      )
      .then(async (zip) => {
        resolve(zip);
      });
  });
};

const setPackSettings = (packSettings) => {
  return new Promise((resolve) => {
    let zip = new JSZip();
    zip
      .loadAsync(packSettings, {
        base64: true,
      })
      .then((res) => {
        if (res && res.files && res.files['setting.json']) {
          res
            .file('setting.json')
            .async('string')
            .then((content) => {
              let json = JSON.parse(content);
              resolve(json);
            });
        }
      });
  });
};

let data = fs.readFileSync(path.join(__dirname, './settings.json'), 'utf8');
let json = JSON.parse(data);

getPackSettings(json).then((zip) => {
  fs.writeFileSync(path.join(__dirname, './settings.zp'), zip);
  console.log('OK');
});
