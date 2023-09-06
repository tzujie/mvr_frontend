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
exports.id = "pages/userPage/accountinfo";
exports.ids = ["pages/userPage/accountinfo"];
exports.modules = {

/***/ "./pages/userPage/accountinfo.tsx":
/*!****************************************!*\
  !*** ./pages/userPage/accountinfo.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccountInfo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_5__]);\n([axios__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction AccountInfo() {\n    const [accountData, setAccountData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: 13,\n            name: \"John Doe\",\n            email: \"johndoe@example.com\",\n            phone: \"1234567890\",\n            login_count: 8,\n            start_login_date: null\n        }\n    ]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchAccountData = async ()=>{\n            const userId = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"userId\");\n            if (!userId) {\n                setError(\"User not logged in\");\n                return;\n            }\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(`https://192e-163-13-201-95.ngrok-free.app/api/list_accounts/${userId}/`);\n                setAccountData([\n                    response.data\n                ]);\n            } catch (err) {\n                if (err instanceof Error) {\n                    setError(err.message);\n                }\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchAccountData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"MVR - Account Information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"View account information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Language\",\n                        content: \"en\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-3dfaadd73104c16b\" + \" \" + \"main-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-3dfaadd73104c16b\" + \" \" + \"title\",\n                        children: \"Account Information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    accountData.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-3dfaadd73104c16b\" + \" \" + \"account\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"jsx-3dfaadd73104c16b\",\n                                    children: account.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3dfaadd73104c16b\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"jsx-3dfaadd73104c16b\",\n                                            children: \"ID:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 28\n                                        }, this),\n                                        \" \",\n                                        account.id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3dfaadd73104c16b\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"jsx-3dfaadd73104c16b\",\n                                            children: \"Email:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 28\n                                        }, this),\n                                        \" \",\n                                        account.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3dfaadd73104c16b\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            className: \"jsx-3dfaadd73104c16b\",\n                                            children: \"Phone:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 28\n                                        }, this),\n                                        \" \",\n                                        account.phone\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, account.id, true, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this)),\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"3dfaadd73104c16b\",\n                        children: \".main-content.jsx-3dfaadd73104c16b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.2rem;height:100vh;font-size:1.5rem}.title.jsx-3dfaadd73104c16b{text-align:center;color:#4d86b3;margin-top:2rem;font-size:3rem;border-bottom:3px solid#4d86b3;padding-bottom:1.5rem}.account.jsx-3dfaadd73104c16b{background-color:#f5f5f5;padding:30px;margin:30px auto;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;width:70%;max-width:650px;-webkit-box-shadow:0px 4px 20px rgba(0,0,0,.1);-moz-box-shadow:0px 4px 20px rgba(0,0,0,.1);box-shadow:0px 4px 20px rgba(0,0,0,.1);border-left:8px solid#4d86b3}h2.jsx-3dfaadd73104c16b{color:#333;font-size:2rem;margin-bottom:1.5rem}p.jsx-3dfaadd73104c16b{color:#666;margin-bottom:1rem}strong.jsx-3dfaadd73104c16b{color:#4d86b3}\"\n                    }, void 0, false, void 0, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/accountinfo.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS9hY2NvdW50aW5mby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBQ2xCO0FBQ007QUFFakIsU0FBU0ssY0FBYztJQVVsQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQVk7UUFBQztZQUN2RE0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLGtCQUFrQixJQUFJO1FBQzFCO0tBQUU7SUFDRixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQWdCLElBQUk7SUFFdERELGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNaUIsbUJBQW1CLFVBQVk7WUFDakMsTUFBTUMsU0FBU2YscURBQVcsQ0FBQztZQUMzQixJQUFJLENBQUNlLFFBQVE7Z0JBQ1RGLFNBQVM7Z0JBQ1Q7WUFDSixDQUFDO1lBRUQsSUFBSTtnQkFDQSxNQUFNSSxXQUFXLE1BQU1sQixpREFBUyxDQUFDLENBQUMsNERBQTRELEVBQUVnQixPQUFPLENBQUMsQ0FBQztnQkFDekdaLGVBQWU7b0JBQUNjLFNBQVNDLElBQUk7aUJBQUM7WUFDbEMsRUFBRSxPQUFPQyxLQUFLO2dCQUNWLElBQUlBLGVBQWVDLE9BQU87b0JBQ3RCUCxTQUFTTSxJQUFJRSxPQUFPO2dCQUN4QixDQUFDO1lBQ0wsU0FBVTtnQkFDTlYsV0FBVyxLQUFLO1lBQ3BCO1FBQ0o7UUFFQUc7SUFDSixHQUFHLEVBQUU7SUFHTCxxQkFDSTs7MEJBQ0ksOERBQUNsQixrREFBSUE7O2tDQUNELDhEQUFDMEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtsQixNQUFLO3dCQUFjbUIsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FDdEIsOERBQUNKO3dCQUFLSyxXQUFVO3dCQUFtQkosU0FBUTs7Ozs7Ozs7Ozs7OzBCQUUvQyw4REFBQ0s7MERBQWU7O2tDQUNaLDhEQUFDQztrRUFBYTtrQ0FBUTs7Ozs7O29CQUNyQjVCLFlBQVk2QixHQUFHLENBQUNDLENBQUFBLHdCQUNiLDhEQUFDQztzRUFBK0I7OzhDQUM1Qiw4REFBQ0M7OzhDQUFJRixRQUFRM0IsSUFBSTs7Ozs7OzhDQUNqQiw4REFBQzhCOzs7c0RBQUUsOERBQUNDOztzREFBTzs7Ozs7O3dDQUFZO3dDQUFFSixRQUFRNUIsRUFBRTs7Ozs7Ozs4Q0FFbkMsOERBQUMrQjs7O3NEQUFFLDhEQUFDQzs7c0RBQU87Ozs7Ozt3Q0FBZTt3Q0FBRUosUUFBUTFCLEtBQUs7Ozs7Ozs7OENBQ3pDLDhEQUFDNkI7OztzREFBRSw4REFBQ0M7O3NEQUFPOzs7Ozs7d0NBQWU7d0NBQUVKLFFBQVF6QixLQUFLOzs7Ozs7OzsyQkFMbkN5QixRQUFRNUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RHhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdnJfd2Vic2l0ZS8uL3BhZ2VzL3VzZXJQYWdlL2FjY291bnRpbmZvLnRzeD8wY2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRJbmZvKCkge1xuICAgIGludGVyZmFjZSBBY2NvdW50IHtcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgICBwaG9uZTogc3RyaW5nO1xuICAgICAgICBsb2dpbl9jb3VudDogbnVtYmVyO1xuICAgICAgICBzdGFydF9sb2dpbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IFthY2NvdW50RGF0YSwgc2V0QWNjb3VudERhdGFdID0gdXNlU3RhdGU8QWNjb3VudFtdPihbe1xuICAgICAgICBpZDogMTMsXG4gICAgICAgIG5hbWU6IFwiSm9obiBEb2VcIixcbiAgICAgICAgZW1haWw6IFwiam9obmRvZUBleGFtcGxlLmNvbVwiLFxuICAgICAgICBwaG9uZTogXCIxMjM0NTY3ODkwXCIsXG4gICAgICAgIGxvZ2luX2NvdW50OiA4LFxuICAgICAgICBzdGFydF9sb2dpbl9kYXRlOiBudWxsXG4gICAgfV0pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaEFjY291bnREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gQ29va2llcy5nZXQoJ3VzZXJJZCcpOyAgXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKFwiVXNlciBub3QgbG9nZ2VkIGluXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly8xOTJlLTE2My0xMy0yMDEtOTUubmdyb2stZnJlZS5hcHAvYXBpL2xpc3RfYWNjb3VudHMvJHt1c2VySWR9L2ApO1xuICAgICAgICAgICAgICAgIHNldEFjY291bnREYXRhKFtyZXNwb25zZS5kYXRhXSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hBY2NvdW50RGF0YSgpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NVlIgLSBBY2NvdW50IEluZm9ybWF0aW9uPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVmlldyBhY2NvdW50IGluZm9ybWF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1MYW5ndWFnZVwiIGNvbnRlbnQ9XCJlblwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgICAgICAgICB7YWNjb3VudERhdGEubWFwKGFjY291bnQgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YWNjb3VudC5pZH0gY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnthY2NvdW50Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+SUQ6PC9zdHJvbmc+IHthY2NvdW50LmlkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiB7YWNjb3VudC5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlBob25lOjwvc3Ryb25nPiB7YWNjb3VudC5waG9uZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDsgLyogRmlsbCB0aGUgZW50aXJlIHZpZXdwb3J0IGhlaWdodCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzRkODZiMztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07IFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0ZDg2YjM7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjY291bnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87IFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjNGQ4NmIzOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07IFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGQ4NmIzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ29va2llcyIsIkFjY291bnRJbmZvIiwiYWNjb3VudERhdGEiLCJzZXRBY2NvdW50RGF0YSIsImlkIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJsb2dpbl9jb3VudCIsInN0YXJ0X2xvZ2luX2RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEFjY291bnREYXRhIiwidXNlcklkIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaHR0cEVxdWl2IiwibWFpbiIsImgxIiwibWFwIiwiYWNjb3VudCIsImRpdiIsImgyIiwicCIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userPage/accountinfo.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/userPage/accountinfo.tsx"));
module.exports = __webpack_exports__;

})();