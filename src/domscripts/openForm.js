function openNewForm(){
    var elem = document.querySelector('.tasks-window');
     elem.scrollTop='0'
    const taskForm=document.querySelector('.add-task-form')
    document.querySelector('.task-header').style.marginBottom='10%'
    taskForm.classList.remove('hidden')
    taskForm.style.transition="all 1s"
    setTimeout(() => {
        taskForm.style.opacity='1'
    }, 900);
}

export { openNewForm }