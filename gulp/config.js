module.exports = {
  paths : {
    project : './',
    css : {
      root : './assets/styles',
      all  : './assets/styles/**/*.scss',
      dist : './dist/styles'
    },
    js : {
      root  : './assets/scripts',
      all   : './assets/scripts/**/*.js',
      bower : [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'
      ],
      dist  : './dist/scripts'
    },
    images : {
      root : './assets/images',
      all  : './assets/images/**/*.*',
      dist : './dist/images'
    }
  },
  names : {
    css : 'main.css',
    js  : 'main.min.js',
  },
  devUrl : 'project-name.dev'
};