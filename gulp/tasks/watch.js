var config      = require('../config'),
    gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init(['./dist/**/*.*'], {
        proxy: config.paths.devUrl
    });

	gulp.watch(config.paths.css.all, ['styles']);
	gulp.watch(config.paths.js.all, ['scripts']);
	gulp.watch(config.paths.images.all, ['images']);

});

