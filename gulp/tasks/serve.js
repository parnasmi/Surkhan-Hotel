'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      port: 9004,
      server: $.config.root,
      notify: false
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
