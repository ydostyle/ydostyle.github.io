var gulp = require('gulp');
// 删除文件用的插件
var del = require('del');
// 让gulp按顺序执行
var gulpSequence = require('gulp-sequence');
// 引入less
var less = require('gulp-less');

// 默认任务
gulp.task('default', ['sequence',"css"], function () {

});
// 流程控制
gulp.task('sequence', gulpSequence('clear', 'watch'));

// 清空项目文件夹
gulp.task('clear', function (cb) {
    // 删除dist目录下面的所有文件和文件夹
    del(['css']).then(function (paths) {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        return cb();
    })

});

// 监听代码变化
gulp.task('watch', function (cb) {
    gulp.watch('less/*.less', ['css']);
    return cb();
});

// 处理css的任务
gulp.task('css', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});