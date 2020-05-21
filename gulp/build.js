const gulp = require('gulp');
const del = require('del');
const runSequence = require('gulp4-run-sequence');

gulp.task('clean', async () => {
    return del.sync('dist');
  });

gulp.task('build', () => {
    runSequence(
        'clean',
        gulp.parallel(
            'sass', 
            'html', 
            'js', 
            'fonts', 
            'img:watch', 
            'libs'
        )        
    );
  });