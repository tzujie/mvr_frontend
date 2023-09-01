"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userPage/accountinfo",{

/***/ "./pages/userPage/accountinfo.tsx":
/*!****************************************!*\
  !*** ./pages/userPage/accountinfo.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AccountInfo() {\n    _s();\n    const [accountData, setAccountData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: 13,\n            name: \"John Doe\",\n            email: \"johndoe@example.com\",\n            phone: \"1234567890\",\n            login_count: 8,\n            start_login_date: null\n        }\n    ]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchAccountData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://192e-163-13-201-95.ngrok-free.app/list_accounts\");\n                setAccountData(response.data);\n            } catch (err) {\n                if (err instanceof Error) {\n                    setError(err.message);\n                }\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchAccountData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"MVR - Account Information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"View account information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-3b0ac45d1ba7901\" + \" \" + \"main-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-3b0ac45d1ba7901\" + \" \" + \"title\",\n                        children: \"Account Information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    accountData.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-3b0ac45d1ba7901\" + \" \" + \"account\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"jsx-3b0ac45d1ba7901\",\n                                    children: account.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3b0ac45d1ba7901\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"jsx-3b0ac45d1ba7901\",\n                                            children: \"ID:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 28\n                                        }, this),\n                                        \" \",\n                                        account.id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3b0ac45d1ba7901\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"jsx-3b0ac45d1ba7901\",\n                                            children: \"Email:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 28\n                                        }, this),\n                                        \" \",\n                                        account.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3b0ac45d1ba7901\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"jsx-3b0ac45d1ba7901\",\n                                            children: \"Phone:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 28\n                                        }, this),\n                                        \" \",\n                                        account.phone\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, account.id, true, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)),\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"3b0ac45d1ba7901\",\n                        children: \".main-content.jsx-3b0ac45d1ba7901{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.2rem;height:100vh;font-size:1.5rem}.title.jsx-3b0ac45d1ba7901{text-align:center;color:#4a90e2;margin-top:2rem;font-size:3rem;border-bottom:3px solid#4a90e2;padding-bottom:1.5rem}.account.jsx-3b0ac45d1ba7901{background-color:#f5f5f5;padding:30px;margin:30px auto;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;width:70%;max-width:650px;-webkit-box-shadow:0px 4px 20px rgba(0,0,0,.1);-moz-box-shadow:0px 4px 20px rgba(0,0,0,.1);box-shadow:0px 4px 20px rgba(0,0,0,.1);border-left:8px solid#4d86b3}h2.jsx-3b0ac45d1ba7901{color:#333;font-size:2rem;margin-bottom:1.5rem}p.jsx-3b0ac45d1ba7901{color:#666;margin-bottom:1rem}strong.jsx-3b0ac45d1ba7901{color:#4d86b3}\"\n                    }, void 0, false, void 0, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountInfo, \"ahiN7YvEnLiCchq3BYejjyrj9Bk=\");\n_c = AccountInfo;\nvar _c;\n$RefreshReg$(_c, \"AccountInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS9hY2NvdW50aW5mby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBQ2xCO0FBRVgsU0FBU0ksY0FBYzs7SUFVbEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFZO1FBQUM7WUFDdkRLLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxrQkFBa0IsSUFBSTtRQUMxQjtLQUFFO0lBQ0YsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFnQixJQUFJO0lBRXRERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTWdCLG1CQUFtQixVQUFZO1lBQ2pDLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNZixpREFBUyxDQUFDO2dCQUNqQ0csZUFBZVksU0FBU0UsSUFBSTtZQUNoQyxFQUFFLE9BQU9DLEtBQUs7Z0JBQ1YsSUFBSUEsZUFBZUMsT0FBTztvQkFDdEJOLFNBQVNLLElBQUlFLE9BQU87Z0JBQ3hCLENBQUM7WUFDTCxTQUFVO2dCQUNOVCxXQUFXLEtBQUs7WUFDcEI7UUFDSjtRQUVBRztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJOzswQkFDSSw4REFBQ2pCLGtEQUFJQTs7a0NBQ0QsOERBQUN3QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS2pCLE1BQUs7d0JBQWNrQixTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0M7eURBQWU7O2tDQUNaLDhEQUFDQztpRUFBYTtrQ0FBUTs7Ozs7O29CQUNyQjFCLFlBQVkyQixHQUFHLENBQUNDLENBQUFBLHdCQUNiLDhEQUFDQztxRUFBK0I7OzhDQUM1Qiw4REFBQ0M7OzhDQUFJRixRQUFRekIsSUFBSTs7Ozs7OzhDQUNqQiw4REFBQzRCOzs7c0RBQUUsOERBQUNDOztzREFBTzs7Ozs7O3dDQUFZO3dDQUFFSixRQUFRMUIsRUFBRTs7Ozs7Ozs4Q0FFbkMsOERBQUM2Qjs7O3NEQUFFLDhEQUFDQzs7c0RBQU87Ozs7Ozt3Q0FBZTt3Q0FBRUosUUFBUXhCLEtBQUs7Ozs7Ozs7OENBQ3pDLDhEQUFDMkI7OztzREFBRSw4REFBQ0M7O3NEQUFPOzs7Ozs7d0NBQWU7d0NBQUVKLFFBQVF2QixLQUFLOzs7Ozs7OzsyQkFMbkN1QixRQUFRMUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RHhDLENBQUM7R0F6R3VCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyUGFnZS9hY2NvdW50aW5mby50c3g/MGNmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRJbmZvKCkge1xuICAgIGludGVyZmFjZSBBY2NvdW50IHtcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgICBwaG9uZTogc3RyaW5nO1xuICAgICAgICBsb2dpbl9jb3VudDogbnVtYmVyO1xuICAgICAgICBzdGFydF9sb2dpbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IFthY2NvdW50RGF0YSwgc2V0QWNjb3VudERhdGFdID0gdXNlU3RhdGU8QWNjb3VudFtdPihbe1xuICAgICAgICBpZDogMTMsXG4gICAgICAgIG5hbWU6IFwiSm9obiBEb2VcIixcbiAgICAgICAgZW1haWw6IFwiam9obmRvZUBleGFtcGxlLmNvbVwiLFxuICAgICAgICBwaG9uZTogXCIxMjM0NTY3ODkwXCIsXG4gICAgICAgIGxvZ2luX2NvdW50OiA4LFxuICAgICAgICBzdGFydF9sb2dpbl9kYXRlOiBudWxsXG4gICAgfV0pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaEFjY291bnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vMTkyZS0xNjMtMTMtMjAxLTk1Lm5ncm9rLWZyZWUuYXBwL2xpc3RfYWNjb3VudHNcIik7XG4gICAgICAgICAgICAgICAgc2V0QWNjb3VudERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hBY2NvdW50RGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TVZSIC0gQWNjb3VudCBJbmZvcm1hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlZpZXcgYWNjb3VudCBpbmZvcm1hdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QWNjb3VudCBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAge2FjY291bnREYXRhLm1hcChhY2NvdW50ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FjY291bnQuaWR9IGNsYXNzTmFtZT1cImFjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57YWNjb3VudC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPklEOjwvc3Ryb25nPiB7YWNjb3VudC5pZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4ge2FjY291bnQuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4ge2FjY291bnQucGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7IC8qIEZpbGwgdGhlIGVudGlyZSB2aWV3cG9ydCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEE5MEUyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzRBOTBFMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYWNjb3VudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bzsgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICM0ZDg2YjM7IFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ZDg2YjM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBY2NvdW50SW5mbyIsImFjY291bnREYXRhIiwic2V0QWNjb3VudERhdGEiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwibG9naW5fY291bnQiLCJzdGFydF9sb2dpbl9kYXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hBY2NvdW50RGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsIm1hcCIsImFjY291bnQiLCJkaXYiLCJoMiIsInAiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userPage/accountinfo.tsx\n"));

/***/ })

});