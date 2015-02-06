var gulp = require('gulp');
var ProjectHelper = require('project-helpers');

ProjectHelper.setup({
	debug : false,
	sourcePath : 'source/',
	componentsPath : 'source/components/',
	mainLessFile : 'main.less'
});

ProjectHelper.registerComponent('knockout');

gulp.task("default", function () {
	ProjectHelper.default();
});