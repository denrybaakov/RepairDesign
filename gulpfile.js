const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

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
gulp.task('mincss', () => {
  return gulp.src('./css/*.css')
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCss())
    .pipe(gulp.dest("./css/min"));
});