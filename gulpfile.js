var gulp = require('gulp');

//var eslint = require('gulp-eslint');
//var rename = require('gulp-rename');
//var uglify = require('gulp-uglify');
//var cssmin = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('scripts', function() {
    gulp.src('./app/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('css-min', function () {
    gulp.src('./app/*.css')
        .pipe(cssmin())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-html', function() {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {

    gulp.watch("*.html").on('change', reload);
});

//default task
gulp.task('default', ['scripts', 'css-min', 'copy-html', 'browser-sync']);
