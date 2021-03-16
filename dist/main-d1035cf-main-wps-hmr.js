/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecalculation"]("main",{

/***/ "./src/lib/options/operatioins.js":
/*!****************************************!*\
  !*** ./src/lib/options/operatioins.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OPERATION_PLUS\": () => (/* binding */ OPERATION_PLUS),\n/* harmony export */   \"OPERATION_MINUS\": () => (/* binding */ OPERATION_MINUS),\n/* harmony export */   \"OPERATION_MULTIPLE\": () => (/* binding */ OPERATION_MULTIPLE),\n/* harmony export */   \"OperationBuilder\": () => (/* binding */ OperationBuilder)\n/* harmony export */ });\nconst OPERATION_PLUS = \"OPERATION_PLUS\"\r\nconst OPERATION_MINUS = \"OPERATION_MINUS\"\r\nconst OPERATION_MULTIPLE = \"OPERATION_MULTIPLE\"\r\n\r\nclass OperationBuilder {\r\n    build(operationName) {\r\n        switch (operationName) {\r\n            case OPERATION_PLUS:\r\n                return new OperationPlus()\r\n            case OPERATION_MINUS:\r\n                return new OperationMinus()\r\n            case OPERATION_MULTIPLE:\r\n                return new OperationMultiple()\r\n        }\r\n    }\r\n}\r\n\r\nclass OperationPlus {\r\n    calculate(optionValue, unitValue) {\r\n        return optionValue + unitValue\r\n    }\r\n}\r\n\r\nclass OperationMinus {\r\n    calculate(optionValue, unitValue) {\r\n        return unitValue - optionValue\r\n    }\r\n}\r\n\r\nclass OperationMultiple {\r\n    calculate(optionValue, unitValue) {\r\n        return unitValue * optionValue\r\n    }\r\n}\n\n//# sourceURL=webpack://calculation/./src/lib/options/operatioins.js?");

/***/ }),

/***/ "./src/tests/one.test.js":
/*!*******************************!*\
  !*** ./src/tests/one.test.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chai */ \"./node_modules/chai/index.mjs\");\n/* harmony import */ var _lib_calculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/calculation */ \"./src/lib/calculation.js\");\n/* harmony import */ var _lib_calculation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_calculation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/discounts/discount */ \"./src/lib/discounts/discount.js\");\n/* harmony import */ var _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/unit */ \"./src/lib/unit.js\");\n/* harmony import */ var _lib_unit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_unit__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_options_option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/options/option */ \"./src/lib/options/option.js\");\n/* harmony import */ var _lib_options_option__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_options_option__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/options/operatioins */ \"./src/lib/options/operatioins.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndescribe(\"one\", () => {\r\n\r\n    let result = null\r\n\r\n    const priceUnit = new _lib_unit__WEBPACK_IMPORTED_MODULE_3__.Unit(\"price\");\r\n    priceUnit.setOptions([\r\n        new _lib_options_option__WEBPACK_IMPORTED_MODULE_4__.Option(\"color\", _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS),\r\n    ])\r\n\r\n    const amountUnit = new _lib_unit__WEBPACK_IMPORTED_MODULE_3__.Unit(\"amount\")\r\n\r\n    const calculation = new _lib_calculation__WEBPACK_IMPORTED_MODULE_1__.CalculationBuilder().build({\r\n        units: [\r\n            priceUnit,\r\n            amountUnit,\r\n        ],\r\n        formula: () => {\r\n            return priceUnit.getValue() * amountUnit.getValue()\r\n        },\r\n        onChagne: (value) => {\r\n            retsult = value\r\n        },\r\n        options: [\r\n            new _lib_options_option__WEBPACK_IMPORTED_MODULE_4__.Option(\"color\", _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS),\r\n            new _lib_options_option__WEBPACK_IMPORTED_MODULE_4__.Option(\"count\", _lib_options_operatioins__WEBPACK_IMPORTED_MODULE_5__.OPERATION_PLUS),\r\n        ],\r\n        discounts: [\r\n            new _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.Discount({\r\n                type: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_TYPE_FIX,\r\n                condition: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_CONDITION_PERMANENT,\r\n                conditionAmount: 100,\r\n                value: 150\r\n            }),\r\n            new _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.Discount({\r\n                type: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_TYPE_FIX,\r\n                condition: _lib_discounts_discount__WEBPACK_IMPORTED_MODULE_2__.DISCOUNT_CONDITION_QTY,\r\n                conditionAmount: 200,\r\n                value: 570\r\n            }),\r\n        ]\r\n    })\r\n\r\n    calculation.setUnitValue(\"price\", 50)\r\n    calculation.setUnitValue(\"amount\", 10)\r\n    calculation.setOptionValue(\"color\", 15)\r\n    calculation.setOptionValue(\"count\", 3)\r\n    calculation.setUnitOptionValue(\"price\", \"color\", 3)\r\n\r\n    it(\"description\", () => {\r\n        ;(0,chai__WEBPACK_IMPORTED_MODULE_0__.expect)(result).to.equal()\r\n    })\r\n})\n\n//# sourceURL=webpack://calculation/./src/tests/one.test.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b791ca31f1f5de1ce65c")
/******/ 	})();
/******/ 	
/******/ }
);