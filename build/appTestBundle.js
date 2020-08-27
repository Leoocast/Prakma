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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx Comp */const Main = __webpack_require__(2)

	const app = document.getElementById('appTest')
	app.appendChild(Main())

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx Comp */const Header = __webpack_require__(3)

	const cambiarP = () => {
	    const p = document.getElementById('cuerpo')
	    
	    Object.assign(p.style, {
	        fontSize: "100px",
	        transition: 'font-size 300ms ease-out'
	    })

	    p.innerHTML = "😲"
	}

	const cambiarTexto = function () {
	    this.innerHTML = "Eres la polla con cebolla"
	}

	module.exports = () =>(
	    React.createElement("div", {className: "container text-center mt-5"}, 
	        React.createElement(Header, {text: "Bienvenido", name: "Leo", actionButton1: cambiarP, actionButton2: cambiarTexto}), 
	        React.createElement("h2", {className: "text-center mt-2"}, 
	            React.createElement("span", {id: "cuerpo"}, "😃")
	        )
	    )
	)

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/** @jsx Comp */const styles = {
	    marginLeft: "15px",
	    transition: "all 500ms ease-in-out"
	}

	module.exports.Header = ({text, name, actionButton1, actionButton2}) => (
	    React.createElement("div", null, 
	        React.createElement("h1", {className: "headline"}, text, " ", name), 
	        React.createElement("button", {onClick: actionButton1, className: "btn btn-primary"}, "Sorprenderse"), 
	        React.createElement("button", {style: styles, onClick: actionButton2, className: "btn btn-primary"}, "Cambia mi texto")
	    )
	)

/***/ })
/******/ ]);