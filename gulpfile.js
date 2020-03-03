const gulp = require('gulp');
const browserSync = require('browser-sync').create();


const fileCss = gulp.src(['./css/*.css', '!./css/*.min.css']);
const fileMinCss = gulp.src('./css/*.min.css');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('hello', done => {
  console.log('hello');
  done();
});


// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});


// min-css 
gulp.task('mincss', done => {

  fileCss.pipe(rename({ suffix: ".min" })).pipe(cleanCss()).pipe(gulp.dest("./css/min"));
  fileMinCss.pipe(gulp.dest("./css/min"));
  del(['./css/*.min.css']);

  done();
});