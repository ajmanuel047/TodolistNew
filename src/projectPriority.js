
let value;
function projectImportance(currentProjectPriority){
    let projectPriorityArr = ['Low', 'High', 'Extremely High'];
    // console.log(currentProjectPriority)
    // let value;
        if(currentProjectPriority == undefined || currentProjectPriority == projectPriorityArr[2]){
            value = projectPriorityArr[0]
            
        }else if(currentProjectPriority == projectPriorityArr[0]){
            value = projectPriorityArr[1]
        }else if(currentProjectPriority == projectPriorityArr[1]){
            value = projectPriorityArr[2]
        }
        // console.log(value)
    const currentValue = () => value
    return { currentValue }
    

}

export {
    projectImportance
}