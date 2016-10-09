var gulp = require('gulp');
// ɾ���ļ��õĲ��
var del = require('del');
// ��gulp��˳��ִ��
var gulpSequence = require('gulp-sequence');
// ����less
var less = require('gulp-less');

// Ĭ������
gulp.task('default', ['sequence',"css"], function () {

});
// ���̿���
gulp.task('sequence', gulpSequence('clear', 'watch'));

// �����Ŀ�ļ���
gulp.task('clear', function (cb) {
    // ɾ��distĿ¼����������ļ����ļ���
    del(['css']).then(function (paths) {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        return cb();
    })

});

// ��������仯
gulp.task('watch', function (cb) {
    gulp.watch('less/*.less', ['css']);
    return cb();
});

// ����css������
gulp.task('css', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});