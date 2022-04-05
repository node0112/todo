let date
function captureTaskInfo(){
    date=document.querySelector('.date-selector').value
    //extra animation effects
    const taskForm=document.querySelector('.add-task-form')
    taskForm.style.backgroundColor="#7dd777"
    document.querySelector('.notes-input').value=""
    document.querySelector('.date-selector').value=""
    taskForm.style.opacity="0"
    setTimeout(() => {
        document.querySelector('.task-name').value=""
        document.querySelector('.notes-input').value=""
        document.querySelector('.date-selector').value=""
        document.querySelector('.task-header').style.marginBottom="5px"
        taskForm.classList.add('hidden')
        taskForm.style.backgroundColor="rgba(0, 0, 0, 0.642)"
    }, 800);
    return date
}

export { captureTaskInfo, date }