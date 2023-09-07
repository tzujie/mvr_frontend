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
exports.id = "pages/userPage/test";
exports.ids = ["pages/userPage/test"];
exports.modules = {

/***/ "./pages/userPage/test.tsx":
/*!*********************************!*\
  !*** ./pages/userPage/test.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ListAccounts = ()=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 依照實際的資料模型來調整這裡\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(`https://192e-163-13-201-95.ngrok-free.app/api/list_accounts/?email=${email}`);\n            if (response.ok) {\n                const data = await response.json();\n                setAccounts(data);\n            } else {\n                console.error(\"Error fetching accounts.\");\n            }\n        } catch (error) {\n            console.error(\"There was an error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: email,\n                placeholder: \"Search by email...\",\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSearch,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: accounts.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: account.email\n                    }, account.id, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined) // 依照實際的資料模型來調整這裡\n                )\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListAccounts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsZUFBeUIsSUFBTTtJQUNqQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFRLEVBQUUsR0FBRyxpQkFBaUI7SUFFdEUsTUFBTU0sZUFBZSxVQUFZO1FBQzdCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxtRUFBbUUsRUFBRU4sTUFBTSxDQUFDO1lBQzFHLElBQUlLLFNBQVNFLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7Z0JBQ2hDTixZQUFZSztZQUNoQixPQUFPO2dCQUNIRSxRQUFRQyxLQUFLLENBQUM7WUFDbEIsQ0FBQztRQUNMLEVBQUUsT0FBT0EsT0FBTztZQUNaRCxRQUFRQyxLQUFLLENBQUMsdUJBQXVCQTtRQUN6QztJQUNKO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQ0dDLE1BQUs7Z0JBQ0xDLE9BQU9mO2dCQUNQZ0IsYUFBWTtnQkFDWkMsVUFBVSxDQUFDQyxJQUFNakIsU0FBU2lCLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSzs7Ozs7OzBCQUU1Qyw4REFBQ0s7Z0JBQU9DLFNBQVNqQjswQkFBYzs7Ozs7OzBCQUUvQiw4REFBQ2tCOzBCQUNJcEIsU0FBU3FCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWCw4REFBQ0M7a0NBQXFCRCxRQUFReEIsS0FBSzt1QkFBMUJ3QixRQUFRRSxFQUFFOzs7O2tDQUF1QixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7QUFLL0U7QUFFQSxpRUFBZTNCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdnJfd2Vic2l0ZS8uL3BhZ2VzL3VzZXJQYWdlL3Rlc3QudHN4PzViMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMaXN0QWNjb3VudHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pOyAvLyDkvp3nhaflr6bpmpvnmoTos4fmlpnmqKHlnovkvoboqr/mlbTpgJnoo6FcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vMTkyZS0xNjMtMTMtMjAxLTk1Lm5ncm9rLWZyZWUuYXBwL2FwaS9saXN0X2FjY291bnRzLz9lbWFpbD0ke2VtYWlsfWApO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRBY2NvdW50cyhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFjY291bnRzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBlbWFpbC4uLlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlNlYXJjaDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2FjY291bnRzLm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthY2NvdW50LmlkfT57YWNjb3VudC5lbWFpbH08L2xpPiAvLyDkvp3nhaflr6bpmpvnmoTos4fmlpnmqKHlnovkvoboqr/mlbTpgJnoo6FcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0QWNjb3VudHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpc3RBY2NvdW50cyIsImVtYWlsIiwic2V0RW1haWwiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiYWNjb3VudCIsImxpIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userPage/test.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/userPage/test.tsx"));
module.exports = __webpack_exports__;

})();