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

function addInfo(){//captures info
    let input=document.querySelector('.group-name-input')
    if((0,_logic_inputcheck__WEBPACK_IMPORTED_MODULE_1__.groupInputChecker)('.group-name-input')==true){
        closeGroupForm()
        input.style.backgroundColor="#11ff00"
        let groupName=input.value.toLowerCase()
        setTimeout(() => {
            createGroupElement(groupName)
        }, 500);
    }
    else{
        alert("Only Alphabets are allowed without spaces (min 4 characters)!")
    }
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
                const message=document.querySelector('.default-message')
                message.classList.add('hidden')
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
    const ln=arr.length
    window.group=groupName
    for(let i=0;i<ln;i++){
        let array=arr[i]
        let name=array.taskName
        let number=array.taskNumber
        let note=array.notes
        let date=array.duedate
        createTaskElements(name,number,note,date)
    }
}

function createTaskElements(taskName,taskNumber,notes,duedate){//internal function DO NOT EXPORT!

    //initializing elements to create task in html
    const tasksWindow=document.querySelector('.tasks-window')//main element fo rchild nodes to be appended to
    let taskContainer=document.createElement('div')
    taskContainer.classList.add('task-container')
    taskContainer.setAttribute("id", taskNumber.toString());

    let number=document.createElement('div') //create task elements
    let name=document.createElement('div')
    let note=document.createElement('div')
    let date=document.createElement('div')
    let done=document.createElement('i')
    let remove=document.createElement('i')

    number.classList.add('numb')
    name.classList.add('name')
    note.classList.add('note')
    date.classList.add('date')
    done.classList.add('material-icons')
    done.classList.add('task-done-button')
    done.textContent="done"
    done.style.fontSize="30px"
    remove.classList.add('material-icons')
    remove.classList.add('task-delete-button')
    remove.classList.fontSize='30px'
    remove.textContent="remove_circle_outline"

    //now we assign each task its values--->
    number.textContent=taskNumber
    name.textContent=taskName
    note.textContent=notes
    date.textContent=duedate

    taskContainer.appendChild(number)
    taskContainer.appendChild(name)
    taskContainer.appendChild(note)
    taskContainer.appendChild(date)
    taskContainer.appendChild(remove)
    taskContainer.appendChild(done)

    tasksWindow.appendChild(taskContainer)
    
    done.addEventListener('click',()=>{
        window.choice="complete"// so that task turns green instead of red
        deleteTask(taskNumber)
    })
    remove.addEventListener('click',()=>{
        window.choice="remove"
        deleteTask(taskNumber)
    })// task number helps identify the task 
}
function deleteTask(number){//creates an array, deletes task, pushes array back to LS
    let key=window.group
    number=number-1
    let arr=[]
    arr=JSON.parse(localStorage.getItem(key))
    arr.splice(number,1)
    updateTaskNumber(arr,number,key)
    localStorage.setItem(key,JSON.stringify(arr))
    setTimeout(() => {
        clearTaskElements() //clears current task elements
        displayTasks(group) //displays new tasks with updated numbers
    }, 500);
}
function updateTaskNumber(arr,number,group){// updates task numbers in array and also creates new tasks again in display
    let ln=arr.length
    for(let i=number;i<ln;i++){
        arr[i].taskNumber=i+1
    }
    taskAnimate(number)
}
function taskAnimate(number){
    number=parseInt(number)+1
    let task=document.getElementById(number)
    task.style.transition='all 0.7s'
    task.style.opacity='0%'
    console.log(window.choice)
    if(window.choice=="remove"){
        task.style.backgroundColor='rgba(255, 0, 0, 0.595)'
    }
    else{
        task.style.backgroundColor='green'
    }
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
/* harmony export */   "groupInputChecker": () => (/* binding */ groupInputChecker),
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

function groupInputChecker(classname){
    let value=document.querySelector(classname).value
    let length=document.querySelector(classname).value.length
    if(stringHasTheWhiteSpaceOrNot(value)==false){
    if(value!='' && length>3 ){
        return true
    }
    else{
        return false
    }
}
}
function stringHasTheWhiteSpaceOrNot(value){// do not export
    return value.indexOf(' ') >= 0;
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
const newGroupLink=document.querySelector('.new-group-link')
const reset=document.querySelector('.reset-button')
const message=document.querySelector('.default-message')
//input declarations
let taskName
let notes
let taskDate
let taskNumber
let duedate
 



newTaskBtn.addEventListener('click',()=>{
    if(_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.groupSelected==null){
        message.style.color="tomato"
        setTimeout(() => {
            message.style.color="gray"
        }, 800);
    }
    else{
       (0,_domscripts_openForm__WEBPACK_IMPORTED_MODULE_0__.openNewForm)()
    }
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
newGroupLink.addEventListener('click',()=>{
    ;(0,_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.createGroupForm)()
})

reset.addEventListener('click',()=>{
    if(confirm('Reset to Default? This will erase all your current groups ⚠.')==true){
        reset.style.transform=('rotate(-90deg)')
        setTimeout(() => { 
        localStorage.clear()
        location.reload()
        }, 1000);
    }
})
//<----------------Create new task Functions --------------->

class task{//class constructor
    constructor(taskNumber,taskName,notes,duedate){
    this.taskNumber=taskNumber
    this.taskName=taskName
    this.notes=notes
    this.duedate=duedate
    this.status=false
    }
}

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
     let localArray=JSON.parse(localStorage.getItem(groupSelected) || '[]2')//gets item from LS
     localArray.push(Task)//push item to local array 
     localStorage.setItem(groupSelected,JSON.stringify(localArray))//push updated array back to ls
}

//<--------------on start functions here------------>

function pageLoad(){//gets groups from localstorage and creates new arrays
     if(localStorage.getItem("user")==null){
        localStorage.setItem("user",1)
        localStorage.setItem("chores",JSON.stringify([{taskNumber: 1, taskName: "Eat Moulded Cheese", notes: "This Div is Scrollable, try me!    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", duedate: "None"},{taskNumber: 2, taskName: "Give doggo food", notes: "fd", duedate: "None"},{taskNumber: 3, taskName: "Wash your face silly!", notes: "fd", duedate: "None"},{taskNumber: 4, taskName: "Clean Fridge!", notes: "Clean The Insides too!", duedate: "None"},{taskNumber: 5, taskName: "Do the laundry!", notes: "Use the other detergent not that one", duedate: "None"},{taskNumber: 6, taskName: "Charge the Mac", notes: "Remeber to shut it down before leaving.", duedate: "None"},{taskNumber: 7, taskName: "Am I Scrollable?", notes: "I am too! Not a lot but Still!", duedate: "None"}])) // default array
        localStorage.setItem("odin",JSON.stringify([{taskNumber: 1, taskName: "Complete To-Do Website's Logic", notes: "None", duedate: "" },{taskNumber: 2, taskName: "Clean Up Unused Scripts", notes: "Todo directory", duedate: "None" },{taskNumber: 3, taskName: "Learn Advanced Css", notes: "None", duedate: "∞" }]))
    }
     createGroupsStartup()
}
function createGroupsStartup(){
    let ln=localStorage.length
     let groupName
    for(let i=ln-1;i>=0;i--){//loop runs in reverse so that latest group gets added last
        groupName=localStorage.key(i)
        if(groupName!="user"){
        window[groupName]=JSON.parse(localStorage.getItem(groupName)) || [];  //create array for each group stored in local storge
        let array=window[groupName]
        let tasks=localStorage.getItem(groupName)//to get tasks for particular group
        tasks=JSON.parse(tasks)
        array.push(tasks)
        ;(0,_domscripts_creategroupform__WEBPACK_IMPORTED_MODULE_6__.createGroupElement)(groupName)
        }
    }  
}

pageLoad()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLG1CQUFtQixLQUFLLEtBQUs7QUFDN0I7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQWtCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21zY3JpcHRzL29wZW5Gb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9yZW1vdmVHcm91cC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2FkZG5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9jYW5jZWx0YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2xvc2Vmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvZGlzcGxheXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvZHVlZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2lucHV0Y2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9zZW5kSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhclRhc2tFbGVtZW50cywgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi4vbG9naWMvZGlzcGxheXRhc2tzJ1xuaW1wb3J0IHsgZ3JvdXBJbnB1dENoZWNrZXIgfSBmcm9tICcuLi9sb2dpYy9pbnB1dGNoZWNrJ1xuaW1wb3J0IHsgc2VuZEl0ZW0gfSBmcm9tICcuLi9sb2dpYy9zZW5kSXRlbSdcbmltcG9ydCB7IHJlbW92ZUdyb3VwIH0gZnJvbSAnLi9yZW1vdmVHcm91cCdcblxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cEZvcm0oKXtcbiAgICBjb25zdCBzaWRlYmFyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgY29uc3QgY2xvc2VCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY29uc3QgYWRkR3JvdXBCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIilcblxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvdXAtZm9ybS1jb250YWluZXInKVxuICAgIGZvcm1Db250YWluZXIuc3R5bGUud2lkdGg9XCIxMzAlXCJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdncm91cC1uYW1lLWlucHV0JylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZ3JvdXBmb3JtLWJ0bicpXG4gICAgY2xvc2VCdG4uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQ9XCJjbG9zZVwiXG4gICAgY2xvc2VCdG4ub25tb3VzZW92ZXI9XCJjb2xvcjogYmxhY2s7XCJcbiAgICBhZGRHcm91cEJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gICAgYWRkR3JvdXBCdG4uY2xhc3NMaXN0LmFkZCgnZ3JwZm9ybWFkZCcpXG4gICAgYWRkR3JvdXBCdG4udGV4dENvbnRlbnQ9XCJhZGRcIlxuICAgIGlucHV0LnN0eWxlLmJvcmRlcj1cIm5vbmVcIlxuICAgIGlucHV0LnN0eWxlLmZvbnRGYW1pbHk9XCJyb2JvdG8gY29uZGVuc2VkXCJcbiAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ5ZWxsb3dncmVlblwiXG4gICAgaW5wdXQuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjRzXCJcbiAgICBpbnB1dC50eXBlPVwidGV4dFwiXG4gICAgY29uc3QgZG90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgaW5wdXQuc2l6ZT1cIjE1XCJcbiAgICBpbnB1dC5mb250U2l6ZT0oXCIyNHB4XCIpXG4gICAgXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUub3BhY2l0eT1cIjFcIlxuICAgIH0sIDEwMCk7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlR3JvdXBGb3JtKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZG90KVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRHcm91cEJ0bilcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGlmKGNvbmZpcm0oJ0FyZSB5b3UgU3VyZSBZb3UgV2FudCBUbyBDYW5jZWw/Jyk9PXRydWUpe1xuICAgICAgICAgICAgY2xvc2VHcm91cEZvcm0oKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkSW5mbylcbn1cbmZ1bmN0aW9uIGNsb3NlR3JvdXBGb3JtKCl7XG4gICAgY29uc3QgZ3JvdXBGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1mb3JtLWNvbnRhaW5lcicpXG4gICAgZ3JvdXBGb3JtLnN0eWxlLm9wYWNpdHk9JzAnXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGdyb3VwRm9ybS5yZW1vdmUoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVHcm91cEZvcm0pXG4gICAgfSwgNTAwKTtcbn1cblxuLy9mdW5jdGlvbnMgdG8gZXhlY3V0ZSBhZnRlciBhZGQgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWRcblxuZnVuY3Rpb24gYWRkSW5mbygpey8vY2FwdHVyZXMgaW5mb1xuICAgIGxldCBpbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtbmFtZS1pbnB1dCcpXG4gICAgaWYoZ3JvdXBJbnB1dENoZWNrZXIoJy5ncm91cC1uYW1lLWlucHV0Jyk9PXRydWUpe1xuICAgICAgICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiMxMWZmMDBcIlxuICAgICAgICBsZXQgZ3JvdXBOYW1lPWlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVHcm91cEVsZW1lbnQoZ3JvdXBOYW1lKVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhbGVydChcIk9ubHkgQWxwaGFiZXRzIGFyZSBhbGxvd2VkIHdpdGhvdXQgc3BhY2VzIChtaW4gNCBjaGFyYWN0ZXJzKSFcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwQXJyYXkoZ3JvdXBOYW1lKXsvL3RvIGNyZWF0ZSBsb2NhbCBhcnJheSB0byBzdG9yZSB0YXNrc1xuICAgIGxldCBhcnI9d2luZG93W2dyb3VwTmFtZV09IFtdXG4gICAgbGV0IHRhc2tzPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBOYW1lKSlcbiAgICBpZih0YXNrcz09bnVsbCl7XG4gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ3JvdXBOYW1lLEpTT04uc3RyaW5naWZ5KGFycikpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgZm9yKGxldCBpPTA7aTx0YXNrcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IHRhc2s9dGFza3NbaV1cbiAgICAgICAgYXJyLnB1c2godGFzaylcbiAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cEVsZW1lbnQoZ3JvdXBOYW1lKXsvL2NyZWF0ZXMgbmV3IGdyb3VwIGVsZW1lbnQgaW4gc2lkZWJhclxuICAgIGNvbnN0IGZvcm1Db250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGxldCBjb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JvdXAtY29udGFpbmVyJylcblxuICAgIC8vY3JlYXRlIGdyb3VwIGVsZW1lbnQgYW5kIGFzc2lnbiBpdCBhIHRpdGxlIG51bWJlclxuICAgIGxldCBncm91cFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZ3JvdXBUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgY29uc3Qgc3RyMiA9IGdyb3VwTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwTmFtZS5zbGljZSgxKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChncm91cE5hbWUpLy9mb3IgaW5kZW50aWZpY2F0aW9uIHdoZW4gZGVsZXRlaW5nIGVsbWVudFxuICAgIGdyb3VwVGl0bGUudGV4dENvbnRlbnQ9IHN0cjJcblxuICAgIC8vU3Bhd24gRG90IGZvciB0aXRsZVxuICAgIGNvbnN0IGRvdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90JylcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuXG4gICAgLy9jcmVhdGUgY2xvc2UgYnV0dG9uXG4gICAgbGV0IGNsb3NlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1ncm91cC1idG4nKVxuICAgIGNsb3NlQnRuLnRleHRDb250ZW50PSgnY2xvc2UnKVxuXG4gICAgLy90aXRsZSBhbmQgZG90IGNvbnRhaW5lclxuICAgIGxldCB0aXRsZURvdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlRG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRvdC1jb250YWluZXInKVxuICAgIHRpdGxlRG90LmFwcGVuZENoaWxkKGRvdClcbiAgICB0aXRsZURvdC5hcHBlbmRDaGlsZChncm91cFRpdGxlKVxuXG4gICAgLy9hZGQgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZWlyIG9yZGVyLCB0byB0aGUgY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRG90KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgaWYoY29uZmlybShcIkFyZSBZb3UgU3VyZSBZb3UgV2FudCB0byBEZWxldGUgVGhlIFwiK2dyb3VwVGl0bGUudGV4dENvbnRlbnQrXCIgR3JvdXA/XCIpPT10cnVlKXtcbiAgICAgICAgICAgIGxldCBuYW1lPWdyb3VwVGl0bGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHJlbW92ZUdyb3VwKG5hbWUpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vY3JlYXRlIGFycmF5XG4gICAgY3JlYXRlR3JvdXBBcnJheShncm91cE5hbWUpXG4gICAgZ3JvdXBTZWxlY3Rpb24oKVxuICAgIGdyb3VwU2VsZWN0b3IoKVxuICAgIGxldCBncnBUaXRsZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKSAvL3RoaXMgc3RlcCBpcyBuZWNjZXNzYXJ5IHRvIGJ1aWxkIHRhc2sgbm9kZXMgd2hlbiB0aGUgZ3JvdXAgaXMgc2VsZWN0ZWRcbiAgICBncnBUaXRsZS5mb3JFYWNoKHRpdGxlID0+e1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LW1lc3NhZ2UnKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgIGNsZWFyVGFza0VsZW1lbnRzKClcbiAgICAgICAgICAgICAgIGxldCBuYW1lPXRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICBuYW1lPW5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgZGlzcGxheVRhc2tzKG5hbWUpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cbmxldCBncm91cFNlbGVjdGVkXG5mdW5jdGlvbiBncm91cFNlbGVjdG9yKCl7Ly9jaGVja3Mgd2hpY2ggZ3JvdXAgaXMgY3VycmVudGx5IHNlbGVjdGVkXG4gICAgbGV0IGdyb3VwPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpXG4gICAgZ3JvdXAuZm9yRWFjaCh0aXRsZT0+e1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGxldCBncm91cG5hbWU9dGl0bGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgIGdyb3VwbmFtZT0gZ3JvdXBuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZ3JvdXBuYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgZ3JvdXBTZWxlY3RlZD1ncm91cG5hbWVcbiAgICAgICAgIH0pXG4gICAgfSlcbn1cbmdyb3VwU2VsZWN0b3IoKVxuZnVuY3Rpb24gZ3JvdXBTZWxlY3Rpb24oKXtcbiAgICBjb25zdCBncm91cHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJylcbiAgICBncm91cHMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+e2dyb3VwLnN0eWxlLmNvbG9yPVwiYmxhY2tcIn0pLy90byByZXNldCBzZWxlY3RlZCBncm91cCwgaWYgYW55XG4gICAgICAgICAgICBpdGVtLnN0eWxlLmNvbG9yPVwieWVsbG93Z3JlZW5cIlxuICAgICAgICAgICAgZ3JvdXBTZWxlY3RvcihpdGVtKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgfVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Hcm91cChncm91cE5hbWUsdGFzayl7XG4gICBhcnJheT13aW5kb3dbZ3JvdXBOYW1lXVxuICAgYXJyYXkucHVzaCh0YXNrKVxufVxuXG5leHBvcnQgeyBjcmVhdGVHcm91cEZvcm0sY2xvc2VHcm91cEZvcm0sYWRkSW5mbyxncm91cFNlbGVjdGVkLGNyZWF0ZUdyb3VwRWxlbWVudCB9IiwiZnVuY3Rpb24gb3Blbk5ld0Zvcm0oKXtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy13aW5kb3cnKTtcbiAgICAgZWxlbS5zY3JvbGxUb3A9JzAnXG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT0nMTAlJ1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgdGFza0Zvcm0uc3R5bGUudHJhbnNpdGlvbj1cImFsbCAxc1wiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRhc2tGb3JtLnN0eWxlLm9wYWNpdHk9JzEnXG4gICAgfSwgOTAwKTtcbn1cblxuZXhwb3J0IHsgb3Blbk5ld0Zvcm0gfSIsImZ1bmN0aW9uIHJlbW92ZUdyb3VwKGdyb3VwTmFtZSl7XG4gICAgIGdyb3VwTmFtZSA9IGdyb3VwTmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGdyb3VwTmFtZS5zbGljZSgxKTtcbiAgICAvLyBmdW5jdGlvbiB0byBleGVjdHVlIHJlbW92YWwgZnJvbSBvZmZsaW5lIHN0b3JhZ2VcbiAgICBsZXQgbG49bG9jYWxTdG9yYWdlLmxlbmd0aFxuICAgIGZvcihsZXQgaT0wO2k8bG47aSsrKXsvL3RvIGZpbmQgYW5kIHJtZW92ZSBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgICBpZihsb2NhbFN0b3JhZ2Uua2V5KGkpPT1ncm91cE5hbWUpe1xuICAgICAgICAgICAgbGV0IGtleT1sb2NhbFN0b3JhZ2Uua2V5KGkpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9yZW1vdmUgZWxlbWVudCBmcm9tIGh0bWwgXG4gICAgbGV0IGdyb3VwPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK2dyb3VwTmFtZSlcbiAgICBncm91cC5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGdyb3VwLnJlbW92ZSgpXG4gICAgfSwgNTAwKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKS8vc28gdGhhdCBhcnJheSBnZXRzIGRlbGV0ZWQgdG9vXG59XG5cbmV4cG9ydCB7IHJlbW92ZUdyb3VwIH0iLCJmdW5jdGlvbiBhZGROb3Rlcygpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IGFkZE5vdGVzIH0iLCJpbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL2Nsb3NlZm9ybSdcblxuZnVuY3Rpb24gY2FuY2VsVGFzaygpe1xuICAgIGNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZWRcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLnZhbHVlPVwiXCJcbiAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsb3NlRm9ybSgpXG4gICAgfSwgODAwKTtcbn1cblxuZXhwb3J0IHtjYW5jZWxUYXNrfSIsImZ1bmN0aW9uIGNsb3NlRm9ybSgpe1xuICAgIGNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkZXInKS5zdHlsZS5tYXJnaW5Cb3R0b209XCI1cHhcIlxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmdiYSgwLCAwLCAwLCAwLjY0MilcIlxuICAgIFxufVxuXG5leHBvcnQgeyBjbG9zZUZvcm0gfSIsImZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhncm91cE5hbWUpey8vZnVuY3Rpb24gdG8gY2xlYXIgdGFza3MgaW4gdmlldyBhbmQgY3JlYXRlIGVsZW1lbnRzIHRvIHNob3cgbmV3IHRhc2tzIGluIGdyb3VwIGFycmF5XG4gICAgbGV0IGFycj0gW11cbiAgICBhcnI9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpKVxuICAgIGNvbnN0IGxuPWFyci5sZW5ndGhcbiAgICB3aW5kb3cuZ3JvdXA9Z3JvdXBOYW1lXG4gICAgZm9yKGxldCBpPTA7aTxsbjtpKyspe1xuICAgICAgICBsZXQgYXJyYXk9YXJyW2ldXG4gICAgICAgIGxldCBuYW1lPWFycmF5LnRhc2tOYW1lXG4gICAgICAgIGxldCBudW1iZXI9YXJyYXkudGFza051bWJlclxuICAgICAgICBsZXQgbm90ZT1hcnJheS5ub3Rlc1xuICAgICAgICBsZXQgZGF0ZT1hcnJheS5kdWVkYXRlXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50cyhuYW1lLG51bWJlcixub3RlLGRhdGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudHModGFza05hbWUsdGFza051bWJlcixub3RlcyxkdWVkYXRlKXsvL2ludGVybmFsIGZ1bmN0aW9uIERPIE5PVCBFWFBPUlQhXG5cbiAgICAvL2luaXRpYWxpemluZyBlbGVtZW50cyB0byBjcmVhdGUgdGFzayBpbiBodG1sXG4gICAgY29uc3QgdGFza3NXaW5kb3c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXdpbmRvdycpLy9tYWluIGVsZW1lbnQgZm8gcmNoaWxkIG5vZGVzIHRvIGJlIGFwcGVuZGVkIHRvXG4gICAgbGV0IHRhc2tDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJylcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2tOdW1iZXIudG9TdHJpbmcoKSk7XG5cbiAgICBsZXQgbnVtYmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vY3JlYXRlIHRhc2sgZWxlbWVudHNcbiAgICBsZXQgbmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBub3RlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGRhdGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgZG9uZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBsZXQgcmVtb3ZlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuXG4gICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWInKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpXG4gICAgbm90ZS5jbGFzc0xpc3QuYWRkKCdub3RlJylcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKVxuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgndGFzay1kb25lLWJ1dHRvbicpXG4gICAgZG9uZS50ZXh0Q29udGVudD1cImRvbmVcIlxuICAgIGRvbmUuc3R5bGUuZm9udFNpemU9XCIzMHB4XCJcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idXR0b24nKVxuICAgIHJlbW92ZS5jbGFzc0xpc3QuZm9udFNpemU9JzMwcHgnXG4gICAgcmVtb3ZlLnRleHRDb250ZW50PVwicmVtb3ZlX2NpcmNsZV9vdXRsaW5lXCJcblxuICAgIC8vbm93IHdlIGFzc2lnbiBlYWNoIHRhc2sgaXRzIHZhbHVlcy0tLT5cbiAgICBudW1iZXIudGV4dENvbnRlbnQ9dGFza051bWJlclxuICAgIG5hbWUudGV4dENvbnRlbnQ9dGFza05hbWVcbiAgICBub3RlLnRleHRDb250ZW50PW5vdGVzXG4gICAgZGF0ZS50ZXh0Q29udGVudD1kdWVkYXRlXG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlcilcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlKVxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpXG5cbiAgICB0YXNrc1dpbmRvdy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKVxuICAgIFxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHdpbmRvdy5jaG9pY2U9XCJjb21wbGV0ZVwiLy8gc28gdGhhdCB0YXNrIHR1cm5zIGdyZWVuIGluc3RlYWQgb2YgcmVkXG4gICAgICAgIGRlbGV0ZVRhc2sodGFza051bWJlcilcbiAgICB9KVxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgd2luZG93LmNob2ljZT1cInJlbW92ZVwiXG4gICAgICAgIGRlbGV0ZVRhc2sodGFza051bWJlcilcbiAgICB9KS8vIHRhc2sgbnVtYmVyIGhlbHBzIGlkZW50aWZ5IHRoZSB0YXNrIFxufVxuZnVuY3Rpb24gZGVsZXRlVGFzayhudW1iZXIpey8vY3JlYXRlcyBhbiBhcnJheSwgZGVsZXRlcyB0YXNrLCBwdXNoZXMgYXJyYXkgYmFjayB0byBMU1xuICAgIGxldCBrZXk9d2luZG93Lmdyb3VwXG4gICAgbnVtYmVyPW51bWJlci0xXG4gICAgbGV0IGFycj1bXVxuICAgIGFycj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgYXJyLnNwbGljZShudW1iZXIsMSlcbiAgICB1cGRhdGVUYXNrTnVtYmVyKGFycixudW1iZXIsa2V5KVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeShhcnIpKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhclRhc2tFbGVtZW50cygpIC8vY2xlYXJzIGN1cnJlbnQgdGFzayBlbGVtZW50c1xuICAgICAgICBkaXNwbGF5VGFza3MoZ3JvdXApIC8vZGlzcGxheXMgbmV3IHRhc2tzIHdpdGggdXBkYXRlZCBudW1iZXJzXG4gICAgfSwgNTAwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tOdW1iZXIoYXJyLG51bWJlcixncm91cCl7Ly8gdXBkYXRlcyB0YXNrIG51bWJlcnMgaW4gYXJyYXkgYW5kIGFsc28gY3JlYXRlcyBuZXcgdGFza3MgYWdhaW4gaW4gZGlzcGxheVxuICAgIGxldCBsbj1hcnIubGVuZ3RoXG4gICAgZm9yKGxldCBpPW51bWJlcjtpPGxuO2krKyl7XG4gICAgICAgIGFycltpXS50YXNrTnVtYmVyPWkrMVxuICAgIH1cbiAgICB0YXNrQW5pbWF0ZShudW1iZXIpXG59XG5mdW5jdGlvbiB0YXNrQW5pbWF0ZShudW1iZXIpe1xuICAgIG51bWJlcj1wYXJzZUludChudW1iZXIpKzFcbiAgICBsZXQgdGFzaz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChudW1iZXIpXG4gICAgdGFzay5zdHlsZS50cmFuc2l0aW9uPSdhbGwgMC43cydcbiAgICB0YXNrLnN0eWxlLm9wYWNpdHk9JzAlJ1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5jaG9pY2UpXG4gICAgaWYod2luZG93LmNob2ljZT09XCJyZW1vdmVcIil7XG4gICAgICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZ2JhKDI1NSwgMCwgMCwgMC41OTUpJ1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nZ3JlZW4nXG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJUYXNrRWxlbWVudHMoKXtcbiAgICBsZXQgdGFza0VsZW1lbnRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNvbnRhaW5lcicpXG4gICAgdGFza0VsZW1lbnRzLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZGlzcGxheVRhc2tzLGNsZWFyVGFza0VsZW1lbnRzIH0iLCJmdW5jdGlvbiBkYXRlU2VsZWN0b3IoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IGRhdGVTZWxlY3RvciB9ICIsImZ1bmN0aW9uIGlucHV0Q2hlY2tlcihjbGFzc25hbWUpe1xuICAgIGxldCB2YWx1ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWVcbiAgICBsZXQgbGVuZ3RoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NuYW1lKS52YWx1ZS5sZW5ndGhcbiAgICBpZih2YWx1ZSE9JycgJiYgbGVuZ3RoPjMpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdyb3VwSW5wdXRDaGVja2VyKGNsYXNzbmFtZSl7XG4gICAgbGV0IHZhbHVlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NuYW1lKS52YWx1ZVxuICAgIGxldCBsZW5ndGg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc25hbWUpLnZhbHVlLmxlbmd0aFxuICAgIGlmKHN0cmluZ0hhc1RoZVdoaXRlU3BhY2VPck5vdCh2YWx1ZSk9PWZhbHNlKXtcbiAgICBpZih2YWx1ZSE9JycgJiYgbGVuZ3RoPjMgKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxufVxuZnVuY3Rpb24gc3RyaW5nSGFzVGhlV2hpdGVTcGFjZU9yTm90KHZhbHVlKXsvLyBkbyBub3QgZXhwb3J0XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJyAnKSA+PSAwO1xuIH1cblxuZXhwb3J0IHsgaW5wdXRDaGVja2VyLGdyb3VwSW5wdXRDaGVja2VyIH0iLCJmdW5jdGlvbiBzZW5kSXRlbShhcnJheSxncm91cCl7Ly9zZXRzIGl0ZW0gdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ3JvdXAsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG59XG4gXG5leHBvcnQgeyBzZW5kSXRlbSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCBmdW5jdGlvbnMgaGVyZTtcbmltcG9ydCB7IG9wZW5OZXdGb3JtIH0gZnJvbSAnLi9kb21zY3JpcHRzL29wZW5Gb3JtJ1xuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9sb2dpYy9jbG9zZWZvcm0nXG5pbXBvcnQgeyBjYW5jZWxUYXNrIH0gZnJvbSAnLi9sb2dpYy9jYW5jZWx0YXNrJ1xuaW1wb3J0IHsgZGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi9sb2dpYy9kdWVkYXRlJ1xuaW1wb3J0IHsgYWRkTm90ZXMgfSBmcm9tICcuL2xvZ2ljL2FkZG5vdGUnXG5pbXBvcnQgeyBpbnB1dENoZWNrZXIgfSBmcm9tICcuL2xvZ2ljL2lucHV0Y2hlY2snXG5pbXBvcnQgeyBmb3JtYXQscGFyc2VJU08sc2V0LHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IGNyZWF0ZUdyb3VwRm9ybSwgY2xvc2VHcm91cEZvcm0sIGNyZWF0ZUdyb3VwRWxlbWVudCB9IGZyb20gJy4vZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0nXG5pbXBvcnQgeyBzZW5kSXRlbSB9IGZyb20gJy4vbG9naWMvc2VuZEl0ZW0nXG5pbXBvcnQgeyBncm91cFNlbGVjdGVkIH0gZnJvbSAnLi9kb21zY3JpcHRzL2NyZWF0ZWdyb3VwZm9ybSdcbmltcG9ydCB7IGNsZWFyVGFza0VsZW1lbnRzLCBkaXNwbGF5VGFza3MgfSBmcm9tICcuL2xvZ2ljL2Rpc3BsYXl0YXNrcydcblxuY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuY29uc3QgbmV3Tm90ZWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbm90ZS1idXR0b25cIilcbmNvbnN0IG5ld1Rhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpXG5jb25zdCBjYW5jZWxUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzaycpXG5jb25zdCBhZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG5jb25zdCBkdWVEYXRlQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1idXR0b24nKVxuY29uc3QgbmV3R3JvdXBMaW5rPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ3JvdXAtbGluaycpXG5jb25zdCByZXNldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnV0dG9uJylcbmNvbnN0IG1lc3NhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtbWVzc2FnZScpXG4vL2lucHV0IGRlY2xhcmF0aW9uc1xubGV0IHRhc2tOYW1lXG5sZXQgbm90ZXNcbmxldCB0YXNrRGF0ZVxubGV0IHRhc2tOdW1iZXJcbmxldCBkdWVkYXRlXG4gXG5cblxuXG5uZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGlmKGdyb3VwU2VsZWN0ZWQ9PW51bGwpe1xuICAgICAgICBtZXNzYWdlLnN0eWxlLmNvbG9yPVwidG9tYXRvXCJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtZXNzYWdlLnN0eWxlLmNvbG9yPVwiZ3JheVwiXG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgb3Blbk5ld0Zvcm0oKVxuICAgIH1cbn0pXG5cbmR1ZURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBkYXRlU2VsZWN0b3IoKVxufSlcblxubmV3Tm90ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgYWRkTm90ZXMoKVxufSlcblxuY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY2FuY2VsVGFzaygpXG59KVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFkZFRhc2soKVxufSlcblxuXG5cbi8vY3JlYXRlIG5ldyBncm91cFxuY29uc3QgYWRkR3JvdXBCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKVxuYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY3JlYXRlR3JvdXBGb3JtKClcbn0pXG5uZXdHcm91cExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY3JlYXRlR3JvdXBGb3JtKClcbn0pXG5cbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGlmKGNvbmZpcm0oJ1Jlc2V0IHRvIERlZmF1bHQ/IFRoaXMgd2lsbCBlcmFzZSBhbGwgeW91ciBjdXJyZW50IGdyb3VwcyDimqAuJyk9PXRydWUpe1xuICAgICAgICByZXNldC5zdHlsZS50cmFuc2Zvcm09KCdyb3RhdGUoLTkwZGVnKScpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufSlcbi8vPC0tLS0tLS0tLS0tLS0tLS1DcmVhdGUgbmV3IHRhc2sgRnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLT5cblxuY2xhc3MgdGFza3svL2NsYXNzIGNvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IodGFza051bWJlcix0YXNrTmFtZSxub3RlcyxkdWVkYXRlKXtcbiAgICB0aGlzLnRhc2tOdW1iZXI9dGFza051bWJlclxuICAgIHRoaXMudGFza05hbWU9dGFza05hbWVcbiAgICB0aGlzLm5vdGVzPW5vdGVzXG4gICAgdGhpcy5kdWVkYXRlPWR1ZWRhdGVcbiAgICB0aGlzLnN0YXR1cz1mYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVGFzaygpe1xuICAgIGlmIChpbnB1dENoZWNrZXIoJy50YXNrLW5hbWUnKT09dHJ1ZSAmJiBncm91cFNlbGVjdGVkIT1udWxsKXtcbiAgICAvL2V4dHJhIGFuaW1hdGlvbiBlZmZlY3RzXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiIzdkZDc3N1wiXG4gICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIGNhcHR1cmVJbmZvKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICAgICAgY2xlYXJUYXNrRWxlbWVudHMoKVxuICAgICAgICBkaXNwbGF5VGFza3MoZ3JvdXBTZWxlY3RlZClcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Mtd2luZG93Jyk7XG4gICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IGVsZW0uc2Nyb2xsSGVpZ2h0O1xuICAgIH0sIDgwMCk7XG59XG5lbHNlIGlmIChpbnB1dENoZWNrZXIoJy50YXNrLW5hbWUnKT09ZmFsc2Upe1xuICAgIGFsZXJ0KCdQbGVhc2UgRW50ZXIgQSBWYWxpZCBDbGFzcyBOYW1lIPCfkYAnKVxufVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlSW5mbygpe1xuICAgIHRhc2tOYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZVxuICAgIG5vdGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlXG4gICAgaWYobm90ZXM9PW51bGx8fCBub3Rlcz09XCJcIil7XG4gICAgICAgIG5vdGVzPVwiTm9uZVwiXG4gICAgfVxuICAgIGR1ZWRhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZVxuICAgIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZClcbn1cblxubGV0IFRhc2tcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZCl7XG4gICAgIGxldCBhcnJheT13aW5kb3dbZ3JvdXBTZWxlY3RlZF1cbiAgICAgdGFza051bWJlcj0oYXJyYXkubGVuZ3RoKzEpLnRvU3RyaW5nKClcbiAgICAgVGFzayA9IG5ldyB0YXNrKHRhc2tOdW1iZXIsdGFza05hbWUsbm90ZXMsZHVlZGF0ZSlcbiAgICAgYXJyYXkucHVzaChUYXNrKVxuICAgICBsZXQgbG9jYWxBcnJheT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwU2VsZWN0ZWQpIHx8ICdbXTInKS8vZ2V0cyBpdGVtIGZyb20gTFNcbiAgICAgbG9jYWxBcnJheS5wdXNoKFRhc2spLy9wdXNoIGl0ZW0gdG8gbG9jYWwgYXJyYXkgXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwU2VsZWN0ZWQsSlNPTi5zdHJpbmdpZnkobG9jYWxBcnJheSkpLy9wdXNoIHVwZGF0ZWQgYXJyYXkgYmFjayB0byBsc1xufVxuXG4vLzwtLS0tLS0tLS0tLS0tLW9uIHN0YXJ0IGZ1bmN0aW9ucyBoZXJlLS0tLS0tLS0tLS0tPlxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpey8vZ2V0cyBncm91cHMgZnJvbSBsb2NhbHN0b3JhZ2UgYW5kIGNyZWF0ZXMgbmV3IGFycmF5c1xuICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik9PW51bGwpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwxKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNob3Jlc1wiLEpTT04uc3RyaW5naWZ5KFt7dGFza051bWJlcjogMSwgdGFza05hbWU6IFwiRWF0IE1vdWxkZWQgQ2hlZXNlXCIsIG5vdGVzOiBcIlRoaXMgRGl2IGlzIFNjcm9sbGFibGUsIHRyeSBtZSEgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLiBcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiAyLCB0YXNrTmFtZTogXCJHaXZlIGRvZ2dvIGZvb2RcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiAzLCB0YXNrTmFtZTogXCJXYXNoIHlvdXIgZmFjZSBzaWxseSFcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiA0LCB0YXNrTmFtZTogXCJDbGVhbiBGcmlkZ2UhXCIsIG5vdGVzOiBcIkNsZWFuIFRoZSBJbnNpZGVzIHRvbyFcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiA1LCB0YXNrTmFtZTogXCJEbyB0aGUgbGF1bmRyeSFcIiwgbm90ZXM6IFwiVXNlIHRoZSBvdGhlciBkZXRlcmdlbnQgbm90IHRoYXQgb25lXCIsIGR1ZWRhdGU6IFwiTm9uZVwifSx7dGFza051bWJlcjogNiwgdGFza05hbWU6IFwiQ2hhcmdlIHRoZSBNYWNcIiwgbm90ZXM6IFwiUmVtZWJlciB0byBzaHV0IGl0IGRvd24gYmVmb3JlIGxlYXZpbmcuXCIsIGR1ZWRhdGU6IFwiTm9uZVwifSx7dGFza051bWJlcjogNywgdGFza05hbWU6IFwiQW0gSSBTY3JvbGxhYmxlP1wiLCBub3RlczogXCJJIGFtIHRvbyEgTm90IGEgbG90IGJ1dCBTdGlsbCFcIiwgZHVlZGF0ZTogXCJOb25lXCJ9XSkpIC8vIGRlZmF1bHQgYXJyYXlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvZGluXCIsSlNPTi5zdHJpbmdpZnkoW3t0YXNrTnVtYmVyOiAxLCB0YXNrTmFtZTogXCJDb21wbGV0ZSBUby1EbyBXZWJzaXRlJ3MgTG9naWNcIiwgbm90ZXM6IFwiTm9uZVwiLCBkdWVkYXRlOiBcIlwiIH0se3Rhc2tOdW1iZXI6IDIsIHRhc2tOYW1lOiBcIkNsZWFuIFVwIFVudXNlZCBTY3JpcHRzXCIsIG5vdGVzOiBcIlRvZG8gZGlyZWN0b3J5XCIsIGR1ZWRhdGU6IFwiTm9uZVwiIH0se3Rhc2tOdW1iZXI6IDMsIHRhc2tOYW1lOiBcIkxlYXJuIEFkdmFuY2VkIENzc1wiLCBub3RlczogXCJOb25lXCIsIGR1ZWRhdGU6IFwi4oieXCIgfV0pKVxuICAgIH1cbiAgICAgY3JlYXRlR3JvdXBzU3RhcnR1cCgpXG59XG5mdW5jdGlvbiBjcmVhdGVHcm91cHNTdGFydHVwKCl7XG4gICAgbGV0IGxuPWxvY2FsU3RvcmFnZS5sZW5ndGhcbiAgICAgbGV0IGdyb3VwTmFtZVxuICAgIGZvcihsZXQgaT1sbi0xO2k+PTA7aS0tKXsvL2xvb3AgcnVucyBpbiByZXZlcnNlIHNvIHRoYXQgbGF0ZXN0IGdyb3VwIGdldHMgYWRkZWQgbGFzdFxuICAgICAgICBncm91cE5hbWU9bG9jYWxTdG9yYWdlLmtleShpKVxuICAgICAgICBpZihncm91cE5hbWUhPVwidXNlclwiKXtcbiAgICAgICAgd2luZG93W2dyb3VwTmFtZV09SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpKSB8fCBbXTsgIC8vY3JlYXRlIGFycmF5IGZvciBlYWNoIGdyb3VwIHN0b3JlZCBpbiBsb2NhbCBzdG9yZ2VcbiAgICAgICAgbGV0IGFycmF5PXdpbmRvd1tncm91cE5hbWVdXG4gICAgICAgIGxldCB0YXNrcz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpLy90byBnZXQgdGFza3MgZm9yIHBhcnRpY3VsYXIgZ3JvdXBcbiAgICAgICAgdGFza3M9SlNPTi5wYXJzZSh0YXNrcylcbiAgICAgICAgYXJyYXkucHVzaCh0YXNrcylcbiAgICAgICAgY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSlcbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5wYWdlTG9hZCgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==