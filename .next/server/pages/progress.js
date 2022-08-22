"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/progress";
exports.ids = ["pages/progress"];
exports.modules = {

/***/ "./pages/progress.tsx":
/*!****************************!*\
  !*** ./pages/progress.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Progress)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Progress() {\n    const quests = [\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 100,\n            partial: 37\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 700\n        },\n        {\n            name: \"@BullyBuy\",\n            targets: \"@PrezziBoni @PrezziPopoli\",\n            total: 1000,\n            partial: 1000\n        }\n    ];\n    function getColor(obj) {\n        let val = obj.partial * 5 / obj.total;\n        if (val < 1) return \"one\";\n        else if (val < 2) return \"two\";\n        else if (val < 3) return \"three\";\n        else if (val < 4) return \"four\";\n        else if (val < 5) return \"five\";\n        else return \"six\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Turbo telegram - Progress\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs\"\n                    }, void 0, false, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-md-center align-items-center vh-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"table-responsive\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Group\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Quantity\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: \"Targets\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: quests && quests.map((quest, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"re\",\n                                                children: quest.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: getColor(quest),\n                                                    children: [\n                                                        quest.partial,\n                                                        \"/\",\n                                                        quest.total\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 45\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"last\",\n                                                children: quest.targets\n                                            }, void 0, false, {\n                                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 37\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robb/Scrivania/NextTS/LandingPage/landingpage/pages/progress.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOOzs7OztvQkFDSjs7b0JBQ0gsQ0FDTjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZ3BhZ2UvLi9wYWdlcy9wcm9ncmVzcy50c3g/NGU1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUZ1F1ZXN0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3MoKSB7XG4gICAgY29uc3QgcXVlc3RzOiBUZ1F1ZXN0W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQEJ1bGx5QnV5XCIsXG4gICAgICAgICAgICB0YXJnZXRzOiBcIkBQcmV6emlCb25pIEBQcmV6emlQb3BvbGlcIixcbiAgICAgICAgICAgIHRvdGFsOiAxMDAsXG4gICAgICAgICAgICBwYXJ0aWFsOiAzN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkBCdWxseUJ1eVwiLFxuICAgICAgICAgICAgdGFyZ2V0czogXCJAUHJlenppQm9uaSBAUHJlenppUG9wb2xpXCIsXG4gICAgICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgICAgIHBhcnRpYWw6IDcwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkBCdWxseUJ1eVwiLFxuICAgICAgICAgICAgdGFyZ2V0czogXCJAUHJlenppQm9uaSBAUHJlenppUG9wb2xpXCIsXG4gICAgICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgICAgIHBhcnRpYWw6IDEwMDBcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBmdW5jdGlvbiBnZXRDb2xvcihvYmo6IFRnUXVlc3Qpe1xuICAgICAgICBsZXQgdmFsID0gKG9iai5wYXJ0aWFsICogNSkgLyBvYmoudG90YWw7XG5cbiAgICAgICAgaWYgKHZhbCA8IDEpIFxuICAgICAgICAgICAgcmV0dXJuIFwib25lXCI7XG4gICAgICAgIGVsc2UgaWYgKHZhbCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gXCJ0d29cIjtcbiAgICAgICAgZWxzZSBpZiAodmFsIDwgMylcbiAgICAgICAgICAgIHJldHVybiBcInRocmVlXCI7XG4gICAgICAgIGVsc2UgaWYgKHZhbCA8IDQpXG4gICAgICAgICAgICByZXR1cm4gXCJmb3VyXCI7XG4gICAgICAgIGVsc2UgaWYgKHZhbCA8IDUpXG4gICAgICAgICAgICByZXR1cm4gXCJmaXZlXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBcInNpeFwiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlR1cmJvIHRlbGVncmFtIC0gUHJvZ3Jlc3M8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBvd2VyZnVsIHRvb2xzIHRvIGltcHJvdmUgeW91IFRlbGVncmFtIGV4cGVyaWVuY2UuIFJlYWwgbWVtYmVycyBmb3IgeW91dCBUZWxlZ3JhbSBncm91cCBhbmQgVXNlZnVsIEJPVHNcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHZoLTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Hcm91cDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRhcmdldHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0cyAmJiBxdWVzdHMubWFwKChxdWVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVcIj57cXVlc3QubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENvbG9yKHF1ZXN0KX0+e3F1ZXN0LnBhcnRpYWx9L3txdWVzdC50b3RhbH08L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGFzdFwiPntxdWVzdC50YXJnZXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJQcm9ncmVzcyIsInF1ZXN0cyIsIm5hbWUiLCJ0YXJnZXRzIiwidG90YWwiLCJwYXJ0aWFsIiwiZ2V0Q29sb3IiLCJvYmoiLCJ2YWwiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwicXVlc3QiLCJpbmRleCIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/progress.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/progress.tsx"));
module.exports = __webpack_exports__;

})();