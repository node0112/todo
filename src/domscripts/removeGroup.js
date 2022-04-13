function removeGroup(groupName){
    const str2 = groupName.charAt(0).toLowerCase() + groupName.slice(1);
    //write function to also exectue removal from offline storage
    let group=document.querySelector('.'+str2)
    group.style.opacity="0"
    setTimeout(() => {
        group.remove()
    }, 500);
    console.log(window[str2])
}

export { removeGroup }