"use strict";
var handlebars = require("handlebars");
var jdistsUtil = require("jdists-util");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = handlebars.compile(content);
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data, true);
    }
    var extend = null;
    if (attrs.extend) {
        extend = jdistsUtil.buildFunction(String(scope.execImport(attrs.extend)), 'handlebars');
        extend(handlebars);
    }
    return render(data);
});
