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

function createGroupArray(groupName){//to create local array to store tasks
    let arr=window[groupName]= []
    let tasks=JSON.parse(localStorage.getItem(groupName))
    if(tasks==null){
       localStorage.setItem(groupName,JSON.stringify(arr))
    }
    else{
    for(let i=0;i<tasks.length;i++){
        let task=tasks[i]
        arr.push(task)
    }
    }
    console.log(localStorage.getItem(groupName))
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
    var elem = document.querySelector('.tasks-window');
     elem.scrollTop='0'
    const taskForm=document.querySelector('.add-task-form')
    document.querySelector('.task-header').style.marginBottom='10%'
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
    let arr= []
    arr=JSON.parse(localStorage.getItem(groupName))
    console.log(arr)
    const ln=arr.length
    for(let i=0;i<ln;i++){
        let array=arr[i]
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
    done.textContent="done"
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
        ;(0,_logic_displaytasks__WEBPACK_IMPORTED_MODULE_8__.clearTaskElements)()
        ;(0,_logic_displaytasks__WEBPACK_IMPORTED_MODULE_8__.displayTasks)(_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.groupSelected)
        var elem = document.querySelector('.tasks-window');
         elem.scrollTop = elem.scrollHeight;
    }, 800);
}
else if ((0,_logic_inputcheck__WEBPACK_IMPORTED_MODULE_5__.inputChecker)('.task-name')==false){
    alert('Please Enter A Valid Class Name 👀')
}
}

function captureInfo(){
    taskName=document.querySelector('.task-name').value
    notes=document.querySelector('.notes-input').value
    if(notes==null|| notes==""){
        notes="None"
    }
    duedate=document.querySelector('.date-selector').value
    createTask(_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.groupSelected)
}

let Task
function createTask(groupSelected){
     let array=window[groupSelected]
     taskNumber=(array.length+1).toString()
     Task = new task(taskNumber,taskName,notes,duedate)
     array.push(Task)
     console.log(array)
     let localArray=JSON.parse(localStorage.getItem(groupSelected) || '[]2')//gets item from LS
     localArray.push(Task)//push item to local array 
     localStorage.setItem(groupSelected,JSON.stringify(localArray))//push updated array back to ls
     console.log(localStorage.getItem(groupSelected))
}

//<--------------on start functions here------------>

function pageLoad(){//gets groups from localstorage and creates new arrays
     if(localStorage.getItem("user")==null){
        localStorage.setItem("user",1)
        localStorage.setItem("chores",JSON.stringify([{taskNumber: 1, taskName: "Eat Moulded Cheese", notes: "fd", duedate: "none"},{taskNumber: 2, taskName: "Give doggo food", notes: "fd", duedate: "none"},{taskNumber: 3, taskName: "Wash your face silly!", notes: "fd", duedate: "none"}])) // default array
   }
     createGroupsStartup()
}
function createGroupsStartup(){
    let ln=localStorage.length
     let groupName
    for(let i=ln-1;i>=0;i--){//loop runs in reverse so that latest group gets added last
        groupName=localStorage.key(i)
        console.log(localStorage.getItem(groupName))
        if(groupName!="user"){
        window[groupName]=JSON.parse(localStorage.getItem(groupName)) || [];  //create array for each group stored in local storge
        let array=window[groupName]
        console.log(array)
        let tasks=localStorage.getItem(groupName)//to get tasks for particular group
        tasks=JSON.parse(tasks)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsc0VBQWE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFNBQVMsK0RBQVk7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzRUFBYTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSx1REFBdUQsNEVBQTRFLEVBQUUseUVBQXlFLEVBQUUsK0VBQStFO0FBQy9SO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixLQUFLLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQWtCO0FBQzFCO0FBQ0E7QUFDQTs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9vcGVuRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvcmVtb3ZlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9hZGRub3RlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2FuY2VsdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Nsb3NlZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Rpc3BsYXl0YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2R1ZWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9pbnB1dGNoZWNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvc2VuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlYXJUYXNrRWxlbWVudHMsIGRpc3BsYXlUYXNrcyB9IGZyb20gJy4uL2xvZ2ljL2Rpc3BsYXl0YXNrcydcbmltcG9ydCB7IGlucHV0Q2hlY2tlciB9IGZyb20gJy4uL2xvZ2ljL2lucHV0Y2hlY2snXG5pbXBvcnQgeyBzZW5kSXRlbSB9IGZyb20gJy4uL2xvZ2ljL3NlbmRJdGVtJ1xuaW1wb3J0IHsgcmVtb3ZlR3JvdXAgfSBmcm9tICcuL3JlbW92ZUdyb3VwJ1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwRm9ybSgpe1xuICAgIGNvbnN0IHNpZGViYXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IGZvcm1Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBjb25zdCBjbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBhZGRHcm91cEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxuXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm91cC1mb3JtLWNvbnRhaW5lcicpXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS53aWR0aD1cIjEzMCVcIlxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwLW5hbWUtaW5wdXQnKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1ncm91cGZvcm0tYnRuJylcbiAgICBjbG9zZUJ0bi5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudD1cImNsb3NlXCJcbiAgICBjbG9zZUJ0bi5vbm1vdXNlb3Zlcj1cImNvbG9yOiBibGFjaztcIlxuICAgIGFkZEdyb3VwQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgICBhZGRHcm91cEJ0bi5jbGFzc0xpc3QuYWRkKCdncnBmb3JtYWRkJylcbiAgICBhZGRHcm91cEJ0bi50ZXh0Q29udGVudD1cImFkZFwiXG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyPVwibm9uZVwiXG4gICAgaW5wdXQuc3R5bGUuZm9udEZhbWlseT1cInJvYm90byBjb25kZW5zZWRcIlxuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICBpbnB1dC5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNHNcIlxuICAgIGlucHV0LnR5cGU9XCJ0ZXh0XCJcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBpbnB1dC5zaXplPVwiMTVcIlxuICAgIGlucHV0LmZvbnRTaXplPShcIjI0cHhcIilcbiAgICBcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PVwiMVwiXG4gICAgfSwgMTAwKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVHcm91cEZvcm0pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3QpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEdyb3VwQnRuKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYoY29uZmlybSgnQXJlIHlvdSBTdXJlIFlvdSBXYW50IFRvIENhbmNlbD8nKT09dHJ1ZSl7XG4gICAgICAgICAgICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRJbmZvKVxufVxuZnVuY3Rpb24gY2xvc2VHcm91cEZvcm0oKXtcbiAgICBjb25zdCBncm91cEZvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLWZvcm0tY29udGFpbmVyJylcbiAgICBncm91cEZvcm0uc3R5bGUub3BhY2l0eT0nMCdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXBGb3JtLnJlbW92ZSgpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUdyb3VwRm9ybSlcbiAgICB9LCA1MDApO1xufVxuXG4vL2Z1bmN0aW9ucyB0byBleGVjdXRlIGFmdGVyIGFkZCBidXR0b24gaGFzIGJlZW4gcHJlc3NlZFxuXG5mdW5jdGlvbiBhZGRJbmZvKCl7XG4gICAgbGV0IGlucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1uYW1lLWlucHV0JylcbiAgICAvL2lmKGlucHV0Q2hlY2tlcignLmdyb3VwLW5hbWUtaW5wdXQnKT09dHJ1ZSl7XG4gICAgICAvLyAgY2xvc2VHcm91cEZvcm0oKVxuICAgICAgIC8vIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiMxMWZmMDBcIlxuICAgIC8vfVxuICAgIGNsb3NlR3JvdXBGb3JtKClcbiAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjMTFmZjAwXCJcbiAgICBsZXQgZ3JvdXBOYW1lPWlucHV0LnZhbHVlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUdyb3VwRWxlbWVudChncm91cE5hbWUpXG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBBcnJheShncm91cE5hbWUpey8vdG8gY3JlYXRlIGxvY2FsIGFycmF5IHRvIHN0b3JlIHRhc2tzXG4gICAgbGV0IGFycj13aW5kb3dbZ3JvdXBOYW1lXT0gW11cbiAgICBsZXQgdGFza3M9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpKVxuICAgIGlmKHRhc2tzPT1udWxsKXtcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShncm91cE5hbWUsSlNPTi5zdHJpbmdpZnkoYXJyKSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICBmb3IobGV0IGk9MDtpPHRhc2tzLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgdGFzaz10YXNrc1tpXVxuICAgICAgICBhcnIucHVzaCh0YXNrKVxuICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBOYW1lKSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSl7Ly9jcmVhdGVzIG5ldyBncm91cCBlbGVtZW50IGluIHNpZGViYXJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBsZXQgY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb3VwLWNvbnRhaW5lcicpXG5cbiAgICAvL2NyZWF0ZSBncm91cCBlbGVtZW50IGFuZCBhc3NpZ24gaXQgYSB0aXRsZSBudW1iZXJcbiAgICBsZXQgZ3JvdXBUaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGdyb3VwVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIGNvbnN0IHN0cjIgPSBncm91cE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZ3JvdXBOYW1lKS8vZm9yIGluZGVudGlmaWNhdGlvbiB3aGVuIGRlbGV0ZWluZyBlbG1lbnRcbiAgICBncm91cFRpdGxlLnRleHRDb250ZW50PSBzdHIyXG5cbiAgICAvL1NwYXduIERvdCBmb3IgdGl0bGVcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgIC8vY3JlYXRlIGNsb3NlIGJ1dHRvblxuICAgIGxldCBjbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZ3JvdXAtYnRuJylcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudD0oJ2Nsb3NlJylcblxuICAgIC8vdGl0bGUgYW5kIGRvdCBjb250YWluZXJcbiAgICBsZXQgdGl0bGVEb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kb3QtY29udGFpbmVyJylcbiAgICB0aXRsZURvdC5hcHBlbmRDaGlsZChkb3QpXG4gICAgdGl0bGVEb3QuYXBwZW5kQ2hpbGQoZ3JvdXBUaXRsZSlcblxuICAgIC8vYWRkIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGVpciBvcmRlciwgdG8gdGhlIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURvdClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmKGNvbmZpcm0oXCJBcmUgWW91IFN1cmUgWW91IFdhbnQgdG8gRGVsZXRlIFRoZSBcIitncm91cFRpdGxlLnRleHRDb250ZW50K1wiIEdyb3VwP1wiKT09dHJ1ZSl7XG4gICAgICAgICAgICBsZXQgbmFtZT1ncm91cFRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICByZW1vdmVHcm91cChuYW1lKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2NyZWF0ZSBhcnJheVxuICAgIGNyZWF0ZUdyb3VwQXJyYXkoZ3JvdXBOYW1lKVxuICAgIGdyb3VwU2VsZWN0aW9uKClcbiAgICBncm91cFNlbGVjdG9yKClcbiAgICBsZXQgZ3JwVGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJykgLy90aGlzIHN0ZXAgaXMgbmVjY2Vzc2FyeSB0byBidWlsZCB0YXNrIG5vZGVzIHdoZW4gdGhlIGdyb3VwIGlzIHNlbGVjdGVkXG4gICAgZ3JwVGl0bGUuZm9yRWFjaCh0aXRsZSA9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICBjbGVhclRhc2tFbGVtZW50cygpXG4gICAgICAgICAgICAgICBsZXQgbmFtZT10aXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgbmFtZT1uYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhuYW1lKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5sZXQgZ3JvdXBTZWxlY3RlZFxuZnVuY3Rpb24gZ3JvdXBTZWxlY3Rvcigpey8vY2hlY2tzIHdoaWNoIGdyb3VwIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKVxuICAgIGdyb3VwLmZvckVhY2godGl0bGU9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgZ3JvdXBuYW1lPXRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICBncm91cG5hbWU9IGdyb3VwbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGdyb3VwbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0ZWQ9Z3JvdXBuYW1lXG4gICAgICAgICB9KVxuICAgIH0pXG59XG5ncm91cFNlbGVjdG9yKClcbmZ1bmN0aW9uIGdyb3VwU2VsZWN0aW9uKCl7XG4gICAgY29uc3QgZ3JvdXBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpXG4gICAgZ3JvdXBzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChncm91cCA9Pntncm91cC5zdHlsZS5jb2xvcj1cImJsYWNrXCJ9KS8vdG8gcmVzZXQgc2VsZWN0ZWQgZ3JvdXAsIGlmIGFueVxuICAgICAgICAgICAgaXRlbS5zdHlsZS5jb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0b3IoaXRlbSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIH1cblxuZnVuY3Rpb24gYWRkVGFza1RvR3JvdXAoZ3JvdXBOYW1lLHRhc2spe1xuICAgYXJyYXk9d2luZG93W2dyb3VwTmFtZV1cbiAgIGFycmF5LnB1c2godGFzaylcbn1cblxuZXhwb3J0IHsgY3JlYXRlR3JvdXBGb3JtLGNsb3NlR3JvdXBGb3JtLGFkZEluZm8sZ3JvdXBTZWxlY3RlZCxjcmVhdGVHcm91cEVsZW1lbnQgfSIsImZ1bmN0aW9uIG9wZW5OZXdGb3JtKCl7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Mtd2luZG93Jyk7XG4gICAgIGVsZW0uc2Nyb2xsVG9wPScwJ1xuICAgIGNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkZXInKS5zdHlsZS5tYXJnaW5Cb3R0b209JzEwJSdcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHRhc2tGb3JtLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMXNcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PScxJ1xuICAgIH0sIDkwMCk7XG59XG5cbmV4cG9ydCB7IG9wZW5OZXdGb3JtIH0iLCJmdW5jdGlvbiByZW1vdmVHcm91cChncm91cE5hbWUpe1xuICAgICBncm91cE5hbWUgPSBncm91cE5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSk7XG4gICAgLy8gZnVuY3Rpb24gdG8gZXhlY3R1ZSByZW1vdmFsIGZyb20gb2ZmbGluZSBzdG9yYWdlXG4gICAgbGV0IGxuPWxvY2FsU3RvcmFnZS5sZW5ndGhcbiAgICBmb3IobGV0IGk9MDtpPGxuO2krKyl7Ly90byBmaW5kIGFuZCBybWVvdmUgaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmtleShpKT09Z3JvdXBOYW1lKXtcbiAgICAgICAgICAgIGxldCBrZXk9bG9jYWxTdG9yYWdlLmtleShpKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vcmVtb3ZlIGVsZW1lbnQgZnJvbSBodG1sIFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJytncm91cE5hbWUpXG4gICAgZ3JvdXAuc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBncm91cC5yZW1vdmUoKVxuICAgIH0sIDUwMCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCkvL3NvIHRoYXQgYXJyYXkgZ2V0cyBkZWxldGVkIHRvb1xufVxuXG5leHBvcnQgeyByZW1vdmVHcm91cCB9IiwiZnVuY3Rpb24gYWRkTm90ZXMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBhZGROb3RlcyB9IiwiaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9jbG9zZWZvcm0nXG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2soKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmVkXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZUZvcm0oKVxuICAgIH0sIDgwMCk7XG59XG5cbmV4cG9ydCB7Y2FuY2VsVGFza30iLCJmdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tPVwiNXB4XCJcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwgMCwgMCwgMC42NDIpXCJcbiAgICBcbn1cblxuZXhwb3J0IHsgY2xvc2VGb3JtIH0iLCJmdW5jdGlvbiBkaXNwbGF5VGFza3MoZ3JvdXBOYW1lKXsvL2Z1bmN0aW9uIHRvIGNsZWFyIHRhc2tzIGluIHZpZXcgYW5kIGNyZWF0ZSBlbGVtZW50cyB0byBzaG93IG5ldyB0YXNrcyBpbiBncm91cCBhcnJheVxuICAgIGxldCBhcnI9IFtdXG4gICAgYXJyPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBOYW1lKSlcbiAgICBjb25zb2xlLmxvZyhhcnIpXG4gICAgY29uc3QgbG49YXJyLmxlbmd0aFxuICAgIGZvcihsZXQgaT0wO2k8bG47aSsrKXtcbiAgICAgICAgbGV0IGFycmF5PWFycltpXVxuICAgICAgICBsZXQgbmFtZT1hcnJheS50YXNrTmFtZVxuICAgICAgICBsZXQgbnVtYmVyPWFycmF5LnRhc2tOdW1iZXJcbiAgICAgICAgbGV0IG5vdGU9YXJyYXkubm90ZXNcbiAgICAgICAgbGV0IGRhdGU9YXJyYXkuZHVlZGF0ZVxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLG51bWJlcixub3RlLGRhdGUpXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50cyhuYW1lLG51bWJlcixub3RlLGRhdGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudHModGFza05hbWUsdGFza051bWJlcixub3RlcyxkdWVkYXRlKXsvL2ludGVybmFsIGZ1bmN0aW9uIERPIE5PVCBFWFBPUlQhXG5cbiAgICAvL2luaXRpYWxpemluZyBlbGVtZW50cyB0byBjcmVhdGUgdGFzayBpbiBodG1sXG4gICAgY29uc3QgdGFza3NXaW5kb3c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXdpbmRvdycpLy9tYWluIGVsZW1lbnQgZm8gcmNoaWxkIG5vZGVzIHRvIGJlIGFwcGVuZGVkIHRvXG4gICAgbGV0IHRhc2tDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJylcblxuICAgIGxldCBudW1iZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy9jcmVhdGUgdGFzayBlbGVtZW50c1xuICAgIGxldCBuYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IG5vdGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgZGF0ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBkb25lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuXG4gICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWInKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpXG4gICAgbm90ZS5jbGFzc0xpc3QuYWRkKCdub3RlJylcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKVxuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgndGFzay1kb25lLWJ1dHRvbicpXG4gICAgZG9uZS50ZXh0Q29udGVudD1cImRvbmVcIlxuICAgIGRvbmUuc3R5bGUuZm9udFNpemU9XCIzMHB4XCJcblxuICAgIC8vbm93IHdlIGFzc2lnbiBlYWNoIHRhc2sgaXRzIHZhbHVlcy0tLT5cbiAgICBudW1iZXIudGV4dENvbnRlbnQ9dGFza051bWJlclxuICAgIG5hbWUudGV4dENvbnRlbnQ9dGFza05hbWVcbiAgICBub3RlLnRleHRDb250ZW50PW5vdGVzXG4gICAgZGF0ZS50ZXh0Q29udGVudD1kdWVkYXRlXG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlcilcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlKVxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpXG5cbiAgICB0YXNrc1dpbmRvdy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKVxuICAgIFxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIC8vZnVuY3Rpb24gdG8gcmVtb3ZlIHRhc2sgZnJvbSBhcnJheVxuICAgICAgICAvL2Z1bmN0aW9uIHRvIHJlbW92ZSB0YXNrIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgICAvL2FkZCBhbW91bnQgb2YgdGFza3MgZG9uZSBmb3IgZ3JvdXAgYW5kIHN0b3JlIGluIExTXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRWxlbWVudHMoKXtcbiAgICBsZXQgdGFza0VsZW1lbnRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNvbnRhaW5lcicpXG4gICAgdGFza0VsZW1lbnRzLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZGlzcGxheVRhc2tzLGNsZWFyVGFza0VsZW1lbnRzIH0iLCJmdW5jdGlvbiBkYXRlU2VsZWN0b3IoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IGRhdGVTZWxlY3RvciB9ICIsImZ1bmN0aW9uIGlucHV0Q2hlY2tlcihjbGFzc25hbWUpe1xuICAgIGxldCB2YWx1ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWVcbiAgICBsZXQgbGVuZ3RoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NuYW1lKS52YWx1ZS5sZW5ndGhcbiAgICBpZih2YWx1ZSE9JycgJiYgbGVuZ3RoPjMpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCB7IGlucHV0Q2hlY2tlciB9IiwiZnVuY3Rpb24gc2VuZEl0ZW0oYXJyYXksZ3JvdXApey8vc2V0cyBpdGVtIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xufVxuIFxuZXhwb3J0IHsgc2VuZEl0ZW0gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgZnVuY3Rpb25zIGhlcmU7XG5pbXBvcnQgeyBvcGVuTmV3Rm9ybSB9IGZyb20gJy4vZG9tc2NyaXB0cy9vcGVuRm9ybSdcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vbG9naWMvY2xvc2Vmb3JtJ1xuaW1wb3J0IHsgY2FuY2VsVGFzayB9IGZyb20gJy4vbG9naWMvY2FuY2VsdGFzaydcbmltcG9ydCB7IGRhdGVTZWxlY3RvciB9IGZyb20gJy4vbG9naWMvZHVlZGF0ZSdcbmltcG9ydCB7IGFkZE5vdGVzIH0gZnJvbSAnLi9sb2dpYy9hZGRub3RlJ1xuaW1wb3J0IHsgaW5wdXRDaGVja2VyIH0gZnJvbSAnLi9sb2dpYy9pbnB1dGNoZWNrJ1xuaW1wb3J0IHsgZm9ybWF0LHBhcnNlSVNPLHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IGNyZWF0ZUdyb3VwRm9ybSwgY2xvc2VHcm91cEZvcm0sIGNyZWF0ZUdyb3VwRWxlbWVudCB9IGZyb20gJy4vZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0nXG5pbXBvcnQgeyBzZW5kSXRlbSB9IGZyb20gJy4vbG9naWMvc2VuZEl0ZW0nXG5pbXBvcnQgeyBncm91cFNlbGVjdGVkIH0gZnJvbSAnLi9kb21zY3JpcHRzL2NyZWF0ZWdyb3VwZm9ybSdcbmltcG9ydCB7IGNsZWFyVGFza0VsZW1lbnRzLCBkaXNwbGF5VGFza3MgfSBmcm9tICcuL2xvZ2ljL2Rpc3BsYXl0YXNrcydcblxuY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuY29uc3QgbmV3Tm90ZWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbm90ZS1idXR0b25cIilcbmNvbnN0IG5ld1Rhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpXG5jb25zdCBjYW5jZWxUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzaycpXG5jb25zdCBhZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG5jb25zdCBkdWVEYXRlQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1idXR0b24nKVxuLy9pbnB1dCBkZWNsYXJhdGlvbnNcbmxldCB0YXNrTmFtZVxubGV0IG5vdGVzXG5sZXQgdGFza0RhdGVcbmxldCB0YXNrTnVtYmVyXG5sZXQgZHVlZGF0ZVxuIFxuXG5cblxuY2xhc3MgdGFza3tcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTnVtYmVyLHRhc2tOYW1lLG5vdGVzLGR1ZWRhdGUpe1xuICAgIHRoaXMudGFza051bWJlcj10YXNrTnVtYmVyXG4gICAgdGhpcy50YXNrTmFtZT10YXNrTmFtZVxuICAgIHRoaXMubm90ZXM9bm90ZXNcbiAgICB0aGlzLmR1ZWRhdGU9ZHVlZGF0ZVxuICAgIH1cbn1cblxubmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgIG9wZW5OZXdGb3JtKClcbn0pXG5cbmR1ZURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBkYXRlU2VsZWN0b3IoKVxufSlcblxubmV3Tm90ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgYWRkTm90ZXMoKVxufSlcblxuY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY2FuY2VsVGFzaygpXG59KVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFkZFRhc2soKVxufSlcblxuXG5cbi8vY3JlYXRlIG5ldyBncm91cFxuY29uc3QgYWRkR3JvdXBCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKVxuYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY3JlYXRlR3JvdXBGb3JtKClcbn0pXG5cblxuLy88LS0tLS0tLS0tLS0tLS0tLUNyZWF0ZSBuZXcgdGFzayBGdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tPlxuXG5cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBpZiAoaW5wdXRDaGVja2VyKCcudGFzay1uYW1lJyk9PXRydWUgJiYgZ3JvdXBTZWxlY3RlZCE9bnVsbCl7XG4gICAgLy9leHRyYSBhbmltYXRpb24gZWZmZWN0c1xuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiM3ZGQ3NzdcIlxuICAgIHRhc2tGb3JtLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBjYXB0dXJlSW5mbygpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsb3NlRm9ybSgpXG4gICAgICAgIGNsZWFyVGFza0VsZW1lbnRzKClcbiAgICAgICAgZGlzcGxheVRhc2tzKGdyb3VwU2VsZWN0ZWQpXG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXdpbmRvdycpO1xuICAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodDtcbiAgICB9LCA4MDApO1xufVxuZWxzZSBpZiAoaW5wdXRDaGVja2VyKCcudGFzay1uYW1lJyk9PWZhbHNlKXtcbiAgICBhbGVydCgnUGxlYXNlIEVudGVyIEEgVmFsaWQgQ2xhc3MgTmFtZSDwn5GAJylcbn1cbn1cblxuZnVuY3Rpb24gY2FwdHVyZUluZm8oKXtcbiAgICB0YXNrTmFtZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudmFsdWVcbiAgICBub3Rlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZVxuICAgIGlmKG5vdGVzPT1udWxsfHwgbm90ZXM9PVwiXCIpe1xuICAgICAgICBub3Rlcz1cIk5vbmVcIlxuICAgIH1cbiAgICBkdWVkYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWVcbiAgICBjcmVhdGVUYXNrKGdyb3VwU2VsZWN0ZWQpXG59XG5cbmxldCBUYXNrXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGdyb3VwU2VsZWN0ZWQpe1xuICAgICBsZXQgYXJyYXk9d2luZG93W2dyb3VwU2VsZWN0ZWRdXG4gICAgIHRhc2tOdW1iZXI9KGFycmF5Lmxlbmd0aCsxKS50b1N0cmluZygpXG4gICAgIFRhc2sgPSBuZXcgdGFzayh0YXNrTnVtYmVyLHRhc2tOYW1lLG5vdGVzLGR1ZWRhdGUpXG4gICAgIGFycmF5LnB1c2goVGFzaylcbiAgICAgY29uc29sZS5sb2coYXJyYXkpXG4gICAgIGxldCBsb2NhbEFycmF5PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBTZWxlY3RlZCkgfHwgJ1tdMicpLy9nZXRzIGl0ZW0gZnJvbSBMU1xuICAgICBsb2NhbEFycmF5LnB1c2goVGFzaykvL3B1c2ggaXRlbSB0byBsb2NhbCBhcnJheSBcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ3JvdXBTZWxlY3RlZCxKU09OLnN0cmluZ2lmeShsb2NhbEFycmF5KSkvL3B1c2ggdXBkYXRlZCBhcnJheSBiYWNrIHRvIGxzXG4gICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwU2VsZWN0ZWQpKVxufVxuXG4vLzwtLS0tLS0tLS0tLS0tLW9uIHN0YXJ0IGZ1bmN0aW9ucyBoZXJlLS0tLS0tLS0tLS0tPlxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpey8vZ2V0cyBncm91cHMgZnJvbSBsb2NhbHN0b3JhZ2UgYW5kIGNyZWF0ZXMgbmV3IGFycmF5c1xuICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik9PW51bGwpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwxKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNob3Jlc1wiLEpTT04uc3RyaW5naWZ5KFt7dGFza051bWJlcjogMSwgdGFza05hbWU6IFwiRWF0IE1vdWxkZWQgQ2hlZXNlXCIsIG5vdGVzOiBcImZkXCIsIGR1ZWRhdGU6IFwibm9uZVwifSx7dGFza051bWJlcjogMiwgdGFza05hbWU6IFwiR2l2ZSBkb2dnbyBmb29kXCIsIG5vdGVzOiBcImZkXCIsIGR1ZWRhdGU6IFwibm9uZVwifSx7dGFza051bWJlcjogMywgdGFza05hbWU6IFwiV2FzaCB5b3VyIGZhY2Ugc2lsbHkhXCIsIG5vdGVzOiBcImZkXCIsIGR1ZWRhdGU6IFwibm9uZVwifV0pKSAvLyBkZWZhdWx0IGFycmF5XG4gICB9XG4gICAgIGNyZWF0ZUdyb3Vwc1N0YXJ0dXAoKVxufVxuZnVuY3Rpb24gY3JlYXRlR3JvdXBzU3RhcnR1cCgpe1xuICAgIGxldCBsbj1sb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgIGxldCBncm91cE5hbWVcbiAgICBmb3IobGV0IGk9bG4tMTtpPj0wO2ktLSl7Ly9sb29wIHJ1bnMgaW4gcmV2ZXJzZSBzbyB0aGF0IGxhdGVzdCBncm91cCBnZXRzIGFkZGVkIGxhc3RcbiAgICAgICAgZ3JvdXBOYW1lPWxvY2FsU3RvcmFnZS5rZXkoaSlcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBOYW1lKSlcbiAgICAgICAgaWYoZ3JvdXBOYW1lIT1cInVzZXJcIil7XG4gICAgICAgIHdpbmRvd1tncm91cE5hbWVdPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBOYW1lKSkgfHwgW107ICAvL2NyZWF0ZSBhcnJheSBmb3IgZWFjaCBncm91cCBzdG9yZWQgaW4gbG9jYWwgc3RvcmdlXG4gICAgICAgIGxldCBhcnJheT13aW5kb3dbZ3JvdXBOYW1lXVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSlcbiAgICAgICAgbGV0IHRhc2tzPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwTmFtZSkvL3RvIGdldCB0YXNrcyBmb3IgcGFydGljdWxhciBncm91cFxuICAgICAgICB0YXNrcz1KU09OLnBhcnNlKHRhc2tzKVxuICAgICAgICBhcnJheS5wdXNoKHRhc2tzKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSlcbiAgICAgICAgY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSlcbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5cbnBhZ2VMb2FkKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9