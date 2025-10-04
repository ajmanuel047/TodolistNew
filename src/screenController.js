// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";

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
        allProjects()
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
        currentTodo.forEach((button) => {
          button.addEventListener('click', createTaskDisplay)
          
        })
        // for(let i = 0; i < currentTodo.length; i++){
          
        //   currentTodo[i].addEventListener('click',function(e){
        //     console.log(i)
        //     // if(e.target.className == `createNewTodo ${i}`){
        //       console.log('yes')
        //        document.body.style.backgroundColor = 'orange'
              //  const todoInput = document.createElement('input');
              //  todoInput.classList.add('todoInput');
              //  const submitTaskButton = document.createElement('button')
              //  submitTaskButton.textContent = 'Add Task'
              //  submitTaskButton.classList.add('submitTaskButton')
              //  this.parentElement.appendChild(todoInput)
              //  this.parentElement.appendChild(submitTaskButton)
              //  submitTask()
              //  createTaskDisplay();
            // }
            
            
        //   })
        // }
  }

   const submitTask = function(){     
        const taskButtons = document.querySelectorAll('.submitTaskButton')
        const todoInputs = document.querySelectorAll('.todoInput')
        // console.log(todoInputs)
        for(let i = 0; i < taskButtons.length; i++){
           taskButtons[i].addEventListener('click', function(){
             let taskInput = todoInputs[i].value
             document.body.style.backgroundColor = 'purple'
            //  let taskInput = userInput().getTaskInput()
             createTodo(taskInput)
             todoInputs[i].value = ''
        }) 
        }
     
  } 
  return { createNewProject, runSubmitProject, runCreateTaskButton }
}

function userInput(){
  let projectNameInput = document.querySelector('.projectNameInput').value;
  // let taskInput = null
  if(document.querySelector('.todoInput')){
  if(document.querySelector('.todoInput')){
    //  taskInput = document.querySelector('.todoInput').value
    //  console.log(document.querySelector('.todoInput').value)
  }
  }

  
  
  const getUserInput = () => projectNameInput
  // const getTaskInput = () => taskInput
  document.querySelector('.projectNameInput').value = ''
  // console.log(allProjects().getProjects())

  return { 
    getUserInput 
    // getTaskInput 
  }
}

let count = -1
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
      // eventController().submitTask()
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
    document.body.style.backgroundColor = 'blue'
    console.log('yes')
    const todoInput = document.createElement('input');
    todoInput.classList.add('todoInput');
    console.log(this.className)
    const submitTaskButton = document.createElement('button')
    submitTaskButton.textContent = 'Add Task'
    submitTaskButton.classList.add('submitTaskButton')
    this.parentElement.appendChild(todoInput)
    this.parentElement.appendChild(submitTaskButton)
    
}
