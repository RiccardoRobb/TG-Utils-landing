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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Progress() {\n    var getColor = function getColor(obj) {\n        var val = Math.floor(obj.partial * 5 / obj.total);\n        if (val <= 1) return \"-moz-linear-gradient(to left, #fff, #dd776e)\";\n        else if (val === 2) return \"-moz-linear-gradient(to left, #fff, #e9a268, #dd776e)\";\n        else if (val === 3) return \"-moz-linear-gradient(to left, #fff, #f5ce62, #e9a268, #dd776e)\";\n        else if (val === 4) return \"-moz-linear-gradient(to left, #fff, #a4c073, #f5ce62, #e9a268, #dd776e)\";\n        else return \"-moz-linear-gradient(to left, #57bb8a, #a4c073, #f5ce62, #e9a268, #dd776e)\";\n    };\n    var quests = [\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 100,\n            partial: 37\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 700\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Turbo telegram - Progress\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-md-center align-items-center vh-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"table-responsive\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Group\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Quantity\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Targets\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"@BullyBuy\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                id: \"1\",\n                                                className: \"progressbar\",\n                                                children: \"-------\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"@PrezziBoni @PrezziPopoli\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"@Canale1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"progressbar\",\n                                                children: \"-------\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"@PrezziBoni @ \"\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Progress;\nvar _c;\n$RefreshReg$(_c, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9ncmVzcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUlkLFNBQVNDLFFBQVEsR0FBRztRQWdCdEJDLFFBQVEsR0FBakIsU0FBU0EsUUFBUSxDQUFDQyxHQUFZLEVBQUM7UUFDM0IsSUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFJLENBQUNDLE9BQU8sR0FBRyxDQUFDLEdBQUlKLEdBQUcsQ0FBQ0ssS0FBSyxDQUFDO1FBRW5ELElBQUlKLEdBQUcsSUFBSSxDQUFDLEVBQ1IsT0FBTyw4Q0FBOEMsQ0FBQzthQUNyRCxJQUFJQSxHQUFHLEtBQUssQ0FBQyxFQUNkLE9BQU8sdURBQXVELENBQUM7YUFDOUQsSUFBSUEsR0FBRyxLQUFLLENBQUMsRUFDZCxPQUFPLGdFQUFnRSxDQUFDO2FBQ3ZFLElBQUlBLEdBQUcsS0FBSyxDQUFDLEVBQ2QsT0FBTyx5RUFBeUUsQ0FBQzthQUVqRixPQUFPLDRFQUE0RSxDQUFDO0tBQzNGO0lBNUJELElBQU1LLE1BQU0sR0FBYztRQUN0QjtZQUNJQyxJQUFJLEVBQUUsV0FBVztZQUNqQkMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQ0gsS0FBSyxFQUFFLEdBQUc7WUFDVkQsT0FBTyxFQUFFLEVBQUU7U0FDZDtRQUNEO1lBQ0lHLElBQUksRUFBRSxXQUFXO1lBQ2pCQyxPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDSCxLQUFLLEVBQUUsSUFBSTtZQUNYRCxPQUFPLEVBQUUsR0FBRztTQUNmO0tBQ0o7SUFpQkQscUJBQ0k7OzBCQUNBLDhEQUFDUCxrREFBSTs7a0NBQ0QsOERBQUNZLE9BQUs7a0NBQUMsMkJBQXlCOzs7Ozs0QkFBUTtrQ0FDeEMsOERBQUNDLE1BQUk7d0JBQUNILElBQUksRUFBQyxhQUFhO3dCQUFDSSxPQUFPLEVBQUMseUdBQXlHOzs7Ozs0QkFBRTs7Ozs7O29CQUN6STswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNFQUFzRTswQkFDakYsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7OEJBQzdCLDRFQUFDQyxPQUFLO3dCQUFDRCxTQUFTLEVBQUMsT0FBTzs7MENBQ3BCLDhEQUFDRSxPQUFLOzBDQUNGLDRFQUFDQyxJQUFFOztzREFDQyw4REFBQ0MsSUFBRTs0Q0FBQ0MsS0FBSyxFQUFDLEtBQUs7c0RBQUMsT0FBSzs7Ozs7Z0RBQUs7c0RBQzFCLDhEQUFDRCxJQUFFOzRDQUFDQyxLQUFLLEVBQUMsS0FBSztzREFBQyxVQUFROzs7OztnREFBSztzREFDN0IsOERBQUNELElBQUU7NENBQUNDLEtBQUssRUFBQyxLQUFLO3NEQUFDLFNBQU87Ozs7O2dEQUFLOzs7Ozs7d0NBQzNCOzs7OztvQ0FDRDswQ0FDUiw4REFBQ0MsT0FBSzs7a0RBQ0YsOERBQUNILElBQUU7OzBEQUNDLDhEQUFDSSxJQUFFOzBEQUFDLFdBQVM7Ozs7O29EQUFLOzBEQUNsQiw4REFBQ0EsSUFBRTtnREFBQ0MsRUFBRSxFQUFDLEdBQUdSO2dEQUFBQSxTQUFTLEVBQUMsYUFBYTswREFBQyxTQUFPOzs7OztvREFBSzswREFDOUMsOERBQUNPLElBQUU7MERBQUMsMkJBQXlCOzs7OztvREFBSzs7Ozs7OzRDQUNqQztrREFDTCw4REFBQ0osSUFBRTs7MERBQ0MsOERBQUNJLElBQUU7MERBQUMsVUFBUTs7Ozs7b0RBQUs7MERBQ2pCLDhEQUFDQSxJQUFFO2dEQUFDUCxTQUFTLEVBQUMsYUFBYTswREFBQyxTQUFPOzs7OztvREFBSzswREFDeEMsOERBQUNPLElBQUU7MERBQUMsZ0JBQWM7Ozs7O29EQUFLOzs7Ozs7NENBQ3RCOzs7Ozs7b0NBQ0Q7Ozs7Ozs0QkFDSjs7Ozs7d0JBQ047Ozs7O29CQUNKOztvQkFDSCxDQUNOO0NBQ0o7QUFoRXVCdEIsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9ncmVzcy50c3g/NGU1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUZ1F1ZXN0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3MoKSB7XG4gICAgY29uc3QgcXVlc3RzOiBUZ1F1ZXN0W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQEJ1bGx5QnV5XCIsXG4gICAgICAgICAgICB0YXJnZXRzOiBcIkBQcmV6emlCb25pIEBQcmV6emlQb3BvbGlcIixcbiAgICAgICAgICAgIHRvdGFsOiAxMDAsXG4gICAgICAgICAgICBwYXJ0aWFsOiAzN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkBCdWxseUJ1eVwiLFxuICAgICAgICAgICAgdGFyZ2V0czogXCJAUHJlenppQm9uaSBAUHJlenppUG9wb2xpXCIsXG4gICAgICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgICAgIHBhcnRpYWw6IDcwMFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIGdldENvbG9yKG9iajogVGdRdWVzdCl7XG4gICAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKChvYmoucGFydGlhbCAqIDUpIC8gb2JqLnRvdGFsKTtcblxuICAgICAgICBpZiAodmFsIDw9IDEpIFxuICAgICAgICAgICAgcmV0dXJuIFwiLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiwgI2RkNzc2ZSlcIjtcbiAgICAgICAgZWxzZSBpZiAodmFsID09PSAyKVxuICAgICAgICAgICAgcmV0dXJuIFwiLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiwgI2U5YTI2OCwgI2RkNzc2ZSlcIjtcbiAgICAgICAgZWxzZSBpZiAodmFsID09PSAzKVxuICAgICAgICAgICAgcmV0dXJuIFwiLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiwgI2Y1Y2U2MiwgI2U5YTI2OCwgI2RkNzc2ZSlcIjtcbiAgICAgICAgZWxzZSBpZiAodmFsID09PSA0KVxuICAgICAgICAgICAgcmV0dXJuIFwiLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmZiwgI2E0YzA3MywgI2Y1Y2U2MiwgI2U5YTI2OCwgI2RkNzc2ZSlcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzU3YmI4YSwgI2E0YzA3MywgI2Y1Y2U2MiwgI2U5YTI2OCwgI2RkNzc2ZSlcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5UdXJibyB0ZWxlZ3JhbSAtIFByb2dyZXNzPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQb3dlcmZ1bCB0b29scyB0byBpbXByb3ZlIHlvdSBUZWxlZ3JhbSBleHBlcmllbmNlLiBSZWFsIG1lbWJlcnMgZm9yIHlvdXQgVGVsZWdyYW0gZ3JvdXAgYW5kIFVzZWZ1bCBCT1RzXCIvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB2aC0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+R3JvdXA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlF1YW50aXR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UYXJnZXRzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QEJ1bGx5QnV5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCIxXCJjbGFzc05hbWU9XCJwcm9ncmVzc2JhclwiPi0tLS0tLS08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AUHJlenppQm9uaSBAUHJlenppUG9wb2xpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBDYW5hbGUxPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZ3Jlc3NiYXJcIj4tLS0tLS0tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QFByZXp6aUJvbmkgQCA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJQcm9ncmVzcyIsImdldENvbG9yIiwib2JqIiwidmFsIiwiTWF0aCIsImZsb29yIiwicGFydGlhbCIsInRvdGFsIiwicXVlc3RzIiwibmFtZSIsInRhcmdldHMiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwidGQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/progress.tsx\n"));

/***/ })

});