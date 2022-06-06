String.prototype.contains = function (contains) { return this.indexOf(contains) > -1; };
Array.prototype.contains = function (contains) { return this.indexOf(contains) > -1; };
String.prototype.isEmptyOrWhitespace = function () { return this.match(/^\s*$/); };
String.prototype.pad = function (size) {
    var s = String(this);
    if (typeof (size) !== "number") { size = 2; }

    while (s.length < size) { s = "0" + s; }
    return s;
};
Number.prototype.pad = String.prototype.pad;
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
if (!String.prototype.template) {
    String.prototype.template = function (obj) {
        return this.replace(/{{\$(.+?)}}/g, function (match, field) {
            return typeof obj[field] != 'undefined'
                ? obj[field]
                : match
                ;
        });
    };
}