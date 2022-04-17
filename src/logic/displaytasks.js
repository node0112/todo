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

export { displayTasks,clearTaskElements }