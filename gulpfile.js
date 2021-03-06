'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    libsFoundation: require('./gulp/paths/js.libs.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js'),
    appmodal: require('./gulp/paths/appmodal.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  // 'clean',
  $.gulp.parallel(
    'sass',
    'sass-vendor',
    'sass-fonts',
    'sass:user',
    // 'pug',
    'pug:one',
    'js:foundation',
    // 'js:libs',
    'js:process',
    'js:process.modal',
    'copy:image',
    'copy:picture',
    'copy:fonts',
    // 'copy:modal.js',
    // 'css:foundation',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
