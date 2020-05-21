const gulp = require('gulp');
const config = require('../package.json').config;
 
gulp.task('fonts', () => {
  return gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dist.fonts));
});
 
gulp.task('fonts:watch', () => {
  gulp.watch(config.src.fonts, gulp.parallel('fonts'));
});