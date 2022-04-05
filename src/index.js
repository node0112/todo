//import functions here;
import {createnewtask} from './logic/newtask'
import { openNewForm } from './domscripts/openForm'
import { hide } from './domscripts/hidelement'
import { cancelTask } from './logic/canceltask'
import { captureTaskInfo } from './logic/addtask'
import { dateSelector } from './logic/duedate'
import { addNotes } from './logic/addnote'


const newNoted=document.querySelector(".add-note-button")
const newTaskBtn=document.querySelector('.add-task-button')
const cancelTaskBtn=document.querySelector('.cancel-task')
const addTaskBtn=document.querySelector('.add-task')
const dueDate=document.querySelector('.due-date-button')
//input declarations
const date=0

newTaskBtn.addEventListener('click',()=>{
   openNewForm()
})

dueDate.addEventListener('click',()=>{
   dateSelector()
})

newNoted.addEventListener('click',()=>{
    addNotes()
})

cancelTaskBtn.addEventListener('click', ()=>{
    cancelTask()
})

addTaskBtn.addEventListener('click',()=>{
    captureTaskInfo()
})
