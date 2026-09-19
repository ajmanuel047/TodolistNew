import { createEmptyProject } from "./createNewProject"
import { createProject } from "./createNewProject"
import { formatDate } from "./dateformatter"
import { projectImportance } from "./projectPriority"

let projects = [
      {
        'project ID': 0,        
        'project': {'projectName':'This Is A Sample Project', 'Date Created' : `${formatDate().getDate()}`,'project status': 'InComplete','todos':[{'title' : 'Sample Todo 1', 'description' : 'Sample Description 1', 'projectNote' : 'Sample Note 1', 'dateCreated' : `${formatDate().getDate()}`, 'taskStatus' : 'Completed', 'checkList' : {'Sample Item1' : 'Complete', 'Sample Item2' : 'InComplete'}},
              {'title' : 'Sample Todo 2', 'description' : 'Spend 30mins before leaving', 'projectNote' : 'Sample Note 2', 'dateCreated' : `${formatDate().getDate()}`, 'taskStatus' : 'Completed', 'checkList' : {'Sample Item3' : 'Complete', 'Sample Item4' : 'Complete'}}]}
   
    }
]

let storedProjects = []

function callStorage(){
  if(localStorage.length > 0 && projects.length < 2){
    for(let i = 0; i < localStorage.length; i++){
      let newProject = {}
      newProject['project ID'] = Number(localStorage.key(i))     
      newProject.project = {}
      newProject.project['projectName'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['projectName']
      newProject.project['Date Created'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['Date Created']
      newProject.project['project status'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['project status']
      newProject.project['todos'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['todos']
      storedProjects.push(newProject)      
    }

  storedProjects.sort(function(a,b){
   return a['project ID'] - b['project ID']
  })
  let newProject = []
  projects.push(...storedProjects) 
  }
}

let increment = (function idIncrement(){
  return function increaseValue(){
    let value = Number(projects[projects.length - 1]['project ID'])
    value += 1  
    return value
  }
}())


callStorage()

function createNewProjects(value){
  const newProject = {}
  newProject['project ID'] = increment()
  newProject.project = createProject(value).newProject()
  projects.push(newProject)    
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == null){             
      projects[i]['project']['projectName'] = value   
      projects[i]['project']['project status'] = 'InComplete'   
      projects[i]['project']['Date Created'] = formatDate().getDate()  
    }
  }   
}

function editProject(value1, value2){

 for(let i = 0; i < projects.length; i++){
   if(projects[i]['project']['projectName'] == value1){
    projects[i]['project']['projectName'] = value2
   }
 }
}

function createTodo(currentProjectName, arr, currentTodo, previousTodo){
 
  function pushTodo () { 
    // 
    projects.forEach((obj) => {
        if(typeof arr == 'string'){
          // 
          // 
          if(obj.project.projectName.toLowerCase() == currentProjectName.toLowerCase()){
          
          let value = arr.split()[0]
          let newObject = {}
          newObject.title = value
          obj.project.todos.push(newObject)  
          }
        }
        else{          
          for(let i = 0; i < arr.length; i++){  
                if(obj.project.projectName.toLowerCase() == currentProjectName.toLowerCase()){                
                  let newObject = {}
                  newObject.title = `${arr[i]}`
                  obj.project.todos.push(newObject)   
                  // 
                }
             }  
          }
      })  
   }

 function editTodo(){ 
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
      // 
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == previousTodo){
          // 
          projects[i]['project']['todos'][j]['title'] = currentTodo
        }       
      }
    }
  }
 }
 
  const createObject = () => pushTodo()

  return {
          createObject,
          editTodo
         }

}

function dateController(currentProjectName, calenderValues, todo){
  for(let i = 0; i < projects.length; i++){
     if(projects[i]['project']['projectName'] == currentProjectName){
 
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
      
        if(projects[i]['project']['todos'][j]['title'] == todo){
           if(calenderValues == undefined){
                projects[i]['project']['todos'][j].dateCreated = formatDate().getDate()
           } else {
                projects[i]['project']['todos'][j].dueDate = formatDate(calenderValues).dueDate()
           }                  
         }
       }           
     }
  }   
}

 function addDescriptionToProject (projectName, description, todo) {

   for(let i = 0; i < projects.length; i++){
     if(projects[i]['project']['projectName'] == projectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        // 
          if(projects[i]['project']['todos'][j]['title'] == todo){
             projects[i]['project']['todos'][j].description = description
          }       
      }
     }
   }
 }
 
 function addNoteToProject (projectName, note, todo) {
 
   for(let i = 0; i < projects.length; i++){
     if(projects[i]['project']['projectName'] == projectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == todo){
            projects[i]['project']['todos'][j].projectNote = note
        }       
      }
     }
   }
 }

 function deleteProject(currentProjectName){
  // 
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
        projects.splice(i, 1)        
    }
  }
 }

function removeTaskFromArray(projectName, todo){
  // 
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == projectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == todo){
            projects[i]['project']['todos'].splice(j, 1)
        }
      }
    }
  }
}

function projectPriorityController(currentProjectName, todo){
  function addPriorityToProject(){
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['project']['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
          if(projects[i]['project']['todos'][j]['title'] == todo){
           let currentProjectPriority = projects[i]['project']['todos'][j]['taskPriority']
           let newProjectPriority = projectImportance(currentProjectPriority).currentValue()
             projects[i]['project']['todos'][j].taskPriority = newProjectPriority
          }
        }
      }
    }
  }



  return {
    addPriorityToProject
  }
}

function updateProjectStatus(projectName, status){
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == projectName){
      projects[i]['project']['project status'] = status
    }
  }
}

function updateTodoStatus(currentProjectName, todo, targetDiv){

  let checkListStatus = null
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == todo){
            if(!projects[i]['project']['todos'][j]['taskStatus']){
             if(targetDiv == 'todoSubmitButton'){
                projects[i]['project']['todos'][j]['taskStatus'] = 'InComplete'
             }else{
               projects[i]['project']['todos'][j]['taskStatus'] = 'Completed'
             }
             if(projects[i]['project']['todos'][j]['checkList']){
                let checkListStatus = Object.values(projects[i]['project']['todos'][j]['checkList'])
                if(checkListStatus.includes('Incomplete')){
                  projects[i]['project']['todos'][j]['taskStatus'] = 'InComplete'
                }else if(!checkListStatus.includes('Incomplete')){
                  projects[i]['project']['todos'][j]['taskStatus'] = 'Completed'
                }
             }
          }else if(projects[i]['project']['todos'][j]['taskStatus']){   
            if(projects[i]['project']['todos'][j]['taskStatus'] == 'Completed'){
               projects[i]['project']['todos'][j]['taskStatus'] = 'InComplete'
            }else if(projects[i]['project']['todos'][j]['taskStatus'] == 'InComplete'){
              if(projects[i]['project']['todos'][j]['checkList']){
                let checkListStatus = Object.values(projects[i]['project']['todos'][j]['checkList'])
                if(!checkListStatus.includes('Incomplete')){
                    projects[i]['project']['todos'][j]['taskStatus'] = 'Completed'
                }else if(checkListStatus.includes('Incomplete')){
                    projects[i]['project']['todos'][j]['taskStatus'] = 'InComplete'
                }
              }else if(!projects[i]['project']['todos'][j]['checkList']){
                 projects[i]['project']['todos'][j]['taskStatus'] = 'Completed'
              }
            }
          }
        }
      }
    }
  }
  // 
}

function createTodoCheckList(currentProjectName, todo, checkInput, status){
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
          if(projects[i]['project']['todos'][j]['title'] == todo){
            if(!projects[i]['project']['todos'][j]['checkList']){
              projects[i]['project']['todos'][j]['checkList'] = {}    
                if(status == true){
                  projects[i]['project']['todos'][j]['checkList'][`${checkInput}`] = 'Complete'
                }else if(status == false){
                  projects[i]['project']['todos'][j]['checkList'][`${checkInput}`] = 'Incomplete'
                }
          }else if(projects[i]['project']['todos'][j]['checkList']){
              if(status == true){
                 projects[i]['project']['todos'][j]['checkList'][`${checkInput}`] = 'Complete'
              }else if(status == false){
                 projects[i]['project']['todos'][j]['checkList'][`${checkInput}`] = 'Incomplete'
              }
          }
        }
      }
    }
  }
}

function updateCheckListStatus(currentProjectName, currentTodo, checkItem){
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == currentTodo){
        for(let prop in projects[i]['project']['todos'][j]['checkList']){
          if(prop == checkItem){             
            if(projects[i]['project']['todos'][j]['checkList'][prop] == 'Incomplete'){
                projects[i]['project']['todos'][j]['checkList'][prop] = 'Complete'
              } else{
              projects[i]['project']['todos'][j]['checkList'][prop] = 'Incomplete' 
              }          
            }
          }
        }
      }
    }
  }
}

function deleteAllProjects(){    
  let newProject = projects.slice(0, 1)
  projects = newProject
  
}

function allProjects(value){
  
  const getProjects = () => projects
  return { getProjects }
}


export { 
        createNewProjects, 
        editProject,
        allProjects, 
        createTodo,
        dateController,
        addDescriptionToProject,
        addNoteToProject,
        deleteProject,
        removeTaskFromArray,
        projectPriorityController, 
        createTodoCheckList,
        updateCheckListStatus,
        updateProjectStatus,
        updateTodoStatus,
        deleteAllProjects
      }