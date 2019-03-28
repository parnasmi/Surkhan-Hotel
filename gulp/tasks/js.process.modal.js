'use strict';

module.exports = function() {
  $.gulp.task('js:process.modal', function() {
    return $.gulp.src($.path.appmodal)
      // .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('modal.js'))
      // .pipe($.gp.sourcemaps.write())
      // .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
