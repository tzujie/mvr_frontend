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
exports.id = "pages/userPage/AccountLookup";
exports.ids = ["pages/userPage/AccountLookup"];
exports.modules = {

/***/ "./pages/userPage/AccountLookup.tsx":
/*!******************************************!*\
  !*** ./pages/userPage/AccountLookup.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/components/AccountLookup.tsx\n\n\n\nconst AccountLookup = ()=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearch = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`https://192e-163-13-201-95.ngrok-free.app/api/account/${email}/`);\n            setAccount(response.data);\n            setError(\"\");\n        } catch (err) {\n            setAccount(null);\n            setError(\"查詢失敗，請確認電子郵件是否正確。\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                placeholder: \"輸入電子郵件\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSearch,\n                children: \"查詢\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                lineNumber: 32,\n                columnNumber: 23\n            }, undefined),\n            account && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"名稱: \",\n                            account.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"電子郵件: \",\n                            account.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"電話: \",\n                            account.phone\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountLookup);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS9BY2NvdW50TG9va3VwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7O0FBRUs7QUFDZDtBQUUxQixNQUFNRyxnQkFBMEIsSUFBTTtJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFNLElBQUk7SUFDaEQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFTO0lBRTNDLE1BQU1TLGVBQWUsVUFBWTtRQUM3QixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNVCxpREFBUyxDQUFDLENBQUMsc0RBQXNELEVBQUVFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xHRyxXQUFXSSxTQUFTRSxJQUFJO1lBQ3hCSixTQUFTO1FBQ2IsRUFBRSxPQUFPSyxLQUFLO1lBQ1ZQLFdBQVcsSUFBSTtZQUNmRSxTQUFTO1FBQ2I7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTTs7MEJBQ0csOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPZjtnQkFDUGdCLFVBQVUsQ0FBQ0MsSUFBTWhCLFNBQVNnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFNUMsOERBQUNJO2dCQUFPQyxTQUFTZDswQkFBYzs7Ozs7O1lBRTlCRix1QkFBUyw4REFBQ2lCOzBCQUFHakI7Ozs7OztZQUNiRix5QkFDRyw4REFBQ1M7O2tDQUNHLDhEQUFDVTs7NEJBQUU7NEJBQUtuQixRQUFRb0IsSUFBSTs7Ozs7OztrQ0FDcEIsOERBQUNEOzs0QkFBRTs0QkFBT25CLFFBQVFGLEtBQUs7Ozs7Ozs7a0NBQ3ZCLDhEQUFDcUI7OzRCQUFFOzRCQUFLbkIsUUFBUXFCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7QUFFQSxpRUFBZXhCLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdnJfd2Vic2l0ZS8uL3BhZ2VzL3VzZXJQYWdlL0FjY291bnRMb29rdXAudHN4PzU4MjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbXBvbmVudHMvQWNjb3VudExvb2t1cC50c3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQWNjb3VudExvb2t1cDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly8xOTJlLTE2My0xMy0yMDEtOTUubmdyb2stZnJlZS5hcHAvYXBpL2FjY291bnQvJHtlbWFpbH0vYCk7XG4gICAgICAgICAgICBzZXRBY2NvdW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNldEFjY291bnQobnVsbCk7XG4gICAgICAgICAgICBzZXRFcnJvcign5p+l6Kmi5aSx5pWX77yM6KuL56K66KqN6Zu75a2Q6YO15Lu25piv5ZCm5q2j56K644CCJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLovLjlhaXpm7vlrZDpg7Xku7ZcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+5p+l6KmiPC9idXR0b24+XG5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cbiAgICAgICAgICAgIHthY2NvdW50ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD7lkI3nqLE6IHthY2NvdW50Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD7pm7vlrZDpg7Xku7Y6IHthY2NvdW50LmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+6Zu76KmxOiB7YWNjb3VudC5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiDpoa/npLrlhbbku5bpnIDopoHnmoTluLPmiLbos4foqIogKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudExvb2t1cDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBY2NvdW50TG9va3VwIiwiZW1haWwiLCJzZXRFbWFpbCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVNlYXJjaCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVyciIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm5hbWUiLCJwaG9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userPage/AccountLookup.tsx\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/userPage/AccountLookup.tsx"));
module.exports = __webpack_exports__;

})();