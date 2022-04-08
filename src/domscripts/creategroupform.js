function createGroupForm(){
    const sidebar=document.querySelector('.sidebar')
    const formContainer=document.createElement('div')
    const input=document.createElement("input")
    const closeBtn=document.createElement('i')

    formContainer.classList.add('group-form-container')
    input.classList.add('group-name-input')
    closeBtn.classList.add("material-icons")
    closeBtn.classList.add('remove-groupform-btn')
    closeBtn.style.color="red"
    closeBtn.style.cursor="pointer"
    closeBtn.textContent="close"
    input.style.border="none"
    input.style.fontFamily="roboto condensed"
    input.style.backgroundColor="yellowgreen"
    input.size="15"


    formContainer.appendChild(input)
    formContainer.appendChild(closeBtn)
    sidebar.appendChild(formContainer)
    console.log('hello')
    closeBtn.addEventListener('click',()=>{closeGroupForm()})
}
function closeGroupForm(){
    const groupForm=document.querySelector('.group-form-container')
    groupForm.remove()
}

export { createGroupForm,closeGroupForm }