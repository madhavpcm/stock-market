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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/common/navbar.module.css":
/*!*********************************************!*\
  !*** ./components/common/navbar.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"navbar_container__VL6EH\",\n\t\"left-wrapper\": \"navbar_left-wrapper__ItT15\",\n\t\"left-heading-wrapper\": \"navbar_left-heading-wrapper__jTywT\",\n\t\"left-link-wrapper\": \"navbar_left-link-wrapper__GBVYD\",\n\t\"left-link\": \"navbar_left-link__RCiq_\",\n\t\"right-wrapper\": \"navbar_right-wrapper__3ib_i\",\n\t\"right-top-wrapper\": \"navbar_right-top-wrapper__g_dYr\",\n\t\"right-top-text-wrapper\": \"navbar_right-top-text-wrapper__mtLPK\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9uYXZiYXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvY2stbWFya2V0Ly4vY29tcG9uZW50cy9jb21tb24vbmF2YmFyLm1vZHVsZS5jc3M/MTgxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJuYXZiYXJfY29udGFpbmVyX19WTDZFSFwiLFxuXHRcImxlZnQtd3JhcHBlclwiOiBcIm5hdmJhcl9sZWZ0LXdyYXBwZXJfX0l0VDE1XCIsXG5cdFwibGVmdC1oZWFkaW5nLXdyYXBwZXJcIjogXCJuYXZiYXJfbGVmdC1oZWFkaW5nLXdyYXBwZXJfX2pUeXdUXCIsXG5cdFwibGVmdC1saW5rLXdyYXBwZXJcIjogXCJuYXZiYXJfbGVmdC1saW5rLXdyYXBwZXJfX0dCVllEXCIsXG5cdFwibGVmdC1saW5rXCI6IFwibmF2YmFyX2xlZnQtbGlua19fUkNpcV9cIixcblx0XCJyaWdodC13cmFwcGVyXCI6IFwibmF2YmFyX3JpZ2h0LXdyYXBwZXJfXzNpYl9pXCIsXG5cdFwicmlnaHQtdG9wLXdyYXBwZXJcIjogXCJuYXZiYXJfcmlnaHQtdG9wLXdyYXBwZXJfX2dfZFlyXCIsXG5cdFwicmlnaHQtdG9wLXRleHQtd3JhcHBlclwiOiBcIm5hdmJhcl9yaWdodC10b3AtdGV4dC13cmFwcGVyX19tdExQS1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/navbar.module.css\n");

/***/ }),

/***/ "./components/common/Navbar.js":
/*!*************************************!*\
  !*** ./components/common/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/common/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Navbar({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"left-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"left-heading-wrapper\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/tathva.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 15,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Mock Stock\"\n                            }, void 0, false, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 16,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"left-link-wrapper\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"left-link\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/cash.svg\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Buy\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 19,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"left-link\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/cash.svg\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Sell\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 23,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"left-link\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/cash.svg\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"right-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"right-top-wrapper\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"right-top-text-wrapper\"]),\n                                children: [\n                                    \"John Doe\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"johndoe@gmail.com\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/tathva.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/components/common/Navbar.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNzQjtBQUV0QjtBQUVDO0FBRXpCLFNBQVNPLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUM1QyxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0MsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxxRUFBbUI7OzBCQUNsQyw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFFTCwyRUFBc0I7O2tDQUNyQyw4REFBQ0ksS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTCxtRkFBOEI7OzBDQUM3Qyw4REFBQ00sS0FBRztnQ0FBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7O29DQUFHOzBDQUN6Qiw4REFBQ0MsTUFBSTswQ0FBQyxZQUFVOzs7OztvQ0FBTzs7Ozs7OzRCQUNsQjtrQ0FDTiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTCxnRkFBMkI7OzBDQUMxQyw4REFBQ0ksS0FBRztnQ0FBQ0MsU0FBUyxFQUFFTCx3RUFBbUI7O2tEQUNsQyw4REFBQ00sS0FBRzt3Q0FBQ0MsR0FBRyxFQUFDLFdBQVc7Ozs7OzRDQUFHO2tEQUN2Qiw4REFBQ0MsTUFBSTtrREFBQyxLQUFHOzs7Ozs0Q0FBTzs7Ozs7O29DQUNYOzBDQUNOLDhEQUFDSixLQUFHO2dDQUFDQyxTQUFTLEVBQUVMLHdFQUFtQjs7a0RBQ2xDLDhEQUFDTSxLQUFHO3dDQUFDQyxHQUFHLEVBQUMsV0FBVzs7Ozs7NENBQUc7a0RBQ3ZCLDhEQUFDQyxNQUFJO2tEQUFDLE1BQUk7Ozs7OzRDQUFPOzs7Ozs7b0NBQ1o7MENBQ04sOERBQUNKLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRUwsd0VBQW1COztrREFDbEMsOERBQUNNLEtBQUc7d0NBQUNDLEdBQUcsRUFBQyxXQUFXOzs7Ozs0Q0FBRztrREFDdkIsOERBQUNDLE1BQUk7a0RBQUMsV0FBUzs7Ozs7NENBQU87Ozs7OztvQ0FDakI7Ozs7Ozs0QkFDRDs7Ozs7O29CQUNEOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUVMLDRFQUF1Qjs7a0NBQ3RDLDhEQUFDSSxLQUFHO3dCQUFDQyxTQUFTLEVBQUVMLGdGQUEyQjs7MENBQzFDLDhEQUFDSSxLQUFHO2dDQUFDQyxTQUFTLEVBQUVMLHFGQUFnQzs7b0NBQUUsVUFFakQ7a0RBQUEsOERBQUNRLE1BQUk7a0RBQUMsbUJBQWlCOzs7Ozs0Q0FBTzs7Ozs7O29DQUN6QjswQ0FDTiw4REFBQ0YsS0FBRztnQ0FBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7O29DQUFHOzs7Ozs7NEJBQ3BCO29CQUNMTCxRQUFROzs7Ozs7b0JBQ0o7Ozs7OztZQUNELENBQ047Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1hcmtldC8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci5qcz9mMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBjaGlsZHJlbiB9KSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXInXX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsZWZ0LXdyYXBwZXInXX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2xlZnQtaGVhZGluZy13cmFwcGVyJ119PlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvdGF0aHZhLnBuZycgLz5cblx0XHRcdFx0XHQ8c3Bhbj5Nb2NrIFN0b2NrPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbGVmdC1saW5rLXdyYXBwZXInXX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbGVmdC1saW5rJ119PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9jYXNoLnN2ZycgLz5cblx0XHRcdFx0XHRcdDxzcGFuPkJ1eTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsZWZ0LWxpbmsnXX0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL2Nhc2guc3ZnJyAvPlxuXHRcdFx0XHRcdFx0PHNwYW4+U2VsbDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsZWZ0LWxpbmsnXX0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL2Nhc2guc3ZnJyAvPlxuXHRcdFx0XHRcdFx0PHNwYW4+UG9ydGZvbGlvPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncmlnaHQtd3JhcHBlciddfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncmlnaHQtdG9wLXdyYXBwZXInXX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncmlnaHQtdG9wLXRleHQtd3JhcHBlciddfT5cblx0XHRcdFx0XHRcdEpvaG4gRG9lXG5cdFx0XHRcdFx0XHQ8c3Bhbj5qb2huZG9lQGdtYWlsLmNvbTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aW1nIHNyYz0nL3RhdGh2YS5wbmcnIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInN0eWxlcyIsIk5hdmJhciIsImNoaWxkcmVuIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/Navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styles_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var styles_variables_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_variables_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_text_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/text-styles.css */ \"./styles/text-styles.css\");\n/* harmony import */ var styles_text_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_text_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styles_layout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/layout.css */ \"./styles/layout.css\");\n/* harmony import */ var styles_layout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_layout_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/form.css */ \"./styles/form.css\");\n/* harmony import */ var styles_form_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_form_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_fonts_IBMPlexSans_stylesheet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/fonts/IBMPlexSans/stylesheet.css */ \"./assets/fonts/IBMPlexSans/stylesheet.css\");\n/* harmony import */ var assets_fonts_IBMPlexSans_stylesheet_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_fonts_IBMPlexSans_stylesheet_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var components_common_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/Navbar */ \"./components/common/Navbar.js\");\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/pages/_app.js\",\n            lineNumber: 15,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/madhavpcm/Study/s5/DBMS/stock-market/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBRXBCO0FBQ0Y7QUFDSTtBQUNMO0FBQ0Y7QUFFd0I7QUFDSDtBQUU3QyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN4QyxxQkFDQyw4REFBQ0osNERBQWU7UUFBQ0ssT0FBTyxFQUFFRCxTQUFTLENBQUNDLE9BQU87a0JBQzFDLDRFQUFDRixTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ1gsQ0FDbEI7Q0FDRDtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvY2stbWFya2V0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLmNzcydcbmltcG9ydCAnc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICdzdHlsZXMvdGV4dC1zdHlsZXMuY3NzJ1xuaW1wb3J0ICdzdHlsZXMvbGF5b3V0LmNzcydcbmltcG9ydCAnc3R5bGVzL2Zvcm0uY3NzJ1xuXG5pbXBvcnQgJ2Fzc2V0cy9mb250cy9JQk1QbGV4U2Fucy9zdHlsZXNoZWV0LmNzcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vTmF2YmFyJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cblx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHQ8L1Nlc3Npb25Qcm92aWRlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./assets/fonts/IBMPlexSans/stylesheet.css":
/*!*************************************************!*\
  !*** ./assets/fonts/IBMPlexSans/stylesheet.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/form.css":
/*!*************************!*\
  !*** ./styles/form.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/layout.css":
/*!***************************!*\
  !*** ./styles/layout.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/text-styles.css":
/*!********************************!*\
  !*** ./styles/text-styles.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();