var str = 'This is a /test/ string.';
var pattern = new RegExp(' /test/ ', 'g');
var matches = str.match(pattern);
console.log(matches);

let tt = '"textureURL": "[[origin]]/v1/assetLibrary/Asset_Scene/asset/5f2bfd3d91cf4d1694a716f17e8a6b13/png/picture"';
let a = '5f2bfd3d91cf4d1694a716f17e8a6b13';

let reg = new RegExp(`[[origin]]/v1/assetLibrary/Asset_Scene/asset/${a}/png/picture`, 'g');

// 中括号的匹配比较特殊
let r1 = new RegExp('\\[\\[origin\\]\\]/v1/assetLibrary/Asset_Scene/asset/' + a + '/png/picture', 'g');

let r2 = new RegExp(`\\[\\[origin\\]\\]/v1/assetLibrary/Asset_Scene/asset/${a}/png/picture`, 'g');

var b = tt.match(reg);
console.log(b);

var rr1 = tt.match(r1);
console.log(rr1);

var rr2 = tt.match(r2);
console.log(rr2);
