const path = require('path');
const fs = require('fs');

let data = fs.readFileSync(path.join(__dirname, './settings_old.json'), 'utf8');

let textures = ['5f2bfd3d91cf4d1694a716f17e8a6b13', '51c62b54fb234c99b2ea6e533a656fd8', '98a7a7f99e6a4b81a41b2fe34b9b6e14', '2676a7fd0fa64a4f8444df597bdfcbba'];

let a = 'ababacad3';
console.log(a.replace('a', 'o')); // replace no change string
console.log(a);

// while (condition) {

// }
