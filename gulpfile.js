var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');

gulp.task('post-css', function () {
    var processors = [
        autoprefixer({browsers: ['last 10 version']}),
    ];
    return gulp.src('./clock/src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./clock/dist'));
});
