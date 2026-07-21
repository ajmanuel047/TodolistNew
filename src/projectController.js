// import { createNewProject } from "./eventController"
import { createEmptyProject } from "./createNewProject"
import { createProject } from "./createNewProject"
import { formatDate } from "./dateformatter"
import { projectImportance } from "./projectPriority"
// import { storageCall } from "./screenController"

let projects = [
      {
        'project ID': 0,
        'project': {'projectName':'This Is A Sample Project', 'todos':[{'title' : 'Sample Todo 1', 'description' : 'Sample Description 1', 'projectNote' : 'Sample Note 1', 'dateCreated' : `Created ${formatDate().getDate()}`, 'checkList' : ['Sample Check Item 1', 'Sample Check Item 2']},
              {'title' : 'read bible', 'Description' : 'Spend 30mins before leaving'}]}
   
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
      newProject.project['todos'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['todos']
      storedProjects.push(newProject)      
    }

  storedProjects.sort(function(a,b){
   return a['project ID'] - b['project ID']
  })

  projects.push(...storedProjects)
  // console.log(projects)
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
    }
  }   
}

function editProject(value1, value2){
 for(let i = 0; i < projects.length; i++){
   if(projects[i]['project']['projectName'] == value1){
        // console.log('else ran')
    projects[i]['project']['projectName'] = value2
    projects.splice(i + 1, 1)
   }
 }
}

function createTodo(currentProjectName, arr, currentTodo, previousTodo){
  // console.log(currentProjectName)
  // console.log(arr)
  // console.log(currentTodo)
  // console.log(previousTodo)
  function pushTodo () { 
    // console.log(projects)
    projects.forEach((obj) => {
        if(typeof arr == 'string'){
          // console.log(obj)
          if(obj.project.projectName.toLowerCase() == currentProjectName.toLowerCase()){
          
          let value = arr.split()[0]
          let newObject = {}
          newObject.title = value
          obj.project.todos.push(newObject)  
          // console.log(projects)
          }
        }
        else{          
          for(let i = 0; i < arr.length; i++){  
                if(obj.project.projectName.toLowerCase() == currentProjectName.toLowerCase()){                
                  let newObject = {}
                  newObject.title = `${arr[i]}`
                  obj.project.todos.push(newObject)   
                }
             }  
          }
      })  
   }

 function editTodo(){

  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == previousTodo){
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
  //console.log(currentProjectName)
  for(let i = 0; i < projects.length; i++){
     if(projects[i]['project']['projectName'] == currentProjectName){
     // console.log(projects[i]['project']['projectName'] )  
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
  // console.log(description)
  // console.log(todo)
   for(let i = 0; i < projects.length; i++){
     if(projects[i]['project']['projectName'] == projectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        // console.log(projects[i]['todos'][j]['title'] == todo)
          if(projects[i]['project']['todos'][j]['title'] == todo){
             projects[i]['project']['todos'][j].description = description
          }       
      }
     }
   }
 }
 
 function addNoteToProject (projectName, note, todo) {
  //  console.log(note)
  //  console.log(todo)
  //  console.log(projectName)
   for(let i = 0; i < projects.length; i++){
     if(projects[i]['project']['projectName'] == projectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        // console.log(projects[i]['todos'][j]['title'] == todo)
        if(projects[i]['project']['todos'][j]['title'] == todo){
            projects[i]['project']['todos'][j].projectNote = note
        }       
      }
     }
   }
  //  console.log(projects)
 }

 function deleteProject(currentProjectName){
  console.log('delete')
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
        projects.splice(i, 1)        
    }
  }
  console.log(projects)
 }

function removeTaskFromArray(projectName, todo){
  // console.log(projectName, todo)
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

  // console.log(projects)

  return {
    addPriorityToProject
  }
}

function updateTodoStatus(currentProjectName, todo){  
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
      for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        if(projects[i]['project']['todos'][j]['title'] == todo){          
          if(!projects[i]['project']['todos'][j]['taskStatus']){
            projects[i]['project']['todos'][j]['taskStatus'] = 'Completed'
            console.log('completed')
          }else if(projects[i]['project']['todos'][j]['taskStatus'] && projects[i]['project']['todos'][j]['taskStatus'] == 'Completed'){
            projects[i]['project']['todos'][j]['taskStatus'] = 'Incomplete'
            console.log('Incomplete')
          }else if(projects[i]['project']['todos'][j]['taskStatus'] == 'Incomplete'){
            projects[i]['project']['todos'][j]['taskStatus'] = 'Completed'
            console.log('completed again')
          }
        }
      }
    }
  }
  console.log(projects)
}

function createTodoCheckList(currentProjectName, todo, checkInput){
  // console.log(currentProjectName, todo, checkInput)
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
          if(projects[i]['project']['todos'][j]['title'] == todo){
            if(!projects[i]['project']['todos'][j]['checkList']){
            // console.log('no')
            projects[i]['project']['todos'][j]['checkList'] = {}
            projects[i]['project']['todos'][j]['checkList'][`${checkInput}`] = 'Incomplete'
            // console.log(projects)
          }else{
            // console.log('yes')
            projects[i]['project']['todos'][j]['checkList'][`${checkInput}`] = 'Incomplete'
            // console.log(projects)
          }
        }
      }
    }
  }
  console.log(projects)
}

function updateCheckListStatus(currentProjectName, currentTodo, targetDiv){

for(let i = 0; i < projects.length; i++){
  if(projects[i]['project']['projectName'] == currentProjectName){
    for(let j = 0; j < projects[i]['project']['todos'].length; j++){
      if(projects[i]['project']['todos'][j]['title'] == currentTodo){
     //  console.log(projects[i]['todos'][j]['checkList'])
       for(let prop in projects[i]['project']['todos'][j]['checkList']){
        if(prop == targetDiv){         
          if(projects[i]['project']['todos'][j]['checkList'][prop] == 'Incomplete'){
              projects[i]['project']['todos'][j]['checkList'][prop] = 'Complete'
            } else{
            projects[i]['project']['todos'][j]['checkList'][prop] = 'Incomplete'
              // console.log('start here')
              /*
              next task is to update localstorage
              */
            }          
          }
        }
      }
    }
  }
}
  // we have to loop through the right project so we need
  // projectname

  // 

}
function allProjects(value){
  
  const getProjects = () => projects
  // console.log(projects)
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
        updateTodoStatus
      }


// function createProject(value){
     
//   function newProject (){
//     let project = {
//         'projectName' : null,
//         'todos' : []
//     }
    
//     const getNewProject = () => project
//     return { project, getNewProject }
//   }

//   const getEmptyProject = () => newProject().getNewProject();
//   const getNewProject = () => newProject().project
//   console.log(getEmptyProject())
//   console.log(getNewProject())
//   const pushProject = () => projects.push(newProject())
  
//   console.log(projects)
//   return { pushProject }
// }


// greeting.js

// let projects = [
//     {
//      'projectName': 'church',
//      'todo' : [{'title' : 'Wake up early', 'Description' : 'So I can prepare for service'},
//               {'title' : 'read bible', 'Description' : 'Spend 30mins before leaving'}]   
//     },
//     {
//      'projectName' : 'school',
//      'todo' : [{'title' : 'study for exam', 'Description' : 'Spend 30mins studying'}, 
//               {'title' : 'attend lectures', 'Description' : 'attend additional tutorial'}]    
//     }]
// let projectNames = []
// let todoNames = []
// for(let i = 0; i < projects.length; i++){
//     projectNames.push(projects[i][0])
//    let requiredKeys =Object.keys(projects[i])[1]
   
//    for(let j = 0; j < projects[i][Object.keys(projects[i])[1]].length; j++){
//             todoNames.push(projects[i]['todo'][j]['title'])
//         }
    
// }
// console.log(todoNames)
    
// export const greeting = "Hello, Odinite!";
/*
let project = [
{'projectName' : null, 'todo' : [{'todoName' : null},{'todoName' : null},{'todoName' : null}]},
{'projectName' : null, 'todo' : [{'todoName' : null},{'todoName' : null},{'todoName' : null}]},
{'projectName' : null, 'todo' : [{'todoName' : null},{'todoName' : null},{'todoName' : null}]}
]
*/

// import { createProject } from "./projectController";
// import { createEmptyProject } from "./createNewProject";

// function createNewProject (){
//     let newProject = null;
//     document.querySelector('.newProjectButton').addEventListener('click', function(){
//         document.body.style.backgroundColor = 'purple'
//         newProject = createEmptyProject().getEmptyProject()
//         console.log('no')
//     })
//     const getNewProject = () => newProject;
    
//     return { getNewProject };
// }

// export { createNewProject };