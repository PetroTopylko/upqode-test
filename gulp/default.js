const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');

gulp.task('default', () => {
    runSequence(
        'build', 
        'server', 
        gulp.parallel(
            'sass:watch', 
            'js:watch', 
            'html:watch', 
            'fonts:watch', 
            'img:watch', 
            'libs:watch')
    );
  });