var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    inject = require('gulp-inject'),
    gulpCopy = require('gulp-file-copy'),
    browserSync = require('browser-sync').create();

var path = {
  all:['open.html'],
  css:['css/*.css'],
  js:['js/*.js'],
  images:['images/*.*']
};
//copy the html
gulp.task('copy', function() {
    var start = path.all;
   return gulp.src(start)
        .pipe(gulp.dest('./dist', {
            start: start
        }));
});

// Copy all static images
gulp.task('images', function() {
    return gulp.src(path.images)
        // Pass in options to the task
        //.pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('./dist'));
});

// uglify all js
gulp.task('js', function() {
    return gulp.src(path.js)
        // Pass in options to the task
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function() {
    return gulp.src(path.css)
        // Pass in options to the task
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('index', function () {
    var target = gulp.src('./tpl-redpacket/open.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./dist/js/all.js', './dist/css/all.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dist'));
});


gulp.task('compile',['copy','js','images','css','index']);
//gulp.task('p2',['copy2','js2','images2','css2']);

// Default
//gulp.task('default', ['watch', 'browser-sync']);

