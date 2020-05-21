const gulp = require('gulp');
const config = require('../package.json').config;
const fileinclude = require('gulp-file-include');
 
gulp.task('html', () => {
  return gulp.src(config.src.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.dist.html));
});
 
gulp.task('html:watch', () => {
  gulp.watch('src/**/*.html', gulp.parallel('html'));
});