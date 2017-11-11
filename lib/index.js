"use strict";
var handlebars = require("handlebars");
var jdistsUtil = require("jdists-util");
var jsyaml = require("js-yaml");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = handlebars.compile(content);
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data);
        if (typeof data === 'string') {
            data = jsyaml.safeLoad(data);
        }
    }
    var extend = null;
    if (attrs.extend) {
        extend = jdistsUtil.buildFunction(scope.execImport(attrs.extend), 'handlebars');
        extend(handlebars);
    }
    if (jdistsUtil.isNo(attrs.rework)) {
        return render(data);
    }
    else {
        return scope.compile(render(data));
    }
});
