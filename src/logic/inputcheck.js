function inputChecker(classname){
    let value=document.querySelector(classname).value
    let length=document.querySelector(classname).value.length
    if(value!='' && length>3){
        return true
    }
    else{
        return false
    }
}

function groupInputChecker(classname){
    let value=document.querySelector(classname).value
    let length=document.querySelector(classname).value.length
    if(stringHasTheWhiteSpaceOrNot(value)==false){
    if(value!='' && length>3 ){
        return true
    }
    else{
        return false
    }
}
}
function stringHasTheWhiteSpaceOrNot(value){// do not export
    return value.indexOf(' ') >= 0;
 }

export { inputChecker,groupInputChecker }