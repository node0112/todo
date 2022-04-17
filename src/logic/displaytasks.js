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
    clearTaskElements() //clears current task elements
}

function clearTaskElements(){
    let taskElements=document.querySelectorAll('.task-container')
    taskElements.forEach(element=>{
        element.remove()
    })
}

export { displayTasks,clearTaskElements }