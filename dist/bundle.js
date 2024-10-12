/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('note-form').addEventListener('submit', function (e) {\r\n    e.preventDefault();\r\n\r\n    const noteInput = document.getElementById('note-input');\r\n    const note = noteInput.value.trim();\r\n\r\n    if (note) {\r\n        const noteList = document.getElementById('note-list');\r\n        const newNote = document.createElement('li');\r\n        newNote.textContent = note;\r\n        noteList.appendChild(newNote);\r\n        noteInput.value = ''; // Clear the input field\r\n    }\r\n});\n\n//# sourceURL=webpack://webpack-project-setup/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;