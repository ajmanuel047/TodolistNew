// import { createNewProject } from "./eventController"
import { createEmptyProject } from "./createNewProject"
import { createProject } from "./createNewProject"
import { formatDate } from "./dateformatter"
import { projectImportance } from "./projectPriority"
// import { storageCall } from "./screenController"

let projects = [
      {
     'projectName': 'This Is A Sample Project',
     'todos' : [{'title' : 'Sample Todo 1', 'description' : 'Sample Description 1', 'projectNote' : 'Sample Note 1', 'dateCreated' : `Created ${formatDate().getDate()}`, 'checkList' : ['Sample Check Item 1', 'Sample Check Item 2']},
              {'title' : 'read bible', 'Description' : 'Spend 30mins before leaving'}]   
    }
]

let storedProjects = []

function callStorage(){
  if(localStorage.length > 0 && projects.length < 2){
    for(let i = 0; i < localStorage.length; i++){
      let newProject = {}
      newProject.projectName = localStorage.key(i)     
      newProject.todos = JSON.parse(localStorage.getItem(localStorage.key(i)))
      storedProjects.push(newProject)      
    }
  projects.push(...storedProjects)
  console.log(projects)
  }
}

callStorage()
function createNewProjects(value, value2){
    // console.log(value, value2)
    // console.log(localStorage.length)
    const newProject = createProject(value).newProject()
    projects.push(newProject)
    // console.log(newProject)

// console.log(projects)
    for(let i = 0; i < projects.length; i++){
      // console.log(projects[i]['projectName'])
      if(projects[i]['projectName'] == null && value2 == undefined){
        // console.log(value2) 
        projects[i]['projectName'] = value
        // console.log(i)
      }else if(projects[i]['projectName'] == value){
        // console.log('else ran')
        projects[i]['projectName'] = value2
        projects.splice(i + 1, 1)
      }
    }
}

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

function createTodo(currentProjectName, arr, currentTodo, previousTodo){
 
  function pushTodo () { 
    // console.log(projects)
    projects.forEach((obj) => {
        if(typeof arr == 'string'){
          if(obj.projectName.toLowerCase() == currentProjectName.toLowerCase()){
          // console.log(arr)
          let value = arr.split()[0]
          let newObject = {}
          newObject.title = value
          obj.todos.push(newObject)  
          console.log(projects)
          }
        }
        else{
          // console.log(typeof arr)
          for(let i = 0; i < arr.length; i++){
                if(obj.projectName.toLowerCase() == currentProjectName.toLowerCase()){
                  let newObject = {}
                  newObject.title = `${arr[i]}`
                  // obj.todos.push(newObject)
                  obj.todos.push(newObject)     
                  // console.log(projects) 
                }
            }  
        }
    })  
 }

 function editTodo(){

  for(let i = 0; i < projects.length; i++){
    if(projects[i]['projectName'] == currentProjectName){
      for(let j = 0; j < projects[i]['todos'].length; j++){
        if(projects[i]['todos'][j]['title'] == previousTodo){
          projects[i]['todos'][j]['title'] = currentTodo
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
     if(projects[i]['projectName'] == currentProjectName){
       for(let j = 0; j < projects[i]['todos'].length; j++){
         if(projects[i]['todos'][j]['title'] == todo){
           if(calenderValues == undefined){
                projects[i]['todos'][j].dateCreated = formatDate().getDate()
           } else {
                projects[i]['todos'][j].dueDate = formatDate(calenderValues).dueDate()
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
     if(projects[i]['projectName'] == projectName){
      for(let j = 0; j < projects[i]['todos'].length; j++){
        // console.log(projects[i]['todos'][j]['title'] == todo)
          if(projects[i]['todos'][j]['title'] == todo){
             projects[i]['todos'][j].description = description
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
     if(projects[i]['projectName'] == projectName){
      for(let j = 0; j < projects[i]['todos'].length; j++){
        // console.log(projects[i]['todos'][j]['title'] == todo)
          if(projects[i]['todos'][j]['title'] == todo){
             projects[i]['todos'][j].projectNote = note
             
          }
         
        
      }
     }
   }
  //  console.log(projects)
 }

 function deleteProject(currentProjectName){
  // console.log(currentProjectName)
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['projectName'] == currentProjectName){
        projects.splice(i, 1)        
    }
  }
 }

function removeTaskFromArray(projectName, todo){
  // console.log(projectName, todo)
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['projectName'] == projectName){
      for(let j = 0; j < projects[i]['todos'].length; j++){
        if(projects[i]['todos'][j]['title'] == todo){
            projects[i]['todos'].splice(j, 1)
        }
      }
    }
  }
}

function projectPriorityController(currentProjectName, todo){
  function addPriorityToProject(){
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['todos'].length; j++){
          if(projects[i]['todos'][j]['title'] == todo){
           let currentProjectPriority = projects[i]['todos'][j]['taskPriority']
           let newProjectPriority = projectImportance(currentProjectPriority).currentValue()
           projects[i]['todos'][j].taskPriority = newProjectPriority
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

function createTodoCheckList(currentProjectName, todo, checkInput){
  // console.log(currentProjectName, todo, checkInput)
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['todos'].length; j++){
          if(projects[i]['todos'][j]['title'] == todo){
            if(!projects[i]['todos'][j]['checkList']){
            // console.log('no')
            projects[i]['todos'][j]['checkList'] = {}
            projects[i]['todos'][j]['checkList'][`${checkInput}`] = 'Incomplete'
            // console.log(projects)
          }else{
            // console.log('yes')
            projects[i]['todos'][j]['checkList'][`${checkInput}`] = 'Incomplete'
            // console.log(projects)
          }
        }
      }
    }
  }
  // console.log(projects)
}

function updateCheckListStatus(currentProjectName, currentTodo, targetDiv){

for(let i = 0; i < projects.length; i++){
  if(projects[i]['projectName'] == currentProjectName){
    for(let j = 0; j < projects[i]['todos'].length; j++){
      if(projects[i]['todos'][j]['title'] == currentTodo){
     //  console.log(projects[i]['todos'][j]['checkList'])
       for(let prop in projects[i]['todos'][j]['checkList']){
        if(prop == targetDiv){         
          if(projects[i]['todos'][j]['checkList'][prop] == 'Incomplete'){
              projects[i]['todos'][j]['checkList'][prop] = 'Complete'
            } else{
            projects[i]['todos'][j]['checkList'][prop] = 'Incomplete'
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
        allProjects, 
        createTodo,
        dateController,
        addDescriptionToProject,
        addNoteToProject,
        deleteProject,
        removeTaskFromArray,
        projectPriorityController, 
        createTodoCheckList,
        updateCheckListStatus
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