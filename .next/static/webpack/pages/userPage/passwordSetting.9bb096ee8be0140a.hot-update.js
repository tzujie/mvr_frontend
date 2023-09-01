"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userPage/passwordSetting",{

/***/ "./pages/userPage/passwordSetting.tsx":
/*!********************************************!*\
  !*** ./pages/userPage/passwordSetting.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PasswordSetting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PasswordSetting() {\n    _s();\n    const [oldPassword, setOldPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleChangePassword = async ()=>{\n        if (newPassword !== confirmPassword) {\n            setMessage(\"New password and confirmation do not match.\");\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://192e-163-13-201-95.ngrok-free.app/api/changePassword\", {\n                oldPassword,\n                newPassword\n            });\n            setMessage(response.data.message);\n        } catch (error) {\n            setMessage(\"Password change failed.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-31d1d14d1d5a3f01\",\n                        children: \"MVR - Password Change\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        className: \"jsx-31d1d14d1d5a3f01\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\",\n                        className: \"jsx-31d1d14d1d5a3f01\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-31d1d14d1d5a3f01\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"blur formBox\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"title\",\n                            children: \"Change Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"inputBox\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    required: true,\n                                    value: oldPassword,\n                                    onChange: (e)=>setOldPassword(e.target.value),\n                                    className: \"jsx-31d1d14d1d5a3f01\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"jsx-31d1d14d1d5a3f01\",\n                                    children: \"Old Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"inputBox\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    required: true,\n                                    value: newPassword,\n                                    onChange: (e)=>setNewPassword(e.target.value),\n                                    className: \"jsx-31d1d14d1d5a3f01\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"jsx-31d1d14d1d5a3f01\",\n                                    children: \"New Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"inputBox\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    required: true,\n                                    value: confirmPassword,\n                                    onChange: (e)=>setConfirmPassword(e.target.value),\n                                    className: \"jsx-31d1d14d1d5a3f01\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"jsx-31d1d14d1d5a3f01\",\n                                    children: \"Confirm New Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleChangePassword,\n                            className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"submitBtn\",\n                            children: \"Change Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-31d1d14d1d5a3f01\" + \" \" + \"centerParagraph\",\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/userPage/passwordSetting.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"31d1d14d1d5a3f01\",\n                children: \".container.jsx-31d1d14d1d5a3f01{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;background-color:#e6e6e6}.blur.jsx-31d1d14d1d5a3f01{background-color:rgba(255,255,255,.9);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.5);-webkit-box-shadow:0 4px 16px rgba(0,0,0,.1);-moz-box-shadow:0 4px 16px rgba(0,0,0,.1);box-shadow:0 4px 16px rgba(0,0,0,.1);padding:40px}.title.jsx-31d1d14d1d5a3f01{text-align:center;color:#162938;font-weight:bold;margin-bottom:20px}.submitBtn.jsx-31d1d14d1d5a3f01{width:100%;padding:15px;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#4d86b3;color:#fff;cursor:pointer;font-weight:bold;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease;margin-top:20px}.submitBtn.jsx-31d1d14d1d5a3f01:hover{background-color:#3a6c97}.centerParagraph.jsx-31d1d14d1d5a3f01{text-align:center;margin-top:20px;color:red}.inputBox.jsx-31d1d14d1d5a3f01{position:relative;width:100%;margin:15px 0}.inputBox.jsx-31d1d14d1d5a3f01 input.jsx-31d1d14d1d5a3f01{width:100%;height:40px;background-color:transparent;border:none;border-bottom:2px solid#162938;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:10px 0;margin-top:20px;font-size:1em;color:#162938;-webkit-transition:border-color.3s ease;-moz-transition:border-color.3s ease;-o-transition:border-color.3s ease;transition:border-color.3s ease}.inputBox.jsx-31d1d14d1d5a3f01 input.jsx-31d1d14d1d5a3f01:focus{border-color:#4d86b3;outline:none}.inputBox.jsx-31d1d14d1d5a3f01 label.jsx-31d1d14d1d5a3f01{position:absolute;top:20px;left:0px;font-size:1em;color:#162938;font-weight:500;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.inputBox.jsx-31d1d14d1d5a3f01 input.jsx-31d1d14d1d5a3f01:focus+label.jsx-31d1d14d1d5a3f01,.inputBox.jsx-31d1d14d1d5a3f01 input.jsx-31d1d14d1d5a3f01:not(:-ms-input-placeholder)+label.jsx-31d1d14d1d5a3f01{top:-25px;font-size:.75em}.inputBox.jsx-31d1d14d1d5a3f01 input.jsx-31d1d14d1d5a3f01:focus+label.jsx-31d1d14d1d5a3f01,.inputBox.jsx-31d1d14d1d5a3f01 input.jsx-31d1d14d1d5a3f01:not(:placeholder-shown)+label.jsx-31d1d14d1d5a3f01{top:-25px;font-size:.75em}.formBox.jsx-31d1d14d1d5a3f01{padding:20px 40px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;width:400px;color:black;background:transparent;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.5em}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(PasswordSetting, \"eEEPv0tH0kXZJW6lTq/zJ0zFzpI=\");\n_c = PasswordSetting;\nvar _c;\n$RefreshReg$(_c, \"PasswordSetting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUGFnZS9wYXNzd29yZFNldHRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNQO0FBRVgsU0FBU0csa0JBQWtCOztJQUN0QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ08saUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1XLHVCQUF1QixVQUFZO1FBQ3JDLElBQUlOLGdCQUFnQkUsaUJBQWlCO1lBQ2pDRyxXQUFXO1lBQ1g7UUFDSixDQUFDO1FBRUQsSUFBSTtZQUNBLE1BQU1FLFdBQVcsTUFBTVgsa0RBQVUsQ0FBQyxnRUFBZ0U7Z0JBQzlGRTtnQkFDQUU7WUFDSjtZQUNBSyxXQUFXRSxTQUFTRSxJQUFJLENBQUNMLE9BQU87UUFDcEMsRUFBRSxPQUFPTSxPQUFPO1lBQ1pMLFdBQVc7UUFDZjtJQUNKO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDWCxrREFBSUE7O2tDQUNELDhEQUFDaUI7O2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNDOzBEQUFlOzBCQUNaLDRFQUFDQzs4REFBYzs7c0NBQ1gsOERBQUNDO3NFQUFhO3NDQUFROzs7Ozs7c0NBQ3RCLDhEQUFDRDtzRUFBYzs7OENBQ1gsOERBQUNFO29DQUNHQyxNQUFLO29DQUNMQyxRQUFRO29DQUNSQyxPQUFPMUI7b0NBQ1AyQixVQUFVLENBQUNDLElBQU0zQixlQUFlMkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OzhDQUVsRCw4REFBQ0k7OzhDQUFNOzs7Ozs7Ozs7Ozs7c0NBRVgsOERBQUNUO3NFQUFjOzs4Q0FDWCw4REFBQ0U7b0NBQ0dDLE1BQUs7b0NBQ0xDLFFBQVE7b0NBQ1JDLE9BQU94QjtvQ0FDUHlCLFVBQVUsQ0FBQ0MsSUFBTXpCLGVBQWV5QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7OENBRWxELDhEQUFDSTs7OENBQU07Ozs7Ozs7Ozs7OztzQ0FFWCw4REFBQ1Q7c0VBQWM7OzhDQUNYLDhEQUFDRTtvQ0FDR0MsTUFBSztvQ0FDTEMsUUFBUTtvQ0FDUkMsT0FBT3RCO29DQUNQdUIsVUFBVSxDQUFDQyxJQUFNdkIsbUJBQW1CdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OzhDQUV0RCw4REFBQ0k7OzhDQUFNOzs7Ozs7Ozs7Ozs7c0NBRVgsOERBQUNDOzRCQUE2QkMsU0FBU3hCO3NFQUFyQjtzQ0FBMkM7Ozs7Ozt3QkFHNURGLHlCQUFXLDhEQUFDMkI7c0VBQVk7c0NBQW1CM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUdoRSxDQUFDO0dBekt1QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlclBhZ2UvcGFzc3dvcmRTZXR0aW5nLnRzeD81ZmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3N3b3JkU2V0dGluZygpIHtcbiAgICBjb25zdCBbb2xkUGFzc3dvcmQsIHNldE9sZFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiTmV3IHBhc3N3b3JkIGFuZCBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovLzE5MmUtMTYzLTEzLTIwMS05NS5uZ3Jvay1mcmVlLmFwcC9hcGkvY2hhbmdlUGFzc3dvcmRcIiwge1xuICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiUGFzc3dvcmQgY2hhbmdlIGZhaWxlZC5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NVlIgLSBQYXNzd29yZCBDaGFuZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ciBmb3JtQm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNoYW5nZSBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2xkUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPbGRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Qm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ0blwiIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZVBhc3N3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwiY2VudGVyUGFyYWdyYXBoXCI+e21lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibHVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNjI5Mzg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3VibWl0QnRuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ4NmIzO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN1Ym1pdEJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTZjOTc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNlbnRlclBhcmFncmFwaCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5wdXRCb3gge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmlucHV0Qm94IGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTYyOTM4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNjI5Mzg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5pbnB1dEJveCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzRkODZiMztcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5wdXRCb3ggbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxNjI5Mzg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5wdXRCb3ggaW5wdXQ6Zm9jdXMgKyBsYWJlbCxcbiAgICAgICAgICAgICAgICAuaW5wdXRCb3ggaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5mb3JtQm94IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFzc3dvcmRTZXR0aW5nIiwib2xkUGFzc3dvcmQiLCJzZXRPbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0IiwiZGF0YSIsImVycm9yIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJoMiIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsYWJlbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/userPage/passwordSetting.tsx\n"));

/***/ })

});