// import { createNewProject } from "./eventController"
import { createEmptyProject } from "./createNewProject"
import { createProject } from "./createNewProject"
let projects = []

function createNewProjects(value, value2){
    const newProject = createProject(value).newProject()
    projects.push(newProject)
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['projectName'] == null){
        projects[i]['projectName'] = value
        // console.log(i)
      }else if(projects[i]['projectName'] == value){
        projects[i]['projectName'] = value2
        projects.splice(i + 1, 1)
      }
    }
    // console.log(projects)
    // return { newProject }

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
 
  // console.log(arr)
 // console.log(typeof arr)
// console.log(currentProjectName)

  function pushTodo () { 
    projects.forEach((obj) => {
 //      console.log(obj.projectName)
        //  console.log(obj.todos)
        //  console.log(typeof arr)
          // console.log(arr)
          // console.log(obj)
        if(typeof arr == 'string'){
          if(obj.projectName.toLowerCase() == currentProjectName.toLowerCase()){
          const value = arr.split()[0]
          let newObject = {}
          newObject.title = value
          obj.todos.push(newObject)  
          // console.log('this runs')
          }
        }
        else{
          // console.log(typeof arr)
          for(let i = 0; i < arr.length; i++){
                if(obj.projectName.toLowerCase() == currentProjectName.toLowerCase()){
                  let newObject = {}
                  newObject.title = `${arr[i]}`
   //               console.log(`${arr[i]}`)
                  obj.todos.push(newObject)     
                  // console.log('it runs') 
                }
            }  
        }
      // for(let i = 0; i < arr.length; i++){
      //     if(obj.projectName == currentProjectName){
      //       let newObject = {}
      //       newObject.title = `${arr[i]}`
      //       console.log(`${arr[i]}`)
      //       obj.todos.push(newObject)      
      //     }
      // }    
      // if(obj.projectName == currentProjectName){
      //    console.log(obj.todos)
      //    console.log(obj)
      // }
    })
      // console.log(projects)
 }

 function editTodo(){
  //  console.log('test')
  // console.log(projects)
  //  console.log(currentTodo)
  //  console.log(currentProjectName)
   // console.log(currentTodo)
  for(let i = 0; i < projects.length; i++){
  // console.log(projects[i]['projectName'])
    if(projects[i]['projectName'] == currentProjectName){
      // console.log(currentProjectName)
      // console.log(projects[i]['todos'])
      for(let j = 0; j < projects[i]['todos'].length; j++){
        // console.log(projects[i]['todos'][j]['title'])
        // console.log('me')
        if(projects[i]['todos'][j]['title'] == previousTodo){
          // console.log(previousTodo)
          // console.log(currentTodo)
          projects[i]['todos'][j]['title'] = currentTodo
          
        }
      }
    }
  }
 // console.log(projects)
 }
  const createObject = () => pushTodo()

  return {
          createObject,
          editTodo
         }

}

function allProjects(value){
  
  const getProjects = () => projects
  // console.log(projects)
  return { getProjects }
}


export { 
        createNewProjects, 
        allProjects, 
        createTodo 
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