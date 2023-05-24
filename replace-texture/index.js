const path = require('path');
const fs = require('fs');

let data = fs.readFileSync(path.join(__dirname, './settings_old.json'), 'utf8');

let textures = ['5f2bfd3d91cf4d1694a716f17e8a6b13', '51c62b54fb234c99b2ea6e533a656fd8', '98a7a7f99e6a4b81a41b2fe34b9b6e14', '2676a7fd0fa64a4f8444df597bdfcbba'];

textures.forEach(async (texture) => {
  let imgPath = path.join(__dirname, `../unzip-avws/texture/${texture}.txt`);
  let imgStr = fs.readFileSync(imgPath, 'utf8');
  let reg = new RegExp(`\\[\\[origin\\]\\]/v1/assetLibrary/Asset_Scene/asset/${texture}/png/picture`, 'g');
  data.match(reg);
  data = data.replace(reg, imgStr);
});

fs.writeFileSync(path.join(__dirname, './setting.json'), data, (res) => {
  console.log('OK');
});
