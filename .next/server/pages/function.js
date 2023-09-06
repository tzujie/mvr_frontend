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
exports.id = "pages/function";
exports.ids = ["pages/function"];
exports.modules = {

/***/ "./pages/ImageSlider.module.css":
/*!**************************************!*\
  !*** ./pages/ImageSlider.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"slider-container\": \"ImageSlider_slider-container__Gu_Q3\",\n\t\"slide-button\": \"ImageSlider_slide-button__nVTVB\",\n\t\"slide-content\": \"ImageSlider_slide-content__m1_lc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZVNsaWRlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL212cl93ZWJzaXRlLy4vcGFnZXMvSW1hZ2VTbGlkZXIubW9kdWxlLmNzcz83ODIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWRlci1jb250YWluZXJcIjogXCJJbWFnZVNsaWRlcl9zbGlkZXItY29udGFpbmVyX19HdV9RM1wiLFxuXHRcInNsaWRlLWJ1dHRvblwiOiBcIkltYWdlU2xpZGVyX3NsaWRlLWJ1dHRvbl9fblZUVkJcIixcblx0XCJzbGlkZS1jb250ZW50XCI6IFwiSW1hZ2VTbGlkZXJfc2xpZGUtY29udGVudF9fbTFfbGNcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ImageSlider.module.css\n");

/***/ }),

/***/ "./pages/function.tsx":
/*!****************************!*\
  !*** ./pages/function.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlider.module.css */ \"./pages/ImageSlider.module.css\");\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst images = [\n    {\n        filename: \"30448\",\n        name: \"孫耀庭\",\n        work_title: \"規劃流程與管理\",\n        work_content: \"負責制定開發目標、短期長期目標與明確的日程規劃，後續進行追蹤與微調\"\n    },\n    {\n        filename: \"30414\",\n        name: \"劉宣珉\",\n        work_title: \"挑選物件模型、背景與製作\",\n        work_content: \"負責尋找可使用的物件資源，進行修改與調整，製作成需要的樣貌\"\n    },\n    {\n        filename: \"30141\",\n        name: \"張宇辰\",\n        work_title: \"調整與修改Unity中的物件\",\n        work_content: \"負責處理遊戲引擎Unity中的物件與場景的互動模式，包括移動、拿取放下、與選單互動等\"\n    },\n    {\n        filename: \"30927\",\n        name: \"李佳翰\",\n        work_title: \"製作網站及調整與修改Unity中的物件\",\n        work_content: \"負責製作網站與更新、維護，並幫忙處理遊戲引擎Unity的相關工作\"\n    },\n    {\n        filename: \"31396\",\n        name: \"施品伃\",\n        work_title: \"美術場景製作與文書相關事宜\",\n        work_content: \"負責製作美術場景與物件模型，並處理報告、競賽等文書作業\"\n    },\n    {\n        filename: \"31453\",\n        name: \"甯子倢\",\n        work_title: \"美術場景製作與AI客服\",\n        work_content: \"負責製作美術場景與物件模型，並製作、訓練AI客服機器人的模型\"\n    }\n];\nconst ImageSlider = ()=>{\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handlePrev = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? images.length - 1 : prevIndex - 1);\n    };\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().sliderContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrev,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().slideButton),\n                children: \"←\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/function.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().slideContent)\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/function.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().slideButton),\n                children: \"→\"\n            }, void 0, false, {\n                fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/function.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ningtzujie/Desktop/mvr_frontend/pages/function.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSlider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mdW5jdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQVk5QyxNQUFNRyxTQUFzQjtJQUN4QjtRQUFFQyxVQUFVO1FBQVNDLE1BQU07UUFBT0MsWUFBWTtRQUFXQyxjQUFjO0lBQW9DO0lBQzNHO1FBQUVILFVBQVU7UUFBU0MsTUFBTTtRQUFPQyxZQUFZO1FBQWdCQyxjQUFjO0lBQWdDO0lBQzVHO1FBQUVILFVBQVU7UUFBU0MsTUFBTTtRQUFPQyxZQUFZO1FBQWtCQyxjQUFjO0lBQTZDO0lBQzNIO1FBQUVILFVBQVU7UUFBU0MsTUFBTTtRQUFPQyxZQUFZO1FBQXVCQyxjQUFjO0lBQW1DO0lBQ3RIO1FBQUVILFVBQVU7UUFBU0MsTUFBTTtRQUFPQyxZQUFZO1FBQWlCQyxjQUFjO0lBQThCO0lBQzNHO1FBQUVILFVBQVU7UUFBU0MsTUFBTTtRQUFPQyxZQUFZO1FBQWVDLGNBQWM7SUFBaUM7Q0FDL0c7QUFFRCxNQUFNQyxjQUF3QixJQUFNO0lBQ2hDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELE1BQU1VLGFBQWEsSUFBTTtRQUNyQkQsZ0JBQWdCLENBQUNFLFlBQWVBLGNBQWMsSUFBSVQsT0FBT1UsTUFBTSxHQUFHLElBQUlELFlBQVksQ0FBQztJQUN2RjtJQUVBLE1BQU1FLGFBQWEsSUFBTTtRQUNyQkosZ0JBQWdCLENBQUNFLFlBQWVBLGNBQWNULE9BQU9VLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVksQ0FBQztJQUN2RjtJQUVBLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFXZCxnRkFBc0I7OzBCQUNsQyw4REFBQ2dCO2dCQUFPQyxTQUFTUjtnQkFBWUssV0FBV2QsNEVBQWtCOzBCQUFFOzs7Ozs7MEJBQzVELDhEQUFDYTtnQkFBSUMsV0FBV2QsNkVBQW1COzs7Ozs7MEJBR25DLDhEQUFDZ0I7Z0JBQU9DLFNBQVNMO2dCQUFZRSxXQUFXZCw0RUFBa0I7MEJBQUU7Ozs7Ozs7Ozs7OztBQUd4RTtBQUVBLGlFQUFlTSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXZyX3dlYnNpdGUvLi9wYWdlcy9mdW5jdGlvbi50c3g/YjhlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1hZ2VTbGlkZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9sZWdhY3kvaW1hZ2UnO1xuaW1wb3J0IFN0YWNrIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TdGFjayc7XG5cbmludGVyZmFjZSBJbWFnZUluZm8ge1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHdvcmtfdGl0bGU6IHN0cmluZztcbiAgICB3b3JrX2NvbnRlbnQ6IHN0cmluZztcbn1cblxuY29uc3QgaW1hZ2VzOiBJbWFnZUluZm9bXSA9IFtcbiAgICB7IGZpbGVuYW1lOiAnMzA0NDgnLCBuYW1lOiAn5a2r6ICA5bqtJywgd29ya190aXRsZTogJ+imj+WKg+a1geeoi+iIh+euoeeQhicsIHdvcmtfY29udGVudDogJ+iyoOiyrOWItuWumumWi+eZvOebruaomeOAgeefreacn+mVt+acn+ebruaomeiIh+aYjueiuueahOaXpeeoi+imj+WKg++8jOW+jOe6jOmAsuihjOi/vei5pOiIh+W+ruiqvycgfSxcbiAgICB7IGZpbGVuYW1lOiAnMzA0MTQnLCBuYW1lOiAn5YqJ5a6j54+JJywgd29ya190aXRsZTogJ+aMkemBuOeJqeS7tuaooeWei+OAgeiDjOaZr+iIh+ijveS9nCcsIHdvcmtfY29udGVudDogJ+iyoOiyrOWwi+aJvuWPr+S9v+eUqOeahOeJqeS7tuizh+a6kO+8jOmAsuihjOS/ruaUueiIh+iqv+aVtO+8jOijveS9nOaIkOmcgOimgeeahOaoo+iyjCcgfSxcbiAgICB7IGZpbGVuYW1lOiAnMzAxNDEnLCBuYW1lOiAn5by15a6H6L6wJywgd29ya190aXRsZTogJ+iqv+aVtOiIh+S/ruaUuVVuaXR55Lit55qE54mp5Lu2Jywgd29ya19jb250ZW50OiAn6LKg6LKs6JmV55CG6YGK5oiy5byV5pOOVW5pdHnkuK3nmoTnianku7boiIfloLTmma/nmoTkupLli5XmqKHlvI/vvIzljIXmi6znp7vli5XjgIHmi7/lj5bmlL7kuIvjgIHoiIfpgbjllq7kupLli5XnrYknIH0sXG4gICAgeyBmaWxlbmFtZTogJzMwOTI3JywgbmFtZTogJ+adjuS9s+e/sCcsIHdvcmtfdGl0bGU6ICfoo73kvZzntrLnq5nlj4roqr/mlbToiIfkv67mlLlVbml0eeS4reeahOeJqeS7ticsIHdvcmtfY29udGVudDogJ+iyoOiyrOijveS9nOe2suermeiIh+abtOaWsOOAgee2reitt++8jOS4puW5q+W/meiZleeQhumBiuaIsuW8leaTjlVuaXR555qE55u46Zec5bel5L2cJyB9LFxuICAgIHsgZmlsZW5hbWU6ICczMTM5NicsIG5hbWU6ICfmlr3lk4HkvIMnLCB3b3JrX3RpdGxlOiAn576O6KGT5aC05pmv6KO95L2c6IiH5paH5pu455u46Zec5LqL5a6cJywgd29ya19jb250ZW50OiAn6LKg6LKs6KO95L2c576O6KGT5aC05pmv6IiH54mp5Lu25qih5Z6L77yM5Lim6JmV55CG5aCx5ZGK44CB56u26LO9562J5paH5pu45L2c5qWtJyB9LFxuICAgIHsgZmlsZW5hbWU6ICczMTQ1MycsIG5hbWU6ICfnlK/lrZDlgKInLCB3b3JrX3RpdGxlOiAn576O6KGT5aC05pmv6KO95L2c6IiHQUnlrqLmnI0nLCB3b3JrX2NvbnRlbnQ6ICfosqDosqzoo73kvZznvo7ooZPloLTmma/oiIfnianku7bmqKHlnovvvIzkuKboo73kvZzjgIHoqJPnt7RBSeWuouacjeapn+WZqOS6uueahOaooeWeiycgfSxcbl07XG5cbmNvbnN0IEltYWdlU2xpZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCA9PT0gMCA/IGltYWdlcy5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlQnV0dG9ufT7ihpA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVDb250ZW50fT5cbiAgICAgICAgICAgICAgICB7LyogLi4uICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlQnV0dG9ufT7ihpI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJpbWFnZXMiLCJmaWxlbmFtZSIsIm5hbWUiLCJ3b3JrX3RpdGxlIiwid29ya19jb250ZW50IiwiSW1hZ2VTbGlkZXIiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJoYW5kbGVQcmV2IiwicHJldkluZGV4IiwibGVuZ3RoIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsInNsaWRlckNvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbGlkZUJ1dHRvbiIsInNsaWRlQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/function.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/function.tsx"));
module.exports = __webpack_exports__;

})();