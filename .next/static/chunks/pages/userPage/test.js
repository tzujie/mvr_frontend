/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/userPage/test"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fningtzujie%2FDesktop%2Fmvr_frontend%2Fpages%2FuserPage%2Ftest.tsx&page=%2FuserPage%2Ftest!":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fningtzujie%2FDesktop%2Fmvr_frontend%2Fpages%2FuserPage%2Ftest.tsx&page=%2FuserPage%2Ftest! ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/userPage/test\",\n      function () {\n        return __webpack_require__(/*! ./pages/userPage/test.tsx */ \"./pages/userPage/test.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/userPage/test\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm5pbmd0enVqaWUlMkZEZXNrdG9wJTJGbXZyX2Zyb250ZW5kJTJGcGFnZXMlMkZ1c2VyUGFnZSUyRnRlc3QudHN4JnBhZ2U9JTJGdXNlclBhZ2UlMkZ0ZXN0IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDREQUEyQjtBQUNsRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZDczMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3VzZXJQYWdlL3Rlc3RcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3VzZXJQYWdlL3Rlc3QudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi91c2VyUGFnZS90ZXN0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fningtzujie%2FDesktop%2Fmvr_frontend%2Fpages%2FuserPage%2Ftest.tsx&page=%2FuserPage%2Ftest!\n"));

/***/ }),

/***/ "./pages/userPage/test.tsx":
/*!*********************************!*\
  !*** ./pages/userPage/test.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ListAccounts = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 依照實際的資料模型來調整這裡\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(\"https://192e-163-13-201-95.ngrok-free.app/api/list_accounts/?email=\".concat(email));\n            if (response.ok) {\n                const data = await response.json();\n                setAccounts(data);\n            } else {\n                console.error(\"Error fetching accounts.\");\n            }\n        } catch (error) {\n            console.error(\"There was an error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: email,\n                placeholder: \"Search by email...\",\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSearch,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: accounts.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: account.email\n                    }, account.id, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined) // 依照實際的資料模型來調整這裡\n                )\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/test.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListAccounts, \"AJtVBXZimSEZyugpCK3oD9cxqws=\");\n_c = ListAccounts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListAccounts);\nvar _c;\n$RefreshReg$(_c, \"ListAccounts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS90ZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLGVBQXlCLElBQU07O0lBQ2pDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVEsRUFBRSxHQUFHLGlCQUFpQjtJQUV0RSxNQUFNTSxlQUFlLFVBQVk7UUFDN0IsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxzRUFBNEUsT0FBTk47WUFDbkcsSUFBSUssU0FBU0UsRUFBRSxFQUFFO2dCQUNiLE1BQU1DLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtnQkFDaENOLFlBQVlLO1lBQ2hCLE9BQU87Z0JBQ0hFLFFBQVFDLEtBQUssQ0FBQztZQUNsQixDQUFDO1FBQ0wsRUFBRSxPQUFPQSxPQUFPO1lBQ1pELFFBQVFDLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3pDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQztnQkFDR0MsTUFBSztnQkFDTEMsT0FBT2Y7Z0JBQ1BnQixhQUFZO2dCQUNaQyxVQUFVLENBQUNDLElBQU1qQixTQUFTaUIsRUFBRUMsTUFBTSxDQUFDSixLQUFLOzs7Ozs7MEJBRTVDLDhEQUFDSztnQkFBT0MsU0FBU2pCOzBCQUFjOzs7Ozs7MEJBRS9CLDhEQUFDa0I7MEJBQ0lwQixTQUFTcUIsR0FBRyxDQUFDLENBQUNDLHdCQUNYLDhEQUFDQztrQ0FBcUJELFFBQVF4QixLQUFLO3VCQUExQndCLFFBQVFFLEVBQUU7Ozs7a0NBQXVCLGlCQUFpQjs7Ozs7Ozs7Ozs7OztBQUsvRTtHQW5DTTNCO0tBQUFBO0FBcUNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJQYWdlL3Rlc3QudHN4PzViMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMaXN0QWNjb3VudHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pOyAvLyDkvp3nhaflr6bpmpvnmoTos4fmlpnmqKHlnovkvoboqr/mlbTpgJnoo6FcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vMTkyZS0xNjMtMTMtMjAxLTk1Lm5ncm9rLWZyZWUuYXBwL2FwaS9saXN0X2FjY291bnRzLz9lbWFpbD0ke2VtYWlsfWApO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRBY2NvdW50cyhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFjY291bnRzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBlbWFpbC4uLlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlNlYXJjaDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2FjY291bnRzLm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthY2NvdW50LmlkfT57YWNjb3VudC5lbWFpbH08L2xpPiAvLyDkvp3nhaflr6bpmpvnmoTos4fmlpnmqKHlnovkvoboqr/mlbTpgJnoo6FcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0QWNjb3VudHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpc3RBY2NvdW50cyIsImVtYWlsIiwic2V0RW1haWwiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiYWNjb3VudCIsImxpIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userPage/test.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fningtzujie%2FDesktop%2Fmvr_frontend%2Fpages%2FuserPage%2Ftest.tsx&page=%2FuserPage%2Ftest!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);