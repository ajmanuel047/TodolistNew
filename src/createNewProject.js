    
function createEmptyProject(){
    let project = {
        'projectName' : null,
        'todos' : []
    }
    const getEmptyProject = () => project;
    return { getEmptyProject }
}

export { createEmptyProject }