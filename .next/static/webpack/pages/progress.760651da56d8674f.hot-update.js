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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Progress() {\n    var _this = this;\n    var getColor = function getColor(obj) {\n        var val = obj.partial * 5 / obj.total;\n        if (val < 1) return \"one\";\n        else if (val < 2) return \"two\";\n        else if (val < 3) return \"three\";\n        else if (val < 4) return \"four\";\n        else if (val < 5) return \"five\";\n        else return \"six\";\n    };\n    var quests = [\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 100,\n            partial: 37\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 700\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 1000\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Turbo telegram - Progress\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-md-center align-items-center vh-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"table-responsive\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Group\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Quantity\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Targets\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: quests && quests.map(function(quest, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: quest.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"one\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 45\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: quest.targets\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 41\n                                            }, _this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 37\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Progress;\nvar _c;\n$RefreshReg$(_c, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRnUXVlc3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzcygpIHtcbiAgICBjb25zdCBxdWVzdHM6IFRnUXVlc3RbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJAQnVsbHlCdXlcIixcbiAgICAgICAgICAgIHRhcmdldHM6IFwiQFByZXp6aUJvbmkgQFByZXp6aVBvcG9saVwiLFxuICAgICAgICAgICAgdG90YWw6IDEwMCxcbiAgICAgICAgICAgIHBhcnRpYWw6IDM3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQEJ1bGx5QnV5XCIsXG4gICAgICAgICAgICB0YXJnZXRzOiBcIkBQcmV6emlCb25pIEBQcmV6emlQb3BvbGlcIixcbiAgICAgICAgICAgIHRvdGFsOiAxMDAwLFxuICAgICAgICAgICAgcGFydGlhbDogNzAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQEJ1bGx5QnV5XCIsXG4gICAgICAgICAgICB0YXJnZXRzOiBcIkBQcmV6emlCb25pIEBQcmV6emlQb3BvbGlcIixcbiAgICAgICAgICAgIHRvdGFsOiAxMDAwLFxuICAgICAgICAgICAgcGFydGlhbDogMTAwMFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIGdldENvbG9yKG9iajogVGdRdWVzdCl7XG4gICAgICAgIGxldCB2YWwgPSAob2JqLnBhcnRpYWwgKiA1KSAvIG9iai50b3RhbDtcblxuICAgICAgICBpZiAodmFsIDwgMSkgXG4gICAgICAgICAgICByZXR1cm4gXCJvbmVcIjtcbiAgICAgICAgZWxzZSBpZiAodmFsIDwgMilcbiAgICAgICAgICAgIHJldHVybiBcInR3b1wiO1xuICAgICAgICBlbHNlIGlmICh2YWwgPCAzKVxuICAgICAgICAgICAgcmV0dXJuIFwidGhyZWVcIjtcbiAgICAgICAgZWxzZSBpZiAodmFsIDwgNClcbiAgICAgICAgICAgIHJldHVybiBcImZvdXJcIjtcbiAgICAgICAgZWxzZSBpZiAodmFsIDwgNSlcbiAgICAgICAgICAgIHJldHVybiBcImZpdmVcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwic2l4XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VHVyYm8gdGVsZWdyYW0gLSBQcm9ncmVzczwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUG93ZXJmdWwgdG9vbHMgdG8gaW1wcm92ZSB5b3UgVGVsZWdyYW0gZXhwZXJpZW5jZS4gUmVhbCBtZW1iZXJzIGZvciB5b3V0IFRlbGVncmFtIGdyb3VwIGFuZCBVc2VmdWwgQk9Uc1wiLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LW1kLWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdmgtMTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkdyb3VwPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VGFyZ2V0czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3RzICYmIHF1ZXN0cy5tYXAoKHF1ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cXVlc3QubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVcIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3F1ZXN0LnRhcmdldHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiSGVhZCIsIlByb2dyZXNzIiwiZ2V0Q29sb3IiLCJvYmoiLCJ2YWwiLCJwYXJ0aWFsIiwidG90YWwiLCJxdWVzdHMiLCJuYW1lIiwidGFyZ2V0cyIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJxdWVzdCIsImluZGV4IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/progress.tsx\n"));

/***/ })

});