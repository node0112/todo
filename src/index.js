//import functions here;
import { openNewForm } from './domscripts/openForm'
import { closeForm } from './logic/closeform'
import { cancelTask } from './logic/canceltask'
import { dateSelector } from './logic/duedate'
import { addNotes } from './logic/addnote'
import { inputChecker } from './logic/inputcheck'
import { format,parseISO,subDays } from 'date-fns'
import { createGroupForm, closeGroupForm } from './domscripts/creategroupform'
import { sendItem } from './logic/sendItem'
import { groupSelected } from './domscripts/creategroupform'

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


//<----------------Create new task Functions --------------->


function addTask(){
    if (inputChecker('.task-name')==true){
    //extra animation effects
    taskForm.style.backgroundColor="#7dd777"
    taskForm.style.opacity="0"
    captureInfo()
    setTimeout(() => {
        closeForm()
    }, 800);
}
else if (inputChecker('.task-name')==false){
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
    createTask(groupSelected)
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
