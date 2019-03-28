'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series(['js:process','js:process.modal']));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series(['sass','sass:user']));
    // $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug:one'));
    $.gulp.watch('./source/images/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/pictures/*.*', $.gulp.series('copy:picture'));
  });
};
