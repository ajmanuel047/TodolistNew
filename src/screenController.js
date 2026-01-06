// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";

document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){
   // document.body.style.backgroundColor = 'orange'
    e.preventDefault()
  }
})


const newProjectButton = (function(){

  const headerDiv = document.createElement('div')
  headerDiv.classList.add('headerDiv')
  document.body.appendChild(headerDiv)

  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.classList.add('newProjectButton');
  createNewProjectButton.textContent = 'Create Project';
  headerDiv.appendChild(createNewProjectButton)

  const headerAddToProjectDiv = document.createElement('div')
  headerAddToProjectDiv.classList.add('headerAddToProjectDiv')
  headerDiv.appendChild(headerAddToProjectDiv)

  const addTodo = document.createElement('p')
  addTodo.classList.add('addTodo')
  addTodo.textContent = 'Click Here To Add Todo To Any Project'
  headerAddToProjectDiv.appendChild(addTodo)

  eventController().createNewProject()
  eventController().runAddTodo()
  
 // console.log(document.querySelector('.addTodo'))
  return { createNewProjectButton }
})()

function eventController(){
  let currentProjectName = null;
  let projects = allProjects().getProjects()
  const createNewProject = function (){
    if(document.querySelector('.newProjectButton')){
      document.querySelector('.newProjectButton').addEventListener('click', function(){
        if(!document.querySelector('.submitProject')){
       // document.body.style.backgroundColor = 'green'
        // createProject()
        // createNewProjects()
        // allProjects()
        displayProject()
        // console.log('yes')
        }
      })
    }
  }
  const runSubmitProject = function(){
    
    if(document.querySelector('.submitProject')){
      document.querySelector('.submitProject').addEventListener('click', function(e){
        // document.body.style.backgroundColor = 'black'
        let projectName = userInput().getUserInput(); 
        // console.log(projectName)
       // console.log(this.parentElement.querySelector('.todoInput'))

       if(projectName){
        if(!this.parentElement.querySelector('.todoInput')){
          console.log('null check 1')
          newProject(projectName, currentProjectName)
          document.querySelector('.projectName').remove()
          document.querySelector('.projectNameInput').remove()
          document.querySelector('.submitProject').remove()
        }
        else if(this.parentElement.querySelector('.todoInput').value !== ''){   
          // console.log('null check 2')
          newProject(projectName, currentProjectName)
         //  console.log(this.parentElement.querySelector('.newProjectName').textContent)
          createTodoButton()    
        
          let targetDiv = e.target.parentElement
          submitTask(this.parentElement.querySelector('.newProjectName').textContent, targetDiv)
        
          createTask()
          // console.log('runnning')
          document.querySelector('.projectName').remove()
          document.querySelector('.projectNameInput').remove()
          document.querySelector('.submitProject').remove()
        }
        else if(this.parentElement.querySelector('.todoInput').value == ''){
          console.log('todo is empty and project name not')
          if(!document.querySelector('.errorMessage')){
              this.parentElement.querySelector('.todoInput').after(errorMessage())
              setTimeout(() => {
              document.querySelector('.errorMessage').remove()
              }, 2000)  
          }
        }
       }
     else if(!projectName){          
          console.log('check')
          if(!document.querySelector('.errorMessage')){
              this.parentElement.parentElement.querySelector('.projectNameInput').after(errorMessage())
              this.parentElement.querySelector('.errorMessage').style.marginTop = '7px'
              setTimeout(() => {
              document.querySelector('.errorMessage').remove()
              }, 2000) 
          }             
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

  const submitTask = function(currentProjectName, targetDiv){    
    const currentContainer = document.querySelector('.newProjectContainer')             
        let arr = userInput().getTaskNameInput() 
        // console.log(arr)      
        createTodo(currentProjectName, arr).createObject()
        let taskInputs =  document.querySelectorAll('.todoInput')
        taskInputs.forEach((inputs) => {
          inputs.remove()
        })
      //  console.log(this)
       createTask(currentProjectName).displayTodo(targetDiv)
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
       //  console.log(this.parentElement)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
         createTodo(currentProjectName, arr, currentTodo.textContent, previousTodo).editTodo()
         for(let i = 0; i < projects.length; i++){
             if(projects[i]['projectName'] == currentProjectName){
                for(let j = 0; j < projects[i]['todos'].length; j++ ){
                    if(projects[i]['todos'][j]['title'] == currentTodo.textContent){
                        let newTodo = projects[i]['todos'][j]['title']
            //            console.log(newTodo)
                        currentTodo.textContent = newTodo
                         console.log(allProjects().getProjects())
                    }
                  }
              }
         }         
      } 
      else if(buttons.textContent == 'Edit'){
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

const runSaveChanges = function(){

    if(document.querySelector('.saveChanges')){
      const saveChanges = document.querySelectorAll('.saveChanges')
      const saveChangesButtons = document.querySelectorAll('.saveChanges')
      
      saveChangesButtons.forEach((button) => {
        button.onclick = function(e){
        const targetDiv = e.target.parentElement
        document.body.style.backgroundColor = 'skyblue'
        if(e.target.className == 'saveChanges'){
     //      console.log(typeof this.parentElement)
           let todoInput = this.parentElement.querySelector('.todoInput')
          //  console.log(todoInput.value)
          //  console.log(userInput().getTaskNameInput())
            let arr = []
            const taskInputs = document.querySelectorAll('.todoInput')  
            const todos = Array.from(document.querySelectorAll('.todo'))  
            // const currentTodo = this.parentElement.querySelector('.todo')
            // console.log(currentTodo)
            todos.forEach((todo) => {
              arr.push(todo.textContent)
            })

            taskInputs.forEach((inputs) => {
              arr.push(inputs.value)
            })  

         
           const currentTodo = arr[arr.length - 1]
           const currentProjectName = this.parentElement.querySelector('.newProjectName').textContent
           createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
           // console.log(this.parentElement.querySelector('.todoDiv').lastChild)
           createTask(currentProjectName).displayTodo(targetDiv)
          //  createTask().getInputAndButton()
           todoInput.remove()           
           this.remove()
           
        }
      }
      })

      
    }
}

const runAddTodo = function (){
  const addTodo = document.querySelector('.addTodo')    
    
    addTodo.onclick = function(){    
      if(!document.querySelector('.selectProject')){
     //   document.body.style.backgroundColor = 'blue'
        document.querySelector('.addTodo').textContent = 'Use The Below To Add Todo To Any Project'
        createTodoInputAndButton()
        eventController().runUpdateDropDown()
        eventController().runtodoSubmitButton()
      }    
    }
}

const runUpdateDropDown = function () {
  const selectProject = document.querySelector('.selectProject')
  selectProject.onclick = updateDropDown

}

const runtodoSubmitButton = function (){
  const todoSubmitButton = document.querySelector('.todoSubmitButton')
  todoSubmitButton.onclick = submitTodo
}
  const getCurrentProjectName = () => currentProjectName

  return { 
          createNewProject, 
          runSubmitProject, 
          runCreateTaskButton, 
          submitTask,
          getCurrentProjectName,
          runEditButton,
          runTodoEditButton,
          runSaveChanges,
          runAddTodo,
          runUpdateDropDown,
          runtodoSubmitButton
         }
}

function userInput(){
  let projectNameInput;
  let headerTodoInput;
  // let taskInput = null
  if(document.querySelector('.projectNameInput')){
    projectNameInput = document.querySelector('.projectNameInput').value
  }

  let arr = []
  const taskInputs = document.querySelectorAll('.todoInput')  
  taskInputs.forEach((inputs) => {
    arr.push(inputs.value)
  })  
 
  if(document.querySelector('.headerTodoInput')){
    headerTodoInput = document.querySelector('.headerTodoInput').value
  }
 
  
  const getUserInput = () => projectNameInput
  const getTaskNameInput = () => arr
  const getHeaderTodoInput = () => headerTodoInput
  // const getTaskInput = () => taskInput
  // document.querySelector('.projectNameInput').value = ''

  return { 
    getUserInput,
    getTaskNameInput,
    getHeaderTodoInput 
    // getTaskInput 
  }
}

        
function createTodoButton (){
  const currentTodoContainer = document.querySelector('.projectContainer').lastChild.querySelectorAll('.todo')
  const currentTodoDivContent = document.querySelectorAll('.todoDivContent')
  
  currentTodoDivContent.forEach((todoDivContent) => {
  //  console.log(todoDivContent)
    if(todoDivContent.lastChild){
      //  console.log(todoDivContent.lastChild)
      if(todoDivContent.lastChild.className == 'todo'){
        //  console.log(todoDivContent.lastChild)
        const editTodoButton = document.createElement('button')
        editTodoButton.textContent = 'Edit'
        editTodoButton.classList.add('editTodoButton')
        todoDivContent.appendChild(editTodoButton)
      }
    }
    eventController().runTodoEditButton()
    // console.log(allProjects().getProjects())
  })
//   currentTodoContainer.forEach((currentTodo) => {
//   // console.log(currentTodo)
  
//   const editTodoButton = document.createElement('button')
//   editTodoButton.textContent = 'Edit'
//   editTodoButton.classList.add('editTodoButton')
//   currentTodo.after(currentTodo, editTodoButton)

// })
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
     
function createTask(currentProjectName, newProjectNameDiv){
   
  function createInputAndButton (){    
    if(!document.querySelector('.todoInput')){
   // document.body.style.backgroundColor = 'blue'
    setTimeout(() => {
     // document.body.style.backgroundColor = 'pink'
    }, "500")
    const todoInput = document.createElement('input');
    todoInput.classList.add('todoInput');
    
    const todoDivContent = document.createElement('div')
    todoDivContent.classList.add('todoDivContent')
    const containers = document.querySelectorAll('.newProjectContainer')
    containers.forEach((container) => {
       let currentContainer = this.parentElement.parentElement.parentElement
       if(currentContainer.lastChild.className !== 'submitProject' && currentContainer.lastChild.className !== 'saveChanges'){
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Changes'  
          saveButton.classList.add('saveChanges')          
          currentContainer.appendChild(saveButton)
          eventController().runSaveChanges()
      }
    })

        this.parentElement.parentElement.appendChild(todoDivContent)
        this.parentElement.parentElement.appendChild(todoInput)
      //  console.log(todoDivContent)
    } 
    else{
      console.log('no')
      console.log(this.parentElement.parentElement.querySelector('.todoInput'))
      if(!document.querySelector('.errorMessage')){    
        this.parentElement.parentElement.querySelector('.todoInput').after(errorMessage())
        document.querySelector('.errorMessage').style.marginTop = '-12px'
        //   this.after(document.querySelector('.todoInput'), errorMessage())
        setTimeout(() => {
          document.querySelector('.errorMessage').remove()
        }, 2000)
        }
      }
  }

function displayTodo (targetDiv){  
  const projects = allProjects().getProjects()
 // console.log(targetDiv)
  for(let i = 0; i < projects.length; i++){   
   // console.log(projects[i]['projectName'].toLowerCase())      
  //  console.log(targetDiv.querySelector('.newProjectName').textContent.toLowerCase())      
    if(projects[i]['projectName'] == targetDiv.querySelector('.newProjectName').textContent){
    //  console.log(projects[i]['projectName'])
      // console.log(targetDiv.querySelector('.newProjectName').textContent)
      let currentTask = projects[i]['todos']
      // console.log(currentTask[currentTask.length - 1])
      const todo = document.createElement('h4')
     // console.log(currentTask)
        for(let j = 0; j < currentTask.length; j++){
        // console.log(targetDiv)
          let currentTodo = currentTask[j]['title']
     //     console.log(currentTodo)
          todo.textContent = currentTodo
          todo.classList.add('todo') 
          let containers = targetDiv.querySelectorAll('.todoDivContent')
          containers.forEach((currentContainer) => {
          currentContainer.appendChild(todo)
          })
        
        // console.log(currentContainer)
        // console.log(projects)
      }
      createTodoButton()
    }
  }
}
    const getInputAndButton = () => createInputAndButton
    // const getdisplayTodo = () => displayTodo()

    return {
             getInputAndButton,
             displayTodo
           }
}


function editContent (contentToEdit){
  contentToEdit.setAttribute('contenteditable', true)
}

function errorMessage(){
  const message = document.createElement('p')
  message.textContent = 'Please fill empty field(s) and submit'
  message.classList.add('errorMessage')
  return message
}

function newProject(projectName, currentProjectName){
  
  createNewProjects(projectName)
  const projects = allProjects().getProjects()        
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['projectName'] == projectName){
      currentProjectName = projects[i]['projectName']    
    }
  }
    
  let currentContainer = document.querySelector('.projectContainer').lastChild;
  let newProjectName = document.createElement('h2')
  newProjectName.classList.add('newProjectName')
  newProjectName.textContent = currentProjectName 
      
  const editProjectNameButton = document.createElement('button')
  editProjectNameButton.textContent = 'Edit'
  editProjectNameButton.classList.add('editProjectName')        

  currentContainer.firstChild.appendChild(newProjectName)
  currentContainer.firstChild.appendChild(editProjectNameButton)

}

function createTodoInputAndButton (){

  const headerAddToProjectDiv = document.querySelector('.headerAddToProjectDiv')
        
  const selectProject = document.createElement('select')
  selectProject.classList.add('selectProject')

  const addOption = document.createElement('option')
  addOption.textContent = 'Select A Project'
  addOption.value = ''    

  const headerTodoDiv = document.createElement('div')
  headerTodoDiv.classList.add('headerTodoDiv')

  const todoInput = document.createElement('input')
  todoInput.classList.add('headerTodoInput')
  todoInput.placeholder = 'Type in Todo'

  const todoSubmitButton = document.createElement('button')
  todoSubmitButton.classList.add('todoSubmitButton')
  todoSubmitButton.textContent = 'Submit Todo'

  selectProject.appendChild(addOption)
  headerAddToProjectDiv.appendChild(selectProject)
  headerAddToProjectDiv.appendChild(headerTodoDiv)
  headerTodoDiv.appendChild(todoInput)
  headerTodoDiv.appendChild(todoSubmitButton)
}

function updateDropDown () {
  // document.body.style.backgroundColor = 'purple'
  const selectProject = document.querySelector('.selectProject')
  let arr = []
  for(let i = 0; i < selectProject.options.length; i++){
  //  console.log(selectProject.options[i].value)
    if(selectProject.options[i].value){
      arr.push(selectProject.options[i].value)
    }
  }
  const projects = allProjects().getProjects()
//console.log(projects)

  for(let i = 0; i < projects.length; i++){
  //  console.log(projects[i]['projectName'])
    if(!arr.includes(projects[i]['projectName'])){
       const options = document.createElement('option')
       options.textContent = `${projects[i]['projectName']}`
       options.value = `${projects[i]['projectName']}`
       selectProject.add(options)
    //   console.log(selectProject)
    }
  }
}


function submitTodo () {  
  // console.log(document.querySelector('.selectProject').value)

  if(document.querySelector('.headerTodoInput').value && document.querySelector('.selectProject').value){
  //  document.body.style.backgroundColor = 'brown'
   // console.log(userInput().getHeaderTodoInput())
    let selectedProject = document.querySelector('.selectProject').value
    let targetDiv;
    let projectNames = document.querySelectorAll('.newProjectName')
    projectNames.forEach((projectName) => {
      console.log(selectedProject)
      console.log(projectName.textContent)
      if(selectedProject.toLowerCase() == projectName.textContent.toLowerCase()){
        targetDiv = projectName.parentElement.parentElement
      }
    })
      createTodo(selectedProject, [userInput().getHeaderTodoInput()]).createObject()
      createTask().displayTodo(targetDiv)
    //  console.log(targetDiv)
      document.querySelector('.headerTodoInput').value = ''
    // createTask()
    // create error messages
    // ensure without project already existing this should not work
    // and an error message should be displayed
  } else if(!document.querySelector('.headerTodoInput').value){
      if(!document.querySelector('.errorMessage')){
      document.querySelector('.headerTodoInput').after(errorMessage())
      document.querySelector('.errorMessage').style.marginTop = '7px'
      setTimeout(() => {
      document.querySelector('.errorMessage').remove()
      }, 2000)  
  }
  }
else if(!document.querySelector('.selectProject').value){   
  if(!document.querySelector('.selectProjectErrorMessage')){
     const selectProjectErrorMessage = document.createElement('p')
     selectProjectErrorMessage.textContent = 'Please Select And/Or Create A Project' 
     selectProjectErrorMessage.classList.add('selectProjectErrorMessage')
     document.querySelector('.selectProject').after(selectProjectErrorMessage)
     document.querySelector('.selectProjectErrorMessage').style.marginTop = '-14px'  
      setTimeout(() => {
       document.querySelector('.selectProjectErrorMessage').remove()
       }, 3000)  
     }
   }
 }
 // content editable not working well after using click here to add todo to any project
// bug i previously fixed is back. edit of todo not properly working
// it is not showing in the projects
// after save button is clicked the todo should not be editable until the
// todo button is clicked again
// the saved message is displaying only in the last todo and the current one

// work on submit button when todo field is empty. It should not submit
// or something in that nature when the todo field is empty
// solved previous issue but an existing problem that was there
// before has been revealed. when i press the edit button when there
// is more than one todoitem, it highlights the two to edit.
// the issue as always should be from the loop where i got the currentTodo
// start from there

// NEWEST 
// Two new bugs
/*
1. Creating two new projects with just one todo each is ok
when i create a second todo for the second it adds to both the first 
and the second and so on
2. When i create a project with its todo before i create a second project
withs its own todo its ok. But after doing this if i am to add a new 
todo to the previous project wahala arises

I am trying to get the current project name in display todo so i can
solve 2 above which was partially solved when i solved 1 but now when
i add the new task it goes to the last project and i think it has 
something to do with my targeting so i am trying to get the current 
project name so like always i can use it to target the right project
being clicked

I THINK I AM FACING ISSUE BECAUSE I AM NOT THINKING OF THE SOLUTION IN
MY HEAD FIRST. IT HAS ALWAYS BEEN THE MOST EFFICIENT WAY I HAVE USED TO
SOLVE PROBLEMS. THINK OF THE SOLUTION IN YOUR HEAD FIRST AND THEN CREATE
THAT SOLUTION INTO CODE. YOU NEED TO VISUALIZE IT BEFORE YOU START WRITING
THE CODE. ALSO, THE BASICS OF CODING IS THAT YOU HAVE TO BREAK A COMPLEX
PROBLEM INTO SMALLER PIECES OR PROBLEMS AND SOLVE THEM. BEFORE YOU KNOW
IT YOU WILL HAVE GOTTEN THE OVERALL SOLUTION OF WHAT YOU ARE TRYING TO DO
*/