var gulp = require('gulp');
var browserSync = require('browser-sync');
var browser = browserSync.create();

gulp.task('start', function () {
	browser.init({
		server: './app/',
		port: 4030
	});
});

