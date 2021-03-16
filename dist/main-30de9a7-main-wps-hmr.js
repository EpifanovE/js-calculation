/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecalculation"]("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./src/tests/one.test.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./src/tests/one.test.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"./node_modules/chai/index.mjs\");\n/* harmony import */ var _lib_calculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/calculation */ \"./src/lib/calculation.js\");\n/* harmony import */ var _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/discounts/discount */ \"./src/lib/discounts/discount.js\");\n/* harmony import */ var _lib_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/unit */ \"./src/lib/unit.js\");\n/* harmony import */ var _lib_options_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/options/option */ \"./src/lib/options/option.js\");\n/* harmony import */ var _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/options/operatioins */ \"./src/lib/options/operatioins.js\");\n\n\n\n\n\n\n\nvar getCalculation = function getCalculation(onChange) {\n  var priceUnit = new _lib_unit__WEBPACK_IMPORTED_MODULE_3__.Unit(\"price\");\n  priceUnit.setOptions([new _lib_options_option__WEBPACK_IMPORTED_MODULE_4__.Option(\"color\", _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS)]);\n  var amountUnit = new _lib_unit__WEBPACK_IMPORTED_MODULE_3__.Unit(\"amount\");\n  var calculation = (0,_lib_calculation__WEBPACK_IMPORTED_MODULE_1__.CalculationBuilder)().build({\n    units: [priceUnit, amountUnit],\n    formula: function formula() {\n      return priceUnit.getValue() * amountUnit.getValue();\n    },\n    onChagne: onChange,\n    options: [new _lib_options_option__WEBPACK_IMPORTED_MODULE_4__.Option(\"color\", _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS), new _lib_options_option__WEBPACK_IMPORTED_MODULE_4__.Option(\"count\", _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS)],\n    discounts: [new _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.Discount({\n      type: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_TYPE_FIX,\n      condition: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_CONDITION_PERMANENT,\n      conditionAmount: 100,\n      value: 150\n    }), new _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.Discount({\n      type: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_TYPE_FIX,\n      condition: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_CONDITION_QTY,\n      conditionAmount: 200,\n      value: 570\n    })]\n  });\n  calculation.setUnitValue(\"price\", 50);\n  calculation.setUnitValue(\"amount\", 10);\n  return calculation;\n};\n\ndescribe(\"one value option\", function () {\n  var result = null;\n  var calculation = getCalculation(function (value) {\n    result = value;\n  });\n  calculation.setUnitOptionValue(\"price\", \"color\", {\n    operation: _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS,\n    operationValue: 3\n  });\n  it(\"description\", function () {\n    (0,chai__WEBPACK_IMPORTED_MODULE_0__.expect)(result.total).to.equal(530);\n  });\n});\ndescribe(\"multi value option\", function () {\n  var result = null;\n  var calculation = getCalculation(function (value) {\n    result = value;\n  });\n  calculation.setUnitOptionValue(\"price\", \"color\", [{\n    operation: _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS,\n    operationValue: 10\n  }, {\n    operation: _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_MINUS,\n    operationValue: 5\n  }]);\n  it(\"description\", function () {\n    (0,chai__WEBPACK_IMPORTED_MODULE_0__.expect)(result.total).to.equal(550);\n  });\n});\ndescribe(\"number value option\", function () {\n  var result = null;\n  var calculation = getCalculation(function (value) {\n    result = value;\n  });\n  calculation.setUnitOptionValue(\"price\", \"color\", {\n    operation: _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS,\n    value: 5,\n    operationValue: 3\n  });\n  it(\"description\", function () {\n    (0,chai__WEBPACK_IMPORTED_MODULE_0__.expect)(result.total).to.equal(650);\n  });\n});\n\n//# sourceURL=webpack://calculation/./src/tests/one.test.js?./node_modules/babel-loader/lib/index.js");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("4f3d1a4f2821589f750d")
/******/ 	})();
/******/ 	
/******/ }
);