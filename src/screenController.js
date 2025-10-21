// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";

const newProjectButton = (function(){
  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.classList.add('newProjectButton');
  createNewProjectButton.textContent = 'Create Project';
  document.body.appendChild(createNewProjectButton)
  eventController().createNewProject()
  return { createNewProjectButton }
})()

function eventController(){
  let currentProjectName = null;
  const createNewProject = function (){
    if(document.querySelector('.newProjectButton')){
      document.querySelector('.newProjectButton').addEventListener('click', function(){
        if(!document.querySelector('.submitProject')){
        document.body.style.backgroundColor = 'green'
        // createProject()
        // createNewProjects()
        // allProjects()
        displayProject()
        // console.log('yes')
        }

      })}
  }
  const runSubmitProject = function(){
    if(document.querySelector('.submitProject')){
      document.querySelector('.submitProject').addEventListener('click', function(){
        // document.body.style.backgroundColor = 'black'
        let projectName = userInput().getUserInput(); 
        // console.log(projectName)
        if(projectName){
        createNewProjects(projectName)
        const projects = allProjects().getProjects()
        
        for(let i = 0; i < projects.length; i++){
          if(projects[i]['projectName'] == projectName){
             currentProjectName = projects[i]['projectName']    
          }
        }
        // console.log(currentProjectName)
        
        let currentContainer = document.querySelector('.projectContainer').lastChild;
        let newProjectName = document.createElement('h2')
        newProjectName.textContent = currentProjectName
        currentContainer.firstChild.after(newProjectName,document.querySelector('.titleContainer'))

        submitTask(currentProjectName)
        document.querySelector('.projectName').remove()
        document.querySelector('.projectNameInput').remove()
        document.querySelector('.submitProject').remove()
        }



      })
  }
runCreateTaskButton()
}

  const runCreateTaskButton = function(){
        let currentContainer = document.querySelector('.projectContainer')
        const currentTodo = document.querySelectorAll('.createNewTodo')
        console.log(currentTodo)
        
        // if(document.querySelector('.createNewTodo')){
        //   document.querySelector('.createNewTodo').addEventListener('click', function(){
        //     document.body.style.backgroundColor = 'purple'
        //   })
        // }
       const taskCreator = createTask()

        currentTodo.forEach((button) => {  
          console.log(currentTodo) 
          // if(!button.dataset.listenerAdded){
          //   button.addEventListener('click', createTask().getInputAndButton())
          //   button.dataset.listenerAdded = 'true'
          // }
          button.onclick = createTask().getInputAndButton()
        })  
        
  }

  const submitTask = function(currentProjectName){    
    const currentContainer = document.querySelector('.newProjectContainer')             
        let arr = userInput().getTaskNameInput() 
        // console.log(taskInput)      
        createTodo(currentProjectName, arr).createObject()
        let taskInputs =  document.querySelectorAll('.todoInput')
        taskInputs.forEach((inputs) => {
          inputs.remove()
        })
       createTask().getdisplayTodo()
       
  } 

  const getCurrentProjectName = () => currentProjectName
  return { 
          createNewProject, 
          runSubmitProject, 
          runCreateTaskButton, 
          submitTask,
          getCurrentProjectName
         }
}

function userInput(){
  let projectNameInput = document.querySelector('.projectNameInput').value;
  // let taskInput = null
  let arr = []
  const taskInputs = document.querySelectorAll('.todoInput')  
  taskInputs.forEach((inputs) => {
    arr.push(inputs.value)
  })  
 
  
  
  const getUserInput = () => projectNameInput
  const getTaskNameInput = () => arr
  // const getTaskInput = () => taskInput
  document.querySelector('.projectNameInput').value = ''

  return { 
    getUserInput,
    getTaskNameInput 
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

      const todoTitleDiv = document.createElement('div')
      todoTitleDiv.classList.add('todoDivTitle')
      todoDiv.appendChild(todoTitleDiv)

      const task = document.createElement('h3');
      task.classList.add('task');
      task.textContent = 'Tasks'
      todoTitleDiv.appendChild(task)

      const createNewTodo = document.createElement('button');
      createNewTodo.classList.add('createNewTodo')
      createNewTodo.classList.add(`${taskbuttonNumber().getNewCount()}`)
      createNewTodo.textContent = 'New Task';
      todoTitleDiv.appendChild(createNewTodo);
      

      const submitProject = document.createElement('button')
      submitProject.classList.add('submitProject');
      submitProject.textContent = 'Submit Project';      
      newProjectContainer.appendChild(submitProject);
      eventController().runSubmitProject()
      // eventController().runCreateTaskButton()
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
     
function createTask(currentProjectName){

    function createInputAndButton (){
      document.body.style.backgroundColor = 'blue'
    setTimeout(() => {
      document.body.style.backgroundColor = 'pink'
    }, "500")
    
    // console.log('yes')
    const todoInput = document.createElement('input');
    todoInput.classList.add('todoInput');
    console.log(todoInput)
    // console.log(this)
    // console.log(this)
      //  console.log(this.closest('.newProjectContainer').lastElementChild)
      if(this.parentElement.parentElement.parentElement.lastChild.className !== 'submitProject' && this.parentElement.parentElement.lastChild.className !== 'save' ){
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Changes'
          saveButton.classList.add('save')
          this.parentElement.after(saveButton, todoInput)
      }
    this.parentElement.appendChild(todoInput)
    }
    
     console.log(this)
function displayTodo (){
  let currentContainer = document.querySelector('.projectContainer').lastChild
  let projects = allProjects().getProjects()
  
  let currentTask = projects[projects.length - 1]['todos']
  console.log(currentTask)

  for(let i = 0; i < currentTask.length; i++){
    let currentTodo = currentTask[i]['title']
    const todo = document.createElement('h4')
    todo.textContent = currentTodo
    todo.classList.add('todo')
    currentContainer.appendChild(todo)
  }
}
    const getInputAndButton = () => createInputAndButton
    const getdisplayTodo = () => displayTodo()

    return {
             getInputAndButton,
             getdisplayTodo
           }
}


// task for today start whenever new task button is clicked when 
// the task is already there it pushes the task down so you need to
// fix that