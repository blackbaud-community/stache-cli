
/*jslint node: true, nomen: true, plusplus: true */
'use strict';

module.exports = function (grunt) {

  grunt.config.init({
    shell: {
      options: {
        execOptions: {
          cwd: grunt.option('cwd'),
          stdout: true
        }
      },
      prepare: {
        command: 'npm cache clean && npm install --production && npm dedupe'
      }
    },
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
    var dir = grunt.config('boilerplateDest') + '/';
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

  grunt.registerTask(
    'prepare',
    'Install the necessary requirements for Blackbaud Stache.',
    'shell:prepare'
  );

  grunt.registerTask(
    'update',
    'Updates local npm packages and blackbaud-stache-cli globally',
    'shell:update'
  );

  grunt.registerTask(
    'version',
    'Display the current installed version.',
    function() {
      grunt.log.writeln('Current stache-cli version: ' + grunt.file.readJSON('package.json').version);
  });

  grunt.registerTask('default', 'version');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

};
