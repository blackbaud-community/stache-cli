
/*jslint node: true, nomen: true, plusplus: true */
'use strict';

module.exports = function (grunt) {

  grunt.config.init({
    copy: {
      boilerplate: {
        files: [
          {
            dot: true,
            expand: true,
            cwd: 'stache-boilerplate/',
            src: '**',
            dest: '<%= boilerplateDest %>'
          }
        ]
      }
    }
  });
  
  grunt.registerTask('fixIgnore', function() {
    var dir = grunt.config('boilerplateDest') + '\\';
    grunt.file.copy(dir + '.npmignore', dir + '.gitignore');
    grunt.file.delete(dir + '.npmignore', { force: true });    
  });
  
  grunt.registerTask(
    'new',
    'Create a new site using the STACHE boilerplate.',
    function(dir) {
      dir = grunt.option('cwd') + dir;
      if (!dir) {
        grunt.fail.fatal('Please specify a folder.');
      } else if (dir.indexOf('.') === -1 && grunt.file.exists(dir)) {
        grunt.fail.fatal('The folder "' + dir + '" must not exist.')
      } else {
        grunt.config('boilerplateDest', dir);
        grunt.task.run('copy:boilerplate');
        grunt.task.run('fixIgnore');
      }
    }
  );
  
  grunt.registerTask('default', function() {
    grunt.fail.warn('stache-cli only supports "new" task.');
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');
    
};