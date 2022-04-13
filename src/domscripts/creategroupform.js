import { inputChecker } from '../logic/inputcheck'

function createGroupForm(){
    const sidebar=document.querySelector('.sidebar')
    const formContainer=document.createElement('div')
    const input=document.createElement("input")
    const closeBtn=document.createElement('i')
    const addGroupBtn=document.createElement("i")

    formContainer.classList.add('group-form-container')
    input.classList.add('group-name-input')
    closeBtn.classList.add("material-icons")
    closeBtn.classList.add('remove-groupform-btn')
    closeBtn.style.cursor="pointer"
    closeBtn.textContent="close"
    closeBtn.onmouseover="color: black;"
    addGroupBtn.classList.add('material-icons')
    addGroupBtn.classList.add('grpformadd')
    addGroupBtn.textContent="add"
    input.style.border="none"
    input.style.fontFamily="roboto condensed"
    input.style.backgroundColor="yellowgreen"
    input.style.transition="all 0.4s"
    const dot=document.createElement('span')
    dot.classList.add('dot')
    dot.classList.add('title')
    input.size="20"
    input.fontSize=("24px")
    
    formContainer.style.opacity="0"
    setTimeout(() => {
        formContainer.style.opacity="1"
    }, 100);
    
    document.querySelector('.add-group-btn').removeEventListener('click',createGroupForm)
    formContainer.appendChild(dot)
    formContainer.appendChild(input)
    formContainer.appendChild(addGroupBtn)
    formContainer.appendChild(closeBtn)
    sidebar.appendChild(formContainer)
    closeBtn.addEventListener('click', ()=>{
        if(confirm('Are you Sure You Want To Cancel?')==true){
            closeGroupForm()
        }
    })
    addGroupBtn.addEventListener('click',addInfo)
}
function closeGroupForm(){
    const groupForm=document.querySelector('.group-form-container')
    groupForm.style.opacity='0'
    setTimeout(() => {
        groupForm.remove()
        document.querySelector('.add-group-btn').addEventListener('click',createGroupForm)
    }, 500);
}

//functions to execute after add button has been pressed

function addInfo(){
    let input=document.querySelector('.group-name-input')
    //if(inputChecker('.group-name-input')==true){
      //  closeGroupForm()
       // input.style.backgroundColor="#11ff00"
    //}
    closeGroupForm()
    input.style.backgroundColor="#11ff00"
    let groupName=input.value
    createGroupElement(groupName)
}

function createGroupElement(groupName){
    const formContainer=document.querySelector('.sidebar')
    let container=document.createElement('div')
    container.classList.add('group-container')

    //create group element and assign it a title number
    let groupTitle=document.createElement('div')
    groupTitle.classList.add('group-title')
    groupTitle.classList.add('title')
    const str2 = groupName.charAt(0).toUpperCase() + groupName.slice(1);
    groupTitle.textContent= str2

    //Spawn Dot for title
    const dot=document.createElement('span')
    dot.classList.add('dot')
    dot.classList.add('title')

    //create close button
    let closeBtn=document.createElement('i')
    closeBtn.classList.add("material-icons")
    closeBtn.classList.add('remove-group-btn')
    closeBtn.textContent=('close')

    //title and dot container
    let titleDot=document.createElement('div')
    titleDot.classList.add('title-dot-container')
    titleDot.appendChild(dot)
    titleDot.appendChild(groupTitle)

    //add elements according to their order, to the container
    container.appendChild(titleDot)
    container.appendChild(closeBtn)
    formContainer.appendChild(container)
}
export { createGroupForm,closeGroupForm,addInfo }