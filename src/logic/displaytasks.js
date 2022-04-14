function displayTasks(groupName){//function to clear tasks in view and create elements to show new tasks in group array
    let array=window[groupName]
    const ln=array.length
    for(let i=0;i<ln;i++){
        let taskName=array.taskName
        let taskNumber=array.taskNumber
        let notes=array.notes
        let duedate=array.duedate

        //initializing elements to create task in html
        const formContainer=document.createElement('div')
        formContainer.classList.add('form-container')
    }
}