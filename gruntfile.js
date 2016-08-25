module.exports = function (grunt) {
  var environment,
      merge;

  merge = require('merge');
  environment = process.env;

  function addConfigEnvironmentVariables() {
    var config,
        filePath;

    filePath = grunt.option('config');
    config = {};

    if (filePath && grunt.file.exists(filePath)) {
      config = grunt.file.readYAML(filePath);
    }

    environment = merge.recursive(true, process.env, config.env || {});
  }

  function taskCliVersion() {
    grunt.log.writeln('Current stache-cli version: ' + grunt.file.readJSON('package.json').version);
  }

  function taskCommitBuild() {
    addConfigEnvironmentVariables();
    grunt.config('exec.commitBuild.options.env', environment);
    grunt.task.run('exec:commitBuild');
  }

  function taskDeploy() {
    addConfigEnvironmentVariables();
    grunt.config('exec.deploy.options.env', environment);
    grunt.task.run('cliversion');
    grunt.task.run('exec:deploy');
  }

  function taskFixIgnore() {
    var dir = grunt.config('boilerplateDest') + '/';
    grunt.file.copy(dir + '.npmignore', dir + '.gitignore');
    grunt.file.delete(dir + '.npmignore', { force: true });
  }

  function taskNew(dir) {
    dir = grunt.option('cwd') + dir;
    if (!dir) {
      grunt.fail.fatal('Please specify a folder.');
    } else if (dir.indexOf('.') === -1 && grunt.file.exists(dir)) {
      grunt.fail.fatal('The folder "' + dir + '" must not exist.');
    } else {
      grunt.config('boilerplateDest', dir);
      grunt.task.run('copy:boilerplate');
      grunt.task.run('fixIgnore');
    }
  }

  // Load necessary modules
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  // Register our tasks
  grunt.registerTask(
    'cliversion',
    'Displays the current installed cli version',
    taskCliVersion
  );

  grunt.registerTask(
    'deploy',
    'Deploys the current project',
    taskDeploy
  );

  grunt.registerTask(
    'commitBuild',
    'Copies the results of a Travis-CI build to the deploy branch',
    taskCommitBuild
  );

  grunt.registerTask(
    'fixIgnore',
    'Copies the npmignore file to a gitignore',
    taskFixIgnore
  );

  grunt.registerTask(
    'new',
    'Create a new site using the STACHE boilerplate.',
    taskNew
  );

  // Configure necessary modules
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
    },
    exec: {
      commitBuild: {
        command: 'bash ' + grunt.option('cli') + 'scripts/commit-build.sh',
        cwd: grunt.option('cwd')
      },
      deploy: {
        command: 'bash ' + grunt.option('cli') + 'scripts/deploy.sh',
        cwd: grunt.option('cwd')
      }
    }
  });
};
