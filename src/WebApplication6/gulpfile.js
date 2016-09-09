/// <binding BeforeBuild='build' Clean='clean' ProjectOpened='build' />
var gulp = require("gulp");

gulp.task('build', function (cb) {
    console.log('BUILDING!!!!!!!!!!!!!!!!!!!!');
    return cb;
});
