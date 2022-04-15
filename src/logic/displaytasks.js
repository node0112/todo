function displayTasks(groupName){//function to clear tasks in view and create elements to show new tasks in group array
    let array=window[groupName]
    const ln=array.length
    for(let i=0;i<ln;i++){
        let name=array.taskName
        let number=array.taskNumber
        let note=array.notes
        let date=array.duedate
        console.log(name,number,note,date)
        createTaskElements(name,number,note,date)
    }
}

function createTaskElements(taskName,taskNumber,notes,duedate){//internal function DO NOT EXPORT!

    //initializing elements to create task in html
    const tasksWindow=document.querySelector('.tasks-window')//main element fo rchild nodes to be appended to
    let taskContainer=document.createElement('div')
    taskContainer.classList.add('task-container')

    let number=document.createElement('div') //create task elements
    let name=document.createElement('div')
    let note=document.createElement('div')
    let date=document.createElement('div')
    let done=document.createElement('i')

    number.classList.add('numb')
    name.classList.add('name')
    note.classList.add('note')
    date.classList.add('date')
    done.classList.add('material-icons')
    done.classList.add('task-done-button')
    done.style.fontSize="30px"

    //now we assign each task its values--->
    number.textContent=taskNumber
    name.textContent=taskName
    note.textContent=notes
    date.textContent=duedate

    taskContainer.appendChild(number)
    taskContainer.appendChild(name)
    taskContainer.appendChild(note)
    taskContainer.appendChild(date)
    taskContainer.appendChild(done)

    tasksWindow.appendChild(taskContainer)
    
    done.addEventListener('click',()=>{
        //function to remove task from array
        //function to remove task from local storage
        //add amount of tasks done for group and store in LS
    })
}

function clearTaskElements(){
    let taskElements=document.querySelectorAll('.task-container')
    taskElements.forEach(element=>{
        element.remove()
    })
}

export { displayTasks,clearTaskElements }