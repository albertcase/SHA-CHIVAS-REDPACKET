var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    inject = require('gulp-inject'),
    gulpCopy = require('gulp-file-copy'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create();

var path = {
  all:['open.html'],
  css:['css/screen.css'],
  js:['js/*.js'],
  jshome:['./js/lib/zepto.min.js','./js/lib/pre-loader.js','./js/rem.js','./js/controller.js','./js/common.js','./js/form.js'],
  jscoupon:['./js/lib/zepto.min.js','./js/rem.js','./js/common.js','./js/coupon.js'],
  images:['images/*.*']
};

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            startPath: '/index.html'
        }
    });
});

// uglify all js
gulp.task('jshome', function() {
    return gulp.src(path.jshome)
        // Pass in options to the task
        .pipe(concat('widget-home.js'))
        .pipe(gulp.dest('./js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('jscoupon', function() {
    return gulp.src(path.jscoupon)
        // Pass in options to the task
        .pipe(concat('widget-coupon.js'))
        .pipe(gulp.dest('./js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('css', function() {
    return gulp.src(path.css)
        // Pass in options to the task
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minify())
        .pipe(gulp.dest('./css'));
});

gulp.task('index', function () {
    var target = gulp.src('./tpl-redpacket/home.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./js/widget-home.js', './css/all.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('/site/home.tpl.php'))
        .pipe(gulp.dest('./template/'));
});

gulp.task('coupon', function () {
    var target = gulp.src('./tpl-redpacket/coupon.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./js/widget-coupon.js', './css/all.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(rename('/site/coupon.tpl.php'))
        .pipe(gulp.dest('./template/'));
});


// Default
gulp.task('default', ['browser-sync']);
//compile
gulp.task('chome',['jshome','css','index']);
gulp.task('ccoupon',['jscoupon','css','coupon']);

