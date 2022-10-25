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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.NEXT_APP_CLIENT_ID,\n            clientSecret: process.env.NEXT_APP_CLIENT_SECRET\n        }), \n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.secret,\n    callbacks: {\n        async jwt (token, account) {\n            if (account?.accountToken) {\n                token.accountToken = account.accountToken;\n            }\n            return token;\n        },\n        redirect: async (url, _baseUrl)=>{\n            if (url === \"/profile\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBRXZELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3ZCRSxTQUFTLEVBQUU7UUFDVkQsaUVBQWMsQ0FBQztZQUNkRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0I7WUFDeENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQjtTQUNoRCxDQUFDO0tBQ0Y7SUFDREMsR0FBRyxFQUFFO1FBQ0pDLFVBQVUsRUFBRSxJQUFJO0tBQ2hCO0lBQ0RDLE1BQU0sRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLE1BQU07SUFDMUJDLFNBQVMsRUFBRTtRQUNWLE1BQU1ILEdBQUcsRUFBQ0ksS0FBSyxFQUFFQyxPQUFPLEVBQUU7WUFDekIsSUFBSUEsT0FBTyxFQUFFQyxZQUFZLEVBQUU7Z0JBQzFCRixLQUFLLENBQUNFLFlBQVksR0FBR0QsT0FBTyxDQUFDQyxZQUFZO2FBQ3pDO1lBQ0QsT0FBT0YsS0FBSztTQUNaO1FBQ0RHLFFBQVEsRUFBRSxPQUFPQyxHQUFHLEVBQUVDLFFBQVEsR0FBSztZQUNsQyxJQUFJRCxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUN2QixPQUFPRSxPQUFPLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDM0I7WUFDRCxPQUFPRCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDM0I7S0FDRDtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYS1hZG1pbi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRHb29nbGVQcm92aWRlcih7XHJcblx0XHRcdGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX0FQUF9DTElFTlRfSUQsXHJcblx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9BUFBfQ0xJRU5UX1NFQ1JFVCxcclxuXHRcdH0pLFxyXG5cdF0sXHJcblx0and0OiB7XHJcblx0XHRlbmNyeXB0aW9uOiB0cnVlLFxyXG5cdH0sXHJcblx0c2VjcmV0OiBwcm9jZXNzLmVudi5zZWNyZXQsXHJcblx0Y2FsbGJhY2tzOiB7XHJcblx0XHRhc3luYyBqd3QodG9rZW4sIGFjY291bnQpIHtcclxuXHRcdFx0aWYgKGFjY291bnQ/LmFjY291bnRUb2tlbikge1xyXG5cdFx0XHRcdHRva2VuLmFjY291bnRUb2tlbiA9IGFjY291bnQuYWNjb3VudFRva2VuXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRva2VuXHJcblx0XHR9LFxyXG5cdFx0cmVkaXJlY3Q6IGFzeW5jICh1cmwsIF9iYXNlVXJsKSA9PiB7XHJcblx0XHRcdGlmICh1cmwgPT09ICcvcHJvZmlsZScpIHtcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcvJylcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcvJylcclxuXHRcdH0sXHJcblx0fSxcclxufSlcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0FQUF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJORVhUX0FQUF9DTElFTlRfU0VDUkVUIiwiand0IiwiZW5jcnlwdGlvbiIsInNlY3JldCIsImNhbGxiYWNrcyIsInRva2VuIiwiYWNjb3VudCIsImFjY291bnRUb2tlbiIsInJlZGlyZWN0IiwidXJsIiwiX2Jhc2VVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();