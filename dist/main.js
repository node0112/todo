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
/* harmony export */   "createGroupElement": () => (/* binding */ createGroupElement),
/* harmony export */   "createGroupForm": () => (/* binding */ createGroupForm),
/* harmony export */   "groupSelected": () => (/* binding */ groupSelected)
/* harmony export */ });
/* harmony import */ var _logic_displaytasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/displaytasks */ "./src/logic/displaytasks.js");
/* harmony import */ var _logic_inputcheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/inputcheck */ "./src/logic/inputcheck.js");
/* harmony import */ var _logic_sendItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/sendItem */ "./src/logic/sendItem.js");
/* harmony import */ var _removeGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeGroup */ "./src/domscripts/removeGroup.js");






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
    input.type="text"
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
    ;(0,_logic_sendItem__WEBPACK_IMPORTED_MODULE_2__.sendItem)(window[groupName],groupName)
}

function createGroupElement(groupName){//creates new group element in sidebar
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
            ;(0,_removeGroup__WEBPACK_IMPORTED_MODULE_3__.removeGroup)(name)
        }
    })
    //create array
    createGroupArray(groupName)
    groupSelection()
    groupSelector()
    let grpTitle=document.querySelectorAll('.title') //this step is neccessary to build task nodes when the group is selected
    grpTitle.forEach(title =>{
        title.addEventListener('click',()=>{
               ;(0,_logic_displaytasks__WEBPACK_IMPORTED_MODULE_0__.clearTaskElements)()
               let name=title.textContent
               name=name.charAt(0).toLowerCase() + name.slice(1);
               (0,_logic_displaytasks__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(name)
        })
    })
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

/***/ "./src/logic/displaytasks.js":
/*!***********************************!*\
  !*** ./src/logic/displaytasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTaskElements": () => (/* binding */ clearTaskElements),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
function displayTasks(groupName){//function to clear tasks in view and create elements to show new tasks in group array
    let array=window[groupName]
    const ln=array.length
    for(let i=0;i<ln;i++){
        let name=array.taskName
        let number=array.taskNumber
        let note=array.notes
        let date=array.duedate
        console.log(name,number,note,date)
        createTaskElements(name,number,note,date)
    }
}

function createTaskElements(taskName,taskNumber,notes,duedate){//internal function DO NOT EXPORT!

    //initializing elements to create task in html
    const tasksWindow=document.querySelector('.tasks-window')//main element fo rchild nodes to be appended to
    let taskContainer=document.createElement('div')
    taskContainer.classList.add('task-container')

    let number=document.createElement('div') //create task elements
    let name=document.createElement('div')
    let note=document.createElement('div')
    let date=document.createElement('div')
    let done=document.createElement('i')

    number.classList.add('numb')
    name.classList.add('name')
    note.classList.add('note')
    date.classList.add('date')
    done.classList.add('material-icons')
    done.classList.add('task-done-button')
    done.style.fontSize="30px"

    //now we assign each task its values--->
    number.textContent=taskNumber
    name.textContent=taskName
    note.textContent=notes
    date.textContent=duedate

    taskContainer.appendChild(number)
    taskContainer.appendChild(name)
    taskContainer.appendChild(note)
    taskContainer.appendChild(date)
    taskContainer.appendChild(done)

    tasksWindow.appendChild(taskContainer)
    
    done.addEventListener('click',()=>{
        //function to remove task from array
        //function to remove task from local storage
        //add amount of tasks done for group and store in LS
    })
}

function clearTaskElements(){
    let taskElements=document.querySelectorAll('.task-container')
    taskElements.forEach(element=>{
        element.remove()
    })
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
/* harmony import */ var _logic_displaytasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logic/displaytasks */ "./src/logic/displaytasks.js");
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
    if ((0,_logic_inputcheck__WEBPACK_IMPORTED_MODULE_5__.inputChecker)('.task-name')==true && _domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.groupSelected!=null){
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
     let array=window[groupSelected]
     taskNumber=array.length+1
     Task = new task(taskNumber,taskName,notes,duedate)
     array.push(Task)
     console.log(array)
     let localArray=JSON.parse(localStorage.getItem(groupSelected) || '[]2')//gets item from LS
     localArray.push(Task)//push item to local array 
     console.log(localArray)
     localStorage.setItem(groupSelected,JSON.stringify(localArray))//push updated array back to ls
}

//<--------------on start functions here------------>

function pageLoad(){//gets groups from localstorage and creates new arrays
     let ln=localStorage.length
     let groupName
     if(localStorage.getItem("user")==null){
        localStorage.setItem("user",1)
        localStorage.setItem("chores",JSON.stringify([{taskNumber: 1, taskName: "Eat Moulded Cheese", notes: "fd", duedate: "none"},{taskNumber: 2, taskName: "Give doggo food", notes: "fd", duedate: "none"},{taskNumber: 3, taskName: "Wash your face silly!", notes: "fd", duedate: "none"}])) // default array
   }
     for(let i=0;i<ln;i++){
         groupName=localStorage.key(i)
         groupName=groupName.toString()
         if(groupName!="user"){
         window[groupName]= new Array()  //create array for each group stored in local storge
         let array=window[groupName]
         console.log(array)
         let tasks=JSON.parse(localStorage.getItem(groupName) || '[]')//to get tasks for particular group
         console.log(tasks)
         array.push(tasks)
         console.log(array)
         ;(0,_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.createGroupElement)(groupName)
         }
     }  
}


pageLoad()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw0RUFBNEUsRUFBRSx5RUFBeUUsRUFBRSwrRUFBK0U7QUFDL1I7QUFDQSxpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0ZBQWtCO0FBQzNCO0FBQ0E7QUFDQTs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9vcGVuRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvcmVtb3ZlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9hZGRub3RlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2FuY2VsdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Nsb3NlZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Rpc3BsYXl0YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2R1ZWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9pbnB1dGNoZWNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvc2VuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlYXJUYXNrRWxlbWVudHMsIGRpc3BsYXlUYXNrcyB9IGZyb20gJy4uL2xvZ2ljL2Rpc3BsYXl0YXNrcydcbmltcG9ydCB7IGlucHV0Q2hlY2tlciB9IGZyb20gJy4uL2xvZ2ljL2lucHV0Y2hlY2snXG5pbXBvcnQgeyBzZW5kSXRlbSB9IGZyb20gJy4uL2xvZ2ljL3NlbmRJdGVtJ1xuaW1wb3J0IHsgcmVtb3ZlR3JvdXAgfSBmcm9tICcuL3JlbW92ZUdyb3VwJ1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwRm9ybSgpe1xuICAgIGNvbnN0IHNpZGViYXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IGZvcm1Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBjb25zdCBjbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBhZGRHcm91cEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxuXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm91cC1mb3JtLWNvbnRhaW5lcicpXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS53aWR0aD1cIjEzMCVcIlxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwLW5hbWUtaW5wdXQnKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1ncm91cGZvcm0tYnRuJylcbiAgICBjbG9zZUJ0bi5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudD1cImNsb3NlXCJcbiAgICBjbG9zZUJ0bi5vbm1vdXNlb3Zlcj1cImNvbG9yOiBibGFjaztcIlxuICAgIGFkZEdyb3VwQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgICBhZGRHcm91cEJ0bi5jbGFzc0xpc3QuYWRkKCdncnBmb3JtYWRkJylcbiAgICBhZGRHcm91cEJ0bi50ZXh0Q29udGVudD1cImFkZFwiXG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyPVwibm9uZVwiXG4gICAgaW5wdXQuc3R5bGUuZm9udEZhbWlseT1cInJvYm90byBjb25kZW5zZWRcIlxuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICBpbnB1dC5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNHNcIlxuICAgIGlucHV0LnR5cGU9XCJ0ZXh0XCJcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBpbnB1dC5zaXplPVwiMTVcIlxuICAgIGlucHV0LmZvbnRTaXplPShcIjI0cHhcIilcbiAgICBcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PVwiMVwiXG4gICAgfSwgMTAwKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVHcm91cEZvcm0pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3QpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEdyb3VwQnRuKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYoY29uZmlybSgnQXJlIHlvdSBTdXJlIFlvdSBXYW50IFRvIENhbmNlbD8nKT09dHJ1ZSl7XG4gICAgICAgICAgICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRJbmZvKVxufVxuZnVuY3Rpb24gY2xvc2VHcm91cEZvcm0oKXtcbiAgICBjb25zdCBncm91cEZvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLWZvcm0tY29udGFpbmVyJylcbiAgICBncm91cEZvcm0uc3R5bGUub3BhY2l0eT0nMCdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXBGb3JtLnJlbW92ZSgpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUdyb3VwRm9ybSlcbiAgICB9LCA1MDApO1xufVxuXG4vL2Z1bmN0aW9ucyB0byBleGVjdXRlIGFmdGVyIGFkZCBidXR0b24gaGFzIGJlZW4gcHJlc3NlZFxuXG5mdW5jdGlvbiBhZGRJbmZvKCl7XG4gICAgbGV0IGlucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1uYW1lLWlucHV0JylcbiAgICAvL2lmKGlucHV0Q2hlY2tlcignLmdyb3VwLW5hbWUtaW5wdXQnKT09dHJ1ZSl7XG4gICAgICAvLyAgY2xvc2VHcm91cEZvcm0oKVxuICAgICAgIC8vIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiMxMWZmMDBcIlxuICAgIC8vfVxuICAgIGNsb3NlR3JvdXBGb3JtKClcbiAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjMTFmZjAwXCJcbiAgICBsZXQgZ3JvdXBOYW1lPWlucHV0LnZhbHVlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUdyb3VwRWxlbWVudChncm91cE5hbWUpXG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBBcnJheShncm91cE5hbWUpe1xuICAgIHdpbmRvd1tncm91cE5hbWVdPSBuZXcgQXJyYXkoKVxuICAgIHNlbmRJdGVtKHdpbmRvd1tncm91cE5hbWVdLGdyb3VwTmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSl7Ly9jcmVhdGVzIG5ldyBncm91cCBlbGVtZW50IGluIHNpZGViYXJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBsZXQgY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb3VwLWNvbnRhaW5lcicpXG5cbiAgICAvL2NyZWF0ZSBncm91cCBlbGVtZW50IGFuZCBhc3NpZ24gaXQgYSB0aXRsZSBudW1iZXJcbiAgICBsZXQgZ3JvdXBUaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGdyb3VwVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIGNvbnN0IHN0cjIgPSBncm91cE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZ3JvdXBOYW1lKS8vZm9yIGluZGVudGlmaWNhdGlvbiB3aGVuIGRlbGV0ZWluZyBlbG1lbnRcbiAgICBncm91cFRpdGxlLnRleHRDb250ZW50PSBzdHIyXG5cbiAgICAvL1NwYXduIERvdCBmb3IgdGl0bGVcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgIC8vY3JlYXRlIGNsb3NlIGJ1dHRvblxuICAgIGxldCBjbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZ3JvdXAtYnRuJylcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudD0oJ2Nsb3NlJylcblxuICAgIC8vdGl0bGUgYW5kIGRvdCBjb250YWluZXJcbiAgICBsZXQgdGl0bGVEb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kb3QtY29udGFpbmVyJylcbiAgICB0aXRsZURvdC5hcHBlbmRDaGlsZChkb3QpXG4gICAgdGl0bGVEb3QuYXBwZW5kQ2hpbGQoZ3JvdXBUaXRsZSlcblxuICAgIC8vYWRkIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGVpciBvcmRlciwgdG8gdGhlIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURvdClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmKGNvbmZpcm0oXCJBcmUgWW91IFN1cmUgWW91IFdhbnQgdG8gRGVsZXRlIFRoZSBcIitncm91cFRpdGxlLnRleHRDb250ZW50K1wiIEdyb3VwP1wiKT09dHJ1ZSl7XG4gICAgICAgICAgICBsZXQgbmFtZT1ncm91cFRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICByZW1vdmVHcm91cChuYW1lKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2NyZWF0ZSBhcnJheVxuICAgIGNyZWF0ZUdyb3VwQXJyYXkoZ3JvdXBOYW1lKVxuICAgIGdyb3VwU2VsZWN0aW9uKClcbiAgICBncm91cFNlbGVjdG9yKClcbiAgICBsZXQgZ3JwVGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJykgLy90aGlzIHN0ZXAgaXMgbmVjY2Vzc2FyeSB0byBidWlsZCB0YXNrIG5vZGVzIHdoZW4gdGhlIGdyb3VwIGlzIHNlbGVjdGVkXG4gICAgZ3JwVGl0bGUuZm9yRWFjaCh0aXRsZSA9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICBjbGVhclRhc2tFbGVtZW50cygpXG4gICAgICAgICAgICAgICBsZXQgbmFtZT10aXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgbmFtZT1uYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhuYW1lKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5sZXQgZ3JvdXBTZWxlY3RlZFxuZnVuY3Rpb24gZ3JvdXBTZWxlY3Rvcigpey8vY2hlY2tzIHdoaWNoIGdyb3VwIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKVxuICAgIGdyb3VwLmZvckVhY2godGl0bGU9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgZ3JvdXBuYW1lPXRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICBncm91cG5hbWU9IGdyb3VwbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGdyb3VwbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0ZWQ9Z3JvdXBuYW1lXG4gICAgICAgICB9KVxuICAgIH0pXG59XG5ncm91cFNlbGVjdG9yKClcbmZ1bmN0aW9uIGdyb3VwU2VsZWN0aW9uKCl7XG4gICAgY29uc3QgZ3JvdXBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpXG4gICAgZ3JvdXBzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChncm91cCA9Pntncm91cC5zdHlsZS5jb2xvcj1cImJsYWNrXCJ9KS8vdG8gcmVzZXQgc2VsZWN0ZWQgZ3JvdXAsIGlmIGFueVxuICAgICAgICAgICAgaXRlbS5zdHlsZS5jb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0b3IoaXRlbSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIH1cblxuZnVuY3Rpb24gYWRkVGFza1RvR3JvdXAoZ3JvdXBOYW1lLHRhc2spe1xuICAgYXJyYXk9d2luZG93W2dyb3VwTmFtZV1cbiAgIGFycmF5LnB1c2godGFzaylcbn1cblxuZXhwb3J0IHsgY3JlYXRlR3JvdXBGb3JtLGNsb3NlR3JvdXBGb3JtLGFkZEluZm8sZ3JvdXBTZWxlY3RlZCxjcmVhdGVHcm91cEVsZW1lbnQgfSIsImZ1bmN0aW9uIG9wZW5OZXdGb3JtKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT0nOCUnXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB0YXNrRm9ybS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDFzXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT0nMSdcbiAgICB9LCA5MDApO1xufVxuXG5leHBvcnQgeyBvcGVuTmV3Rm9ybSB9IiwiZnVuY3Rpb24gcmVtb3ZlR3JvdXAoZ3JvdXBOYW1lKXtcbiAgICAgZ3JvdXBOYW1lID0gZ3JvdXBOYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZ3JvdXBOYW1lLnNsaWNlKDEpO1xuICAgIC8vIGZ1bmN0aW9uIHRvIGV4ZWN0dWUgcmVtb3ZhbCBmcm9tIG9mZmxpbmUgc3RvcmFnZVxuICAgIGxldCBsbj1sb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgZm9yKGxldCBpPTA7aTxsbjtpKyspey8vdG8gZmluZCBhbmQgcm1lb3ZlIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5rZXkoaSk9PWdyb3VwTmFtZSl7XG4gICAgICAgICAgICBsZXQga2V5PWxvY2FsU3RvcmFnZS5rZXkoaSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JlbW92ZSBlbGVtZW50IGZyb20gaHRtbCBcbiAgICBsZXQgZ3JvdXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrZ3JvdXBOYW1lKVxuICAgIGdyb3VwLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXAucmVtb3ZlKClcbiAgICB9LCA1MDApO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpLy9zbyB0aGF0IGFycmF5IGdldHMgZGVsZXRlZCB0b29cbn1cblxuZXhwb3J0IHsgcmVtb3ZlR3JvdXAgfSIsImZ1bmN0aW9uIGFkZE5vdGVzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZXhwb3J0IHsgYWRkTm90ZXMgfSIsImltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vY2xvc2Vmb3JtJ1xuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJlZFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWU9XCJcIlxuICAgIHRhc2tGb3JtLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICB9LCA4MDApO1xufVxuXG5leHBvcnQge2NhbmNlbFRhc2t9IiwiZnVuY3Rpb24gY2xvc2VGb3JtKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjVweFwiXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsIDAsIDAsIDAuNjQyKVwiXG4gICAgXG59XG5cbmV4cG9ydCB7IGNsb3NlRm9ybSB9IiwiZnVuY3Rpb24gZGlzcGxheVRhc2tzKGdyb3VwTmFtZSl7Ly9mdW5jdGlvbiB0byBjbGVhciB0YXNrcyBpbiB2aWV3IGFuZCBjcmVhdGUgZWxlbWVudHMgdG8gc2hvdyBuZXcgdGFza3MgaW4gZ3JvdXAgYXJyYXlcbiAgICBsZXQgYXJyYXk9d2luZG93W2dyb3VwTmFtZV1cbiAgICBjb25zdCBsbj1hcnJheS5sZW5ndGhcbiAgICBmb3IobGV0IGk9MDtpPGxuO2krKyl7XG4gICAgICAgIGxldCBuYW1lPWFycmF5LnRhc2tOYW1lXG4gICAgICAgIGxldCBudW1iZXI9YXJyYXkudGFza051bWJlclxuICAgICAgICBsZXQgbm90ZT1hcnJheS5ub3Rlc1xuICAgICAgICBsZXQgZGF0ZT1hcnJheS5kdWVkYXRlXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsbnVtYmVyLG5vdGUsZGF0ZSlcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzKG5hbWUsbnVtYmVyLG5vdGUsZGF0ZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50cyh0YXNrTmFtZSx0YXNrTnVtYmVyLG5vdGVzLGR1ZWRhdGUpey8vaW50ZXJuYWwgZnVuY3Rpb24gRE8gTk9UIEVYUE9SVCFcblxuICAgIC8vaW5pdGlhbGl6aW5nIGVsZW1lbnRzIHRvIGNyZWF0ZSB0YXNrIGluIGh0bWxcbiAgICBjb25zdCB0YXNrc1dpbmRvdz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Mtd2luZG93JykvL21haW4gZWxlbWVudCBmbyByY2hpbGQgbm9kZXMgdG8gYmUgYXBwZW5kZWQgdG9cbiAgICBsZXQgdGFza0NvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKVxuXG4gICAgbGV0IG51bWJlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvL2NyZWF0ZSB0YXNrIGVsZW1lbnRzXG4gICAgbGV0IG5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgbm90ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBkYXRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGRvbmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG5cbiAgICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYicpXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJylcbiAgICBub3RlLmNsYXNzTGlzdC5hZGQoJ25vdGUnKVxuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpXG4gICAgZG9uZS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gICAgZG9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUtYnV0dG9uJylcbiAgICBkb25lLnN0eWxlLmZvbnRTaXplPVwiMzBweFwiXG5cbiAgICAvL25vdyB3ZSBhc3NpZ24gZWFjaCB0YXNrIGl0cyB2YWx1ZXMtLS0+XG4gICAgbnVtYmVyLnRleHRDb250ZW50PXRhc2tOdW1iZXJcbiAgICBuYW1lLnRleHRDb250ZW50PXRhc2tOYW1lXG4gICAgbm90ZS50ZXh0Q29udGVudD1ub3Rlc1xuICAgIGRhdGUudGV4dENvbnRlbnQ9ZHVlZGF0ZVxuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXIpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKVxuXG4gICAgdGFza3NXaW5kb3cuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcilcbiAgICBcbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAvL2Z1bmN0aW9uIHRvIHJlbW92ZSB0YXNrIGZyb20gYXJyYXlcbiAgICAgICAgLy9mdW5jdGlvbiB0byByZW1vdmUgdGFzayBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgLy9hZGQgYW1vdW50IG9mIHRhc2tzIGRvbmUgZm9yIGdyb3VwIGFuZCBzdG9yZSBpbiBMU1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0VsZW1lbnRzKCl7XG4gICAgbGV0IHRhc2tFbGVtZW50cz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKVxuICAgIHRhc2tFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGRpc3BsYXlUYXNrcyxjbGVhclRhc2tFbGVtZW50cyB9IiwiZnVuY3Rpb24gZGF0ZVNlbGVjdG9yKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBkYXRlU2VsZWN0b3IgfSAiLCJmdW5jdGlvbiBpbnB1dENoZWNrZXIoY2xhc3NuYW1lKXtcbiAgICBsZXQgdmFsdWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc25hbWUpLnZhbHVlXG4gICAgbGV0IGxlbmd0aD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWUubGVuZ3RoXG4gICAgaWYodmFsdWUhPScnICYmIGxlbmd0aD4zKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgeyBpbnB1dENoZWNrZXIgfSIsImZ1bmN0aW9uIHNlbmRJdGVtKGFycmF5LGdyb3VwKXsvL3NldHMgaXRlbSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShncm91cCwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbn1cbiBcbmV4cG9ydCB7IHNlbmRJdGVtIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IGZ1bmN0aW9ucyBoZXJlO1xuaW1wb3J0IHsgb3Blbk5ld0Zvcm0gfSBmcm9tICcuL2RvbXNjcmlwdHMvb3BlbkZvcm0nXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL2xvZ2ljL2Nsb3NlZm9ybSdcbmltcG9ydCB7IGNhbmNlbFRhc2sgfSBmcm9tICcuL2xvZ2ljL2NhbmNlbHRhc2snXG5pbXBvcnQgeyBkYXRlU2VsZWN0b3IgfSBmcm9tICcuL2xvZ2ljL2R1ZWRhdGUnXG5pbXBvcnQgeyBhZGROb3RlcyB9IGZyb20gJy4vbG9naWMvYWRkbm90ZSdcbmltcG9ydCB7IGlucHV0Q2hlY2tlciB9IGZyb20gJy4vbG9naWMvaW5wdXRjaGVjaydcbmltcG9ydCB7IGZvcm1hdCxwYXJzZUlTTyxzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBjcmVhdGVHcm91cEZvcm0sIGNsb3NlR3JvdXBGb3JtLCBjcmVhdGVHcm91cEVsZW1lbnQgfSBmcm9tICcuL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtJ1xuaW1wb3J0IHsgc2VuZEl0ZW0gfSBmcm9tICcuL2xvZ2ljL3NlbmRJdGVtJ1xuaW1wb3J0IHsgZ3JvdXBTZWxlY3RlZCB9IGZyb20gJy4vZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0nXG5pbXBvcnQgeyBjbGVhclRhc2tFbGVtZW50cywgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9sb2dpYy9kaXNwbGF5dGFza3MnXG5cbmNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbmNvbnN0IG5ld05vdGVkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5vdGUtYnV0dG9uXCIpXG5jb25zdCBuZXdUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKVxuY29uc3QgY2FuY2VsVGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXRhc2snKVxuY29uc3QgYWRkVGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuY29uc3QgZHVlRGF0ZUJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJylcbi8vaW5wdXQgZGVjbGFyYXRpb25zXG5sZXQgdGFza05hbWVcbmxldCBub3Rlc1xubGV0IHRhc2tEYXRlXG5sZXQgdGFza051bWJlclxubGV0IGR1ZWRhdGVcbiBcblxuXG5cbmNsYXNzIHRhc2t7XG4gICAgY29uc3RydWN0b3IodGFza051bWJlcix0YXNrTmFtZSxub3RlcyxkdWVkYXRlKXtcbiAgICB0aGlzLnRhc2tOdW1iZXI9dGFza051bWJlclxuICAgIHRoaXMudGFza05hbWU9dGFza05hbWVcbiAgICB0aGlzLm5vdGVzPW5vdGVzXG4gICAgdGhpcy5kdWVkYXRlPWR1ZWRhdGVcbiAgICB9XG59XG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBvcGVuTmV3Rm9ybSgpXG59KVxuXG5kdWVEYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgZGF0ZVNlbGVjdG9yKClcbn0pXG5cbm5ld05vdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFkZE5vdGVzKClcbn0pXG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNhbmNlbFRhc2soKVxufSlcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBhZGRUYXNrKClcbn0pXG5cblxuXG4vL2NyZWF0ZSBuZXcgZ3JvdXBcbmNvbnN0IGFkZEdyb3VwQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJylcbmFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNyZWF0ZUdyb3VwRm9ybSgpXG59KVxuXG5cbi8vPC0tLS0tLS0tLS0tLS0tLS1DcmVhdGUgbmV3IHRhc2sgRnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLT5cblxuXG5mdW5jdGlvbiBhZGRUYXNrKCl7XG4gICAgaWYgKGlucHV0Q2hlY2tlcignLnRhc2stbmFtZScpPT10cnVlICYmIGdyb3VwU2VsZWN0ZWQhPW51bGwpe1xuICAgIC8vZXh0cmEgYW5pbWF0aW9uIGVmZmVjdHNcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjN2RkNzc3XCJcbiAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgY2FwdHVyZUluZm8oKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZUZvcm0oKVxuICAgIH0sIDgwMCk7XG59XG5lbHNlIGlmIChpbnB1dENoZWNrZXIoJy50YXNrLW5hbWUnKT09ZmFsc2Upe1xuICAgIGFsZXJ0KCdQbGVhc2UgRW50ZXIgQSBWYWxpZCBDbGFzcyBOYW1lIPCfkYAnKVxufVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlSW5mbygpe1xuICAgIHRhc2tOYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZVxuICAgIG5vdGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlXG4gICAgaWYobm90ZXM9PScnKXtcbiAgICAgICAgbm90ZXM9XCJOb25lXCJcbiAgICB9XG4gICAgdGFza0RhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZVxuICAgIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZClcbn1cblxubGV0IFRhc2tcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZCl7XG4gICAgIGxldCBhcnJheT13aW5kb3dbZ3JvdXBTZWxlY3RlZF1cbiAgICAgdGFza051bWJlcj1hcnJheS5sZW5ndGgrMVxuICAgICBUYXNrID0gbmV3IHRhc2sodGFza051bWJlcix0YXNrTmFtZSxub3RlcyxkdWVkYXRlKVxuICAgICBhcnJheS5wdXNoKFRhc2spXG4gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuICAgICBsZXQgbG9jYWxBcnJheT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwU2VsZWN0ZWQpIHx8ICdbXTInKS8vZ2V0cyBpdGVtIGZyb20gTFNcbiAgICAgbG9jYWxBcnJheS5wdXNoKFRhc2spLy9wdXNoIGl0ZW0gdG8gbG9jYWwgYXJyYXkgXG4gICAgIGNvbnNvbGUubG9nKGxvY2FsQXJyYXkpXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwU2VsZWN0ZWQsSlNPTi5zdHJpbmdpZnkobG9jYWxBcnJheSkpLy9wdXNoIHVwZGF0ZWQgYXJyYXkgYmFjayB0byBsc1xufVxuXG4vLzwtLS0tLS0tLS0tLS0tLW9uIHN0YXJ0IGZ1bmN0aW9ucyBoZXJlLS0tLS0tLS0tLS0tPlxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpey8vZ2V0cyBncm91cHMgZnJvbSBsb2NhbHN0b3JhZ2UgYW5kIGNyZWF0ZXMgbmV3IGFycmF5c1xuICAgICBsZXQgbG49bG9jYWxTdG9yYWdlLmxlbmd0aFxuICAgICBsZXQgZ3JvdXBOYW1lXG4gICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKT09bnVsbCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hvcmVzXCIsSlNPTi5zdHJpbmdpZnkoW3t0YXNrTnVtYmVyOiAxLCB0YXNrTmFtZTogXCJFYXQgTW91bGRlZCBDaGVlc2VcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJub25lXCJ9LHt0YXNrTnVtYmVyOiAyLCB0YXNrTmFtZTogXCJHaXZlIGRvZ2dvIGZvb2RcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJub25lXCJ9LHt0YXNrTnVtYmVyOiAzLCB0YXNrTmFtZTogXCJXYXNoIHlvdXIgZmFjZSBzaWxseSFcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJub25lXCJ9XSkpIC8vIGRlZmF1bHQgYXJyYXlcbiAgIH1cbiAgICAgZm9yKGxldCBpPTA7aTxsbjtpKyspe1xuICAgICAgICAgZ3JvdXBOYW1lPWxvY2FsU3RvcmFnZS5rZXkoaSlcbiAgICAgICAgIGdyb3VwTmFtZT1ncm91cE5hbWUudG9TdHJpbmcoKVxuICAgICAgICAgaWYoZ3JvdXBOYW1lIT1cInVzZXJcIil7XG4gICAgICAgICB3aW5kb3dbZ3JvdXBOYW1lXT0gbmV3IEFycmF5KCkgIC8vY3JlYXRlIGFycmF5IGZvciBlYWNoIGdyb3VwIHN0b3JlZCBpbiBsb2NhbCBzdG9yZ2VcbiAgICAgICAgIGxldCBhcnJheT13aW5kb3dbZ3JvdXBOYW1lXVxuICAgICAgICAgY29uc29sZS5sb2coYXJyYXkpXG4gICAgICAgICBsZXQgdGFza3M9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpIHx8ICdbXScpLy90byBnZXQgdGFza3MgZm9yIHBhcnRpY3VsYXIgZ3JvdXBcbiAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxuICAgICAgICAgYXJyYXkucHVzaCh0YXNrcylcbiAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5KVxuICAgICAgICAgY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSlcbiAgICAgICAgIH1cbiAgICAgfSAgXG59XG5cblxucGFnZUxvYWQoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=