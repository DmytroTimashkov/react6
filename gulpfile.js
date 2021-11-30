const { watch ,parallel} = require('gulp');

const changeAppStylesFile = (done) => {
    console.log('Ой, файл index.scss изменился');

    done();
};
const changeAppHTMLFile = (done) => {
  console.log('Ой, один из файлов HTML изменился');

  done();
};

const checkFileStructure = (done) => {
    console.log('Изменилась структура файлов');

    done();
};

const watchersSCSS = () => {

    watch('dist/scss/index.scss', { events: 'change' }, changeAppStylesFile);


    watch('dist/scss/', { events: ['add', 'unlink'] }, checkFileStructure);
};
const watchersHTML = () => {

  watch('dist/pages/*.html', { events: 'change' }, changeAppHTMLFile);


  watch('dist/pages/', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.watchers = parallel(watchersSCSS,watchersHTML);