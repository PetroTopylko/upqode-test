const gulp = require('gulp');
const sass = require('gulp-sass');
const config = require('../package.json').config;
 
gulp.task('sass', () => {
  return gulp.src(config.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dist.css));
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./src/sass/**/*.*', gulp.parallel('sass'));
});