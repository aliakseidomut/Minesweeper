/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/cells-click-handler.js":
/*!********************************************!*\
  !*** ./src/scripts/cells-click-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cellsClickHandler\": () => (/* binding */ cellsClickHandler),\n/* harmony export */   \"cellsRightClickHandler\": () => (/* binding */ cellsRightClickHandler)\n/* harmony export */ });\n/* harmony import */ var _color_coding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-coding */ \"./src/scripts/color-coding.js\");\n/* harmony import */ var _draw_end_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-end-screen */ \"./src/scripts/draw-end-screen.js\");\n\r\n\r\n\r\nconst clickAudio = new Audio('../src/assets/click.mp3');\r\nconst flagAudio = new Audio('../src/assets/tick.mp3');\r\nconst loseAudio = new Audio('../src/assets/lose.mp3');\r\nconst winAudio = new Audio('../src/assets/win.mp3');\r\n\r\nfunction cellsClickHandler(cell, matrix){  \r\n    clickAudio.play();\r\n    \r\n    let row = cell.parentNode.rowIndex;  \r\n    let column = cell.cellIndex;       \r\n\r\n    cell.className = 'active';  \r\n    if(matrix[row][column] == 9) {  \r\n        loseAudio.play();\r\n        \r\n        const img = document.createElement('img');  \r\n        img.src = '../src/assets/bomb.png';  \r\n        cell.append(img);  \r\n        setTimeout(() => {\r\n            (0,_draw_end_screen__WEBPACK_IMPORTED_MODULE_1__.endScreen)('lose');\r\n        }, 1000);\r\n    }else if(matrix[row][column] == 0) {  \r\n        cell.textContent = '';  \r\n        for(let i = Math.max(row-1, 0); i <= Math.min(row+1, matrix.length-1); i++){ \r\n            for(let j = Math.max(column-1, 0); j <= Math.min(column+1, matrix[0].length-1); j++){ \r\n                if(matrix[i][j] != 9 && !document.getElementById(`cell-${i}-${j}`).classList.contains('active')){ \r\n                    document.getElementById(`cell-${i}-${j}`).classList.add('active'); \r\n                    cellsClickHandler(document.getElementById(`cell-${i}-${j}`), matrix); \r\n                } \r\n            } \r\n        } \r\n    }else{  \r\n        cell.textContent = matrix[row][column];  \r\n        (0,_color_coding__WEBPACK_IMPORTED_MODULE_0__.setColor)(matrix[row][column], cell);\r\n    }  \r\n\r\n    if(document.querySelectorAll('.unactive').length == 10){\r\n        winAudio.play();\r\n        \r\n        setTimeout(() => {\r\n            (0,_draw_end_screen__WEBPACK_IMPORTED_MODULE_1__.endScreen)('win');\r\n        }, 1000);\r\n    }\r\n}\r\n\r\nlet flags = 0;\r\nfunction cellsRightClickHandler(cell){\r\n    flagAudio.play();\r\n    \r\n    if(!cell.childNodes[0] && cell.className != 'flag'){\r\n        const img = document.createElement('img');\r\n        img.className = 'flag';\r\n        img.src = '../src/assets/flag.png'\r\n        cell.append(img);\r\n        flags++;\r\n        document.querySelector('.flags').textContent = `Flags: ${flags}`;\r\n    }else if(cell.childNodes[0]){\r\n        cell.removeChild(cell.childNodes[0]);\r\n        flags--;\r\n        document.querySelector('.flags').textContent = `Flags: ${flags}`;\r\n    }else if(cell.className == 'flag'){\r\n        cell.remove();\r\n        flags--;\r\n        document.querySelector('.flags').textContent = `Flags: ${flags}`;\r\n    }\r\n    document.querySelector('.button_new-game').addEventListener('click', ()=>{\r\n        flags = 0;\r\n        document.querySelector('.flags').textContent = `Flags: ${flags}`;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/scripts/cells-click-handler.js?");

/***/ }),

/***/ "./src/scripts/color-coding.js":
/*!*************************************!*\
  !*** ./src/scripts/color-coding.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setColor\": () => (/* binding */ setColor)\n/* harmony export */ });\nfunction setColor(num, cell){\r\n    let color;\r\n\r\n    if(num == 1){\r\n        color = 'blue';\r\n    }else if(num == 2){\r\n        color = 'green';\r\n    }else if(num == 3){\r\n        color = 'red';\r\n    }else if(num == 4){\r\n        color = 'purple';\r\n    }else{\r\n        color = 'yellow';\r\n    }\r\n\r\n    cell.style.color = color;\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/scripts/color-coding.js?");

/***/ }),

/***/ "./src/scripts/draw-board.js":
/*!***********************************!*\
  !*** ./src/scripts/draw-board.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawBoard\": () => (/* binding */ drawBoard)\n/* harmony export */ });\n/* harmony import */ var _cells_click_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cells-click-handler */ \"./src/scripts/cells-click-handler.js\");\n/* harmony import */ var _gen_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gen-board */ \"./src/scripts/gen-board.js\");\n\r\n\r\n\r\nfunction drawBoard(){\r\n    let matrix;\r\n    let id;\r\n    let clickCounter = 0;\r\n    const table = document.createElement('table');\r\n    for(let i = 0; i < 10; i++){\r\n        const row = document.createElement('tr');\r\n        for(let j = 0; j < 10; j++){\r\n            const cell = document.createElement('td');\r\n            cell.className = 'unactive';\r\n            cell.id = `cell-${i}-${j}`;\r\n            row.append(cell);\r\n        }\r\n        table.append(row);\r\n    }\r\n    \r\n    table.addEventListener('click', event => { \r\n        if(event.target.className == 'unactive' && !event.target.childNodes[0]) { \r\n            if(clickCounter == 0){ \r\n                matrix = (0,_gen_board__WEBPACK_IMPORTED_MODULE_1__.genBoard)(event.target); \r\n                id = setInterval(()=>{\r\n                    document.querySelector('.timer').textContent++;\r\n                }, 1000)\r\n                document.querySelector('.button_new-game').addEventListener('click', () => {\r\n                    document.querySelector('.timer').textContent = '0';\r\n                    clearInterval(id);\r\n                });\r\n            } \r\n            (0,_cells_click_handler__WEBPACK_IMPORTED_MODULE_0__.cellsClickHandler)(event.target, matrix); \r\n            clickCounter++;  \r\n            document.querySelector('.steps').textContent = `Steps: ${clickCounter}`;\r\n            document.querySelector('.button_new-game').addEventListener('click', ()=>{\r\n                clickCounter = 0;\r\n                document.querySelector('.steps').textContent = `Steps: ${clickCounter}`;\r\n            });\r\n        } \r\n    });\r\n\r\n    table.addEventListener('contextmenu', event => {\r\n        if(event.target.className == 'unactive' || event.target.className == 'flag') { \r\n            (0,_cells_click_handler__WEBPACK_IMPORTED_MODULE_0__.cellsRightClickHandler)(event.target);\r\n            return false;\r\n        }\r\n    })\r\n\r\n    return table;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/scripts/draw-board.js?");

/***/ }),

/***/ "./src/scripts/draw-end-screen.js":
/*!****************************************!*\
  !*** ./src/scripts/draw-end-screen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endScreen\": () => (/* binding */ endScreen)\n/* harmony export */ });\nfunction endScreen(result){\r\n    const endMessage = document.createElement('h1');\r\n    endMessage.className = 'end-message';\r\n    if(result == 'win'){\r\n        endMessage.textContent = 'Win';\r\n    }else if(result == 'lose'){\r\n        endMessage.textContent = 'Lose';\r\n    }\r\n\r\n    const endStats = document.createElement('div');\r\n    endStats.className = 'end-stats';\r\n\r\n    const time = document.createElement('h2');\r\n    time.textContent = `Time: ${document.querySelector('.timer').textContent}`;\r\n\r\n    const steps = document.createElement('h2');\r\n    steps.textContent = document.querySelector('.steps').textContent;\r\n\r\n    const flags = document.createElement('h2');\r\n    flags.textContent = document.querySelector('.flags').textContent;\r\n\r\n\r\n    document.querySelector('table').remove();\r\n\r\n    endStats.append(time, steps, flags)\r\n    document.body.append(endMessage, endStats);\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/scripts/draw-end-screen.js?");

/***/ }),

/***/ "./src/scripts/draw-menu.js":
/*!**********************************!*\
  !*** ./src/scripts/draw-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawMenu\": () => (/* binding */ drawMenu)\n/* harmony export */ });\n/* harmony import */ var _draw_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw-board */ \"./src/scripts/draw-board.js\");\n/* harmony import */ var _theme_changer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-changer */ \"./src/scripts/theme-changer.js\");\n\r\n\r\n\r\nfunction drawMenu(){\r\n    const header = document.createElement('header');\r\n     \r\n    const newGame =  document.createElement('button');\r\n    newGame.classList.add('button', 'button_new-game');\r\n    newGame.textContent = 'New game';\r\n    newGame.addEventListener('click', () => {\r\n        if(!document.querySelector('table')) {\r\n            document.querySelector('.end-message').remove();\r\n            document.querySelector('.end-stats').remove();\r\n            document.body.append((0,_draw_board__WEBPACK_IMPORTED_MODULE_0__.drawBoard)());\r\n        } else {\r\n            document.querySelector('table').remove();\r\n            document.body.append((0,_draw_board__WEBPACK_IMPORTED_MODULE_0__.drawBoard)());\r\n        }\r\n    })\r\n\r\n    const stats = document.createElement('div');\r\n    stats.className = 'stats';\r\n\r\n    const timer = document.createElement('p');\r\n    timer.textContent = '0';\r\n    timer.className = 'timer';\r\n\r\n    const flags = document.createElement('p');\r\n    flags.className = 'flags';\r\n    flags.textContent = 'Flags: 0';\r\n\r\n    const steps = document.createElement('p');\r\n    steps.className = 'steps';\r\n    steps.textContent = 'Steps: 0';\r\n\r\n    stats.append(timer, flags, steps);\r\n\r\n    header.append(newGame, stats, (0,_theme_changer__WEBPACK_IMPORTED_MODULE_1__.drawThemeChanger)());\r\n\r\n    return header;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/scripts/draw-menu.js?");

/***/ }),

/***/ "./src/scripts/gen-board.js":
/*!**********************************!*\
  !*** ./src/scripts/gen-board.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"genBoard\": () => (/* binding */ genBoard)\n/* harmony export */ });\n/* harmony import */ var _get_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-random */ \"./src/scripts/get-random.js\");\n \r\n \r\nfunction genBoard(cell){ \r\n    let cellRow = cell.parentNode.rowIndex;\r\n    let cellColumn = cell.cellIndex;\r\n    let bombs = Array(10).fill('9'); \r\n    let matrix = []; \r\n \r\n    for(let i = 0; i < 10; i++){ \r\n        let row = []; \r\n        for(let j = 0; j < 10; j++){ \r\n            row.push(0); \r\n        } \r\n        matrix.push(row); \r\n    } \r\n     \r\n    bombs.forEach(el => { \r\n        let row = (0,_get_random__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, 9);\r\n        let column = (0,_get_random__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, 9);\r\n\r\n        while((row == cellRow && column == cellColumn) || (matrix[row][column] == 9)){\r\n            row = (0,_get_random__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, 9);\r\n            column = (0,_get_random__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, 9);\r\n        }\r\n\r\n        matrix[row].splice([column], 1, el); \r\n    }); \r\n     \r\n    for(let i = 0; i < 10; i++){ \r\n        for(let j = 0; j < 10; j++){ \r\n            if(matrix[i][j] !== '9'){\r\n                let count = 0;\r\n                for(let k = i-1; k <= i+1; k++){\r\n                    for(let l = j-1; l <= j+1; l++){\r\n                        if(k >= 0 && k < 10 && l >= 0 && l < 10 && matrix[k][l] === '9'){\r\n                            count++;\r\n                        }\r\n                    }\r\n                }\r\n                matrix[i][j] = count;\r\n            } \r\n        } \r\n    } \r\n\r\n    return matrix;\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/scripts/gen-board.js?");

/***/ }),

/***/ "./src/scripts/get-random.js":
/*!***********************************!*\
  !*** ./src/scripts/get-random.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom)\n/* harmony export */ });\nfunction getRandom(min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min + 1) + min);\r\n  }\n\n//# sourceURL=webpack://minesweeper/./src/scripts/get-random.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw-board */ \"./src/scripts/draw-board.js\");\n/* harmony import */ var _draw_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-menu */ \"./src/scripts/draw-menu.js\");\n\r\n\r\n\r\ndocument.body.append((0,_draw_menu__WEBPACK_IMPORTED_MODULE_1__.drawMenu)(), (0,_draw_board__WEBPACK_IMPORTED_MODULE_0__.drawBoard)());\n\n//# sourceURL=webpack://minesweeper/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/theme-changer.js":
/*!**************************************!*\
  !*** ./src/scripts/theme-changer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawThemeChanger\": () => (/* binding */ drawThemeChanger)\n/* harmony export */ });\nfunction drawThemeChanger(){\r\n    const themeChanger = document.createElement('button'); \r\n    themeChanger.classList.add('button', 'button_theme');\r\n    themeChanger.textContent = 'Dark';\r\n    \r\n    themeChanger.addEventListener('click', (event) => {\r\n        if(event.target.textContent == 'Light'){\r\n            document.body.classList.remove('body_dark');\r\n            document.querySelector('header').classList.remove('header_dark');\r\n            document.querySelectorAll('button').forEach(el => {\r\n                el.classList.remove('button_dark');\r\n            })\r\n            event.target.textContent = 'Dark';\r\n        }else if(event.target.textContent == 'Dark'){\r\n            document.body.classList.add('body_dark');\r\n            document.querySelector('header').classList.add('header_dark');\r\n            document.querySelectorAll('button').forEach(el => {\r\n                el.classList.add('button_dark');\r\n            })\r\n            event.target.textContent = 'Light';\r\n        }\r\n    });\r\n\r\n    return themeChanger;\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/scripts/theme-changer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;