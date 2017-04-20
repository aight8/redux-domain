define(["require", "exports", "reselect"], function (require, exports, reselect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(contextualInputSelectors, combiner) {
        return function (target, key, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (props) {
                if (!(this.__selectors instanceof Object)) {
                    this.__selectors = {};
                }
                if (!this.__selectors[key]) {
                    let inputSelectorsOriginal = contextualInputSelectors.map(contextualInputSelector => {
                        return (state, props) => {
                            return contextualInputSelector.call(this, props);
                        };
                    });
                    this.__selectors[key] = reselect_1.createSelector(inputSelectorsOriginal, combiner);
                }
                return this.__selectors[key](null, props);
            };
            return descriptor;
        };
    }
    exports.default = default_1;
});
