module.exports = function (grunt) {
  var environment,
      exec,
      merge,
      path;

  path = require('path');
  exec = require('child_process').execSync;
  merge = require('merge');
  environment = process.env;

  function addConfigEnvironmentVariables() {
    var config,
        env,
        filePath,
        k;

    filePath = grunt.option('config');
    config = grunt.file.readYAML('stache.deploy.yml');
    env = [];

    // Merge deployment config.
    if (filePath && grunt.file.exists(filePath)) {
      config = merge.recursive(true, config, grunt.file.readYAML(filePath));
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

  function taskRelease(type) {
    type = type || 'patch';
    exec('grunt --base ' + grunt.option('cwd') + ' bump:' + type, {
      cwd: path.resolve(),
      stdio: 'inherit'
    });
  }

  // Load necessary modules
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bump');
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

  grunt.registerTask(
    'release',
    'Create a new release branch and commit to upstream.',
    taskRelease
  );

  // Configure necessary modules
  grunt.config.init({
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        metadata: '',
        regExp: false
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
    },
    exec: {
      commitBuild: {
        command: 'bash ' + grunt.option('cli') + 'scripts/commit-build.sh'
      },
      deploy: {
        command: 'bash ' + grunt.option('cli') + 'scripts/deploy.sh',
      }
    }
  });
};
