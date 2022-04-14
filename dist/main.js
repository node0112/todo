/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domscripts/creategroupform.js":
/*!*******************************************!*\
  !*** ./src/domscripts/creategroupform.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInfo": () => (/* binding */ addInfo),
/* harmony export */   "closeGroupForm": () => (/* binding */ closeGroupForm),
/* harmony export */   "createGroupForm": () => (/* binding */ createGroupForm),
/* harmony export */   "groupSelected": () => (/* binding */ groupSelected)
/* harmony export */ });
/* harmony import */ var _logic_inputcheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/inputcheck */ "./src/logic/inputcheck.js");
/* harmony import */ var _logic_sendItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/sendItem */ "./src/logic/sendItem.js");
/* harmony import */ var _removeGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeGroup */ "./src/domscripts/removeGroup.js");





function createGroupForm(){
    const sidebar=document.querySelector('.sidebar')
    const formContainer=document.createElement('div')
    const input=document.createElement("input")
    const closeBtn=document.createElement('i')
    const addGroupBtn=document.createElement("i")

    formContainer.classList.add('group-form-container')
    formContainer.style.width="130%"
    input.classList.add('group-name-input')
    closeBtn.classList.add("material-icons")
    closeBtn.classList.add('remove-groupform-btn')
    closeBtn.style.cursor="pointer"
    closeBtn.textContent="close"
    closeBtn.onmouseover="color: black;"
    addGroupBtn.classList.add('material-icons')
    addGroupBtn.classList.add('grpformadd')
    addGroupBtn.textContent="add"
    input.style.border="none"
    input.style.fontFamily="roboto condensed"
    input.style.backgroundColor="yellowgreen"
    input.style.transition="all 0.4s"
    const dot=document.createElement('span')
    dot.classList.add('dot')
    dot.classList.add('title')
    input.size="15"
    input.fontSize=("24px")
    
    formContainer.style.opacity="0"
    setTimeout(() => {
        formContainer.style.opacity="1"
    }, 100);
    
    document.querySelector('.add-group-btn').removeEventListener('click',createGroupForm)
    formContainer.appendChild(dot)
    formContainer.appendChild(input)
    formContainer.appendChild(addGroupBtn)
    formContainer.appendChild(closeBtn)
    sidebar.appendChild(formContainer)
    closeBtn.addEventListener('click', ()=>{
        if(confirm('Are you Sure You Want To Cancel?')==true){
            closeGroupForm()
        }
    })
    addGroupBtn.addEventListener('click',addInfo)
}
function closeGroupForm(){
    const groupForm=document.querySelector('.group-form-container')
    groupForm.style.opacity='0'
    setTimeout(() => {
        groupForm.remove()
        document.querySelector('.add-group-btn').addEventListener('click',createGroupForm)
    }, 500);
}

//functions to execute after add button has been pressed

function addInfo(){
    let input=document.querySelector('.group-name-input')
    //if(inputChecker('.group-name-input')==true){
      //  closeGroupForm()
       // input.style.backgroundColor="#11ff00"
    //}
    closeGroupForm()
    input.style.backgroundColor="#11ff00"
    let groupName=input.value
    setTimeout(() => {
        createGroupElement(groupName)
    }, 500);
}

function createGroupArray(groupName){
    window[groupName]= new Array()
    window[groupName]=({taskName: "complete chore",dateDue:"Nan"})
    ;(0,_logic_sendItem__WEBPACK_IMPORTED_MODULE_1__.sendItem)(window[groupName],groupName)
}

function createGroupElement(groupName){
    const formContainer=document.querySelector('.sidebar')
    let container=document.createElement('div')
    container.classList.add('group-container')

    //create group element and assign it a title number
    let groupTitle=document.createElement('div')
    groupTitle.classList.add('title')
    const str2 = groupName.charAt(0).toUpperCase() + groupName.slice(1);
    container.classList.add(groupName)//for indentification when deleteing elment
    groupTitle.textContent= str2

    //Spawn Dot for title
    const dot=document.createElement('span')
    dot.classList.add('dot')
    dot.classList.add('title')

    //create close button
    let closeBtn=document.createElement('i')
    closeBtn.classList.add("material-icons")
    closeBtn.classList.add('remove-group-btn')
    closeBtn.textContent=('close')

    //title and dot container
    let titleDot=document.createElement('div')
    titleDot.classList.add('title-dot-container')
    titleDot.appendChild(dot)
    titleDot.appendChild(groupTitle)

    //add elements according to their order, to the container
    container.appendChild(titleDot)
    container.appendChild(closeBtn)
    formContainer.appendChild(container)
    closeBtn.addEventListener('click',()=>{
        if(confirm("Are You Sure You Want to Delete The "+groupTitle.textContent+" Group?")==true){
            let name=groupTitle.textContent
            ;(0,_removeGroup__WEBPACK_IMPORTED_MODULE_2__.removeGroup)(name)
        }
    })
    //create array
    createGroupArray(groupName)
    groupSelection()
    groupSelector()
}
let groupSelected
function groupSelector(){
    let group=document.querySelectorAll('.title')
    group.forEach(title=>{
        title.addEventListener('click',()=>{
            let groupname=title.textContent
            groupname= groupname.charAt(0).toLowerCase() + groupname.slice(1);
            groupSelected=groupname
         })
    })
}
groupSelector()
function groupSelection(){
    const groups=document.querySelectorAll('.title')
    groups.forEach(item =>{
            item.addEventListener('click',()=>{
            groups.forEach(group =>{group.style.color="black"})//to reset selected group, if any
            item.style.color="yellowgreen"
            groupSelector(item)
        })
    })
    }

function addTaskToGroup(groupName,task){
   array=window[groupName]
   array.push(task)
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

/***/ "./src/domscripts/removeGroup.js":
/*!***************************************!*\
  !*** ./src/domscripts/removeGroup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeGroup": () => (/* binding */ removeGroup)
/* harmony export */ });
function removeGroup(groupName){
     groupName = groupName.charAt(0).toLowerCase() + groupName.slice(1);
    // function to exectue removal from offline storage
    let ln=localStorage.length
    for(let i=0;i<ln;i++){//to find and rmeove item from local storage
        if(localStorage.key(i)==groupName){
            let key=localStorage.key(i)
            localStorage.removeItem(key)
        }
    }
    //remove element from html 
    let group=document.querySelector('.'+groupName)
    group.style.opacity="0"
    setTimeout(() => {
        group.remove()
    }, 500);
    location.reload()//so that array gets deleted too
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

/***/ "./src/logic/canceltask.js":
/*!*********************************!*\
  !*** ./src/logic/canceltask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelTask": () => (/* binding */ cancelTask)
/* harmony export */ });
/* harmony import */ var _closeform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeform */ "./src/logic/closeform.js");


function cancelTask(){
    const taskForm=document.querySelector('.add-task-form')
    taskForm.style.backgroundColor="red"
    document.querySelector('.notes-input').value=""
    document.querySelector('.date-selector').value=""
    taskForm.style.opacity="0"
    setTimeout(() => {
        ;(0,_closeform__WEBPACK_IMPORTED_MODULE_0__.closeForm)()
    }, 800);
}



/***/ }),

/***/ "./src/logic/closeform.js":
/*!********************************!*\
  !*** ./src/logic/closeform.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm)
/* harmony export */ });
function closeForm(){
    const taskForm=document.querySelector('.add-task-form')
    document.querySelector('.due-date-button').classList.remove('hidden')
    document.querySelector('.date-selector').classList.add('hidden')
    document.querySelector('.notes-input').classList.add('hidden')
    document.querySelector('.add-note-button').classList.remove('hidden')
    document.querySelector('.task-name').value=""
    document.querySelector('.notes-input').value=""
    document.querySelector('.date-selector').value=""
    document.querySelector('.task-header').style.marginBottom="5px"
    taskForm.classList.add('hidden')
    taskForm.style.backgroundColor="rgba(0, 0, 0, 0.642)"
    
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

/***/ "./src/logic/inputcheck.js":
/*!*********************************!*\
  !*** ./src/logic/inputcheck.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputChecker": () => (/* binding */ inputChecker)
/* harmony export */ });
function inputChecker(classname){
    let value=document.querySelector(classname).value
    let length=document.querySelector(classname).value.length
    if(value!='' && length>3){
        return true
    }
    else{
        return false
    }
}



/***/ }),

/***/ "./src/logic/sendItem.js":
/*!*******************************!*\
  !*** ./src/logic/sendItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendItem": () => (/* binding */ sendItem)
/* harmony export */ });
function sendItem(array,group){//sets item to local storage
      localStorage.setItem(group, JSON.stringify(array));
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
/* harmony import */ var _domscripts_openForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domscripts/openForm */ "./src/domscripts/openForm.js");
/* harmony import */ var _logic_closeform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/closeform */ "./src/logic/closeform.js");
/* harmony import */ var _logic_canceltask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/canceltask */ "./src/logic/canceltask.js");
/* harmony import */ var _logic_duedate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/duedate */ "./src/logic/duedate.js");
/* harmony import */ var _logic_addnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/addnote */ "./src/logic/addnote.js");
/* harmony import */ var _logic_inputcheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/inputcheck */ "./src/logic/inputcheck.js");
/* harmony import */ var _domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domscripts/creategroupform */ "./src/domscripts/creategroupform.js");
/* harmony import */ var _logic_sendItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic/sendItem */ "./src/logic/sendItem.js");
//import functions here;











const taskForm=document.querySelector('.add-task-form')
const newNoted=document.querySelector(".add-note-button")
const newTaskBtn=document.querySelector('.add-task-button')
const cancelTaskBtn=document.querySelector('.cancel-task')
const addTaskBtn=document.querySelector('.add-task')
const dueDateBtn=document.querySelector('.due-date-button')
//input declarations
let taskName
let notes
let taskDate
let taskNumber
let duedate
 



class task{
    constructor(taskNumber,taskName,notes,duedate){
    this.taskNumber=taskNumber
    this.taskName=taskName
    this.notes=notes
    this.duedate=duedate
    }
}

newTaskBtn.addEventListener('click',()=>{
   (0,_domscripts_openForm__WEBPACK_IMPORTED_MODULE_0__.openNewForm)()
})

dueDateBtn.addEventListener('click',()=>{
   ;(0,_logic_duedate__WEBPACK_IMPORTED_MODULE_3__.dateSelector)()
})

newNoted.addEventListener('click',()=>{
    ;(0,_logic_addnote__WEBPACK_IMPORTED_MODULE_4__.addNotes)()
})

cancelTaskBtn.addEventListener('click', ()=>{
    ;(0,_logic_canceltask__WEBPACK_IMPORTED_MODULE_2__.cancelTask)()
})

addTaskBtn.addEventListener('click',()=>{
    addTask()
})



//create new group
const addGroupBtn=document.querySelector('.add-group-btn')
addGroupBtn.addEventListener('click',()=>{
    ;(0,_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.createGroupForm)()
})

setInterval(() => {
    console.log(_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.groupSelected)
}, 300);
//

//<----------------Create new task Functions --------------->


function addTask(){
    if ((0,_logic_inputcheck__WEBPACK_IMPORTED_MODULE_5__.inputChecker)('.task-name')==true){
    //extra animation effects
    taskForm.style.backgroundColor="#7dd777"
    taskForm.style.opacity="0"
    captureInfo()
    setTimeout(() => {
        ;(0,_logic_closeform__WEBPACK_IMPORTED_MODULE_1__.closeForm)()
    }, 800);
}
else if ((0,_logic_inputcheck__WEBPACK_IMPORTED_MODULE_5__.inputChecker)('.task-name')==false){
    alert('Please Enter A Valid Class Name 👀')
}
}

function captureInfo(){
    taskName=document.querySelector('.task-name').value
    notes=document.querySelector('.notes-input').value
    if(notes==''){
        notes="None"
    }
    taskDate=document.querySelector('.date-selector').value
    createTask(_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.groupSelected)
}

let Task
function createTask(groupSelected){
    taskNumber=window[groupSelected].length+2
    if(taskNumber==2){
        taskNumber=1
    }
     Task = new task(taskNumber,taskName,notes,duedate)
     window[groupSelected].push(Task)

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxpRUFBVztBQUNkLENBQUM7O0FBRUQ7QUFDQSxHQUFHLDZEQUFZO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBLElBQUkseURBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0EsSUFBSSw4REFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFlO0FBQ25CLENBQUM7O0FBRUQ7QUFDQSxnQkFBZ0Isc0VBQWE7QUFDN0IsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTtBQUNBLFFBQVEsK0RBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVM7QUFDakIsS0FBSztBQUNMO0FBQ0EsU0FBUywrREFBWTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNFQUFhO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9vcGVuRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvcmVtb3ZlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9hZGRub3RlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2FuY2VsdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Nsb3NlZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2R1ZWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9pbnB1dGNoZWNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvc2VuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5wdXRDaGVja2VyIH0gZnJvbSAnLi4vbG9naWMvaW5wdXRjaGVjaydcbmltcG9ydCB7IHNlbmRJdGVtIH0gZnJvbSAnLi4vbG9naWMvc2VuZEl0ZW0nXG5pbXBvcnQgeyByZW1vdmVHcm91cCB9IGZyb20gJy4vcmVtb3ZlR3JvdXAnXG5cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBGb3JtKCl7XG4gICAgY29uc3Qgc2lkZWJhcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGNsb3NlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNvbnN0IGFkZEdyb3VwQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXG5cbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb3VwLWZvcm0tY29udGFpbmVyJylcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLndpZHRoPVwiMTMwJVwiXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZ3JvdXAtbmFtZS1pbnB1dCcpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWdyb3VwZm9ybS1idG4nKVxuICAgIGNsb3NlQnRuLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIlxuICAgIGNsb3NlQnRuLnRleHRDb250ZW50PVwiY2xvc2VcIlxuICAgIGNsb3NlQnRuLm9ubW91c2VvdmVyPVwiY29sb3I6IGJsYWNrO1wiXG4gICAgYWRkR3JvdXBCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIGFkZEdyb3VwQnRuLmNsYXNzTGlzdC5hZGQoJ2dycGZvcm1hZGQnKVxuICAgIGFkZEdyb3VwQnRuLnRleHRDb250ZW50PVwiYWRkXCJcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXI9XCJub25lXCJcbiAgICBpbnB1dC5zdHlsZS5mb250RmFtaWx5PVwicm9ib3RvIGNvbmRlbnNlZFwiXG4gICAgaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwieWVsbG93Z3JlZW5cIlxuICAgIGlucHV0LnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40c1wiXG4gICAgY29uc3QgZG90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgaW5wdXQuc2l6ZT1cIjE1XCJcbiAgICBpbnB1dC5mb250U2l6ZT0oXCIyNHB4XCIpXG4gICAgXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUub3BhY2l0eT1cIjFcIlxuICAgIH0sIDEwMCk7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlR3JvdXBGb3JtKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZG90KVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRHcm91cEJ0bilcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGlmKGNvbmZpcm0oJ0FyZSB5b3UgU3VyZSBZb3UgV2FudCBUbyBDYW5jZWw/Jyk9PXRydWUpe1xuICAgICAgICAgICAgY2xvc2VHcm91cEZvcm0oKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkSW5mbylcbn1cbmZ1bmN0aW9uIGNsb3NlR3JvdXBGb3JtKCl7XG4gICAgY29uc3QgZ3JvdXBGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1mb3JtLWNvbnRhaW5lcicpXG4gICAgZ3JvdXBGb3JtLnN0eWxlLm9wYWNpdHk9JzAnXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGdyb3VwRm9ybS5yZW1vdmUoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVHcm91cEZvcm0pXG4gICAgfSwgNTAwKTtcbn1cblxuLy9mdW5jdGlvbnMgdG8gZXhlY3V0ZSBhZnRlciBhZGQgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWRcblxuZnVuY3Rpb24gYWRkSW5mbygpe1xuICAgIGxldCBpbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtbmFtZS1pbnB1dCcpXG4gICAgLy9pZihpbnB1dENoZWNrZXIoJy5ncm91cC1uYW1lLWlucHV0Jyk9PXRydWUpe1xuICAgICAgLy8gIGNsb3NlR3JvdXBGb3JtKClcbiAgICAgICAvLyBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjMTFmZjAwXCJcbiAgICAvL31cbiAgICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiIzExZmYwMFwiXG4gICAgbGV0IGdyb3VwTmFtZT1pbnB1dC52YWx1ZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjcmVhdGVHcm91cEVsZW1lbnQoZ3JvdXBOYW1lKVxuICAgIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwQXJyYXkoZ3JvdXBOYW1lKXtcbiAgICB3aW5kb3dbZ3JvdXBOYW1lXT0gbmV3IEFycmF5KClcbiAgICB3aW5kb3dbZ3JvdXBOYW1lXT0oe3Rhc2tOYW1lOiBcImNvbXBsZXRlIGNob3JlXCIsZGF0ZUR1ZTpcIk5hblwifSlcbiAgICBzZW5kSXRlbSh3aW5kb3dbZ3JvdXBOYW1lXSxncm91cE5hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwRWxlbWVudChncm91cE5hbWUpe1xuICAgIGNvbnN0IGZvcm1Db250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGxldCBjb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvdXAtY29udGFpbmVyJylcblxuICAgIC8vY3JlYXRlIGdyb3VwIGVsZW1lbnQgYW5kIGFzc2lnbiBpdCBhIHRpdGxlIG51bWJlclxuICAgIGxldCBncm91cFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZ3JvdXBUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgY29uc3Qgc3RyMiA9IGdyb3VwTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwTmFtZS5zbGljZSgxKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChncm91cE5hbWUpLy9mb3IgaW5kZW50aWZpY2F0aW9uIHdoZW4gZGVsZXRlaW5nIGVsbWVudFxuICAgIGdyb3VwVGl0bGUudGV4dENvbnRlbnQ9IHN0cjJcblxuICAgIC8vU3Bhd24gRG90IGZvciB0aXRsZVxuICAgIGNvbnN0IGRvdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90JylcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuXG4gICAgLy9jcmVhdGUgY2xvc2UgYnV0dG9uXG4gICAgbGV0IGNsb3NlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1ncm91cC1idG4nKVxuICAgIGNsb3NlQnRuLnRleHRDb250ZW50PSgnY2xvc2UnKVxuXG4gICAgLy90aXRsZSBhbmQgZG90IGNvbnRhaW5lclxuICAgIGxldCB0aXRsZURvdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlRG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRvdC1jb250YWluZXInKVxuICAgIHRpdGxlRG90LmFwcGVuZENoaWxkKGRvdClcbiAgICB0aXRsZURvdC5hcHBlbmRDaGlsZChncm91cFRpdGxlKVxuXG4gICAgLy9hZGQgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZWlyIG9yZGVyLCB0byB0aGUgY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRG90KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgaWYoY29uZmlybShcIkFyZSBZb3UgU3VyZSBZb3UgV2FudCB0byBEZWxldGUgVGhlIFwiK2dyb3VwVGl0bGUudGV4dENvbnRlbnQrXCIgR3JvdXA/XCIpPT10cnVlKXtcbiAgICAgICAgICAgIGxldCBuYW1lPWdyb3VwVGl0bGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHJlbW92ZUdyb3VwKG5hbWUpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vY3JlYXRlIGFycmF5XG4gICAgY3JlYXRlR3JvdXBBcnJheShncm91cE5hbWUpXG4gICAgZ3JvdXBTZWxlY3Rpb24oKVxuICAgIGdyb3VwU2VsZWN0b3IoKVxufVxubGV0IGdyb3VwU2VsZWN0ZWRcbmZ1bmN0aW9uIGdyb3VwU2VsZWN0b3IoKXtcbiAgICBsZXQgZ3JvdXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJylcbiAgICBncm91cC5mb3JFYWNoKHRpdGxlPT57XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgbGV0IGdyb3VwbmFtZT10aXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgZ3JvdXBuYW1lPSBncm91cG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBncm91cG5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICBncm91cFNlbGVjdGVkPWdyb3VwbmFtZVxuICAgICAgICAgfSlcbiAgICB9KVxufVxuZ3JvdXBTZWxlY3RvcigpXG5mdW5jdGlvbiBncm91cFNlbGVjdGlvbigpe1xuICAgIGNvbnN0IGdyb3Vwcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKVxuICAgIGdyb3Vwcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT57Z3JvdXAuc3R5bGUuY29sb3I9XCJibGFja1wifSkvL3RvIHJlc2V0IHNlbGVjdGVkIGdyb3VwLCBpZiBhbnlcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuY29sb3I9XCJ5ZWxsb3dncmVlblwiXG4gICAgICAgICAgICBncm91cFNlbGVjdG9yKGl0ZW0pXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0dyb3VwKGdyb3VwTmFtZSx0YXNrKXtcbiAgIGFycmF5PXdpbmRvd1tncm91cE5hbWVdXG4gICBhcnJheS5wdXNoKHRhc2spXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUdyb3VwRm9ybSxjbG9zZUdyb3VwRm9ybSxhZGRJbmZvLGdyb3VwU2VsZWN0ZWQgfSIsImZ1bmN0aW9uIG9wZW5OZXdGb3JtKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT0nOCUnXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB0YXNrRm9ybS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDFzXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT0nMSdcbiAgICB9LCA5MDApO1xufVxuXG5leHBvcnQgeyBvcGVuTmV3Rm9ybSB9IiwiZnVuY3Rpb24gcmVtb3ZlR3JvdXAoZ3JvdXBOYW1lKXtcbiAgICAgZ3JvdXBOYW1lID0gZ3JvdXBOYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZ3JvdXBOYW1lLnNsaWNlKDEpO1xuICAgIC8vIGZ1bmN0aW9uIHRvIGV4ZWN0dWUgcmVtb3ZhbCBmcm9tIG9mZmxpbmUgc3RvcmFnZVxuICAgIGxldCBsbj1sb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgZm9yKGxldCBpPTA7aTxsbjtpKyspey8vdG8gZmluZCBhbmQgcm1lb3ZlIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5rZXkoaSk9PWdyb3VwTmFtZSl7XG4gICAgICAgICAgICBsZXQga2V5PWxvY2FsU3RvcmFnZS5rZXkoaSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JlbW92ZSBlbGVtZW50IGZyb20gaHRtbCBcbiAgICBsZXQgZ3JvdXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrZ3JvdXBOYW1lKVxuICAgIGdyb3VwLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXAucmVtb3ZlKClcbiAgICB9LCA1MDApO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpLy9zbyB0aGF0IGFycmF5IGdldHMgZGVsZXRlZCB0b29cbn1cblxuZXhwb3J0IHsgcmVtb3ZlR3JvdXAgfSIsImZ1bmN0aW9uIGFkZE5vdGVzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZXhwb3J0IHsgYWRkTm90ZXMgfSIsImltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vY2xvc2Vmb3JtJ1xuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJlZFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWU9XCJcIlxuICAgIHRhc2tGb3JtLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICB9LCA4MDApO1xufVxuXG5leHBvcnQge2NhbmNlbFRhc2t9IiwiZnVuY3Rpb24gY2xvc2VGb3JtKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjVweFwiXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsIDAsIDAsIDAuNjQyKVwiXG4gICAgXG59XG5cbmV4cG9ydCB7IGNsb3NlRm9ybSB9IiwiZnVuY3Rpb24gZGF0ZVNlbGVjdG9yKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBkYXRlU2VsZWN0b3IgfSAiLCJmdW5jdGlvbiBpbnB1dENoZWNrZXIoY2xhc3NuYW1lKXtcbiAgICBsZXQgdmFsdWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc25hbWUpLnZhbHVlXG4gICAgbGV0IGxlbmd0aD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWUubGVuZ3RoXG4gICAgaWYodmFsdWUhPScnICYmIGxlbmd0aD4zKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgeyBpbnB1dENoZWNrZXIgfSIsImZ1bmN0aW9uIHNlbmRJdGVtKGFycmF5LGdyb3VwKXsvL3NldHMgaXRlbSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShncm91cCwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbn1cbiBcbmV4cG9ydCB7IHNlbmRJdGVtIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IGZ1bmN0aW9ucyBoZXJlO1xuaW1wb3J0IHsgb3Blbk5ld0Zvcm0gfSBmcm9tICcuL2RvbXNjcmlwdHMvb3BlbkZvcm0nXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL2xvZ2ljL2Nsb3NlZm9ybSdcbmltcG9ydCB7IGNhbmNlbFRhc2sgfSBmcm9tICcuL2xvZ2ljL2NhbmNlbHRhc2snXG5pbXBvcnQgeyBkYXRlU2VsZWN0b3IgfSBmcm9tICcuL2xvZ2ljL2R1ZWRhdGUnXG5pbXBvcnQgeyBhZGROb3RlcyB9IGZyb20gJy4vbG9naWMvYWRkbm90ZSdcbmltcG9ydCB7IGlucHV0Q2hlY2tlciB9IGZyb20gJy4vbG9naWMvaW5wdXRjaGVjaydcbmltcG9ydCB7IGZvcm1hdCxwYXJzZUlTTyxzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBjcmVhdGVHcm91cEZvcm0sIGNsb3NlR3JvdXBGb3JtIH0gZnJvbSAnLi9kb21zY3JpcHRzL2NyZWF0ZWdyb3VwZm9ybSdcbmltcG9ydCB7IHNlbmRJdGVtIH0gZnJvbSAnLi9sb2dpYy9zZW5kSXRlbSdcbmltcG9ydCB7IGdyb3VwU2VsZWN0ZWQgfSBmcm9tICcuL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtJ1xuXG5jb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG5jb25zdCBuZXdOb3RlZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlLWJ1dHRvblwiKVxuY29uc3QgbmV3VGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJylcbmNvbnN0IGNhbmNlbFRhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10YXNrJylcbmNvbnN0IGFkZFRhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJylcbmNvbnN0IGR1ZURhdGVCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpXG4vL2lucHV0IGRlY2xhcmF0aW9uc1xubGV0IHRhc2tOYW1lXG5sZXQgbm90ZXNcbmxldCB0YXNrRGF0ZVxubGV0IHRhc2tOdW1iZXJcbmxldCBkdWVkYXRlXG4gXG5cblxuXG5jbGFzcyB0YXNre1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOdW1iZXIsdGFza05hbWUsbm90ZXMsZHVlZGF0ZSl7XG4gICAgdGhpcy50YXNrTnVtYmVyPXRhc2tOdW1iZXJcbiAgICB0aGlzLnRhc2tOYW1lPXRhc2tOYW1lXG4gICAgdGhpcy5ub3Rlcz1ub3Rlc1xuICAgIHRoaXMuZHVlZGF0ZT1kdWVkYXRlXG4gICAgfVxufVxuXG5uZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgb3Blbk5ld0Zvcm0oKVxufSlcblxuZHVlRGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgIGRhdGVTZWxlY3RvcigpXG59KVxuXG5uZXdOb3RlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBhZGROb3RlcygpXG59KVxuXG5jYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjYW5jZWxUYXNrKClcbn0pXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgYWRkVGFzaygpXG59KVxuXG5cblxuLy9jcmVhdGUgbmV3IGdyb3VwXG5jb25zdCBhZGRHcm91cEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpXG5hZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBjcmVhdGVHcm91cEZvcm0oKVxufSlcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGdyb3VwU2VsZWN0ZWQpXG59LCAzMDApO1xuLy9cblxuLy88LS0tLS0tLS0tLS0tLS0tLUNyZWF0ZSBuZXcgdGFzayBGdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tPlxuXG5cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBpZiAoaW5wdXRDaGVja2VyKCcudGFzay1uYW1lJyk9PXRydWUpe1xuICAgIC8vZXh0cmEgYW5pbWF0aW9uIGVmZmVjdHNcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjN2RkNzc3XCJcbiAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgY2FwdHVyZUluZm8oKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZUZvcm0oKVxuICAgIH0sIDgwMCk7XG59XG5lbHNlIGlmIChpbnB1dENoZWNrZXIoJy50YXNrLW5hbWUnKT09ZmFsc2Upe1xuICAgIGFsZXJ0KCdQbGVhc2UgRW50ZXIgQSBWYWxpZCBDbGFzcyBOYW1lIPCfkYAnKVxufVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlSW5mbygpe1xuICAgIHRhc2tOYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZVxuICAgIG5vdGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlXG4gICAgaWYobm90ZXM9PScnKXtcbiAgICAgICAgbm90ZXM9XCJOb25lXCJcbiAgICB9XG4gICAgdGFza0RhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZVxuICAgIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZClcbn1cblxubGV0IFRhc2tcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZCl7XG4gICAgdGFza051bWJlcj13aW5kb3dbZ3JvdXBTZWxlY3RlZF0ubGVuZ3RoKzJcbiAgICBpZih0YXNrTnVtYmVyPT0yKXtcbiAgICAgICAgdGFza051bWJlcj0xXG4gICAgfVxuICAgICBUYXNrID0gbmV3IHRhc2sodGFza051bWJlcix0YXNrTmFtZSxub3RlcyxkdWVkYXRlKVxuICAgICB3aW5kb3dbZ3JvdXBTZWxlY3RlZF0ucHVzaChUYXNrKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=