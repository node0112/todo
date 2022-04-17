//import functions here;
import { openNewForm } from './domscripts/openForm'
import { closeForm } from './logic/closeform'
import { cancelTask } from './logic/canceltask'
import { dateSelector } from './logic/duedate'
import { addNotes } from './logic/addnote'
import { inputChecker } from './logic/inputcheck'
import { format,parseISO,subDays } from 'date-fns'
import { createGroupForm, closeGroupForm, createGroupElement } from './domscripts/creategroupform'
import { sendItem } from './logic/sendItem'
import { groupSelected } from './domscripts/creategroupform'
import { clearTaskElements, displayTasks } from './logic/displaytasks'

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
   openNewForm()
})

dueDateBtn.addEventListener('click',()=>{
   dateSelector()
})

newNoted.addEventListener('click',()=>{
    addNotes()
})

cancelTaskBtn.addEventListener('click', ()=>{
    cancelTask()
})

addTaskBtn.addEventListener('click',()=>{
    addTask()
})



//create new group
const addGroupBtn=document.querySelector('.add-group-btn')
addGroupBtn.addEventListener('click',()=>{
    createGroupForm()
})
newGroupLink.addEventListener('click',()=>{
    createGroupForm()
})

//<----------------Create new task Functions --------------->


function addTask(){
    if (inputChecker('.task-name')==true && groupSelected!=null){
    //extra animation effects
    taskForm.style.backgroundColor="#7dd777"
    taskForm.style.opacity="0"
    captureInfo()
    setTimeout(() => {
        closeForm()
        clearTaskElements()
        displayTasks(groupSelected)
        var elem = document.querySelector('.tasks-window');
         elem.scrollTop = elem.scrollHeight;
    }, 800);
}
else if (inputChecker('.task-name')==false){
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
    createTask(groupSelected)
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
        createGroupElement(groupName)
        }
    }  
}


pageLoad()

