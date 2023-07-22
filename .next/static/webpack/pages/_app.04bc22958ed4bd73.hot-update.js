"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/components/topnavbar.tsx":
/*!****************************************!*\
  !*** ./pages/components/topnavbar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TopNavbar() {\n    _s();\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 當元件掛載時，從 Cookies 中取得使用者的 email\n        const userEmail = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"userEmail\");\n        setUserEmail(userEmail || \"\");\n    }, []);\n    const router = useRouter();\n    const handleLogout = ()=>{\n        // 清除 cookies 中的使用者資料\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"userEmail\");\n        // 清除 userEmail 狀態\n        setUserEmail(\"\");\n        // 跳回首頁\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"bg-secondary\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Brand, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white\",\n                        children: \"MVR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Text, {\n                    className: \"px-4 text-white fw-bolder\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Music in your mind, Space on your definition\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle, {}, void 0, false, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Collapse, {\n                    className: \"justify-content-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                legacyBehavior: true,\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"fs-5 fw-bolder text-white\",\n                                        children: \"首頁\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/features\",\n                                legacyBehavior: true,\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"fs-5 fw-bolder text-white\",\n                                        children: \"功能介紹\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/introduceTeam\",\n                                legacyBehavior: true,\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"fs-5 fw-bolder text-white\",\n                                        children: \"團隊成員\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/userPage/login\",\n                                legacyBehavior: true,\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUserAlt, {\n                                            className: \"mx-1 mb-2 text-white\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"fs-5 fw-bolder text-white\",\n                                            children: userEmail ? userEmail : \"設定\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(TopNavbar, \"A6sDR712W7HC7F1Z2id3K8EXQrc=\", true);\n_c = TopNavbar;\nvar _c;\n$RefreshReg$(_c, \"TopNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RvcG5hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRDtBQUNaO0FBQ007QUFDZjtBQUNjO0FBQ1g7QUFFakIsU0FBU1MsWUFBWTs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osaUNBQWlDO1FBQ2pDLE1BQU1RLFlBQVlGLHFEQUFXLENBQUM7UUFDOUJHLGFBQWFELGFBQWE7SUFDOUIsR0FBRyxFQUFFO0lBQ0wsTUFBTUcsU0FBU0M7SUFDZixNQUFNQyxlQUFlLElBQU07UUFDdkIscUJBQXFCO1FBQ3JCUCx3REFBYyxDQUFDO1FBQ2Ysa0JBQWtCO1FBQ2xCRyxhQUFhO1FBQ2IsT0FBTztRQUNQRSxPQUFPSSxJQUFJLENBQUM7SUFDaEI7SUFHQSxxQkFDSSw4REFBQ1osOERBQU1BO1FBQUNhLFdBQVU7a0JBQ2QsNEVBQUNmLGlFQUFTQTs7OEJBQ04sOERBQUNFLG9FQUFZOzhCQUNULDRFQUFDZTt3QkFBR0YsV0FBVTtrQ0FBYTs7Ozs7Ozs7Ozs7OEJBRS9CLDhEQUFDYixtRUFBVztvQkFBQ2EsV0FBVTs4QkFDbkIsNEVBQUNJO2tDQUFHOzs7Ozs7Ozs7Ozs4QkFFUiw4REFBQ2pCLHFFQUFhOzs7Ozs4QkFDZCw4REFBQ0EsdUVBQWU7b0JBQUNhLFdBQVU7OEJBQ3ZCLDRFQUFDZCwyREFBR0E7OzBDQUNBLDhEQUFDRSxrREFBSUE7Z0NBQUNtQixNQUFLO2dDQUFJQyxjQUFjO2dDQUFDQyxRQUFROzBDQUNsQyw0RUFBQ3ZCLGdFQUFROzhDQUNMLDRFQUFDd0I7d0NBQUtWLFdBQVU7a0RBQTRCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ1osa0RBQUlBO2dDQUFDbUIsTUFBSztnQ0FBWUMsY0FBYztnQ0FBQ0MsUUFBUTswQ0FDMUMsNEVBQUN2QixnRUFBUTs4Q0FDTCw0RUFBQ3dCO3dDQUFLVixXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHcEQsOERBQUNaLGtEQUFJQTtnQ0FBQ21CLE1BQUs7Z0NBQWlCQyxjQUFjO2dDQUFDQyxRQUFROzBDQUMvQyw0RUFBQ3ZCLGdFQUFROzhDQUNMLDRFQUFDd0I7d0NBQUtWLFdBQVU7a0RBQTRCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwRCw4REFBQ1osa0RBQUlBO2dDQUFDbUIsTUFBSztnQ0FBa0JDLGNBQWM7Z0NBQUNDLFFBQVE7MENBQ2hELDRFQUFDdkIsZ0VBQVE7O3NEQUNMLDhEQUFDRyxxREFBU0E7NENBQUNXLFdBQVU7Ozs7OztzREFDckIsOERBQUNVOzRDQUFLVixXQUFVO3NEQUE2QlIsWUFBWUEsWUFBWSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekcsQ0FBQztHQTNEdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvdG9wbmF2YmFyLnRzeD84MDEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZhVXNlckFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcE5hdmJhcigpIHtcbiAgICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8g55W25YWD5Lu25o6b6LyJ5pmC77yM5b6eIENvb2tpZXMg5Lit5Y+W5b6X5L2/55So6ICF55qEIGVtYWlsXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IENvb2tpZXMuZ2V0KCd1c2VyRW1haWwnKTtcbiAgICAgICAgc2V0VXNlckVtYWlsKHVzZXJFbWFpbCB8fCAnJyk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgLy8g5riF6ZmkIGNvb2tpZXMg5Lit55qE5L2/55So6ICF6LOH5paZXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd1c2VyRW1haWwnKTtcbiAgICAgICAgLy8g5riF6ZmkIHVzZXJFbWFpbCDni4DmhYtcbiAgICAgICAgc2V0VXNlckVtYWlsKCcnKTtcbiAgICAgICAgLy8g6Lez5Zue6aaW6aCBXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5NVlI8L2gxPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVGV4dCBjbGFzc05hbWU9XCJweC00IHRleHQtd2hpdGUgZnctYm9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5NdXNpYyBpbiB5b3VyIG1pbmQsIFNwYWNlIG9uIHlvdXIgZGVmaW5pdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuVGV4dD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSAvPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZzLTUgZnctYm9sZGVyIHRleHQtd2hpdGVcIj7pppbpoIE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmVhdHVyZXNcIiBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZzLTUgZnctYm9sZGVyIHRleHQtd2hpdGVcIj7lip/og73ku4vntLk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW50cm9kdWNlVGVhbVwiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnMtNSBmdy1ib2xkZXIgdGV4dC13aGl0ZVwiPuWcmOmaiuaIkOWToTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyUGFnZS9sb2dpblwiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVXNlckFsdCBjbGFzc05hbWU9XCJteC0xIG1iLTIgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZzLTUgZnctYm9sZGVyIHRleHQtd2hpdGVcIj57dXNlckVtYWlsID8gdXNlckVtYWlsIDogJ+ioreWumid9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICk7XG5cbiAgICBcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwiTGluayIsIkZhVXNlckFsdCIsIkNvb2tpZXMiLCJUb3BOYXZiYXIiLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJnZXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmUiLCJwdXNoIiwiY2xhc3NOYW1lIiwiQnJhbmQiLCJoMSIsIlRleHQiLCJoNCIsIlRvZ2dsZSIsIkNvbGxhcHNlIiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwicGFzc0hyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/topnavbar.tsx\n"));

/***/ })

});