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
exports.id = "pages/customer";
exports.ids = ["pages/customer"];
exports.modules = {

/***/ "./components/common/button-tab.module.css":
/*!*************************************************!*\
  !*** ./components/common/button-tab.module.css ***!
  \*************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"btn\": \"button-tab_btn__nYZcx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9idXR0b24tdGFiLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYS1hZG1pbi8uL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbi10YWIubW9kdWxlLmNzcz83MTVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcImJ1dHRvbi10YWJfYnRuX19uWVpjeFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/button-tab.module.css\n");

/***/ }),

/***/ "./components/common/navbar.module.css":
/*!*********************************************!*\
  !*** ./components/common/navbar.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"navbar_container__VL6EH\",\n\t\"left-wrapper\": \"navbar_left-wrapper__ItT15\",\n\t\"sign-out\": \"navbar_sign-out__ckeNg\",\n\t\"btn-wrapper\": \"navbar_btn-wrapper__k9uyR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9uYXZiYXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhLWFkbWluLy4vY29tcG9uZW50cy9jb21tb24vbmF2YmFyLm1vZHVsZS5jc3M/MTgxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJuYXZiYXJfY29udGFpbmVyX19WTDZFSFwiLFxuXHRcImxlZnQtd3JhcHBlclwiOiBcIm5hdmJhcl9sZWZ0LXdyYXBwZXJfX0l0VDE1XCIsXG5cdFwic2lnbi1vdXRcIjogXCJuYXZiYXJfc2lnbi1vdXRfX2NrZU5nXCIsXG5cdFwiYnRuLXdyYXBwZXJcIjogXCJuYXZiYXJfYnRuLXdyYXBwZXJfX2s5dXlSXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/navbar.module.css\n");

/***/ }),

/***/ "./components/common/ButtonTab.js":
/*!****************************************!*\
  !*** ./components/common/ButtonTab.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonTab)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_tab_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-tab.module.css */ \"./components/common/button-tab.module.css\");\n/* harmony import */ var _button_tab_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_tab_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction ButtonTab({ name , onclick  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_button_tab_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),\n        onClick: ()=>{\n            router.push(`/${onclick}`);\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\ButtonTab.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25UYWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDbUI7QUFDTDtBQUV4QixTQUFTRyxTQUFTLENBQUMsRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsRUFBRTtJQUNwRCxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0MsOERBQUNLLEtBQUc7UUFDSEMsU0FBUyxFQUFFUCxtRUFBYTtRQUN4QlEsT0FBTyxFQUFFLElBQU07WUFDZEgsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVMLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDMUI7a0JBRUFELElBQUk7Ozs7O1lBQ0EsQ0FDTjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2EtYWRtaW4vLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25UYWIuanM/NTI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24tdGFiLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uVGFiKHsgbmFtZSwgb25jbGljayB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXNbJ2J0biddfVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0cm91dGVyLnB1c2goYC8ke29uY2xpY2t9YClcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0e25hbWV9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlUm91dGVyIiwiQnV0dG9uVGFiIiwibmFtZSIsIm9uY2xpY2siLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/ButtonTab.js\n");

/***/ }),

/***/ "./components/common/Navbar.js":
/*!*************************************!*\
  !*** ./components/common/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/common/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_common_ButtonTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/ButtonTab */ \"./components/common/ButtonTab.js\");\n\n\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"left-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, this),\n                    \"Mock Stock\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"btn-wrapper\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_ButtonTab__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"buy\",\n                        onclick: \"buy\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_ButtonTab__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"sell\",\n                        onclick: \"sell\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_ButtonTab__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: \"dashboard\",\n                        onclick: \"dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"sign-out\"]),\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\components\\\\common\\\\Navbar.js\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDb0M7QUFFdEI7QUFFQztBQUNXO0FBRXBDLFNBQVNPLE1BQU0sR0FBRztJQUNoQyxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0MsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxxRUFBbUI7OzBCQUNsQyw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFFTCwyRUFBc0I7O2tDQUNyQyw4REFBQ00sS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLFdBQVc7Ozs7OzRCQUFHO29CQUFBLFlBRXhCOzs7Ozs7b0JBQU07MEJBQ04sOERBQUNILEtBQUc7Z0JBQUNDLFNBQVMsRUFBRUwsMEVBQXFCOztrQ0FDcEMsOERBQUNDLG1FQUFTO3dCQUFDTyxJQUFJLEVBQUMsS0FBSzt3QkFBQ0MsT0FBTyxFQUFDLEtBQUs7Ozs7OzRCQUFHO2tDQUN0Qyw4REFBQ1IsbUVBQVM7d0JBQUNPLElBQUksRUFBQyxNQUFNO3dCQUFDQyxPQUFPLEVBQUMsTUFBTTs7Ozs7NEJBQUc7a0NBQ3hDLDhEQUFDUixtRUFBUzt3QkFBQ08sSUFBSSxFQUFDLFdBQVc7d0JBQUNDLE9BQU8sRUFBQyxXQUFXOzs7Ozs0QkFBRzs7Ozs7O29CQUM3QzswQkFFTiw4REFBQ0wsS0FBRztnQkFBQ00sT0FBTyxFQUFFLElBQU1iLHdEQUFPLEVBQUU7Z0JBQUVRLFNBQVMsRUFBRUwsdUVBQWtCOzBCQUFFLFVBRTlEOzs7OztvQkFBTTs7Ozs7O1lBQ0QsQ0FDTjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2EtYWRtaW4vLi9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIuanM/ZjE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uVGFiIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblRhYidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY29udGFpbmVyJ119PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsZWZ0LXdyYXBwZXInXX0+XHJcblx0XHRcdFx0PGltZyBzcmM9Jy9sb2dvLnBuZycgLz5cclxuXHRcdFx0XHRNb2NrIFN0b2NrXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydidG4td3JhcHBlciddfT5cclxuXHRcdFx0XHQ8QnV0dG9uVGFiIG5hbWU9J2J1eScgb25jbGljaz0nYnV5JyAvPlxyXG5cdFx0XHRcdDxCdXR0b25UYWIgbmFtZT0nc2VsbCcgb25jbGljaz0nc2VsbCcgLz5cclxuXHRcdFx0XHQ8QnV0dG9uVGFiIG5hbWU9J2Rhc2hib2FyZCcgb25jbGljaz0nZGFzaGJvYXJkJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfSBjbGFzc05hbWU9e3N0eWxlc1snc2lnbi1vdXQnXX0+XHJcblx0XHRcdFx0U2lnbiBvdXRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJCdXR0b25UYWIiLCJOYXZiYXIiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJuYW1lIiwib25jbGljayIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/Navbar.js\n");

/***/ }),

/***/ "./pages/customer.js":
/*!***************************!*\
  !*** ./pages/customer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ customer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_common_ButtonTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/ButtonTab */ \"./components/common/ButtonTab.js\");\n/* harmony import */ var components_common_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Navbar */ \"./components/common/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction customer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\customer.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jdXN0b21lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDTjtBQUNwQjtBQUU2QjtBQUV2QyxTQUFTSSxRQUFRLEdBQUc7SUFDbEMscUJBQU8sOERBQUNDLEtBQUc7Ozs7WUFBTztDQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhLWFkbWluLy4vcGFnZXMvY3VzdG9tZXIuanM/ZTJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uVGFiIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblRhYidcclxuaW1wb3J0IE5hdmJhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9OYXZiYXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21lci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VzdG9tZXIoKSB7XHJcblx0cmV0dXJuIDxkaXY+PC9kaXY+XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvblRhYiIsIk5hdmJhciIsIlJlYWN0Iiwic3R5bGVzIiwiY3VzdG9tZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/customer.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/customer.js"));
module.exports = __webpack_exports__;

})();