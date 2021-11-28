const { src, dest, parallel } = require('gulp');

const copyFile = (done) => {
    src('dist/scss/index.scss').pipe(dest('build/styles'));
    src('dist/pages/*.html').pipe(dest('build/pages'));

    done()
};
const readyFile = (done) => {
  console.log('ready');

  done();
};

exports.default = parallel(readyFile,copyFile);
