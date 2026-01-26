function createProject(name){

  let projects = {
    'projectName' : null,
    'todos' : [],
    // 'description' : null,
    'projectNote' : null,
    // 'Todo list' : [],
    'Date Created' : '',
    'dueDate' : '',
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