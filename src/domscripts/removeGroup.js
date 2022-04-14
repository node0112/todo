function removeGroup(groupName){
     groupName = groupName.charAt(0).toLowerCase() + groupName.slice(1);
    // function to exectue removal from offline storage
    let ln=localStorage.length
    for(let i=0;i<ln;i++){//to find and rmeove item from local storage
        if(localStorage.key(i)==groupName){
            let key=localStorage.key(i)
            localStorage.removeItem(key)
        }
    }
    //remove element from html 
    let group=document.querySelector('.'+groupName)
    group.style.opacity="0"
    setTimeout(() => {
        group.remove()
    }, 500);
    location.reload()//so that array gets deleted too
}

export { removeGroup }