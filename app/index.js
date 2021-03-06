'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var AsdfwebappGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exquisite Asdfwebapp generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];
    done();

    /*
    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      done();
    }.bind(this));
    */
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/bower_components');
      this.dest.mkdir('app/images');
      this.dest.mkdir('app/partials');
      this.dest.mkdir('app/scripts');
      this.dest.mkdir('app/styles');
      this.dest.mkdir('app/vendor');

      this.dest.mkdir('test');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('gulpfile.js', 'gulpfile.js');

      this.src.copy('styles/main.scss', 'app/styles/main.scss');
      this.src.copy('styles/admin-2.css', 'app/styles/admin-2.css');

      this.src.copy('index.html', 'app/index.html');
      this.src.copy('partials/index.html', 'app/partials/index.html');
      this.src.copy('partials/header.html', 'app/partials/header.html');
      this.src.copy('partials/footer.html', 'app/partials/footer.html');

      this.src.copy('scripts/app.js', 'app/scripts/app.js');
      this.src.copy('scripts/app-controller.js', 'app/scripts/app-controller.js');
      this.src.copy('scripts/app-filter.js', 'app/scripts/app-filter.js');
      this.src.copy('scripts/app-service.js', 'app/scripts/app-service.js');
      this.src.copy('scripts/app-directive.js', 'app/scripts/app-directive.js');

      this.src.copy('vendor/highcharts.js', 'app/vendor/highcharts.js');
      this.src.copy('vendor/av.js', 'app/vendor/av.js');

    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('bowerrc', '.bowerrc');
      this.src.copy('gitignore', '.gitignore');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = AsdfwebappGenerator;
