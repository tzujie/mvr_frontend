"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userPage/AccountLookup",{

/***/ "./pages/userPage/AccountLookup.tsx":
/*!******************************************!*\
  !*** ./pages/userPage/AccountLookup.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst App = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick = async ()=>{\n    // ... (原始代碼)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            fontFamily: \"Arial, sans-serif\",\n            textAlign: \"center\",\n            backgroundColor: \"#f4f4f4\",\n            height: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                style: {\n                    backgroundColor: \"#4CAF50\",\n                    color: \"#fff\",\n                    padding: \"10px 0\",\n                    fontSize: \"1.5em\"\n                },\n                children: \"Account Information\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        style: {\n                            padding: \"10px 15px\",\n                            fontSize: \"1em\",\n                            backgroundColor: \"#333\",\n                            color: \"#fff\",\n                            border: \"none\",\n                            borderRadius: \"5px\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Fetch Data\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"20px\",\n                            border: \"1px solid #ccc\",\n                            padding: \"15px\",\n                            borderRadius: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"ID:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 28\n                                    }, undefined),\n                                    \" \",\n                                    data.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Name:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 28\n                                    }, undefined),\n                                    \" \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 28\n                                    }, undefined),\n                                    \" \",\n                                    data.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/AccountLookup.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(App, \"r4Mei8r/vISzc+89378cYwOGDkw=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS9BY2NvdW50TG9va3VwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBU3hDLE1BQU1FLE1BQWdCLElBQU07O0lBQ3hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBcUIsSUFBSTtJQUV6RCxNQUFNSSxjQUFjLFVBQVk7SUFDNUIsYUFBYTtJQUNqQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFlBQVk7WUFBcUJDLFdBQVc7WUFBVUMsaUJBQWlCO1lBQVdDLFFBQVE7UUFBUTs7MEJBQzVHLDhEQUFDQztnQkFBT0wsT0FBTztvQkFBRUcsaUJBQWlCO29CQUFXRyxPQUFPO29CQUFRQyxTQUFTO29CQUFVQyxVQUFVO2dCQUFROzBCQUFHOzs7Ozs7MEJBR3BHLDhEQUFDVDtnQkFBSUMsT0FBTztvQkFBRU8sU0FBUztnQkFBTzs7a0NBQzFCLDhEQUFDRTt3QkFDR0MsU0FBU1o7d0JBQ1RFLE9BQU87NEJBQ0hPLFNBQVM7NEJBQ1RDLFVBQVU7NEJBQ1ZMLGlCQUFpQjs0QkFDakJHLE9BQU87NEJBQ1BLLFFBQVE7NEJBQ1JDLGNBQWM7NEJBQ2RDLFFBQVE7d0JBQ1o7a0NBQUc7Ozs7OztvQkFHTmpCLHNCQUNHLDhEQUFDRzt3QkFBSUMsT0FBTzs0QkFBRWMsV0FBVzs0QkFBUUgsUUFBUTs0QkFBa0JKLFNBQVM7NEJBQVFLLGNBQWM7d0JBQU07OzBDQUM1Riw4REFBQ0c7O2tEQUFFLDhEQUFDQztrREFBTzs7Ozs7O29DQUFZO29DQUFFcEIsS0FBS3FCLEVBQUU7Ozs7Ozs7MENBQ2hDLDhEQUFDRjs7a0RBQUUsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQWM7b0NBQUVwQixLQUFLc0IsSUFBSTs7Ozs7OzswQ0FDcEMsOERBQUNIOztrREFBRSw4REFBQ0M7a0RBQU87Ozs7OztvQ0FBZTtvQ0FBRXBCLEtBQUt1QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlEO0dBckNNeEI7S0FBQUE7QUF1Q04sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlclBhZ2UvQWNjb3VudExvb2t1cC50c3g/NTgyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgQWNjb3VudERhdGEgPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICAvLyAuLi4gb3RoZXIgZmllbGRzXG59O1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEFjY291bnREYXRhIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gLi4uICjljp/lp4vku6PnorwpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnQXJpYWwsIHNhbnMtc2VyaWYnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JywgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgICAgPGhlYWRlciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNENBRjUwJywgY29sb3I6ICcjZmZmJywgcGFkZGluZzogJzEwcHggMCcsIGZvbnRTaXplOiAnMS41ZW0nIH19PlxuICAgICAgICAgICAgICAgIEFjY291bnQgSW5mb3JtYXRpb25cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIEZldGNoIERhdGFcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJywgcGFkZGluZzogJzE1cHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5JRDo8L3N0cm9uZz4ge2RhdGEuaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5OYW1lOjwvc3Ryb25nPiB7ZGF0YS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IHtkYXRhLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEaXNwbGF5IG90aGVyIGRhdGEgYXMgcGVyIHJlcXVpcmVtZW50Li4uICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVDbGljayIsImRpdiIsInN0eWxlIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImhlYWRlciIsImNvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwiYnV0dG9uIiwib25DbGljayIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIm1hcmdpblRvcCIsInAiLCJzdHJvbmciLCJpZCIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userPage/AccountLookup.tsx\n"));

/***/ })

});