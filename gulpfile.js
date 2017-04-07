var gulp = require('gulp');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var gzip = require('gulp-gzip');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var open = require('gulp-open');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var watch = require('gulp-watch');

//demo task
gulp.task('hello', function () {
    console.log('hello sagar');
});

// gulp sass development task
gulp.task('sass:development', function () {
    gulp.src(['./sass/*.scss', './sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({
            keepSpecialComments: 0,
            rebase: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

gulp.task('connect:html', function () {
    gulp.src(['./*.html', './**/*.html', './**/**/*.html'])
        .pipe(connect.reload());
});
gulp.task('connect:js', function () {
    gulp.src(['./*.js', './js/*.js', './js/**/*.js'])
        .pipe(connect.reload());
});

// gulp copy tasks
gulp.task('copy:img', function () {
    return gulp.src("./img/**")
        .pipe(gulpCopy("./production/"));
});

gulp.task('copy:fonts', function () {
    return gulp.src("./fonts/**")
        .pipe(gulpCopy("./production/"));
});

// gulp watch tasks
gulp.task('watch:all', function () {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
    gulp.src(__filename)
        .pipe(open({
            uri: 'http://localhost:8000'
        }));

    gulp.watch(['./*.html', './**/*.html', './**/**/*.html', './*.js', './js/*.js', './js/**/*.js'], ['connect:html', 'connect:js']);
    gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass:development']);
});

// create a default task and just log a message
gulp.task('default', ["watch:all"]);
gulp.task('copy', ["copy:img", "copy:fonts"]);