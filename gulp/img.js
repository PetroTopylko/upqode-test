const gulp = require('gulp');
const config = require('../package.json').config;
 
gulp.task('img', async () => {
  gulp.src(config.src.img)
    .pipe(gulp.dest(config.dist.img));
});
 
gulp.task('img:watch', async () => {
  gulp.watch(config.src.img, gulp.parallel('img')); 
});