var config      = require('../config'),             // Include config for all needed vars
    gulp        = require('gulp'),                  // Nothing works without Gulp
    watch       = require('gulp-watch'),            // Watches for changes to files and triggers tasks
    browserSync = require('browser-sync').create(); // Inserts changes made into browser without reloading

gulp.task('watch', function() {

	// Only insert updated content from dist dir
	browserSync.init(['./dist/**/*.*'], {
        proxy: config.paths.devUrl
    });

	gulp.watch(config.paths.css.all, ['styles']);    // Watch for changes to css dir
	gulp.watch(config.paths.js.all, ['scripts']);    // Watch for changes to js dir
	gulp.watch(config.paths.images.all, ['images']); // Watch for changes to img dir

});

