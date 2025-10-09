// import { createNewProject } from "./eventController"
import { createEmptyProject } from "./createNewProject"
import { createProject } from "./createNewProject"
let projects = []

function createNewProjects(value){
  // console.log(value)
    const newProject = createProject(value).newProject()
    projects.push(newProject)
    // console.log('log')

    for(let i = 0; i < projects.length; i++){
      if(projects[i]['projectName'] == null){
        // console.log('it does')
        projects[i]['projectName'] = value
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

function createTodo(currentProjectName, arr){
  // console.log(arr)
  // let totalInputs = document.querySelectorAll('.todoInput')
  function pushTodo () { 
    projects.forEach((obj) => {
      // console.log(obj)
      for(let i = 0; i < arr.length; i++){
          if(obj.projectName == currentProjectName){
            // console.log(obj.projectName)
            // console.log('yes it is')
            let newObject = {}
            newObject.title = `${arr[i]}`
            // let newObject = Object.assign(obj, )
            


            obj.todos.push(newObject)
      
    }
      }

    
    
  })
  console.log(projects)
  }
  const createObject = () => pushTodo()

  return {
          createObject
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