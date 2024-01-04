const path = require("path");

console.log(path.sep);
console.log(process.env.path);
console.log(path.delimiter);

const filePath = '/public_html/home/index.html';

const currentFilePath = __filename;
console.log('currentFilePath -->',currentFilePath);

let basename = path.basename(currentFilePath);
console.log('basename -->',basename);

let basenameWithoutExt = path.basename(currentFilePath,'.js');
console.log('basenamewithoutExt -->',basenameWithoutExt);

let dirname = path.dirname(currentFilePath);
console.log('dirname -->',dirname);

console.log('ext1 --> ', path.extname(currentFilePath));
console.log('ext2 --> ', path.extname('index.md.js'));

let pathTofile = path.format({
dir: '/public_html/home',
base: 'index.html'
});
console.log('pathTofile -->', pathTofile);
/*
Absolute path  for windows c:\\, D:\\
for mac /(all of us called as root directries);
*/
// ya to absolute path hoga ya relative path
console.log('IsAbsolute -->', path.isAbsolute(currentFilePath));
console.log('IsAbsolute -->', path.isAbsolute('/index.js'));
console.log('IsAbsolute  -->', path.isAbsolute('../index.js'));

let pathToDir = path.join('/home', 'js','dist', 'index.js');
console.log('pathToDir -->', pathToDir);

// current file  ko break

console.log('parse -->', path.parse(currentFilePath));
console.log('relative path -->', path.relative('/home/user/config', '/home/user/js/'));

console.log('resolve -->', path.resolve());

console.log('normalize -->', path.normalize('//home//user//js//index.js'));