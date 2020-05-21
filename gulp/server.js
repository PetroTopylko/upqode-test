const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', async () => {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        files: ['dist/**/*.*']
    });
});