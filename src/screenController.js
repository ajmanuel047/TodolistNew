// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";

document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){
    document.body.style.backgroundColor = 'orange'
    e.preventDefault()
  }
})


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
  let projects = allProjects().getProjects()
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
        newProjectName.classList.add('newProjectName')
        newProjectName.textContent = currentProjectName
       
        submitTask(currentProjectName)

        const editProjectNameButton = document.createElement('button')
        editProjectNameButton.textContent = 'Edit'
        editProjectNameButton.classList.add('editProjectName')

        const currentTodoContainer = document.querySelector('.projectContainer').lastChild.querySelectorAll('.todo')
        
        currentTodoContainer.forEach((currentTodo) => {
          // console.log(currentTodo)
          const editTodoButton = document.createElement('button')
          editTodoButton.textContent = 'Edit'
          editTodoButton.classList.add('editTodoButton')
          currentTodo.after(currentTodo, editTodoButton)

        })

       


        
        currentContainer.firstChild.appendChild(newProjectName)
        currentContainer.firstChild.appendChild(editProjectNameButton)

        // currentTodoDiv.appendChild(editTodoButton)

        document.querySelector('.projectName').remove()
        document.querySelector('.projectNameInput').remove()
        document.querySelector('.submitProject').remove()
        }
runEditButton()
runTodoEditButton()

      })
      
  }
runCreateTaskButton()

}

  const runCreateTaskButton = function(){
        let currentContainer = document.querySelector('.projectContainer')
        const currentTodo = document.querySelectorAll('.createNewTodo')
        const todoInput = document.querySelector('.todoInput')
        
        
        // if(document.querySelector('.createNewTodo')){
        //   document.querySelector('.createNewTodo').addEventListener('click', function(){
        //     document.body.style.backgroundColor = 'purple'
        //   })
        // }
       const taskCreator = createTask()

        currentTodo.forEach((button) => {  
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
      //  console.log(document.querySelector('.editProjectName'))
       
  } 

const runEditButton = function(){
  let currentEditButton = document.querySelectorAll('.editProjectName')
  // console.log(currentEditButton)
  // console.log(document.querySelector('.editProjectName'))

  // console.log('me')
  let previousValue = null
  currentEditButton.forEach((button) => {
    button.onclick = function(){
      // document.body.style.backgroundColor = 'blue'
      const currentProjectName = this.parentElement.firstChild
      console.log(this.parentElement)
      console.log(currentProjectName)
      currentProjectName.setAttribute('contenteditable', true)
      currentProjectName.classList.add('editContent')
      currentProjectName.style.cursor = 'pointer'
      // if(button.textContent == 'Edit'){
      //   currentProjectName.setAttribute('contenteditable', true)
      //   button.textContent = 'Save'
      // }
      if(button.textContent == 'Save'){
         button.textContent = 'Edit'
         currentProjectName.setAttribute('contenteditable', false)
         currentProjectName.classList.remove('editContent')
         currentProjectName.style.cursor = 'auto'
         const saveCompletedisplay = document.createElement('p')
         saveCompletedisplay.textContent = 'Saved'
         saveCompletedisplay.classList.add('saved')
         // adjust the saveCompletedisplay because it not moving when the text
         // is longer
         this.parentElement.appendChild(saveCompletedisplay)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
         createNewProjects(previousValue, currentProjectName.textContent)
         for(let i = 0; i < projects.length; i++){
             if(projects[i]['projectName'] == currentProjectName.textContent){
                currentProjectName.textContent = projects[i]['projectName']
             }
         }
         
      }
      currentProjectName.addEventListener('focus', function(e){
        document.body.style.backgroundColor = 'skyblue'
        previousValue = this.textContent
        // console.log(previousValue)
        currentProjectName.setAttribute('contenteditable', true)
        // i want you to add a smalled blue saved text so when it is
        // saved it would appear
        button.textContent = 'Save'
        currentProjectName.style.cursor = 'auto'

      })
    }
  })


  // currentEditButton.addEventListener('click', function(){
  //   document.body.style.backgroundColor = 'black'
  // })

}  

const runTodoEditButton = function(){
  const editTodoButtons = document.querySelectorAll('.editTodoButton')
  // console.log(editTodoButtons)
  let currentTodo = null
  let previousTodo = null
  if(document.querySelector('.editTodoButton')){
      editTodoButtons.forEach((buttons) => {
      buttons.onclick = function(e){
      // document.body.style.backgroundColor = 'purple'
      
      let arr = [].slice.call(this.parentElement.children)
      let currentProjectName = this.parentElement.parentElement.parentElement.firstChild.firstChild.textContent 
        // console.log(e.target)
       if(buttons.textContent == 'Save'){
        // console.log(currentTodo)
         buttons.textContent = 'Edit'
         currentTodo.setAttribute('contenteditable', false)
         currentTodo.classList.remove('editContent')
         currentTodo.style.cursor = 'auto'
         const saveCompletedisplay = document.createElement('p')
         saveCompletedisplay.textContent = 'Saved'
         saveCompletedisplay.classList.add('saved')
        //  adjust the saveCompletedisplay because it not moving when the text
        //  is longer
         this.parentElement.appendChild(saveCompletedisplay)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
         createTodo(currentProjectName, arr, currentTodo.textContent, previousTodo).editTodo()
         for(let i = 0; i < projects.length; i++){
             if(projects[i]['projectName'] == currentProjectName){
                for(let j = 0; j < projects[i]['todos'].length; j++ ){
                    if(projects[i]['todos'][j]['title'] == currentTodo.textContent){
                        let newTodo = projects[i]['todos'][j]['title']
                        console.log(newTodo)
                        currentTodo.textContent = newTodo
                    }
                  }
              }
         }         
      } else if(buttons.textContent == 'Edit'){
      for(let i = 0; i < arr.length; i++){
        // console.log(arr[i].className)
        if(arr[i].className == 'todo'){
          previousTodo = this.parentElement.children[i].textContent
          currentTodo = this.parentElement.children[i]
          // console.log(currentTodo)
          currentTodo.setAttribute('contenteditable', true)
          // currentTodo.style.backgroundColor = 'orange'
          currentTodo.classList.add('editContent')
          currentTodo.style.cursor = 'pointer'
          currentTodo.addEventListener('focus', function(e){
          document.body.style.backgroundColor = 'skyblue'
          // previousValue = this.textContent
          // console.log(previousValue)
          // currentTodo.setAttribute('contenteditable', true)
          // i want you to add a smalled blue saved text so when it is
          // saved it would appear
          buttons.textContent = 'Save'
          currentTodo.style.cursor = 'auto'

        })


        }
      }
      }


  }
  })

  }

}
  const getCurrentProjectName = () => currentProjectName
  return { 
          createNewProject, 
          runSubmitProject, 
          runCreateTaskButton, 
          submitTask,
          getCurrentProjectName,
          runEditButton
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
    // const task = document.querySelector('h4')
    const todoInput = document.createElement('input');
    todoInput.classList.add('todoInput');

    const todoDivContent = document.createElement('div')
    todoDivContent.classList.add('todoDivContent')
    
    // console.log(todoInput)
    // const todoDiv = document.querySelector('.todoDiv')
    // const currentTodoDiv = document.querySelector('.newProjectContainer').lastChild
    // console.log(currentTodoDiv)
    // console.log(this)
    // const projectName = document.querySelector('.newProjectName')
    // console.log(projectName)
    // if(projectName.textContent){
    //    console.log(projectName.textContent)
    // }
    const containers = document.querySelectorAll('.newProjectContainer')
    containers.forEach((container) => {
   //   let input = document.querySelector('.todoInput')
      // console.log(container.lastChild)
          // console.log(container.lastChild.contains())
       let currentContainer = this.parentElement.parentElement.parentElement
      //  console.log(currentContainer.lastChild.className)
      if(currentContainer.lastChild.className !== 'submitProject' && currentContainer.lastChild.className !== 'save'){
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Changes'  
          saveButton.classList.add('save')
          
          currentContainer.appendChild(saveButton)
      }
    })

        this.parentElement.parentElement.appendChild(todoDivContent)
        this.parentElement.parentElement.appendChild(todoInput)
        
    }
function displayTodo (){
 
  let currentContainer = Array.from(document.querySelector('.projectContainer').lastChild.querySelectorAll('.todoDivContent'))
  // console.log(currentContainer)
  let projects = allProjects().getProjects()
  let newTitle = document.querySelector('h2')
  const todoDiv = Array.from(document.querySelectorAll('.todoDivContent'))
  
  const currentTodoDiv = todoDiv[todoDiv.length - 1]
  let currentTask = projects[projects.length - 1]['todos']
  // console.log(currentTask)
  // todoDiv.forEach((div) => {
  //   console.log(div)
  // for(let i = 0; i < currentTask.length; i++){
  //   let currentTodo = currentTask[i]['title']   
  //    const todo = document.createElement('h4')
  //    todo.textContent = currentTodo
  //    todo.classList.add('todo')    
  //    div.appendChild(todo)
     
  // }
  // })
  for(let i = 0; i < currentTask.length; i++){
    // console.log(todoDiv)
     let currentTodo = currentTask[i]['title']   
     const todo = document.createElement('h4')
     todo.textContent = currentTodo
     todo.classList.add('todo')    
     currentContainer[i].appendChild(todo)
  }

}
    const getInputAndButton = () => createInputAndButton
    const getdisplayTodo = () => displayTodo()

    return {
             getInputAndButton,
             getdisplayTodo
           }
}


function editContent (contentToEdit){
  contentToEdit.setAttribute('contenteditable', true)
}
// solved previous issue but an existing problem that was there
// before has been revealed. when i press the edit button when there
// is more than one todoitem, it highlights the two to edit.
// the issue as always should be from the loop where i got the currentTodo
// start from there
