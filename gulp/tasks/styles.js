var gulp          = require('gulp'),
    config        = require('../config'), // Relative to this file
    plumber       = require('gulp-plumber');
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    cssmin        = require('gulp-cssmin'),
    autoprefixer  = require('gulp-autoprefixer'),
    rename        = require('gulp-rename'),
    gutil         = require('gulp-util'),
    checkFilesize = require("gulp-check-filesize"),
    wiredep       = require('wiredep').stream,
    browserSync   = require('browser-sync').create(),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src(config.paths.css.all)
    .pipe(plumber({
        errorHandler: function (err) {  
            gutil.beep();
            console.log(err.toString());
            this.emit('end');
        }
    }))
    .pipe(wiredep())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(checkFilesize({
        fileSizeLimit : 16384,
        enableGzip    : true
    }))
    .pipe(rename(config.names.css))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.css.dist))
    .pipe(browserSync.stream());
});