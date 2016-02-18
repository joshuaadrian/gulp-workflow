// This only runs once on the initialization of Gulp
var gulp        = require('gulp'),
	config      = require('../config')
	runSequence = require('gulp-run-sequence'),
	clean       = require('gulp-clean');

// Start The Init Sequence
gulp.task('init', function(cb) {
	console.log('☯ Happy Coding ☯');
	runSequence('clean', 'build', 'watch', cb);
});

// Delete the Current Dist Folder
gulp.task('clean', function() {
	return gulp.src('./dist', {read: false, force:true})
		.pipe(clean());
});

// Process All Assets and Create New Dist Folder
gulp.task('build', ['styles', 'scripts', 'images']);