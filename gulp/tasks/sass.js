'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.config.src + '/style/style.scss')
      .pipe($.gp.sourcemaps.init())
      // .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.sass({
        outputStyle: 'expanded'
      })).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      // .pipe($.gp.sourcemaps.write())
      // .pipe($.gp.purifycss([$.config.root + '/assets/js/*.js', $.config.root + '/*.html']))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
