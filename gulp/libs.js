const gulp = require('gulp');
var importCss = require('gulp-import-css');
const config = require('../package.json').config;
 
gulp.task('libs', async () => {
  gulp.src(config.libs.css)
    .pipe(importCss())
    .pipe(gulp.dest(config.dist.css));
  gulp.src(config.libs.js)
    .pipe(gulp.dest(config.dist.js));
});
 
gulp.task('libs:watch', () => {
  gulp.watch(config.libs.css, gulp.parallel('libs'));
  gulp.watch(config.libs.js, gulp.parallel('libs'));
});