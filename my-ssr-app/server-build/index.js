/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: [BABEL] C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\server\\\\index.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \\\"development\\\", \\\"test\\\", and \\\"production\\\". Instead, received: \\\"development \\\". (While processing: \\\"C:\\\\\\\\bootcamp_ricky\\\\\\\\my-ssr-app\\\\\\\\node_modules\\\\\\\\babel-preset-react-app\\\\\\\\index.js\\\")\\n    at module.exports (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\babel-preset-react-app\\\\create.js:48:11)\\n    at module.exports (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\babel-preset-react-app\\\\index.js:19:10)\\n    at loadDescriptor (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:165:14)\\n    at cachedFunction (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\caching.js:33:19)\\n    at loadPresetDescriptor (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:235:63)\\n    at config.presets.reduce (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:77:21)\\n    at Array.reduce (<anonymous>)\\n    at recurseDescriptors (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:74:38)\\n    at loadFullConfig (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:108:6)\\n    at process.nextTick (C:\\\\bootcamp_ricky\\\\my-ssr-app\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:28:33)\\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)\\n    at process._tickCallback (internal/process/next_tick.js:181:9)\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

/******/ });