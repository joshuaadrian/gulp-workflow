var gulp     = require('gulp'),
	config   = require('../config'), // Relative to this file
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');
 
gulp.task('images', function () {
    return gulp.src(config.paths.images.all)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.paths.images.dist));
});