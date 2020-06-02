var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// compilar o SASS
gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Using gulp-sass
        .pipe(gulp.dest('css'))
});

// mover JS para /js
/* gulp.task('js', function() {
    return gulp.src("/node_modules/jquery/dist/jquery.min.js", "/node_modules/popper.js/dist/popper.min.js", "/node_modules/bootstrap/dist/js/bootstrap.min.js")
            .pipe(gulp.dest('js'))
}); */

// escutar pastas com SCSS
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

// task default gulp
gulp.task('default', gulp.series('sass', 'watch'));
