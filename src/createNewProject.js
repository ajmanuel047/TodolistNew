function createProject(){

  let projects = {
    'projectName' : null,
    'todos' : [],
  }     
    const newProject = () => projects    
    return { newProject }
}

export { createProject }