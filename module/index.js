'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var path = require('path');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createModuleFiles = function createModuleFiles() {
    var basePath = this.cameledName;
    this.appTemplate('module', path.join(basePath, this.cameledName) + '.module');
    this.appTemplate('config', path.join(basePath, this.cameledName) + '.config');
};
