"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // const { data: session } = useSession()\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.session, loadingSession = ref.loadingSession;\n    if (loadingSession) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n            lineNumber: 10,\n            columnNumber: 10\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this),\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();\n                    },\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"You are logged as: \",\n                            session.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aadha\\\\Documents\\\\vsc\\\\stock-market\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"tCQxCyxjwsrA/8SB50lFVVRqMz4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDaUM7O0FBRTlDLFNBQVNJLElBQUksR0FBRzs7SUFDOUIseUNBQXlDO0lBRXpDLElBQW9DRCxHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBeENFLE9BQU8sR0FBcUJGLEdBQVksQ0FBeENFLE9BQU8sRUFBRUMsY0FBYyxHQUFLSCxHQUFZLENBQS9CRyxjQUFjO0lBRS9CLElBQUlBLGNBQWMsRUFBRTtRQUNuQixxQkFBTyw4REFBQ0MsR0FBQztzQkFBQyxZQUFVOzs7OztnQkFBSTtLQUN4QjtJQUNELHFCQUNDOzswQkFDQyw4REFBQ1Asa0RBQUk7O2tDQUNKLDhEQUFDUSxPQUFLO2tDQUFDLGlCQUFlOzs7Ozs0QkFBUTtrQ0FDOUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsOEJBQThCOzs7Ozs0QkFBRztrQ0FDbEUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7Ozs7OztvQkFDakM7WUFFTixDQUFDVCxPQUFPLGtCQUNSOzBCQUNDLDRFQUFDVSxRQUFNO29CQUFDQyxPQUFPLEVBQUU7K0JBQU1mLHVEQUFNLEVBQUU7cUJBQUE7OEJBQUUsU0FBTzs7Ozs7d0JBQVM7NkJBQy9DO1lBR0hJLE9BQU8sa0JBQ1A7O2tDQUNDLDhEQUFDWSxJQUFFOzs0QkFBQyxxQkFBbUI7NEJBQUNaLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDUixJQUFJOzs7Ozs7NEJBQU07a0NBQy9DLDhEQUFDUyxJQUFFOzs7OzRCQUFHO2tDQUNOLDhEQUFDSixRQUFNO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1kLHdEQUFPLEVBQUU7eUJBQUE7a0NBQUUsVUFBUTs7Ozs7NEJBQVM7OzRCQUNqRDs7b0JBRUYsQ0FDSDtDQUNEO0dBL0J1QkUsSUFBSTs7UUFHU0QsdURBQVU7OztBQUh2QkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHQvLyBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuXHRjb25zdCB7IHNlc3Npb24sIGxvYWRpbmdTZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcclxuXHJcblx0aWYgKGxvYWRpbmdTZXNzaW9uKSB7XHJcblx0XHRyZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHR7IXNlc3Npb24gJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHR7c2Vzc2lvbiAmJiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxoND5Zb3UgYXJlIGxvZ2dlZCBhczoge3Nlc3Npb24udXNlci5uYW1lfTwvaDQ+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJIb21lIiwic2Vzc2lvbiIsImxvYWRpbmdTZXNzaW9uIiwicCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiLCJ1c2VyIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});