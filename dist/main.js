/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domscripts/hidelement.js":
/*!**************************************!*\
  !*** ./src/domscripts/hidelement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hide": () => (/* binding */ hide)
/* harmony export */ });
function hide(element){
    document.querySelector(element).classlist.add('hidden')
}



/***/ }),

/***/ "./src/domscripts/openForm.js":
/*!************************************!*\
  !*** ./src/domscripts/openForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNewForm": () => (/* binding */ openNewForm)
/* harmony export */ });
function openNewForm(){
    const taskForm=document.querySelector('.add-task-form')
    document.querySelector('.task-header').style.marginBottom='8%'
    taskForm.classList.remove('hidden')
    taskForm.style.transition="all 1s"
    setTimeout(() => {
        taskForm.style.opacity='1'
    }, 900);
}



/***/ }),

/***/ "./src/logic/addnote.js":
/*!******************************!*\
  !*** ./src/logic/addnote.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNotes": () => (/* binding */ addNotes)
/* harmony export */ });
function addNotes(){
    document.querySelector('.notes-input').classList.remove('hidden')
    document.querySelector('.add-note-button').classList.add('hidden')
}



/***/ }),

/***/ "./src/logic/addtask.js":
/*!******************************!*\
  !*** ./src/logic/addtask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "captureTaskInfo": () => (/* binding */ captureTaskInfo),
/* harmony export */   "date": () => (/* binding */ date)
/* harmony export */ });
let date
function captureTaskInfo(){
    date=document.querySelector('.date-selector').value
    //extra animation effects
    const taskForm=document.querySelector('.add-task-form')
    taskForm.style.backgroundColor="#7dd777"
    document.querySelector('.notes-input').value=""
    document.querySelector('.date-selector').value=""
    taskForm.style.opacity="0"
    setTimeout(() => {
        document.querySelector('.task-name').value=""
        document.querySelector('.notes-input').value=""
        document.querySelector('.date-selector').value=""
        document.querySelector('.task-header').style.marginBottom="5px"
        taskForm.classList.add('hidden')
        taskForm.style.backgroundColor="rgba(0, 0, 0, 0.642)"
    }, 800);
    return date
}



/***/ }),

/***/ "./src/logic/canceltask.js":
/*!*********************************!*\
  !*** ./src/logic/canceltask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelTask": () => (/* binding */ cancelTask)
/* harmony export */ });
function cancelTask(){
    const taskForm=document.querySelector('.add-task-form')
    taskForm.style.backgroundColor="red"
    document.querySelector('.notes-input').value=""
    document.querySelector('.date-selector').value=""
    taskForm.style.opacity="0"
    setTimeout(() => {
        document.querySelector('.task-name').value=""
        document.querySelector('.notes-input').value=""
        document.querySelector('.date-selector').value=""
        document.querySelector('.task-header').style.marginBottom="5px"
        taskForm.classList.add('hidden')
        taskForm.style.backgroundColor="rgba(0, 0, 0, 0.642)"
    }, 800);
}



/***/ }),

/***/ "./src/logic/duedate.js":
/*!******************************!*\
  !*** ./src/logic/duedate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateSelector": () => (/* binding */ dateSelector)
/* harmony export */ });
function dateSelector(){
    document.querySelector('.due-date-button').classList.add('hidden')
    document.querySelector('.date-selector').classList.remove('hidden')
}

 

/***/ }),

/***/ "./src/logic/newtask.js":
/*!******************************!*\
  !*** ./src/logic/newtask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewTask": () => (/* binding */ createNewTask)
/* harmony export */ });
function createNewTask(){
    const taskName=document.querySelector('.task-name').value
    const notes=document.querySelector('.notes-input').value
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_newtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/newtask */ "./src/logic/newtask.js");
/* harmony import */ var _domscripts_openForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domscripts/openForm */ "./src/domscripts/openForm.js");
/* harmony import */ var _domscripts_hidelement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domscripts/hidelement */ "./src/domscripts/hidelement.js");
/* harmony import */ var _logic_canceltask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/canceltask */ "./src/logic/canceltask.js");
/* harmony import */ var _logic_addtask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/addtask */ "./src/logic/addtask.js");
/* harmony import */ var _logic_duedate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/duedate */ "./src/logic/duedate.js");
/* harmony import */ var _logic_addnote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logic/addnote */ "./src/logic/addnote.js");
//import functions here;









const newNoted=document.querySelector(".add-note-button")
const newTaskBtn=document.querySelector('.add-task-button')
const cancelTaskBtn=document.querySelector('.cancel-task')
const addTaskBtn=document.querySelector('.add-task')
const dueDate=document.querySelector('.due-date-button')
//input declarations
const date=0

newTaskBtn.addEventListener('click',()=>{
   ;(0,_domscripts_openForm__WEBPACK_IMPORTED_MODULE_1__.openNewForm)()
})

dueDate.addEventListener('click',()=>{
   ;(0,_logic_duedate__WEBPACK_IMPORTED_MODULE_5__.dateSelector)()
})

newNoted.addEventListener('click',()=>{
    ;(0,_logic_addnote__WEBPACK_IMPORTED_MODULE_6__.addNotes)()
})

cancelTaskBtn.addEventListener('click', ()=>{
    ;(0,_logic_canceltask__WEBPACK_IMPORTED_MODULE_3__.cancelTask)()
})

addTaskBtn.addEventListener('click',()=>{
    ;(0,_logic_addtask__WEBPACK_IMPORTED_MODULE_4__.captureTaskInfo)()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7QUNMdkI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDNkM7QUFDTTtBQUNMO0FBQ0M7QUFDRTtBQUNIO0FBQ0o7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsa0VBQVc7QUFDZCxDQUFDOztBQUVEO0FBQ0EsR0FBRyw2REFBWTtBQUNmLENBQUM7O0FBRUQ7QUFDQSxJQUFJLHlEQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLElBQUksOERBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21zY3JpcHRzL2hpZGVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21zY3JpcHRzL29wZW5Gb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvYWRkbm90ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2FkZHRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9jYW5jZWx0YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvZHVlZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL25ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGlkZShlbGVtZW50KXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLmNsYXNzbGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7aGlkZX0iLCJmdW5jdGlvbiBvcGVuTmV3Rm9ybSgpe1xuICAgIGNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkZXInKS5zdHlsZS5tYXJnaW5Cb3R0b209JzglJ1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgdGFza0Zvcm0uc3R5bGUudHJhbnNpdGlvbj1cImFsbCAxc1wiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLm9wYWNpdHk9JzEnXG4gICAgfSwgOTAwKTtcbn1cblxuZXhwb3J0IHsgb3Blbk5ld0Zvcm0gfSIsImZ1bmN0aW9uIGFkZE5vdGVzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZXhwb3J0IHsgYWRkTm90ZXMgfSIsImxldCBkYXRlXG5mdW5jdGlvbiBjYXB0dXJlVGFza0luZm8oKXtcbiAgICBkYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWVcbiAgICAvL2V4dHJhIGFuaW1hdGlvbiBlZmZlY3RzXG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiM3ZGQ3NzdcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLnZhbHVlPVwiXCJcbiAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZT1cIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlPVwiXCJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjVweFwiXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwgMCwgMCwgMC42NDIpXCJcbiAgICB9LCA4MDApO1xuICAgIHJldHVybiBkYXRlXG59XG5cbmV4cG9ydCB7IGNhcHR1cmVUYXNrSW5mbywgZGF0ZSB9IiwiZnVuY3Rpb24gY2FuY2VsVGFzaygpe1xuICAgIGNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZWRcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLnZhbHVlPVwiXCJcbiAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZT1cIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlPVwiXCJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjVweFwiXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwgMCwgMCwgMC42NDIpXCJcbiAgICB9LCA4MDApO1xufVxuXG5leHBvcnQge2NhbmNlbFRhc2t9IiwiZnVuY3Rpb24gZGF0ZVNlbGVjdG9yKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBkYXRlU2VsZWN0b3IgfSAiLCJmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCl7XG4gICAgY29uc3QgdGFza05hbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnZhbHVlXG4gICAgY29uc3Qgbm90ZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWVcbn1cbmV4cG9ydCB7Y3JlYXRlTmV3VGFza30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IGZ1bmN0aW9ucyBoZXJlO1xuaW1wb3J0IHtjcmVhdGVuZXd0YXNrfSBmcm9tICcuL2xvZ2ljL25ld3Rhc2snXG5pbXBvcnQgeyBvcGVuTmV3Rm9ybSB9IGZyb20gJy4vZG9tc2NyaXB0cy9vcGVuRm9ybSdcbmltcG9ydCB7IGhpZGUgfSBmcm9tICcuL2RvbXNjcmlwdHMvaGlkZWxlbWVudCdcbmltcG9ydCB7IGNhbmNlbFRhc2sgfSBmcm9tICcuL2xvZ2ljL2NhbmNlbHRhc2snXG5pbXBvcnQgeyBjYXB0dXJlVGFza0luZm8gfSBmcm9tICcuL2xvZ2ljL2FkZHRhc2snXG5pbXBvcnQgeyBkYXRlU2VsZWN0b3IgfSBmcm9tICcuL2xvZ2ljL2R1ZWRhdGUnXG5pbXBvcnQgeyBhZGROb3RlcyB9IGZyb20gJy4vbG9naWMvYWRkbm90ZSdcblxuXG5jb25zdCBuZXdOb3RlZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlLWJ1dHRvblwiKVxuY29uc3QgbmV3VGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJylcbmNvbnN0IGNhbmNlbFRhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10YXNrJylcbmNvbnN0IGFkZFRhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJylcbmNvbnN0IGR1ZURhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpXG4vL2lucHV0IGRlY2xhcmF0aW9uc1xuY29uc3QgZGF0ZT0wXG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBvcGVuTmV3Rm9ybSgpXG59KVxuXG5kdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgZGF0ZVNlbGVjdG9yKClcbn0pXG5cbm5ld05vdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFkZE5vdGVzKClcbn0pXG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNhbmNlbFRhc2soKVxufSlcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBjYXB0dXJlVGFza0luZm8oKVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==