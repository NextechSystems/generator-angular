'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createComponentFiles = function createComponentFiles() {
    var basePath = this.cameledName;
    this.appTemplate('component', path.join(basePath, this.cameledName) + '.component');
    this.appTemplate('controller', path.join(basePath, this.cameledName) + '.controller');
    this.appTemplate('spec/controller', path.join(basePath, this.cameledName) + '.spec');
    this.htmlTemplate('../common/app/views/view.html', path.join(basePath, this.cameledName) + '.html');
};
