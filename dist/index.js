module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 283);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/babel-runtime/helpers/typeof.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof3 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof4 = _interopRequireDefault2(_typeof3);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 17);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '1.2.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
module.exports = {
  create: $Object.create,
  getProto: $Object.getPrototypeOf,
  isEnum: {}.propertyIsEnumerable,
  getDesc: $Object.getOwnPropertyDescriptor,
  setDesc: $Object.defineProperty,
  setDescs: $Object.defineProperties,
  getKeys: $Object.keys,
  getNames: $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each: [].forEach
};

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(/*! ./$.shared */ 92)('wks'),
    uid = __webpack_require__(/*! ./$.uid */ 95),
    _Symbol = __webpack_require__(/*! ./$.global */ 7).Symbol;
module.exports = function (name) {
  return store[name] || (store[name] = _Symbol && _Symbol[name] || (_Symbol || uid)('Symbol.' + name));
};

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/axios/lib/utils.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bind = __webpack_require__(/*! ./helpers/bind */ 82);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if ((0, _typeof3.default)(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 177), __esModule: true };

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/assign.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 170), __esModule: true };

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/babel-runtime/core-js/promise.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 179), __esModule: true };

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./$.global */ 7),
    core = __webpack_require__(/*! ./$.core */ 1),
    ctx = __webpack_require__(/*! ./$.ctx */ 18),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      IS_WRAP = type & $export.W,
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
      key,
      own,
      out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && key in target;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(param) {
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/redux-saga/lib/internal/utils.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 30);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ 17);

var _iterator2 = _interopRequireDefault(_iterator);

var _typeof3 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof4 = _interopRequireDefault(_typeof3);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
};

exports.check = check;
exports.hasOwn = hasOwn;
exports.remove = remove;
exports.deferred = deferred;
exports.arrayOfDeffered = arrayOfDeffered;
exports.delay = delay;
exports.createMockTask = createMockTask;
exports.autoInc = autoInc;
exports.makeIterator = makeIterator;
exports.log = log;
exports.deprecate = deprecate;
exports.wrapSagaDispatch = wrapSagaDispatch;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var sym = exports.sym = function sym(id) {
  return '@@redux-saga/' + id;
};
var TASK = exports.TASK = sym('TASK');
var HELPER = exports.HELPER = sym('HELPER');
var MATCH = exports.MATCH = sym('MATCH');
var CANCEL = exports.CANCEL = sym('cancelPromise');
var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
var konst = exports.konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = exports.kTrue = konst(true);
var kFalse = exports.kFalse = konst(false);
var noop = exports.noop = function noop() {};
var ident = exports.ident = function ident(v) {
  return v;
};

var isDev = exports.isDev = process.env.NODE_ENV === 'development';

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = exports.is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  array: Array.isArray,
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (typeof pat === 'string' || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new _promise2.default(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new _promise2.default(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _defineProperty(_ref, TASK, true), _defineProperty(_ref, 'isRunning', function isRunning() {
    return running;
  }), _defineProperty(_ref, 'result', function result() {
    return _result;
  }), _defineProperty(_ref, 'error', function error() {
    return _error;
  }), _defineProperty(_ref, 'setRunning', function setRunning(b) {
    return running = b;
  }), _defineProperty(_ref, 'setResult', function setResult(r) {
    return _result = r;
  }), _defineProperty(_ref, 'setError', function setError(e) {
    return _error = e;
  }), _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = exports.uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof _symbol2.default !== 'undefined') {
    iterator[_iterator2.default] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (isDev) log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var internalErr = exports.internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

function wrapSagaDispatch(dispatch) {
  return function sagaDispatch(action) {
    var wrappedAction = (0, _defineProperty3.default)(action, SAGA_ACTION, { value: true });
    return dispatch(wrappedAction);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 10)))

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./$.is-object */ 33);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkGlobal = __webpack_require__(/*! ./_checkGlobal */ 241);

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = objectTypes[ false ? 'undefined' : (0, _typeof3.default)(exports)] && exports && !exports.nodeType ? exports : undefined;

/** Detect free variable `module`. */
var freeModule = objectTypes[ false ? 'undefined' : (0, _typeof3.default)(module)] && module && !module.nodeType ? module : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : (0, _typeof3.default)(global)) == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(objectTypes[typeof self === 'undefined' ? 'undefined' : (0, _typeof3.default)(self)] && self);

/** Detect free variable `window`. */
var freeWindow = checkGlobal(objectTypes[typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)] && window);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(objectTypes[(0, _typeof3.default)(undefined)] && undefined);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();

module.exports = root;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 65)(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ 44)))

/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/isFunction.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./isObject */ 40);

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array and weak map constructors,
  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

module.exports = isFunction;

/***/ }),
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/babel-runtime/core-js/symbol.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 181), __esModule: true };

/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/babel-runtime/core-js/array/from.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 166), __esModule: true };

/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 182), __esModule: true };

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(/*! ./$.a-function */ 49);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iterators.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/babel-runtime/core-js/json/stringify.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ 169), __esModule: true };

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./$.string-at */ 200)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./$.iter-define */ 88)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t,
      index = this._i,
      point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_getNative.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNative = __webpack_require__(/*! ./isNative */ 256);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/isArrayLike.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getLength = __webpack_require__(/*! ./_getLength */ 244),
    isFunction = __webpack_require__(/*! ./isFunction */ 14),
    isLength = __webpack_require__(/*! ./isLength */ 107);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value)) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isString.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(/*! ./isArray */ 39),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 25);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}

module.exports = isString;

/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 167), __esModule: true };

/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/is-iterable.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 168), __esModule: true };

/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 171), __esModule: true };

/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 172), __esModule: true };

/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./$.fails */ 32)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(/*! ./$ */ 2).setDesc,
    has = __webpack_require__(/*! ./$.has */ 52),
    TAG = __webpack_require__(/*! ./$.wks */ 3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./$.iobject */ 85),
    defined = __webpack_require__(/*! ./$.defined */ 51);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./$.defined */ 51);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.array.iterator */ 205);
var Iterators = __webpack_require__(/*! ./$.iterators */ 19);
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/invariant/browser.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 10)))

/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/isArray.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @type {Function}
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isObject.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/redux-saga/lib/internal/buffers.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffers = exports.BUFFER_OVERFLOW = undefined;

var _utils = __webpack_require__(/*! ./utils */ 11);

var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = 'Channel\'s Buffer overflow!';

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: _utils.kTrue, put: _utils.noop, take: _utils.noop };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take, flush: flush
  };
}

var buffers = exports.buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/redux-saga/lib/internal/channel.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;

var _extends = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.emitter = emitter;
exports.channel = channel;
exports.eventChannel = eventChannel;
exports.stdChannel = stdChannel;

var _utils = __webpack_require__(/*! ./utils */ 11);

var _buffers = __webpack_require__(/*! ./buffers */ 41);

var _scheduler = __webpack_require__(/*! ./scheduler */ 118);

var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = exports.END = { type: CHANNEL_END_TYPE };
var isEnd = exports.isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return (0, _utils.remove)(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (process.env.NODE_ENV !== 'production') {
  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();

  var closed = false;
  var takers = [];

  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    (0, _utils.check)(cb, _utils.is.func, 'channel.take\'s callback must be a function');

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return (0, _utils.remove)(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    (0, _utils.check)(cb, _utils.is.func, 'channel.flush\' callback must be a function');
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return { take: take, put: put, flush: flush, close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      chan.close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });

  if (!_utils.is.func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: function close() {
      if (!chan.__closed__) {
        chan.close();
        unsubscribe();
      }
    }
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils.SAGA_ACTION]) {
        cb(input);
        return;
      }
      (0, _scheduler.asap)(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        (0, _utils.check)(matcher, _utils.is.func, 'channel.take\'s matcher argument must be a function');
        cb[_utils.MATCH] = matcher;
      }
      chan.take(cb);
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 10)))

/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/redux-saga/lib/internal/io.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 30);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _isIterable2 = __webpack_require__(/*! babel-runtime/core-js/is-iterable */ 28);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 27);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asEffect = exports.takem = undefined;

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.take = take;
exports.put = put;
exports.race = race;
exports.call = call;
exports.apply = apply;
exports.cps = cps;
exports.fork = fork;
exports.spawn = spawn;
exports.join = join;
exports.cancel = cancel;
exports.select = select;
exports.actionChannel = actionChannel;
exports.cancelled = cancelled;
exports.flush = flush;
exports.takeEvery = takeEvery;
exports.takeLatest = takeLatest;
exports.throttle = throttle;

var _utils = __webpack_require__(/*! ./utils */ 11);

var _sagaHelpers = __webpack_require__(/*! ./sagaHelpers */ 117);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var IO = (0, _utils.sym)('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';

var deprecationWarning = function deprecationWarning(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, IO, true), _defineProperty(_ref, type, payload), _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (_utils.is.pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (_utils.is.channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = exports.takem = (0, _utils.deprecate)(take.maybe, deprecationWarning('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
  } else {
    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = (0, _utils.deprecate)(put.resolve, deprecationWarning('put.sync', 'put.resolve'));

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (_utils.is.array(fn)) {
    var _fn = fn;

    var _fn2 = _slicedToArray(_fn, 2);

    context = _fn2[0];
    fn = _fn2[1];
  } else if (fn.fn) {
    var _fn3 = fn;
    context = _fn3.context;
    fn = _fn3.fn;
  }
  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

var isForkedTask = function isForkedTask(task) {
  return task[_utils.TASK];
};

function join(task) {
  if (_utils.is.array(task)) {
    return task.map(join);
  }
  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
  if (!isForkedTask(task)) {
    throw new Error('join(task): argument ' + task + ' is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)');
  }

  return effect(JOIN, task);
}

function cancel(task) {
  (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
  if (!isForkedTask(task)) {
    throw new Error('cancel(task): argument ' + task + ' is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)');
  }

  return effect(CANCEL, task);
}

function select(selector) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if (arguments.length === 0) {
    selector = _utils.ident;
  } else {
    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    (0, _utils.check)(buffer, _utils.is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  return fork.apply(undefined, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len7 = arguments.length, args = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    args[_key7 - 2] = arguments[_key7];
  }

  return fork.apply(undefined, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
    args[_key8 - 3] = arguments[_key8];
  }

  return fork.apply(undefined, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = exports.asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH)
};

/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/decorators/internal/createActionInterfaceCreator.ts ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var ActionInterface_1 = __webpack_require__(/*! ../../models/ActionInterface */ 70);
var ActionInterfaceMockAction_1 = __webpack_require__(/*! ../../models/ActionInterfaceMockAction */ 71);
function errorDispatcher() {
    throw new Error('Action cannot be dispatched because no store is registered.');
}
/**
 * This process the action method's return value and create a complete action out of it inclusive the type
 *
 * @param actionType        The annotated action type
 * @param methodReturnValue The return value of the action method
 */
function buildAction(actionType, methodReturnValue) {
    var payload = null;
    var meta = null;
    var error = null;
    if (methodReturnValue instanceof ActionInterfaceMockAction_1.ActionInterfaceMockAction) {
        // If action method returns Action(payload?, meta?, error?) then take props from there
        payload = methodReturnValue.action.payload;
        meta = methodReturnValue.action.meta;
        error = methodReturnValue.action.error;
    }
    return {
        type: actionType,
        payload: payload,
        meta: meta,
        error: error
    };
}
/**
 * This method returns a copy of the action object with callback methods on the action meta
 * Because it is a copy the action of the action interface is not altered!
 *
 * @TODO: make deep copy of object?? is this really 100% fail safe now?
 *
 * @param action   The original action
 * @param resolve  The promise resolve method
 * @param reject   The promise reject method
 */
function actionWithCallbacks(action, resolve, reject) {
    var actionWithCallbacks = (0, _assign2.default)({}, action);
    var callbacks = {
        resolve: resolve,
        reject: reject
    };
    if ((0, _typeof3.default)(actionWithCallbacks.meta) !== 'object') {
        actionWithCallbacks.meta = {
            callbacks: callbacks
        };
    } else {
        actionWithCallbacks.meta.callbacks = callbacks;
    }
    return actionWithCallbacks;
}
function default_1(target, actionType, actionCreator) {
    /**
     * This method will wrap and replace the original action method
     * It returns an ActionInterface object instead of the original
     * return value (payload or ActionInterfaceMockAction)
     *
     * @param args
     */
    var actionInterfaceCreator = function actionInterfaceCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var instanceStore = this.store;
        var actionInterface = new ActionInterface_1.default();
        var action = buildAction(actionType, actionCreator.apply(void 0, args));
        // The final composed action object inclusive type
        actionInterface.action = action;
        // dispatch the built action to the store
        actionInterface.dispatch = function () {
            if (!instanceStore) {
                errorDispatcher();
            }
            instanceStore.dispatch(action);
        };
        // return a promise:
        // - append callback methods to the action meta property (copy action object)
        // - dispatch the action-with-callbacks to the store
        actionInterface.dispatchSync = function () {
            if (!instanceStore) {
                errorDispatcher();
            }
            return new _promise2.default(function (resolve, reject) {
                instanceStore.dispatch(actionWithCallbacks(action, resolve, reject));
            });
        };
        return actionInterface;
    };
    // Save action type as metadata on the Function object
    Object.defineProperty(actionInterfaceCreator, 'actionType', {
        value: actionType,
        writable: false
    });
    // The string representation is the action type
    Object.defineProperty(actionInterfaceCreator, 'toString', {
        value: function value() {
            return this.actionType;
        },
        writable: false
    });
    return actionInterfaceCreator;
}
exports.default = default_1;

/***/ }),
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/axios/lib/defaults.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 20);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./utils */ 4);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 160);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 78);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 78);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return (0, _stringify2.default)(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 10)))

/***/ }),
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-names.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ 173), __esModule: true };

/***/ }),
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 178), __esModule: true };

/***/ }),
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.classof.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./$.cof */ 21),
    TAG = __webpack_require__(/*! ./$.wks */ 3)('toStringTag')
// ES3 wrong here
,
    ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 51 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 52 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 53 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ./$ */ 2),
    createDesc = __webpack_require__(/*! ./$.property-desc */ 56);
module.exports = __webpack_require__(/*! ./$.descriptors */ 31) ? function (object, key, value) {
  return $.setDesc(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 54 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 55 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.object-sap.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./$.export */ 9),
    core = __webpack_require__(/*! ./$.core */ 1),
    fails = __webpack_require__(/*! ./$.fails */ 32);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY],
      exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 56 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 57 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./$.hide */ 53);

/***/ }),
/* 58 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./$.classof */ 50),
    ITERATOR = __webpack_require__(/*! ./$.wks */ 3)('iterator'),
    Iterators = __webpack_require__(/*! ./$.iterators */ 19);
module.exports = __webpack_require__(/*! ./$.core */ 1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 59 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_isIndex.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),
/* 60 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./~/lodash/eq.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),
/* 61 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/identity.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns the first argument given to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),
/* 62 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrototype = __webpack_require__(/*! ./_getPrototype */ 101),
    isHostObject = __webpack_require__(/*! ./_isHostObject */ 103),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 25);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object,
 *  else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),
/* 63 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isSymbol.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObjectLike = __webpack_require__(/*! ./isObjectLike */ 25);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 64 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/redux-saga/lib/internal/proc.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 16);

var _from2 = _interopRequireDefault(_from);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 30);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TASK_CANCEL = exports.CHANNEL_END = exports.NOT_ITERATOR_ERROR = undefined;
exports.default = proc;

var _utils = __webpack_require__(/*! ./utils */ 11);

var _scheduler = __webpack_require__(/*! ./scheduler */ 118);

var _io = __webpack_require__(/*! ./io */ 43);

var _channel = __webpack_require__(/*! ./channel */ 42);

var _buffers = __webpack_require__(/*! ./buffers */ 41);

function _defineEnumerableProperties(obj, descs) {
  for (var key in descs) {
    var desc = descs[key];desc.configurable = desc.enumerable = true;if ("value" in desc) desc.writable = true;(0, _defineProperty3.default)(obj, key, desc);
  }return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var NOT_ITERATOR_ERROR = exports.NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

var CHANNEL_END = exports.CHANNEL_END = {
  toString: function toString() {
    return '@@redux-saga/CHANNEL_END';
  }
};
var TASK_CANCEL = exports.TASK_CANCEL = {
  toString: function toString() {
    return '@@redux-saga/TASK_CANCEL';
  }
};

var matchers = {
  wildcard: function wildcard() {
    return _utils.kTrue;
  },
  default: function _default(pattern) {
    return function (input) {
      return input.type === String(pattern);
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return matcher(p)(input);
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function matcher(pattern) {
  return (pattern === '*' ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.stringableFunc(pattern) ? matchers.default : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/
function forkQueue(name, mainTask, cb) {
  var tasks = [],
      result = void 0,
      completed = false;
  addTask(mainTask);

  function abort(err) {
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);
    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      (0, _utils.remove)(tasks, task);
      task.cont = _utils.noop;
      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    };
    // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function (t) {
      t.cont = _utils.noop;
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: function getTasks() {
      return tasks;
    },
    taskNames: function taskNames() {
      return tasks.map(function (t) {
        return t.name;
      });
    }
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (_utils.is.iterator(fn)) {
    return fn;
  }

  // catch synchronous failures; see #152 and #441
  var result = void 0,
      error = void 0;
  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  }

  // i.e. a generator function returns an iterator
  if (_utils.is.iterator(result)) {
    return result;
  }

  // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441
  return error ? (0, _utils.makeIterator)(function () {
    throw error;
  }) : (0, _utils.makeIterator)(function () {
    var pc = void 0;
    var eff = { done: false, value: result };
    var ret = function ret(value) {
      return { done: true, value: value };
    };
    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

var wrapHelper = function wrapHelper(helper) {
  return { fn: helper };
};

function proc(iterator) {
  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return _utils.noop;
  };
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.noop;
  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils.noop;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var parentEffectId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var name = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'anonymous';
  var cont = arguments[7];

  (0, _utils.check)(iterator, _utils.is.iterator, NOT_ITERATOR_ERROR);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;

  var log = logger || _utils.log;
  var stdChannel = (0, _channel.stdChannel)(subscribe);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/
  next.cancel = _utils.noop;

  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/
  var task = newTask(parentEffectId, name, iterator, cont);
  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
  var taskQueue = forkQueue(name, mainTask, end);

  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/
  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }

  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/
  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/
      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/
  cont && (cont.cancel = cancel);

  // tracks the running status
  iterator._isRunning = true;

  // kicks up the generator
  next();

  // then return the task descriptor to the caller
  return task;

  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/
  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result = void 0;
      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/
        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          Thill will jump to the finally block
        **/
        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = _utils.is.func(iterator.return) ? iterator.return() : { done: true };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        runEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        log('error', 'uncaught at ' + name, error.message);
      }
      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false;
    stdChannel.close();
    if (!isErr) {
      if (result === TASK_CANCEL && _utils.isDev) {
        log('info', name + ' has been cancelled', '');
      }
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      if (result instanceof Error) {
        result.sagaStack = 'at ' + name + ' \n ' + (result.sagaStack || result.stack);
      }
      if (!task.cont) {
        log('error', 'uncaught', result.sagaStack || result.stack);
        if (result instanceof Error && onError) {
          onError(result);
        }
      }
      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }
    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, parentEffectId) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var cb = arguments[3];

    var effectId = (0, _utils.uid)();
    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/
    var effectSettled = void 0;

    // Completion callback passed to the appropriate effect runner
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _utils.noop; // defensive measure
      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }

      cb(res, isErr);
    }
    // tracks down the current cancel
    currCb.cancel = _utils.noop;

    // setup cancellation logic on the parent cb
    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/
      try {
        currCb.cancel();
      } catch (err) {
        log('error', 'uncaught at ' + name, err.message);
      }
      currCb.cancel = _utils.noop; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    };

    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data = void 0;
    return (
      // Non declarative effect
      _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

      // declarative effects
      : _utils.is.array(effect) ? runParallelEffect(effect, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : _utils.is.notUndef(data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : _utils.is.notUndef(data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : /* anything else returned as is        */currCb(effect)
    );
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[_utils.CANCEL];
    if (typeof cancelPromise === 'function') {
      cb.cancel = cancelPromise;
    }
    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, name, cb) {
    proc(iterator, subscribe, dispatch, getState, options, effectId, name, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var channel = _ref2.channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    channel = channel || stdChannel;
    var takeCb = function takeCb(inp) {
      return inp instanceof Error ? cb(inp, true) : (0, _channel.isEnd)(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
    };
    try {
      channel.take(takeCb, matcher(pattern));
    } catch (err) {
      return cb(err, true);
    }
    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    (0, _scheduler.asap)(function () {
      var result = void 0;
      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        // If we have a channel or `put.resolve` was used then bubble up the error.
        if (channel || resolve) return cb(error, true);
        log('error', 'uncaught at ' + name, error.stack || error.message || error);
      }

      if (resolve && _utils.is.promise(result)) {
        resolvePromise(result, cb);
      } else {
        return cb(result);
      }
    });
    // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;

    var result = void 0;
    // catch synchronous failures; see #152
    try {
      result = fn.apply(context, args);
    } catch (error) {
      return cb(error, true);
    }
    return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb

    // catch synchronous failures; see #152
    try {
      (function () {
        var cpsCb = function cpsCb(err, res) {
          return _utils.is.undef(err) ? cb(res) : cb(err, true);
        };
        fn.apply(context, args.concat(cpsCb));
        if (cpsCb.cancel) {
          cb.cancel = function () {
            return cpsCb.cancel();
          };
        }
      })();
    } catch (error) {
      return cb(error, true);
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;

    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

    try {
      (0, _scheduler.suspend)();
      var _task = proc(taskIterator, subscribe, dispatch, getState, options, effectId, fn.name, detached ? null : _utils.noop);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      (0, _scheduler.flush)();
    }
    // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      (function () {
        var joiner = { task: task, cb: cb };
        cb.cancel = function () {
          return (0, _utils.remove)(t.joiners, joiner);
        };
        t.joiners.push(joiner);
      })();
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(task, cb) {
    if (task.isRunning()) {
      task.cancel();
    }
    cb();
    // cancel effects are non cancellables
  }

  function runParallelEffect(effects, effectId, cb) {
    if (!effects.length) {
      return cb([]);
    }

    var completedCount = 0;
    var completed = void 0;
    var results = Array(effects.length);

    function checkEffectEnd() {
      if (completedCount === results.length) {
        completed = true;
        cb(results);
      }
    }

    var childCbs = effects.map(function (eff, idx) {
      var chCbAtIdx = function chCbAtIdx(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[idx] = res;
          completedCount++;
          checkEffectEnd();
        }
      };
      chCbAtIdx.cancel = _utils.noop;
      return chCbAtIdx;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        childCbs.forEach(function (chCb) {
          return chCb.cancel();
        });
      }
    };

    effects.forEach(function (eff, idx) {
      return runEffect(eff, effectId, idx, childCbs[idx]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed = void 0;
    var keys = (0, _keys2.default)(effects);
    var childCbs = {};

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          cb.cancel();
          completed = true;
          cb(_defineProperty({}, key, res));
        }
      };
      chCbAtKey.cancel = _utils.noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function (key) {
      if (completed) {
        return;
      }
      runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(undefined, [getState()].concat(_toConsumableArray(args)));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;

    var match = matcher(pattern);
    match.pattern = pattern;
    cb((0, _channel.eventChannel)(subscribe, buffer || _buffers.buffers.fixed(), match));
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function newTask(id, name, iterator, cont) {
    var _done, _ref9, _mutatorMap;

    iterator._deferredEnd = null;
    return _ref9 = {}, _defineProperty(_ref9, _utils.TASK, true), _defineProperty(_ref9, 'id', id), _defineProperty(_ref9, 'name', name), _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      } else {
        var def = (0, _utils.deferred)();
        iterator._deferredEnd = def;
        if (!iterator._isRunning) {
          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
        }
        return def.promise;
      }
    }, _defineProperty(_ref9, 'cont', cont), _defineProperty(_ref9, 'joiners', []), _defineProperty(_ref9, 'cancel', cancel), _defineProperty(_ref9, 'isRunning', function isRunning() {
      return iterator._isRunning;
    }), _defineProperty(_ref9, 'isCancelled', function isCancelled() {
      return iterator._isCancelled;
    }), _defineProperty(_ref9, 'isAborted', function isAborted() {
      return iterator._isAborted;
    }), _defineProperty(_ref9, 'result', function result() {
      return iterator._result;
    }), _defineProperty(_ref9, 'error', function error() {
      return iterator._error;
    }), _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
  }
}

/***/ }),
/* 65 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 66 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/helpers/createReducer.ts ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ 121);
var redux_actions_1 = __webpack_require__(/*! redux-actions */ 269);
exports.default = function (domainActionReducerMap, domainDefaultStates, mergeReducersMapObject) {
    var domainLevelReducer = {};
    for (var domainKey in domainActionReducerMap) {
        var domainReducers = domainActionReducerMap[domainKey];
        domainLevelReducer[domainKey] = redux_actions_1.handleActions(domainReducers, domainDefaultStates[domainKey]);
    }
    if (mergeReducersMapObject) {
        (0, _assign2.default)(domainLevelReducer, mergeReducersMapObject);
    }
    return redux_1.combineReducers(domainLevelReducer);
};

/***/ }),
/* 67 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/helpers/createRootSaga.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ 17);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof _symbol2.default === "function" && (g[_iterator2.default] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = undefined && undefined.__values || function (o) {
    var m = typeof _symbol2.default === "function" && o[_iterator2.default],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSagaFork_1 = __webpack_require__(/*! ./createSagaFork */ 68);
exports.default = function (sagas, additionalForks) {
    var sagaForks = [];
    for (var _i = 0, sagas_1 = sagas; _i < sagas_1.length; _i++) {
        var sagaDefinition = sagas_1[_i];
        var fork = createSagaFork_1.default(sagaDefinition.actionType, sagaDefinition.saga);
        sagaForks.push(fork);
    }
    if (additionalForks) {
        return function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [5 /*yield**/, __values(sagaForks)];
                    case 1:
                        _a.sent();
                        return [5 /*yield**/, __values(additionalForks)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
    } else {
        return function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [5 /*yield**/, __values(sagaForks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        };
    }
};

/***/ }),
/* 68 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/helpers/createSagaFork.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ 17);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof _symbol2.default === "function" && (g[_iterator2.default] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = __webpack_require__(/*! redux-saga/effects */ 272);
var getCallbackOptionsFromAction_1 = __webpack_require__(/*! ./getCallbackOptionsFromAction */ 69);
exports.default = function (actionType, innerGenerator) {
    return effects_1.takeLatest(actionType, function (action) {
        var callbacks, returnValue, ex_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('saga take latest ', actionType);
                    callbacks = getCallbackOptionsFromAction_1.default(action);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3,, 4]);
                    return [4 /*yield*/, effects_1.call(innerGenerator, action)];
                case 2:
                    returnValue = _a.sent();
                    callbacks.resolve(returnValue);
                    return [3 /*break*/, 4];
                case 3:
                    ex_1 = _a.sent();
                    callbacks.reject(ex_1);
                    throw ex_1;
                case 4:
                    return [2 /*return*/];
            }
        });
    });
};

/***/ }),
/* 69 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./src/helpers/getCallbackOptionsFromAction.ts ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var noop = function noop() {};
/*type MetaWithCallbacks = {
  callbacks: {
    resolve: Function,
    reject: Function,
  },
};*/
exports.default = function (action) {
  return {
    resolve: action.meta && action.meta.callbacks && action.meta.callbacks.resolve || noop,
    reject: action.meta && action.meta.callbacks && action.meta.callbacks.reject || noop
  };
};

/***/ }),
/* 70 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/models/ActionInterface.ts ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the object which is returned by a action method which is decorated as an action
 * Note: It's technically a normal class not a "typescript interface" - but this was the best name for it.
 */
var ActionInterface = function () {
  function ActionInterface() {}
  return ActionInterface;
}();
exports.default = ActionInterface;

/***/ }),
/* 71 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./src/models/ActionInterfaceMockAction.ts ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The action method on a domain must return:
 * return Action(payload, meta?, error?);
 *
 * Instead of:
 * return new Action(payload, meta?, error?);
 *
 * This is more compact.
 */
exports.default = function (payload, meta, error) {
    return new ActionInterfaceMockAction(payload, meta, error);
};
/**
 * BadUsageError error template
 */
function createBadUsageError(methodName) {
    var message = "Cannot call " + methodName + " on the Action instance directly " + "(because it's only a type mock for the ActionInterface). " + "Possible causes: " + "1. You returned an Action from a method but don't use a decorator like " + "@action/@reducerAction/@sagaAction. " + "2. You created this object manually and called this method.";
    function BadUsageError() {
        this.name = 'BadUsageError';
        this.message = message;
    }
    BadUsageError.prototype = Error.prototype;
    return new BadUsageError();
}
/**
 * Because Typescript/Flow currently not support method signature overwriting by decorators,
 * this class mocks the ActionInterface for the caller (inclusive comments and types).
 * The action method get replaced by a real ActionInterface by any @action decorator or variant.
 * If the decorator was forgotten or this object was created manually because of missuse, it throws an exception.
 */
var ActionInterfaceMockAction = function () {
    /**
     * Creates a new action
     */
    function ActionInterfaceMockAction(payload, meta, error) {
        this.action = {
            type: null,
            payload: payload,
            meta: meta,
            error: error
        };
    }
    /**
     * Dispatch the generated action to the store
     */
    ActionInterfaceMockAction.prototype.dispatch = function () {
        throw createBadUsageError('dispatch');
    };
    /**
     * Append callback methods to the action object meta and dispatch the action to the store
     */
    ActionInterfaceMockAction.prototype.dispatchSync = function () {
        throw createBadUsageError('dispatchSync');
    };
    ;
    return ActionInterfaceMockAction;
}();
exports.ActionInterfaceMockAction = ActionInterfaceMockAction;

/***/ }),
/* 72 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./src/api-request-pool/errors/request-error.ts ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 29);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 48);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var RequestError = function (_super) {
    __extends(RequestError, _super);
    function RequestError(problem, innerError, axiosResponse) {
        var _this = _super.call(this, problem) || this;
        _this.problem = problem;
        _this.innerError = innerError;
        _this.axiosResponse = axiosResponse;
        return _this;
    }
    return RequestError;
}(Error);
exports.default = RequestError;
;

/***/ }),
/* 73 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./src/decorators/internal/setActionReducerHandler.ts ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (target, actionType, reducerFunction) {
    if (typeof target.decoratorRegisteredReducers === 'undefined') {
        target.decoratorRegisteredReducers = {};
    }
    if (actionType in target.decoratorRegisteredReducers) {
        var domain = target.constructor.name;
        throw new Error("Cannot register multiple action handlers for action " + actionType + " in " + domain + ".");
    }
    function reducerWrapper(state, action) {
        //return reducerFunction(action.payload, action);
        return reducerFunction.bind(target)(action.payload, action);
    }
    ;
    target.decoratorRegisteredReducers[actionType] = reducerWrapper;
};

/***/ }),
/* 74 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./src/decorators/internal/setActionSagaHandler.ts ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (target, actionType, sagaGeneratorFunction) {
    if (typeof target.decoratorRegisteredSagas === 'undefined') {
        target.decoratorRegisteredSagas = {};
    }
    if (actionType in target.decoratorRegisteredSagas) {
        var domain = target.constructor.name;
        throw new Error("Cannot register multiple action handlers for action " + actionType + " in " + domain + ".");
    }
    target.decoratorRegisteredSagas[actionType] = sagaGeneratorFunction;
    function sagaWrapper(action) {
        return sagaGeneratorFunction(action.payload, action);
        //return sagaGeneratorFunction.bind(target)(action.payload, action);
    }
    ;
    target.decoratorRegisteredSagas[actionType] = sagaWrapper.bind(target);
};

/***/ }),
/* 75 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/errors/createBadUsageError.ts ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function createBadUsageError(message) {
    function BadUsageError(message) {
        this.name = 'BadUsageError';
        this.message = message;
    }
    BadUsageError.prototype = Error.prototype;
    return new BadUsageError(message);
}
exports.default = createBadUsageError;
;

/***/ }),
/* 76 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/Qs/lib/formats.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function RFC1738(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function RFC3986(value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

/***/ }),
/* 77 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/Qs/lib/utils.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 29);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = Object.prototype.hasOwnProperty;

var hexTable = function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}();

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? (0, _create2.default)(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if ((typeof source === 'undefined' ? 'undefined' : (0, _typeof3.default)(source)) !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if ((typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target)) === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if ((typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target)) !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && (0, _typeof3.default)(target[i]) === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return (0, _keys2.default)(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (c === 0x2D || // -
        c === 0x2E || // .
        c === 0x5F || // _
        c === 0x7E || // ~
        c >= 0x30 && c <= 0x39 || // 0-9
        c >= 0x41 && c <= 0x5A || // a-z
        c >= 0x61 && c <= 0x7A // A-Z
        ) {
                out += string.charAt(i);
                continue;
            }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }

        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]; // eslint-disable-line max-len
    }

    return out;
};

exports.compact = function (obj, references) {
    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && (0, _typeof3.default)(obj[i]) === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = (0, _keys2.default)(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

/***/ }),
/* 78 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/adapters/xhr.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./../utils */ 4);
var settle = __webpack_require__(/*! ./../core/settle */ 152);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 155);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 161);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 159);
var createError = __webpack_require__(/*! ../core/createError */ 81);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(/*! ./../helpers/btoa */ 154);

module.exports = function xhrAdapter(config) {
  return new _promise2.default(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 157);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 10)))

/***/ }),
/* 79 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/axios/lib/cancel/Cancel.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 80 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/axios/lib/cancel/isCancel.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 81 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/axios/lib/core/createError.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 151);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),
/* 82 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/bind.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 83 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-prototype-of.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 175), __esModule: true };

/***/ }),
/* 84 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.get-names.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 47);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./$.to-iobject */ 35),
    getNames = __webpack_require__(/*! ./$ */ 2).getNames,
    toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && _getOwnPropertyNames2.default ? (0, _getOwnPropertyNames2.default)(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return getNames(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it) {
  if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
  return getNames(toIObject(it));
};

/***/ }),
/* 85 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./$.cof */ 21);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 86 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array-iter.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// check on default Array iterator
var Iterators = __webpack_require__(/*! ./$.iterators */ 19),
    ITERATOR = __webpack_require__(/*! ./$.wks */ 3)('iterator'),
    ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 87 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-call.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./$.an-object */ 12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 88 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-define.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./$.library */ 54),
    $export = __webpack_require__(/*! ./$.export */ 9),
    redefine = __webpack_require__(/*! ./$.redefine */ 57),
    hide = __webpack_require__(/*! ./$.hide */ 53),
    has = __webpack_require__(/*! ./$.has */ 52),
    Iterators = __webpack_require__(/*! ./$.iterators */ 19),
    $iterCreate = __webpack_require__(/*! ./$.iter-create */ 190),
    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 34),
    getProto = __webpack_require__(/*! ./$ */ 2).getProto,
    ITERATOR = __webpack_require__(/*! ./$.wks */ 3)('iterator'),
    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
,
    FF_ITERATOR = '@@iterator',
    KEYS = 'keys',
    VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator',
      DEF_VALUES = DEFAULT == VALUES,
      VALUES_BUG = false,
      proto = Base.prototype,
      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
      $default = $native || getMethod(DEFAULT),
      methods,
      key;
  // Fix native
  if ($native) {
    var IteratorPrototype = getProto($default.call(new Base()));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 89 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-detect.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 16);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITERATOR = __webpack_require__(/*! ./$.wks */ 3)('iterator'),
    SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  (0, _from2.default)(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7],
        iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),
/* 90 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.same-value.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is = __webpack_require__(/*! babel-runtime/core-js/object/is */ 164);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 7.2.9 SameValue(x, y)
module.exports = _is2.default || function is(x, y) {
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 91 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.set-proto.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 48);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc = __webpack_require__(/*! ./$ */ 2).getDesc,
    isObject = __webpack_require__(/*! ./$.is-object */ 33),
    anObject = __webpack_require__(/*! ./$.an-object */ 12);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: _setPrototypeOf2.default || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./$.ctx */ 18)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 92 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./$.global */ 7),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 93 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-integer.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 94 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-length.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./$.to-integer */ 93),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 95 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 96 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 97 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/es6.symbol.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = __webpack_require__(/*! ./$ */ 2),
    global = __webpack_require__(/*! ./$.global */ 7),
    has = __webpack_require__(/*! ./$.has */ 52),
    DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 31),
    $export = __webpack_require__(/*! ./$.export */ 9),
    redefine = __webpack_require__(/*! ./$.redefine */ 57),
    $fails = __webpack_require__(/*! ./$.fails */ 32),
    shared = __webpack_require__(/*! ./$.shared */ 92),
    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 34),
    uid = __webpack_require__(/*! ./$.uid */ 95),
    wks = __webpack_require__(/*! ./$.wks */ 3),
    keyOf = __webpack_require__(/*! ./$.keyof */ 192),
    $names = __webpack_require__(/*! ./$.get-names */ 84),
    enumKeys = __webpack_require__(/*! ./$.enum-keys */ 185),
    isArray = __webpack_require__(/*! ./$.is-array */ 189),
    anObject = __webpack_require__(/*! ./$.an-object */ 12),
    toIObject = __webpack_require__(/*! ./$.to-iobject */ 35),
    createDesc = __webpack_require__(/*! ./$.property-desc */ 56),
    getDesc = $.getDesc,
    setDesc = $.setDesc,
    _create = $.create,
    getNames = $names.get,
    $Symbol = global.Symbol,
    $JSON = global.JSON,
    _stringify = $JSON && $JSON.stringify,
    setter = false,
    HIDDEN = wks('_hidden'),
    isEnum = $.isEnum,
    SymbolRegistry = shared('symbol-registry'),
    AllSymbols = shared('symbols'),
    useNative = typeof $Symbol == 'function',
    ObjectProto = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(setDesc({}, 'a', {
    get: function get() {
      return setDesc(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = getDesc(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  setDesc(it, key, D);
  if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function set(value) {
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function isSymbol(it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D) {
  if (D && has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P)),
      i = 0,
      l = keys.length,
      key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  var D = getDesc(it = toIObject(it), key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = getNames(toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var names = getNames(toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
  }return result;
};
var $stringify = function stringify(it) {
  if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  var args = [it],
      i = 1,
      $$ = arguments,
      replacer,
      $replacer;
  while ($$.length > i) {
    args.push($$[i++]);
  }replacer = args[1];
  if (typeof replacer == 'function') $replacer = replacer;
  if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
    if ($replacer) value = $replacer.call(this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if (!useNative) {
  $Symbol = function _Symbol() {
    if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString() {
    return this._k;
  });

  isSymbol = function isSymbol(it) {
    return it instanceof $Symbol;
  };

  $.create = $create;
  $.isEnum = $propertyIsEnumerable;
  $.getDesc = $getOwnPropertyDescriptor;
  $.setDesc = $defineProperty;
  $.setDescs = $defineProperties;
  $.getNames = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./$.library */ 54)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, { Symbol: $Symbol });

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', { stringify: $stringify });

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 98 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash-es/_Symbol.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(/*! ./_root.js */ 222);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 99 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/lodash-es/isPlainObject.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ 216);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(/*! ./_getPrototype.js */ 218);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike.js */ 223);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 100 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/_apply.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  var length = args.length;
  switch (length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),
/* 101 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 83);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetPrototype = _getPrototypeOf2.default;

/**
 * Gets the `[[Prototype]]` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {null|Object} Returns the `[[Prototype]]`.
 */
function getPrototype(value) {
  return nativeGetPrototype(Object(value));
}

module.exports = getPrototype;

/***/ }),
/* 102 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_indexKeys.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTimes = __webpack_require__(/*! ./_baseTimes */ 239),
    isArguments = __webpack_require__(/*! ./isArguments */ 106),
    isArray = __webpack_require__(/*! ./isArray */ 39),
    isLength = __webpack_require__(/*! ./isLength */ 107),
    isString = __webpack_require__(/*! ./isString */ 26);

/**
 * Creates an array of index keys for `object` values of arrays,
 * `arguments` objects, and strings, otherwise `null` is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array|null} Returns index keys, else `null`.
 */
function indexKeys(object) {
  var length = object ? object.length : undefined;
  if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
    return baseTimes(length, String);
  }
  return null;
}

module.exports = indexKeys;

/***/ }),
/* 103 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_isHostObject.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

module.exports = isHostObject;

/***/ }),
/* 104 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_isPrototype.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),
/* 105 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_toSource.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),
/* 106 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/isArguments.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 253);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

module.exports = isArguments;

/***/ }),
/* 107 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isLength.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length,
 *  else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),
/* 108 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/isUndefined.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;

/***/ }),
/* 109 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/keys.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseHas = __webpack_require__(/*! ./_baseHas */ 234),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ 236),
    indexKeys = __webpack_require__(/*! ./_indexKeys */ 102),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 24),
    isIndex = __webpack_require__(/*! ./_isIndex */ 59),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 104);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  var isProto = isPrototype(object);
  if (!(isProto || isArrayLike(object))) {
    return baseKeys(object);
  }
  var indexes = indexKeys(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;

  for (var key in object) {
    if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

/***/ }),
/* 110 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/rest.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = __webpack_require__(/*! ./_apply */ 100),
    toInteger = __webpack_require__(/*! ./toInteger */ 111);

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as
 * an array.
 *
 * **Note:** This method is based on the
 * [rest parameter](https://mdn.io/rest_parameters).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.rest(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function rest(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? func.length - 1 : toInteger(start), 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    switch (start) {
      case 0:
        return func.call(this, array);
      case 1:
        return func.call(this, args[0], array);
      case 2:
        return func.call(this, args[0], args[1], array);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

module.exports = rest;

/***/ }),
/* 111 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/toInteger.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toNumber = __webpack_require__(/*! ./toNumber */ 261);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This function is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3');
 * // => 3
 */
function toInteger(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  var remainder = value % 1;
  return value === value ? remainder ? value - remainder : value : 0;
}

module.exports = toInteger;

/***/ }),
/* 112 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/redux-actions/es/camelCase.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://github.com/lodash/lodash/blob/4.17.2/lodash.js#L14100
// eslint-disable-next-line max-len
var wordPattern = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:(?:1ST|2ND|3RD|(?![123])\dTH)\b)|\d*(?:(?:1st|2nd|3rd|(?![123])\dth)\b)|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
var namespacer = '/';

function camelCase(string) {
  return string.match(wordPattern).reduce(function (camelCased, word, index) {
    return camelCased + (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
  }, '');
}

exports.default = function (type) {
  return type.split(namespacer).map(camelCase).join(namespacer);
};

/***/ }),
/* 113 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/redux-actions/es/combineActions.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTION_TYPE_DELIMITER = undefined;
exports.default = combineActions;

var _isString = __webpack_require__(/*! lodash/isString */ 26);

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ 14);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ 255);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _toString = __webpack_require__(/*! lodash/toString */ 262);

var _toString2 = _interopRequireDefault(_toString);

var _isSymbol = __webpack_require__(/*! lodash/isSymbol */ 63);

var _isSymbol2 = _interopRequireDefault(_isSymbol);

var _invariant = __webpack_require__(/*! invariant */ 38);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTION_TYPE_DELIMITER = exports.ACTION_TYPE_DELIMITER = '||';

function isValidActionType(type) {
  return (0, _isString2.default)(type) || (0, _isFunction2.default)(type) || (0, _isSymbol2.default)(type);
}

function isValidActionTypes(types) {
  if ((0, _isEmpty2.default)(types)) {
    return false;
  }
  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  (0, _invariant2.default)(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(_toString2.default).join(ACTION_TYPE_DELIMITER);
  return { toString: function toString() {
      return combinedActionType;
    } };
}

/***/ }),
/* 114 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/redux-actions/es/createAction.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAction;

var _identity = __webpack_require__(/*! lodash/identity */ 61);

var _identity2 = _interopRequireDefault(_identity);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ 14);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ 108);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = __webpack_require__(/*! lodash/isNull */ 258);

var _isNull2 = _interopRequireDefault(_isNull);

var _invariant = __webpack_require__(/*! invariant */ 38);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAction(type) {
  var payloadCreator = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
  var metaCreator = arguments[2];

  (0, _invariant2.default)((0, _isFunction2.default)(payloadCreator) || (0, _isNull2.default)(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');

  var finalPayloadCreator = (0, _isNull2.default)(payloadCreator) ? _identity2.default : payloadCreator;

  var actionCreator = function actionCreator() {
    var hasError = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error;

    var action = {
      type: type
    };

    var payload = hasError ? arguments.length <= 0 ? undefined : arguments[0] : finalPayloadCreator.apply(undefined, arguments);
    if (!(0, _isUndefined2.default)(payload)) {
      action.payload = payload;
    }

    if (hasError || payload instanceof Error) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true;
    }

    if ((0, _isFunction2.default)(metaCreator)) {
      action.meta = metaCreator.apply(undefined, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return type.toString();
  };

  return actionCreator;
}

/***/ }),
/* 115 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/redux-actions/es/handleAction.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isIterable2 = __webpack_require__(/*! babel-runtime/core-js/is-iterable */ 28);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 27);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = handleAction;

var _isFunction = __webpack_require__(/*! lodash/isFunction */ 14);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 62);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _identity = __webpack_require__(/*! lodash/identity */ 61);

var _identity2 = _interopRequireDefault(_identity);

var _isNil = __webpack_require__(/*! lodash/isNil */ 257);

var _isNil2 = _interopRequireDefault(_isNil);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ 108);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _includes = __webpack_require__(/*! lodash/includes */ 252);

var _includes2 = _interopRequireDefault(_includes);

var _invariant = __webpack_require__(/*! invariant */ 38);

var _invariant2 = _interopRequireDefault(_invariant);

var _combineActions = __webpack_require__(/*! ./combineActions */ 113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function handleAction(type) {
  var reducer = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
  var defaultState = arguments[2];

  var types = type.toString().split(_combineActions.ACTION_TYPE_DELIMITER);
  (0, _invariant2.default)(!(0, _isUndefined2.default)(defaultState), 'defaultState for reducer handling ' + types.join(', ') + ' should be defined');
  (0, _invariant2.default)((0, _isFunction2.default)(reducer) || (0, _isPlainObject2.default)(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = (0, _isFunction2.default)(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return (0, _isNil2.default)(aReducer) ? _identity2.default : aReducer;
  });

  var _ref2 = _slicedToArray(_ref, 2);

  var nextReducer = _ref2[0];
  var throwReducer = _ref2[1];

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];
    var actionType = action.type;

    if (!actionType || !(0, _includes2.default)(types, actionType.toString())) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}

/***/ }),
/* 116 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/redux-saga/lib/effects.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _io = __webpack_require__(/*! ./internal/io */ 43);

Object.defineProperty(exports, 'take', {
  enumerable: true,
  get: function get() {
    return _io.take;
  }
});
Object.defineProperty(exports, 'takem', {
  enumerable: true,
  get: function get() {
    return _io.takem;
  }
});
Object.defineProperty(exports, 'put', {
  enumerable: true,
  get: function get() {
    return _io.put;
  }
});
Object.defineProperty(exports, 'race', {
  enumerable: true,
  get: function get() {
    return _io.race;
  }
});
Object.defineProperty(exports, 'call', {
  enumerable: true,
  get: function get() {
    return _io.call;
  }
});
Object.defineProperty(exports, 'apply', {
  enumerable: true,
  get: function get() {
    return _io.apply;
  }
});
Object.defineProperty(exports, 'cps', {
  enumerable: true,
  get: function get() {
    return _io.cps;
  }
});
Object.defineProperty(exports, 'fork', {
  enumerable: true,
  get: function get() {
    return _io.fork;
  }
});
Object.defineProperty(exports, 'spawn', {
  enumerable: true,
  get: function get() {
    return _io.spawn;
  }
});
Object.defineProperty(exports, 'join', {
  enumerable: true,
  get: function get() {
    return _io.join;
  }
});
Object.defineProperty(exports, 'cancel', {
  enumerable: true,
  get: function get() {
    return _io.cancel;
  }
});
Object.defineProperty(exports, 'select', {
  enumerable: true,
  get: function get() {
    return _io.select;
  }
});
Object.defineProperty(exports, 'actionChannel', {
  enumerable: true,
  get: function get() {
    return _io.actionChannel;
  }
});
Object.defineProperty(exports, 'cancelled', {
  enumerable: true,
  get: function get() {
    return _io.cancelled;
  }
});
Object.defineProperty(exports, 'flush', {
  enumerable: true,
  get: function get() {
    return _io.flush;
  }
});
Object.defineProperty(exports, 'takeEvery', {
  enumerable: true,
  get: function get() {
    return _io.takeEvery;
  }
});
Object.defineProperty(exports, 'takeLatest', {
  enumerable: true,
  get: function get() {
    return _io.takeLatest;
  }
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function get() {
    return _io.throttle;
  }
});

/***/ }),
/* 117 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/redux-saga/lib/internal/sagaHelpers.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isIterable2 = __webpack_require__(/*! babel-runtime/core-js/is-iterable */ 28);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 27);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = exports.takeLatest = exports.takeEvery = undefined;

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.takeEveryHelper = takeEveryHelper;
exports.takeLatestHelper = takeLatestHelper;
exports.throttleHelper = throttleHelper;

var _channel = __webpack_require__(/*! ./channel */ 42);

var _utils = __webpack_require__(/*! ./utils */ 11);

var _io = __webpack_require__(/*! ./io */ 43);

var _buffers = __webpack_require__(/*! ./buffers */ 41);

var done = { done: true, value: undefined };
var qEnd = {};

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          _fsm$qNext2 = _slicedToArray(_fsm$qNext, 3),
          q = _fsm$qNext2[0],
          output = _fsm$qNext2[1],
          _updateState = _fsm$qNext2[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return (0, _utils.makeIterator)(next, function (error) {
    return next(null, error);
  }, name, true);
}

function safeName(patternOrChannel) {
  if (_utils.is.channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function takeEveryHelper(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [qEnd] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
}

function takeLatestHelper(patternOrChannel, worker) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: (0, _io.cancel)(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel.END ? [qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
}

function throttleHelper(delayLength, pattern, worker) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: (0, _io.take)(channel, pattern) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: (0, _io.call)(_utils.delay, delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel.END ? [qEnd] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + safeName(pattern) + ', ' + worker.name + ')');
}

var deprecationWarning = function deprecationWarning(helperName) {
  return 'import ' + helperName + ' from \'redux-saga\' has been deprecated in favor of import ' + helperName + ' from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};
var takeEvery = exports.takeEvery = (0, _utils.deprecate)(takeEveryHelper, deprecationWarning('takeEvery'));
var takeLatest = exports.takeLatest = (0, _utils.deprecate)(takeLatestHelper, deprecationWarning('takeLatest'));
var throttle = exports.throttle = (0, _utils.deprecate)(throttleHelper, deprecationWarning('throttle'));

/***/ }),
/* 118 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/redux-saga/lib/internal/scheduler.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = asap;
exports.suspend = suspend;
exports.flush = flush;

var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    flush();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  if (!semaphore) {
    exec(task);
  } else {
    queue.push(task);
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  semaphore--;
  if (!semaphore && queue.length) {
    exec(queue.shift());
  }
}

/***/ }),
/* 119 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/redux/es/compose.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 120 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/redux/es/createStore.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = createStore;

var _isPlainObject = __webpack_require__(/*! lodash-es/isPlainObject */ 99);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(/*! symbol-observable */ 280);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : (0, _typeof3.default)(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 121 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/redux/es/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(/*! ./createStore */ 120);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(/*! ./combineReducers */ 279);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 278);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 277);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(/*! ./compose */ 119);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(/*! ./utils/warning */ 122);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 10)))

/***/ }),
/* 122 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/redux/es/utils/warning.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 123 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/Domain.ts ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || _assign2.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var isGenerator_1 = __webpack_require__(/*! ./decorators/internal/isGenerator */ 140);
var pickBy_1 = __webpack_require__(/*! ./utils/pickBy */ 141);
var createBadUsageError_1 = __webpack_require__(/*! ./errors/createBadUsageError */ 75);
function createKeyRequiredError(methodName) {
    return createBadUsageError_1.default("The Domain method '" + methodName + "' requires a set 'key' property. " + "The domain key is set by the DomainManager automatically. " + "However it can manually set with the key static property.");
}
function createStoreRequiredError(methodName) {
    return createBadUsageError_1.default("The Domain method '" + methodName + "' requires a set 'store' property. " + "If used with the DomainManager the store must be set on the DomainManager instead. " + "If you want to get it work anyway set the store property of the domain manually.");
}
var Domain = function () {
    function Domain() {
        this.store = null;
    }
    Object.defineProperty(Domain.prototype, "key", {
        get: function get() {
            return this.constructor.key || this._key;
        },
        set: function set(key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Domain.prototype, "state", {
        // private decoratorRegisteredReducers = {};
        // private decoratorRegisteredSagas = {};
        /**
         * The domain sub state
         */
        get: function get() {
            if (!this.key) {
                throw createKeyRequiredError('state');
            }
            return this.rootState[this.key];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Domain.prototype, "rootState", {
        /**
         * The root redux state
         */
        get: function get() {
            if (!this.store) {
                throw createBadUsageError_1.default('Cannot get store state because no store is bound to the domain.');
            }
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset the domain state to the default state
     */
    Domain.prototype.resetStore = function () {
        if (!this.store) {
            throw createBadUsageError_1.default('Cannot reset store because no store was bound to domain.');
        }
        if (!this.key) {
            throw createKeyRequiredError('resetStore');
        }
        this.store.dispatch({ type: '@@' + this.key + '/RESET' });
    };
    /**
     * Returns all registered reducers
     */
    Domain.prototype.getAllReducers = function () {
        var _this = this;
        if (!this.key) {
            throw createKeyRequiredError('getAllReducers');
        }
        return __assign((_a = {}, _a['@@' + this.key + '/RESET'] = function () {
            return _this.defaultState;
        }, _a), pickBy_1.default(this.handlers, function (h) {
            return !isGenerator_1.default(h);
        }), this.decoratorRegisteredReducers);
        var _a;
    };
    /**
     * Returns all registered sagas
     */
    Domain.prototype.getAllSagas = function () {
        return __assign({}, pickBy_1.default(this.handlers, isGenerator_1.default), this.decoratorRegisteredSagas);
    };
    return Domain;
}();
exports.default = Domain;

/***/ }),
/* 124 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./src/DomainManager.ts ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var createBadUsageError_1 = __webpack_require__(/*! ./errors/createBadUsageError */ 75);
//  {[K in keyof T]: T[K]['state']}
var DomainManager = function () {
    function DomainManager(domains) {
        var _this = this;
        this.domains = domains;
        // The domain's store property becomes a getter which take automatically the
        // store set in the domain bundle instance
        for (var domainKey in this.domains) {
            var domain = this.domains[domainKey];
            domain.key = domainKey;
            Object.defineProperty(domain, 'store', {
                get: function get() {
                    return _this.store;
                }
            });
        }
    }
    Object.defineProperty(DomainManager.prototype, "rootState", {
        /**
         * Public access to the root state
         */
        get: function get() {
            if (!this.store) {
                throw createBadUsageError_1.default("The DomainManager rootState getter requires a set 'store' property.");
            }
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Built in reset functionality
     */
    DomainManager.prototype.resetAllStores = function () {
        var _this = this;
        (0, _keys2.default)(this.domains).forEach(function (domainKey) {
            var domain = _this.domains[domainKey];
            domain.resetStore();
        });
    };
    /**
     * Collector method: Return all reducers from all domains
     */
    DomainManager.prototype.getReducers = function () {
        var domainActionReducerMap = {};
        for (var domainKey in this.domains) {
            var domain = this.domains[domainKey];
            domainActionReducerMap[domain.key] = domain.getAllReducers();
        }
        return domainActionReducerMap;
    };
    /**
     * Collector method: Return all default states from all domains
     */
    DomainManager.prototype.getDefaultStates = function () {
        var domainDefaultStates = {};
        for (var domainKey in this.domains) {
            var domain = this.domains[domainKey];
            domainDefaultStates[domain.key] = domain.defaultState;
        }
        return domainDefaultStates;
    };
    /**
     * Collector method: Return all sagas from all domains
     */
    DomainManager.prototype.getSagas = function () {
        var actionSagaDefinitions = [];
        for (var domainKey in this.domains) {
            var domain = this.domains[domainKey];
            var domainSagas = domain.getAllSagas();
            for (var actionType in domainSagas) {
                actionSagaDefinitions.push({
                    actionType: actionType,
                    saga: domainSagas[actionType]
                });
            }
        }
        return actionSagaDefinitions;
    };
    return DomainManager;
}();
exports.default = DomainManager;

/***/ }),
/* 125 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/UserState.ts ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ 17);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof _symbol2.default === "function" && (g[_iterator2.default] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!('window' in global)) {
    global['window'] = { navigator: { userAgent: 'nodejs' } };
}
var redux_1 = __webpack_require__(/*! redux */ 121);
var redux_saga_1 = __webpack_require__(/*! redux-saga */ 273);
var createReducer_1 = __webpack_require__(/*! ./helpers/createReducer */ 66);
var createRootSaga_1 = __webpack_require__(/*! ./helpers/createRootSaga */ 67);
function browserWindowHasReduxDevToolsInstalled(window) {
    return (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function';
}
;
var UserStore = function () {
    function UserStore(options, domainManager) {
        var _newTarget = this.constructor;
        this.options = options;
        this.domainManager = domainManager;
        var defaultOptions = {
            reducer: function reducer() {
                return {};
            },
            preloadedState: {},
            middlewares: [],
            enhancers: [],
            rootSaga: function rootSaga() {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            },
            reduxDevToolsCompose: true,
            reactotron: false
        };
        var optionsByDomainManager = {};
        if (this.domainManager) {
            optionsByDomainManager = _newTarget.generateOptionsByDomainManager(this.domainManager);
        }
        this.options = (0, _assign2.default)({}, defaultOptions, options, optionsByDomainManager);
        var createStoreFn = redux_1.createStore;
        var composeFn = redux_1.compose;
        var sagaMiddlewareOptions = {};
        if (this.options.reduxDevToolsCompose === true && (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === 'object' && browserWindowHasReduxDevToolsInstalled(window)) {
            composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
        if (this.options.reactotron === true) {
            if (typeof Reactotron.createStore !== 'function') {
                throw new Error("Reactotron must 'use' reactotron-redux plugin.");
            }
            if (typeof Reactotron.createSagaMonitor !== 'function') {
                throw new Error("Reactotron must 'use' reactotron-redux-saga plugin.");
            }
            createStoreFn = Reactotron.createStore;
            sagaMiddlewareOptions = {
                sagaMonitor: Reactotron.createSagaMonitor()
            };
        }
        //sagaMiddlewareOptions.onError = function() {}
        sagaMiddlewareOptions.emitter = function (emit) {
            return function (action) {
                emit(action);
                console.log('saga emit', action.type);
            };
        };
        this.sagaMiddleware = redux_saga_1.default(sagaMiddlewareOptions);
        var middlewares = this.options.middlewares.concat([this.sagaMiddleware]);
        var composedEnhancer = composeFn.apply(void 0, middlewares.map(function (middleware) {
            return redux_1.applyMiddleware(middleware);
        }).concat(this.options.enhancers));
        this.store = createStoreFn(this.options.reducer, this.options.preloadedState, composedEnhancer);
        this.startRootSaga();
        domainManager.store = this.store;
    }
    UserStore.generateOptionsByDomainManager = function (domainManager) {
        var domainReducer = domainManager.getReducers();
        var domainDefaultStates = domainManager.getDefaultStates();
        var domainSaga = domainManager.getSagas();
        var reducer = createReducer_1.default(domainReducer, domainDefaultStates /*, options.reducer*/);
        var rootSaga = createRootSaga_1.default(domainSaga /*, options.rootSaga*/);
        return {
            reducer: reducer,
            rootSaga: rootSaga
        };
    };
    /**
     * Run the configured root saga from the options.
     */
    UserStore.prototype.startRootSaga = function () {
        if (this.sagaRootTask && this.sagaRootTask.isRunning()) {
            throw new Error('Cannot start root saga because it is already running.');
        }
        this.sagaRootTask = this.sagaMiddleware.run(this.options.rootSaga);
    };
    /**
     * Dispatches the END (redux-saga) action and waits until all tasks in the root task are finished.
     * Then start a fresh root saga automatically if restart param is true (default).
     */
    UserStore.prototype.finalizeSaga = function (restart) {
        if (restart === void 0) {
            restart = true;
        }
        return __awaiter(this, void 0, void 0, function () {
            var rootTaskResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.dispatch(redux_saga_1.END);
                        return [4 /*yield*/, this.sagaRootTask.done];
                    case 1:
                        rootTaskResult = _a.sent();
                        if (restart === true) {
                            this.startRootSaga();
                        }
                        return [2 /*return*/, rootTaskResult];
                }
            });
        });
    };
    return UserStore;
}();
exports.default = UserStore;
/**
 * this.store.replaceReducer(this.options.reducer);
 */
// createReducerImmutable
/*function(middlewareAPI) {
    return next => {
        return action => {
            //console.log(action);
            //console.log(1, middlewareAPI.getState());
            let returnValue = next(action);
            //console.log('returnValue', returnValue);
            console.dir(middlewareAPI.getState(), { colors: true, depth: 10, });
            return returnValue;
        }
    }
},*/
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/global.js */ 44)))

/***/ }),
/* 126 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./src/api-request-pool/api-request-pool.ts ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ 17);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof _symbol2.default === "function" && (g[_iterator2.default] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Qs = __webpack_require__(/*! Qs */ 142);
var axios_1 = __webpack_require__(/*! axios */ 145);
//import { RequestErrorType, RequestErrorTypeString } from './errors/request-error-type'
var request_error_1 = __webpack_require__(/*! ./errors/request-error */ 72);
var wrapped_error_1 = __webpack_require__(/*! ./errors/wrapped-error */ 138);
var api_error_1 = __webpack_require__(/*! ./errors/api-error */ 132);
var express_js_proxy_error_1 = __webpack_require__(/*! ./errors/express-js-proxy-error */ 134);
var timeout_error_1 = __webpack_require__(/*! ./errors/timeout-error */ 137);
var connection_error_1 = __webpack_require__(/*! ./errors/connection-error */ 133);
var server_status_error_1 = __webpack_require__(/*! ./errors/server-status-error */ 136);
var network_error_1 = __webpack_require__(/*! ./errors/network-error */ 135);
var api_response_1 = __webpack_require__(/*! ./models/api-response */ 139);
var createDebug = __webpack_require__(/*! debug */ 214);
var debug = createDebug('api-request-pool');
var ApiRequestPool = function () {
    function ApiRequestPool(options) {
        if (options === void 0) {
            options = {};
        }
        this.options = options;
        this.cancelTokens = {};
        var defaultOptions = {
            errorHandler: function errorHandler() {},
            logHandler: function logHandler() {}
        };
        this.options = (0, _assign2.default)({}, defaultOptions, options);
        this.axios = axios_1.default.create({
            baseURL: this.options.baseURL,
            timeout: this.options.timeout,
            validateStatus: function validateStatus(status) {
                return status === 200;
            },
            maxRedirects: 0
        });
    }
    ApiRequestPool.prototype.throwError = function (requestError) {
        var handled = this.options.errorHandler(requestError);
        throw new wrapped_error_1.default(requestError, handled);
    };
    ApiRequestPool.prototype.throwNewError = function (type, innerError, response) {
        var requestError = new request_error_1.default(type, innerError || null, response || null);
        this.throwError(requestError);
    };
    ApiRequestPool.prototype.request = function (method, url, rawData, options) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debug('request', method, url, rawData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3,, 4]);
                        return [4 /*yield*/, this.innerRequest(method, url, rawData, options)];
                    case 2:
                        return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        if (err_1 instanceof wrapped_error_1.default) {
                            /*if (!err.handled) {
                              // Known rrrors which was not handled by the client
                              throw err.originalError;
                            }*/
                            throw err_1.originalError;
                        } else {
                            // Unhandled exception was throwed
                            console.log('Unhandled ApiRequestPool exception was throwed.', typeof err_1 === "undefined" ? "undefined" : (0, _typeof3.default)(err_1), (0, _keys2.default)(err_1), err_1.constructor.name, err_1.code);
                            throw err_1;
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiRequestPool.prototype.innerRequest = function (method, url, rawData, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var defaultOptions, mergedOptions, postData, params, cancelToken, uniqueRequestHash_1, prevRequestCanceller, requestConfig, result, start, ex_1, end, duration, data, apiResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaultOptions = {
                            cancelPrev: true,
                            uniqueRequestHasher: function uniqueRequestHasher(req) {
                                return req.url;
                            }
                        };
                        mergedOptions = (0, _assign2.default)({}, defaultOptions, options);
                        postData = null;
                        params = null;
                        if (method === 'get') {
                            params = rawData;
                        } else if (method === 'post') {
                            postData = rawData;
                        }
                        cancelToken = null;
                        if (mergedOptions.cancelPrev === true) {
                            uniqueRequestHash_1 = mergedOptions.uniqueRequestHasher({ method: method, url: url, rawData: rawData });
                            // Cancel prev. request with same request hash
                            //if (uniqueRequestHash in this.cancelTokens) {
                            if (typeof this.cancelTokens[uniqueRequestHash_1] !== 'undefined') {
                                prevRequestCanceller = this.cancelTokens[uniqueRequestHash_1];
                                prevRequestCanceller('Cancel due of new request.');
                                delete this.cancelTokens[uniqueRequestHash_1];
                            }
                            // Create new cancel token setter for this request
                            cancelToken = new axios_1.default.CancelToken(function (cancel) {
                                _this.cancelTokens[uniqueRequestHash_1] = cancel;
                            });
                        }
                        requestConfig = {
                            url: url,
                            data: postData,
                            params: params,
                            transformRequest: function transformRequest(_data) {
                                if (!_data) {
                                    return null;
                                }
                                if (IS_BROWSER) {
                                    if (_data instanceof FormData) {
                                        return _data;
                                    }
                                }
                                return Qs.stringify(_data, { arrayFormat: 'indices' });
                            },
                            paramsSerializer: function paramsSerializer(_params) {
                                return Qs.stringify(_params, { arrayFormat: 'indices' });
                            },
                            onDownloadProgress: function onDownloadProgress(progressEvent) {},
                            onUploadProgress: function onUploadProgress(progressEvent) {},
                            cancelToken: cancelToken
                        };
                        start = new Date().getTime();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3,, 4]);
                        return [4 /*yield*/, this.axios.request(requestConfig)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        if (axios_1.default.isCancel(ex_1)) {
                            this.throwNewError('CANCEL_ERROR', ex_1);
                        }
                        if (timeout_error_1.isTimeoutError(ex_1)) {
                            this.throwNewError('TIMEOUT_ERROR', ex_1);
                        }
                        if (connection_error_1.isNodeJsConnectionError(ex_1)) {
                            this.throwNewError('CONNECTION_ERROR', ex_1);
                        }
                        if (server_status_error_1.isServerStatusError(ex_1)) {
                            this.throwNewError('INVALID_STATUS', ex_1);
                        }
                        if (network_error_1.isNetworkError(ex_1)) {
                            this.throwNewError('NETWORK_ERROR', ex_1);
                        }
                        throw ex_1;
                    case 4:
                        end = new Date().getTime();
                        duration = end - start;
                        this.options.logHandler({
                            url: result.config.url,
                            method: result.config.method,
                            data: result.config.data,
                            headers: result.config.headers
                        }, {
                            body: result.data,
                            status: result.status,
                            headers: result.headers
                        }, duration);
                        data = result.data;
                        if (!(data instanceof Object)) {
                            this.throwNewError('INVALID_RESPONSE_TYPE', null, result);
                        }
                        if (express_js_proxy_error_1.isExpressJsProxyError(data)) {
                            this.throwNewError('EXPRESS_PROXY_ERROR', null, result);
                        }
                        if (!api_response_1.isValidResponseJsonStructure(data)) {
                            this.throwNewError('INVALID_JSON_STRUCTURE', null, result);
                        }
                        apiResponse = data;
                        if (!apiResponse.success) {
                            this.throwError(new api_error_1.default(data.errors));
                        }
                        // Everything went fine. Return now the data prop.
                        return [2 /*return*/, data.data];
                }
            });
        });
    };
    return ApiRequestPool;
}();
exports.default = ApiRequestPool;

/***/ }),
/* 127 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/decorators/action.ts ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var createActionInterfaceCreator_1 = __webpack_require__(/*! ./internal/createActionInterfaceCreator */ 45);
function default_1(actionType) {
    return function (target, key, descriptor) {
        descriptor.value = createActionInterfaceCreator_1.default(target, actionType, descriptor.value);
        // Set original method name on new function wrapper
        //descriptor.value.originalName = key;
    };
}
exports.default = default_1;

/***/ }),
/* 128 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/decorators/reducer.ts ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var setActionReducerHandler_1 = __webpack_require__(/*! ./internal/setActionReducerHandler */ 73);
function default_1(reducerFunction) {
    return function (target, key, descriptor) {
        var actionType = descriptor.value.actionType;
        if (!actionType) {
            throw new Error("The method " + key + " must be defined as an action with the @action decorator before you can handle it. " + 'Ensure that the @action decorator is after the @reducer decorator.');
        }
        setActionReducerHandler_1.default(target, actionType, reducerFunction);
        return descriptor;
    };
}
exports.default = default_1;

/***/ }),
/* 129 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/decorators/reducerAction.ts ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var createActionInterfaceCreator_1 = __webpack_require__(/*! ./internal/createActionInterfaceCreator */ 45);
var setActionReducerHandler_1 = __webpack_require__(/*! ./internal/setActionReducerHandler */ 73);
exports.default = function (actionType, reducerFunction) {
    return function (target, key, descriptor) {
        //type DomainState = typeof target['state'];
        descriptor.value = createActionInterfaceCreator_1.default(target, actionType, descriptor.value);
        setActionReducerHandler_1.default(target, actionType, reducerFunction);
        return descriptor;
    };
};

/***/ }),
/* 130 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/decorators/saga.ts ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var setActionSagaHandler_1 = __webpack_require__(/*! ./internal/setActionSagaHandler */ 74);
function default_1(sagaGeneratorFunction) {
    return function (target, key, descriptor) {
        var actionType = descriptor.value.actionType;
        if (!actionType) {
            throw new Error("The method " + key + " must be defined as an action with the @action decorator before you can handle it. " + 'Ensure that the @action decorator is after the @saga decorator.');
        }
        setActionSagaHandler_1.default(target, actionType, sagaGeneratorFunction);
        return descriptor;
    };
}
exports.default = default_1;

/***/ }),
/* 131 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/decorators/sagaAction.ts ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var createActionInterfaceCreator_1 = __webpack_require__(/*! ./internal/createActionInterfaceCreator */ 45);
var setActionSagaHandler_1 = __webpack_require__(/*! ./internal/setActionSagaHandler */ 74);
exports.default = function (actionType, sagaGeneratorFunction) {
    return function (target, key, descriptor) {
        descriptor.value = createActionInterfaceCreator_1.default(target, actionType, descriptor.value);
        setActionSagaHandler_1.default(target, actionType, sagaGeneratorFunction);
        return descriptor;
    };
};

/***/ }),
/* 132 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./src/api-request-pool/errors/api-error.ts ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 29);

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 48);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var request_error_1 = __webpack_require__(/*! ./request-error */ 72);
var ApiError = function (_super) {
    __extends(ApiError, _super);
    function ApiError(apiError) {
        var _this = _super.call(this, 'API_ERROR') || this;
        _this.apiError = apiError;
        return _this;
    }
    return ApiError;
}(request_error_1.default);
exports.default = ApiError;

/***/ }),
/* 133 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./src/api-request-pool/errors/connection-error.ts ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var NODEJS_CONNECTION_ERROR_CODES = ['ENOTFOUND', 'ECONNREFUSED', 'ECONNRESET'];
function isNodeJsConnectionError(err) {
    return err.code && NODEJS_CONNECTION_ERROR_CODES.includes(err.code);
}
exports.isNodeJsConnectionError = isNodeJsConnectionError;

/***/ }),
/* 134 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/api-request-pool/errors/express-js-proxy-error.ts ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isExpressJsProxyError(obj) {
    return 'errno' in obj;
}
exports.isExpressJsProxyError = isExpressJsProxyError;

/***/ }),
/* 135 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./src/api-request-pool/errors/network-error.ts ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isNetworkError(obj) {
    return obj.message === 'Network Error';
}
exports.isNetworkError = isNetworkError;

/***/ }),
/* 136 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./src/api-request-pool/errors/server-status-error.ts ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isServerStatusError(err) {
    return err.response && err.response.status != 200;
}
exports.isServerStatusError = isServerStatusError;

/***/ }),
/* 137 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./src/api-request-pool/errors/timeout-error.ts ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isTimeoutError(err) {
    return err.code && err.code === 'ECONNABORTED';
}
exports.isTimeoutError = isTimeoutError;

/***/ }),
/* 138 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./src/api-request-pool/errors/wrapped-error.ts ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var WrappedError = function () {
    function WrappedError(originalError, handled) {
        this.originalError = originalError;
        this.handled = handled;
    }
    return WrappedError;
}();
exports.default = WrappedError;

/***/ }),
/* 139 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./src/api-request-pool/models/api-response.ts ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isValidResponseJsonStructure(obj) {
    return 'success' in obj && 'data' in obj && 'errors' in obj;
}
exports.isValidResponseJsonStructure = isValidResponseJsonStructure;

/***/ }),
/* 140 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./src/decorators/internal/isGenerator.ts ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function isGenerator(variable) {
    return variable.constructor.name === 'GeneratorFunction';
}
exports.default = isGenerator;

/***/ }),
/* 141 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/utils/pickBy.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Keep only the map entries which value pass the function. Preserve keys.
 */
function pickBy(obj, fn) {
    var newObj = {};
    for (var i in obj) {
        var val = obj[i];
        if (fn(obj[i])) {
            newObj[i] = obj[i];
        }
    }
    return newObj;
}
exports.default = pickBy;

/***/ }),
/* 142 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/Qs/lib/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 144);
var parse = __webpack_require__(/*! ./parse */ 143);
var formats = __webpack_require__(/*! ./formats */ 76);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

/***/ }),
/* 143 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/Qs/lib/parse.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 29);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./utils */ 77);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObjectRecursive(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? (0, _create2.default)(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? (0, _create2.default)(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? (0, _create2.default)(null) : {};

    // Iterate over the keys and setup the new object

    var keys = (0, _keys2.default)(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

/***/ }),
/* 144 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/Qs/lib/stringify.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./utils */ 77);
var formats = __webpack_require__(/*! ./formats */ 76);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) {
        // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) {
        // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = (0, _keys2.default)(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
        } else {
            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = (0, _keys2.default)(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
    }

    return keys.join(delimiter);
};

/***/ }),
/* 145 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/axios/index.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/axios */ 146);

/***/ }),
/* 146 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/axios/lib/axios.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./utils */ 4);
var bind = __webpack_require__(/*! ./helpers/bind */ 82);
var Axios = __webpack_require__(/*! ./core/Axios */ 148);
var defaults = __webpack_require__(/*! ./defaults */ 46);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 79);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 147);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 80);

// Expose all/spread
axios.all = function all(promises) {
  return _promise2.default.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 162);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 147 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/axios/lib/cancel/CancelToken.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cancel = __webpack_require__(/*! ./Cancel */ 79);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new _promise2.default(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 148 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/axios/lib/core/Axios.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = __webpack_require__(/*! ./../defaults */ 46);
var utils = __webpack_require__(/*! ./../utils */ 4);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 149);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 150);
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 158);
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 156);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = _promise2.default.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 149 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/axios/lib/core/InterceptorManager.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 4);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 150 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/axios/lib/core/dispatchRequest.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 8);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./../utils */ 4);
var transformData = __webpack_require__(/*! ./transformData */ 153);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 80);
var defaults = __webpack_require__(/*! ../defaults */ 46);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return _promise2.default.reject(reason);
  });
};

/***/ }),
/* 151 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/axios/lib/core/enhanceError.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),
/* 152 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/axios/lib/core/settle.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 81);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),
/* 153 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/axios/lib/core/transformData.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 4);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 154 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/axios/lib/helpers/btoa.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 155 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/axios/lib/helpers/buildURL.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 20);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = __webpack_require__(/*! ./../utils */ 4);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = (0, _stringify2.default)(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 156 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/axios/lib/helpers/combineURLs.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};

/***/ }),
/* 157 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/axios/lib/helpers/cookies.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 4);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 158 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 159 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 4);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 160 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 4);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 161 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 4);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 162 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/axios/lib/helpers/spread.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 163 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-symbols.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ 174), __esModule: true };

/***/ }),
/* 164 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/babel-runtime/core-js/object/is.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/is */ 176), __esModule: true };

/***/ }),
/* 165 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/core-js/reflect/own-keys.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(/*! core-js/library/fn/reflect/own-keys */ 180), __esModule: true };

/***/ }),
/* 166 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/fn/array/from.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.string.iterator */ 22);
__webpack_require__(/*! ../../modules/es6.array.from */ 204);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Array.from;

/***/ }),
/* 167 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../modules/web.dom.iterable */ 37);
__webpack_require__(/*! ../modules/es6.string.iterator */ 22);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 202);

/***/ }),
/* 168 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/is-iterable.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../modules/web.dom.iterable */ 37);
__webpack_require__(/*! ../modules/es6.string.iterator */ 22);
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 203);

/***/ }),
/* 169 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/fn/json/stringify.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 20);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var core = __webpack_require__(/*! ../../modules/$.core */ 1);
module.exports = function stringify(it) {
  // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || _stringify2.default).apply(JSON, arguments);
};

/***/ }),
/* 170 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/assign.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.assign */ 206);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Object.assign;

/***/ }),
/* 171 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../../modules/$ */ 2);
module.exports = function create(P, D) {
  return $.create(P, D);
};

/***/ }),
/* 172 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../../modules/$ */ 2);
module.exports = function defineProperty(it, key, desc) {
  return $.setDesc(it, key, desc);
};

/***/ }),
/* 173 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-names.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../../modules/$ */ 2);
__webpack_require__(/*! ../../modules/es6.object.get-own-property-names */ 207);
module.exports = function getOwnPropertyNames(it) {
  return $.getNames(it);
};

/***/ }),
/* 174 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-symbols.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.symbol */ 97);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Object.getOwnPropertySymbols;

/***/ }),
/* 175 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/get-prototype-of.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 208);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Object.getPrototypeOf;

/***/ }),
/* 176 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/core-js/library/fn/object/is.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.is */ 209);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Object.is;

/***/ }),
/* 177 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.keys */ 210);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Object.keys;

/***/ }),
/* 178 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 211);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Object.setPrototypeOf;

/***/ }),
/* 179 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ./~/core-js/library/fn/promise.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../modules/es6.object.to-string */ 96);
__webpack_require__(/*! ../modules/es6.string.iterator */ 22);
__webpack_require__(/*! ../modules/web.dom.iterable */ 37);
__webpack_require__(/*! ../modules/es6.promise */ 212);
module.exports = __webpack_require__(/*! ../modules/$.core */ 1).Promise;

/***/ }),
/* 180 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/fn/reflect/own-keys.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.reflect.own-keys */ 213);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Reflect.ownKeys;

/***/ }),
/* 181 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/symbol/index.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.symbol */ 97);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 96);
module.exports = __webpack_require__(/*! ../../modules/$.core */ 1).Symbol;

/***/ }),
/* 182 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.string.iterator */ 22);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 37);
module.exports = __webpack_require__(/*! ../../modules/$.wks */ 3)('iterator');

/***/ }),
/* 183 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {/* empty */};

/***/ }),
/* 184 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.dom-create.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./$.is-object */ 33),
    document = __webpack_require__(/*! ./$.global */ 7).document
// in old IE typeof document.createElement is 'object'
,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 185 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.enum-keys.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var $ = __webpack_require__(/*! ./$ */ 2);
module.exports = function (it) {
  var keys = $.getKeys(it),
      getSymbols = $.getSymbols;
  if (getSymbols) {
    var symbols = getSymbols(it),
        isEnum = $.isEnum,
        i = 0,
        key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) keys.push(key);
    }
  }
  return keys;
};

/***/ }),
/* 186 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.for-of.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./$.ctx */ 18),
    call = __webpack_require__(/*! ./$.iter-call */ 87),
    isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 86),
    anObject = __webpack_require__(/*! ./$.an-object */ 12),
    toLength = __webpack_require__(/*! ./$.to-length */ 94),
    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 58);
module.exports = function (iterable, entries, fn, that) {
  var iterFn = getIterFn(iterable),
      f = ctx(fn, that, entries ? 2 : 1),
      index = 0,
      length,
      step,
      iterator;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    call(iterator, f, step.value, entries);
  }
};

/***/ }),
/* 187 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.html.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./$.global */ 7).document && document.documentElement;

/***/ }),
/* 188 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.invoke.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

/***/ }),
/* 189 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./$.cof */ 21);
module.exports = Array.isArray || function (arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 190 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-create.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ./$ */ 2),
    descriptor = __webpack_require__(/*! ./$.property-desc */ 56),
    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 34),
    IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./$.hide */ 53)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 3)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 191 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-step.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 192 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.keyof.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ./$ */ 2),
    toIObject = __webpack_require__(/*! ./$.to-iobject */ 35);
module.exports = function (object, el) {
  var O = toIObject(object),
      keys = $.getKeys(O),
      length = keys.length,
      index = 0,
      key;
  while (length > index) {
    if (O[key = keys[index++]] === el) return key;
  }
};

/***/ }),
/* 193 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.microtask.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./$.global */ 7),
    macrotask = __webpack_require__(/*! ./$.task */ 201).set,
    Observer = global.MutationObserver || global.WebKitMutationObserver,
    process = global.process,
    Promise = global.Promise,
    isNode = __webpack_require__(/*! ./$.cof */ 21)(process) == 'process',
    head,
    last,
    notify;

var flush = function flush() {
  var parent, domain, fn;
  if (isNode && (parent = process.domain)) {
    process.domain = null;
    parent.exit();
  }
  while (head) {
    domain = head.domain;
    fn = head.fn;
    if (domain) domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if (domain) domain.exit();
    head = head.next;
  }last = undefined;
  if (parent) parent.enter();
};

// Node.js
if (isNode) {
  notify = function notify() {
    process.nextTick(flush);
  };
  // browsers with MutationObserver
} else if (Observer) {
  var toggle = 1,
      node = document.createTextNode('');
  new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
  notify = function notify() {
    node.data = toggle = -toggle;
  };
  // environments with maybe non-completely correct, but existent Promise
} else if (Promise && Promise.resolve) {
  notify = function notify() {
    Promise.resolve().then(flush);
  };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
} else {
  notify = function notify() {
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn) {
  var task = { fn: fn, next: undefined, domain: isNode && process.domain };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  }last = task;
};

/***/ }),
/* 194 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.object-assign.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ 15);

var _symbol2 = _interopRequireDefault(_symbol);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.1 Object.assign(target, source, ...)
var $ = __webpack_require__(/*! ./$ */ 2),
    toObject = __webpack_require__(/*! ./$.to-object */ 36),
    IObject = __webpack_require__(/*! ./$.iobject */ 85);

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = __webpack_require__(/*! ./$.fails */ 32)(function () {
  var a = _assign2.default,
      A = {},
      B = {},
      S = (0, _symbol2.default)(),
      K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return a({}, A)[S] != 7 || (0, _keys2.default)(a({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target),
      $$ = arguments,
      $$len = $$.length,
      index = 1,
      getKeys = $.getKeys,
      getSymbols = $.getSymbols,
      isEnum = $.isEnum;
  while ($$len > index) {
    var S = IObject($$[index++]),
        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }
  return T;
} : _assign2.default;

/***/ }),
/* 195 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.own-keys.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all object keys, includes non-enumerable and symbols
var $ = __webpack_require__(/*! ./$ */ 2),
    anObject = __webpack_require__(/*! ./$.an-object */ 12),
    Reflect = __webpack_require__(/*! ./$.global */ 7).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = $.getNames(anObject(it)),
      getSymbols = $.getSymbols;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 196 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine-all.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefine = __webpack_require__(/*! ./$.redefine */ 57);
module.exports = function (target, src) {
  for (var key in src) {
    redefine(target, key, src[key]);
  }return target;
};

/***/ }),
/* 197 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.set-species.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = __webpack_require__(/*! ./$.core */ 1),
    $ = __webpack_require__(/*! ./$ */ 2),
    DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 31),
    SPECIES = __webpack_require__(/*! ./$.wks */ 3)('species');

module.exports = function (KEY) {
  var C = core[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 198 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/$.species-constructor.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./$.an-object */ 12),
    aFunction = __webpack_require__(/*! ./$.a-function */ 49),
    SPECIES = __webpack_require__(/*! ./$.wks */ 3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor,
      S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 199 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.strict-new.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
  return it;
};

/***/ }),
/* 200 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.string-at.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./$.to-integer */ 93),
    defined = __webpack_require__(/*! ./$.defined */ 51);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that)),
        i = toInteger(pos),
        l = s.length,
        a,
        b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 201 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.task.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./$.ctx */ 18),
    invoke = __webpack_require__(/*! ./$.invoke */ 188),
    html = __webpack_require__(/*! ./$.html */ 187),
    cel = __webpack_require__(/*! ./$.dom-create */ 184),
    global = __webpack_require__(/*! ./$.global */ 7),
    process = global.process,
    setTask = global.setImmediate,
    clearTask = global.clearImmediate,
    MessageChannel = global.MessageChannel,
    counter = 0,
    queue = {},
    ONREADYSTATECHANGE = 'onreadystatechange',
    defer,
    channel,
    port;
var run = function run() {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function listner(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [],
        i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./$.cof */ 21)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 202 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./$.an-object */ 12),
    get = __webpack_require__(/*! ./core.get-iterator-method */ 58);
module.exports = __webpack_require__(/*! ./$.core */ 1).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 203 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/core.is-iterable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./$.classof */ 50),
    ITERATOR = __webpack_require__(/*! ./$.wks */ 3)('iterator'),
    Iterators = __webpack_require__(/*! ./$.iterators */ 19);
module.exports = __webpack_require__(/*! ./$.core */ 1).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 204 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.from.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 16);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = __webpack_require__(/*! ./$.ctx */ 18),
    $export = __webpack_require__(/*! ./$.export */ 9),
    toObject = __webpack_require__(/*! ./$.to-object */ 36),
    call = __webpack_require__(/*! ./$.iter-call */ 87),
    isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 86),
    toLength = __webpack_require__(/*! ./$.to-length */ 94),
    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 58);
$export($export.S + $export.F * !__webpack_require__(/*! ./$.iter-detect */ 89)(function (iter) {
  (0, _from2.default)(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
    var O = toObject(arrayLike),
        C = typeof this == 'function' ? this : Array,
        $$ = arguments,
        $$len = $$.length,
        mapfn = $$len > 1 ? $$[1] : undefined,
        mapping = mapfn !== undefined,
        index = 0,
        iterFn = getIterFn(O),
        length,
        result,
        step,
        iterator;
    if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

/***/ }),
/* 205 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 183),
    step = __webpack_require__(/*! ./$.iter-step */ 191),
    Iterators = __webpack_require__(/*! ./$.iterators */ 19),
    toIObject = __webpack_require__(/*! ./$.to-iobject */ 35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./$.iter-define */ 88)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t,
      kind = this._k,
      index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 206 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./$.export */ 9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./$.object-assign */ 194) });

/***/ }),
/* 207 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-names.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./$.object-sap */ 55)('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./$.get-names */ 84).get;
});

/***/ }),
/* 208 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./$.to-object */ 36);

__webpack_require__(/*! ./$.object-sap */ 55)('getPrototypeOf', function ($getPrototypeOf) {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 209 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.is.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./$.export */ 9);
$export($export.S, 'Object', { is: __webpack_require__(/*! ./$.same-value */ 90) });

/***/ }),
/* 210 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./$.to-object */ 36);

__webpack_require__(/*! ./$.object-sap */ 55)('keys', function ($keys) {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 211 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./$.export */ 9);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./$.set-proto */ 91).set });

/***/ }),
/* 212 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/es6.promise.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ./$ */ 2),
    LIBRARY = __webpack_require__(/*! ./$.library */ 54),
    global = __webpack_require__(/*! ./$.global */ 7),
    ctx = __webpack_require__(/*! ./$.ctx */ 18),
    classof = __webpack_require__(/*! ./$.classof */ 50),
    $export = __webpack_require__(/*! ./$.export */ 9),
    isObject = __webpack_require__(/*! ./$.is-object */ 33),
    anObject = __webpack_require__(/*! ./$.an-object */ 12),
    aFunction = __webpack_require__(/*! ./$.a-function */ 49),
    strictNew = __webpack_require__(/*! ./$.strict-new */ 199),
    forOf = __webpack_require__(/*! ./$.for-of */ 186),
    setProto = __webpack_require__(/*! ./$.set-proto */ 91).set,
    same = __webpack_require__(/*! ./$.same-value */ 90),
    SPECIES = __webpack_require__(/*! ./$.wks */ 3)('species'),
    speciesConstructor = __webpack_require__(/*! ./$.species-constructor */ 198),
    asap = __webpack_require__(/*! ./$.microtask */ 193),
    PROMISE = 'Promise',
    process = global.process,
    isNode = classof(process) == 'process',
    P = global[PROMISE],
    empty = function empty() {/* empty */},
    Wrapper;

var testResolve = function testResolve(sub) {
  var test = new P(empty),
      promise;
  if (sub) test.constructor = function (exec) {
    exec(empty, empty);
  };
  (promise = P.resolve(test))['catch'](empty);
  return promise === test;
};

var USE_NATIVE = function () {
  var works = false;
  function P2(x) {
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
    // actual Firefox has broken subclass support, test that
    if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if (works && __webpack_require__(/*! ./$.descriptors */ 31)) {
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function get() {
          thenableThenGotten = true;
        }
      }));
      works = thenableThenGotten;
    }
  } catch (e) {
    works = false;
  }
  return works;
}();

// helpers
var sameConstructor = function sameConstructor(a, b) {
  // library wrapper special case
  if (LIBRARY && a === P && b === Wrapper) return true;
  return same(a, b);
};
var getConstructor = function getConstructor(C) {
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve), this.reject = aFunction(reject);
};
var perform = function perform(exec) {
  try {
    exec();
  } catch (e) {
    return { error: e };
  }
};
var notify = function notify(record, isReject) {
  if (record.n) return;
  record.n = true;
  var chain = record.c;
  asap(function () {
    var value = record.v,
        ok = record.s == 1,
        i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail,
          resolve = reaction.resolve,
          reject = reaction.reject,
          result,
          then;
      try {
        if (handler) {
          if (!ok) record.h = true;
          result = handler === true ? value : handler(value);
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if (isReject) setTimeout(function () {
      var promise = record.p,
          handler,
          console;
      if (isUnhandled(promise)) {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function isUnhandled(promise) {
  var record = promise._d,
      chain = record.a || record.c,
      i = 0,
      reaction;
  if (record.h) return false;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  }return true;
};
var $reject = function $reject(value) {
  var record = this;
  if (record.d) return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function $resolve(value) {
  var record = this,
      then;
  if (record.d) return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if (record.p === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      asap(function () {
        var wrapper = { r: record, d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch (e) {
    $reject.call({ r: record, d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor) {
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE), // <- promise
      c: [], // <- awaiting reactions
      a: undefined, // <- checked in isUnhandled reactions
      s: 0, // <- state
      d: false, // <- done
      v: undefined, // <- value
      h: false, // <- handled rejection
      n: false // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch (err) {
      $reject.call(record, err);
    }
  };
  __webpack_require__(/*! ./$.redefine-all */ 196)(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = new PromiseCapability(speciesConstructor(this, P)),
          promise = reaction.promise,
          record = this._d;
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if (record.a) record.a.push(reaction);
      if (record.s) notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
__webpack_require__(/*! ./$.set-to-string-tag */ 34)(P, PROMISE);
__webpack_require__(/*! ./$.set-species */ 197)(PROMISE);
Wrapper = __webpack_require__(/*! ./$.core */ 1)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = new PromiseCapability(this),
        $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if (x instanceof P && sameConstructor(x.constructor, this)) return x;
    var capability = new PromiseCapability(this),
        $$resolve = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./$.iter-detect */ 89)(function (iter) {
  P.all(iter)['catch'](function () {});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = getConstructor(this),
        capability = new PromiseCapability(C),
        resolve = capability.resolve,
        reject = capability.reject,
        values = [];
    var abrupt = perform(function () {
      forOf(iterable, false, values.push, values);
      var remaining = values.length,
          results = Array(remaining);
      if (remaining) $.each.call(values, function (promise, index) {
        var alreadyCalled = false;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });else resolve(results);
    });
    if (abrupt) reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = getConstructor(this),
        capability = new PromiseCapability(C),
        reject = capability.reject;
    var abrupt = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (abrupt) reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 213 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.reflect.own-keys.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./$.export */ 9);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./$.own-keys */ 195) });

/***/ }),
/* 214 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/debug/src/browser.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 20);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ 215);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window && window.console && (console.firebug || console.exception && console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return (0, _stringify2.default)(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === 'undefined' ? 'undefined' : (0, _typeof3.default)(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  try {
    return exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 10)))

/***/ }),
/* 215 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/debug/src/debug.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ 264);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 216 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/lodash-es/_baseGetTag.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ 98);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(/*! ./_getRawTag.js */ 219);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(/*! ./_objectToString.js */ 220);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 217 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/lodash-es/_freeGlobal.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : (0, _typeof3.default)(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 44)))

/***/ }),
/* 218 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/lodash-es/_getPrototype.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 83);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _overArg = __webpack_require__(/*! ./_overArg.js */ 221);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(_getPrototypeOf2.default, Object);

exports.default = getPrototype;

/***/ }),
/* 219 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash-es/_getRawTag.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ 98);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 220 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/lodash-es/_objectToString.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 221 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash-es/_overArg.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 222 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash-es/_root.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

var _freeGlobal = __webpack_require__(/*! ./_freeGlobal.js */ 217);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : (0, _typeof3.default)(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 223 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash-es/isObjectLike.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 224 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_DataView.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ 23),
    root = __webpack_require__(/*! ./_root */ 13);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),
/* 225 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/_Map.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ 23),
    root = __webpack_require__(/*! ./_root */ 13);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),
/* 226 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_Promise.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ 23),
    root = __webpack_require__(/*! ./_root */ 13);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),
/* 227 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_Reflect.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ 13);

/** Built-in value references. */
var Reflect = root.Reflect;

module.exports = Reflect;

/***/ }),
/* 228 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/_Set.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ 23),
    root = __webpack_require__(/*! ./_root */ 13);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),
/* 229 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ 13);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 230 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_WeakMap.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ 23),
    root = __webpack_require__(/*! ./_root */ 13);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),
/* 231 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_arrayMap.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),
/* 232 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/lodash/_assignInDefaults.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(/*! ./eq */ 60);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }
  return objValue;
}

module.exports = assignInDefaults;

/***/ }),
/* 233 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_assignValue.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(/*! ./eq */ 60);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

module.exports = assignValue;

/***/ }),
/* 234 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_baseHas.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPrototype = __webpack_require__(/*! ./_getPrototype */ 101);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
  // that are composed entirely of index properties, return `false` for
  // `hasOwnProperty` checks of them.
  return hasOwnProperty.call(object, key) || (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) == 'object' && key in object && getPrototype(object) === null;
}

module.exports = baseHas;

/***/ }),
/* 235 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_baseIndexOf.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOfNaN = __webpack_require__(/*! ./_indexOfNaN */ 246);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;

/***/ }),
/* 236 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_baseKeys.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _keys2.default;

/**
 * The base implementation of `_.keys` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  return nativeKeys(Object(object));
}

module.exports = baseKeys;

/***/ }),
/* 237 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseKeysIn.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Reflect = __webpack_require__(/*! ./_Reflect */ 227),
    iteratorToArray = __webpack_require__(/*! ./_iteratorToArray */ 248);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var enumerate = Reflect ? Reflect.enumerate : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * The base implementation of `_.keysIn` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  object = object == null ? object : Object(object);

  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}

// Fallback for IE < 9 with es6-shim.
if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
  baseKeysIn = function baseKeysIn(object) {
    return iteratorToArray(enumerate(object));
  };
}

module.exports = baseKeysIn;

/***/ }),
/* 238 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_baseProperty.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),
/* 239 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_baseTimes.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),
/* 240 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseValues.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayMap = __webpack_require__(/*! ./_arrayMap */ 231);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function (key) {
    return object[key];
  });
}

module.exports = baseValues;

/***/ }),
/* 241 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_checkGlobal.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return value && value.Object === Object ? value : null;
}

module.exports = checkGlobal;

/***/ }),
/* 242 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_copyObjectWith.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assignValue = __webpack_require__(/*! ./_assignValue */ 233);

/**
 * This function is like `copyObject` except that it accepts a function to
 * customize copied values.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObjectWith(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];

    assignValue(object, key, newValue);
  }
  return object;
}

module.exports = copyObjectWith;

/***/ }),
/* 243 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_createAssigner.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 247),
    rest = __webpack_require__(/*! ./rest */ 110);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return rest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

/***/ }),
/* 244 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_getLength.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseProperty = __webpack_require__(/*! ./_baseProperty */ 238);

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a
 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
 * Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

/***/ }),
/* 245 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/_getTag.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DataView = __webpack_require__(/*! ./_DataView */ 224),
    Map = __webpack_require__(/*! ./_Map */ 225),
    Promise = __webpack_require__(/*! ./_Promise */ 226),
    Set = __webpack_require__(/*! ./_Set */ 228),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ 230),
    toSource = __webpack_require__(/*! ./_toSource */ 105);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  return objectToString.call(value);
}

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

/***/ }),
/* 246 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_indexOfNaN.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while (fromRight ? index-- : ++index < length) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = indexOfNaN;

/***/ }),
/* 247 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_isIterateeCall.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eq = __webpack_require__(/*! ./eq */ 60),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 24),
    isIndex = __webpack_require__(/*! ./_isIndex */ 59),
    isObject = __webpack_require__(/*! ./isObject */ 40);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : (0, _typeof3.default)(index);
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 248 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/lodash/_iteratorToArray.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

module.exports = iteratorToArray;

/***/ }),
/* 249 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/assignInWith.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copyObjectWith = __webpack_require__(/*! ./_copyObjectWith */ 242),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 243),
    keysIn = __webpack_require__(/*! ./keysIn */ 259);

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
  copyObjectWith(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;

/***/ }),
/* 250 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/constant.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var getter = _.constant(object);
 *
 * getter() === object;
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),
/* 251 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/defaults.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = __webpack_require__(/*! ./_apply */ 100),
    assignInDefaults = __webpack_require__(/*! ./_assignInDefaults */ 232),
    assignInWith = __webpack_require__(/*! ./assignInWith */ 249),
    rest = __webpack_require__(/*! ./rest */ 110);

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var defaults = rest(function (args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

module.exports = defaults;

/***/ }),
/* 252 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/includes.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 235),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 24),
    isString = __webpack_require__(/*! ./isString */ 26),
    toInteger = __webpack_require__(/*! ./toInteger */ 111),
    values = __webpack_require__(/*! ./values */ 263);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
 * // => true
 *
 * _.includes('pebbles', 'eb');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}

module.exports = includes;

/***/ }),
/* 253 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/lodash/isArrayLikeObject.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 24),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 25);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),
/* 254 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isBuffer.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constant = __webpack_require__(/*! ./constant */ 250),
    root = __webpack_require__(/*! ./_root */ 13);

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = objectTypes[ false ? 'undefined' : (0, _typeof3.default)(exports)] && exports && !exports.nodeType ? exports : undefined;

/** Detect free variable `module`. */
var freeModule = objectTypes[ false ? 'undefined' : (0, _typeof3.default)(module)] && module && !module.nodeType ? module : undefined;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports ? freeExports : undefined;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = !Buffer ? constant(false) : function (value) {
  return value instanceof Buffer;
};

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 65)(module)))

/***/ }),
/* 255 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/isEmpty.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTag = __webpack_require__(/*! ./_getTag */ 245),
    isArguments = __webpack_require__(/*! ./isArguments */ 106),
    isArray = __webpack_require__(/*! ./isArray */ 39),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 24),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 254),
    isFunction = __webpack_require__(/*! ./isFunction */ 14),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 25),
    isString = __webpack_require__(/*! ./isString */ 26),
    keys = __webpack_require__(/*! ./keys */ 109);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value) || isBuffer(value))) {
    return !value.length;
  }
  if (isObjectLike(value)) {
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return !(nonEnumShadows && keys(value).length);
}

module.exports = isEmpty;

/***/ }),
/* 256 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isNative.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ./isFunction */ 14),
    isHostObject = __webpack_require__(/*! ./_isHostObject */ 103),
    isObject = __webpack_require__(/*! ./isObject */ 40),
    toSource = __webpack_require__(/*! ./_toSource */ 105);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (!isObject(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = isNative;

/***/ }),
/* 257 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/lodash/isNil.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;

/***/ }),
/* 258 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/isNull.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;

/***/ }),
/* 259 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/keysIn.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ 237),
    indexKeys = __webpack_require__(/*! ./_indexKeys */ 102),
    isIndex = __webpack_require__(/*! ./_isIndex */ 59),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 104);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  var index = -1,
      isProto = isPrototype(object),
      props = baseKeysIn(object),
      propsLength = props.length,
      indexes = indexKeys(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;

  while (++index < propsLength) {
    var key = props[index];
    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keysIn;

/***/ }),
/* 260 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/last.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

/***/ }),
/* 261 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/toNumber.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ./isFunction */ 14),
    isObject = __webpack_require__(/*! ./isObject */ 40),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 63);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3);
 * // => 3
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3');
 * // => 3
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = isFunction(value.valueOf) ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 262 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/toString.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(/*! ./_Symbol */ 229),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 63);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toString;

/***/ }),
/* 263 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/values.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseValues = __webpack_require__(/*! ./_baseValues */ 240),
    keys = __webpack_require__(/*! ./keys */ 109);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = values;

/***/ }),
/* 264 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./~/ms/index.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 20);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + (0, _stringify2.default)(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 10000) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 265 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/reduce-reducers/lib/index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = reduceReducers;

function reduceReducers() {
  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
}

module.exports = exports["default"];

/***/ }),
/* 266 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/redux-actions/es/arrayToObject.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
};

/***/ }),
/* 267 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/redux-actions/es/createActions.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 16);

var _from2 = _interopRequireDefault(_from);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 30);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

var _isIterable2 = __webpack_require__(/*! babel-runtime/core-js/is-iterable */ 28);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 27);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = createActions;

var _camelCase = __webpack_require__(/*! ./camelCase */ 112);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _identity = __webpack_require__(/*! lodash/identity */ 61);

var _identity2 = _interopRequireDefault(_identity);

var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 62);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isArray = __webpack_require__(/*! lodash/isArray */ 39);

var _isArray2 = _interopRequireDefault(_isArray);

var _last = __webpack_require__(/*! lodash/last */ 260);

var _last2 = _interopRequireDefault(_last);

var _isString = __webpack_require__(/*! lodash/isString */ 26);

var _isString2 = _interopRequireDefault(_isString);

var _defaults = __webpack_require__(/*! lodash/defaults */ 251);

var _defaults2 = _interopRequireDefault(_defaults);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ 14);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _createAction = __webpack_require__(/*! ./createAction */ 114);

var _createAction2 = _interopRequireDefault(_createAction);

var _invariant = __webpack_require__(/*! invariant */ 38);

var _invariant2 = _interopRequireDefault(_invariant);

var _arrayToObject = __webpack_require__(/*! ./arrayToObject */ 266);

var _arrayToObject2 = _interopRequireDefault(_arrayToObject);

var _namespaceActions = __webpack_require__(/*! ./namespaceActions */ 270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _extends = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
}

function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  function getFullOptions() {
    var partialOptions = (0, _isPlainObject2.default)((0, _last2.default)(identityActions)) ? identityActions.pop() : {};
    return (0, _defaults2.default)(partialOptions, { namespace: _namespaceActions.defaultNamespace });
  }

  var _getFullOptions = getFullOptions();

  var namespace = _getFullOptions.namespace;

  (0, _invariant2.default)(identityActions.every(_isString2.default) && ((0, _isString2.default)(actionMap) || (0, _isPlainObject2.default)(actionMap)), 'Expected optional object followed by string action types');
  if ((0, _isString2.default)(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions));
  }
  return _extends({}, actionCreatorsFromActionMap(actionMap, namespace), actionCreatorsFromIdentityActions(identityActions));
}

function actionCreatorsFromActionMap(actionMap, namespace) {
  var flatActionMap = (0, _namespaceActions.flattenActionMap)(actionMap, namespace);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return (0, _namespaceActions.unflattenActionCreators)(flatActionCreators, namespace);
}

function actionMapToActionCreators(actionMap) {
  function isValidActionMapValue(actionMapValue) {
    if ((0, _isFunction2.default)(actionMapValue)) {
      return true;
    } else if ((0, _isArray2.default)(actionMapValue)) {
      var _actionMapValue = _slicedToArray(actionMapValue, 2);

      var _actionMapValue$ = _actionMapValue[0];
      var payload = _actionMapValue$ === undefined ? _identity2.default : _actionMapValue$;
      var meta = _actionMapValue[1];

      return (0, _isFunction2.default)(payload) && (0, _isFunction2.default)(meta);
    }
    return false;
  }

  return (0, _arrayToObject2.default)((0, _keys2.default)(actionMap), function (partialActionCreators, type) {
    var actionMapValue = actionMap[type];
    (0, _invariant2.default)(isValidActionMapValue(actionMapValue), 'Expected function, undefined, or array with payload and meta ' + ('functions for ' + type));
    var actionCreator = (0, _isArray2.default)(actionMapValue) ? _createAction2.default.apply(undefined, [type].concat(_toConsumableArray(actionMapValue))) : (0, _createAction2.default)(type, actionMapValue);
    return _extends({}, partialActionCreators, _defineProperty({}, type, actionCreator));
  });
}

function actionCreatorsFromIdentityActions(identityActions) {
  var actionMap = (0, _arrayToObject2.default)(identityActions, function (partialActionMap, type) {
    return _extends({}, partialActionMap, _defineProperty({}, type, _identity2.default));
  });
  var actionCreators = actionMapToActionCreators(actionMap);
  return (0, _arrayToObject2.default)((0, _keys2.default)(actionCreators), function (partialActionCreators, type) {
    return _extends({}, partialActionCreators, _defineProperty({}, (0, _camelCase2.default)(type), actionCreators[type]));
  });
}

/***/ }),
/* 268 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/redux-actions/es/handleActions.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 16);

var _from2 = _interopRequireDefault(_from);

exports.default = handleActions;

var _handleAction = __webpack_require__(/*! ./handleAction */ 115);

var _handleAction2 = _interopRequireDefault(_handleAction);

var _ownKeys = __webpack_require__(/*! ./ownKeys */ 271);

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _reduceReducers = __webpack_require__(/*! reduce-reducers */ 265);

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
}

function handleActions(handlers, defaultState) {
  var reducers = (0, _ownKeys2.default)(handlers).map(function (type) {
    return (0, _handleAction2.default)(type, handlers[type], defaultState);
  });
  var reducer = _reduceReducers2.default.apply(undefined, _toConsumableArray(reducers));
  return function (state, action) {
    return reducer(state, action);
  };
}

/***/ }),
/* 269 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/redux-actions/es/index.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineActions = exports.handleActions = exports.handleAction = exports.createActions = exports.createAction = undefined;

var _createAction = __webpack_require__(/*! ./createAction */ 114);

var _createAction2 = _interopRequireDefault(_createAction);

var _handleAction = __webpack_require__(/*! ./handleAction */ 115);

var _handleAction2 = _interopRequireDefault(_handleAction);

var _handleActions = __webpack_require__(/*! ./handleActions */ 268);

var _handleActions2 = _interopRequireDefault(_handleActions);

var _combineActions = __webpack_require__(/*! ./combineActions */ 113);

var _combineActions2 = _interopRequireDefault(_combineActions);

var _createActions = __webpack_require__(/*! ./createActions */ 267);

var _createActions2 = _interopRequireDefault(_createActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createAction = _createAction2.default;
exports.createActions = _createActions2.default;
exports.handleAction = _handleAction2.default;
exports.handleActions = _handleActions2.default;
exports.combineActions = _combineActions2.default;

/***/ }),
/* 270 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/redux-actions/es/namespaceActions.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultNamespace = exports.unflattenActionCreators = exports.flattenActionMap = undefined;

var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 47);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _camelCase = __webpack_require__(/*! ./camelCase */ 112);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 62);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultNamespace = '/';

function flattenActionMap(actionMap) {
  var namespace = arguments.length <= 1 || arguments[1] === undefined ? defaultNamespace : arguments[1];
  var partialFlatActionMap = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var partialFlatActionType = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  function connectNamespace(type) {
    return partialFlatActionType ? '' + partialFlatActionType + namespace + type : type;
  }

  (0, _getOwnPropertyNames2.default)(actionMap).forEach(function (type) {
    var nextNamespace = connectNamespace(type);
    var actionMapValue = actionMap[type];

    if (!(0, _isPlainObject2.default)(actionMapValue)) {
      partialFlatActionMap[nextNamespace] = actionMap[type];
    } else {
      flattenActionMap(actionMap[type], namespace, partialFlatActionMap, nextNamespace);
    }
  });
  return partialFlatActionMap;
}

function unflattenActionCreators(flatActionCreators) {
  var namespace = arguments.length <= 1 || arguments[1] === undefined ? defaultNamespace : arguments[1];

  function unflatten(flatActionType) {
    var partialNestedActionCreators = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var partialFlatActionTypePath = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    var nextNamespace = (0, _camelCase2.default)(partialFlatActionTypePath.shift());
    if (partialFlatActionTypePath.length) {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }
      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    } else {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    }
  }

  var partialNestedActionCreators = {};
  (0, _getOwnPropertyNames2.default)(flatActionCreators).forEach(function (type) {
    return unflatten(type, partialNestedActionCreators, type.split(namespace));
  });
  return partialNestedActionCreators;
}

exports.flattenActionMap = flattenActionMap;
exports.unflattenActionCreators = unflattenActionCreators;
exports.defaultNamespace = defaultNamespace;

/***/ }),
/* 271 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/redux-actions/es/ownKeys.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ 163);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ 47);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _ownKeys = __webpack_require__(/*! babel-runtime/core-js/reflect/own-keys */ 165);

var _ownKeys2 = _interopRequireDefault(_ownKeys);

exports.default = ownKeys;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object) {
  if (typeof Reflect !== 'undefined' && typeof _ownKeys2.default === 'function') {
    return (0, _ownKeys2.default)(object);
  }

  var keys = (0, _getOwnPropertyNames2.default)(object);

  if (typeof _getOwnPropertySymbols2.default === 'function') {
    keys = keys.concat((0, _getOwnPropertySymbols2.default)(object));
  }

  return keys;
}

/***/ }),
/* 272 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/redux-saga/effects.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/effects */ 116);

/***/ }),
/* 273 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/redux-saga/lib/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.effects = exports.CANCEL = exports.delay = exports.throttle = exports.takeLatest = exports.takeEvery = exports.buffers = exports.channel = exports.eventChannel = exports.END = exports.runSaga = undefined;

var _runSaga = __webpack_require__(/*! ./internal/runSaga */ 275);

Object.defineProperty(exports, 'runSaga', {
  enumerable: true,
  get: function get() {
    return _runSaga.runSaga;
  }
});

var _channel = __webpack_require__(/*! ./internal/channel */ 42);

Object.defineProperty(exports, 'END', {
  enumerable: true,
  get: function get() {
    return _channel.END;
  }
});
Object.defineProperty(exports, 'eventChannel', {
  enumerable: true,
  get: function get() {
    return _channel.eventChannel;
  }
});
Object.defineProperty(exports, 'channel', {
  enumerable: true,
  get: function get() {
    return _channel.channel;
  }
});

var _buffers = __webpack_require__(/*! ./internal/buffers */ 41);

Object.defineProperty(exports, 'buffers', {
  enumerable: true,
  get: function get() {
    return _buffers.buffers;
  }
});

var _sagaHelpers = __webpack_require__(/*! ./internal/sagaHelpers */ 117);

Object.defineProperty(exports, 'takeEvery', {
  enumerable: true,
  get: function get() {
    return _sagaHelpers.takeEvery;
  }
});
Object.defineProperty(exports, 'takeLatest', {
  enumerable: true,
  get: function get() {
    return _sagaHelpers.takeLatest;
  }
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function get() {
    return _sagaHelpers.throttle;
  }
});

var _utils = __webpack_require__(/*! ./internal/utils */ 11);

Object.defineProperty(exports, 'delay', {
  enumerable: true,
  get: function get() {
    return _utils.delay;
  }
});
Object.defineProperty(exports, 'CANCEL', {
  enumerable: true,
  get: function get() {
    return _utils.CANCEL;
  }
});

var _middleware = __webpack_require__(/*! ./internal/middleware */ 274);

var _middleware2 = _interopRequireDefault(_middleware);

var _effects = __webpack_require__(/*! ./effects */ 116);

var effects = _interopRequireWildcard(_effects);

var _utils2 = __webpack_require__(/*! ./utils */ 276);

var utils = _interopRequireWildcard(_utils2);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _middleware2.default;
exports.effects = effects;
exports.utils = utils;

/***/ }),
/* 274 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/redux-saga/lib/internal/middleware.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 16);

var _from2 = _interopRequireDefault2(_from);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sagaMiddlewareFactory;

var _utils = __webpack_require__(/*! ./utils */ 11);

var _proc = __webpack_require__(/*! ./proc */ 64);

var _proc2 = _interopRequireDefault(_proc);

var _channel = __webpack_require__(/*! ./channel */ 42);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
}

function sagaMiddlewareFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var runSagaDynamically = void 0;
  var sagaMonitor = options.sagaMonitor;

  // monitors are expected to have a certain interface, let's fill-in any missing ones

  if (sagaMonitor) {
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils.noop;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils.noop;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils.noop;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils.noop;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils.noop;
  }

  if (_utils.is.func(options)) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
    } else {
      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
    }
  }

  if (options.logger && !_utils.is.func(options.logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }

  if (options.onerror) {
    if (_utils.isDev) (0, _utils.log)('warn', '`options.onerror` is deprecated. Use `options.onError` instead.');
    options.onError = options.onerror;
    delete options.onerror;
  }

  if (options.onError && !_utils.is.func(options.onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }

  if (options.emitter && !_utils.is.func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }

  function sagaMiddleware(_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;

    runSagaDynamically = runSaga;
    var sagaEmitter = (0, _channel.emitter)();
    sagaEmitter.emit = (options.emitter || _utils.ident)(sagaEmitter.emit);
    var sagaDispatch = (0, _utils.wrapSagaDispatch)(dispatch);

    function runSaga(saga, args, sagaId) {
      return (0, _proc2.default)(saga.apply(undefined, _toConsumableArray(args)), sagaEmitter.subscribe, sagaDispatch, getState, options, sagaId, saga.name);
    }

    return function (next) {
      return function (action) {
        if (sagaMonitor) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function (saga) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (0, _utils.check)(runSagaDynamically, _utils.is.notUndef, 'Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    (0, _utils.check)(saga, _utils.is.func, 'sagaMiddleware.run(saga, ...args): saga argument must be a Generator function!');

    var effectId = (0, _utils.uid)();
    if (sagaMonitor) {
      sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
    }
    var task = runSagaDynamically(saga, args, effectId);
    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }
    return task;
  };

  return sagaMiddleware;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../process/browser.js */ 10)))

/***/ }),
/* 275 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/redux-saga/lib/internal/runSaga.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSaga = runSaga;

var _utils = __webpack_require__(/*! ./utils */ 11);

var _proc = __webpack_require__(/*! ./proc */ 64);

var _proc2 = _interopRequireDefault(_proc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function runSaga(iterator, _ref) {
  var subscribe = _ref.subscribe,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      sagaMonitor = _ref.sagaMonitor,
      logger = _ref.logger,
      onError = _ref.onError;

  (0, _utils.check)(iterator, _utils.is.iterator, "runSaga must be called on an iterator");

  var effectId = (0, _utils.uid)();
  if (sagaMonitor) {
    dispatch = (0, _utils.wrapSagaDispatch)(dispatch);
    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: iterator, args: [] } });
  }
  var task = (0, _proc2.default)(iterator, subscribe, dispatch, getState, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, iterator.name);

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}

/***/ }),
/* 276 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/redux-saga/lib/utils.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./internal/utils */ 11);

Object.defineProperty(exports, 'TASK', {
  enumerable: true,
  get: function get() {
    return _utils.TASK;
  }
});
Object.defineProperty(exports, 'SAGA_ACTION', {
  enumerable: true,
  get: function get() {
    return _utils.SAGA_ACTION;
  }
});
Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _utils.noop;
  }
});
Object.defineProperty(exports, 'is', {
  enumerable: true,
  get: function get() {
    return _utils.is;
  }
});
Object.defineProperty(exports, 'deferred', {
  enumerable: true,
  get: function get() {
    return _utils.deferred;
  }
});
Object.defineProperty(exports, 'arrayOfDeffered', {
  enumerable: true,
  get: function get() {
    return _utils.arrayOfDeffered;
  }
});
Object.defineProperty(exports, 'createMockTask', {
  enumerable: true,
  get: function get() {
    return _utils.createMockTask;
  }
});

var _io = __webpack_require__(/*! ./internal/io */ 43);

Object.defineProperty(exports, 'asEffect', {
  enumerable: true,
  get: function get() {
    return _io.asEffect;
  }
});

var _proc = __webpack_require__(/*! ./internal/proc */ 64);

Object.defineProperty(exports, 'CHANNEL_END', {
  enumerable: true,
  get: function get() {
    return _proc.CHANNEL_END;
  }
});

/***/ }),
/* 277 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/redux/es/applyMiddleware.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 6);

var _assign2 = _interopRequireDefault(_assign);

exports.default = applyMiddleware;

var _compose = __webpack_require__(/*! ./compose */ 119);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 278 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/redux/es/bindActionCreators.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 0);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = bindActionCreators;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : (0, _typeof3.default)(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : (0, _typeof3.default)(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = (0, _keys2.default)(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 279 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/redux/es/combineReducers.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 5);

var _keys2 = _interopRequireDefault(_keys);

exports.default = combineReducers;

var _createStore = __webpack_require__(/*! ./createStore */ 120);

var _isPlainObject = __webpack_require__(/*! lodash-es/isPlainObject */ 99);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(/*! ./utils/warning */ 122);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = (0, _keys2.default)(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = (0, _keys2.default)(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  (0, _keys2.default)(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = (0, _keys2.default)(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = (0, _keys2.default)(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 10)))

/***/ }),
/* 280 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/index */ 281);

/***/ }),
/* 281 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/symbol-observable/lib/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(/*! ./ponyfill */ 282);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 44), __webpack_require__(/*! ./../../webpack/buildin/module.js */ 65)(module)))

/***/ }),
/* 282 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/symbol-observable/lib/ponyfill.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 283 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DomainManager_1 = __webpack_require__(/*! ./DomainManager */ 124);
exports.DomainManager = DomainManager_1.default;
var Domain_1 = __webpack_require__(/*! ./Domain */ 123);
exports.Domain = Domain_1.default;
var action_1 = __webpack_require__(/*! ./decorators/action */ 127);
exports.action = action_1.default;
var reducer_1 = __webpack_require__(/*! ./decorators/reducer */ 128);
exports.reducer = reducer_1.default;
var saga_1 = __webpack_require__(/*! ./decorators/saga */ 130);
exports.saga = saga_1.default;
var reducerAction_1 = __webpack_require__(/*! ./decorators/reducerAction */ 129);
exports.reducerAction = reducerAction_1.default;
var sagaAction_1 = __webpack_require__(/*! ./decorators/sagaAction */ 131);
exports.sagaAction = sagaAction_1.default;
var ActionInterface_1 = __webpack_require__(/*! ./models/ActionInterface */ 70);
exports.ActionInterface = ActionInterface_1.default;
var getCallbackOptionsFromAction_1 = __webpack_require__(/*! ./helpers/getCallbackOptionsFromAction */ 69);
exports.getCallbackOptionsFromAction = getCallbackOptionsFromAction_1.default;
var ActionInterfaceMockAction_1 = __webpack_require__(/*! ./models/ActionInterfaceMockAction */ 71);
exports.Action = ActionInterfaceMockAction_1.default;
var api_request_pool_1 = __webpack_require__(/*! ./api-request-pool/api-request-pool */ 126);
exports.ApiRequestPool = api_request_pool_1.default;
var UserState_1 = __webpack_require__(/*! ./UserState */ 125);
exports.UserState = UserState_1.default;
var createReducer_1 = __webpack_require__(/*! ./helpers/createReducer */ 66);
exports.createReducer = createReducer_1.default;
var createRootSaga_1 = __webpack_require__(/*! ./helpers/createRootSaga */ 67);
exports.createRootSaga = createRootSaga_1.default;
var createSagaFork_1 = __webpack_require__(/*! ./helpers/createSagaFork */ 68);
exports.createSagaFork = createSagaFork_1.default;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map