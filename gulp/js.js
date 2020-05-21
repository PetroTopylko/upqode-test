const gulp = require('gulp');
const config = require('../package.json').config;
const include = require('gulp-include')
 
gulp.task('js', () => {
  return gulp.src(config.src.js)
    .pipe(include({
        extensions: 'js',
        hardFail: true,
    })).on('error', console.log)
    .pipe(gulp.dest(config.dist.js));
});
 
gulp.task('js:watch', () => {
  gulp.watch([config.src.js, 'src/js/components/**/*.*'], gulp.parallel('js')); 
});