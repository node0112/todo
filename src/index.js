//import functions here;
import {createnewtask} from './logic/newtask'
import { openNewForm } from './domscripts/openForm'
import { closeForm } from './logic/closeform'
import { cancelTask } from './logic/canceltask'
import { dateSelector } from './logic/duedate'
import { addNotes } from './logic/addnote'
import { inputChecker } from './logic/inputcheck'
import { format,parseISO,subDays } from 'date-fns'
import { createGroupForm, closeGroupForm } from './domscripts/creategroupform'
import { sendItem } from './logic/sendItem'

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
    taskDate=document.querySelector('.date-selector').value    
    if(taskDate!=''){
        daysCount()
    }
}
function daysCount(){
    taskDate=parseISO(taskDate,1)
    taskDate=format(taskDate,'yyyy,MM,dd')
    console.log(taskDate)
    let date= new Date()
    date = format(date, 'dd')
    console.log(date)
    let days= format((subDays(new Date(taskDate), date)),'dd')//<-- wrong logic here; works with days but crashes when months are added
    console.log(days)
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


//add info to array{

function createGroupArray(groupname){
    let groupName = []
}
class task{
    constructor(taskNumber,taskName,notes,duedate){
    this.taskNumber=taskNumber
    this.taskName=taskName
    this.notes=notes
    this.duedate=duedate
    }
}
