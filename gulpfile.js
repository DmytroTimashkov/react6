const { src, dest, parallel } = require('gulp');

const copyFile = (done) => {
    src('dist/scss/index.scss').pipe(dest('build/styles'));
    src('dist/pages/*.html').pipe(dest('build/pages'));

    done()
};
const scssFile = (done) => {
  src('dist/scss/index.scss').pipe(dest('build/styles'));
  done()
};
const readyFile = (done) => {
  console.log('ready');

  done();
};
const htmlFile = (done) => {
  src('dist/scss/index.scss').pipe(dest('build/styles'));
  done()
};


exports.default = parallel(readyFile,copyFile);
exports.SASS = scssFile;
exports.HTML = htmlFile;
