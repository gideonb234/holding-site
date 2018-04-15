var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    return gulp.src('styles/main.scss')
        .pipe(sassGlob())
        .pipe(sass()).pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles']);

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', ['styles']);
});
