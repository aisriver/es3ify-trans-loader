; (function () {
    "use strict"
    var _global;
    var es3ify = require("es3ify");

    var es3ifyTransLoader = function (code) {
        if (typeof this.cacheable === 'function') { this.cacheable(); }
        return es3ify.transform(code);
    }
    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = es3ifyTransLoader;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return es3ifyTransLoader; });
    } else {
        !('es3ifyTransLoader' in _global) && (_global.es3ifyTransLoader = es3ifyTransLoader);
    }
}());