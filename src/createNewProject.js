function createProject(name){

  let projects = {
    'projectName' : null,
    'todos' : [],
    // 'Description' : '',
    // 'Project Notes' : '',
    // 'Todo list' : [],
    // 'Date Created' : '',
    // 'Due Date' : '',
    // 'Priority' : null,
    // 'Check List' : [],
    //  getDescription : function(){
    //    return 'The description of this project is ' + this.Description
    //  }
  }
   
  
    // const getName = () => name
    const newProject = () => projects
    
    return { newProject }
}

export { createProject }