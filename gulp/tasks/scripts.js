var gulp          = require('gulp'),
    config        = require('../config'),
    plumber       = require('gulp-plumber');
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    gutil         = require('gulp-util'),
    checkFilesize = require("gulp-check-filesize"),
    jshint        = require('gulp-jshint');

gulp.task('scripts', function() {

    var sourceJS = config.paths.js.bower;
    sourceJS.push( config.paths.js.all );
    
    gulp.src( sourceJS, { base : config.paths.project } )
        .pipe(plumber({
            errorHandler: function (err) {  
                gutil.beep();
                console.log(err.toString());
                this.emit('end');
            }
        }))
        .pipe(concat(config.names.js))
        .pipe(jshint())
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.js.dist))
        .pipe(checkFilesize({
            fileSizeLimit : 16384,
            enableGzip    : true
        }));

});