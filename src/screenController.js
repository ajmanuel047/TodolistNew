// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";

// tomorrow's first task, remove project name title and replace it
// by the project name text when the submit button is clicked
// its like when you create the project, let it be like a form 
// the user should fill and when submit is clicked all the titles
// should be replaced by the actual text 
// next is the todo
// 
const newProjectButton = (function(){
  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.classList.add('newProjectButton');
  createNewProjectButton.textContent = 'Create Project';
  document.body.appendChild(createNewProjectButton)
  eventController().createNewProject()
  return { createNewProjectButton }
})()

function eventController(){
  const createNewProject = function (){if(document.querySelector('.newProjectButton')){
      document.querySelector('.newProjectButton').addEventListener('click', function(){
        document.body.style.backgroundColor = 'green'
        // createProject()
        // createNewProjects()
        // allProjects()
        displayProject()
        // console.log('yes')
      })}
  }
  const runSubmitProject = function(){if(document.querySelector('.submitProject')){
      document.querySelector('.submitProject').addEventListener('click', function(){
        // document.body.style.backgroundColor = 'black'
        let projectName = userInput().getUserInput(); 
        // console.log(projectName)
        createNewProjects(projectName)
        const projects = allProjects().getProjects()
        let currentProjectName = null;
        for(let i = 0; i < projects.length; i++){
          if(projects[i]['projectName'] == projectName){
             currentProjectName = projects[i]['projectName']    
          }
        }
        console.log(currentProjectName)
        
        let currentContainer = document.querySelector('.projectContainer').lastChild;
        let newProjectName = document.createElement('h1')
        newProjectName.textContent = currentProjectName
        currentContainer.firstChild.after(newProjectName,document.querySelector('.titleContainer'))

        document.querySelector('.projectName').remove()
        document.querySelector('.projectNameInput').remove()
        document.querySelector('.submitProject').remove()
      })
  }}

  const runCreateTaskButton = function(){
        let currentContainer = document.querySelector('.projectContainer')
        // console.log(currentContainer)
        // console.log(document.querySelector('.newProjectButton'))
        const currentTodo = document.querySelectorAll('.createNewTodo')
        // console.log(currentTodo)
        for(let i = 0; i < currentTodo.length; i++){
          currentTodo[i].addEventListener('click',function(e){
            console.log(e)
            if(e.target.className == `createNewTodo ${i+1}`){
               document.body.style.backgroundColor = 'orange'
               console.log(this.button)
               const todoInput = document.createElement('input');
               todoInput.classList.add('todoInput');
               const newTaskInputButton = document.createElement('button')
               newTaskInputButton.textContent = 'Add Task'
               newTaskInputButton.classList.add('newTaskInputButton')
               this.parentElement.appendChild(todoInput)
               this.parentElement.appendChild(newTaskInputButton)
               
              //  createTaskDisplay();
            }
            
            
          })
        }
        // let todoButtons = Array.from(currentTodo)
        // console.log(todoButtons)
        // currentTodo.addEventListener('click', function(e){
        //   document.body.style.backgroundColor = 'orange'
        //   console.log(e)
        // }) 
  }
  return { createNewProject, runSubmitProject, runCreateTaskButton }
}

function userInput(){
  let input = document.querySelector('.projectNameInput').value;
  // createProject(userInput);
  const getUserInput = () => input
  // console.log(getUserInput())
  document.querySelector('.projectNameInput').value = ''
  // console.log(allProjects().getProjects())

  return { getUserInput }
}

let count = 0
function createNewProjectContainer(){

       function taskbuttonNumber(){
        
         const increaseNumber = () => count++
         const getNewCount = () => count
         return { increaseNumber, getNewCount }
       }
    
       taskbuttonNumber().increaseNumber()
       
      
      // console.log(taskbuttonNumber())
      
      
      
        // let currentContainer = document.querySelector('.projectContainer').lastChild;
      
      const newProjectContainer = document.createElement('div');
      newProjectContainer.classList.add('newProjectContainer');
      document.querySelector('.projectContainer').appendChild(newProjectContainer);
      
      const titleContainer = document.createElement('div')
      titleContainer.classList.add('titleContainer')
      newProjectContainer.appendChild(titleContainer)

      const projectName = document.createElement('h2');
      projectName.classList.add('projectName');
      projectName.textContent = 'Project Name';
      titleContainer.appendChild(projectName);

      const projectNameInput = document.createElement('input');
      projectNameInput.classList.add('projectNameInput');
      newProjectContainer.appendChild(projectNameInput);

      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todoDiv');
      newProjectContainer.appendChild(todoDiv);

      const todoName = document.createElement('h3');
      todoName.classList.add('todoName');
      todoName.textContent = 'Tasks'
      todoDiv.appendChild(todoName)

      const createNewTodo = document.createElement('button');
      createNewTodo.classList.add('createNewTodo')
      createNewTodo.classList.add(`${taskbuttonNumber().getNewCount()}`)
      createNewTodo.textContent = 'New Task';
      todoDiv.appendChild(createNewTodo);
      

      const submitProject = document.createElement('button')
      submitProject.classList.add('submitProject');
      submitProject.textContent = 'Submit Project';      
      newProjectContainer.appendChild(submitProject);
      eventController().runSubmitProject()
      eventController().runCreateTaskButton()
}

function displayProject(){
  if(!document.querySelector('.projectContainer')){
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('projectContainer');
      document.body.appendChild(projectContainer);
      createNewProjectContainer();      
      // eventController()
  }else {
      createNewProjectContainer();      
  }
}
     
function createTaskDisplay(){
      const todoDiv = document.querySelector('.todoDiv')
      const todoInput = document.createElement('input');
      todoInput.classList.add('todoInput');
      this.todoDiv.appendChild(todoInput)  
}
