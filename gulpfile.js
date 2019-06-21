// Requirements

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefix', function() {
    return gulp.src('dist/css/main.css')
    .pipe(autoprefixer({
        browsers:['last 2 versions']
    }))
    .pipe(gulp.dest('dist/css'));
});