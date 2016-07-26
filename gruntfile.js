module.exports = function (grunt) {
    'use strict';

    function taskCliVersion() {
        grunt.log.writeln('Current stache-cli version: ' + grunt.file.readJSON('package.json').version);
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

    // Register our tasks
    grunt.registerTask(
        'cliversion',
        'Displays the current installed cli version',
        taskCliVersion
    );

    grunt.registerTask(
        'deploy',
        'Deploys the current project',
        [
            'cliversion',
            'shell:deploy'
        ]
    );

    grunt.registerTask(
        'copyBuild',
        'Copies the results of a Travis-CI build to the deploy branch',
        [
            'cliversion',
            'shell:copyBuild'
        ]
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

    // Load necessary modules
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    // Configure necessary modules
    grunt.config.init({
        shell: {
            options: {
                execOptions: {
                    cwd: grunt.option('cwd'),
                    stdout: true
                }
            },
            copyBuild: 'bash ' + grunt.option('cli') + 'scripts/copy-build.sh',
            deploy: 'bash ' + grunt.option('cli') + 'scripts/deploy.sh'
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
};
