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
exports.id = "pages/api/stock";
exports.ids = ["pages/api/stock"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/stock.js":
/*!****************************!*\
  !*** ./pages/api/stock.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const dbconnection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        database: \"mock_stock\",\n        user: \"root\",\n        password: \"\"\n    });\n    try {\n        const query = \"SELECT * from stocks\";\n        const values = [];\n        const [data] = await dbconnection.execute(query, values);\n        dbconnection.end();\n        res.status(200).json({\n            products: data\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RvY2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBRW5CLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTUMsWUFBWSxHQUFHLE1BQU1KLHNFQUFzQixDQUFDO1FBQ2pETSxJQUFJLEVBQUUsV0FBVztRQUNqQkMsUUFBUSxFQUFFLFlBQVk7UUFDdEJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxFQUFFO0tBQ1osQ0FBQztJQUVGLElBQUk7UUFDSCxNQUFNQyxLQUFLLEdBQUcsc0JBQXNCO1FBQ3BDLE1BQU1DLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsTUFBTVIsWUFBWSxDQUFDUyxPQUFPLENBQUNILEtBQUssRUFBRUMsTUFBTSxDQUFDO1FBQ3hEUCxZQUFZLENBQUNVLEdBQUcsRUFBRTtRQUNsQlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxRQUFRLEVBQUVMLElBQUk7U0FBRSxDQUFDO0tBQ3hDLENBQUMsT0FBT00sS0FBSyxFQUFFO1FBQ2ZmLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsS0FBSyxFQUFFQSxLQUFLLENBQUNDLE9BQU87U0FBRSxDQUFDO0tBQzlDO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1tYXJrZXQvLi9wYWdlcy9hcGkvc3RvY2suanM/MTg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblx0Y29uc3QgZGJjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcblx0XHRob3N0OiAnbG9jYWxob3N0JyxcclxuXHRcdGRhdGFiYXNlOiAnbW9ja19zdG9jaycsXHJcblx0XHR1c2VyOiAncm9vdCcsXHJcblx0XHRwYXNzd29yZDogJycsXHJcblx0fSlcclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gJ1NFTEVDVCAqIGZyb20gc3RvY2tzJ1xyXG5cdFx0Y29uc3QgdmFsdWVzID0gW11cclxuXHRcdGNvbnN0IFtkYXRhXSA9IGF3YWl0IGRiY29ubmVjdGlvbi5leGVjdXRlKHF1ZXJ5LCB2YWx1ZXMpXHJcblx0XHRkYmNvbm5lY3Rpb24uZW5kKClcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvZHVjdHM6IGRhdGEgfSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KVxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJkYXRhYmFzZSIsInVzZXIiLCJwYXNzd29yZCIsInF1ZXJ5IiwidmFsdWVzIiwiZGF0YSIsImV4ZWN1dGUiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwicHJvZHVjdHMiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stock.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stock.js"));
module.exports = __webpack_exports__;

})();