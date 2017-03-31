module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
       js: {
          files: ['js/**/*.js*'],
          tasks: ['browserify']
        },
        css: {
          files: ['style/**/*.less'],
          tasks: ['less']
        }
      },
    browserify: {
       dist: {
          options: {
            transform: [['babelify', {presets: ['es2015', 'react']}]]
          }, 
            src: 'index.js',
            dest: 'dest/bundle.js',
          }
      },
   less: {
      dev: {
        options: {
          cleancss: true
        },
        files: {
          'dest/bundle.css': ['style/**/*.less']
        }
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('style', ['less']);
  grunt.registerTask('default', ['browserify','less', 'watch']);
};