var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./build/js'))
});


gulp.task('watch', function(){
	return gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);