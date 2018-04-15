var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlobal = require('gulp-sass-glob');

gulp.task('styles', function() {
    return gulp.src('styles/main.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('style.css'));
});

gulp.task('default', ['styles']);
