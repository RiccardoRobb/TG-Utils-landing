"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/progress",{

/***/ "./pages/progress.tsx":
/*!****************************!*\
  !*** ./pages/progress.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Progress() {\n    var _this = this;\n    var getColor = function getColor(obj) {\n        var val = obj.partial * 5 / obj.total;\n        if (val < 1) return \"one\";\n        else if (val < 2) return \"two\";\n        else if (val < 3) return \"three\";\n        else if (val < 4) return \"four\";\n        else if (val < 5) return \"five\";\n        else return \"six\";\n    };\n    var quests = [\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 10000,\n            partial: 3007\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 700\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 1000\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Turbo telegram - Progress\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-md-center align-items-center vh-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"table-responsive\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Group\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Quantity\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Targets\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: quests && quests.map(function(quest, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"re\",\n                                                children: quest.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: getColor(quest),\n                                                    children: [\n                                                        quest.partial,\n                                                        \"/\",\n                                                        quest.total\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"last\",\n                                                children: quest.targets\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 37\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Progress;\nvar _c;\n$RefreshReg$(_c, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUNKOzs7Ozt3QkFDTjs7Ozs7b0JBQ0o7O29CQUNILENBQ047Q0FDSjtBQTNFdUJ0QixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2dyZXNzLnRzeD80ZTU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRnUXVlc3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzcygpIHtcbiAgICBjb25zdCBxdWVzdHM6IFRnUXVlc3RbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJAQnVsbHlCdXlcIixcbiAgICAgICAgICAgIHRhcmdldHM6IFwiQFByZXp6aUJvbmkgQFByZXp6aVBvcG9saVwiLFxuICAgICAgICAgICAgdG90YWw6IDEwMDAwLFxuICAgICAgICAgICAgcGFydGlhbDogMzAwN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkBCdWxseUJ1eVwiLFxuICAgICAgICAgICAgdGFyZ2V0czogXCJAUHJlenppQm9uaSBAUHJlenppUG9wb2xpXCIsXG4gICAgICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgICAgIHBhcnRpYWw6IDcwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkBCdWxseUJ1eVwiLFxuICAgICAgICAgICAgdGFyZ2V0czogXCJAUHJlenppQm9uaSBAUHJlenppUG9wb2xpXCIsXG4gICAgICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgICAgIHBhcnRpYWw6IDEwMDBcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBmdW5jdGlvbiBnZXRDb2xvcihvYmo6IFRnUXVlc3Qpe1xuICAgICAgICBsZXQgdmFsID0gKG9iai5wYXJ0aWFsICogNSkgLyBvYmoudG90YWw7XG5cbiAgICAgICAgaWYgKHZhbCA8IDEpIFxuICAgICAgICAgICAgcmV0dXJuIFwib25lXCI7XG4gICAgICAgIGVsc2UgaWYgKHZhbCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gXCJ0d29cIjtcbiAgICAgICAgZWxzZSBpZiAodmFsIDwgMylcbiAgICAgICAgICAgIHJldHVybiBcInRocmVlXCI7XG4gICAgICAgIGVsc2UgaWYgKHZhbCA8IDQpXG4gICAgICAgICAgICByZXR1cm4gXCJmb3VyXCI7XG4gICAgICAgIGVsc2UgaWYgKHZhbCA8IDUpXG4gICAgICAgICAgICByZXR1cm4gXCJmaXZlXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBcInNpeFwiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlR1cmJvIHRlbGVncmFtIC0gUHJvZ3Jlc3M8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBvd2VyZnVsIHRvb2xzIHRvIGltcHJvdmUgeW91IFRlbGVncmFtIGV4cGVyaWVuY2UuIFJlYWwgbWVtYmVycyBmb3IgeW91dCBUZWxlZ3JhbSBncm91cCBhbmQgVXNlZnVsIEJPVHNcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHZoLTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Hcm91cDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRhcmdldHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0cyAmJiBxdWVzdHMubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVcIj57cXVlc3QubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENvbG9yKHF1ZXN0KX0+e3F1ZXN0LnBhcnRpYWx9L3txdWVzdC50b3RhbH08L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFzdFwiPntxdWVzdC50YXJnZXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJQcm9ncmVzcyIsImdldENvbG9yIiwib2JqIiwidmFsIiwicGFydGlhbCIsInRvdGFsIiwicXVlc3RzIiwibmFtZSIsInRhcmdldHMiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwicXVlc3QiLCJpbmRleCIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/progress.tsx\n"));

/***/ })

});