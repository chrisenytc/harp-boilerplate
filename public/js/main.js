/*
 * harp-boilerplate
 * https://github.com/chrisenytc/harp-boilerplate
 *
 * Copyright (c) 2015, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

window.harpBoilerplate = function harpBoilerplate(msg) {
	this.msg = msg;
}

harpBoilerplate.prototype.showMessage = function() {
	console.log(this.msg);
};

