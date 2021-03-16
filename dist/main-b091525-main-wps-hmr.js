self["webpackHotUpdatecalculation"]("main",{

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationBuilder": () => (/* reexport safe */ _calculation__WEBPACK_IMPORTED_MODULE_0__.CalculationBuilder),
/* harmony export */   "Option": () => (/* reexport safe */ _options_option__WEBPACK_IMPORTED_MODULE_2__.Option),
/* harmony export */   "Unit": () => (/* reexport safe */ _unit__WEBPACK_IMPORTED_MODULE_3__.Unit),
/* harmony export */   "OPERATION_MINUS": () => (/* reexport safe */ _options_operatioins__WEBPACK_IMPORTED_MODULE_1__.OPERATION_MINUS),
/* harmony export */   "OPERATION_PLUS": () => (/* reexport safe */ _options_operatioins__WEBPACK_IMPORTED_MODULE_1__.OPERATION_PLUS),
/* harmony export */   "OPERATION_MULTIPLE": () => (/* reexport safe */ _options_operatioins__WEBPACK_IMPORTED_MODULE_1__.OPERATION_MULTIPLE)
/* harmony export */ });
/* harmony import */ var _calculation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculation */ "./src/lib/calculation.js");
/* harmony import */ var _options_operatioins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options/operatioins */ "./src/lib/options/operatioins.js");
/* harmony import */ var _options_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/option */ "./src/lib/options/option.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit */ "./src/lib/unit.js");






/***/ }),

/***/ "./src/lib/unit.js":
/*!*************************!*\
  !*** ./src/lib/unit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unit": () => (/* binding */ Unit)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Unit = function Unit(name) {
  var _this = this;

  _classCallCheck(this, Unit);

  _defineProperty(this, "setValue", function (value) {
    _this._value = value;
  });

  _defineProperty(this, "getValue", function () {
    if (_this.options.length > 0) {
      return _this.options.reduce(function (state, currentOption) {
        return currentOption.calculate(state);
      }, _this._value);
    }

    return _this._value;
  });

  _defineProperty(this, "setOptions", function (options) {
    _this.options = options;
  });

  this.name = name;
  this._value = null;
  this.options = [];
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f1719dc0968396e6e9dc")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=main-b091525-main-wps-hmr.js.map