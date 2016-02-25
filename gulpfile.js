var gulp = require('gulp'),
	bower = require('gulp-bower'),
	wiredep = require('wiredep').stream;

var config = {
	bowerDir: './bower_components'
}

gulp.task('wiredep', function () {
  gulp.src('app/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app'));
});

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(config.bowerDir))
});