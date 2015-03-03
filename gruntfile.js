
/*jslint node: true, nomen: true, plusplus: true */
'use strict';

module.exports = function (grunt) {

  grunt.config.init({
    copy: {
      boilerplate: {
        files: [
          {
            expand: true,
            cwd: 'boilerplate/',
            src: '**',
            dest: '<%= boilerplateDest %>'
          }
        ]
      }
    }
  });
  
  grunt.task.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask(
    'new',
    'Create a new site using the STACHE boilerplate.',
    function(dir) {
      if (!dir) {
        grunt.fail.fatal('Please specify a folder.');
      } else {
        dir = grunt.option('cwd') + dir;
        if (grunt.file.exists(dir)) {
          grunt.fail.fatal('The folder "' + dir + '" must not exist.')
        } else {
          grunt.config('boilerplateDest', dir);
          grunt.task.run('copy:boilerplate');
        }
      }
    }
  );
  
  grunt.registerTask('default', function() {
    grunt.fail.warn('stache-cli only supports "new" task.');
  });
    
};