"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/introduceTeam",{

/***/ "./pages/introduceTeam.tsx":
/*!*********************************!*\
  !*** ./pages/introduceTeam.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IntroduceTeam; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Member(param) {\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-25\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/avatar/\".concat(data.filename, \".webp\"),\n                    alt: data.filename,\n                    width: \"600\",\n                    height: \"600\",\n                    className: \"rounded\"\n                }, void 0, false, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-1 text-dark w-75\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-primary fw-bolder\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: data.work_title\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"lh-base\",\n                        children: [\n                            \"工作內容：\",\n                            data.work_content\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Member;\nfunction IntroduceTeam() {\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dotsClass: \"slick-dots slick-thumb\"\n    };\n    const teamData = [\n        {\n            filename: \"30448\",\n            name: \"孫耀庭\",\n            work_title: \"規劃流程與管理\",\n            work_content: \"負責制定開發目標、短期長期目標與明確的日程規劃，後續進行追蹤與微調\"\n        },\n        {\n            filename: \"30414\",\n            name: \"劉宣珉\",\n            work_title: \"挑選物件模型、背景與製作\",\n            work_content: \"負責尋找可使用的物件資源，進行修改與調整，製作成需要的樣貌\"\n        },\n        {\n            filename: \"30141\",\n            name: \"張宇辰\",\n            work_title: \"調整與修改Unity中的物件\",\n            work_content: \"負責處理遊戲引擎Unity中的物件與場景的互動模式，包括移動、拿取放下、與選單互動等\"\n        },\n        {\n            filename: \"30927\",\n            name: \"李佳翰\",\n            work_title: \"製作網站及調整與修改Unity中的物件\",\n            work_content: \"負責製作網站與更新、維護，並幫忙處理遊戲引擎Unity的相關工作\"\n        },\n        {\n            filename: \"31396\",\n            name: \"施品伃\",\n            work_title: \"美術場景製作與文書相關事宜\",\n            work_content: \"負責製作美術場景與物件模型，並處理報告、競賽等文書作業\"\n        },\n        {\n            filename: \"31453\",\n            name: \"甯子倢\",\n            work_title: \"美術場景製作與AI客服\",\n            work_content: \"負責製作美術場景與物件模型，並製作、訓練AI客服機器人的模型\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"MVR-團隊成員\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Language\",\n                        content: \"en\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4 p-2 rounded\",\n                    style: {\n                        minHeight: \"90vh\",\n                        color: \"black\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"fw-bold text-dark text-center mt-2\",\n                            children: \"團隊成員\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        teamData.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex gap-3 mx-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Member, {\n                                    data: data\n                                }, void 0, false, {\n                                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, this)\n                            }, i, false, {\n                                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/introduceTeam.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = IntroduceTeam;\nvar _c, _c1;\n$RefreshReg$(_c, \"Member\");\n$RefreshReg$(_c1, \"IntroduceTeam\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRyb2R1Y2VUZWFtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVTtBQUtFO0FBQ007QUFTOUMsU0FBU0UsT0FBTyxLQUEyQixFQUMzQztRQURnQixFQUFDQyxLQUFJLEVBQXNCLEdBQTNCO0lBRVoscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0osMERBQUtBO29CQUFDSyxLQUFLLFdBQXlCLE9BQWRILEtBQUtJLFFBQVEsRUFBQztvQkFBUUMsS0FBS0wsS0FBS0ksUUFBUTtvQkFBRUUsT0FBTTtvQkFBTUMsUUFBTztvQkFBTUwsV0FBVTs7Ozs7Ozs7Ozs7MEJBRXhHLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNNO3dCQUFHTixXQUFVO2tDQUEwQkYsS0FBS1MsSUFBSTs7Ozs7O2tDQUNqRCw4REFBQ0M7a0NBQUlWLEtBQUtXLFVBQVU7Ozs7OztrQ0FDcEIsOERBQUNEO3dCQUFHUixXQUFVOzs0QkFBVTs0QkFBTUYsS0FBS1ksWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FBSS9EO0tBZFNiO0FBZ0JNLFNBQVNjLGdCQUN4QjtJQUNJLE1BQU1DLFdBQVc7UUFDYkMsTUFBTSxJQUFJO1FBQ1ZDLFVBQVUsSUFBSTtRQUNkQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxXQUFXO0lBQ2Y7SUFFQSxNQUFNQyxXQUEyQjtRQUM3QjtZQUFDakIsVUFBUztZQUFTSyxNQUFLO1lBQU9FLFlBQVc7WUFBV0MsY0FBYTtRQUFtQztRQUNyRztZQUFDUixVQUFTO1lBQVNLLE1BQUs7WUFBT0UsWUFBVztZQUFnQkMsY0FBYTtRQUErQjtRQUN0RztZQUFDUixVQUFTO1lBQVNLLE1BQUs7WUFBT0UsWUFBVztZQUFrQkMsY0FBYTtRQUE0QztRQUNySDtZQUFDUixVQUFTO1lBQVNLLE1BQUs7WUFBT0UsWUFBVztZQUF1QkMsY0FBYTtRQUFrQztRQUNoSDtZQUFDUixVQUFTO1lBQVNLLE1BQUs7WUFBT0UsWUFBVztZQUFpQkMsY0FBYTtRQUE2QjtRQUNyRztZQUFDUixVQUFTO1lBQVNLLE1BQUs7WUFBT0UsWUFBVztZQUFlQyxjQUFhO1FBQWdDO0tBQ3pHO0lBQ0QscUJBQ0k7OzBCQUNJLDhEQUFDZixrREFBSUE7O2tDQUNELDhEQUFDeUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtkLE1BQUs7d0JBQWNlLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNEO3dCQUFLZCxNQUFLO3dCQUFXZSxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7O2tDQUN0Qiw4REFBQ0o7d0JBQUtLLFdBQVU7d0JBQW1CSixTQUFROzs7Ozs7Ozs7Ozs7MEJBRS9DLDhEQUFDSztnQkFBSzNCLFdBQVU7MEJBQ1osNEVBQUNEO29CQUFJQyxXQUFVO29CQUFrQjRCLE9BQU87d0JBQUVDLFdBQVc7d0JBQVFDLE9BQU87b0JBQVE7O3NDQUN4RSw4REFBQ0M7NEJBQUcvQixXQUFVO3NDQUFxQzs7Ozs7O3dCQUNsRG1CLFNBQVNhLEdBQUcsQ0FBQyxDQUFDbEMsTUFBTW1DLGtCQUNqQiw4REFBQ2xDO2dDQUFZQyxXQUFVOzBDQUNuQiw0RUFBQ0g7b0NBQU9DLE1BQU1BOzs7Ozs7K0JBRFJtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxDLENBQUM7TUF4Q3VCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50cm9kdWNlVGVhbS50c3g/OTU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9sZWdhY3kvaW1hZ2UnO1xuaW1wb3J0IFN0YWNrIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TdGFjayc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcblxuXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuXG50eXBlIE1lbWJlckNvbnRlbnQgPSB7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgZmlsZW5hbWU6c3RyaW5nO1xuICAgIHdvcmtfdGl0bGU6c3RyaW5nO1xuICAgIHdvcmtfY29udGVudDpzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIE1lbWJlcih7ZGF0YX06e2RhdGE6TWVtYmVyQ29udGVudH0pXG57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTI1Jz5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgL2F2YXRhci8ke2RhdGEuZmlsZW5hbWV9LndlYnBgfSBhbHQ9e2RhdGEuZmlsZW5hbWV9IHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNjAwXCIgY2xhc3NOYW1lPSdyb3VuZGVkJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMSB0ZXh0LWRhcmsgdy03NSc+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5IGZ3LWJvbGRlcic+e2RhdGEubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoND57ZGF0YS53b3JrX3RpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbGgtYmFzZSc+5bel5L2c5YWn5a6577yae2RhdGEud29ya19jb250ZW50fTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y2VUZWFtKClcbntcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGRvdHNDbGFzczogXCJzbGljay1kb3RzIHNsaWNrLXRodW1iXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IHRlYW1EYXRhOk1lbWJlckNvbnRlbnRbXSA9IFtcbiAgICAgICAge2ZpbGVuYW1lOiczMDQ0OCcsIG5hbWU6J+Wtq+iAgOW6rScsIHdvcmtfdGl0bGU6J+imj+WKg+a1geeoi+iIh+euoeeQhicsIHdvcmtfY29udGVudDon6LKg6LKs5Yi25a6a6ZaL55m855uu5qiZ44CB55+t5pyf6ZW35pyf55uu5qiZ6IiH5piO56K655qE5pel56iL6KaP5YqD77yM5b6M57qM6YCy6KGM6L+96Lmk6IiH5b6u6Kq/J30sXG4gICAgICAgIHtmaWxlbmFtZTonMzA0MTQnLCBuYW1lOiflionlrqPnj4knLCB3b3JrX3RpdGxlOifmjJHpgbjnianku7bmqKHlnovjgIHog4zmma/oiIfoo73kvZwnLCB3b3JrX2NvbnRlbnQ6J+iyoOiyrOWwi+aJvuWPr+S9v+eUqOeahOeJqeS7tuizh+a6kO+8jOmAsuihjOS/ruaUueiIh+iqv+aVtO+8jOijveS9nOaIkOmcgOimgeeahOaoo+iyjCd9LFxuICAgICAgICB7ZmlsZW5hbWU6JzMwMTQxJywgbmFtZTon5by15a6H6L6wJywgd29ya190aXRsZTon6Kq/5pW06IiH5L+u5pS5VW5pdHnkuK3nmoTnianku7YnLCB3b3JrX2NvbnRlbnQ6J+iyoOiyrOiZleeQhumBiuaIsuW8leaTjlVuaXR55Lit55qE54mp5Lu26IiH5aC05pmv55qE5LqS5YuV5qih5byP77yM5YyF5ous56e75YuV44CB5ou/5Y+W5pS+5LiL44CB6IiH6YG45Zau5LqS5YuV562JJ30sXG4gICAgICAgIHtmaWxlbmFtZTonMzA5MjcnLCBuYW1lOifmnY7kvbPnv7AnLCB3b3JrX3RpdGxlOifoo73kvZzntrLnq5nlj4roqr/mlbToiIfkv67mlLlVbml0eeS4reeahOeJqeS7ticsIHdvcmtfY29udGVudDon6LKg6LKs6KO95L2c57ay56uZ6IiH5pu05paw44CB57at6K2377yM5Lim5bmr5b+Z6JmV55CG6YGK5oiy5byV5pOOVW5pdHnnmoTnm7jpl5zlt6XkvZwnfSxcbiAgICAgICAge2ZpbGVuYW1lOiczMTM5NicsIG5hbWU6J+aWveWTgeS8gycsIHdvcmtfdGl0bGU6J+e+juihk+WgtOaZr+ijveS9nOiIh+aWh+abuOebuOmXnOS6i+WunCcsIHdvcmtfY29udGVudDon6LKg6LKs6KO95L2c576O6KGT5aC05pmv6IiH54mp5Lu25qih5Z6L77yM5Lim6JmV55CG5aCx5ZGK44CB56u26LO9562J5paH5pu45L2c5qWtJ30sXG4gICAgICAgIHtmaWxlbmFtZTonMzE0NTMnLCBuYW1lOifnlK/lrZDlgKInLCB3b3JrX3RpdGxlOifnvo7ooZPloLTmma/oo73kvZzoiIdBSeWuouacjScsIHdvcmtfY29udGVudDon6LKg6LKs6KO95L2c576O6KGT5aC05pmv6IiH54mp5Lu25qih5Z6L77yM5Lim6KO95L2c44CB6KiT57e0QUnlrqLmnI3mqZ/lmajkurrnmoTmqKHlnosnfSxcbiAgICBdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NVlIt5ZyY6ZqK5oiQ5ZOhPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1MYW5ndWFnZVwiIGNvbnRlbnQ9XCJlblwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2JnLXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS00IHAtMiByb3VuZGVkJyBzdHlsZT17eyBtaW5IZWlnaHQ6ICc5MHZoJywgY29sb3I6ICdibGFjaycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Z3LWJvbGQgdGV4dC1kYXJrIHRleHQtY2VudGVyIG10LTInPuWcmOmaiuaIkOWToTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWFtRGF0YS5tYXAoKGRhdGEsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J2QtZmxleCBnYXAtMyBteC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVtYmVyIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJNZW1iZXIiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiZmlsZW5hbWUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwibmFtZSIsImg0Iiwid29ya190aXRsZSIsIndvcmtfY29udGVudCIsIkludHJvZHVjZVRlYW0iLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzQ2xhc3MiLCJ0ZWFtRGF0YSIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImh0dHBFcXVpdiIsIm1haW4iLCJzdHlsZSIsIm1pbkhlaWdodCIsImNvbG9yIiwiaDEiLCJtYXAiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/introduceTeam.tsx\n"));

/***/ })

});