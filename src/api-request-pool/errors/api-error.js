"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var request_error_1 = require("./request-error");
var ApiError = (function (_super) {
    __extends(ApiError, _super);
    function ApiError(apiError) {
        var _this = _super.call(this, 'API_ERROR') || this;
        _this.apiError = apiError;
        return _this;
    }
    return ApiError;
}(request_error_1["default"]));
exports["default"] = ApiError;
