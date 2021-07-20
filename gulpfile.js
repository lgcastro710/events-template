const gulp = require('gulp');
const sass = require('gulp-sass');
const fileinclude = require("gulp-file-include");
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

const include = () =>
  gulp
    .src(["./pages/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));

function watch() {
  browserSync.init({
    server:{
      baseDir: './'
    }
  })

  gulp.watch("./components/*.html", include);
  gulp.watch("./pages/*.html", include);
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch
exports.include = include