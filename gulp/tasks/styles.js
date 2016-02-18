var gulp          = require('gulp'),
    config        = require('../config'),
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
    // Handle Gulp errors like a champ
    .pipe(plumber({
        errorHandler: function (err) {  
            gutil.beep(); gutil.beep();  // Double beep when an error occurs
            console.log(err.toString()); // Output error to console
            this.emit('end');            // Emit 'end' so Gulp doesn't blow up during Watch
        }
    }))
    // Include Bower CSS into the main sass file
    .pipe(wiredep())
    // Start sourcemap of css
    .pipe(sourcemaps.init()) 
    // Compile SASS css source files
    .pipe(sass())
    // Create all browser css prefixes for needed selectors     
    .pipe(autoprefixer())
    // Make the css as small as possible  
    .pipe(cssmin())
    // Let's see how small/large the file has gotten    
    .pipe(checkFilesize({    
        fileSizeLimit : 16384, // Let's check to see if the size has gotten outta control
        enableGzip    : true // Let's see what the size will be when served up GZIP style
    }))
    // Rename the merged css files from the var set in the config file
    .pipe(rename(config.names.css))
    // Write out sourcemap of css
    .pipe(sourcemaps.write())
    // Move final processed file to the dest designated in the config file
    .pipe(gulp.dest(config.paths.css.dist))
    // Let Browser Sync know to inject new css
    .pipe(browserSync.stream());
});