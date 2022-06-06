/// Knockout QuickMap plugin v1.0.0
/// (c) 2015-2018 CubeCoders Limited - http://cubecoders.com
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout"), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `quickmap` property
		factory(ko, ko.quickmap = {});
	}
}(function (ko, exports) {
	function mapObject(vm, data)
    {
        if (data === null || data === undefined) { return; }

        var vmKeys = Object.keys(vm);
        for (var key of Object.keys(data)) {
            var value = data[key];

            if (/^\/Date\((\d+)\)\/$/.test(value)) {
                value = parseDate(value);
            }

            if (typeof vm[key] === "function") {
                if (ko.isWritableObservable(vm[key]))
                {
                    vm[key](value);
                }
            }
            else if (typeof vm[key] !== "undefined" || vmKeys.contains(key)) {
                vm[key] = value;
            }
        }
    }

    exports.map = mapObject;

    exports.to = function (fn, data, asObservable, perObject) {
        if (data === null) { return null; }
        if (data === undefined) { throw new Error("Tried to map an undefined object."); }
        if (data.constructor === Array) {
            var result = asObservable ? ko.observableArray() : [];
            for (var el of data) {
                var newObj = new fn();
                mapObject(newObj, el);
                mapObject(newObj, perObject);
                result.push(newObj);
            }
            return result;
        }
        else {
            var obj = new fn();
            mapObject(obj, data, true);
            mapObject(obj, perObject);
            return obj;
        }
    };
}));