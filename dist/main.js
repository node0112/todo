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
        //function to remove task from array
        //function to remove task from local storage
        //add amount of tasks done for group and store in LS
    })
    remove.addEventListener('click',()=>{deleteTask(taskNumber)})// tasl number helps identify the task 
}

function deleteTask(number){//creates an array, deletes task, pushes array back to LS
    let key=window.group
    number=number-1
    let arr=[]
    arr=JSON.parse(localStorage.getItem(key))
    arr.splice(number,1)
    updateTaskNumber(arr,number,key)
    localStorage.setItem(key,JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem(key)))
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
    number=parseInt(number)+1
    console.log(number)
    let task=document.getElementById(number)
    task.style.transition='all 0.7s'
    task.style.backgroundColor='rgba(255, 0, 0, 0.595)'
    task.style.opacity='0%'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsSUFBSSx5REFBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQSxJQUFJLDhEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQWU7QUFDbkIsQ0FBQztBQUNEO0FBQ0EsSUFBSSw2RUFBZTtBQUNuQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsK0RBQVksd0JBQXdCLHNFQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCLFFBQVEsdUVBQWlCO0FBQ3pCLFFBQVEsa0VBQVksQ0FBQyxzRUFBYTtBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsU0FBUywrREFBWTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNFQUFhO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsdURBQXVELDJpQkFBMmlCLEVBQUUseUVBQXlFLEVBQUUsK0VBQStFLEVBQUUsMkZBQTJGLEVBQUUsMkdBQTJHLEVBQUUsNkdBQTZHLEVBQUUsc0dBQXNHO0FBQy9wQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSyxLQUFLO0FBQzdCO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdGQUFrQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tc2NyaXB0cy9vcGVuRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbXNjcmlwdHMvcmVtb3ZlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9hZGRub3RlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvY2FuY2VsdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Nsb3NlZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2Rpc3BsYXl0YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljL2R1ZWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy9pbnB1dGNoZWNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMvc2VuZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlYXJUYXNrRWxlbWVudHMsIGRpc3BsYXlUYXNrcyB9IGZyb20gJy4uL2xvZ2ljL2Rpc3BsYXl0YXNrcydcbmltcG9ydCB7IGlucHV0Q2hlY2tlciB9IGZyb20gJy4uL2xvZ2ljL2lucHV0Y2hlY2snXG5pbXBvcnQgeyBzZW5kSXRlbSB9IGZyb20gJy4uL2xvZ2ljL3NlbmRJdGVtJ1xuaW1wb3J0IHsgcmVtb3ZlR3JvdXAgfSBmcm9tICcuL3JlbW92ZUdyb3VwJ1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwRm9ybSgpe1xuICAgIGNvbnN0IHNpZGViYXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IGZvcm1Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBjb25zdCBjbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBjb25zdCBhZGRHcm91cEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxuXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm91cC1mb3JtLWNvbnRhaW5lcicpXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS53aWR0aD1cIjEzMCVcIlxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2dyb3VwLW5hbWUtaW5wdXQnKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1ncm91cGZvcm0tYnRuJylcbiAgICBjbG9zZUJ0bi5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudD1cImNsb3NlXCJcbiAgICBjbG9zZUJ0bi5vbm1vdXNlb3Zlcj1cImNvbG9yOiBibGFjaztcIlxuICAgIGFkZEdyb3VwQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgICBhZGRHcm91cEJ0bi5jbGFzc0xpc3QuYWRkKCdncnBmb3JtYWRkJylcbiAgICBhZGRHcm91cEJ0bi50ZXh0Q29udGVudD1cImFkZFwiXG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyPVwibm9uZVwiXG4gICAgaW5wdXQuc3R5bGUuZm9udEZhbWlseT1cInJvYm90byBjb25kZW5zZWRcIlxuICAgIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInllbGxvd2dyZWVuXCJcbiAgICBpbnB1dC5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNHNcIlxuICAgIGlucHV0LnR5cGU9XCJ0ZXh0XCJcbiAgICBjb25zdCBkb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpXG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBpbnB1dC5zaXplPVwiMTVcIlxuICAgIGlucHV0LmZvbnRTaXplPShcIjI0cHhcIilcbiAgICBcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5PVwiMVwiXG4gICAgfSwgMTAwKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVHcm91cEZvcm0pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3QpXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEdyb3VwQnRuKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYoY29uZmlybSgnQXJlIHlvdSBTdXJlIFlvdSBXYW50IFRvIENhbmNlbD8nKT09dHJ1ZSl7XG4gICAgICAgICAgICBjbG9zZUdyb3VwRm9ybSgpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRJbmZvKVxufVxuZnVuY3Rpb24gY2xvc2VHcm91cEZvcm0oKXtcbiAgICBjb25zdCBncm91cEZvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLWZvcm0tY29udGFpbmVyJylcbiAgICBncm91cEZvcm0uc3R5bGUub3BhY2l0eT0nMCdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXBGb3JtLnJlbW92ZSgpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUdyb3VwRm9ybSlcbiAgICB9LCA1MDApO1xufVxuXG4vL2Z1bmN0aW9ucyB0byBleGVjdXRlIGFmdGVyIGFkZCBidXR0b24gaGFzIGJlZW4gcHJlc3NlZFxuXG5mdW5jdGlvbiBhZGRJbmZvKCl7XG4gICAgbGV0IGlucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC1uYW1lLWlucHV0JylcbiAgICAvL2lmKGlucHV0Q2hlY2tlcignLmdyb3VwLW5hbWUtaW5wdXQnKT09dHJ1ZSl7XG4gICAgICAvLyAgY2xvc2VHcm91cEZvcm0oKVxuICAgICAgIC8vIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIiMxMWZmMDBcIlxuICAgIC8vfVxuICAgIGNsb3NlR3JvdXBGb3JtKClcbiAgICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjMTFmZjAwXCJcbiAgICBsZXQgZ3JvdXBOYW1lPWlucHV0LnZhbHVlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUdyb3VwRWxlbWVudChncm91cE5hbWUpXG4gICAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBBcnJheShncm91cE5hbWUpey8vdG8gY3JlYXRlIGxvY2FsIGFycmF5IHRvIHN0b3JlIHRhc2tzXG4gICAgbGV0IGFycj13aW5kb3dbZ3JvdXBOYW1lXT0gW11cbiAgICBsZXQgdGFza3M9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShncm91cE5hbWUpKVxuICAgIGlmKHRhc2tzPT1udWxsKXtcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShncm91cE5hbWUsSlNPTi5zdHJpbmdpZnkoYXJyKSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICBmb3IobGV0IGk9MDtpPHRhc2tzLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgdGFzaz10YXNrc1tpXVxuICAgICAgICBhcnIucHVzaCh0YXNrKVxuICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwRWxlbWVudChncm91cE5hbWUpey8vY3JlYXRlcyBuZXcgZ3JvdXAgZWxlbWVudCBpbiBzaWRlYmFyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG4gICAgbGV0IGNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncm91cC1jb250YWluZXInKVxuXG4gICAgLy9jcmVhdGUgZ3JvdXAgZWxlbWVudCBhbmQgYXNzaWduIGl0IGEgdGl0bGUgbnVtYmVyXG4gICAgbGV0IGdyb3VwVGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBncm91cFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBjb25zdCBzdHIyID0gZ3JvdXBOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZ3JvdXBOYW1lLnNsaWNlKDEpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGdyb3VwTmFtZSkvL2ZvciBpbmRlbnRpZmljYXRpb24gd2hlbiBkZWxldGVpbmcgZWxtZW50XG4gICAgZ3JvdXBUaXRsZS50ZXh0Q29udGVudD0gc3RyMlxuXG4gICAgLy9TcGF3biBEb3QgZm9yIHRpdGxlXG4gICAgY29uc3QgZG90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKVxuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICAvL2NyZWF0ZSBjbG9zZSBidXR0b25cbiAgICBsZXQgY2xvc2VCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLWdyb3VwLWJ0bicpXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQ9KCdjbG9zZScpXG5cbiAgICAvL3RpdGxlIGFuZCBkb3QgY29udGFpbmVyXG4gICAgbGV0IHRpdGxlRG90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGVEb3QuY2xhc3NMaXN0LmFkZCgndGl0bGUtZG90LWNvbnRhaW5lcicpXG4gICAgdGl0bGVEb3QuYXBwZW5kQ2hpbGQoZG90KVxuICAgIHRpdGxlRG90LmFwcGVuZENoaWxkKGdyb3VwVGl0bGUpXG5cbiAgICAvL2FkZCBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlaXIgb3JkZXIsIHRvIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEb3QpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBpZihjb25maXJtKFwiQXJlIFlvdSBTdXJlIFlvdSBXYW50IHRvIERlbGV0ZSBUaGUgXCIrZ3JvdXBUaXRsZS50ZXh0Q29udGVudCtcIiBHcm91cD9cIik9PXRydWUpe1xuICAgICAgICAgICAgbGV0IG5hbWU9Z3JvdXBUaXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgcmVtb3ZlR3JvdXAobmFtZSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy9jcmVhdGUgYXJyYXlcbiAgICBjcmVhdGVHcm91cEFycmF5KGdyb3VwTmFtZSlcbiAgICBncm91cFNlbGVjdGlvbigpXG4gICAgZ3JvdXBTZWxlY3RvcigpXG4gICAgbGV0IGdycFRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZScpIC8vdGhpcyBzdGVwIGlzIG5lY2Nlc3NhcnkgdG8gYnVpbGQgdGFzayBub2RlcyB3aGVuIHRoZSBncm91cCBpcyBzZWxlY3RlZFxuICAgIGdycFRpdGxlLmZvckVhY2godGl0bGUgPT57XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgY2xlYXJUYXNrRWxlbWVudHMoKVxuICAgICAgICAgICAgICAgbGV0IG5hbWU9dGl0bGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgIG5hbWU9bmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICBkaXNwbGF5VGFza3MobmFtZSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxubGV0IGdyb3VwU2VsZWN0ZWRcbmZ1bmN0aW9uIGdyb3VwU2VsZWN0b3IoKXsvL2NoZWNrcyB3aGljaCBncm91cCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICBsZXQgZ3JvdXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlJylcbiAgICBncm91cC5mb3JFYWNoKHRpdGxlPT57XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgbGV0IGdyb3VwbmFtZT10aXRsZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgZ3JvdXBuYW1lPSBncm91cG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBncm91cG5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICBncm91cFNlbGVjdGVkPWdyb3VwbmFtZVxuICAgICAgICAgfSlcbiAgICB9KVxufVxuZ3JvdXBTZWxlY3RvcigpXG5mdW5jdGlvbiBncm91cFNlbGVjdGlvbigpe1xuICAgIGNvbnN0IGdyb3Vwcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUnKVxuICAgIGdyb3Vwcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT57Z3JvdXAuc3R5bGUuY29sb3I9XCJibGFja1wifSkvL3RvIHJlc2V0IHNlbGVjdGVkIGdyb3VwLCBpZiBhbnlcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuY29sb3I9XCJ5ZWxsb3dncmVlblwiXG4gICAgICAgICAgICBncm91cFNlbGVjdG9yKGl0ZW0pXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB9XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0dyb3VwKGdyb3VwTmFtZSx0YXNrKXtcbiAgIGFycmF5PXdpbmRvd1tncm91cE5hbWVdXG4gICBhcnJheS5wdXNoKHRhc2spXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUdyb3VwRm9ybSxjbG9zZUdyb3VwRm9ybSxhZGRJbmZvLGdyb3VwU2VsZWN0ZWQsY3JlYXRlR3JvdXBFbGVtZW50IH0iLCJmdW5jdGlvbiBvcGVuTmV3Rm9ybSgpe1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXdpbmRvdycpO1xuICAgICBlbGVtLnNjcm9sbFRvcD0nMCdcbiAgICBjb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tPScxMCUnXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICB0YXNrRm9ybS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDFzXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGFza0Zvcm0uc3R5bGUub3BhY2l0eT0nMSdcbiAgICB9LCA5MDApO1xufVxuXG5leHBvcnQgeyBvcGVuTmV3Rm9ybSB9IiwiZnVuY3Rpb24gcmVtb3ZlR3JvdXAoZ3JvdXBOYW1lKXtcbiAgICAgZ3JvdXBOYW1lID0gZ3JvdXBOYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZ3JvdXBOYW1lLnNsaWNlKDEpO1xuICAgIC8vIGZ1bmN0aW9uIHRvIGV4ZWN0dWUgcmVtb3ZhbCBmcm9tIG9mZmxpbmUgc3RvcmFnZVxuICAgIGxldCBsbj1sb2NhbFN0b3JhZ2UubGVuZ3RoXG4gICAgZm9yKGxldCBpPTA7aTxsbjtpKyspey8vdG8gZmluZCBhbmQgcm1lb3ZlIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5rZXkoaSk9PWdyb3VwTmFtZSl7XG4gICAgICAgICAgICBsZXQga2V5PWxvY2FsU3RvcmFnZS5rZXkoaSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JlbW92ZSBlbGVtZW50IGZyb20gaHRtbCBcbiAgICBsZXQgZ3JvdXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrZ3JvdXBOYW1lKVxuICAgIGdyb3VwLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ3JvdXAucmVtb3ZlKClcbiAgICB9LCA1MDApO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpLy9zbyB0aGF0IGFycmF5IGdldHMgZGVsZXRlZCB0b29cbn1cblxuZXhwb3J0IHsgcmVtb3ZlR3JvdXAgfSIsImZ1bmN0aW9uIGFkZE5vdGVzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZXhwb3J0IHsgYWRkTm90ZXMgfSIsImltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gJy4vY2xvc2Vmb3JtJ1xuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIHRhc2tGb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInJlZFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWU9XCJcIlxuICAgIHRhc2tGb3JtLnN0eWxlLm9wYWNpdHk9XCIwXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xvc2VGb3JtKClcbiAgICB9LCA4MDApO1xufVxuXG5leHBvcnQge2NhbmNlbFRhc2t9IiwiZnVuY3Rpb24gY2xvc2VGb3JtKCl7XG4gICAgY29uc3QgdGFza0Zvcm09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKS52YWx1ZT1cIlwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXNlbGVjdG9yJykudmFsdWU9XCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbT1cIjVweFwiXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsIDAsIDAsIDAuNjQyKVwiXG4gICAgXG59XG5cbmV4cG9ydCB7IGNsb3NlRm9ybSB9IiwiZnVuY3Rpb24gZGlzcGxheVRhc2tzKGdyb3VwTmFtZSl7Ly9mdW5jdGlvbiB0byBjbGVhciB0YXNrcyBpbiB2aWV3IGFuZCBjcmVhdGUgZWxlbWVudHMgdG8gc2hvdyBuZXcgdGFza3MgaW4gZ3JvdXAgYXJyYXlcbiAgICBsZXQgYXJyPSBbXVxuICAgIGFycj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwTmFtZSkpXG4gICAgY29uc3QgbG49YXJyLmxlbmd0aFxuICAgIHZhciBncm91cD1ncm91cE5hbWVcbiAgICB3aW5kb3cuZ3JvdXA9Z3JvdXBOYW1lXG4gICAgZm9yKGxldCBpPTA7aTxsbjtpKyspe1xuICAgICAgICBsZXQgYXJyYXk9YXJyW2ldXG4gICAgICAgIGxldCBuYW1lPWFycmF5LnRhc2tOYW1lXG4gICAgICAgIGxldCBudW1iZXI9YXJyYXkudGFza051bWJlclxuICAgICAgICBsZXQgbm90ZT1hcnJheS5ub3Rlc1xuICAgICAgICBsZXQgZGF0ZT1hcnJheS5kdWVkYXRlXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50cyhuYW1lLG51bWJlcixub3RlLGRhdGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudHModGFza05hbWUsdGFza051bWJlcixub3RlcyxkdWVkYXRlKXsvL2ludGVybmFsIGZ1bmN0aW9uIERPIE5PVCBFWFBPUlQhXG5cbiAgICAvL2luaXRpYWxpemluZyBlbGVtZW50cyB0byBjcmVhdGUgdGFzayBpbiBodG1sXG4gICAgY29uc3QgdGFza3NXaW5kb3c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXdpbmRvdycpLy9tYWluIGVsZW1lbnQgZm8gcmNoaWxkIG5vZGVzIHRvIGJlIGFwcGVuZGVkIHRvXG4gICAgbGV0IHRhc2tDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJylcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2tOdW1iZXIudG9TdHJpbmcoKSk7XG5cbiAgICBsZXQgbnVtYmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vY3JlYXRlIHRhc2sgZWxlbWVudHNcbiAgICBsZXQgbmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBub3RlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGRhdGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgZG9uZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBsZXQgcmVtb3ZlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuXG4gICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWInKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpXG4gICAgbm90ZS5jbGFzc0xpc3QuYWRkKCdub3RlJylcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKVxuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIGRvbmUuY2xhc3NMaXN0LmFkZCgndGFzay1kb25lLWJ1dHRvbicpXG4gICAgZG9uZS50ZXh0Q29udGVudD1cImRvbmVcIlxuICAgIGRvbmUuc3R5bGUuZm9udFNpemU9XCIzMHB4XCJcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1idXR0b24nKVxuICAgIHJlbW92ZS5jbGFzc0xpc3QuZm9udFNpemU9JzMwcHgnXG4gICAgcmVtb3ZlLnRleHRDb250ZW50PVwicmVtb3ZlX2NpcmNsZV9vdXRsaW5lXCJcblxuICAgIC8vbm93IHdlIGFzc2lnbiBlYWNoIHRhc2sgaXRzIHZhbHVlcy0tLT5cbiAgICBudW1iZXIudGV4dENvbnRlbnQ9dGFza051bWJlclxuICAgIG5hbWUudGV4dENvbnRlbnQ9dGFza05hbWVcbiAgICBub3RlLnRleHRDb250ZW50PW5vdGVzXG4gICAgZGF0ZS50ZXh0Q29udGVudD1kdWVkYXRlXG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlcilcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlKVxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZSlcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmUpXG5cbiAgICB0YXNrc1dpbmRvdy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKVxuICAgIFxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIC8vZnVuY3Rpb24gdG8gcmVtb3ZlIHRhc2sgZnJvbSBhcnJheVxuICAgICAgICAvL2Z1bmN0aW9uIHRvIHJlbW92ZSB0YXNrIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgICAvL2FkZCBhbW91bnQgb2YgdGFza3MgZG9uZSBmb3IgZ3JvdXAgYW5kIHN0b3JlIGluIExTXG4gICAgfSlcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57ZGVsZXRlVGFzayh0YXNrTnVtYmVyKX0pLy8gdGFzbCBudW1iZXIgaGVscHMgaWRlbnRpZnkgdGhlIHRhc2sgXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobnVtYmVyKXsvL2NyZWF0ZXMgYW4gYXJyYXksIGRlbGV0ZXMgdGFzaywgcHVzaGVzIGFycmF5IGJhY2sgdG8gTFNcbiAgICBsZXQga2V5PXdpbmRvdy5ncm91cFxuICAgIG51bWJlcj1udW1iZXItMVxuICAgIGxldCBhcnI9W11cbiAgICBhcnI9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIGFyci5zcGxpY2UobnVtYmVyLDEpXG4gICAgdXBkYXRlVGFza051bWJlcihhcnIsbnVtYmVyLGtleSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksSlNPTi5zdHJpbmdpZnkoYXJyKSlcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhclRhc2tFbGVtZW50cygpIC8vY2xlYXJzIGN1cnJlbnQgdGFzayBlbGVtZW50c1xuICAgICAgICBkaXNwbGF5VGFza3MoZ3JvdXApIC8vZGlzcGxheXMgbmV3IHRhc2tzIHdpdGggdXBkYXRlZCBudW1iZXJzXG4gICAgfSwgNTAwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tOdW1iZXIoYXJyLG51bWJlcixncm91cCl7Ly8gdXBkYXRlcyB0YXNrIG51bWJlcnMgaW4gYXJyYXkgYW5kIGFsc28gY3JlYXRlcyBuZXcgdGFza3MgYWdhaW4gaW4gZGlzcGxheVxuICAgIGxldCBsbj1hcnIubGVuZ3RoXG4gICAgZm9yKGxldCBpPW51bWJlcjtpPGxuO2krKyl7XG4gICAgICAgIGFycltpXS50YXNrTnVtYmVyPWkrMVxuICAgIH1cbiAgICBudW1iZXI9cGFyc2VJbnQobnVtYmVyKSsxXG4gICAgY29uc29sZS5sb2cobnVtYmVyKVxuICAgIGxldCB0YXNrPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG51bWJlcilcbiAgICB0YXNrLnN0eWxlLnRyYW5zaXRpb249J2FsbCAwLjdzJ1xuICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZ2JhKDI1NSwgMCwgMCwgMC41OTUpJ1xuICAgIHRhc2suc3R5bGUub3BhY2l0eT0nMCUnXG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0VsZW1lbnRzKCl7XG4gICAgbGV0IHRhc2tFbGVtZW50cz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKVxuICAgIHRhc2tFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGRpc3BsYXlUYXNrcyxjbGVhclRhc2tFbGVtZW50cyB9IiwiZnVuY3Rpb24gZGF0ZVNlbGVjdG9yKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtc2VsZWN0b3InKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBkYXRlU2VsZWN0b3IgfSAiLCJmdW5jdGlvbiBpbnB1dENoZWNrZXIoY2xhc3NuYW1lKXtcbiAgICBsZXQgdmFsdWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc25hbWUpLnZhbHVlXG4gICAgbGV0IGxlbmd0aD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzbmFtZSkudmFsdWUubGVuZ3RoXG4gICAgaWYodmFsdWUhPScnICYmIGxlbmd0aD4zKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgeyBpbnB1dENoZWNrZXIgfSIsImZ1bmN0aW9uIHNlbmRJdGVtKGFycmF5LGdyb3VwKXsvL3NldHMgaXRlbSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShncm91cCwgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbn1cbiBcbmV4cG9ydCB7IHNlbmRJdGVtIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IGZ1bmN0aW9ucyBoZXJlO1xuaW1wb3J0IHsgb3Blbk5ld0Zvcm0gfSBmcm9tICcuL2RvbXNjcmlwdHMvb3BlbkZvcm0nXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL2xvZ2ljL2Nsb3NlZm9ybSdcbmltcG9ydCB7IGNhbmNlbFRhc2sgfSBmcm9tICcuL2xvZ2ljL2NhbmNlbHRhc2snXG5pbXBvcnQgeyBkYXRlU2VsZWN0b3IgfSBmcm9tICcuL2xvZ2ljL2R1ZWRhdGUnXG5pbXBvcnQgeyBhZGROb3RlcyB9IGZyb20gJy4vbG9naWMvYWRkbm90ZSdcbmltcG9ydCB7IGlucHV0Q2hlY2tlciB9IGZyb20gJy4vbG9naWMvaW5wdXRjaGVjaydcbmltcG9ydCB7IGZvcm1hdCxwYXJzZUlTTyxzZXQsc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgY3JlYXRlR3JvdXBGb3JtLCBjbG9zZUdyb3VwRm9ybSwgY3JlYXRlR3JvdXBFbGVtZW50IH0gZnJvbSAnLi9kb21zY3JpcHRzL2NyZWF0ZWdyb3VwZm9ybSdcbmltcG9ydCB7IHNlbmRJdGVtIH0gZnJvbSAnLi9sb2dpYy9zZW5kSXRlbSdcbmltcG9ydCB7IGdyb3VwU2VsZWN0ZWQgfSBmcm9tICcuL2RvbXNjcmlwdHMvY3JlYXRlZ3JvdXBmb3JtJ1xuaW1wb3J0IHsgY2xlYXJUYXNrRWxlbWVudHMsIGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vbG9naWMvZGlzcGxheXRhc2tzJ1xuXG5jb25zdCB0YXNrRm9ybT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpXG5jb25zdCBuZXdOb3RlZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlLWJ1dHRvblwiKVxuY29uc3QgbmV3VGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJylcbmNvbnN0IGNhbmNlbFRhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10YXNrJylcbmNvbnN0IGFkZFRhc2tCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJylcbmNvbnN0IGR1ZURhdGVCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpXG5jb25zdCBuZXdHcm91cExpbms9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1ncm91cC1saW5rJylcbmNvbnN0IHJlc2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idXR0b24nKVxuY29uc3QgbWVzc2FnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1tZXNzYWdlJylcbi8vaW5wdXQgZGVjbGFyYXRpb25zXG5sZXQgdGFza05hbWVcbmxldCBub3Rlc1xubGV0IHRhc2tEYXRlXG5sZXQgdGFza051bWJlclxubGV0IGR1ZWRhdGVcbiBcblxuXG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYoZ3JvdXBTZWxlY3RlZD09bnVsbCl7XG4gICAgICAgIG1lc3NhZ2Uuc3R5bGUuY29sb3I9XCJ0b21hdG9cIlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3R5bGUuY29sb3I9XCJncmF5XCJcbiAgICAgICAgfSwgODAwKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICBvcGVuTmV3Rm9ybSgpXG4gICAgfVxufSlcblxuZHVlRGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgIGRhdGVTZWxlY3RvcigpXG59KVxuXG5uZXdOb3RlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBhZGROb3RlcygpXG59KVxuXG5jYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjYW5jZWxUYXNrKClcbn0pXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgYWRkVGFzaygpXG59KVxuXG5cblxuLy9jcmVhdGUgbmV3IGdyb3VwXG5jb25zdCBhZGRHcm91cEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpXG5hZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBjcmVhdGVHcm91cEZvcm0oKVxufSlcbm5ld0dyb3VwTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBjcmVhdGVHcm91cEZvcm0oKVxufSlcblxucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYoY29uZmlybSgnUmVzZXQgdG8gRGVmYXVsdD8gVGhpcyB3aWxsIGVyYXNlIGFsbCB5b3VyIGN1cnJlbnQgZ3JvdXBzIOKaoC4nKT09dHJ1ZSl7XG4gICAgICAgIHJlc2V0LnN0eWxlLnRyYW5zZm9ybT0oJ3JvdGF0ZSgtOTBkZWcpJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG59KVxuLy88LS0tLS0tLS0tLS0tLS0tLUNyZWF0ZSBuZXcgdGFzayBGdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tPlxuXG5jbGFzcyB0YXNrey8vY2xhc3MgY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTnVtYmVyLHRhc2tOYW1lLG5vdGVzLGR1ZWRhdGUpe1xuICAgIHRoaXMudGFza051bWJlcj10YXNrTnVtYmVyXG4gICAgdGhpcy50YXNrTmFtZT10YXNrTmFtZVxuICAgIHRoaXMubm90ZXM9bm90ZXNcbiAgICB0aGlzLmR1ZWRhdGU9ZHVlZGF0ZVxuICAgIHRoaXMuc3RhdHVzPWZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrKCl7XG4gICAgaWYgKGlucHV0Q2hlY2tlcignLnRhc2stbmFtZScpPT10cnVlICYmIGdyb3VwU2VsZWN0ZWQhPW51bGwpe1xuICAgIC8vZXh0cmEgYW5pbWF0aW9uIGVmZmVjdHNcbiAgICB0YXNrRm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCIjN2RkNzc3XCJcbiAgICB0YXNrRm9ybS5zdHlsZS5vcGFjaXR5PVwiMFwiXG4gICAgY2FwdHVyZUluZm8oKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbG9zZUZvcm0oKVxuICAgICAgICBjbGVhclRhc2tFbGVtZW50cygpXG4gICAgICAgIGRpc3BsYXlUYXNrcyhncm91cFNlbGVjdGVkKVxuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy13aW5kb3cnKTtcbiAgICAgICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHQ7XG4gICAgfSwgODAwKTtcbn1cbmVsc2UgaWYgKGlucHV0Q2hlY2tlcignLnRhc2stbmFtZScpPT1mYWxzZSl7XG4gICAgYWxlcnQoJ1BsZWFzZSBFbnRlciBBIFZhbGlkIENsYXNzIE5hbWUg8J+RgCcpXG59XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVJbmZvKCl7XG4gICAgdGFza05hbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnZhbHVlXG4gICAgbm90ZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWlucHV0JykudmFsdWVcbiAgICBpZihub3Rlcz09bnVsbHx8IG5vdGVzPT1cIlwiKXtcbiAgICAgICAgbm90ZXM9XCJOb25lXCJcbiAgICB9XG4gICAgZHVlZGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1zZWxlY3RvcicpLnZhbHVlXG4gICAgY3JlYXRlVGFzayhncm91cFNlbGVjdGVkKVxufVxuXG5sZXQgVGFza1xuZnVuY3Rpb24gY3JlYXRlVGFzayhncm91cFNlbGVjdGVkKXtcbiAgICAgbGV0IGFycmF5PXdpbmRvd1tncm91cFNlbGVjdGVkXVxuICAgICB0YXNrTnVtYmVyPShhcnJheS5sZW5ndGgrMSkudG9TdHJpbmcoKVxuICAgICBUYXNrID0gbmV3IHRhc2sodGFza051bWJlcix0YXNrTmFtZSxub3RlcyxkdWVkYXRlKVxuICAgICBhcnJheS5wdXNoKFRhc2spXG4gICAgIGxldCBsb2NhbEFycmF5PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ3JvdXBTZWxlY3RlZCkgfHwgJ1tdMicpLy9nZXRzIGl0ZW0gZnJvbSBMU1xuICAgICBsb2NhbEFycmF5LnB1c2goVGFzaykvL3B1c2ggaXRlbSB0byBsb2NhbCBhcnJheSBcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ3JvdXBTZWxlY3RlZCxKU09OLnN0cmluZ2lmeShsb2NhbEFycmF5KSkvL3B1c2ggdXBkYXRlZCBhcnJheSBiYWNrIHRvIGxzXG59XG5cbi8vPC0tLS0tLS0tLS0tLS0tb24gc3RhcnQgZnVuY3Rpb25zIGhlcmUtLS0tLS0tLS0tLS0+XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCl7Ly9nZXRzIGdyb3VwcyBmcm9tIGxvY2Fsc3RvcmFnZSBhbmQgY3JlYXRlcyBuZXcgYXJyYXlzXG4gICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKT09bnVsbCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hvcmVzXCIsSlNPTi5zdHJpbmdpZnkoW3t0YXNrTnVtYmVyOiAxLCB0YXNrTmFtZTogXCJFYXQgTW91bGRlZCBDaGVlc2VcIiwgbm90ZXM6IFwiVGhpcyBEaXYgaXMgU2Nyb2xsYWJsZSwgdHJ5IG1lISAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uIFwiLCBkdWVkYXRlOiBcIk5vbmVcIn0se3Rhc2tOdW1iZXI6IDIsIHRhc2tOYW1lOiBcIkdpdmUgZG9nZ28gZm9vZFwiLCBub3RlczogXCJmZFwiLCBkdWVkYXRlOiBcIk5vbmVcIn0se3Rhc2tOdW1iZXI6IDMsIHRhc2tOYW1lOiBcIldhc2ggeW91ciBmYWNlIHNpbGx5IVwiLCBub3RlczogXCJmZFwiLCBkdWVkYXRlOiBcIk5vbmVcIn0se3Rhc2tOdW1iZXI6IDQsIHRhc2tOYW1lOiBcIkNsZWFuIEZyaWRnZSFcIiwgbm90ZXM6IFwiQ2xlYW4gVGhlIEluc2lkZXMgdG9vIVwiLCBkdWVkYXRlOiBcIk5vbmVcIn0se3Rhc2tOdW1iZXI6IDUsIHRhc2tOYW1lOiBcIkRvIHRoZSBsYXVuZHJ5IVwiLCBub3RlczogXCJVc2UgdGhlIG90aGVyIGRldGVyZ2VudCBub3QgdGhhdCBvbmVcIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiA2LCB0YXNrTmFtZTogXCJDaGFyZ2UgdGhlIE1hY1wiLCBub3RlczogXCJSZW1lYmVyIHRvIHNodXQgaXQgZG93biBiZWZvcmUgbGVhdmluZy5cIiwgZHVlZGF0ZTogXCJOb25lXCJ9LHt0YXNrTnVtYmVyOiA3LCB0YXNrTmFtZTogXCJBbSBJIFNjcm9sbGFibGU/XCIsIG5vdGVzOiBcIkkgYW0gdG9vISBOb3QgYSBsb3QgYnV0IFN0aWxsIVwiLCBkdWVkYXRlOiBcIk5vbmVcIn1dKSkgLy8gZGVmYXVsdCBhcnJheVxuICAgfVxuICAgICBjcmVhdGVHcm91cHNTdGFydHVwKClcbn1cbmZ1bmN0aW9uIGNyZWF0ZUdyb3Vwc1N0YXJ0dXAoKXtcbiAgICBsZXQgbG49bG9jYWxTdG9yYWdlLmxlbmd0aFxuICAgICBsZXQgZ3JvdXBOYW1lXG4gICAgZm9yKGxldCBpPWxuLTE7aT49MDtpLS0pey8vbG9vcCBydW5zIGluIHJldmVyc2Ugc28gdGhhdCBsYXRlc3QgZ3JvdXAgZ2V0cyBhZGRlZCBsYXN0XG4gICAgICAgIGdyb3VwTmFtZT1sb2NhbFN0b3JhZ2Uua2V5KGkpXG4gICAgICAgIGlmKGdyb3VwTmFtZSE9XCJ1c2VyXCIpe1xuICAgICAgICB3aW5kb3dbZ3JvdXBOYW1lXT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwTmFtZSkpIHx8IFtdOyAgLy9jcmVhdGUgYXJyYXkgZm9yIGVhY2ggZ3JvdXAgc3RvcmVkIGluIGxvY2FsIHN0b3JnZVxuICAgICAgICBsZXQgYXJyYXk9d2luZG93W2dyb3VwTmFtZV1cbiAgICAgICAgbGV0IHRhc2tzPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGdyb3VwTmFtZSkvL3RvIGdldCB0YXNrcyBmb3IgcGFydGljdWxhciBncm91cFxuICAgICAgICB0YXNrcz1KU09OLnBhcnNlKHRhc2tzKVxuICAgICAgICBhcnJheS5wdXNoKHRhc2tzKVxuICAgICAgICBjcmVhdGVHcm91cEVsZW1lbnQoZ3JvdXBOYW1lKVxuICAgICAgICB9XG4gICAgfSAgXG59XG5cbnBhZ2VMb2FkKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9