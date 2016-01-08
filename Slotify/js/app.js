'use strict';

var MainView = require('./views/main');
var Me = require('./models/me');

var app = {
  init: function () {
    this.me = new Me();
    this.view = new MainView({
      models: this.me,
      el: document.body
    });
  }
};

window.onload = app.init();