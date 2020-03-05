// const gulp = require('gulp');
const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


const fileCss = src(['./css/*.css', '!./css/*.min.css']);
const fileMinCss = src('./css/*.min.css');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');



// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./css/**/*.css", minCss);
  watch("./js/*.js").on('change', browserSync.reload);
}

// sass
function serveSass() {
  return src("./sass/**/*.sass")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

// min-css 
function minCss(done) {
  fileCss.pipe(rename({ suffix: ".min" })).pipe(cleanCss()).pipe(dest("./css/min"));
  fileMinCss.pipe(dest("./css/min"));
  del(['./css/*.min.css']);

  done();
}

exports.serve = bs;
exports.minCss = minCss;


