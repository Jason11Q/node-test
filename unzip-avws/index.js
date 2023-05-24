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

// 这里需要注意，node运行环境问题，相对路径使用方式和JavaScript不一样。

// fs.readFileSync(path.join(__dirname, './avws/01/settings.zp')).then(data=>{}); Error: Can't read the data of 'the loaded zip file'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?

// let data = fs.readFileSync(path.join(__dirname, './avws/01/settings.zp')); Error : Can't find end of central directory : is this a zip file ?
// setPackSettings(path.join(__dirname, './avws/01/settings.zp')) ; Error : Can't find end of central directory : is this a zip file ?

let data = fs.readFileSync(path.join(__dirname, './avws/01/settings.zp'), 'utf8');

setPackSettings(data).then((json) => {
  fs.writeFileSync('./settings.json', JSON.stringify(json));
  console.log('OK');
});
