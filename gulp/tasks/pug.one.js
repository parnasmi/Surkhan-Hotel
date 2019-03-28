'use strict';
const fs = require('fs')

module.exports = function() {
  $.gulp.task('pug:one', function() {
    let locals = require('../../content.json')

    return $.gulp.src($.config.src + '/template/pages/index.pug')
      .pipe($.gp.pug({ 
        pretty: true,
        locals : locals
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gp.prettify({
        indent_inner_html: true,
        indent_size: 2
      }))
      .pipe($.gulp.dest($.config.root));
  });
};
