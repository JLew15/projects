var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve',function() {
    browserSync.init({
        server: {
            baseDir: "./Google"
        }
    });

    gulp.watch("*.html").on("change", reload);
});
