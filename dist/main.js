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
    const ln=arr.length
    var group=groupName
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
    taskContainer.classList.add(taskNumber)

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
        //function to remove task from array
        //function to remove task from local storage
        //add amount of tasks done for group and store in LS
    })
    remove.addEventListener('click',()=>{deleteTask(taskNumber)})// tasl number helps identify the task 
}

function deleteTask(number){//creates an array, deletes task, pushes array back to LS
    let key=window.group
    number=number-1
    console.log(number)
    let arr=[]
    arr=JSON.parse(localStorage.getItem(key))
    arr.splice(number,1)
    updateTaskNumber(arr,number,key)
    localStorage.setItem(key,JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem(key)))
    displayTasks(group)
}
function updateTaskNumber(arr,number,group){// updates task numbers in array and also creates new tasks again in display
    let ln=arr.length
    for(let i=number;i<ln;i++){
        arr[i].taskNumber=i+1
    }
    clearTaskElements()
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
const newGroupLink=document.querySelector('.new-group-link')
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
    this.status=false
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
newGroupLink.addEventListener('click',()=>{
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
     let localArray=JSON.parse(localStorage.getItem(groupSelected) || '[]2')//gets item from LS
     localArray.push(Task)//push item to local array 
     localStorage.setItem(groupSelected,JSON.stringify(localArray))//push updated array back to ls
}

//<--------------on start functions here------------>

function pageLoad(){//gets groups from localstorage and creates new arrays
     if(localStorage.getItem("user")==null){
        localStorage.setItem("user",1)
        localStorage.setItem("chores",JSON.stringify([{taskNumber: 1, taskName: "Eat Moulded Cheese", notes: "This Div is Scrollable, try me!    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", duedate: "None"},{taskNumber: 2, taskName: "Give doggo food", notes: "fd", duedate: "None"},{taskNumber: 3, taskName: "Wash your face silly!", notes: "fd", duedate: "None"},{taskNumber: 4, taskName: "Clean Fridge!", notes: "Clean The Insides too!", duedate: "None"},{taskNumber: 5, taskName: "Do the laundry!", notes: "Use the other detergent not that one", duedate: "None"},{taskNumber: 6, taskName: "Charge the Mac", notes: "Remeber to shut it down before leaving.", duedate: "None"},{taskNumber: 7, taskName: "Am I Scrollable?", notes: "I am too! Not a lot but Still!", duedate: "None"}])) // default array
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQ7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBLElBQUksNkVBQWU7QUFDbkIsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQSxRQUFRLCtEQUFZLHdCQUF3QixzRUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBUztBQUNqQixRQUFRLHVFQUFpQjtBQUN6QixRQUFRLGtFQUFZLENBQUMsc0VBQWE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFNBQVMsK0RBQVk7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzRUFBYTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLHVEQUF1RCwyaUJBQTJpQixFQUFFLHlFQUF5RSxFQUFFLCtFQUErRSxFQUFFLDJGQUEyRixFQUFFLDJHQUEyRyxFQUFFLDZHQUE2RyxFQUFFLHNHQUFzRztBQUMvcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUssS0FBSztBQUM3QjtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRkFBa0I7QUFDMUI7QUFDQTtBQUNBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21zY3JpcHRzL29wZW5Gb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9yZW1vdmVHcm91cC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2FkZG5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9jYW5jZWx0YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2xvc2Vmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvZGlzcGxheXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvZHVlZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2lucHV0Y2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9zZW5kSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhclRhc2tFbGVtZW50cywgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi4vbG9naWMvZGlzcGxheXRhc2tzJ1xuaW1wb3J0IHsgaW5wdXRDaGVja2VyIH0gZnJvbSAnLi4vbG9naWMvaW5wdXRjaGVjaydcbmltcG9ydCB7IHNlbmRJdGVtIH0gZnJvbSAnLi4vbG9naWMvc2VuZEl0ZW0nXG5pbXBvcnQgeyByZW1vdmVHcm91cCB9IGZyb20gJy4vcmVtb3ZlR3JvdXAnXG5cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBGb3JtKCl7XG4gICAgY29uc3Qgc2lkZWJhcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGNsb3NlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGNvbnN0IGFkZEdyb3VwQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXG5cbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb3VwLWZvcm0tY29udGFpbmVyJylcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLndpZHRoPVwiMTMwJVwiXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZ3JvdXAtbmFtZS1pbnB1dCcpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWdyb3VwZm9ybS1idG4nKVxuICAgIGNsb3NlQnRuLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIlxuICAgIGNsb3NlQnRuLnRleHRDb250ZW50PVwiY2xvc2VcIlxuICAgIGNsb3NlQnRuLm9ubW91c2VvdmVyPVwiY29sb3I6IGJsYWNrO1wiXG4gICAgYWRkR3JvdXBCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIGFkZEdyb3VwQnRuLmNsYXNzTGlzdC5hZGQoJ2dycGZvcm1hZGQnKVxuICAgIGFkZEdyb3VwQnRuLnRleHRDb250ZW50PVwiYWRkXCJcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXI9XCJub25lXCJcbiAgICBpbnB1dC5zdHlsZS5mb250RmFtaWx5PVwicm9ib3RvIGNvbmRlbnNlZFwiXG4gICAgaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwieWVsbG93Z3JlZW5cIlxuICAgIGlucHV0LnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40c1wiXG4gICAgaW5wdXQudHlwZT1cInRleHRcIlxuICAgIGNvbnN0IGRvdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgnZG90JylcbiAgICBkb3QuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIGlucHV0LnNpemU9XCIxNVwiXG4gICAgaW5wdXQuZm9udFNpemU9KFwiMjRweFwiKVxuICAgIFxuICAgIGZvcm1Db250YWluZXIuc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLm9wYWNpdHk9XCIxXCJcbiAgICB9LCAxMDApO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUdyb3VwRm9ybSlcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvdClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkR3JvdXBCdG4pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpZihjb25maXJtKCdBcmUgeW91IFN1cmUgWW91IFdhbnQgVG8gQ2FuY2VsPycpPT10cnVlKXtcbiAgICAgICAgICAgIGNsb3NlR3JvdXBGb3JtKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZEluZm8pXG59XG5mdW5jdGlvbiBjbG9zZUdyb3VwRm9ybSgpe1xuICAgIGNvbnN0IGdyb3VwRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtZm9ybS1jb250YWluZXInKVxuICAgIGdyb3VwRm9ybS5zdHlsZS5vcGFjaXR5PScwJ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBncm91cEZvcm0ucmVtb3ZlKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlR3JvdXBGb3JtKVxuICAgIH0sIDUwMCk7XG59XG5cbi8vZnVuY3Rpb25zIHRvIGV4ZWN1dGUgYWZ0ZXIgYWRkIGJ1dHRvbiBoYXMgYmVlbiBwcmVzc2VkXG5cbmZ1bmN0aW9uIGFkZEluZm8oKXtcbiAgICBsZXQgaW5wdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLW5hbWUtaW5wdXQnKVxuICAgIC8vaWYoaW5wdXRDaGVja2VyKCcuZ3JvdXAtbmFtZS1pbnB1dCcpPT10cnVlKXtcbiAgICAgIC8vICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgICAgLy8gaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiIzExZmYwMFwiXG4gICAgLy99XG4gICAgY2xvc2VHcm91cEZvcm0oKVxuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiMxMWZmMDBcIlxuICAgIGxldCBncm91cE5hbWU9aW5wdXQudmFsdWVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSlcbiAgICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cEFycmF5KGdyb3VwTmFtZSl7Ly90byBjcmVhdGUgbG9jYWwgYXJyYXkgdG8gc3RvcmUgdGFza3NcbiAgICBsZXQgYXJyPXdpbmRvd1tncm91cE5hbWVdPSBbXVxuICAgIGxldCB0YXNrcz1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwTmFtZSkpXG4gICAgaWYodGFza3M9PW51bGwpe1xuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwTmFtZSxKU09OLnN0cmluZ2lmeShhcnIpKVxuICAgIH1cbiAgICBlbHNle1xuICAgIGZvcihsZXQgaT0wO2k8dGFza3MubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCB0YXNrPXRhc2tzW2ldXG4gICAgICAgIGFyci5wdXNoKHRhc2spXG4gICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSl7Ly9jcmVhdGVzIG5ldyBncm91cCBlbGVtZW50IGluIHNpZGViYXJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBsZXQgY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyb3VwLWNvbnRhaW5lcicpXG5cbiAgICAvL2NyZWF0ZSBncm91cCBlbGVtZW50IGFuZCBhc3NpZ24gaXQgYSB0aXRsZSBudW1iZXJcbiAgICBsZXQgZ3JvdXBUaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGdyb3VwVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIGNvbnN0IHN0cjIgPSBncm91cE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZ3JvdXBOYW1lKS8vZm9yIGluZGVudGlmaWNhdGlvbiB3aGVuIGRlbGV0ZWluZyBlbG1lbnRcbiAgICBncm91cFRpdGxlLnRleHRDb250ZW50PSBzdHIyXG5cbiAgICAvL1NwYXduIERvdCBmb3IgdGl0bGVcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcblxuICAgIC8vY3JlYXRlIGNsb3NlIGJ1dHRvblxuICAgIGxldCBjbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtZ3JvdXAtYnRuJylcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudD0oJ2Nsb3NlJylcblxuICAgIC8vdGl0bGUgYW5kIGRvdCBjb250YWluZXJcbiAgICBsZXQgdGl0bGVEb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kb3QtY29udGFpbmVyJylcbiAgICB0aXRsZURvdC5hcHBlbmRDaGlsZChkb3QpXG4gICAgdGl0bGVEb3QuYXBwZW5kQ2hpbGQoZ3JvdXBUaXRsZSlcblxuICAgIC8vYWRkIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGVpciBvcmRlciwgdG8gdGhlIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURvdClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmKGNvbmZpcm0oXCJBcmUgWW91IFN1cmUgWW91IFdhbnQgdG8gRGVsZXRlIFRoZSBcIitncm91cFRpdGxlLnRleHRDb250ZW50K1wiIEdyb3VwP1wiKT09dHJ1ZSl7XG4gICAgICAgICAgICBsZXQgbmFtZT1ncm91cFRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICByZW1vdmVHcm91cChuYW1lKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2NyZWF0ZSBhcnJheVxuICAgIGNyZWF0ZUdyb3VwQXJyYXkoZ3JvdXBOYW1lKVxuICAgIGdyb3VwU2VsZWN0aW9uKClcbiAgICBncm91cFNlbGVjdG9yKClcbiAgICBsZXQgZ3JwVGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJykgLy90aGlzIHN0ZXAgaXMgbmVjY2Vzc2FyeSB0byBidWlsZCB0YXNrIG5vZGVzIHdoZW4gdGhlIGdyb3VwIGlzIHNlbGVjdGVkXG4gICAgZ3JwVGl0bGUuZm9yRWFjaCh0aXRsZSA9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICBjbGVhclRhc2tFbGVtZW50cygpXG4gICAgICAgICAgICAgICBsZXQgbmFtZT10aXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgbmFtZT1uYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhuYW1lKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5sZXQgZ3JvdXBTZWxlY3RlZFxuZnVuY3Rpb24gZ3JvdXBTZWxlY3Rvcigpey8vY2hlY2tzIHdoaWNoIGdyb3VwIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKVxuICAgIGdyb3VwLmZvckVhY2godGl0bGU9PntcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBsZXQgZ3JvdXBuYW1lPXRpdGxlLnRleHRDb250ZW50XG4gICAgICAgICAgICBncm91cG5hbWU9IGdyb3VwbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGdyb3VwbmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0ZWQ9Z3JvdXBuYW1lXG4gICAgICAgICB9KVxuICAgIH0pXG59XG5ncm91cFNlbGVjdG9yKClcbmZ1bmN0aW9uIGdyb3VwU2VsZWN0aW9uKCl7XG4gICAgY29uc3QgZ3JvdXBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpXG4gICAgZ3JvdXBzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChncm91cCA9Pntncm91cC5zdHlsZS5jb2xvcj1cImJsYWNrXCJ9KS8vdG8gcmVzZXQgc2VsZWN0ZWQgZ3JvdXAsIGlmIGFueVxuICAgICAgICAgICAgaXRlbS5zdHlsZS5jb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICAgICAgICAgIGdyb3VwU2VsZWN0b3IoaXRlbSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIH1cblxuZnVuY3Rpb24gYWRkVGFza1RvR3JvdXAoZ3JvdXBOYW1lLHRhc2spe1xuICAgYXJyYXk9d2luZG93W2dyb3VwTmFtZV1cbiAgIGFycmF5LnB1c2godGFzaylcbn1cblxuZXhwb3J0IHsgY3JlYXRlR3JvdXBGb3JtLGNsb3NlR3JvdXBGb3JtLGFkZEluZm8sZ3JvdXBTZWxlY3RlZCxjcmVhdGVHcm91cEVsZW1lbnQgfSIsImZ1bmN0aW9uIG9wZW5OZXdGb3JtKCl7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Mtd2luZG93Jyk7XG4gICAgIGVsZW0uc2Nyb2xsVG9wPScwJ1xuICAgIGNvbnN0IHRhc2tGb3JtPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkZXInKS5zdHlsZS5tYXJnaW5Cb3R0b209JzEwJSdcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIHRhc2tGb3JtLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMXNcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PScxJ1xuICAgIH0sIDkwMCk7XG59XG5cbmV4cG9ydCB7IG9wZW5OZXdGb3JtIH0iLCJmdW5jdGlvbiByZW1vdmVHcm91cChncm91cE5hbWUpe1xuICAgICBncm91cE5hbWUgPSBncm91cE5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBncm91cE5hbWUuc2xpY2UoMSk7XG4gICAgLy8gZnVuY3Rpb24gdG8gZXhlY3R1ZSByZW1vdmFsIGZyb20gb2ZmbGluZSBzdG9yYWdlXG4gICAgbGV0IGxuPWxvY2FsU3RvcmFnZS5sZW5ndGhcbiAgICBmb3IobGV0IGk9MDtpPGxuO2krKyl7Ly90byBmaW5kIGFuZCBybWVvdmUgaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmtleShpKT09Z3JvdXBOYW1lKXtcbiAgICAgICAgICAgIGxldCBrZXk9bG9jYWxTdG9yYWdlLmtleShpKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vcmVtb3ZlIGVsZW1lbnQgZnJvbSBodG1sIFxuICAgIGxldCBncm91cD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJytncm91cE5hbWUpXG4gICAgZ3JvdXAuc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBncm91cC5yZW1vdmUoKVxuICAgIH0sIDUwMCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCkvL3NvIHRoYXQgYXJyYXkgZ2V0cyBkZWxldGVkIHRvb1xufVxuXG5leHBvcnQgeyByZW1vdmVHcm91cCB9IiwiZnVuY3Rpb24gYWRkTm90ZXMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBhZGROb3RlcyB9IiwiaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9jbG9zZWZvcm0nXG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2soKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwicmVkXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZUZvcm0oKVxuICAgIH0sIDgwMCk7XG59XG5cbmV4cG9ydCB7Y2FuY2VsVGFza30iLCJmdW5jdGlvbiBjbG9zZUZvcm0oKXtcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnZhbHVlPVwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tPVwiNXB4XCJcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJnYmEoMCwgMCwgMCwgMC42NDIpXCJcbiAgICBcbn1cblxuZXhwb3J0IHsgY2xvc2VGb3JtIH0iLCJmdW5jdGlvbiBkaXNwbGF5VGFza3MoZ3JvdXBOYW1lKXsvL2Z1bmN0aW9uIHRvIGNsZWFyIHRhc2tzIGluIHZpZXcgYW5kIGNyZWF0ZSBlbGVtZW50cyB0byBzaG93IG5ldyB0YXNrcyBpbiBncm91cCBhcnJheVxuICAgIGxldCBhcnI9IFtdXG4gICAgYXJyPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBOYW1lKSlcbiAgICBjb25zdCBsbj1hcnIubGVuZ3RoXG4gICAgdmFyIGdyb3VwPWdyb3VwTmFtZVxuICAgIHdpbmRvdy5ncm91cD1ncm91cE5hbWVcbiAgICBmb3IobGV0IGk9MDtpPGxuO2krKyl7XG4gICAgICAgIGxldCBhcnJheT1hcnJbaV1cbiAgICAgICAgbGV0IG5hbWU9YXJyYXkudGFza05hbWVcbiAgICAgICAgbGV0IG51bWJlcj1hcnJheS50YXNrTnVtYmVyXG4gICAgICAgIGxldCBub3RlPWFycmF5Lm5vdGVzXG4gICAgICAgIGxldCBkYXRlPWFycmF5LmR1ZWRhdGVcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzKG5hbWUsbnVtYmVyLG5vdGUsZGF0ZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50cyh0YXNrTmFtZSx0YXNrTnVtYmVyLG5vdGVzLGR1ZWRhdGUpey8vaW50ZXJuYWwgZnVuY3Rpb24gRE8gTk9UIEVYUE9SVCFcblxuICAgIC8vaW5pdGlhbGl6aW5nIGVsZW1lbnRzIHRvIGNyZWF0ZSB0YXNrIGluIGh0bWxcbiAgICBjb25zdCB0YXNrc1dpbmRvdz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Mtd2luZG93JykvL21haW4gZWxlbWVudCBmbyByY2hpbGQgbm9kZXMgdG8gYmUgYXBwZW5kZWQgdG9cbiAgICBsZXQgdGFza0NvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKVxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0YXNrTnVtYmVyKVxuXG4gICAgbGV0IG51bWJlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvL2NyZWF0ZSB0YXNrIGVsZW1lbnRzXG4gICAgbGV0IG5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgbm90ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBkYXRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGRvbmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgbGV0IHJlbW92ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcblxuICAgIG51bWJlci5jbGFzc0xpc3QuYWRkKCdudW1iJylcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKVxuICAgIG5vdGUuY2xhc3NMaXN0LmFkZCgnbm90ZScpXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJylcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZS1idXR0b24nKVxuICAgIGRvbmUudGV4dENvbnRlbnQ9XCJkb25lXCJcbiAgICBkb25lLnN0eWxlLmZvbnRTaXplPVwiMzBweFwiXG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUtYnV0dG9uJylcbiAgICByZW1vdmUuY2xhc3NMaXN0LmZvbnRTaXplPSczMHB4J1xuICAgIHJlbW92ZS50ZXh0Q29udGVudD1cInJlbW92ZV9jaXJjbGVfb3V0bGluZVwiXG5cbiAgICAvL25vdyB3ZSBhc3NpZ24gZWFjaCB0YXNrIGl0cyB2YWx1ZXMtLS0+XG4gICAgbnVtYmVyLnRleHRDb250ZW50PXRhc2tOdW1iZXJcbiAgICBuYW1lLnRleHRDb250ZW50PXRhc2tOYW1lXG4gICAgbm90ZS50ZXh0Q29udGVudD1ub3Rlc1xuICAgIGRhdGUudGV4dENvbnRlbnQ9ZHVlZGF0ZVxuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXIpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKVxuXG4gICAgdGFza3NXaW5kb3cuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcilcbiAgICBcbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAvL2Z1bmN0aW9uIHRvIHJlbW92ZSB0YXNrIGZyb20gYXJyYXlcbiAgICAgICAgLy9mdW5jdGlvbiB0byByZW1vdmUgdGFzayBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgLy9hZGQgYW1vdW50IG9mIHRhc2tzIGRvbmUgZm9yIGdyb3VwIGFuZCBzdG9yZSBpbiBMU1xuICAgIH0pXG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e2RlbGV0ZVRhc2sodGFza051bWJlcil9KS8vIHRhc2wgbnVtYmVyIGhlbHBzIGlkZW50aWZ5IHRoZSB0YXNrIFxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKG51bWJlcil7Ly9jcmVhdGVzIGFuIGFycmF5LCBkZWxldGVzIHRhc2ssIHB1c2hlcyBhcnJheSBiYWNrIHRvIExTXG4gICAgbGV0IGtleT13aW5kb3cuZ3JvdXBcbiAgICBudW1iZXI9bnVtYmVyLTFcbiAgICBjb25zb2xlLmxvZyhudW1iZXIpXG4gICAgbGV0IGFycj1bXVxuICAgIGFycj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgYXJyLnNwbGljZShudW1iZXIsMSlcbiAgICB1cGRhdGVUYXNrTnVtYmVyKGFycixudW1iZXIsa2V5KVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeShhcnIpKVxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpXG4gICAgZGlzcGxheVRhc2tzKGdyb3VwKVxufVxuZnVuY3Rpb24gdXBkYXRlVGFza051bWJlcihhcnIsbnVtYmVyLGdyb3VwKXsvLyB1cGRhdGVzIHRhc2sgbnVtYmVycyBpbiBhcnJheSBhbmQgYWxzbyBjcmVhdGVzIG5ldyB0YXNrcyBhZ2FpbiBpbiBkaXNwbGF5XG4gICAgbGV0IGxuPWFyci5sZW5ndGhcbiAgICBmb3IobGV0IGk9bnVtYmVyO2k8bG47aSsrKXtcbiAgICAgICAgYXJyW2ldLnRhc2tOdW1iZXI9aSsxXG4gICAgfVxuICAgIGNsZWFyVGFza0VsZW1lbnRzKClcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRWxlbWVudHMoKXtcbiAgICBsZXQgdGFza0VsZW1lbnRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNvbnRhaW5lcicpXG4gICAgdGFza0VsZW1lbnRzLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZGlzcGxheVRhc2tzLGNsZWFyVGFza0VsZW1lbnRzIH0iLCJmdW5jdGlvbiBkYXRlU2VsZWN0b3IoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IGRhdGVTZWxlY3RvciB9ICIsImZ1bmN0aW9uIGlucHV0Q2hlY2tlcihjbGFzc25hbWUpe1xuICAgIGxldCB2YWx1ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWVcbiAgICBsZXQgbGVuZ3RoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NuYW1lKS52YWx1ZS5sZW5ndGhcbiAgICBpZih2YWx1ZSE9JycgJiYgbGVuZ3RoPjMpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCB7IGlucHV0Q2hlY2tlciB9IiwiZnVuY3Rpb24gc2VuZEl0ZW0oYXJyYXksZ3JvdXApey8vc2V0cyBpdGVtIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xufVxuIFxuZXhwb3J0IHsgc2VuZEl0ZW0gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgZnVuY3Rpb25zIGhlcmU7XG5pbXBvcnQgeyBvcGVuTmV3Rm9ybSB9IGZyb20gJy4vZG9tc2NyaXB0cy9vcGVuRm9ybSdcbmltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vbG9naWMvY2xvc2Vmb3JtJ1xuaW1wb3J0IHsgY2FuY2VsVGFzayB9IGZyb20gJy4vbG9naWMvY2FuY2VsdGFzaydcbmltcG9ydCB7IGRhdGVTZWxlY3RvciB9IGZyb20gJy4vbG9naWMvZHVlZGF0ZSdcbmltcG9ydCB7IGFkZE5vdGVzIH0gZnJvbSAnLi9sb2dpYy9hZGRub3RlJ1xuaW1wb3J0IHsgaW5wdXRDaGVja2VyIH0gZnJvbSAnLi9sb2dpYy9pbnB1dGNoZWNrJ1xuaW1wb3J0IHsgZm9ybWF0LHBhcnNlSVNPLHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IGNyZWF0ZUdyb3VwRm9ybSwgY2xvc2VHcm91cEZvcm0sIGNyZWF0ZUdyb3VwRWxlbWVudCB9IGZyb20gJy4vZG9tc2NyaXB0cy9jcmVhdGVncm91cGZvcm0nXG5pbXBvcnQgeyBzZW5kSXRlbSB9IGZyb20gJy4vbG9naWMvc2VuZEl0ZW0nXG5pbXBvcnQgeyBncm91cFNlbGVjdGVkIH0gZnJvbSAnLi9kb21zY3JpcHRzL2NyZWF0ZWdyb3VwZm9ybSdcbmltcG9ydCB7IGNsZWFyVGFza0VsZW1lbnRzLCBkaXNwbGF5VGFza3MgfSBmcm9tICcuL2xvZ2ljL2Rpc3BsYXl0YXNrcydcblxuY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuY29uc3QgbmV3Tm90ZWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbm90ZS1idXR0b25cIilcbmNvbnN0IG5ld1Rhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpXG5jb25zdCBjYW5jZWxUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzaycpXG5jb25zdCBhZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG5jb25zdCBkdWVEYXRlQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1idXR0b24nKVxuY29uc3QgbmV3R3JvdXBMaW5rPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ3JvdXAtbGluaycpXG4vL2lucHV0IGRlY2xhcmF0aW9uc1xubGV0IHRhc2tOYW1lXG5sZXQgbm90ZXNcbmxldCB0YXNrRGF0ZVxubGV0IHRhc2tOdW1iZXJcbmxldCBkdWVkYXRlXG4gXG5cblxuXG5jbGFzcyB0YXNre1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOdW1iZXIsdGFza05hbWUsbm90ZXMsZHVlZGF0ZSl7XG4gICAgdGhpcy50YXNrTnVtYmVyPXRhc2tOdW1iZXJcbiAgICB0aGlzLnRhc2tOYW1lPXRhc2tOYW1lXG4gICAgdGhpcy5ub3Rlcz1ub3Rlc1xuICAgIHRoaXMuZHVlZGF0ZT1kdWVkYXRlXG4gICAgdGhpcy5zdGF0dXM9ZmFsc2VcbiAgICB9XG59XG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBvcGVuTmV3Rm9ybSgpXG59KVxuXG5kdWVEYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgZGF0ZVNlbGVjdG9yKClcbn0pXG5cbm5ld05vdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGFkZE5vdGVzKClcbn0pXG5cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNhbmNlbFRhc2soKVxufSlcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBhZGRUYXNrKClcbn0pXG5cblxuXG4vL2NyZWF0ZSBuZXcgZ3JvdXBcbmNvbnN0IGFkZEdyb3VwQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJylcbmFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNyZWF0ZUdyb3VwRm9ybSgpXG59KVxubmV3R3JvdXBMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNyZWF0ZUdyb3VwRm9ybSgpXG59KVxuXG4vLzwtLS0tLS0tLS0tLS0tLS0tQ3JlYXRlIG5ldyB0YXNrIEZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0+XG5cblxuZnVuY3Rpb24gYWRkVGFzaygpe1xuICAgIGlmIChpbnB1dENoZWNrZXIoJy50YXNrLW5hbWUnKT09dHJ1ZSAmJiBncm91cFNlbGVjdGVkIT1udWxsKXtcbiAgICAvL2V4dHJhIGFuaW1hdGlvbiBlZmZlY3RzXG4gICAgdGFza0Zvcm0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiIzdkZDc3N1wiXG4gICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT1cIjBcIlxuICAgIGNhcHR1cmVJbmZvKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICAgICAgY2xlYXJUYXNrRWxlbWVudHMoKVxuICAgICAgICBkaXNwbGF5VGFza3MoZ3JvdXBTZWxlY3RlZClcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3Mtd2luZG93Jyk7XG4gICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IGVsZW0uc2Nyb2xsSGVpZ2h0O1xuICAgIH0sIDgwMCk7XG59XG5lbHNlIGlmIChpbnB1dENoZWNrZXIoJy50YXNrLW5hbWUnKT09ZmFsc2Upe1xuICAgIGFsZXJ0KCdQbGVhc2UgRW50ZXIgQSBWYWxpZCBDbGFzcyBOYW1lIPCfkYAnKVxufVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlSW5mbygpe1xuICAgIHRhc2tOYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZVxuICAgIG5vdGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1pbnB1dCcpLnZhbHVlXG4gICAgaWYobm90ZXM9PW51bGx8fCBub3Rlcz09XCJcIil7XG4gICAgICAgIG5vdGVzPVwiTm9uZVwiXG4gICAgfVxuICAgIGR1ZWRhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS52YWx1ZVxuICAgIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZClcbn1cblxubGV0IFRhc2tcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZ3JvdXBTZWxlY3RlZCl7XG4gICAgIGxldCBhcnJheT13aW5kb3dbZ3JvdXBTZWxlY3RlZF1cbiAgICAgdGFza051bWJlcj0oYXJyYXkubGVuZ3RoKzEpLnRvU3RyaW5nKClcbiAgICAgVGFzayA9IG5ldyB0YXNrKHRhc2tOdW1iZXIsdGFza05hbWUsbm90ZXMsZHVlZGF0ZSlcbiAgICAgYXJyYXkucHVzaChUYXNrKVxuICAgICBsZXQgbG9jYWxBcnJheT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwU2VsZWN0ZWQpIHx8ICdbXTInKS8vZ2V0cyBpdGVtIGZyb20gTFNcbiAgICAgbG9jYWxBcnJheS5wdXNoKFRhc2spLy9wdXNoIGl0ZW0gdG8gbG9jYWwgYXJyYXkgXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb3VwU2VsZWN0ZWQsSlNPTi5zdHJpbmdpZnkobG9jYWxBcnJheSkpLy9wdXNoIHVwZGF0ZWQgYXJyYXkgYmFjayB0byBsc1xufVxuXG4vLzwtLS0tLS0tLS0tLS0tLW9uIHN0YXJ0IGZ1bmN0aW9ucyBoZXJlLS0tLS0tLS0tLS0tPlxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpey8vZ2V0cyBncm91cHMgZnJvbSBsb2NhbHN0b3JhZ2UgYW5kIGNyZWF0ZXMgbmV3IGFycmF5c1xuICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik9PW51bGwpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwxKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNob3Jlc1wiLEpTT04uc3RyaW5naWZ5KFt7dGFza051bWJlcjogMSwgdGFza05hbWU6IFwiRWF0IE1vdWxkZWQgQ2hlZXNlXCIsIG5vdGVzOiBcIlRoaXMgRGl2IGlzIFNjcm9sbGFibGUsIHRyeSBtZSEgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLiBcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiAyLCB0YXNrTmFtZTogXCJHaXZlIGRvZ2dvIGZvb2RcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiAzLCB0YXNrTmFtZTogXCJXYXNoIHlvdXIgZmFjZSBzaWxseSFcIiwgbm90ZXM6IFwiZmRcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiA0LCB0YXNrTmFtZTogXCJDbGVhbiBGcmlkZ2UhXCIsIG5vdGVzOiBcIkNsZWFuIFRoZSBJbnNpZGVzIHRvbyFcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiA1LCB0YXNrTmFtZTogXCJEbyB0aGUgbGF1bmRyeSFcIiwgbm90ZXM6IFwiVXNlIHRoZSBvdGhlciBkZXRlcmdlbnQgbm90IHRoYXQgb25lXCIsIGR1ZWRhdGU6IFwiTm9uZVwifSx7dGFza051bWJlcjogNiwgdGFza05hbWU6IFwiQ2hhcmdlIHRoZSBNYWNcIiwgbm90ZXM6IFwiUmVtZWJlciB0byBzaHV0IGl0IGRvd24gYmVmb3JlIGxlYXZpbmcuXCIsIGR1ZWRhdGU6IFwiTm9uZVwifSx7dGFza051bWJlcjogNywgdGFza05hbWU6IFwiQW0gSSBTY3JvbGxhYmxlP1wiLCBub3RlczogXCJJIGFtIHRvbyEgTm90IGEgbG90IGJ1dCBTdGlsbCFcIiwgZHVlZGF0ZTogXCJOb25lXCJ9XSkpIC8vIGRlZmF1bHQgYXJyYXlcbiAgIH1cbiAgICAgY3JlYXRlR3JvdXBzU3RhcnR1cCgpXG59XG5mdW5jdGlvbiBjcmVhdGVHcm91cHNTdGFydHVwKCl7XG4gICAgbGV0IGxuPWxvY2FsU3RvcmFnZS5sZW5ndGhcbiAgICAgbGV0IGdyb3VwTmFtZVxuICAgIGZvcihsZXQgaT1sbi0xO2k+PTA7aS0tKXsvL2xvb3AgcnVucyBpbiByZXZlcnNlIHNvIHRoYXQgbGF0ZXN0IGdyb3VwIGdldHMgYWRkZWQgbGFzdFxuICAgICAgICBncm91cE5hbWU9bG9jYWxTdG9yYWdlLmtleShpKVxuICAgICAgICBpZihncm91cE5hbWUhPVwidXNlclwiKXtcbiAgICAgICAgd2luZG93W2dyb3VwTmFtZV09SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpKSB8fCBbXTsgIC8vY3JlYXRlIGFycmF5IGZvciBlYWNoIGdyb3VwIHN0b3JlZCBpbiBsb2NhbCBzdG9yZ2VcbiAgICAgICAgbGV0IGFycmF5PXdpbmRvd1tncm91cE5hbWVdXG4gICAgICAgIGxldCB0YXNrcz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpLy90byBnZXQgdGFza3MgZm9yIHBhcnRpY3VsYXIgZ3JvdXBcbiAgICAgICAgdGFza3M9SlNPTi5wYXJzZSh0YXNrcylcbiAgICAgICAgYXJyYXkucHVzaCh0YXNrcylcbiAgICAgICAgY3JlYXRlR3JvdXBFbGVtZW50KGdyb3VwTmFtZSlcbiAgICAgICAgfVxuICAgIH0gIFxufVxuXG5cbnBhZ2VMb2FkKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9