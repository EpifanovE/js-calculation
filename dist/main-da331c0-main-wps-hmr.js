self["webpackHotUpdatecalculation"]("main",{

/***/ "./src/lib/options/option.js":
/*!***********************************!*\
  !*** ./src/lib/options/option.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var _operatioins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operatioins */ "./src/lib/options/operatioins.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Option = function Option(name) {
  var _this = this;

  _classCallCheck(this, Option);

  _defineProperty(this, "setValue", function (value) {
    _this.value = value;
  });

  _defineProperty(this, "calculate", function (unitValue) {
    if (_this.value === null) {
      return unitValue;
    }

    if (Array.isArray(_this.value)) {
      return _this.value.reduce(function (state, current) {
        return (0,_operatioins__WEBPACK_IMPORTED_MODULE_0__.applyOperation)(current.operation, state, current.operationValue);
      }, unitValue);
    }

    return (0,_operatioins__WEBPACK_IMPORTED_MODULE_0__.applyOperation)(_this.value.operation, unitValue, _this.value.operationValue, _this.value.value);
  });

  this.name = name;
  this.value = null;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("807d4803feffe2a5e72f")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=main-da331c0-main-wps-hmr.js.map