(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dm-header-menus"] = factory(require("vue"));
	else
		root["dm-header-menus"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__7203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 5787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(7976);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3658:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var isArray = __webpack_require__(3157);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 5117:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 4154:
/***/ (function(module) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7207:
/***/ (function(module) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 3678:
/***/ (function(module) {

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 1060:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);
var isNullOrUndefined = __webpack_require__(8554);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(4811);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 8554:
/***/ (function(module) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 6277:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(1340);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(1702);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__(8554);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.27.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(6293);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 4811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(6293);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7658:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var doesNotExceedSafeInteger = __webpack_require__(7207);
var fails = __webpack_require__(7293);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_TO_LENGTH || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 541:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var deletePropertyOrThrow = __webpack_require__(5117);
var doesNotExceedSafeInteger = __webpack_require__(7207);

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_RESULT || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


/***/ }),

/***/ 2801:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var createPropertyDescriptor = __webpack_require__(9114);
var defineProperty = (__webpack_require__(3070).f);
var hasOwn = __webpack_require__(2597);
var anInstance = __webpack_require__(5787);
var inheritIfRequired = __webpack_require__(9587);
var normalizeStringArgument = __webpack_require__(6277);
var DOMExceptionConstants = __webpack_require__(3678);
var clearErrorStack = __webpack_require__(1060);
var DESCRIPTORS = __webpack_require__(9781);
var IS_PURE = __webpack_require__(1913);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }),

/***/ 2084:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(4637);

/***/ }),

/***/ 2627:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(2801);
var utils = __webpack_require__(9962);
var settle = __webpack_require__(8312);
var buildURL = __webpack_require__(9862);
var buildFullPath = __webpack_require__(6536);
var parseHeaders = __webpack_require__(1119);
var isURLSameOrigin = __webpack_require__(9155);
var createError = __webpack_require__(9834);
module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
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
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(4937);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
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
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
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

/***/ }),

/***/ 4637:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);
var bind = __webpack_require__(6781);
var Axios = __webpack_require__(551);
var mergeConfig = __webpack_require__(1279);
var defaults = __webpack_require__(3241);

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
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9528);
axios.CancelToken = __webpack_require__(9904);
axios.isCancel = __webpack_require__(5475);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(2526);
module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;

/***/ }),

/***/ 9528:
/***/ (function(module) {

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

/***/ 9904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9528);

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
  this.promise = new Promise(function promiseExecutor(resolve) {
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

/***/ 5475:
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ 551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(541);
__webpack_require__(7658);
var utils = __webpack_require__(9962);
var buildURL = __webpack_require__(9862);
var InterceptorManager = __webpack_require__(7370);
var dispatchRequest = __webpack_require__(5994);
var mergeConfig = __webpack_require__(1279);

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
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
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
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
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

/***/ 7370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(7658);
var utils = __webpack_require__(9962);
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

/***/ 6536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(3497);
var combineURLs = __webpack_require__(9604);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

/***/ }),

/***/ 9834:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(6596);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ 5994:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);
var transformData = __webpack_require__(4600);
var isCancel = __webpack_require__(5475);
var defaults = __webpack_require__(3241);

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
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
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
    return Promise.reject(reason);
  });
};

/***/ }),

/***/ 6596:
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/***/ }),

/***/ 1279:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ 8312:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9834);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ 4600:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);

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

/***/ 3241:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);
var normalizeHeaderName = __webpack_require__(1954);
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
    adapter = __webpack_require__(2627);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(2627);
  }
  return adapter;
}
var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
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
      return JSON.stringify(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
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
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

/***/ }),

/***/ 6781:
/***/ (function(module) {

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

/***/ 9862:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(7658);
var utils = __webpack_require__(9962);
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
      } else {
        val = [val];
      }
      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
};

/***/ }),

/***/ 9604:
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ 4937:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(7658);
var utils = __webpack_require__(9962);
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

/***/ 3497:
/***/ (function(module) {

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
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ 9155:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);
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

/***/ 1954:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);
module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ 1119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9962);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

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
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ 2526:
/***/ (function(module) {

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

/***/ 9962:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(6781);

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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
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
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
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
  if (typeof obj !== 'object') {
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
function merge( /* obj1, obj2, obj3, ... */
) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
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
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge( /* obj1, obj2, obj3, ... */
) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
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
  isBuffer: isBuffer,
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
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ 7203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeader.vue?vue&type=template&id=3e153c3a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header"
  }, [_c('dom-header-top', {
    attrs: {
      "favoriteAdded": _vm.favoriteAdded,
      "favoriteRemoved": _vm.favoriteRemoved,
      "comparisonAdded": _vm.comparisonAdded,
      "comparisonRemoved": _vm.comparisonRemoved
    }
  }), _c('dom-header-bottom')], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenus.vue?vue&type=template&id=deacb94e&
var DomHeaderMenusvue_type_template_id_deacb94e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-bottom"
  }, [_vm._l(_vm.menus, function (menu) {
    return _c('dom-header-menu-drop-down', {
      key: menu.id,
      attrs: {
        "menu": menu
      }
    });
  }), _vm._l(_vm.links, function (link) {
    return _c('dom-header-menu-link', {
      key: link.id,
      attrs: {
        "link": link
      }
    });
  })], 2);
};
var DomHeaderMenusvue_type_template_id_deacb94e_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenuDropDown.vue?vue&type=template&id=67ffa150&
var DomHeaderMenuDropDownvue_type_template_id_67ffa150_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-menu-dropdown",
    attrs: {
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "dom-header-menu-dropdown__triger",
    on: {
      "click": _vm.showMenuDropdownBody
    }
  }, [_c('span', {
    staticClass: "dom-header-menu-dropdown__title"
  }, [_vm._v(_vm._s(_vm.menu.name))]), _c('span', {
    staticClass: "dom-header-menu-dropdown__icon icon-chevron_down",
    class: {
      'dom-header-menu-dropdown__icon--active': _vm.isShow
    }
  })]), _vm.isShow ? _c('div', {
    staticClass: "dom-header-menu-dropdown__body"
  }, [_c('dom-header-tree-list', {
    attrs: {
      "menus": _vm.menu.children
    }
  })], 1) : _vm._e()]);
};
var DomHeaderMenuDropDownvue_type_template_id_67ffa150_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderTreeList.vue?vue&type=template&id=f0caaea2&
var DomHeaderTreeListvue_type_template_id_f0caaea2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-tree-list"
  }, _vm._l(_vm.menus, function (menu) {
    return _c('div', {
      key: menu.id,
      staticClass: "dom-header-tree-list__body"
    }, [_c('div', {
      staticClass: "dom-header-tree-list__title"
    }, [_c('span', [_vm._v(_vm._s(menu.name))])]), _c('div', {
      staticClass: "dom-header-tree-list__link-container"
    }, _vm._l(menu.children, function (menuLink) {
      return _c('a', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: menuLink.name !== 'all',
          expression: "menuLink.name !== 'all'"
        }],
        key: menuLink.id,
        attrs: {
          "href": `https://dom.kz${menuLink.url}`
        }
      }, [_vm._v(_vm._s(menuLink.name))]);
    }), 0), _vm.hasLinkToAll(menu.children) ? _c('div', {
      staticClass: "dom-header-tree-list__link-to-all"
    }, [_c('a', {
      attrs: {
        "href": `https://dom.kz/${_vm.hasLinkToAll(menu.children).children[0].url}`
      }
    }, [_vm._v(_vm._s(_vm.hasLinkToAll(menu.children).children[0].name))]), _c('span', {
      staticClass: "icon-arrow_forward"
    })]) : _vm._e()]);
  }), 0);
};
var DomHeaderTreeListvue_type_template_id_f0caaea2_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderTreeList.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderTreeListvue_type_script_lang_js_ = ({
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    hasLinkToAll(menuLinks) {
      return menuLinks && menuLinks.length && menuLinks.find(el => el.name === "all");
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderTreeList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderTreeListvue_type_script_lang_js_ = (DomHeaderTreeListvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderTreeList.vue?vue&type=style&index=0&id=f0caaea2&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderTreeList.vue?vue&type=style&index=0&id=f0caaea2&prod&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/DomHeaderTreeList.vue



;


/* normalize component */

var component = normalizeComponent(
  components_DomHeaderTreeListvue_type_script_lang_js_,
  DomHeaderTreeListvue_type_template_id_f0caaea2_render,
  DomHeaderTreeListvue_type_template_id_f0caaea2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderTreeList = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenuDropDown.vue?vue&type=script&lang=js&

/* harmony default export */ var DomHeaderMenuDropDownvue_type_script_lang_js_ = ({
  components: {
    DomHeaderTreeList: DomHeaderTreeList
  },
  props: {
    menu: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShow: false,
      id: null
    };
  },
  watch: {
    isShow() {
      if (this.isShow) {
        document.addEventListener("click", this.closeIfClickedOutside);
      }
    }
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    showMenuDropdownBody() {
      this.isShow = !this.isShow;
    },
    hideMenuDropdownBody() {
      this.isShow = false;
    },
    closeIfClickedOutside(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isShow = false;
        document.removeEventListener("click", this.closeIfClickedOutside);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderMenuDropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderMenuDropDownvue_type_script_lang_js_ = (DomHeaderMenuDropDownvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenuDropDown.vue?vue&type=style&index=0&id=67ffa150&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderMenuDropDown.vue?vue&type=style&index=0&id=67ffa150&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/DomHeaderMenuDropDown.vue



;


/* normalize component */

var DomHeaderMenuDropDown_component = normalizeComponent(
  components_DomHeaderMenuDropDownvue_type_script_lang_js_,
  DomHeaderMenuDropDownvue_type_template_id_67ffa150_render,
  DomHeaderMenuDropDownvue_type_template_id_67ffa150_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenuDropDown = (DomHeaderMenuDropDown_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenuLink.vue?vue&type=template&id=c0135b3e&
var DomHeaderMenuLinkvue_type_template_id_c0135b3e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-menu-link"
  }, [_c('a', {
    attrs: {
      "href": _vm.href
    }
  }, [_vm._v(_vm._s(_vm.link.name))])]);
};
var DomHeaderMenuLinkvue_type_template_id_c0135b3e_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenuLink.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderMenuLinkvue_type_script_lang_js_ = ({
  props: {
    link: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    href() {
      if (this.isAbsolutePath(this.link.url)) {
        return this.link.url;
      } else {
        return `https://dom.kz${this.link.url}`;
      }
    }
  },
  methods: {
    isAbsolutePath(path) {
      const regex = /^(http|https):\/\//;
      return regex.test(path);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderMenuLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderMenuLinkvue_type_script_lang_js_ = (DomHeaderMenuLinkvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenuLink.vue?vue&type=style&index=0&id=c0135b3e&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderMenuLink.vue?vue&type=style&index=0&id=c0135b3e&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/DomHeaderMenuLink.vue



;


/* normalize component */

var DomHeaderMenuLink_component = normalizeComponent(
  components_DomHeaderMenuLinkvue_type_script_lang_js_,
  DomHeaderMenuLinkvue_type_template_id_c0135b3e_render,
  DomHeaderMenuLinkvue_type_template_id_c0135b3e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenuLink = (DomHeaderMenuLink_component.exports);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(2084);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenus.vue?vue&type=script&lang=js&



/* harmony default export */ var DomHeaderMenusvue_type_script_lang_js_ = ({
  components: {
    DomHeaderMenuDropDown: DomHeaderMenuDropDown,
    DomHeaderMenuLink: DomHeaderMenuLink
  },
  name: "dm-header",
  data() {
    return {
      menus: [],
      links: []
    };
  },
  async mounted() {
    const menus = await this.getMenus();
    this.menus = menus[0].menu.filter(el => el.children.length);
    this.links = menus[0].menu.filter(el => !el.children.length);
  },
  methods: {
    async getMenus() {
      const data = await axios_default().get("https://api-site.dom.kz/api/menu");
      return data.data.data;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderMenus.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderMenusvue_type_script_lang_js_ = (DomHeaderMenusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderMenus.vue?vue&type=style&index=0&id=deacb94e&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderMenus.vue?vue&type=style&index=0&id=deacb94e&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/DomHeaderMenus.vue



;


/* normalize component */

var DomHeaderMenus_component = normalizeComponent(
  components_DomHeaderMenusvue_type_script_lang_js_,
  DomHeaderMenusvue_type_template_id_deacb94e_render,
  DomHeaderMenusvue_type_template_id_deacb94e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenus = (DomHeaderMenus_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderTop.vue?vue&type=template&id=7bc143d7&
var DomHeaderTopvue_type_template_id_7bc143d7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-top"
  }, [_c('div', {
    staticClass: "dom-header-container dom-header-top__container"
  }, [_c('div', {
    staticClass: "dom-header-top__logo"
  }, [_c('a', {
    attrs: {
      "href": "https://dom.kz"
    }
  }, [_c('dom-header-logo')], 1)]), _c('div', {
    staticClass: "dom-header-top__user"
  }, [_c('div', {
    staticClass: "dom-header-top__user-actions"
  }, [_c('dom-header-user-link', {
    attrs: {
      "title": "Подать объявление",
      "href": "https://dom.kz/listing/add",
      "icon": "icon-add_circle_outlined"
    }
  }), _c('dom-header-user-link', {
    attrs: {
      "title": "Сохраненное",
      "href": "https://dom.kz/saved?tabIndex=0",
      "icon": "icon-heart_outlined",
      "count": _vm.favoriteCount
    }
  }), _c('dom-header-user-link', {
    attrs: {
      "title": "Сравнение",
      "href": "https://dom.kz/saved?tabIndex=1",
      "icon": "icon-comparison",
      "count": _vm.comparisonCount
    }
  }), _c('dom-header-user-link', {
    attrs: {
      "href": _vm.notificationUrl,
      "icon": "icon-notifications_outlined",
      "indicator": _vm.notificationIndicator
    }
  })], 1), _c('div', {
    staticClass: "dom-header-top__user-info"
  }, [_vm.userName === 'Войти/Регистрация' ? _c('a', {
    attrs: {
      "href": _vm.authUrl
    }
  }, [_vm._v(_vm._s(_vm.userName))]) : _c('dom-header-cp-dropdown', {
    attrs: {
      "userName": _vm.userName
    }
  })], 1)]), _c('div', {
    staticClass: "dom-header-top__user-mobile"
  }, [_c('dom-header-user-link', {
    attrs: {
      "icon": "icon-add_circle_outlined",
      "href": "https://dom.kz/listing/add"
    }
  }), _c('dom-header-user-link', {
    attrs: {
      "icon": "icon-heart_outlined",
      "href": "https://dom.kz/saved?tabIndex=0",
      "count": _vm.favoriteCount
    }
  }), _c('dom-header-user-link', {
    attrs: {
      "icon": "icon-comparison",
      "href": "https://dom.kz/saved?tabIndex=1",
      "count": _vm.comparisonCount
    }
  }), _c('dom-header-user-link', {
    attrs: {
      "icon": "icon-notifications_outlined",
      "indicator": _vm.notificationIndicator
    }
  }), _c('span', {
    staticClass: "dom-header-top__menu-btn icon-menu_left_right",
    on: {
      "click": _vm.openMenuModal
    }
  })], 1), _c('dom-header-menu-modal', {
    ref: "menumodal",
    scopedSlots: _vm._u([{
      key: "footer",
      fn: function () {
        return [_c('dom-header-menu-modal-link-list', {
          attrs: {
            "links": _vm.links
          }
        })];
      },
      proxy: true
    }])
  }, [_c('dom-header-menu-modal-user-name', {
    attrs: {
      "user-name": _vm.userName
    }
  }), _c('dom-header-menu-modal-list', {
    attrs: {
      "menus": _vm.menus
    }
  })], 1)], 1)]);
};
var DomHeaderTopvue_type_template_id_7bc143d7_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/services/httpClient.js

const httpClient = axios_default().create({
  baseURL: 'https://api.dom.kz/api'
});
httpClient.interceptors.request.use(function (config) {
  // добавляем токен ко всем запросам на api
  config.headers = authHeader();
  return config;
});
function authHeader() {
  let token = localStorage.getItem('auth._token.local');
  if (token) {
    return {
      Authorization: token
    };
  } else {
    return {};
  }
}
/* harmony default export */ var services_httpClient = (httpClient);
;// CONCATENATED MODULE: ./src/services/FavoriteService.js

async function getUserFavoriteCount() {
  try {
    const data = await services_httpClient.get('/housing/count?isFavorite=true');
    return data.data.data;
  } catch (err) {
    console.log(err);
  }
}
;// CONCATENATED MODULE: ./src/services/ComparisonService.js

async function getUserComparisonCount() {
  try {
    const data = await services_httpClient.get('/housing/count?isComparison=true');
    return data.data.data;
  } catch (err) {
    console.log(err);
  }
}
;// CONCATENATED MODULE: ./src/services/httpNotificationClient.js

const httpNotificationClient_httpClient = axios_default().create({
  baseURL: 'https://notification.dom.kz/api/notifications'
});
httpNotificationClient_httpClient.interceptors.request.use(function (config) {
  // добавляем токен ко всем запросам на api
  config.headers = httpNotificationClient_authHeader();
  return config;
});
function httpNotificationClient_authHeader() {
  let token = localStorage.getItem('auth._token.local');
  if (token) {
    return {
      Authorization: token
    };
  } else {
    return {};
  }
}
/* harmony default export */ var httpNotificationClient = (httpNotificationClient_httpClient);
;// CONCATENATED MODULE: ./src/services/NotificationService.js

async function userHasNotification() {
  try {
    const data = await httpNotificationClient.get("/search?pageNum=1&pageSize=8");
    return data.data.data && data.data.data.length;
  } catch (err) {
    console.log(err);
  }
}
;// CONCATENATED MODULE: ./src/services/WebSiteService.js
// import httpWebSiteClient from "./httpWebSiteClient";

function getMenus() {
  // const data = await httpWebSiteClient.get('/menu');
  return menus;
}
const menus = [{
  name: "Верхнее меню",
  slug: "verhnee-menyu",
  menu: [{
    id: 33,
    name: "Каталог квартир",
    nameKk: "",
    nameEn: null,
    menuGroupId: 1,
    url: "/prodazha/kvartiry-vtorichki/astana",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: [{
      id: 39,
      name: "Все квартиры",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "/",
      urlKk: null,
      urlEn: null,
      parentId: 33,
      children: [{
        id: 40,
        name: "Квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 43,
        name: "Квартиры в Алматинском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana-almatinskij",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 44,
        name: "Квартиры в Байконурском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana-bajkonurskij",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 45,
        name: "Квартиры в Есильском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana-esilskij",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 46,
        name: "Квартиры в Сарыаркинском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana-saryarkinskij",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 47,
        name: "Однокомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana/odnokomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 48,
        name: "Двухкомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana/dvuhkomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 49,
        name: "Трехкомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana/trehkomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 50,
        name: "Четырехкомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana/chetirehkomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 51,
        name: "Многокомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/astana/pyatikomnatnyh",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }, {
        id: 65,
        name: "Квартиры в Караганде",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry/karaganda",
        urlKk: null,
        urlEn: null,
        parentId: 39,
        children: []
      }]
    }, {
      id: 52,
      name: "Вторичное",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "/",
      urlKk: null,
      urlEn: null,
      parentId: 33,
      children: [{
        id: 53,
        name: "Квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 54,
        name: "Квартиры в Алматинском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana-almatinskij",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 55,
        name: "Квартиры в Байконурском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana-bajkonurskij",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 56,
        name: "Квартиры в Есильском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana-esilskij",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 59,
        name: "Квартиры в Сарыаркинском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana-saryarkinskij",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 60,
        name: "Однокомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana/odnokomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 61,
        name: "Двухкомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana/dvuhkomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 62,
        name: "Трехкомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana/trehkomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 63,
        name: "Четырехкомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana/chetirehkomnatnye",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 64,
        name: "Многокомнатные квартиры в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/astana/pyatikomnatnyh",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }, {
        id: 66,
        name: "Квартиры в Караганде",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-vtorichki/karaganda",
        urlKk: null,
        urlEn: null,
        parentId: 52,
        children: []
      }]
    }]
  }, {
    id: 67,
    name: "Новостройки",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "/",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: [{
      id: 68,
      name: "Астана",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "/",
      urlKk: null,
      urlEn: null,
      parentId: 67,
      children: [{
        id: 69,
        name: "Новостройки в Астане",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/astana",
        urlKk: null,
        urlEn: null,
        parentId: 68,
        children: []
      }, {
        id: 70,
        name: "Новостройки в Алматинском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/astana-almatinskij",
        urlKk: null,
        urlEn: null,
        parentId: 68,
        children: []
      }, {
        id: 71,
        name: "Новостройки в Байконурском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/astana-bajkonurskij",
        urlKk: null,
        urlEn: null,
        parentId: 68,
        children: []
      }, {
        id: 72,
        name: "Новостройки в Есильском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/astana-esilskij",
        urlKk: null,
        urlEn: null,
        parentId: 68,
        children: []
      }, {
        id: 73,
        name: "Новостройки в Сарыаркинском районе Астаны",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/astana-saryarkinskij",
        urlKk: null,
        urlEn: null,
        parentId: 68,
        children: []
      }]
    }, {
      id: 74,
      name: "Алматы",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "/",
      urlKk: null,
      urlEn: null,
      parentId: 67,
      children: [{
        id: 75,
        name: "Новостройки в Алматы",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/almaty",
        urlKk: null,
        urlEn: null,
        parentId: 74,
        children: []
      }, {
        id: 76,
        name: "Новостройки в Алмалинском районе Алматы",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/almaty-almalinskij",
        urlKk: null,
        urlEn: null,
        parentId: 74,
        children: []
      }, {
        id: 77,
        name: "Новостройки в Ауэзовском районе Алматы",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/almaty-auezovskij",
        urlKk: null,
        urlEn: null,
        parentId: 74,
        children: []
      }, {
        id: 78,
        name: "Новостройки в Бостандыкском районе Алматы",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/almaty-bostandykskij",
        urlKk: null,
        urlEn: null,
        parentId: 74,
        children: []
      }, {
        id: 79,
        name: "Новостройки в Наурызбайском районе Алматы",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/prodazha/kvartiry-novostroi/almaty-nauryzbajskij",
        urlKk: null,
        urlEn: null,
        parentId: 74,
        children: []
      }]
    }]
  }, {
    id: 4,
    name: "Застройщики и ЖК",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "#",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: [{
      id: 11,
      name: "Жилые комплексы",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "/",
      urlKk: null,
      urlEn: null,
      parentId: 4,
      children: [{
        id: 90,
        name: "Aiva",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/estates/61827",
        urlKk: null,
        urlEn: null,
        parentId: 11,
        children: []
      }, {
        id: 14,
        name: "Atlant",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/estates/44706",
        urlKk: null,
        urlEn: null,
        parentId: 11,
        children: []
      }, {
        id: 15,
        name: "GreenLine.Asyl Mura",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/estates/45526",
        urlKk: null,
        urlEn: null,
        parentId: 11,
        children: []
      }, {
        id: 30,
        name: "Sat City",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/estates/48470",
        urlKk: null,
        urlEn: null,
        parentId: 11,
        children: []
      }, {
        id: 31,
        name: "Аулет",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/estates/47452",
        urlKk: null,
        urlEn: null,
        parentId: 11,
        children: []
      }, {
        id: 21,
        name: "all",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "#",
        urlKk: null,
        urlEn: null,
        parentId: 11,
        children: [{
          id: 23,
          name: "Смотреть все ЖК",
          nameKk: null,
          nameEn: null,
          menuGroupId: 1,
          url: "estates",
          urlKk: null,
          urlEn: null,
          parentId: 21,
          children: []
        }]
      }]
    }, {
      id: 10,
      name: "Застройщики",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "/",
      urlKk: null,
      urlEn: null,
      parentId: 4,
      children: [{
        id: 12,
        name: "BI Group",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/developers/1",
        urlKk: null,
        urlEn: null,
        parentId: 10,
        children: []
      }, {
        id: 13,
        name: "Базис-А",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/developers/5123",
        urlKk: null,
        urlEn: null,
        parentId: 10,
        children: []
      }, {
        id: 20,
        name: "all",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "#",
        urlKk: null,
        urlEn: null,
        parentId: 10,
        children: [{
          id: 22,
          name: "Смотреть всех застройщиков",
          nameKk: null,
          nameEn: null,
          menuGroupId: 1,
          url: "developers",
          urlKk: null,
          urlEn: null,
          parentId: 20,
          children: []
        }]
      }, {
        id: 27,
        name: "Orda Invest",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/developers/5164",
        urlKk: null,
        urlEn: null,
        parentId: 10,
        children: []
      }, {
        id: 28,
        name: "G-Park",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/developers/5122",
        urlKk: null,
        urlEn: null,
        parentId: 10,
        children: []
      }, {
        id: 29,
        name: "Nur Astana Kurylys",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/developers/2862",
        urlKk: null,
        urlEn: null,
        parentId: 10,
        children: []
      }]
    }]
  }, {
    id: 3,
    name: "Ипотека",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "#",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: [{
      id: 17,
      name: "Ипотечные программы",
      nameKk: null,
      nameEn: null,
      menuGroupId: 1,
      url: "#",
      urlKk: null,
      urlEn: null,
      parentId: 3,
      children: [{
        id: 8,
        name: "7-20-25",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/mortgages/programma-7-20-25",
        urlKk: null,
        urlEn: null,
        parentId: 17,
        children: []
      }, {
        id: 26,
        name: "Ипотека от Банк Центр Кредит",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/mortgages/ipoteka-ot-bank-tsentr-kredit",
        urlKk: null,
        urlEn: null,
        parentId: 17,
        children: []
      }, {
        id: 25,
        name: "Ипотека Halyk Bank",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/mortgages/ipoteka-ot-halyk-bank",
        urlKk: null,
        urlEn: null,
        parentId: 17,
        children: []
      }, {
        id: 24,
        name: "Ипотека от Altyn-I",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "/mortgages/ipoteka-ot-altyn-banka",
        urlKk: null,
        urlEn: null,
        parentId: 17,
        children: []
      }, {
        id: 18,
        name: "all",
        nameKk: null,
        nameEn: null,
        menuGroupId: 1,
        url: "#",
        urlKk: null,
        urlEn: null,
        parentId: 17,
        children: [{
          id: 19,
          name: "Смотреть все программы",
          nameKk: null,
          nameEn: null,
          menuGroupId: 1,
          url: "mortgages",
          urlKk: null,
          urlEn: null,
          parentId: 18,
          children: []
        }]
      }]
    }]
  }, {
    id: 37,
    name: "Журнал",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "https://dom.kz/journal/",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: []
  }, {
    id: 5,
    name: "О нас",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "/about",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: []
  }, {
    id: 89,
    name: "Недвижимость в Турции",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "https://dom.kz/landing/turkey",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: []
  }, {
    id: 92,
    name: "Инвестиции",
    nameKk: null,
    nameEn: null,
    menuGroupId: 1,
    url: "https://dom.kz/investments",
    urlKk: null,
    urlEn: null,
    parentId: null,
    children: []
  }]
}];
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderUserLink.vue?vue&type=template&id=b381d500&
var DomHeaderUserLinkvue_type_template_id_b381d500_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-user-link"
  }, [_c('a', {
    attrs: {
      "href": _vm.href
    }
  }, [_c('div', {
    staticClass: "dom-header-user-link__icon-box"
  }, [_vm.count ? _c('span', {
    staticClass: "dom-header-user-link__indicator"
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e(), _vm.indicator ? _c('span', {
    staticClass: "dom-header-user-link__indicator dom-header-user-link__indicator--small"
  }) : _vm._e(), _c('span', {
    staticClass: "dom-header-user-link__icon",
    class: _vm.icon
  })]), _c('span', {
    staticClass: "dom-header-user-link__title"
  }, [_vm._v(_vm._s(_vm.title))])])]);
};
var DomHeaderUserLinkvue_type_template_id_b381d500_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderUserLink.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderUserLinkvue_type_script_lang_js_ = ({
  props: {
    href: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    count: {
      type: [Number, String],
      default: 0
    },
    indicator: {
      type: Boolean,
      default: false
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderUserLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderUserLinkvue_type_script_lang_js_ = (DomHeaderUserLinkvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderUserLink.vue?vue&type=style&index=0&id=b381d500&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderUserLink.vue?vue&type=style&index=0&id=b381d500&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/DomHeaderUserLink.vue



;


/* normalize component */

var DomHeaderUserLink_component = normalizeComponent(
  components_DomHeaderUserLinkvue_type_script_lang_js_,
  DomHeaderUserLinkvue_type_template_id_b381d500_render,
  DomHeaderUserLinkvue_type_template_id_b381d500_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderUserLink = (DomHeaderUserLink_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModal.vue?vue&type=template&id=789068af&
var DomHeaderMenuModalvue_type_template_id_789068af_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isShow ? _c('div', {
    staticClass: "dom-header-menu-modal"
  }, [_c('div', {
    staticClass: "dom-header-menu-modal__container"
  }, [_c('div', {
    staticClass: "dom-header-menu-modal__header"
  }, [_c('span', {
    staticClass: "icon-clear",
    on: {
      "click": _vm.hideMenuModal
    }
  })]), _c('div', {
    staticClass: "dom-header-menu-modal__body"
  }, [_vm._t("default")], 2)]), _c('div', {
    staticClass: "dom-header-menu-modal__footer"
  }, [_vm._t("footer")], 2)]) : _vm._e();
};
var DomHeaderMenuModalvue_type_template_id_789068af_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModal.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderMenuModalvue_type_script_lang_js_ = ({
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    hideMenuModal() {
      this.isShow = false;
    },
    showMenuModal() {
      this.isShow = true;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var domHeaderMenuModal_DomHeaderMenuModalvue_type_script_lang_js_ = (DomHeaderMenuModalvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModal.vue?vue&type=style&index=0&id=789068af&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModal.vue?vue&type=style&index=0&id=789068af&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModal.vue



;


/* normalize component */

var DomHeaderMenuModal_component = normalizeComponent(
  domHeaderMenuModal_DomHeaderMenuModalvue_type_script_lang_js_,
  DomHeaderMenuModalvue_type_template_id_789068af_render,
  DomHeaderMenuModalvue_type_template_id_789068af_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenuModal = (DomHeaderMenuModal_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalUserName.vue?vue&type=template&id=d9dd8638&
var DomHeaderMenuModalUserNamevue_type_template_id_d9dd8638_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-menu-modal-user-name"
  }, [_c('a', {
    attrs: {
      "href": "https://dom.kz/cp"
    }
  }, [_vm._v(_vm._s(_vm.userName))])]);
};
var DomHeaderMenuModalUserNamevue_type_template_id_d9dd8638_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalUserName.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderMenuModalUserNamevue_type_script_lang_js_ = ({
  props: {
    userName: {
      type: String,
      default: "Войти/Регистрация"
    }
  }
});
;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalUserName.vue?vue&type=script&lang=js&
 /* harmony default export */ var domHeaderMenuModal_DomHeaderMenuModalUserNamevue_type_script_lang_js_ = (DomHeaderMenuModalUserNamevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalUserName.vue?vue&type=style&index=0&id=d9dd8638&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalUserName.vue?vue&type=style&index=0&id=d9dd8638&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalUserName.vue



;


/* normalize component */

var DomHeaderMenuModalUserName_component = normalizeComponent(
  domHeaderMenuModal_DomHeaderMenuModalUserNamevue_type_script_lang_js_,
  DomHeaderMenuModalUserNamevue_type_template_id_d9dd8638_render,
  DomHeaderMenuModalUserNamevue_type_template_id_d9dd8638_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenuModalUserName = (DomHeaderMenuModalUserName_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalList.vue?vue&type=template&id=8d7cb21a&
var DomHeaderMenuModalListvue_type_template_id_8d7cb21a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-menu-modal-list"
  }, [_vm._l(_vm.menus, function (menu) {
    return _c('div', {
      key: menu.id,
      staticClass: "dom-header-menu-modal-list__item",
      on: {
        "click": function ($event) {
          return _vm.openChildLinksModal(menu.id);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(menu.name))]), _c('span', {
      staticClass: "dom-header-menu-modal-list__icon icon-chevron_down"
    })]);
  }), _vm._l(_vm.menus, function (menu) {
    return _c('dom-header-menu-modal', {
      key: menu.id,
      ref: `${menu.id}-ref`,
      refInFor: true
    }, [_c('dom-header-tree-list', {
      attrs: {
        "menus": menu.children
      }
    })], 1);
  })], 2);
};
var DomHeaderMenuModalListvue_type_template_id_8d7cb21a_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalList.vue?vue&type=script&lang=js&


/* harmony default export */ var DomHeaderMenuModalListvue_type_script_lang_js_ = ({
  components: {
    DomHeaderMenuModal: DomHeaderMenuModal,
    DomHeaderTreeList: DomHeaderTreeList
  },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    openChildLinksModal(id) {
      console.log(id);
      const ref = `${id}-ref`;
      console.log(this.$refs[ref][0]);
      this.$refs[ref][0].showMenuModal();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalList.vue?vue&type=script&lang=js&
 /* harmony default export */ var domHeaderMenuModal_DomHeaderMenuModalListvue_type_script_lang_js_ = (DomHeaderMenuModalListvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalList.vue?vue&type=style&index=0&id=8d7cb21a&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalList.vue?vue&type=style&index=0&id=8d7cb21a&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalList.vue



;


/* normalize component */

var DomHeaderMenuModalList_component = normalizeComponent(
  domHeaderMenuModal_DomHeaderMenuModalListvue_type_script_lang_js_,
  DomHeaderMenuModalListvue_type_template_id_8d7cb21a_render,
  DomHeaderMenuModalListvue_type_template_id_8d7cb21a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenuModalList = (DomHeaderMenuModalList_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalLinkList.vue?vue&type=template&id=29af5c23&
var DomHeaderMenuModalLinkListvue_type_template_id_29af5c23_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-menu-modal-link-list"
  }, _vm._l(_vm.links, function (link) {
    return _c('div', {
      key: link.id,
      staticClass: "dom-header-menu-modal-link-list__item"
    }, [_c('a', {
      attrs: {
        "href": _vm.href(link.url)
      }
    }, [_vm._v(_vm._s(link.name))])]);
  }), 0);
};
var DomHeaderMenuModalLinkListvue_type_template_id_29af5c23_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalLinkList.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderMenuModalLinkListvue_type_script_lang_js_ = ({
  props: {
    links: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    href(path) {
      if (this.isAbsolutePath(path)) {
        return path;
      } else {
        return `https://dom.kz${path}`;
      }
    },
    isAbsolutePath(path) {
      const regex = /^(http|https):\/\//;
      return regex.test(path);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalLinkList.vue?vue&type=script&lang=js&
 /* harmony default export */ var domHeaderMenuModal_DomHeaderMenuModalLinkListvue_type_script_lang_js_ = (DomHeaderMenuModalLinkListvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/domHeaderMenuModal/DomHeaderMenuModalLinkList.vue?vue&type=style&index=0&id=29af5c23&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalLinkList.vue?vue&type=style&index=0&id=29af5c23&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/domHeaderMenuModal/DomHeaderMenuModalLinkList.vue



;


/* normalize component */

var DomHeaderMenuModalLinkList_component = normalizeComponent(
  domHeaderMenuModal_DomHeaderMenuModalLinkListvue_type_script_lang_js_,
  DomHeaderMenuModalLinkListvue_type_template_id_29af5c23_render,
  DomHeaderMenuModalLinkListvue_type_template_id_29af5c23_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderMenuModalLinkList = (DomHeaderMenuModalLinkList_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderCpDropdown.vue?vue&type=template&id=e0b6be9c&scoped=true&
var DomHeaderCpDropdownvue_type_template_id_e0b6be9c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dom-header-cp-dropdown"
  }, [_c('a', {
    staticClass: "dom-header-cp-dropdown__triger",
    attrs: {
      "href": "https://dom.kz/cp"
    },
    on: {
      "mouseenter": function ($event) {
        _vm.visible = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.userName))]), _vm.visible ? _c('div', {
    staticClass: "dom-header-cp-dropdown__body",
    on: {
      "mouseleave": function ($event) {
        _vm.visible = false;
      }
    }
  }, [_vm._l(_vm.dropDownOptions, function (item) {
    return _c('a', {
      key: item.id,
      staticClass: "dom-header-cp-dropdown__item",
      attrs: {
        "href": item.href
      }
    }, [_c('span', {
      staticClass: "dom-header-cp-dropdown__icon",
      class: item.icon
    }), _c('span', {
      staticClass: "dom-header-cp-dropdown__title"
    }, [_vm._v(_vm._s(item.title))])]);
  }), _c('span', {
    staticClass: "dom-header-cp-dropdown__item",
    on: {
      "click": _vm.logout
    }
  }, [_c('span', {
    staticClass: "dom-header-cp-dropdown__icon icon-sign_out"
  }), _c('span', {
    staticClass: "dom-header-cp-dropdown__title"
  }, [_vm._v("Выйти из аккаунта")])])], 2) : _vm._e()]);
};
var DomHeaderCpDropdownvue_type_template_id_e0b6be9c_scoped_true_staticRenderFns = [];

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(541);
;// CONCATENATED MODULE: ./node_modules/vuex/dist/vuex.esm.js


/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);
  if (version >= 2) {
    Vue.mixin({
      beforeCreate: vuexInit
    });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
var target = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }
  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });
  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, {
    prepend: true
  });
  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, {
    prepend: true
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache) {
  if (cache === void 0) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
  }
  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });
  return copy;
}

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
function isPromise(val) {
  return val && typeof val.then === 'function';
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}
function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};
var prototypeAccessors = {
  namespaced: {
    configurable: true
  }
};
prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors);
var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;
  if (false) {}
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    if (false) {}
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update(path, targetModule, newModule) {
  if (false) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {}
        return;
      }
      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}
var functionAssert = {
  assert: function (value) {
    return typeof value === 'function';
  },
  expected: 'function'
};
var objectAssert = {
  assert: function (value) {
    return typeof value === 'function' || typeof value === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};
function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }
    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}
function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}
var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  if (false) {}
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;
  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {
    return plugin(this$1);
  });
  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};
var prototypeAccessors$1 = {
  state: {
    configurable: true
  }
};
prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};
prototypeAccessors$1.state.set = function (v) {
  if (false) {}
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;
  var mutation = {
    type: type,
    payload: payload
  };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {}
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {
    return sub(mutation, this$1.state);
  });
  if (false) {}
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = {
    type: type,
    payload: payload
  };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {}
    return;
  }
  try {
    this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {
      return sub.before;
    }).forEach(function (sub) {
      return sub.before(action, this$1.state);
    });
  } catch (e) {
    if (false) {}
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.after;
        }).forEach(function (sub) {
          return sub.after(action, this$1.state);
        });
      } catch (e) {
        if (false) {}
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.error;
        }).forEach(function (sub) {
          return sub.error(action, this$1.state, error);
        });
      } catch (e) {
        if (false) {}
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? {
    before: fn
  } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;
  if (false) {}
  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};
Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;
  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};
  if (typeof path === 'string') {
    path = [path];
  }
  if (false) {}
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;
  if (typeof path === 'string') {
    path = [path];
  }
  if (false) {}
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {
    path = [path];
  }
  if (false) {}
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors$1);
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}
function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () {
        return store._vm[key];
      },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }
  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}
function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "production" !== 'production') {}
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (false) {}
      Vue.set(parentState, moduleName, module.state);
    });
  }
  var local = module.context = makeLocalContext(store, namespace, path);
  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });
  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });
  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });
  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';
  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }
      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }
      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function () {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () {
          return store.getters[type];
        },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}
function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {}
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state,
    // local state
    local.getters,
    // local getters
    store.state,
    // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    if (false) {}
  }, {
    deep: true,
    sync: true
  });
}
function getNestedState(state, path) {
  return path.reduce(function (state, key) {
    return state[key];
  }, state);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  if (false) {}
  return {
    type: type,
    payload: payload,
    options: options
  };
}
function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {}
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (false) {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (false) {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedMutation() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (false) {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if (false) {}
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (false) {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedAction() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module;
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger(ref) {
  if (ref === void 0) ref = {};
  var collapsed = ref.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter = ref.filter;
  if (filter === void 0) filter = function (mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref.transformer;
  if (transformer === void 0) transformer = function (state) {
    return state;
  };
  var mutationTransformer = ref.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function (mut) {
    return mut;
  };
  var actionFilter = ref.actionFilter;
  if (actionFilter === void 0) actionFilter = function (action, state) {
    return true;
  };
  var actionTransformer = ref.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function (act) {
    return act;
  };
  var logMutations = ref.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref.logActions;
  if (logActions === void 0) logActions = true;
  var logger = ref.logger;
  if (logger === void 0) logger = console;
  return function (store) {
    var prevState = deepCopy(store.state);
    if (typeof logger === 'undefined') {
      return;
    }
    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);
        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }
        prevState = nextState;
      });
    }
    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + action.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  };
}
function startMessage(logger, message, collapsed) {
  var startMessage = collapsed ? logger.groupCollapsed : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}
function endMessage(logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}
function getFormattedTime() {
  var time = new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}
var index = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};
/* harmony default export */ var vuex_esm = (index);

;// CONCATENATED MODULE: ./src/services/UserService.js

async function getUserInfo() {
  try {
    const data = await services_httpClient.get('/profile');
    return data.data.data;
  } catch (err) {
    console.log(err);
  }
}
;// CONCATENATED MODULE: ./store/index.js



external_commonjs_vue_commonjs2_vue_root_Vue_default().use(vuex_esm);
const store = new vuex_esm.Store({
  state: {
    profile: null,
    logout: null
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setLogout(state, logout) {
      state.logout = {
        dt: new Date(),
        logout: logout
      };
    }
  },
  actions: {
    async updateProfile({
      commit
    }) {
      const profile = await getUserInfo();
      console.log(profile);
      commit("setProfile", profile);
    },
    logout({
      commit
    }) {
      localStorage.setItem("auth._token.local", false);
      commit("setLogout", "logout");
    }
  }
});
/* harmony default export */ var store_0 = (store);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderCpDropdown.vue?vue&type=script&lang=js&

/* harmony default export */ var DomHeaderCpDropdownvue_type_script_lang_js_ = ({
  props: {
    userName: {
      type: String,
      default: "asgfAEG"
    }
  },
  data() {
    return {
      dropDownOptions: [{
        id: 1,
        title: "Настройки",
        icon: "icon-settings_outlined",
        href: "https://dom.kz/cp/setting"
      }, {
        id: 2,
        title: "Мои объявления",
        icon: "icon-format_points",
        href: "https://dom.kz/cp/my"
      }, {
        id: 3,
        title: "Сохраненное",
        icon: "icon-heart_outlined",
        href: "https://dom.kz/saved?tabIndex=0"
      }, {
        id: 4,
        title: "Документы",
        icon: "icon-file_text_outlined",
        href: "https://dom.kz/cp/docs"
      }, {
        id: 5,
        title: "Уведомления",
        icon: "icon-notifications_outlined",
        href: "https://dom.kz/cp/notifications"
      }],
      visible: false
    };
  },
  methods: {
    logout() {
      store_0.dispatch("logout");
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderCpDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderCpDropdownvue_type_script_lang_js_ = (DomHeaderCpDropdownvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderCpDropdown.vue?vue&type=style&index=0&id=e0b6be9c&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderCpDropdown.vue?vue&type=style&index=0&id=e0b6be9c&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/DomHeaderCpDropdown.vue



;


/* normalize component */

var DomHeaderCpDropdown_component = normalizeComponent(
  components_DomHeaderCpDropdownvue_type_script_lang_js_,
  DomHeaderCpDropdownvue_type_template_id_e0b6be9c_scoped_true_render,
  DomHeaderCpDropdownvue_type_template_id_e0b6be9c_scoped_true_staticRenderFns,
  false,
  null,
  "e0b6be9c",
  null
  
)

/* harmony default export */ var DomHeaderCpDropdown = (DomHeaderCpDropdown_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderLogo.vue?vue&type=template&id=2e5d5414&
var DomHeaderLogovue_type_template_id_2e5d5414_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('svg', {
    attrs: {
      "width": "109",
      "height": "44",
      "viewBox": "0 0 109 44",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "clip-path": "url(#clip0)"
    }
  }, [_c('path', {
    attrs: {
      "d": "M13.2369 20.309V10.2642H17.8055V35.5509H13.3267V33.6756C12.2195 35.0422 10.5736 35.9898 8.22943 35.9898C3.55112 35.9998 0 32.1494 0 27.0422C0 21.935 3.55112 18.0846 8.2394 18.0846C10.5237 18.0846 12.1397 18.9824 13.2369 20.309ZM4.68828 27.0422C4.68828 29.6457 6.39402 31.7305 9.07731 31.7305C11.6908 31.7305 13.4663 29.7255 13.4663 27.0422C13.4663 24.3589 11.6908 22.3539 9.07731 22.3539C6.39402 22.3539 4.68828 24.4387 4.68828 27.0422Z",
      "fill": "#5956E0"
    }
  }), _c('path', {
    attrs: {
      "d": "M38.5037 27.0423C38.5037 32.1695 34.5835 35.9999 29.2868 35.9999C24 35.9999 20.0997 32.1695 20.0997 27.0423C20.0997 21.9151 24 18.0847 29.2868 18.0847C34.5835 18.0847 38.5037 21.9151 38.5037 27.0423ZM24.7681 27.0423C24.7681 29.7954 26.7032 31.7306 29.2768 31.7306C31.8603 31.7306 33.8055 29.7954 33.8055 27.0423C33.8055 24.2892 31.8603 22.354 29.2768 22.354C26.6932 22.354 24.7681 24.2792 24.7681 27.0423Z",
      "fill": "url(#paint0_linear)"
    }
  }), _c('path', {
    attrs: {
      "d": "M61.626 18.0847C59.3916 18.0847 57.1671 18.8428 55.8504 20.9974C54.7132 19.1919 52.6883 18.0847 50.2344 18.0847C48.7581 18.0847 47.3317 18.4638 46.1945 19.4513L31.8105 5.04731C30.424 3.66077 28.1696 3.6508 26.7731 5.04731L20.0798 11.7406V18.7231L29.2768 9.52611L40.7581 21.0074V35.551H45.3367V26.2244C45.3367 23.6608 46.9726 22.374 48.9377 22.374C51.0225 22.374 52.2594 23.7306 52.2594 26.1845V35.5411H56.8579V26.2144C56.8579 23.6508 58.4938 22.364 60.4589 22.364C62.5337 22.364 63.7806 23.7206 63.7806 26.1745V35.5311H68.3492V24.7181C68.3392 20.768 65.6359 18.0847 61.626 18.0847Z",
      "fill": "#5956E0"
    }
  }), _c('path', {
    attrs: {
      "d": "M74.8529 33.8753C74.8529 35.0125 73.8853 35.99 72.7681 35.99C71.6509 35.99 70.6733 35.0125 70.6733 33.8753C70.6733 32.7581 71.6509 31.7905 72.7681 31.7905C73.8853 31.8005 74.8529 32.7581 74.8529 33.8753Z",
      "fill": "#ABABB0"
    }
  }), _c('path', {
    attrs: {
      "d": "M80.1197 25.546H82.404L88.5985 18.8726H92.2195L84.7781 26.743L92.3292 35.5609H88.6983L82.394 28.1494H80.1297V35.5609H77.2668V10.2642H80.1297V25.546H80.1197Z",
      "fill": "#ABABB0"
    }
  }), _c('path', {
    attrs: {
      "d": "M108.06 20.9676L97.7856 32.9576H108.219V35.5611H93.9751V33.4663L104.369 21.4863H94.2744V18.8728H108.06V20.9676Z",
      "fill": "#ABABB0"
    }
  })]), _c('defs', [_c('linearGradient', {
    attrs: {
      "id": "paint0_linear",
      "x1": "23.403",
      "y1": "34.0579",
      "x2": "35.1802",
      "y2": "20.0223",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#B16729"
    }
  }), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "#E5B122"
    }
  })], 1), _c('clipPath', {
    attrs: {
      "id": "clip0"
    }
  }, [_c('rect', {
    attrs: {
      "width": "108.219",
      "height": "32",
      "fill": "white",
      "transform": "translate(0 4)"
    }
  })])], 1)])]);
};
var DomHeaderLogovue_type_template_id_2e5d5414_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderLogo.vue?vue&type=script&lang=js&
/* harmony default export */ var DomHeaderLogovue_type_script_lang_js_ = ({});
;// CONCATENATED MODULE: ./src/components/DomHeaderLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderLogovue_type_script_lang_js_ = (DomHeaderLogovue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/DomHeaderLogo.vue





/* normalize component */
;
var DomHeaderLogo_component = normalizeComponent(
  components_DomHeaderLogovue_type_script_lang_js_,
  DomHeaderLogovue_type_template_id_2e5d5414_render,
  DomHeaderLogovue_type_template_id_2e5d5414_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderLogo = (DomHeaderLogo_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderTop.vue?vue&type=script&lang=js&












/* harmony default export */ var DomHeaderTopvue_type_script_lang_js_ = ({
  components: {
    DomHeaderUserLink: DomHeaderUserLink,
    DomHeaderMenuModal: DomHeaderMenuModal,
    DomHeaderMenuModalUserName: DomHeaderMenuModalUserName,
    DomHeaderMenuModalList: DomHeaderMenuModalList,
    DomHeaderMenuModalLinkList: DomHeaderMenuModalLinkList,
    DomHeaderCpDropdown: DomHeaderCpDropdown,
    DomHeaderLogo: DomHeaderLogo
  },
  props: {
    favoriteAdded: {
      type: Object,
      default() {
        return {};
      }
    },
    favoriteRemoved: {
      type: Object,
      default() {
        return {};
      }
    },
    comparisonAdded: {
      type: Object,
      default() {
        return {};
      }
    },
    comparisonRemoved: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      favoriteCount: 0,
      comparisonCount: 0,
      notificationIndicator: false,
      menus: [],
      links: []
    };
  },
  watch: {
    favoriteAdded: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.favoriteCount = await getUserFavoriteCount();
        } else {
          this.favoriteCount = this.getLocalSavedHousingCount("favorites");
        }
      }
    },
    comparisonAdded: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.comparisonCount = await getUserComparisonCount();
        } else {
          this.comparisonCount = this.getLocalSavedHousingCount("comparisons");
        }
      }
    },
    favoriteRemoved: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.favoriteCount = await getUserFavoriteCount();
        } else {
          this.favoriteCount = this.getLocalSavedHousingCount("favorites");
        }
      }
    },
    comparisonRemoved: {
      deep: true,
      async handler() {
        if (this.profile && this.profile.name) {
          this.comparisonCount = await getUserComparisonCount();
        } else {
          this.comparisonCount = this.getLocalSavedHousingCount("comparisons");
        }
      }
    },
    logout: {
      deep: true,
      async handler() {
        this.favoriteCount = 0;
        this.comparisonCount = 0;
        this.notificationIndicator = false;
        await store_0.dispatch("updateProfile");
      }
    }
  },
  computed: {
    userName() {
      if (this.profile && this.profile.name) {
        return this.profile.name;
      } else {
        return "Войти/Регистрация";
      }
    },
    profile() {
      return store_0.state.profile;
    },
    logout() {
      return store_0.state.logout;
    },
    currentURL() {
      return `${window.location.origin}`;
    },
    authUrl() {
      return `https://staging.dom.kz/login?destination=${this.currentURL}/`;
    },
    notificationUrl() {
      if (this.profile && this.profile.name) {
        return "https://dom.kz/cp/notifications";
      } else {
        return this.authUrl;
      }
    }
  },
  async mounted() {
    await store_0.dispatch("updateProfile");
    if (this.profile && this.profile.name) {
      this.favoriteCount = await getUserFavoriteCount();
      this.comparisonCount = await getUserComparisonCount();
      this.notificationIndicator = await userHasNotification();
    } else {
      this.comparisonCount = this.getLocalSavedHousingCount("comparisons");
      this.favoriteCount = this.getLocalSavedHousingCount("favorites");
      this.notificationIndicator = false;
    }
    const menus = await getMenus();
    this.menus = menus[0].menu.filter(el => el.children.length);
    this.links = menus[0].menu.filter(el => !el.children.length);
  },
  methods: {
    openMenuModal() {
      this.$refs.menumodal.showMenuModal();
    },
    getLocalSavedHousingCount(key) {
      if (JSON.parse(localStorage.getItem(key))) {
        const savedHousings = JSON.parse(localStorage.getItem(key));
        return savedHousings.length;
      } else return 0;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeaderTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeaderTopvue_type_script_lang_js_ = (DomHeaderTopvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeaderTop.vue?vue&type=style&index=0&id=7bc143d7&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeaderTop.vue?vue&type=style&index=0&id=7bc143d7&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/DomHeaderTop.vue



;


/* normalize component */

var DomHeaderTop_component = normalizeComponent(
  components_DomHeaderTopvue_type_script_lang_js_,
  DomHeaderTopvue_type_template_id_7bc143d7_render,
  DomHeaderTopvue_type_template_id_7bc143d7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeaderTop = (DomHeaderTop_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeader.vue?vue&type=script&lang=js&


/* harmony default export */ var DomHeadervue_type_script_lang_js_ = ({
  components: {
    DomHeaderTop: DomHeaderTop,
    DomHeaderBottom: DomHeaderMenus
  },
  name: "dm-header-menus",
  props: {
    favoriteAdded: {
      type: Object,
      default() {
        return {};
      }
    },
    favoriteRemoved: {
      type: Object,
      default() {
        return {};
      }
    },
    comparisonAdded: {
      type: Object,
      default() {
        return {};
      }
    },
    comparisonRemoved: {
      type: Object,
      default() {
        return {};
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/DomHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DomHeadervue_type_script_lang_js_ = (DomHeadervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DomHeader.vue?vue&type=style&index=0&id=3e153c3a&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DomHeader.vue?vue&type=style&index=0&id=3e153c3a&prod&lang=css&

;// CONCATENATED MODULE: ./src/components/DomHeader.vue



;


/* normalize component */

var DomHeader_component = normalizeComponent(
  components_DomHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DomHeader = (DomHeader_component.exports);
;// CONCATENATED MODULE: ./src/index.js

const src_plugin = {
  install(Vue) {
    Vue.component(DomHeader.name, DomHeader);
  }
};
DomHeader.install = src_plugin.install;
/* harmony default export */ var src_0 = (DomHeader);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=dm-header-menus.umd.js.map