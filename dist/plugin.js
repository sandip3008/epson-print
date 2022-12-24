var capacitorepson = (function (exports, core) {
    'use strict';

    const epson = core.registerPlugin('epson', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.epsonWeb()),
    });

    class epsonWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        epsonWeb: epsonWeb
    });

    exports.epson = epson;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
