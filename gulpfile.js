var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// task para o sass
gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'))
});

// task para o watch
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

// task default gulp
gulp.task('default', gulp.series('watch'));
