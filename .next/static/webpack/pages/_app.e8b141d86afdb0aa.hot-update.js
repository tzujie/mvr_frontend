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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n// TopNavbar.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TopNavbar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const isUserLoggedIn = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"loggedIn\");\n    const [userEmail, setUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isLoginPopupVisible, setLoginPopupVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleCloseClick = ()=>{\n        setLoginPopupVisible(false);\n    };\n    const [activeForm, setActiveForm] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"login\"); // 'login' 或 'register'\n    const handlePopupClick = ()=>{\n        setLoginPopupVisible(!isLoginPopupVisible);\n    };\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"loggedIn\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"userEmail\");\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"jsx-f7302b7d56c55838\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-f7302b7d56c55838\" + \" \" + \"logo\",\n                children: \"MVR\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"jsx-f7302b7d56c55838\" + \" \" + \"navigation\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"jsx-f7302b7d56c55838\",\n                            children: \"首頁\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/features\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"jsx-f7302b7d56c55838\",\n                            children: \"功能介紹\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/introduceTeam\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"jsx-f7302b7d56c55838\",\n                            children: \"團隊成員\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/userPage/card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"jsx-f7302b7d56c55838\",\n                            children: \"儲值\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: isUserLoggedIn ? \"/userPage/dashboard\" : \"/userPage/lr\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"jsx-f7302b7d56c55838\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUserAlt, {\n                                    className: \"mx-1 mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                isUserLoggedIn ? \"我的帳戶\" : \"登入\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"f7302b7d56c55838\",\n                children: 'header.jsx-f7302b7d56c55838{position:fixed;top:0;left:0;width:100%;padding:20px 100px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1100;background-color:#000;.logo.jsx-f7302b7d56c55838{color:white}.navigation.jsx-f7302b7d56c55838 a.jsx-f7302b7d56c55838{margin-left:20px;color:white;text-decoration:none}.navigation.jsx-f7302b7d56c55838 .btnLogin-popup.jsx-f7302b7d56c55838{margin-left:20px;background-color:transparent;color:white;border:2px solid white;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:5px 15px}.navigation.jsx-f7302b7d56c55838 .btnLogin-popup.jsx-f7302b7d56c55838:hover{background-color:white;color:black}.navigation.jsx-f7302b7d56c55838 span.jsx-f7302b7d56c55838{position:relative;font-size:1.3em;color:#fff;text-decoration:none;font-weight:500;margin-left:40px;display:inline-block;cursor:pointer}.navigation.jsx-f7302b7d56c55838 span.jsx-f7302b7d56c55838::after{content:\"\";position:absolute;left:0;bottom:-6px;width:100%;height:3px;background:#fff;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-transform-origin:right;-moz-transform-origin:right;-ms-transform-origin:right;-o-transform-origin:right;transform-origin:right;-webkit-transform:scalex(0);-moz-transform:scalex(0);-ms-transform:scalex(0);-o-transform:scalex(0);transform:scalex(0);-webkit-transition:-webkit-transform.5s;-moz-transition:-moz-transform.5s;-o-transition:-o-transform.5s;transition:-webkit-transform.5s;transition:-moz-transform.5s;transition:-o-transform.5s;transition:transform.5s}.navigation.jsx-f7302b7d56c55838 span.jsx-f7302b7d56c55838:hover::after{-webkit-transform:scalex(1);-moz-transform:scalex(1);-ms-transform:scalex(1);-o-transform:scalex(1);transform:scalex(1)}}'\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/components/topnavbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(TopNavbar, \"eSzjhzfNfS/AvOXu/JmHXwbWY1c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = TopNavbar;\nvar _c;\n$RefreshReg$(_c, \"TopNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RvcG5hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7Ozs7QUFDYztBQUNjO0FBQ1g7QUFDUTtBQUNBO0FBRXpCLFNBQVNNLFlBQVk7O0lBQ2hDLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxpQkFBaUJOLHFEQUFXLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EscUJBQXFCQyxxQkFBcUIsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUNsRSxNQUFNVSxtQkFBbUIsSUFBTTtRQUMzQkQscUJBQXFCLEtBQUs7SUFDOUI7SUFDQSxNQUFNLENBQUNFLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUMsVUFBVSx1QkFBdUI7SUFHOUUsTUFBTWEsbUJBQW1CLElBQU07UUFDM0JKLHFCQUFxQixDQUFDRDtJQUMxQjtJQUNBLE1BQU1NLGVBQWUsSUFBTTtRQUN2QmhCLHdEQUFjLENBQUM7UUFDZkEsd0RBQWMsQ0FBQztRQUNmSyxPQUFPYSxJQUFJLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7OzswQkFDRyw4REFBQ0M7MERBQWE7MEJBQU87Ozs7OzswQkFFckIsOERBQUNDOzBEQUFjOztrQ0FDWCw4REFBQ3ZCLGtEQUFJQTt3QkFBQ3dCLE1BQUs7a0NBQ1AsNEVBQUNDOztzQ0FBSzs7Ozs7Ozs7Ozs7a0NBRVYsOERBQUN6QixrREFBSUE7d0JBQUN3QixNQUFLO2tDQUNQLDRFQUFDQzs7c0NBQUs7Ozs7Ozs7Ozs7O2tDQUVWLDhEQUFDekIsa0RBQUlBO3dCQUFDd0IsTUFBSztrQ0FDUCw0RUFBQ0M7O3NDQUFLOzs7Ozs7Ozs7OztrQ0FHViw4REFBQ3pCLGtEQUFJQTt3QkFBQ3dCLE1BQUs7a0NBQ1AsNEVBQUNDOztzQ0FBSzs7Ozs7Ozs7Ozs7a0NBRVYsOERBQUN6QixrREFBSUE7d0JBQUN3QixNQUFNaEIsaUJBQWlCLHdCQUF3QixjQUFjO2tDQUMvRCw0RUFBQ2lCOzs7OENBQ0csOERBQUN4QixxREFBU0E7b0NBQUN5QixXQUFVOzs7Ozs7Z0NBQ3BCbEIsaUJBQWlCLFNBQVMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdGdkQsQ0FBQztHQXpIdUJGOztRQUNMRCxrREFBU0E7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3RvcG5hdmJhci50c3g/ODAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUb3BOYXZiYXIuanNcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGYVVzZXJBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BOYXZiYXIoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSBDb29raWVzLmdldCgnbG9nZ2VkSW4nKTtcbiAgICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc0xvZ2luUG9wdXBWaXNpYmxlLCBzZXRMb2dpblBvcHVwVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7IFxuICAgIGNvbnN0IGhhbmRsZUNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldExvZ2luUG9wdXBWaXNpYmxlKGZhbHNlKTsgXG4gICAgfTtcbiAgICBjb25zdCBbYWN0aXZlRm9ybSwgc2V0QWN0aXZlRm9ybV0gPSB1c2VTdGF0ZSgnbG9naW4nKTsgLy8gJ2xvZ2luJyDmiJYgJ3JlZ2lzdGVyJ1xuICAgIFxuXG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0TG9naW5Qb3B1cFZpc2libGUoIWlzTG9naW5Qb3B1cFZpc2libGUpOyBcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgQ29va2llcy5yZW1vdmUoJ2xvZ2dlZEluJyk7IFxuICAgICAgICBDb29raWVzLnJlbW92ZSgndXNlckVtYWlsJyk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ29cIj5NVlI8L2gyPlxuXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7pppbpoIE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Yqf6IO95LuL57S5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ludHJvZHVjZVRlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5ZyY6ZqK5oiQ5ZOhPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclBhZ2UvY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lhLLlgLw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2lzVXNlckxvZ2dlZEluID8gXCIvdXNlclBhZ2UvZGFzaGJvYXJkXCIgOiBcIi91c2VyUGFnZS9sclwifT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFVc2VyQWx0IGNsYXNzTmFtZT1cIm14LTEgbWItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNVc2VyTG9nZ2VkSW4gPyBcIuaIkeeahOW4s+aItlwiIDogXCLnmbvlhaVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5Mb2dpbi1wb3B1cFwiIG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKi99XG5cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gYSB7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gLmJ0bkxvZ2luLXBvcHVwIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubmF2aWdhdGlvbiAuYnRuTG9naW4tcG9wdXA6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2aWdhdGlvbiBzcGFuOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHNwYW46aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICBcblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJGYVVzZXJBbHQiLCJDb29raWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlRvcE5hdmJhciIsInJvdXRlciIsImlzVXNlckxvZ2dlZEluIiwiZ2V0IiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwiaXNMb2dpblBvcHVwVmlzaWJsZSIsInNldExvZ2luUG9wdXBWaXNpYmxlIiwiaGFuZGxlQ2xvc2VDbGljayIsImFjdGl2ZUZvcm0iLCJzZXRBY3RpdmVGb3JtIiwiaGFuZGxlUG9wdXBDbGljayIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInB1c2giLCJoZWFkZXIiLCJoMiIsIm5hdiIsImhyZWYiLCJzcGFuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/topnavbar.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});