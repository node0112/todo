function sendItem(array,group){//sets item to local storage
      localStorage.setItem(group, JSON.stringify(array));
}
 
export { sendItem }