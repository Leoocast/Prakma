/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8090/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/** @jsx Comp */module.exports.Header = () => React.createElement("h1", {className: "headline"}, "Estsde es el header bien verga")

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx Comp */const Header = __webpack_require__(1)

	module.exports = () =>(
	    React.createElement("div", null, 
	        React.createElement(Header, null), 
	        React.createElement("p", null, "Este es el cuerpo holxcsdoadmni")
	    )
	)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx Comp */const Main = __webpack_require__(2)

	const app = document.getElementById('app')
	app.appendChild(Main())

/***/ })
/******/ ]);