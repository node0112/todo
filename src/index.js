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
    if (inputChecker('.task-name')==true && groupSelected!=null){
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
         let tasks=JSON.parse(localStorage.getItem(groupName))//to get tasks for particular group
         console.log(tasks)
         array.push(tasks)
         console.log(array)
         createGroupElement(groupName)
         }
     }  
}


pageLoad()

