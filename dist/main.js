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
function groupSelector(){//checks which group is currently selected
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

//<--------------on start functions here------------>

function pageLoad(){//gets groups from localstorage and creates new arrays
     let ln=localStorage.length
     let groupName
     for(let i=0;i<ln;i++){
         groupName=localStorage.key(i)
         console.log(groupName)
         let array=window[groupName]=new Array()//create array for each group stored in local storge
         let tasks=JSON.parse(localStorage.getItem(groupName))//to get tasks for particular group
         array.push(tasks)
         console.log(array)
     }  
}
pageLoad()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLGlFQUFXO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBLEdBQUcsNkRBQVk7QUFDZixDQUFDOztBQUVEO0FBQ0EsSUFBSSx5REFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDhEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQWU7QUFDbkIsQ0FBQzs7O0FBR0Q7OztBQUdBO0FBQ0EsUUFBUSwrREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQSxTQUFTLCtEQUFZO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0VBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21zY3JpcHRzL29wZW5Gb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9yZW1vdmVHcm91cC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2FkZG5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9jYW5jZWx0YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2xvc2Vmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvZHVlZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2lucHV0Y2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9zZW5kSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnB1dENoZWNrZXIgfSBmcm9tICcuLi9sb2dpYy9pbnB1dGNoZWNrJ1xuaW1wb3J0IHsgc2VuZEl0ZW0gfSBmcm9tICcuLi9sb2dpYy9zZW5kSXRlbSdcbmltcG9ydCB7IHJlbW92ZUdyb3VwIH0gZnJvbSAnLi9yZW1vdmVHcm91cCdcblxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cEZvcm0oKXtcbiAgICBjb25zdCBzaWRlYmFyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgY29uc3QgY2xvc2VCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgYWRkR3JvdXBCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIilcblxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvdXAtZm9ybS1jb250YWluZXInKVxuICAgIGZvcm1Db250YWluZXIuc3R5bGUud2lkdGg9XCIxMzAlXCJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdncm91cC1uYW1lLWlucHV0JylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZ3JvdXBmb3JtLWJ0bicpXG4gICAgY2xvc2VCdG4uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQ9XCJjbG9zZVwiXG4gICAgY2xvc2VCdG4ub25tb3VzZW92ZXI9XCJjb2xvcjogYmxhY2s7XCJcbiAgICBhZGRHcm91cEJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gICAgYWRkR3JvdXBCdG4uY2xhc3NMaXN0LmFkZCgnZ3JwZm9ybWFkZCcpXG4gICAgYWRkR3JvdXBCdG4udGV4dENvbnRlbnQ9XCJhZGRcIlxuICAgIGlucHV0LnN0eWxlLmJvcmRlcj1cIm5vbmVcIlxuICAgIGlucHV0LnN0eWxlLmZvbnRGYW1pbHk9XCJyb2JvdG8gY29uZGVuc2VkXCJcbiAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ5ZWxsb3dncmVlblwiXG4gICAgaW5wdXQuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjRzXCJcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBpbnB1dC5zaXplPVwiMTVcIlxuICAgIGlucHV0LmZvbnRTaXplPShcIjI0cHhcIilcbiAgICBcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PVwiMVwiXG4gICAgfSwgMTAwKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVHcm91cEZvcm0pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3QpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEdyb3VwQnRuKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYoY29uZmlybSgnQXJlIHlvdSBTdXJlIFlvdSBXYW50IFRvIENhbmNlbD8nKT09dHJ1ZSl7XG4gICAgICAgICAgICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRJbmZvKVxufVxuZnVuY3Rpb24gY2xvc2VHcm91cEZvcm0oKXtcbiAgICBjb25zdCBncm91cEZvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLWZvcm0tY29udGFpbmVyJylcbiAgICBncm91cEZvcm0uc3R5bGUub3BhY2l0eT0nMCdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXBGb3JtLnJlbW92ZSgpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUdyb3VwRm9ybSlcbiAgICB9LCA1MDApO1xufVxuXG4vL2Z1bmN0aW9ucyB0byBleGVjdXRlIGFmdGVyIGFkZCBidXR0b24gaGFzIGJlZW4gcHJlc3NlZFxuXG5mdW5jdGlvbiBhZGRJbmZvKCl7XG4gICAgbGV0IGlucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1uYW1lLWlucHV0JylcbiAgICAvL2lmKGlucHV0Q2hlY2tlcignLmdyb3VwLW5hbWUtaW5wdXQnKT09dHJ1ZSl7XG4gICAgICAvLyAgY2xvc2VHcm91cEZvcm0oKVxuICAgICAgIC8vIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiMxMWZmMDBcIlxuICAgIC8vfVxuICAgIGNsb3NlR3JvdXBGb3JtKClcbiAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjMTFmZjAwXCJcbiAgICBsZXQgZ3JvdXBOYW1lPWlucHV0LnZhbHVlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUdyb3VwRWxlbWVudChncm91cE5hbWUpXG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBBcnJheShncm91cE5hbWUpe1xuICAgIHdpbmRvd1tncm91cE5hbWVdPSBuZXcgQXJyYXkoKVxuICAgIHdpbmRvd1tncm91cE5hbWVdPSh7dGFza05hbWU6IFwiY29tcGxldGUgY2hvcmVcIixkYXRlRHVlOlwiTmFuXCJ9KVxuICAgIHNlbmRJdGVtKHdpbmRvd1tncm91cE5hbWVdLGdyb3VwTmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSl7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG4gICAgbGV0IGNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm91cC1jb250YWluZXInKVxuXG4gICAgLy9jcmVhdGUgZ3JvdXAgZWxlbWVudCBhbmQgYXNzaWduIGl0IGEgdGl0bGUgbnVtYmVyXG4gICAgbGV0IGdyb3VwVGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBncm91cFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBjb25zdCBzdHIyID0gZ3JvdXBOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZ3JvdXBOYW1lLnNsaWNlKDEpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGdyb3VwTmFtZSkvL2ZvciBpbmRlbnRpZmljYXRpb24gd2hlbiBkZWxldGVpbmcgZWxtZW50XG4gICAgZ3JvdXBUaXRsZS50ZXh0Q29udGVudD0gc3RyMlxuXG4gICAgLy9TcGF3biBEb3QgZm9yIHRpdGxlXG4gICAgY29uc3QgZG90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICAvL2NyZWF0ZSBjbG9zZSBidXR0b25cbiAgICBsZXQgY2xvc2VCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWdyb3VwLWJ0bicpXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQ9KCdjbG9zZScpXG5cbiAgICAvL3RpdGxlIGFuZCBkb3QgY29udGFpbmVyXG4gICAgbGV0IHRpdGxlRG90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGVEb3QuY2xhc3NMaXN0LmFkZCgndGl0bGUtZG90LWNvbnRhaW5lcicpXG4gICAgdGl0bGVEb3QuYXBwZW5kQ2hpbGQoZG90KVxuICAgIHRpdGxlRG90LmFwcGVuZENoaWxkKGdyb3VwVGl0bGUpXG5cbiAgICAvL2FkZCBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlaXIgb3JkZXIsIHRvIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEb3QpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBpZihjb25maXJtKFwiQXJlIFlvdSBTdXJlIFlvdSBXYW50IHRvIERlbGV0ZSBUaGUgXCIrZ3JvdXBUaXRsZS50ZXh0Q29udGVudCtcIiBHcm91cD9cIik9PXRydWUpe1xuICAgICAgICAgICAgbGV0IG5hbWU9Z3JvdXBUaXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgcmVtb3ZlR3JvdXAobmFtZSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9jcmVhdGUgYXJyYXlcbiAgICBjcmVhdGVHcm91cEFycmF5KGdyb3VwTmFtZSlcbiAgICBncm91cFNlbGVjdGlvbigpXG4gICAgZ3JvdXBTZWxlY3RvcigpXG59XG5sZXQgZ3JvdXBTZWxlY3RlZFxuZnVuY3Rpb24gZ3JvdXBTZWxlY3Rvcigpey8vY2hlY2tzIHdoaWNoIGdyb3VwIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKVxuICAgIGdyb3VwLmZvckVhY2godGl0bGU9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgZ3JvdXBuYW1lPXRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICBncm91cG5hbWU9IGdyb3VwbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGdyb3VwbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0ZWQ9Z3JvdXBuYW1lXG4gICAgICAgICB9KVxuICAgIH0pXG59XG5ncm91cFNlbGVjdG9yKClcbmZ1bmN0aW9uIGdyb3VwU2VsZWN0aW9uKCl7XG4gICAgY29uc3QgZ3JvdXBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpXG4gICAgZ3JvdXBzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChncm91cCA9Pntncm91cC5zdHlsZS5jb2xvcj1cImJsYWNrXCJ9KS8vdG8gcmVzZXQgc2VsZWN0ZWQgZ3JvdXAsIGlmIGFueVxuICAgICAgICAgICAgaXRlbS5zdHlsZS5jb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0b3IoaXRlbSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIH1cblxuZnVuY3Rpb24gYWRkVGFza1RvR3JvdXAoZ3JvdXBOYW1lLHRhc2spe1xuICAgYXJyYXk9d2luZG93W2dyb3VwTmFtZV1cbiAgIGFycmF5LnB1c2godGFzaylcbn1cblxuZXhwb3J0IHsgY3JlYXRlR3JvdXBGb3JtLGNsb3NlR3JvdXBGb3JtLGFkZEluZm8sZ3JvdXBTZWxlY3RlZCB9IiwiZnVuY3Rpb24gb3Blbk5ld0Zvcm0oKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tPSc4JSdcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHRhc2tGb3JtLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMXNcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PScxJ1xuICAgIH0sIDkwMCk7XG59XG5cbmV4cG9ydCB7IG9wZW5OZXdGb3JtIH0iLCJmdW5jdGlvbiByZW1vdmVHcm91cChncm91cE5hbWUpe1xuICAgICBncm91cE5hbWUgPSBncm91cE5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSk7XG4gICAgLy8gZnVuY3Rpb24gdG8gZXhlY3R1ZSByZW1vdmFsIGZyb20gb2ZmbGluZSBzdG9yYWdlXG4gICAgbGV0IGxuPWxvY2FsU3RvcmFnZS5sZW5ndGhcbiAgICBmb3IobGV0IGk9MDtpPGxuO2krKyl7Ly90byBmaW5kIGFuZCBybWVvdmUgaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmtleShpKT09Z3JvdXBOYW1lKXtcbiAgICAgICAgICAgIGxldCBrZXk9bG9jYWxTdG9yYWdlLmtleShpKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vcmVtb3ZlIGVsZW1lbnQgZnJvbSBodG1sIFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJytncm91cE5hbWUpXG4gICAgZ3JvdXAuc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBncm91cC5yZW1vdmUoKVxuICAgIH0sIDUwMCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCkvL3NvIHRoYXQgYXJyYXkgZ2V0cyBkZWxldGVkIHRvb1xufVxuXG5leHBvcnQgeyByZW1vdmVHcm91cCB9IiwiZnVuY3Rpb24gYWRkTm90ZXMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBhZGROb3RlcyB9IiwiaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9jbG9zZWZvcm0nXG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2soKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmVkXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZUZvcm0oKVxuICAgIH0sIDgwMCk7XG59XG5cbmV4cG9ydCB7Y2FuY2VsVGFza30iLCJmdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tPVwiNXB4XCJcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwgMCwgMCwgMC42NDIpXCJcbiAgICBcbn1cblxuZXhwb3J0IHsgY2xvc2VGb3JtIH0iLCJmdW5jdGlvbiBkYXRlU2VsZWN0b3IoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IGRhdGVTZWxlY3RvciB9ICIsImZ1bmN0aW9uIGlucHV0Q2hlY2tlcihjbGFzc25hbWUpe1xuICAgIGxldCB2YWx1ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWVcbiAgICBsZXQgbGVuZ3RoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NuYW1lKS52YWx1ZS5sZW5ndGhcbiAgICBpZih2YWx1ZSE9JycgJiYgbGVuZ3RoPjMpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCB7IGlucHV0Q2hlY2tlciB9IiwiZnVuY3Rpb24gc2VuZEl0ZW0oYXJyYXksZ3JvdXApey8vc2V0cyBpdGVtIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xufVxuIFxuZXhwb3J0IHsgc2VuZEl0ZW0gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgZnVuY3Rpb25zIGhlcmU7XG5pbXBvcnQgeyBvcGVuTmV3Rm9ybSB9IGZyb20gJy4vZG9tc2NyaXB0cy9vcGVuRm9ybSdcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vbG9naWMvY2xvc2Vmb3JtJ1xuaW1wb3J0IHsgY2FuY2VsVGFzayB9IGZyb20gJy4vbG9naWMvY2FuY2VsdGFzaydcbmltcG9ydCB7IGRhdGVTZWxlY3RvciB9IGZyb20gJy4vbG9naWMvZHVlZGF0ZSdcbmltcG9ydCB7IGFkZE5vdGVzIH0gZnJvbSAnLi9sb2dpYy9hZGRub3RlJ1xuaW1wb3J0IHsgaW5wdXRDaGVja2VyIH0gZnJvbSAnLi9sb2dpYy9pbnB1dGNoZWNrJ1xuaW1wb3J0IHsgZm9ybWF0LHBhcnNlSVNPLHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IGNyZWF0ZUdyb3VwRm9ybSwgY2xvc2VHcm91cEZvcm0gfSBmcm9tICcuL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtJ1xuaW1wb3J0IHsgc2VuZEl0ZW0gfSBmcm9tICcuL2xvZ2ljL3NlbmRJdGVtJ1xuaW1wb3J0IHsgZ3JvdXBTZWxlY3RlZCB9IGZyb20gJy4vZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0nXG5cbmNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbmNvbnN0IG5ld05vdGVkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnV0dG9uXCIpXG5jb25zdCBuZXdUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKVxuY29uc3QgY2FuY2VsVGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXRhc2snKVxuY29uc3QgYWRkVGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuY29uc3QgZHVlRGF0ZUJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJylcbi8vaW5wdXQgZGVjbGFyYXRpb25zXG5sZXQgdGFza05hbWVcbmxldCBub3Rlc1xubGV0IHRhc2tEYXRlXG5sZXQgdGFza051bWJlclxubGV0IGR1ZWRhdGVcbiBcblxuXG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IodGFza051bWJlcix0YXNrTmFtZSxub3RlcyxkdWVkYXRlKXtcbiAgICB0aGlzLnRhc2tOdW1iZXI9dGFza051bWJlclxuICAgIHRoaXMudGFza05hbWU9dGFza05hbWVcbiAgICB0aGlzLm5vdGVzPW5vdGVzXG4gICAgdGhpcy5kdWVkYXRlPWR1ZWRhdGVcbiAgICB9XG59XG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBvcGVuTmV3Rm9ybSgpXG59KVxuXG5kdWVEYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgZGF0ZVNlbGVjdG9yKClcbn0pXG5cbm5ld05vdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFkZE5vdGVzKClcbn0pXG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNhbmNlbFRhc2soKVxufSlcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBhZGRUYXNrKClcbn0pXG5cblxuXG4vL2NyZWF0ZSBuZXcgZ3JvdXBcbmNvbnN0IGFkZEdyb3VwQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJylcbmFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNyZWF0ZUdyb3VwRm9ybSgpXG59KVxuXG5cbi8vPC0tLS0tLS0tLS0tLS0tLS1DcmVhdGUgbmV3IHRhc2sgRnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLT5cblxuXG5mdW5jdGlvbiBhZGRUYXNrKCl7XG4gICAgaWYgKGlucHV0Q2hlY2tlcignLnRhc2stbmFtZScpPT10cnVlKXtcbiAgICAvL2V4dHJhIGFuaW1hdGlvbiBlZmZlY3RzXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiIzdkZDc3N1wiXG4gICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIGNhcHR1cmVJbmZvKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICB9LCA4MDApO1xufVxuZWxzZSBpZiAoaW5wdXRDaGVja2VyKCcudGFzay1uYW1lJyk9PWZhbHNlKXtcbiAgICBhbGVydCgnUGxlYXNlIEVudGVyIEEgVmFsaWQgQ2xhc3MgTmFtZSDwn5GAJylcbn1cbn1cblxuZnVuY3Rpb24gY2FwdHVyZUluZm8oKXtcbiAgICB0YXNrTmFtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudmFsdWVcbiAgICBub3Rlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZVxuICAgIGlmKG5vdGVzPT0nJyl7XG4gICAgICAgIG5vdGVzPVwiTm9uZVwiXG4gICAgfVxuICAgIHRhc2tEYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWVcbiAgICBjcmVhdGVUYXNrKGdyb3VwU2VsZWN0ZWQpXG59XG5cbmxldCBUYXNrXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGdyb3VwU2VsZWN0ZWQpe1xuICAgIHRhc2tOdW1iZXI9d2luZG93W2dyb3VwU2VsZWN0ZWRdLmxlbmd0aCsyXG4gICAgaWYodGFza051bWJlcj09Mil7XG4gICAgICAgIHRhc2tOdW1iZXI9MVxuICAgIH1cbiAgICAgVGFzayA9IG5ldyB0YXNrKHRhc2tOdW1iZXIsdGFza05hbWUsbm90ZXMsZHVlZGF0ZSlcbiAgICAgd2luZG93W2dyb3VwU2VsZWN0ZWRdLnB1c2goVGFzaylcblxufVxuXG4vLzwtLS0tLS0tLS0tLS0tLW9uIHN0YXJ0IGZ1bmN0aW9ucyBoZXJlLS0tLS0tLS0tLS0tPlxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpey8vZ2V0cyBncm91cHMgZnJvbSBsb2NhbHN0b3JhZ2UgYW5kIGNyZWF0ZXMgbmV3IGFycmF5c1xuICAgICBsZXQgbG49bG9jYWxTdG9yYWdlLmxlbmd0aFxuICAgICBsZXQgZ3JvdXBOYW1lXG4gICAgIGZvcihsZXQgaT0wO2k8bG47aSsrKXtcbiAgICAgICAgIGdyb3VwTmFtZT1sb2NhbFN0b3JhZ2Uua2V5KGkpXG4gICAgICAgICBjb25zb2xlLmxvZyhncm91cE5hbWUpXG4gICAgICAgICBsZXQgYXJyYXk9d2luZG93W2dyb3VwTmFtZV09bmV3IEFycmF5KCkvL2NyZWF0ZSBhcnJheSBmb3IgZWFjaCBncm91cCBzdG9yZWQgaW4gbG9jYWwgc3RvcmdlXG4gICAgICAgICBsZXQgdGFza3M9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpKS8vdG8gZ2V0IHRhc2tzIGZvciBwYXJ0aWN1bGFyIGdyb3VwXG4gICAgICAgICBhcnJheS5wdXNoKHRhc2tzKVxuICAgICAgICAgY29uc29sZS5sb2coYXJyYXkpXG4gICAgIH0gIFxufVxucGFnZUxvYWQoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9