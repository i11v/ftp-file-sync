'use strict';

var Gaze = require('gaze').Gaze;

var Watcher = function (pattern, callback) {
  this.pattern = pattern;
  this.callback = callback;
  this.gaze = new Gaze(pattern);

  this.init();

  return this;
};

Watcher.prototype.init = function () {
  var callback = this.callback;

  this.gaze.on('all', function (event, filepath) {
    callback(event, filepath);
  });
};

module.exports = function watcher(pattern, done) {
  return new Watcher(pattern, done);
};

module.exports.Watcher = Watcher;
