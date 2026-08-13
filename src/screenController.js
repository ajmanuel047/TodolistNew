// index.js


import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects, projectPriorityController } from "./projectController";
import { editProject } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";
import { addDescriptionToProject } from "./projectController";
import { addNoteToProject } from "./projectController";
import { formatDate } from "./dateformatter"
import { add, formatRFC7231 } from "date-fns"
import { dateController } from "./projectController.js"
import { ta } from "date-fns/locale";
import { deleteProject } from "./projectController";
import { removeTaskFromArray } from "./projectController";
import { createTodoCheckList } from "./projectController";
import { updateCheckListStatus } from "./projectController";
import { updateTodoStatus } from "./projectController";
import { createProject } from "./createNewProject.js";
import { updateProjectStatus } from "./projectController";
const myButtonState = todoBoxButtonDiv()

document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){
   // document.body.style.backgroundColor = 'orange'
    e.preventDefault()
  }
})

function storageCall(){
  
  // function populateDOM (){
    if(localStorage.length > 0){
    // if(document.querySelector('.actualProject')){
    // console.log('yes')
  //  storeData().setStyles()
  // }
  
    } else{
    console.log('no data')
     }
  }
// return {
//   populateDOM
// }
  
// }

// storageCall()

const newProjectButton = (function(){
// console.log('run')
  const headerDiv = document.createElement('div')
  headerDiv.classList.add('headerDiv')
  document.body.appendChild(headerDiv)
  
  const projectsBoxDiv = document.createElement('div')
  projectsBoxDiv.classList.add('projectsBoxDiv')
  document.body.appendChild(projectsBoxDiv)

  const projectTitle = document.createElement('h2')
  projectTitle.classList.add('projectTitle')
  projectTitle.textContent = 'All Projects'
  projectsBoxDiv.appendChild(projectTitle)

  const projectsBox = document.createElement('div')
  projectsBox.classList.add('projectsBox')
  projectsBoxDiv.appendChild(projectsBox)

  const newProjectButtonDiv = document.createElement('div')
  newProjectButtonDiv.classList.add('newProjectButtonDiv')
  headerDiv.appendChild(newProjectButtonDiv)

  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.classList.add('newProjectButton');
  createNewProjectButton.textContent = '+';
  newProjectButtonDiv.appendChild(createNewProjectButton)

  const newProject = document.createElement('p')
  newProject.classList.add('addNewProject')
  newProject.textContent = 'New Project'
  newProjectButtonDiv.appendChild(newProject)

  const projects = document.createElement('p')
  projects.classList.add('allProjects')
  projects.textContent = 'All Projects'
  headerDiv.appendChild(projects)

  const completedProjects = document.createElement('p')
  completedProjects.classList.add('completedProjects')
  completedProjects.textContent = 'Completed Projects'
  headerDiv.appendChild(completedProjects)

  const unCompletedProjects = document.createElement('p')
  unCompletedProjects.classList.add('unCompletedProjects')
  unCompletedProjects.textContent = 'UnCompleted Projects'
  headerDiv.appendChild(unCompletedProjects)

  const headerAddToProjectDiv = document.createElement('div')
  headerAddToProjectDiv.classList.add('headerAddToProjectDiv')
  headerDiv.appendChild(headerAddToProjectDiv)

  const addTodo = document.createElement('p')
  addTodo.classList.add('addTodo')
  addTodo.textContent = 'Add Todo To Project'
  headerAddToProjectDiv.appendChild(addTodo)

  // const projectContainer = document.createElement('div');
  // projectContainer.classList.add('projectContainer');
  // document.body.appendChild(projectContainer)

  // const todoDiv = document.createElement('div')
  // todoDiv.classList.add('todoDiv')
  // projectContainer.appendChild(todoDiv)

  // const tasksDiv = document.createElement('div')
  // tasksDiv.classList.add('taskDiv')
  // todoDiv.appendChild(tasksDiv)

  // const currentTaskDiv = document.createElement('div')
  // currentTaskDiv.classList.add('currentTaskDiv')
  // todoDiv.appendChild(currentTaskDiv)

  // const tasksDivTitle = document.createElement('h3')
  // tasksDivTitle.classList.add('tasksDivTitle')
  // tasksDivTitle.textContent = 'Tasks'
  // tasksDiv.appendChild(tasksDivTitle)

  // const currentTaskDivTitle = document.createElement('h3')
  // currentTaskDivTitle.classList.add('currentTasksDivTitle')
  // currentTaskDivTitle.textContent = 'Current Task'
  // currentTaskDiv.appendChild(currentTaskDivTitle)

  // const currentTaskBox = document.createElement('div')
  // currentTaskBox.classList.add('currentTaskBox')
  // currentTaskDiv.appendChild(currentTaskBox)


  
  // console.log(allProjects().getProjects())
  eventController().createNewProject()
  eventController().runAllProjectsClick()
  eventController().runCompletedProjectsClick()
  eventController().runUnCompletedProjectsClick()
  eventController().runAddTodo()
  
 // console.log(document.querySelector('.addTodo'))
  return { createNewProjectButton }
})()



function defaultProject(){
      // const projectContainer = document.createElement('div');
      // projectContainer.classList.add('projectContainer');
      // document.querySelector('.projectsBoxDiv').after(projectContainer);
      
      displayAllProjects(null)
      createProjectContainer().createNewProjectContainer()
    //  displayFirstProjectTodo()
      // document.querySelector('.deleteProject').disabled = true
      // const newProjectContainer = document.createElement('div');
      // newProjectContainer.classList.add('newProjectContainer');
      // newProjectContainer.classList.add('defaultProject');
      // document.querySelector('.projectContainer').appendChild(newProjectContainer);
      
      // const titleContainer = document.createElement('div')
      // titleContainer.classList.add('titleContainer')
      // newProjectContainer.appendChild(titleContainer)

      // const projectName = document.createElement('h2');
      // projectName.classList.add('projectName');
      // projectName.textContent = 'Project Name';
      // titleContainer.appendChild(projectName);

      // let projects = allProjects().getProjects()
      // let currentProjectName = projects[0]['project']['projectName']

      // let newProjectName = document.createElement('h2')
      // newProjectName.classList.add('newProjectName')
      // newProjectName.textContent = currentProjectName
      
      // titleContainer.appendChild(newProjectName)

      // const titleContainerButtonsDiv = document.createElement('div')
      // titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
    
      // const editProjectName = document.createElement('button')
      // editProjectName.classList.add('editProjectName')
      // editProjectName.textContent = 'Edit'

      // const deleteProject = document.createElement('button')
      // deleteProject.classList.add('deleteProject')
      // deleteProject.textContent = 'Delete Project'

      // titleContainer.appendChild(titleContainerButtonsDiv)
      // titleContainerButtonsDiv.appendChild(editProjectName)
      // titleContainerButtonsDiv.appendChild(deleteProject)

      // eventController().runEditButton()
      // eventController().runDeleteProject()
      // // console.log(projects)
      
      // const todoDiv = document.createElement('div')
      // todoDiv.classList.add('todoDiv')

      // const todoDivTitle = document.createElement('div')
      // todoDivTitle.classList.add('todoDivTitle')

      // const task = document.createElement('h3')
      // task.classList.add('task')
      // task.textContent = 'Task'

      // const addTodo = document.createElement('button')
      // addTodo.classList.add('createNewTodo')
      // addTodo.textContent = 'Add Todo'
      
      // newProjectContainer.appendChild(todoDiv)
      // todoDiv.appendChild(todoDivTitle)
      // todoDivTitle.appendChild(task)
      // todoDivTitle.appendChild(addTodo)

      // const todoDivContent = document.createElement('div')
      // todoDivContent.classList.add('todoDivContent')
      
      // const todo = document.createElement('h4')
      // todo.classList.add('todo')
      // todo.textContent = projects[0]['project']['todos'][0]['title']

      // const dateDiv = document.createElement('div')
      // dateDiv.classList.add('dateDiv')

      // const currentDate = document.createElement('p')
      // currentDate.classList.add('currentDate')
      // currentDate.textContent = projects[0]['project']['todos'][0]['dateCreated']
      
      // const dueDateDiv = document.createElement('div')
      // dueDateDiv.classList.add('dueDateDiv')

      // const dueDateButton = document.createElement('button')
      // dueDateButton.classList.add('dueDateButton')
      // dueDateButton.textContent = 'Add Due Date'

     
      // dateDiv.appendChild(currentDate)
      // dateDiv.appendChild(dueDateDiv)
      // dueDateDiv.appendChild(dueDateButton)

      // eventController().runCalenderButton()

      // const priority = document.createElement('p')
      // priority.classList.add('priority')
      // priority.textContent = 'Task Priority : '

      // const taskButtonsDiv = document.createElement('div')
      // taskButtonsDiv.classList.add('taskButtonsDiv')

      // const editTodo = document.createElement('button')
      // editTodo.classList.add('editTodoButton')
      // editTodo.textContent = 'Edit Task'

      // const deleteTask = document.createElement('button')
      // deleteTask.classList.add('deleteTask')
      // deleteTask.textContent = 'Delete'

      // const priorityButton = document.createElement('button')
      // priorityButton.classList.add('priorityButton')
      // priorityButton.textContent = 'Priority'

      // const taskStatusButton = document.createElement('button')
      // taskStatusButton.classList.add('taskStatusButton')
      // taskStatusButton.textContent = 'Task Status'


      // todoDiv.appendChild(todoDivContent)
      // todoDivContent.appendChild(todo)
     
      // todoDivContent.appendChild(priority)
      // todoDivContent.appendChild(taskButtonsDiv)
      // todoDivContent.appendChild(dateDiv)
      

      // taskButtonsDiv.appendChild(editTodo)
      // taskButtonsDiv.appendChild(deleteTask)
      // taskButtonsDiv.appendChild(priorityButton)
      // taskButtonsDiv.appendChild(taskStatusButton)

      // eventController().runTodoEditButton()
      // eventController().runDeleteTask()
      // eventController().runAddTaskPriority()
      // eventController().runAddTaskStatus()

      // const descriptionDiv = document.createElement('div')
      // descriptionDiv.classList.add('descriptionDiv')

      // const descriptionHeading = document.createElement('h5')
      // descriptionHeading.classList.add('descriptionHeading')
      // descriptionHeading.textContent = ''

      // const descriptionContentDiv = document.createElement('div')
      // descriptionContentDiv.classList.add('descriptionContentDiv')

      // const description = document.createElement('p')
      // description.classList.add('description')
      // description.textContent = projects[0]['project']['todos'][0]['description']

      // const editDescription = document.createElement('button')
      // editDescription.classList.add('editDescription')
      // editDescription.textContent = 'Edit'

      // todoDivContent.appendChild(descriptionDiv)
      // descriptionDiv.appendChild(descriptionHeading)
      // descriptionDiv.appendChild(descriptionContentDiv)
      // descriptionContentDiv.appendChild(description)
      // descriptionDiv.appendChild(editDescription)

      // eventController().runEditDescription()
      
      // const noteDiv = document.createElement('div')
      // noteDiv.classList.add('noteDiv')
      
      // const noteHeading = document.createElement('h5')
      // noteHeading.classList.add('noteHeading')
      // noteHeading.textContent = ''

      // const noteContentDiv = document.createElement('div')
      // noteContentDiv.classList.add('noteContentDiv')

      // const note = document.createElement('p')
      // note.classList.add('note')
      // note.textContent = projects[0]['project']['todos'][0]['projectNote']

      // const editNote = document.createElement('button')
      // editNote.classList.add('editNote')
      // editNote.textContent = 'Edit'

      // todoDivContent.appendChild(noteDiv)
      // noteDiv.appendChild(noteHeading)
      // noteDiv.appendChild(noteContentDiv)
      // noteContentDiv.appendChild(note)
      // noteDiv.appendChild(editNote)

      // eventController().runEditNote()


      // const checkListContainer = document.createElement('div')
      // checkListContainer.classList.add('checkListContainer')

      // const checkListHeaderContainer = document.createElement('div')
      // checkListHeaderContainer.classList.add('checkListHeaderContainer')

      // const checkListHeading = document.createElement('p')
      // checkListHeading.classList.add('checkListHeading')
      // checkListHeading.textContent = 'Todo CheckList'

      // const addCheckListFormButton = document.createElement('button')
      // addCheckListFormButton.classList.add('addCheckListFormButton')
      // addCheckListFormButton.textContent = 'Add'

      // todoDivContent.appendChild(checkListContainer)
      // checkListContainer.appendChild(checkListHeaderContainer)
      // checkListHeaderContainer.appendChild(checkListHeading)
      // checkListHeaderContainer.appendChild(addCheckListFormButton)

      // eventController().runCreateCheckList()

      // const checkListForm = document.createElement('form')
      // checkListForm.classList.add(`checkListForm`)
      // checkListContainer.appendChild(checkListForm)
      // //  console.log('check')

      // const checkListDiv = document.createElement('div')
      // checkListDiv.classList.add('checkListDiv')      

      // const checkDiv = document.createElement('div')
      // checkDiv.classList.add('checkDiv')    

      // const checkListItem = document.createElement('input')
      // checkListItem.setAttribute('type', 'checkbox')
      // checkListItem.classList.add('checkListItem')
      // const label = document.createElement('label')
      // label.textContent = projects[0]['project']['todos'][0]['checkList'][0]
      // checkListItem.checked = true

      // // checkListItem.addEventListener('click', function(){
      // //   document.body.style.backgroundColor = 'blue'
      // // })
      // const checkDiv2 = document.createElement('div')
      // checkDiv2.classList.add('checkDiv')

      // const checkListItem2 = document.createElement('input')
      // checkListItem2.setAttribute('type', 'checkbox')
      // checkListItem2.classList.add('checkListItem')
      // const label2 = document.createElement('label')
      // label2.textContent = projects[0]['project']['todos'][0]['checkList'][1]
      // checkListItem2.checked = true

      // checkListForm.appendChild(checkListDiv)
      // checkListDiv.appendChild(checkDiv)
   
      // checkDiv.appendChild(checkListItem)      
      // checkDiv.appendChild(label)

      // checkListDiv.appendChild(checkDiv2)
      // checkDiv2.appendChild(checkListItem2)  
      // checkDiv2.appendChild(label2) 
      // // eventController().runCreateTaskButton()
      // // eventController().runSaveChanges()
      // const lineBreak = document.createElement('hr')
      // lineBreak.classList.add('lineBreak')
      // todoDivContent.appendChild(lineBreak)
      
}

 defaultProject()
// storageCall()

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
        let projects = allProjects().getProjects()
        let projectName = userInput().getUserInput(); 
        let description = userInput().getProjectDescription()
        let note = userInput().getNoteInput()
        let todo = userInput().getTaskNameInput()
        let inputFields = e.target.parentElement.querySelectorAll('input')
        let targetDiv = null
      //  console.log(e.target.parentElement.querySelectorAll('input'))

        let projectArray = projects.map((arr) => {
          return arr.projectName
        })        
        if(!projectArray.includes(projectName)){
          // console.log('yes')
            if(document.querySelector('.todoBoxContainer')){
               document.querySelector('.todoBoxContainer').remove()
            }
            inputFields.forEach((inputField) => {          
            if(inputField.className !== 'headerTodoInput' && inputField.className !== 'calender' && inputField.className !== 'checkListInput'){
              if(inputField.value !== ''){
                // console.log('is field empty')
                // console.log(projectName)
                // if(document.querySelector('.currentTaskBox')){
                //   document.querySelector('.currentTaskBox').remove()
                // }
                if(projectName && document.querySelector('.projectNameInput') && !document.querySelector('.todoInput')){
                    // console.log(todo)
                    if(document.querySelector('.currentTaskBox')){
                      document.querySelector('.currentTaskBox').remove()
                    }
                  
                    // console.log('check')
                    createProjectContainer().addTodoBox(undefined, e)
                    //   storeData(projectName).populateStorage()
                  //  console.log('running now')
                 if(document.querySelector('.projectContainer .newProjectName')){
                    document.querySelector('.projectContainer .newProjectName').remove()
                    document.querySelector('.todoBoxContainer').remove() 
                    newProject(projectName, currentProjectName)
                    e.target.parentElement.querySelector('.projectNameInput').remove()
                    targetDiv = e.target.parentElement
                  //  console.log(projectName)
                    submitTask(projectName, targetDiv)
                    createTask()       
                    createProjectContainer().addTodoBox(undefined, e)           
                } else {           
                    newProject(projectName, currentProjectName)
                    e.target.parentElement.querySelector('.projectNameInput').remove()
                    targetDiv = e.target.parentElement
                    // console.log(projectName)
                    // submitTask(projectName, targetDiv)
                    // createTask()
                }
                // console.log(e.target.parentElement)
                // console.log(todo[0])
                //  addTodoBox(todo[0])
                 displayAllProjects(e) 
                 e.target.parentElement.parentElement.remove()
                   // document.body.style.backgroundColor = 'blue'
                 document.querySelector('.projectContainer').scrollIntoView({
                       behavior: 'smooth',
                       block: 'center'
                   })
                 }
                  else if(projectName && document.querySelector('.todoInput')){
                  //  console.log(projectName)
                  // console.log(allProjects().getProjects())
                if(document.querySelector('.currentTaskBox')){
                  document.querySelector('.currentTaskBox').remove()
                }
                   let descriptionInput = e.target.parentElement.querySelector('.descriptionInput').value
                   let noteInput = e.target.parentElement.querySelector('.noteInput').value
                    // console.log(e.target.parentElement)
                    if(document.querySelector('.todoInput').value !== '' && descriptionInput !== '' && noteInput !== ''){
                        newProject(projectName, currentProjectName)
                    //    console.log('test2')
                    //   console.log(e.target.parentElement.querySelector('.descriptionInput'))
                      // console.log(e.target.parentElement.querySelector('.noteInput'))
                    //    console.log(e.target.parentElement.querySelector('.projectNameInput'))
                    if(!document.querySelector('.currentTaskBox')){
                        // const currentTaskBox = document.createElement('div')
                        // currentTaskBox.classList.add('currentTaskBox')
                        // document.querySelector('.currentTaskDiv').appendChild(currentTaskBox)
                   //     console.log('did this run')
                        // console.log(document.querySelector('.currentTaskBox'))
                     // document.querySelector('.currentTaskBox').remove()
                     if(document.querySelector('.todoBox'))(
                      document.querySelector('.todoBox').remove()
                     )
                        
                       if(document.querySelector('.newTodoBox')){
                          document.querySelector('.newTodoBox').remove()
                          // console.log('check 2')
                        }
                        // console.log(todo[0])
                        createProjectContainer(todo[0], e).addTodoBox(todo[0], e)
                        // displayAllProjects(todo[0])
                        // console.log(todo[0])
                        // const projectBoxItems = document.querySelectorAll('.projectsBoxItems')
                        // console.log(projectBoxItems)
                        // projectBoxItems.forEach((projectBox) => {
                        //   if(todo[0]){
                        //     console.log(this)
                        //   //  projectBox.querySelector('.addMoreInfo').disabled = true
                        //   }
                        // })
                    }
                    else if(document.querySelector('.todoBoxContainer')){
                      document.querySelector('.todoBoxContainer').remove()
                       document.querySelector('.currentTaskBox').remove()
                      //  document.querySelector('.todoBox').remove()
                        // console.log('check')
                      //  if(document.querySelector('.newTodoBox')){
                      //   document.querySelector('.newTodoBox').remove()
                      //   console.log('check 2')
                      //  }
                      //  console.log(e)
                      //  const currentTaskBox = document.createElement('div')
                      //  currentTaskBox.classList.add('currentTaskBox')
                      //  document.querySelector('.currentTaskDiv').appendChild(currentTaskBox)
                       createProjectContainer().addTodoBox(todo[0], e)
                       
                      //  console.log('this ran')
                    }
                    else{
                    //  createProjectContainer().addTodoBox(todo[0])
                      // displayAllProjects() 
                    }
   
                    e.target.parentElement.querySelector('.projectNameInput').remove()
                        targetDiv = e.target.parentElement
                        submitTask(projectName, targetDiv)
                        createTask()
                      //  console.log('eeeee')
                        // console.log(todo[0])
                        createDescription(projectName, todo[0]).getDescriptionInput()
                                              
                        createDescription(projectName, todo[0], targetDiv, e).getDisplayDescription()
                        // console.log(e.target.parentElement)
                        // console.log(document.querySelector('.descriptionDiv'))
                      //  document.querySelector('.descriptionDiv').remove()
                      //  userInput().getProjectDescription.remove()
                      //  descriptionInput.remove()
                        // console.log(document.querySelector('.todoDivContent'))
                        createDate(targetDiv, projectName, todo).getDateDiv()
                    //   console.log(userInput().getNoteInput())
                        createNote(projectName, note, todo[0]).getNoteInput()
                        createNote(projectName, note, todo[0], targetDiv).getDisplayNote()
                        e.target.parentElement.querySelector('.noteInput').remove()
                        createDate(targetDiv, projectName, todo).getDateProjectWasCreated()
                        // console.log(targetDiv)
                        addDate(targetDiv).getCreateButton()
                        // console.log('checklist check')
                        runCalenderButton()
                      //  console.log(targetDiv)
                        createCheckList(targetDiv).createContainer()
                      // console.log(todo)
                      displayAllProjects(e)
                       // console.log(e.target.parentElement)
                        storeData(projectName).populateStorage()
                       // console.log(allProjects().getProjects())
                      //  e.target.remove()
                      e.target.parentElement.parentElement.remove()
         //               console.log(allProjects().getProjects())
                        document.querySelector('.currentTaskDiv').scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        })              
        }
                    }          
                  }
          else if(inputField.value == ''){            
                if(!document.querySelector('.errorMessage')){
                inputField.after(errorMessage())
                // console.log(this.parentElement)
                // console.log(e.target.parentElement.querySelector('.errorMessage'))
                e.target.parentElement.querySelector('.errorMessage').style.marginTop = '2px'
                setTimeout(() => {
                e.target.parentElement.querySelector('.errorMessage').remove()
                }, 2000) 
              }   
            } 
          }
          })
          }else{
            console.log('no')
            console.log(this)
            if(!this.parentElement.querySelector('.projectErrorMessage') ){
                if(this.parentElement.querySelector('.projectErrorMessage2')){
                   this.parentElement.querySelector('.projectErrorMessage2').remove()
                }    

                const projectErrorMessage = document.createElement('p')
                projectErrorMessage.classList.add('projectErrorMessage')
                projectErrorMessage.textContent = 'Project Already Exist'
                this.after(projectErrorMessage)

                setTimeout(() => {
                  projectErrorMessage.remove()
                }, 1500)        

                setTimeout(() => {                 
                  const projectErrorMessage2 = document.createElement('p')
                  projectErrorMessage2.classList.add('projectErrorMessage2')
                  projectErrorMessage2.textContent = 'Use A Different Project Name'
                  this.after(projectErrorMessage2)                                    
                }, 1500)

                setTimeout(() => {
                  if(this.parentElement.querySelector('.projectErrorMessage2')){
                    this.parentElement.querySelector('.projectErrorMessage2').remove()
                  }                
                }, 3000)   
            } 
          }


       //   console.log(allProjects().getProjects())
        runEditButton()
        runEditDescription(projectName)
        runEditNote(projectName)        
        runDeleteProject(projectName)
        runDeleteTask()
        runAddTaskPriority()
        runAddTaskStatus()
        runCreateCheckList()
        runAddMoreInfoButton()
      })      
  }
runCreateTaskButton()
}

const runAllProjectsClick = function(){
  const allProjectButton = document.querySelector('.allProjects')
  allProjectButton.onclick = function(e){    
    projectsBoxDivTitle(e)
    displayAllProjects(e)
  }
}

const runCompletedProjectsClick = function(){
  const completedProjectButton = document.querySelector('.completedProjects')
  completedProjectButton.onclick = function(e){
    document.body.style.backgroundColor = 'purple'
    projectsBoxDivTitle(e)
  }
}

const runUnCompletedProjectsClick = function(){
  const UnCompletedProjectButton = document.querySelector('.unCompletedProjects')
  UnCompletedProjectButton.onclick = function(e){
    document.body.style.backgroundColor = 'gray'
    projectsBoxDivTitle(e)
  }
}

  const runCreateTaskButton = function(){
     //   let currentContainer = document.querySelector('.projectContainer')
        const currentTodo = document.querySelectorAll('.createNewTodo')
      //   const todoInput = document.querySelector('.todoInput')
      //  const taskCreator = createTask()

        currentTodo.forEach((button) => {  
          // document.body.style.backgroundColor = 'pink'
          button.onclick = createTask().getInputAndButton()          
        })  
        
  }

  const submitTask = function(currentProjectName, targetDiv){    
    const currentContainer = document.querySelector('.newProjectContainer')             
        let arr = userInput().getTaskNameInput() 
      //  console.log(currentProjectName)      
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
    button.onclick = function(e){
      document.body.style.backgroundColor = 'orange'
      let currentProjectName = this.parentElement.parentElement.querySelector('.newProjectName')
      // console.log(currentProjectName)
      // console.log(this.parentElement.parentElement)
      currentProjectName.setAttribute('contenteditable', true)
      currentProjectName.classList.add('editContent')
      currentProjectName.style.cursor = 'pointer'
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
         // console.log(e.target.parentElement.parentElement.parentElement)
         
         this.parentElement.appendChild(saveCompletedisplay)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 2000)
        //  console.log(previousValue)
        //  console.log(currentProjectName.textContent)
        //  console.log(allProjects().getProjects())
         editProject(previousValue, currentProjectName.textContent)
        //  console.log(allProjects().getProjects())
         for(let i = 0; i < projects.length; i++){
          // console.log(projects)
             if(projects[i]['project']['projectName'] == currentProjectName.textContent){
                currentProjectName.textContent = projects[i]['project']['projectName']
             }
         }
         console.log('check')
        //  console.log(allProjects().getProjects())
         displayAllProjects(e)
         storeData(currentProjectName.textContent).editStorage()
         localStorage.removeItem(previousValue)
      }

      else if(button.textContent == 'Edit'){
        //  console.log(e.target.parentElement.parentElement.querySelector('.newProjectName').textContent)
          previousValue = e.target.parentElement.parentElement.querySelector('.newProjectName').textContent
          currentProjectName = e.target.parentElement.parentElement.querySelector('.newProjectName')
          currentProjectName.setAttribute('contenteditable', true)
          currentProjectName.classList.add('editContent')
          currentProjectName.style.cursor = 'pointer'
        //  console.log(currentProjectName)
          currentProjectName.addEventListener('focus', function(e){
          button.textContent = 'Save'
          currentProjectName.style.cursor = 'auto'
          // console.log(previousValue)
          })
     }
    }
  })

}  

const runTodoEditButton = function(){
  
  const editTodoButtons = document.querySelectorAll('.editTodoButton')
  // console.log(editTodoButtons)
  let currentTodo = null
  let previousTodo = null
  if(document.querySelector('.editTodoButton')){
      editTodoButtons.forEach((buttons) => {
      buttons.onclick = function(e){
      let arr = [].slice.call(this.parentElement.parentElement.children)
      let currentProjectName = null
         
      if(e.target.parentElement.parentElement.className == 'todoBox'){
        currentProjectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.spanTaskName').textContent
      }
      // currentProjectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
       if(buttons.textContent == 'Save'){
         if(document.querySelector('.editDisplayIndicator')){
          document.querySelector('.editDisplayIndicator').style.visibility = 'hidden'
          // if(document.querySelector('.editDisplayIndicatorColor')){
          //   document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
          // }
         }
        document.body.style.backgroundColor = 'purple'
         buttons.textContent = 'Edit'
         currentTodo = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.todo')
        //  console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent)
         currentTodo.setAttribute('contenteditable', false)
         currentTodo.classList.remove('editContent')
         currentTodo.style.cursor = 'auto'
         const saveCompletedisplay = document.createElement('p')
         saveCompletedisplay.textContent = 'Saved'
         saveCompletedisplay.classList.add('saved')

         e.target.parentElement.parentElement.querySelector('.priority').before(saveCompletedisplay)
        console.log(currentTodo)
        console.log(previousTodo)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
        //  console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
        // console.log(e.target.parentElement)
        console.log(myButtonState.getDiv().querySelector('.todo'))
         if(myButtonState.getDiv().querySelector('.todo')){
            console.log(myButtonState.getDiv().querySelector('.todo'))
            console.log(previousTodo)
            createTodo(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, arr, currentTodo.textContent, previousTodo).editTodo()
         }else{
          console.log(myButtonState.getDiv().querySelector('.spanTaskName'))
          createTodo(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, arr, currentTodo.textContent, myButtonState.getDiv().querySelector('.spanTaskName').textContent).editTodo()
         }
        
        // createTodo(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, arr, currentTodo.textContent, myButtonState.getDiv().querySelector('.spanTaskName').textContent).editTodo()
//  console.log(e.target.parentElement.parentElement)  
         for(let i = 0; i < projects.length; i++){
             if(projects[i]['project']['projectName'] == e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent){
                // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
              for(let j = 0; j < projects[i]['project']['todos'].length; j++ ){
                    if(projects[i]['project']['todos'][j]['title'] == currentTodo.textContent){
                        console.log(currentTodo)
                      let newTodo = projects[i]['project']['todos'][j]['title']
            //            console.log(newTodo)
                        currentTodo.textContent = newTodo         
                        // console.log(newTodo)   
                              
                    }
                  }
              }
         }     
       const taskNames = document.querySelectorAll('.spanTaskName')
       taskNames.forEach((taskName)=> {       
        const todoText = currentTodo.textContent 
        console.log(myButtonState.getDiv().querySelector('.spanTaskName'))              
        console.log(myButtonState.getDiv().parentElement.parentElement.parentElement.querySelector('.todo').textContent)              
        if(myButtonState.getDiv().querySelector('.spanTaskName')){
          if(taskName.textContent == myButtonState.getDiv().querySelector('.spanTaskName').textContent){
            taskName.textContent = myButtonState.getDiv().parentElement.parentElement.parentElement.querySelector('.todo').textContent
            console.log('first')
          }
        }else if(myButtonState.getDiv().querySelector('.todo')){
         console.log('second check')
         console.log(previousTodo)
         console.log(myButtonState.getDiv().querySelector('.todo').textContent)
          if(taskName.textContent == previousTodo){
            taskName.textContent = myButtonState.getDiv().querySelector('.todo').textContent
            console.log('second')
          }  
        }
      })
       //  storeData(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent).editStorage() 
      } 
      else if(e.target.className == 'editTodoButton'){
        document.body.style.backgroundColor = 'grey'
      for(let i = 0; i < arr.length; i++){
        // console.log('check 6')
        // console.log(arr[i])
        //   console.log(arr[i].className == 'todo')
        if(arr[i].querySelector('.spanTaskName') || arr[i].className == 'todo'){
        //  console.log(arr[i].className == 'todo')
          if(arr[i].className == 'todo' || arr[i].querySelector('.spanTaskName').className == 'spanTaskName'){
            if(arr[i].querySelector('.spanTaskName')){
              if(document.querySelector('.currentTaskBox')){
                document.querySelector('.currentTaskBox').remove()
              }
            createProjectContainer().createCurrentTaskBox(e.target.parentElement.parentElement.querySelector('.spanTaskName'))       
            createTaskButtonsDiv()       
            myButtonState.setDiv(e.target.parentElement.parentElement)
            createDate(document.querySelector('.currentTaskDiv'), e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, arr[i].querySelector('.spanTaskName').textContent).getDateProjectWasCreated()
            addDate(document.querySelector('.currentTaskDiv')).getCreateButton()
            eventController().runCalenderButton()
            createDescription(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, arr[i].querySelector('.spanTaskName').textContent, document.querySelector('.currentTaskDiv')).getDisplayDescription()
            createNote(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, null, arr[i].querySelector('.spanTaskName').textContent, document.querySelector('.currentTaskDiv')).getDisplayNote()
            
          previousTodo = arr[i].parentElement.querySelector('.spanTaskName').textContent
          currentTodo = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('h4')
          // currentTodo.classList.add('currentTodoColor')
          // document.querySelector('.todo').classList.add('currentTodo')
         console.log('check 7')

        }else{
          console.log('check 5')
          console.log(e.target.parentElement.parentElement)
          myButtonState.setDiv(e.target.parentElement.parentElement)

          previousTodo = e.target.parentElement.parentElement.children[i].textContent
          currentTodo = e.target.parentElement.parentElement.children[i]
        }  
        console.log('check 8')
          currentTodo.setAttribute('contenteditable', true)
     
          currentTodo.classList.add('editContent')
          currentTodo.style.cursor = 'pointer'
         if(document.querySelector('.todo')){
          // document.querySelector('.todo').classList.add('currentTodo')
          const editDisplayIndicator = document.createElement('p')
          editDisplayIndicator.classList.add('editDisplayIndicator')
          
          editDisplayIndicator.textContent = 'Click Text Below'

          if(!document.querySelector('.editDisplayIndicator')){
            document.querySelector('.currentTaskDivTitle').after(editDisplayIndicator)

            
            addDisplayIndicator()           
          }
          else{
            document.querySelector('.editDisplayIndicator').remove()
            
            document.querySelector('.currentTaskDivTitle').after(editDisplayIndicator)
            
            addDisplayIndicator()     
          } 
          
          // else if(document.querySelector('.editDisplayIndicator')){
          //   document.querySelector('.editDisplayIndicator').remove()
          // }
        }
          currentTodo.addEventListener('focus', function(e){      
          currentTodo.parentElement.querySelector('.editTodoButton').textContent = 'Save'
          currentTodo.style.cursor = 'auto'          
          })
          document.querySelector('.todo').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
          console.log(allProjects().getProjects())
        }
        }

      }
     }
   }
 })
}
}

function addDisplayIndicator(){
  document.querySelector('.editDisplayIndicator').classList.add('editDisplayIndicatorColor')
  if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
      }, 1000)
    }

    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.add('editDisplayIndicatorColor')
      }, 2000)
    }

    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
      }, 3000)
    }
      
    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.add('editDisplayIndicatorColor')
      }, 4000)
    }
              
    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
      }, 5000)
    }

    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.add('editDisplayIndicatorColor')
      }, 6000)
    }

    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
      }, 7000)
    }

    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
      }, 7000)
    }
              
    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.add('editDisplayIndicatorColor')
      }, 8000)
    }
      
    if(document.querySelector('.editDisplayIndicator')){
      setTimeout(() => {
      document.querySelector('.editDisplayIndicator').classList.remove('editDisplayIndicatorColor')
      }, 9000)
    } 

    if(document.querySelector('.editDisplayIndicator')){
    setTimeout(() => {
    document.querySelector('.editDisplayIndicator').classList.add('editDisplayIndicatorColor')
    }, 10000)
  }
}


const runSaveChanges = function(){


  if(document.querySelector('.saveChanges')){
    const saveChanges = document.querySelectorAll('.saveChanges')
    const saveChangesButtons = document.querySelectorAll('.saveChanges')
    
    saveChangesButtons.forEach((button) => {
      button.onclick = function(e){
     //   console.log('check agagagagag')
     //   console.log(e.target.parentElement)
      if(e.target.parentElement.classList == 'todoDivContent' && document.querySelector('.currentTaskBox')){
        document.querySelector('.currentTaskBox').remove()
      }
      let targetDiv = e.target.parentElement
      
      let projects = allProjects().getProjects()
      if(e.target.classList == 'saveChanges' && e.target.parentElement.classList == 'checkListForm'){
        // console.log('it is checkList')
        createCheckList().saveCheckList(targetDiv)
        e.preventDefault()
        // console.log('save checklist')
        // console.log(allProjects().getProjects())
      } else if (e.target.className == 'saveChanges'){
        // console.log('check 2')
        //  console.log(userInput().getTaskNameInput())
         let todoInput = userInput().getTaskNameInput()
         let note = userInput().getNoteInput()
         let arr = []
         let newArr = []
         const taskInputs = document.querySelectorAll('.todoInput')  
         const todos = Array.from(document.querySelectorAll('.todo'))  
        // console.log(todoInput)
        // console.log(note)
        // console.log(taskInputs)
        // console.log(todos)

         todos.forEach((todo) => {
          arr.push(todo.textContent)
         })

         taskInputs.forEach((inputs) => {
          arr.push(inputs.value)
         })  
        //  console.log(arr)
        let currentProjectName = null
        const currentTodo = arr[arr.length - 1]  

        for(let i = 0; i < projects.length; i++){
          if(todoInput){
           // console.log(todoInput)
           // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
          // console.log(projects[i]['project']['projectName'])
          //  console.log(this.parentElement.querySelector('.newProjectName').textContent)
            if(projects[i]['project']['projectName'] == e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent){
              
            // console.log(projects[i]['project']['todos'])
            // console.log(projects[i]['project']['projectName'])
            // console.log(projects[i]['project'])
              for(let j = 0; j < projects[i]['project']['todos'].length; j++){
              //    console.log('fff')
              //  console.log(projects[i]['project']['todos'][j]['title'])   
                if(!newArr.includes(projects[i]['project']['todos'][j]['title'])){
                  newArr.push(projects[i]['project']['todos'][j]['title'])
              //  console.log(newArr)
                }                
               }
              }            
            }
          }
          console.log(newArr)
          console.log(arr[arr.length - 1])
         if(!newArr.includes(arr[arr.length - 1])){
          console.log('check 1')
          //  console.log('it does not')
            if(document.querySelector('.todoInput')){
             currentProjectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
            // console.log(currentProjectName)
            // console.log(arr[arr.length - 1])
            // console.log(currentTodo)
            // console.log(targetDiv)
            // console.log(currentProjectName)

             createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
          //   console.log('running save changes submiting only projctname first')
             createTask(currentProjectName).displayTodo()
            //  document.querySelector('.todoInput').remove()
            //  todoInput.remove()    
             createDescription(currentProjectName, currentTodo).getDescriptionInput()
             createDescription(currentProjectName, currentTodo, targetDiv).getDisplayDescription()

            if(e.target.parentElement.className == 'newProjectContainer'){
              targetDiv = e.target.parentElement
              } else {
                  targetDiv = targetDiv.parentElement.parentElement
              }
          runDeleteTask()
          runAddTaskPriority()
          runAddTaskStatus()
          runEditDescription()
          runEditNote()
          runCreateCheckList()
          disableButton()
          displayAllProjects(e)
          runAddMoreInfoButton()
          
        //  storeData(e.target.parentElement.querySelector('.newProjectName').textContent).editStorage()
          e.target.remove()
          runCurrentDivInfo()
          console.log('check savechanges')          
          targetDiv.querySelectorAll('.todoDivContent').forEach((container) => {
            // console.log(container.querySelector('.todoInput').value)
          if(container.querySelector('.todoInput').value == currentTodo){
            // console.log('yes')
            createNote(currentProjectName, note, currentTodo).getNoteInput()
            createNote(currentProjectName, note, currentTodo, targetDiv).getDisplayNote()
            runEditNote()
            // console.log(currentTodo)
            // console.log('this ran')
            container.parentElement.remove()
            createProjectContainer().addTodoBox(currentTodo, e)
            console.log('run eventcontroller also here for maybe edit and delete of task')

            runCurrentDivInfo()
            runDeleteTask()
            runTodoEditButton()
          }
          })         
          } else {
              currentProjectName = e.target.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
              createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
              createTask(currentProjectName).displayTodo(targetDiv)
              // todoInput.remove()    
              createDescription(currentProjectName, currentTodo).getDescriptionInput()
              createDescription(currentProjectName, currentTodo, targetDiv).getDisplayDescription()
          
              if(e.target.parentElement.className == 'newProjectContainer'){
              // console.log(e.target.parentElement)
              targetDiv = e.target.parentElement
              // console.log(e.target.parentElement)
              } else {
                // console.log(e.target.parentElement)
                targetDiv = targetDiv.parentElement.parentElement
                // console.log(e.target.parentElement)
                }

           targetDiv.querySelectorAll('.todoDivContent').forEach((container) => {
            if(container.querySelector('.todo').textContent == currentTodo){
             createNote(currentProjectName, note, currentTodo).getNoteInput()
             createNote(currentProjectName, note, currentTodo, targetDiv).getDisplayNote()
          
             const priority = document.createElement('p')
             priority.classList.add('priority')
             priority.textContent = 'Task Priority : '            

             const editTodo = document.createElement('button')
             editTodo.classList.add('editTodoButton')
             editTodo.textContent = 'Edit Task'
             
             addTaskButtons(container, currentProjectName, targetDiv)
             
            }
           })   
          }    
          createDate(targetDiv).getDateDiv()
          createDate(targetDiv, currentProjectName, currentTodo).getDateProjectWasCreated()
          // console.log(targetDiv)
          addDate(targetDiv).getCreateButton()
          // console.log(allProjects().getProjects())
          runCalenderButton()
           const todoDivContent = targetDiv.querySelectorAll('.todoDivContent')  
         }
         else {
          console.log('chek')
          todoAlreadyExistMessage(this)
         }
          }
      }
       })      
      //  console.log(allProjects().getProjects())
    }
    // disableButton()
    // displayAllProjects()
    // console.log('disable')
    // console.log(allProjects().getProjects())
}

const runAddTodo = function (){
  const addTodo = document.querySelector('.addTodo')    
    
    addTodo.onclick = function(e){    
      if(!document.querySelector('.selectProject')){
      //  document.body.style.backgroundColor = 'blue'
        document.querySelector('.addTodo').textContent = 'Use The Below To Add Todo To Any Project'
        createTodoInputAndButton()
        
        eventController().runUpdateDropDown()
        eventController().runtodoSubmitButton()

      }    
    }
}

const runUpdateDropDown = function () {
  const selectProject = document.querySelector('.selectProject')
  selectProject.onclick = updateDropDown().addProject

}

const runtodoSubmitButton = function (){
  
  const todoSubmitButton = document.querySelector('.todoSubmitButton')
  todoSubmitButton.onclick = function (e){  
    // console.log('dhdhdh')      
    // console.log(e)      
    submitTodo(e)
    runTodoEditButton()
    
  }
//  eventController().runAddMoreInfoButton()
}

const runEditDescription = function () {
 // console.log(projectName)
  const editDescriptionButton = document.querySelectorAll('.editDescription')
  let previousDescription;
  // console.log(editDescriptionButton)
  editDescriptionButton.forEach((editButton) => {
    // console.log(this)
    editButton.onclick = function (e) {
      // document.body.style.backgroundColor = 'orange'
      console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent)
      let currentTodo = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent
      let projectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
   //   console.log(e.target.parentElement.parentElement.parentElement.parentElement)
      editDescription()
      const currentDescription = e.target.parentElement.querySelector('.description')
      currentDescription.setAttribute('contenteditable', true)
      currentDescription.classList.add('editContent')
      currentDescription.style.cursor = 'pointer'

      if(editButton.textContent == 'Save'){
        // console.log('check')
         editButton.textContent = 'Edit'
         currentDescription.setAttribute('contenteditable', false)
         currentDescription.classList.remove('editContent')
         currentDescription.style.cursor = 'auto'
         const saveCompletedisplay = document.createElement('p')
         saveCompletedisplay.textContent = 'Saved'
         saveCompletedisplay.classList.add('saved')

         e.target.parentElement.parentElement.querySelector('.descriptionContentDiv .description').after(saveCompletedisplay)
        //  document.querySelector('.saved').style.marginTop = '10px'
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)

         addDescriptionToProject(projectName, currentDescription.textContent, currentTodo)
        for(let i = 0; i < allProjects().getProjects().length; i++){
          if(allProjects().getProjects()[i]['projectName'] == projectName){
            currentDescription.textContent = allProjects().getProjects()[i]['description']
            for(let j = 0; j < allProjects().getProjects()[i]['project']['todos'].length; j++){
              if(projects[i]['project']['todos'][j]['title'] == currentTodo){
                console.log(allProjects().getProjects())
                currentDescription.textContent= allProjects().getProjects()[i]['project']['todos'][j]['description'] 
              }                  
            }
          }
        }    
       // console.log(e.target.parentElement.parentElement.parentElement.parentElement)     
      //  storeData(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent).editStorage()
      }
      currentDescription.addEventListener('focus', function(e){
        // document.body.style.backgroundColor = 'skyblue'
        editButton.textContent = 'Save'
        currentDescription.style.cursor = 'auto'
      })
    }
  })  
}

const runEditNote = function (projectName, e) {
//  console.log('did it run')
  const editNoteButton = document.querySelectorAll('.editNote')
  
  // console.log(editNoteButton)
 
  editNoteButton.forEach((editButton) => {
    // console.log(this)
    editButton.onclick = function (e) {
 //     console.log(this.parentElement.querySelector('.description'))
    //  editNote()
     console.log(e.target)
      const currentNote = this.parentElement.querySelector('.note')
      currentNote.setAttribute('contenteditable', true)
      currentNote.classList.add('editContent')
      currentNote.style.cursor = 'pointer'

      if(editButton.textContent == 'Save'){
         editButton.textContent = 'Edit'
         currentNote.setAttribute('contenteditable', false)
         currentNote.classList.remove('editContent')
         currentNote.style.cursor = 'auto'
         const saveCompletedisplay = document.createElement('p')
         saveCompletedisplay.textContent = 'Saved'
         saveCompletedisplay.classList.add('saved')
         // adjust the saveCompletedisplay because it not moving when the text
         // is longer
       //  console.log(e.parentElement)
         e.target.before(saveCompletedisplay)
        //  console.log(projectName)
         storeData(projectName).populateStorage()
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
       // console.log(currentNote.textContent)
       //console.log(this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
    //   console.log(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent)
       let currentTodo = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent
     //   console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
       addNoteToProject(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, currentNote.textContent, currentTodo)
         
        for(let i = 0; i < allProjects().getProjects().length; i++){
          // console.log(allProjects().getProjects()[i]['projectName'])
          // console.log(projectName)
             if(allProjects().getProjects()[i]['project']['projectName'] == projectName){
                // console.log(projectName)
                // console.log(allProjects().getProjects()[i]['projectName'])
                // console.log(allProjects().getProjects()[i]['todos'])
                currentNote.textContent = allProjects().getProjects()[i]['projectNote']
              for(let j = 0; j < allProjects().getProjects()[i]['project']['todos'].length; j++){
                if(projects[i]['project']['todos'][j]['title'] == currentTodo){
                  // console.log(allProjects().getProjects())
                  currentNote.textContent= allProjects().getProjects()[i]['project']['todos'][j]['projectNote'] 
                }
                  
              }
            }
            console.log(allProjects().getProjects())
         }         
      }
// console.log(allProjects().getProjects())
// storeData(e.target.parentElement.querySelector('.newProjectName').textContent).populateStorage()
      currentNote.addEventListener('focus', function(e){
        // document.body.style.backgroundColor = 'skyblue'
        editButton.textContent = 'Save'
        currentNote.style.cursor = 'auto'
      })
    //  storeData(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent).editStorage()
    }
  })  
  
}

const runCalenderButton = function(projectName){
  const calerderButtons = document.querySelectorAll('.dueDateButton')

  calerderButtons.forEach((button) => {
    // button.onclick = addDate().getDisplayCalender()
   
    button.onclick = function(e){
      // document.body.style.backgroundColor = 'orange'
      const targetDiv = e.target.parentElement
 //     console.log(targetDiv.parentElement.parentElement.querySelector('.newProjectName'))
 console.log(targetDiv)     
 addDate(targetDiv).getDisplayCalender()
      runCalender(targetDiv)
    }
  })
}

function displayDueDate(targetDiv){
    const calenders = document.querySelectorAll('.calender')
  // console.log(calenders)
  calenders.forEach((calender) => {
    createSaveDateButton(calender, targetDiv)
  })
}

function changeDate(targetDiv){
      const changeDueDate = document.createElement('button')
      changeDueDate.classList.add('changeDueDate')
      changeDueDate.textContent = 'Change Date'
      targetDiv.appendChild(changeDueDate)

      const changeDateButtons = document.querySelectorAll('.changeDueDate')

      changeDateButtons.forEach((button) => {
        button.onclick = function(){
        const currentDiv = this.parentElement
        // console.log(currentDiv)
        // console.log(targetDiv)
        // document.body.style.backgroundColor = 'purple'
        console.log(targetDiv)
        console.log(currentDiv)
        addDate(currentDiv).getDisplayCalender()
        displayDueDate(targetDiv)
        // console.log(allProjects().getProjects())
        }
      })
}

const runCalender = function(targetDiv){
  displayDueDate(targetDiv)
  
}

const runSaveDueDate = function(){
  const saveNewDateButtons = document.querySelectorAll('.saveNewDate')
  const calenders = document.querySelectorAll('.calender')
  
  saveNewDateButtons.forEach((button) => {
    button.addEventListener('click', function(e){
      const targetDiv = e.target.parentElement    
      if(e.target.parentElement){     
        const calenderValues = e.target.parentElement.querySelector('.calender').value
        console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
        const projectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
        let dueDate = null
        let projects = allProjects().getProjects()
        let todo = targetDiv.parentElement.parentElement.querySelector('.todo').textContent
        dateController(projectName, calenderValues, todo)
        
        for(let i = 0; i < projects.length; i++){
          if(projectName == projects[i]['project']['projectName']){
            for(let j = 0; j < projects[i]['project']['todos'].length; j++){
              if(projects[i]['project']['todos'][j]['title'] == todo){
                 dueDate = projects[i]['project']['todos'][j].dueDate
              }
     }

   }
            }
    
      if(!targetDiv.querySelector('.dueDate')){
        const dueDateElement = document.createElement('p')
        dueDateElement.classList.add('dueDate')
        dueDateElement.textContent = `Due Date is ${dueDate}`
        targetDiv.appendChild(dueDateElement)
      } else{
        targetDiv.querySelector('.dueDate').textContent = `Due Date is ${dueDate}`
        displayUpdateMessage(targetDiv)
      }      
      e.target.parentElement.parentElement.querySelector('.calender').remove()
      changeDate(targetDiv)
      console.log('due date')
      console.log(todo)
      const taskNames = document.querySelectorAll('.spanTaskName')
      
      taskNames.forEach((taskName)=> {       
        console.log(taskName)
      // const todoText = currentTodo.textContent        
        if(spanTaskName.textContent == todo){
          console.log('yes date')
          const dueDateText = taskName.parentElement.parentElement.querySelector('.dueDate')
          const dueDateInfo = document.querySelector('.currentTaskDiv .dueDate').textContent
          dueDateText.textContent = `${dueDateInfo}`          
        }
      })
         // targetDiv.querySelector('button').remove()
    //  console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
     // storeData(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent).editStorage()
      e.target.remove()
      }
     })
  })

}

const runAddMoreInfoButton = function (){
  const moreInfoButtons = document.querySelectorAll('.addMoreInfo')
  moreInfoButtons.forEach((moreInfoButton) => {
    moreInfoButton.onclick = function(e){
    document.body.style.backgroundColor = 'purple'
    
    let currentDiv = e.target.parentElement.parentElement
    // console.log(currentDiv)
    // console.log(e.target)
    addMoreInfo(currentDiv, e)
    
    eventController().runSaveChanges()
    // console.log('check 1')
  }
  })
  
}

const runDeleteProject = function (targetDiv){
  const projects = allProjects().getProjects()
  const deleteButtons = document.querySelectorAll('.deleteProject')
  deleteButtons.forEach((button) => {
    button.onclick = function (e){    
      document.body.style.backgroundColor = 'skyblue'
      let currentProjectName = null
      let targetDiv = null
    //  console.log(e.target.parentElement.parentElement.className)
     // console.log(e.target.parentElement.parentElement.querySelector('.spanElement').textContent)
      if(e.target.parentElement.parentElement.classList == 'projectsBoxItems'){
       
        currentProjectName = e.target.parentElement.parentElement.querySelector('.spanProjectName').textContent
        targetDiv = e.target.parentElement.parentElement
      }else if(e.target.parentElement.parentElement.classList == 'projectContainer'){
        currentProjectName = e.target.parentElement.parentElement.querySelector('.newProjectName').textContent
        targetDiv = e.target.parentElement.parentElement
        // console.log(e.target.parentElement.parentElement.querySelector('.nameProject').textContent)
      }
      const currentProject = document.body.querySelector('.projectContainer')
      // console.log(currentProject)
     // const currentProjectName = currentProject.querySelector('.newProjectName').textContent
      // console.log(currentProject)
     // console.log(currentProjectName)
      for(let i = 0; i < projects.length; i++){
        // console.log(currentProjectName)
        if(projects[i]['project']){         
         if(projects[i]['project']['projectName'] == currentProjectName){
          const projectId = projects[i]['project ID']
          localStorage.removeItem(projectId)
          currentProject.remove()
          // console.log(targetDiv)
          targetDiv.remove()
          if(targetDiv.classList == 'projectsBoxItems'){
            currentProject.remove()
            targetDiv.remove()
            //  console.log('projectBoxItems')
            //  console.log(e.target.parentElement.parentElement)
          }else if(targetDiv.classList == 'projectContainer'){
            // console.log(e.target.parentElement.parentElement)
            // console.log('projectContainer')
            if(document.querySelector('.projectsBoxItems .spanProjectName').textContent == currentProjectName){
             // console.log('check')  
              document.querySelector('.projectsBoxItems').remove()
         }
          }
         // console.log(document.querySelector('.projectsBoxItems .nameProject').textContent)
        //  if(document.querySelector('.projectsBoxItems .nameProject').textContent == `Project : ${currentProjectName}`){
        //   console.log('check')  
        //   document.querySelector('.projectsBoxItems').remove()
        //  }
        }
        }
      }       
      deleteProject(currentProjectName)
      // currentProject.remove()
      updateDropDown(currentProjectName).removeProject()
      createProjectContainer().createNewProjectContainer()   
    }
  })
}

const runDeleteTask = function(){
  const deleteButtons = document.querySelectorAll('.deleteTask')
  deleteButtons.forEach((button) => {    
    button.onclick = function(e){
      deleteTask(e)      
    }
  })
}

const runAddTaskPriority = function(){
  const taskPriorityButtons = document.querySelectorAll('.priorityButton')
  taskPriorityButtons.forEach((button) => {
    button.onclick = function(e){
      addTaskPriority(e)
      // document.body.style.backgroundColor = 'blue'
     // console.log(allProjects().getProjects())
    }
  })
}

const runAddTaskStatus = function(){
  const taskStatusButton = document.querySelectorAll('.taskStatusButton')
  taskStatusButton.forEach((button) => {
    button.onclick = function(e){      
     // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
      let currentProjectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
      let todo = e.target.parentElement.parentElement.querySelector('.todo').textContent
      updateTodoStatus(currentProjectName, todo)
      addTaskStatus(currentProjectName, e)
      
    }
  })
}

const runCreateCheckList = function(){
  const createCheckListButton = document.querySelector('.addCheckListFormButton')
  
  // createCheckListButton.forEach((button) => {
    // console.log(this)
    // console.log(todo)
    // console.log(targetDiv)
    if(createCheckListButton){
      createCheckListButton.onclick = function(e){
      const targetButton = e.target
      
      createCheckList().addCheckListForm(e.target)
   //   console.log(targetButton)
      runAddCheckItem()
      runSaveChanges()
      // console.log(e.target.classList)
      // console.log(targetButton)
    }
    }

  // })
}

const runAddCheckItem = function(){
  
  const addCheckItemButtons = document.querySelectorAll('.addItemButton')
  addCheckItemButtons.forEach((currentButton) => {
      currentButton.onclick = function(e){
        const targetButton = this
        // console.log('check')
          createCheckList().addCheckItem(targetButton)
          e.preventDefault()
      }
  })
}

const runCheckListStatus = function(){
  // console.log(currentProjectName)
  // console.log(projectName)
  const checkBoxes = document.querySelectorAll('.checkListItem')
  checkBoxes.forEach((checkBox) => {
    checkBox.onclick = function(e){
     // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
    const targetDiv = e.target.parentElement
    const formDiv = targetDiv.parentElement.parentElement.parentElement
    const currentProjectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
    const currentTodo = targetDiv.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent
    // console.log(currentProjectName)
    // console.log(currentTodo)
    //   console.log(this.parentElement.querySelector('.checkItem'))
      // console.log(e.target.querySelector('.checkItem'))
    updateCheckListStatus(currentProjectName, currentTodo, targetDiv.querySelector('.checkItem').textContent)
    createCheckList().checkListStatus(targetDiv, formDiv)
  }
  })
}
const saveTodoChangesAddedFromHeader = function(){
  const newChangesButton = document.querySelectorAll('.saveNewChanges')
  newChangesButton.forEach((button) => {
    button.onclick = function(e){
      // document.body.style.backgroundColor = 'coral'
      if(userInput().getProjectDescription() !== '' && userInput().getNoteInput() !== ''){
        // console.log(userInput().getProjectDescription())
        // console.log(userInput().getNoteInput())
        const container = e.target.parentElement
        const todo = container.querySelector('.todo')
        const projectContainer = e.target.parentElement.parentElement.parentElement
        const currentProjectName = e.target.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
        let projects = allProjects().getProjects()
        for(let i = 0; i < projects.length; i++){
          if(projects[i]['project']['projectName'] == currentProjectName){
            // console.log('yes it is')
            if(e.target.parentElement.querySelector('.taskButtonsDiv')){
              e.target.parentElement.querySelector('.taskButtonsDiv').remove()
              addTaskButtons(container, currentProjectName, todo.textContent, projectContainer)
              e.target.parentElement.querySelector('.todo').style.marginBottom = '30px'
             // console.log(e.target.parentElement.querySelector('.todo'))
            }       
            e.target.parentElement.querySelector('.descriptionInput').remove()     
            e.target.parentElement.querySelector('.noteInput').remove()     
            // console.log(projectContainer)
            storeData(projectContainer.querySelector('.newProjectName').textContent).editStorage()
            e.target.remove()
          }
        }
      }else{       
        if(userInput().getProjectDescription() == ''){
          // console.log('description empty')
          // console.log(e.target.parentElement)
          e.target.parentElement.classList.add('todoDivContent_2')
         if(!e.target.parentElement.querySelector('.errorMessage')){
           e.target.parentElement.querySelector('.descriptionDiv').appendChild(errorMessage())
           setTimeout(() => {
           e.target.parentElement.querySelector('.errorMessage').remove()
           }, 2000)
         }         
        }else if(userInput().getNoteInput() == ''){
          // console.log('note is empty')
          if(!e.target.parentElement.querySelector('.errorMessage')){
         //   e.target.parentElement.querySelector('.errorMessage').remove()
            e.target.parentElement.querySelector('.noteDiv').appendChild(errorMessage())
            setTimeout(() => {
            e.target.parentElement.querySelector('.errorMessage').remove()
            }, 2000)
          } 
        }
      }
      
    }
  })
}

const runTodosForProjects = function(){
    const viewTaskButtons = document.querySelectorAll('.viewTasks')
    // console.log(projectBoxItems)
    // clicking viewTaskButton this creates contents in todoBox
    viewTaskButtons.forEach((taskButton) => {
      taskButton.onclick = function(e){
        document.body.style.backgroundColor = 'purple'
        todosForProjects(e)
     // creates newProjectName and titleContaineButtonsDiv
     // also creates empty todoBoxContainer and newTodoBox and plus button
    displayFirstProjectTodo(e)
    // this recreates projectContainer by creating newProjectName and titleContainerButtons Div
// it also creates newTodoBox and the plus button
// It also creates contents in todoBox and creates the contents in currentTaskDiv
        runDeleteTask()
        runTodoEditButton()
      }
    })
}

const runAddProjectStatus = function(){
  const addProjectStatusButtons = document.querySelectorAll('.projectStatusButton')
  addProjectStatusButtons.forEach((projectStatusButon) => {
    projectStatusButon.onclick = function(e){
      projectStatusButon.style.backgroundColor = 'orange'
      addProjectStatus(e).getProjectStatus()
    }
  })
}

const runCurrentDivInfo = function(){ 
  // createProjectContainer().createCurrentTaskBox()
  // console.log('info run check')
  const moreInfoButtons = document.querySelectorAll('.viewMoreInfo')
  // console.log(moreInfoButtons)
  let note = null
  let description = null
  let currentProjectName = null
  let todo = null
  moreInfoButtons.forEach((button) => {
    // console.log('chck')
    button.onclick = function(e){
      let projects = allProjects().getProjects()
      todo = e.target.parentElement.parentElement.querySelector('.spanTaskName').textContent
      // console.log(todo)
      if(document.querySelector('.currentTaskBox')){
        document.querySelector('.currentTaskBox').remove()
      }
       for(let i = 0; i < projects.length; i++){
        if(projects[i]['project']['projectName'] == e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
){
          currentProjectName = projects[i]['project']['projectName']
          for(let j = 0; j < projects[i]['project']['todos']; j++){
            console.log(projects[i]['project']['todos'][j]['title'])
            if(projects[i]['project']['todos'][j]['title'] == todo){
             console.log(todo)
            }
          }
       }
      }

       createDivsCurrentTask()
       createProjectContainer().createCurrentTaskBox(e.target.parentElement.parentElement.querySelector('.spanTaskName'))       
       createTaskButtonsDiv()
       createDate(document.querySelector('.currentTaskDiv'), currentProjectName, e.target.parentElement.parentElement.querySelector('.spanTaskName').textContent).getDateProjectWasCreated()
       addDate(document.querySelector('.currentTaskDiv')).getCreateButton()
       eventController().runCalenderButton()
       createDescription(currentProjectName, todo, document.querySelector('.currentTaskDiv')).getDisplayDescription()
       createNote(currentProjectName, note, todo, document.querySelector('.currentTaskDiv')).getDisplayNote()

      document.querySelector('.currentTaskDiv').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
    }
  })
}

const runIncludeMoreInfo = function(){
  const includeMoreInfoButtons = document.querySelectorAll('.includeMoreInfo')
  includeMoreInfoButtons.forEach((button => {
    button.onclick = function(e){
      const todoBox = button.parentElement.parentElement
      let todoInput = todoBox.querySelector('.spanTaskName').textContent
      // runCreateTaskButton()
      // createTask().getInputAndButton()()
        createTodoDescription(todoBox)
        createTodoNote(todoBox)
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save Changes'  
        saveButton.classList.add('saveChanges')          
        todoBox.appendChild(saveButton)
        eventController().runSaveChanges()
        e.target.parentElement.parentElement.querySelector('.taskName').remove()
        e.target.parentElement.remove()
    }
  }))
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
          runtodoSubmitButton,
          runEditDescription,
          runEditNote,
          runCalenderButton,
          runCalender,
          runSaveDueDate,
          runAddMoreInfoButton,
          runDeleteProject,
          runDeleteTask,
          runAddTaskPriority,
          runAddTaskStatus,
          runCreateCheckList,          
          saveTodoChangesAddedFromHeader,
          runCheckListStatus,
          runAllProjectsClick,
          runUnCompletedProjectsClick,
          runCompletedProjectsClick,
          runTodosForProjects,
          runAddProjectStatus,
          runCurrentDivInfo,
          runIncludeMoreInfo
         }
}

function addTaskButtons(container, currentProjectName, todo, projectContainer){
  console.log(container)
  // console.log(currentProjectName)
  // console.log(targetDiv)
    const note = userInput().getNoteInput()
    document.body.style.backgroundColor = 'coral'
  // console.log(container)
    const priority = document.createElement('p')
    priority.classList.add('priority')
    priority.textContent = 'Task Priority : '

    // const taskButtonsDiv = document.createElement('div')
    // taskButtonsDiv.classList.add('taskButtonsDiv')

    const editTodo = document.createElement('button')
    editTodo.classList.add('editTodoButton')
    editTodo.textContent = 'Edit Task'

    const deleteTask = document.createElement('button')
    deleteTask.classList.add('deleteTask')
    deleteTask.textContent = 'Delete'

    const priorityButton = document.createElement('button')
    priorityButton.classList.add('priorityButton')
    priorityButton.textContent = 'Task Priority'

    const taskStatusButton = document.createElement('button')
    taskStatusButton.classList.add('taskStatusButton')
    taskStatusButton.textContent = 'Task Status'
    
    console.log(container.querySelector('.priority'))
    container.querySelector('.todo').after(priority)
    priority.after(taskButtonsDiv)
    taskButtonsDiv.appendChild(editTodo)
    taskButtonsDiv.appendChild(deleteTask)
    taskButtonsDiv.appendChild(priorityButton)
    taskButtonsDiv.appendChild(taskStatusButton)

    // projectName, todo, targetDiv
    createDescription(currentProjectName, todo).getDescriptionInput()
    createDescription(currentProjectName, todo, container).getDisplayDescription()

    createNote(currentProjectName, note, todo).getNoteInput()
    createNote(currentProjectName, note, todo, container).getDisplayNote()
    createDate(container, currentProjectName, todo).getDateProjectWasCreated()
   // console.log(targetDiv)
    addDate(projectContainer).getCreateButton()
    // addDate(projectName).getCreateButton()
    eventController().runCalenderButton()
    createCheckList(projectContainer).createContainer()
    // createCheckList(container).createContainer()

    eventController().runEditDescription()
    eventController().runEditNote(currentProjectName)
    eventController().runDeleteTask()
    eventController().runAddTaskPriority()
    eventController().runAddTaskStatus()
    eventController().runTodoEditButton()
    // createCheckList(targetDiv).createContainer()
    eventController().runCreateCheckList()
}


function userInput(checkListInput){
  // console.log(checkListInput)
  let projectNameInput;
  let headerTodoInput;
  let projectDescription;
  let note;
  let checkInput; 
    
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

  if(document.querySelector('.descriptionInput')){
    projectDescription = document.querySelector('.descriptionInput').value
  }

  if(document.querySelector('.noteInput')){
    note = document.querySelector('.noteInput').value
    // console.log(note)
  }
 if(checkListInput){
    checkInput = checkListInput.value
 }
  //  console.log()
  
  const getUserInput = () => projectNameInput
  const getTaskNameInput = () => arr
  const getHeaderTodoInput = () => headerTodoInput
  const getProjectDescription = () => projectDescription
  const getNoteInput = () => note
  const getCheckInput = () => checkInput
  // const getTaskInput = () => taskInput
  // document.querySelector('.projectNameInput').value = ''

  return { 
    getUserInput,
    getTaskNameInput,
    getHeaderTodoInput,
    getProjectDescription,
    getNoteInput,
    getCheckInput 
    // getTaskInput 
  }
}

        
function createTaskButtonsDiv(){
  
  // console.log(targetDiv)
  // const currentTodoContainer = document.querySelector('.projectContainer').lastChild.querySelectorAll('.todo')
 // const currentTodoDivContent = document.querySelectorAll('.todoDivContent')
//  console.log(targetDiv) 
  // const currentTodoDivContent = targetDiv.querySelectorAll('.todoDivContent')
  const taskButtonsDiv = document.querySelector('.taskButtonsDiv')
  // taskButtonsDiv.classList.add('taskButtonsDiv')

  const editTodoButton = document.createElement('button')
  editTodoButton.textContent = 'Edit'
  editTodoButton.classList.add('editTodoButton')

  const deleteTask = document.createElement('button')
  deleteTask.textContent = 'Delete Task'
  deleteTask.classList.add('deleteTask')

  const taskPriority = document.createElement('button')
  taskPriority.textContent = 'Priority'
  taskPriority.classList.add('priorityButton')

  const taskStatusButton = document.createElement('button')
  taskStatusButton.textContent = 'Task Status'
  taskStatusButton.classList.add('taskStatusButton')
  
  // console.log(document.querySelector('.currentTaskDiv'))
  // console.log(document.querySelector('.taskButtonsDiv'))
  // console.log(currentTodoDivContent)
  // console.log(document.querySelector('.currentTaskDiv .priority'))
  // document.querySelector('.currentTaskBox .taskButtonsDiv').after(taskButtonsDiv)
  if(taskButtonsDiv){
    taskButtonsDiv.appendChild(editTodoButton)
    taskButtonsDiv.appendChild(deleteTask)
    taskButtonsDiv.appendChild(taskPriority)
    taskButtonsDiv.appendChild(taskStatusButton)
  }
    eventController().runTodoEditButton()
}

function createTodoDescription(currentDiv, e){
  const currentProjectName = document.querySelectorAll('.newProjectName')
  const projects = allProjects().getProjects()
  // console.log('test')
  //  let currentTaskDiv = document.querySelector('.currentTaskDiv')
  const descriptionDiv = document.createElement('div')
  descriptionDiv.classList.add('descriptionDiv')
  if(currentDiv.className == 'todoInput'){
    currentDiv.after(descriptionDiv)
    // console.log(currentDiv)
  } else if(currentDiv.className == 'todoBox'){    
    currentDiv.appendChild(descriptionDiv)
  }

  const descriptionInput = document.createElement('input')
  descriptionInput.classList.add('descriptionInput')
  descriptionInput.placeholder = 'Describe Your Task'
  descriptionDiv.appendChild(descriptionInput)
}

function createTodoNote(currentDiv){
      console.log(currentDiv)
      const todoDivContent = currentDiv.querySelectorAll('.todoDivContent')
      const noteDiv = document.createElement('div')
      noteDiv.classList.add('noteDiv')

      todoDivContent.forEach((container) => {          
          console.log(container.className)       
          container.appendChild(noteDiv)
      })

      if(currentDiv.className == 'todoBox'){
          console.log('hes')
          currentDiv.appendChild(noteDiv)
          currentDiv.querySelector('.noteDiv').style.marginTop = '30px'
      }

      const noteInput = document.createElement('input')
      noteInput.classList.add('noteInput')
      noteInput.placeholder = 'Note On Task'
      noteDiv.appendChild(noteInput)
}

let count = -1
// let projectName = null
function createNewProjectContainer(){

       function taskbuttonNumber(){
        
         const increaseNumber = () => count++
         const getNewCount = () => count
         return { increaseNumber, getNewCount }
       }
    
       taskbuttonNumber().increaseNumber()
       
      
      // console.log(taskbuttonNumber())
      
      
      
        // let currentContainer = document.querySelector('.projectContainer').lastChild;
      const projectInputDiv = document.createElement('div')
      projectInputDiv.classList.add('projectInputDiv')
      document.querySelector('.headerDiv').after(projectInputDiv);

      const newProjectContainer = document.createElement('div');
      newProjectContainer.classList.add('newProjectContainer');
      newProjectContainer.classList.add('actualProject')
      document.querySelector('.projectInputDiv').appendChild(newProjectContainer);
      
      const titleContainer = document.createElement('div')
      titleContainer.classList.add('titleContainer')
      newProjectContainer.appendChild(titleContainer)

      const projectName = document.createElement('h2');
      projectName.classList.add('projectName');
      projectName.textContent = 'Project Name';
      titleContainer.appendChild(projectName);
      
      const cursor = document.createElement('div')
      cursor.classList.add('cursor')
      newProjectContainer.appendChild(cursor)

      const projectNameInput = document.createElement('input');
      projectNameInput.classList.add('projectNameInput');
      cursor.appendChild(projectNameInput);

      const iElement = document.createElement('i')
      cursor.appendChild(iElement)

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
      createNewTodo.textContent = '+';
      todoTitleDiv.appendChild(createNewTodo);   

      const submitProject = document.createElement('button')
      submitProject.classList.add('submitProject');
      submitProject.textContent = 'Submit Project';      
      newProjectContainer.appendChild(submitProject);
      eventController().runSubmitProject()
      
      // eventController().submitTask()

}

function displayProject(){
  if(!document.querySelector('.projectContainer')){
      createNewProjectContainer();      
      // eventController()
  }else {
      createNewProjectContainer();      
  }
}
     
function createTask(currentProjectName, newProjectNameDiv){
   console.log(currentProjectName)
   
  function createInputAndButton(){    

    console.log('hckd')

    const todoInput = document.createElement('input');
    todoInput.classList.add('todoInput');
    todoInput.placeholder = 'New Task'
   
    const targetDiv = this.parentElement.parentElement.parentElement
    const todoDivContent = document.createElement('div')
    todoDivContent.classList.add('todoDivContent')
   // const containers = document.querySelectorAll('.newProjectContainer')
   console.log(targetDiv)
 
    if(document.querySelector('.projectInputDiv')){
      
      this.parentElement.parentElement.appendChild(todoDivContent)
        todoDivContent.appendChild(todoInput)
        createTodoDescription(todoInput)
        createTodoNote(targetDiv)        
        this.remove()
    } else {
      
        // console.log('ran')
        document.querySelector('.todoBoxContainer').lastChild.appendChild(todoDivContent)
        todoDivContent.appendChild(todoInput)
        createTodoDescription(todoInput)
        createTodoNote(targetDiv)
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save Changes'  
        saveButton.classList.add('saveChanges')          
        todoDivContent.appendChild(saveButton)
        eventController().runSaveChanges()
        this.remove()
    }

    if(document.querySelector('.iconDiv')){
  document.querySelector('.iconDiv').style.backgroundColor = 'white'
       document.querySelector('.iconDiv').style.display = 'none'
       document.querySelector('.iconDiv').remove()
     
    } 
    // else{
    //   document.querySelector('.icon').style.display = 'none'
    //   document.querySelector('.icon').remove()
    // }

        // createDate(targetDiv).getDateDiv()
    //} 
  //   else{
  //   //  console.log('no')
  // //    console.log(this.parentElement.parentElement.querySelector('.todoInput'))
  //     if(!document.querySelector('.errorMessage')){ 
  //       // console.log('message')   
  //       console.log(this.parentElement)
  //       this.parentElement.parentElement.querySelector('.todoInput').after(errorMessage())
  //       document.querySelector('.errorMessage').style.marginTop = '3px'
  //       //   this.after(document.querySelector('.todoInput'), errorMessage())
  //       setTimeout(() => {
  //         document.querySelector('.errorMessage').remove()
  //       }, 2000)
  //       }
  //     }
  }

function displayTodo (targetDiv){  
  const projects = allProjects().getProjects()
  // console.log(targetDiv)
//  console.log(projects)
//  console.log(currentProjectName)
let todo = null
let currentTaskBox = document.querySelector('.currentTaskBox')
// console.log(currentProjectName)  
for(let i = 0; i < projects.length; i++){   
   //  console.log(i)

    // if(targetDiv.querySelector('.newProjectName')){
    //   const projectName = targetDiv.querySelector('.newProjectName').textContent   
    //   // console.log(projectName)
      if(projects[i]['project']['projectName'] == currentProjectName){
        // console.log(currentProjectName)
      let currentTask = projects[i]['project']['todos']
      // console.log(currentTask[currentTask.length - 1])
      todo = document.createElement('h4')
      const taskPriority = document.createElement('p')
      taskPriority.textContent = 'Task Priority : '
      taskPriority.classList.add('priority')
    //  console.log(currentTask)
        for(let j = 0; j < currentTask.length; j++){
          let currentTodo = currentTask[j]['title']
          // console.log(currentTodo)
          todo.textContent = currentTodo
          todo.classList.add('todo') 
        }
        // console.log(currentTaskBox)
        // if(currentTaskBox == null){
        //   console.log('yes')
        //   const currentTaskBox = document.createElement('div')
        //   currentTaskBox.classList.add('currentTaskBox')
        //   document.querySelector('.currentTaskDiv').appendChild(currentTaskBox)

        // }
        // console.log(todo)
        if(!todo.textContent == ''){
          // console.log('empty')
           createProjectContainer().createCurrentTaskBox(todo)
        }
        // console.log('todo is displaying fine for now. Go to next error')
          // currentTaskBox.appendChild(todo)
          // currentTaskBox.appendChild(taskPriority)
// console.log(targetDiv)
      // let containers = targetDiv.querySelectorAll('.todoDivContent')
      // console.log(containers)
      // containers.forEach((currentContainer) => {
      // //  console.log(currentContainer)
      // //   console.log(currentContainer.querySelector('.descriptionDiv'))
        
      //       //   if(!currentContainer.querySelector('.taskPriority')){
      //       //  console.log('yes')
      //   //    console.log(currentContainer.querySelector('.todo'))
       
            
      //     // console.log(currentContainer.querySelector('.taskPriortiy'))
      //     // } 


      //     //last code below start here
     
      // if(currentContainer.querySelector('.descriptionDiv')){
      //       currentContainer.querySelector('.descriptionDiv').before(todo)
      //     //  console.log(currentContainer.querySelector('.todo'))
      //     //  console.log(currentContainer.querySelector('.taskButtonsDiv'))
      //  if(currentContainer.querySelector('.todo')){
      //         currentContainer.querySelector('.todo').after(taskPriority)
      //       }
          
      //     // console.log(todo)
      //   //   createDate(currentContainer, projectName, todo).getDateProjectWasCreated()
      //       // addDate(currentContainer).getCreateButton()
      //     }
        
      // //  console.log(targetDiv.querySelector('.descriptionDiv'))
      // }) 
      // const lineBreak = document.createElement('hr')
      // lineBreak.classList.add('lineBreak')
      // targetDiv.querySelector('.todoDiv').lastChild.appendChild(lineBreak)
      createTaskButtonsDiv()
      // console.log(targetDiv)
      // createTodoDescription(targetDiv)
    }
  // }
  }
//last code above end here
  //console.log(todo)
}
    const getInputAndButton = () => createInputAndButton
    const getdisplayTodo = () => displayTodo()

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
    // console.log(projects[i]['project']['projectName'])
    if(projects[i]['project']['projectName'] == projectName){
      currentProjectName = projects[i]['project']['projectName']    
    }
  }
    
  let currentContainer = document.querySelector('.projectContainer');
  if(currentContainer.querySelector('.newProjectName')){
    // console.log('check 1')
    currentContainer.querySelector('.newProjectName').remove()
    currentContainer.querySelector('.titleContainerButtonsDiv').remove()
    let newProjectName = document.createElement('h2')
    newProjectName.classList.add('newProjectName')
    newProjectName.textContent = currentProjectName 
    currentContainer.querySelector('.todoDiv').before(newProjectName)
  
    const titleContainerButtonsDiv = document.createElement('div')
    titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
    
    const editProjectNameButton = document.createElement('button')
    editProjectNameButton.textContent = 'Edit'
    editProjectNameButton.classList.add('editProjectName') 
    
    const deleteProjectButton = document.createElement('button')
    deleteProjectButton.classList.add('deleteProject')
    deleteProjectButton.textContent = 'Delete Project'
    
    currentContainer.querySelector('.newProjectName').after(titleContainerButtonsDiv)
    titleContainerButtonsDiv.appendChild(editProjectNameButton)
    titleContainerButtonsDiv.appendChild(deleteProjectButton)
  }else {
    // console.log('check 2')
    if(document.querySelector('.editProjectName') && document.querySelector('.deleteProject')){
      // console.log('yes it exits')
      // document.querySelector('.editProjectName').remove()
      // document.querySelector('.deleteProject').remove()
      document.querySelector('.titleContainerButtonsDiv').remove()
    } 
    // else {
    //   console.log('no it does not exist')
    // }
    let newProjectName = document.createElement('h2')
    newProjectName.classList.add('newProjectName')
    newProjectName.textContent = currentProjectName 
    currentContainer.querySelector('.todoDiv').before(newProjectName)
   
    const titleContainerButtonsDiv = document.createElement('div')
    titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
  
    const editProjectNameButton = document.createElement('button')
    editProjectNameButton.textContent = 'Edit'
    editProjectNameButton.classList.add('editProjectName') 
    
    const deleteProjectButton = document.createElement('button')
    deleteProjectButton.classList.add('deleteProject')
    deleteProjectButton.textContent = 'Delete Project'
   
    currentContainer.querySelector('.newProjectName').after(titleContainerButtonsDiv)
    titleContainerButtonsDiv.appendChild(editProjectNameButton)
    titleContainerButtonsDiv.appendChild(deleteProjectButton)
    // createProjectContainer().addTodoBox()
  }
  // let newProjectName = document.createElement('h2')
  // newProjectName.classList.add('newProjectName')
  // newProjectName.textContent = currentProjectName 

  // const titleContainerButtonsDiv = document.createElement('div')
  // titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
      
  // const editProjectNameButton = document.createElement('button')
  // editProjectNameButton.textContent = 'Edit'
  // editProjectNameButton.classList.add('editProjectName')     
  
  // const deleteProjectButton = document.createElement('button')
  // deleteProjectButton.classList.add('deleteProject')
  // deleteProjectButton.textContent = 'Delete Project'

  // currentContainer.querySelector('.todoDiv').before(newProjectName)
  // currentContainer.firstChild.appendChild(titleContainerButtonsDiv)
  // titleContainerButtonsDiv.appendChild(editProjectNameButton)
  // titleContainerButtonsDiv.appendChild(deleteProjectButton)
  // console.log(document.querySelector('.newProjectName').textContent)
}


function createDescription (projectName, todo, targetDiv, e){ 
// console.log(projectName)
// console.log(todo)
// console.log(targetDiv)
// console.log(e)
  function descriptionInput () {
     const description = userInput().getProjectDescription()
     addDescriptionToProject(projectName, description, todo)

  }

  function displayDescription (){
   // console.log(projects)
    let projects = allProjects().getProjects()
    let description = document.createElement('p')
    description.classList.add('description')
   // let descriptionContentDiv = targetDiv.querySelectorAll('.descriptionContentDiv')
    let currentTaskBox = document.querySelector('.currentTaskBox')
  
    const descriptionDiv = document.querySelector('.descriptionDiv')
    // descriptionDiv.classList.add('descriptionDiv')
    

    const descriptionHeading = document.createElement('h5')
    descriptionHeading.classList.add('descriptionHeading')
    descriptionHeading.textContent = 'Description'
    descriptionDiv.appendChild(descriptionHeading)

    currentTaskBox.querySelector('.descriptionDiv').appendChild(descriptionHeading)

    const descriptionContentDiv = document.createElement('div')
    descriptionContentDiv.classList.add('descriptionContentDiv')
    currentTaskBox.querySelector('.descriptionDiv').appendChild(descriptionContentDiv)


    // console.log(this)
    // console.log(targetDiv)
    let editDescription = document.createElement('button')
    editDescription.classList.add('editDescription')
    editDescription.textContent = 'Edit'

    // console.log(descriptionContentDiv)
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['project']['projectName'] == projectName){
        // console.log(projectName)
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
        //  console.log(projects[i]['project']['todos'][j]['title'])
        //  console.log(projects[i]['project']['todos'])
          if(projects[i]['project']['todos'][j]['title'] == todo){
            
            description.textContent = projects[i]['project']['todos'][j]['description']     
          }
        }        
       
       descriptionContentDiv.appendChild(description)
       descriptionContentDiv.appendChild(editDescription)
      //  if(document.querySelector('.descriptionInput')){
      //   document.querySelector('.descriptionInput').remove()
      //  }
       
        // descriptionContentDiv.forEach((div) => {
        //   div.appendChild(description)
        //   div.after(editDescription)
        // })
      }
    }
  }

  const getDescriptionInput = () => descriptionInput()
  const getDisplayDescription = () => displayDescription()

  return {
    getDescriptionInput,
    getDisplayDescription
  }
}

function editDescription (){
  // document.body.style.backgroundColor = 'orange'
}

// function editNote(){
//   document.body.style.backgroundColor = 'blue'
// }

function createNote (projectName, note, todo, targetDiv){ 

  function noteInput () {
    //  const note = userInput().getNoteInput()
    //  console.log(note)
     addNoteToProject(projectName, note, todo)
  }
// console.log(document.querySelector('.noteContentDiv'))
  function displayNote (){
   // console.log(projects)
    let projects = allProjects().getProjects()
    let note = document.createElement('p')
    note.classList.add('note')
    let currentTaskBox = document.querySelector('.currentTaskBox')
    
    // let noteDiv = document.createElement('div')
    // noteDiv.classList.add('noteDiv')

    let noteHeading = document.createElement('div')
    noteHeading.classList.add('noteHeading')
    noteHeading.textContent = 'Note'

    let noteContentDiv = document.createElement('div')
    noteContentDiv.classList.add('noteContentDiv')

    let editNote = document.createElement('button')
    editNote.classList.add('editNote')
    editNote.textContent = 'Edit'
 
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['project']['projectName'] == projectName){
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
          if(projects[i]['project']['todos'][j]['title'] == todo){
            note.textContent = projects[i]['project']['todos'][j]['projectNote']            
          }
        }   
        // document.querySelector('.noteInput').remove()     
        // noteContentDiv.forEach((div) => {
        //   div.appendChild(note)
        //   div.after(editNote)
        // })
         
          currentTaskBox.querySelector('.noteDiv').appendChild(noteHeading)
          currentTaskBox.querySelector('.noteDiv').appendChild(noteContentDiv)
          noteContentDiv.appendChild(note)
          noteContentDiv.appendChild(editNote)
      }
    }
  }

  const getNoteInput = () => noteInput()
  const getDisplayNote = () => displayNote()

  return {
    getNoteInput,
    getDisplayNote
  }
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

function updateDropDown (projectName) {
  
  function addProject(){
  const selectProject = document.querySelector('.selectProject')
  let arr = []
  for(let i = 0; i < selectProject.options.length; i++){
  //  console.log(selectProject.options[i].value)
    if(selectProject.options[i].value){
      arr.push(selectProject.options[i].value)
    }
  }
  const projects = allProjects().getProjects()
  // console.log(arr)

    for(let i = 0; i < projects.length; i++){
      // console.log(projects)
     
     if(projects[i]['project']){
// console.log(projects[i]['project']['projectName'])
      if(!arr.includes(projects[i]['project']['projectName'])){
        const options = document.createElement('option')
        options.textContent = `${projects[i]['project']['projectName']}`
        options.value = `${projects[i]['project']['projectName']}`
        selectProject.add(options)
        // console.log(arr)
        //  console.log(selectProject)
      }
     }

    }
  }

  function removeProject(){
    // console.log(projectName)
    const selectProject = document.querySelector('.selectProject')
    if(selectProject){
      for(let i = 0; i < selectProject.options.length; i++){
        if(selectProject[i].value == projectName){
          // console.log(selectProject[i].value)
          // console.log(i)
          selectProject.remove(i)
        }      
      } 
    }
  }

  return {
    addProject,
    removeProject
  }
}


function submitTodo (targetButton) {  
  // console.log(targetButton.target)
// console.log('submit todo')
  if(document.querySelector('.headerTodoInput').value && document.querySelector('.selectProject').value){
    let projects = allProjects().getProjects()
    let selectedProject = document.querySelector('.selectProject').value
    let targetDiv;
    let projectNames = document.querySelectorAll('.spanProjectName')
    let todo = [userInput().getHeaderTodoInput()]
    let arr = []
   // console.log(document.querySelector('.headerTodoInput').value)
    for(let i = 0; i < projects.length; i++){
      
      if(projects[i]['project']['projectName'] == selectedProject){
          for(let j = 0; j < projects[i]['project']['todos'].length; j++){
           // console.log(projects[i]['project']['todos'][j]['title']) 
            arr.push(projects[i]['project']['todos'][j]['title'])
          }
        }
    //  console.log('adding todo to a project after adding todo from header to same project creates an error')
       }
// console.log(arr)
    if(!arr.includes(userInput().getHeaderTodoInput())){
        projectNames.forEach((projectName) => {
          // console.log(projectName)
        if(selectedProject.toLowerCase() == projectName.textContent.toLowerCase()){
            targetDiv = projectName.parentElement.parentElement
          //  console.log(targetDiv)
          // console.log(todo)
          // console.log(projectName.textContent.toLowerCase())
           createProjectContainer(todo, targetButton).addTodoBox(todo, targetButton)
          }
      })

        createTodo(selectedProject, todo).createObject()
        let projects = allProjects().getProjects()
        for(let i = 0; i < projects.length; i++){
          if(projects[i]['project']['projectName'] == selectedProject){
          for(let j = 0; j < projects[i]['project']['todos'].length; j++){
              if(projects[i]['project']['todos'][j]['title'] == todo){
                let currentTodo = document.createElement('h4')
                currentTodo.classList.add('todo')
                currentTodo.textContent = projects[i]['project']['todos'][j]['title']

                // console.log(currentTodo)
                currentTodo.style.marginBottom = '5px'
                const taskButtonsDiv = document.createElement('div')
                taskButtonsDiv.classList.add('taskButtonsDiv')

                const editTodoButton = document.createElement('button')
                editTodoButton.textContent = 'Edit'
                editTodoButton.classList.add('editTodoButton')

                const moreInfoButton = document.createElement('button')
                moreInfoButton.classList.add('addMoreInfo')
                moreInfoButton.textContent = 'Add More Info'

                const todoDivContent = document.createElement('div')
                todoDivContent.classList.add('todoDivContent')

                // targetDiv.querySelector('.todoDiv').appendChild(todoDivContent)
                // todoDivContent.appendChild(currentTodo)
                // todoDivContent.appendChild(taskButtonsDiv)
                // taskButtonsDiv.appendChild(editTodoButton)
                // taskButtonsDiv.appendChild(moreInfoButton)

                // const lineBreak = document.createElement('hr')
                // lineBreak.classList.add('lineBreak')
                // targetDiv.querySelector('.todoDiv').lastChild.appendChild(lineBreak)
                // console.log('checking')
                // console.log(targetButton.parentElement)
              //  console.log(targetDiv)
                // storeData(targetDiv.querySelector('.newProjectName').textContent).editStorage()
                eventController().runAddMoreInfoButton(targetDiv)
                
                // console.log('check 3')
            }
          }
       }
        }

        document.querySelector('.headerTodoInput').value = ''
      } 
      else{         
        todoAlreadyExistMessage(targetButton.target)
        }
    }
    else if(!document.querySelector('.selectProject').value){  
      // console.log('check') 
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
    else if(!document.querySelector('.headerTodoInput').value){
          if(!document.querySelector('.errorMessage')){
            console.log('message')   
          document.querySelector('.headerTodoInput').after(errorMessage())
          document.querySelector('.errorMessage').style.marginTop = '7px'
          setTimeout(() => {
          document.querySelector('.errorMessage').remove()
          }, 2000)  
    }
      }
      // console.log(allProjects().getProjects())
 }

 function addMoreInfo (currentDiv, e) {
   const todoBoxContainer = document.querySelector('.todoBoxContainer').lastChild
  //  console.log('moreInfo')
  //  console.log(e.target.parentElement.parentElement.querySelector('span').textContent)
   todosForProjects(e)
   todoBoxContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    const iconDiv = document.querySelector('.iconDiv')
    console.log(iconDiv)
    const icon = document.createElement('p')
    icon.classList.add('icon')
    icon.textContent = 'Add Below'    
      

    if(!todoBoxContainer.querySelector('.todoDivContent')){
      console.log('it is rni')
      // todoBoxContainer.appendChild(iconDiv)
      iconDiv.appendChild(icon)

    setTimeout(() => {
     icon.remove()
    }, 800)

    setTimeout(() => {
     iconDiv.appendChild(icon)
    }, 1400)

    setTimeout(() => {
     icon.remove()
    }, 2200)

    setTimeout(() => {
     iconDiv.appendChild(icon)
    }, 2800)

    setTimeout(() => {
     icon.remove()
    }, 3700)

    setTimeout(() => {
     iconDiv.appendChild(icon)
    }, 4300)

    setTimeout(() => {
     icon.remove()
    }, 5200)

        setTimeout(() => {
     iconDiv.appendChild(icon)
    }, 5800)

    setTimeout(() => {
     icon.remove()
    }, 6700)
    } 
    // else if(todoBoxContainer.querySelector('.todoDivContent')){
    //   if(todoBoxContainer.querySelector('.icon')){
    //     todoBoxContainer.querySelector('.icon').remove()
    //   }
    // }
    
// console.log(currentDiv.parentElement)
// currentDiv.style.display = 
  // createTodoDescription(currentDiv.parentElement)
  // createTodoNote(currentDiv.parentElement.parentElement)

  // currentDiv.parentElement.querySelector('.todo').style.marginBottom = '15px'

  // createDate(currentDiv.parentElement.parentElement).getDateDiv()
  // const saveButton = document.createElement('button');
  // saveButton.textContent = 'Submit Changes'  
  // saveButton.classList.add('saveNewChanges')          
  // currentDiv.parentElement.querySelector('.lineBreak').before(saveButton)
  
  // currentDiv.parentElement.querySelector('.editTodoButton').remove()
  // currentDiv.parentElement.querySelector('.addMoreInfo').remove()
  // // console.log('check 4')
  // eventController().saveTodoChangesAddedFromHeader()
 }

function createDate(targetDiv, projectName, todo){
// console.log(targetDiv)
// console.log(projectName)
// console.log(todo)
  function createDateDiv (){
    const dateDiv = document.querySelector('.dateDiv')
    // dateDiv.classList.add('dateDiv')
    const currentTaskBox = document.querySelector('.currentTaskBox')
    // console.log(todoDivContents)
    currentTaskBox.querySelector('.descriptionDiv').before(dateDiv)
    currentTaskBox.querySelector('.dateDiv').style.marginBottom = '-10px'
  
  }

 function dateProjectWasCreated(){
      // console.log(projectName)
      // console.log(todo)
      // console.log(projectName)
      const currentDate = document.createElement('p')
      currentDate.classList.add('currentDate')
      let calenderValues;
      const currentTaskBox = document.querySelector('.currentTaskBox')

    //  console.log(todo)
    //  console.log(projectName)
      dateController(projectName, calenderValues, todo)
      // console.log(todo)
      let projects = allProjects().getProjects()
      for (let i = 0; i < projects.length; i++) {
        if (projects[i]['project']['projectName'] == projectName) {
          for(let j = 0; j < projects[i]['project']['todos'].length; j++){
            //  console.log(todo)  
            if(projects[i]['project']['todos'][j]['title'] == todo){
              currentDate.textContent = `Created ${projects[i]['project']['todos'][j].dateCreated}`
              }
          }
        }
      }

      if(currentTaskBox.querySelector('.dateDiv')){
         currentTaskBox.querySelector('.dateDiv').appendChild(currentDate)
      }
      
 }

 const getDateDiv = () => createDateDiv()
 const getDateProjectWasCreated = () => dateProjectWasCreated()

 return {
  getDateDiv,
  getDateProjectWasCreated
 }
}

//  function dateProjectWasCreated(projectName){
// // console.log(projectName)

//       const currentDate = document.createElement('p')
//       currentDate.classList.add('currentDate')
//       let calenderValues;
//       dateController(projectName)
//       let projects = allProjects().getProjects()
//       for (let i = 0; i < projects.length; i++) {
//         if (projects[i]['projectName'] == projectName) {
//        //   console.log(projects[i]['dateCreated'])
//           currentDate.textContent = `Created ${projects[i]['dateCreated']}`
//       //    console.log(projects)
//         }
//       }
//       document.querySelector('.projectContainer').lastChild.querySelector('.dateDiv').appendChild(currentDate)
//  }

 function addDate(targetDiv){
    function addDueDateButton(){    
    const dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('dueDateDiv')

    const addButton = document.createElement('button')
    addButton.textContent = 'Add Due Date'
    addButton.classList.add('dueDateButton')
    // console.log(targetDiv.parentElement)
    const currentTaskDiv = document.querySelector('.currentTaskDiv')
    // console.log(todoDivContent)
    if(currentTaskDiv.querySelector('.dateDiv')){
       currentTaskDiv.querySelector('.currentDate').after(dueDateDiv)
       dueDateDiv.appendChild(addButton)
    }  
    // todoDivsContent.forEach((container) => {
    //   if(!container.querySelector('.dueDateDiv') && container.children.length > 3){
    //   //  console.log(container.querySelector('.dateDiv'))
    //   if(container.querySelector('.dateDiv')){
    //      container.querySelector('.dateDiv').appendChild(dueDateDiv)
    //      dueDateDiv.appendChild(addButton)
    //   }  

    //     //  console.log(allProjects().getProjects())
    //   }
    // })
   // document.querySelector('.projectContainer').lastChild.querySelector('.currentDate').after(dueDateDiv)
   // document.querySelector('.projectContainer').lastChild.querySelector('.dueDateDiv').appendChild(addButton)
    
  }

  function displayCalender(){   
    const calender = document.createElement('input')
    calender.classList.add('calender')
    calender.setAttribute('type', 'date')
    if(!targetDiv.querySelector('.calender')){
        targetDiv.appendChild(calender) 
            // console.log(targetDiv)
    }    
  }

 const getCreateButton = () => addDueDateButton()
 const getDisplayCalender = () => displayCalender()

 return {
    getCreateButton,
    getDisplayCalender
 }
 }

function createSaveDateButton(calender, targetDiv){
  calender.onclick = function(){
    // document.body.style.backgroundColor = 'blue'
    const saveDueDateButton = document.createElement('button')
    saveDueDateButton.classList.add('saveNewDate')
    saveDueDateButton.textContent = 'Save New Date'
   // console.log(this.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
    if(targetDiv.querySelector('.dueDateButton')){
      targetDiv.querySelector('.dueDateButton').after(saveDueDateButton)
      targetDiv.querySelector('.dueDateButton').remove()
    }else if(!targetDiv.querySelector('.saveNewDate')){
    //  console.log(this.parentElement.querySelector('.changeDueDate'))
      if(this.parentElement.querySelector('.changeDueDate')){
          this.parentElement.querySelector('.changeDueDate').before(saveDueDateButton)
          this.parentElement.querySelector('.changeDueDate').remove()
      }      
    }
      eventController().runSaveDueDate()
  // console.log(calender.value)
  }
}

function displayUpdateMessage(targetDiv){
  const dateUpdated = document.createElement('p')
  dateUpdated.classList.add('dateUpdated')
  dateUpdated.textContent = 'Date Updated'
  console.log(targetDiv)
  targetDiv.querySelector('.dueDate').after(dateUpdated)
  setTimeout(() => {
   dateUpdated.remove()
  }, 1000)
}

function todoAlreadyExistMessage(targetButton){
  console.log(targetButton)
  // console.log(targetButton.className)
  const errorMessage = document.createElement('p')
  errorMessage.textContent = 'This Todo name already exist for this project'
  errorMessage.classList.add('errorMessage')

  errorMessage.style.marginTop = '7px'

  if(targetButton.className == 'todoSubmitButton'){
      const headerAddToProjectDiv = document.querySelector('.headerAddToProjectDiv')
      headerAddToProjectDiv.appendChild(errorMessage)
  }else if(targetButton.className == 'saveChanges'){
    //  console.log(targetButton.parentElement.querySelector('.todoInput'))
      targetButton.parentElement.querySelector('.todoInput').after(errorMessage)
  }
    

  setTimeout(() => {
  errorMessage.remove()
  }, 3000) 
}

function deleteTask(e){  
  document.body.style.backgroundColor = 'orange'
  // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
  let currentContainer  = null
  let currentTodo = null
  // console.log(e.target.parentElement.parentElement.querySelector('.spanTaskName'))
  if(e.target.parentElement.parentElement.className == 'todoBox'){
    currentContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    currentTodo = e.target.parentElement.parentElement.querySelector('.spanTaskName')
  }else{    
    currentContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
    currentTodo = e.target.parentElement.parentElement.parentElement.querySelector('.todo')
  }
  // console.log(currentContainer)
  // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
  // const currentContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
  // const currentTodo = e.target.parentElement.parentElement.querySelector('.spanTaskName')
  const todoText = currentTodo.textContent
  // console.log(currentContainer)
  // console.log(currentTodo)
  // console.log(todoText)
  removeTaskFromArray(currentContainer.querySelector('.newProjectName').textContent, currentTodo.textContent)
  // const todoBoxContainer = document.querySelector('.todoBoxContainer')
  const taskNames = document.querySelectorAll('.spanTaskName')
  taskNames.forEach((taskName)=> {
    // console.log(taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox'))
    // console.log('next stop when edit is done on current task it should also update on tasksDiv')
    // console.log(taskName.parentElement.parentElement)
    // console.log(taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox'))
    if(taskName.textContent == todoText){
      // console.log(todoText)
      if(e.target.parentElement.parentElement.className == 'todoBox'){
        // console.log(taskName.textContent)
        // console.log(taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox .todo').textContent)
        if(taskName.parentElement.parentElement && taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox')){
          // console.log('yes we do')
        if(taskName.textContent == taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox .todo').textContent){
          taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox').remove()
        }
          taskName.parentElement.parentElement.remove()
        }else if(!taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox')){
          taskName.parentElement.parentElement.remove()
        }

        // console.log('check')
      }else{
        // console.log('check 2')
        if(taskName.textContent == taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox .todo').textContent){
           taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.currentTaskBox').remove()
        }
        taskName.parentElement.parentElement.remove()
      } 
     // console.log(allProjects().getProjects())     
    }
  })

  // currentTodo.parentElement.remove()
 // storeData(currentContainer).editStorage()
//  console.log(allProjects().getProjects())
}

function addTaskPriority(e){
  // document.body.style.backgroundColor = 'blue'
  // console.log(e.target.parentElement.parentElement)
  const projects = allProjects().getProjects()
  const currentProjectName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
  const todo = e.target.parentElement.parentElement.querySelector('.todo').textContent
  const taskPriority = e.target.parentElement.parentElement.querySelector('.priority')
  console.log(taskPriority)
  projectPriorityController(currentProjectName, todo).addPriorityToProject()
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['project']['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['project']['todos'].length; j++ ){
          if(projects[i]['project']['todos'][j]['title'] == todo){
            // console.log(projects[i]['todos'][j]['taskPriority'])
            taskPriority.textContent = `Task Priority : ${projects[i]['project']['todos'][j]['taskPriority']}`
            const taskNames = document.querySelectorAll('.spanTaskName')
            taskNames.forEach((taskName)=> {       
              console.log(taskName.parentElement.querySelector('.taskPriority'))
              const currentPriorityDiv = taskName.parentElement.parentElement.querySelector('.taskPriority')
              //const priorityText = currentTodo.textContent        
              if(taskName.textContent == todo){
                // taskName.textContent = `Task Name : ${todoText}`          
              // console.log('yes')
              //console.log(taskName.parentElement.querySelector('.taskPriority'))
              const todoTaskPriority = taskName.parenntElement.parentElement.querySelector('.taskPriority')
              todoTaskPriority.textContent = `Task Priority : ${projects[i]['project']['todos'][j]['taskPriority']}`
             // taskName.after(`Task Priority : ${taskPriority}`)
            if(taskPriority.textContent == 'Task Priority : High'){
              taskPriority.classList.add('high')
              currentPriorityDiv.classList.add('high')
              taskPriority.classList.remove('low')
              taskPriority.classList.remove('extreme')
              currentPriorityDiv.classList.remove('low')
              currentPriorityDiv.classList.remove('extreme')
            }else if(taskPriority.textContent  == 'Task Priority : Low'){
              taskPriority.classList.add('low')
              currentPriorityDiv.classList.add('low')
              taskPriority.classList.remove('extreme')
              taskPriority.classList.remove('high')
              currentPriorityDiv.classList.remove('extreme')
              currentPriorityDiv.classList.remove('high')
            }
            else if(taskPriority.classList.add('extreme') || currentPriorityDiv.classList.add('extreme')){
              console.log('check')
              taskPriority.classList.add('extreme')              
              currentPriorityDiv.classList.add('extreme')
              taskPriority.classList.remove('low')
              taskPriority.classList.remove('high')  
              currentPriorityDiv.classList.remove('high')           
              currentPriorityDiv.classList.remove('low')           
            }
            
            }
            })
            console.log(document.querySelector('.taskPriority').textContent)
         //  document.querySelector('.taskPriority').classList.add('low')
            // if(document.querySelector('.taskPriority') == `Task Priority : Not Specified`){
            //   console.log('yes')
            //   document.querySelector('.taskPriority').classList.add('low')
            // }
       
          }
       }
    }
  }
//storeData(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent).editStorage()
}

function addTaskStatus(currentProjectName, e){
  // document.body.style.backgroundColor = 'orange'
  const todo = e.target.parentElement.parentElement.querySelector('.todo')
  const priority = e.target.parentElement.parentElement.querySelector('.priority')
  
  let statusText = 'Not Completed'
  if(!e.target.parentElement.parentElement.querySelector('.statusText')){
      const statusText = document.createElement('p')
      statusText.textContent = 'Completed'
      statusText.classList.add('statusText')
      todo.after(statusText)
  } else {
      e.target.parentElement.parentElement.querySelector('.statusText').remove()
  }
  document.body.style.backgroundColor = 'blue'
  const taskNames = document.querySelectorAll('.spanTaskName')
  // console.log(document.querySelector('.statusText'))
 
  if(document.querySelector('.statusText')){
     statusText = document.querySelector('.statusText').textContent
  }else if(document.querySelector('.statusText') == null){
    statusText = 'Not Completed'
  }
  taskNames.forEach((taskName)=> {       
   const todoText = todo.textContent        
   if(taskName.textContent == todoText){
      // taskName.textContent = `Task Name : ${todoText}`       
      if(taskName.parentElement.parentElement.querySelector('.todoBox .taskStatus').textContent == 'Task Status : Not Completed'){
        taskName.parentElement.parentElement.querySelector('.todoBox .taskStatus').textContent = `Task Status : ${statusText}`
      } else {
         taskName.parentElement.parentElement.querySelector('.todoBox .taskStatus').textContent = `Task Status : Not Completed`
      }
      // console.log('it is')         
   }
  })
  storeData(currentProjectName).editStorage()
}

function createCheckList(targetDiv, formDiv){
  // let currentDiv = null
  // console.log(targetDiv)
  let currentTaskBox = document.querySelector('.currentTaskDiv')
  function createContainer(){
    // document.body.style.backgroundColor = 'orange'
    // currentDiv = targetDiv
    // console.log('checklist')
    const currentTaskDiv = document.querySelector('.currentTaskDiv')
    const checkListContainer = currentTaskBox.querySelector('.checkListContainer')
    // checkListContainer.classList.add('checkListContainer')
  //  console.log(currentTaskBox.querySelector('.checkListContainer'))
    const checkListHeaderContainer = document.querySelector('.checkListHeaderContainer')
    const checkListHeading = document.querySelector('.checkListHeading')
    const addCheckListFormButton = document.querySelector('.addCheckListFormButton')
    checkListHeaderContainer.classList.add('checkListHeaderContainer')

    // const checkListHeading = document.createElement('h5') 
    // checkListHeading.classList.add('checkListHeading')         
    // checkListHeading.textContent = 'Todo Checklist'

    // const addCheckListFormButton = document.createElement('button')
    // addCheckListFormButton.classList.add('addCheckListFormButton')
    // addCheckListFormButton.textContent = 'Add'

    // console.log('test')
    currentTaskDiv.querySelector('.currentTaskBox').appendChild(checkListContainer)
   // console.log(currentTaskDiv.querySelector('.currentTaskBox'))

    // currentTaskDiv.querySelector('.currentTaskBox').forEach((todoDivContainer) => {
      // console.log(todoDivContainer.querySelector('.lineBreak'))
      if(!currentTaskDiv.querySelector('.currentTaskBox').querySelector('.checkListContainer')){
      // console.log('check if running')
        if(currentTaskDiv.querySelector('.currentTaskBox').querySelector('.saveNewChanges')){
        // console.log('confirm if running')
          currentTaskDiv.querySelector('.currentTaskBox').querySelector('.saveNewChanges').before(checkListContainer)
          // console.log('start from here')
          /*
          no checklist adding when adding project. it adds only when todo
          is added from header
          */
        } else{
         // console.log(todoDivContainer)
      //   todoDivContainer.querySelector('.lineBreak').before(checkListContainer)
        }
      }     
    // })

    checkListContainer.appendChild(checkListHeaderContainer)
    checkListHeaderContainer.appendChild(checkListHeading)
    checkListHeaderContainer.appendChild(addCheckListFormButton)
    // console.log(targetDiv)

    // console.log(projectName)
    // console.log('testing')
  }


  function addCheckListForm(targetButton){
    document.body.style.backgroundColor = 'pink'
    //console.log(targetButton)
    const checkListContainer = targetButton.parentElement.parentElement.parentElement.querySelector('.checkListContainer')
  
   // console.log(targetButton.parentElement.parentElement.querySelector('.checkListContainer'))
   // console.log(targetButton.parentElement.parentElement)
    if(!targetButton.parentElement.parentElement.querySelector('.checkListForm')){
      // console.log(targetButton.parentElement)
      const checkListForm = document.createElement('form')
       checkListForm.classList.add(`checkListForm`)
       if(targetButton.parentElement.classList == 'checkListContainer'){
        targetButton.parentElement.appendChild(checkListForm)
       }else {
        targetButton.parentElement.parentElement.appendChild(checkListForm)
       }
       
     //  console.log(document.querySelector('.checkListContainer'))
      // console.log('form added cus no form')
       const checkListDiv = document.createElement('div')
       checkListDiv.classList.add('checkListDiv')

       const checkListInputDiv = document.createElement('div')
       checkListInputDiv.classList.add('checkListInputDiv')

       const checkListInput = document.createElement('input')
       checkListInput.classList.add('checkListInput')

       const addItemButton = document.createElement('button')
       addItemButton.classList.add('addItemButton')
       addItemButton.textContent = 'Add'

      //  const saveButton = document.createElement('button');
      //  saveButton.textContent = 'Save Checklist'  
      //  saveButton.classList.add('saveChanges') 
   
       checkListForm.appendChild(checkListDiv)
       checkListForm.appendChild(checkListInputDiv)
       checkListInputDiv.appendChild(checkListInput)
       checkListInputDiv.appendChild(addItemButton)
       const currentContainer = targetButton.parentElement.parentElement.parentElement.parentElement.parentElement
      //  checkListForm.appendChild(saveButton)
       targetButton.parentElement.parentElement.querySelector('.addCheckListFormButton').remove()
       
      } else if(targetButton.parentElement.parentElement.querySelector('.checkListForm')){
       const checkListInputDiv = document.createElement('div')
       checkListInputDiv.classList.add('checkListInputDiv')
        // console.log('there is already form')
       const checkListInput = document.createElement('input')
       checkListInput.classList.add('checkListInput')

       const addItemButton = document.createElement('button')
       addItemButton.classList.add('addItemButton')
       addItemButton.textContent = 'Add'

       const saveButton = document.createElement('button');
       saveButton.textContent = 'Save Checklist'  
       saveButton.classList.add('saveChanges') 
      // targetButton.parentElement.parentElement.querySelector('.checkListForm').appendChild(checkListInputDiv))
       const checkListForm =   targetButton.parentElement.parentElement.querySelector('.checkListForm')
       
       //targetButton.parentElement.parentElement.appendChild(checkListForm)
       checkListForm.appendChild(checkListInputDiv)
       checkListInputDiv.appendChild(checkListInput)
       checkListInputDiv.appendChild(addItemButton)
       checkListForm.appendChild(saveButton)
       targetButton.parentElement.querySelector('.addCheckListFormButton').remove()
     
      //  console.log(targetButton)
      }
          // console.log(allProjects().getProjects())
  }

  function addCheckItem(targetButton){
    // document.body.style.backgroundColor = 'orange'
    let checkInput;
    // console.log(targetButton.parentElement.querySelector('checkListInput'))
    // console.log(userInput(targetButton.parentElement.querySelector('.checkListInput')).getCheckInput())
    if(targetButton.parentElement.querySelector('.checkListInput').value !== ''){
       // console.log('check item')
       checkInput = userInput(targetButton.parentElement.querySelector('.checkListInput')).getCheckInput()
       targetButton.parentElement.querySelector('.checkListInput').value = ''
      //  console.log(checkInput)
      // console.log( targetButton.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent)
       const todo = targetButton.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent
       const currentProjectName = targetButton.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
      //  console.log(currentProjectName)
      //  console.log(todo)
      //  console.log(checkInput)
       createTodoCheckList(currentProjectName, todo, checkInput)
       let projects = allProjects().getProjects()
      //  console.log(projects)
       let value;
       for(let i = 0; i < projects.length; i++){
        if(projects[i]['project']['projectName'] == currentProjectName){
          for(let j = 0; j < projects[i]['project']['todos'].length; j++){
            if(projects[i]['project']['todos'][j]['title'] == todo){
            //  console.log('yes')
              //  console.log(projects[i]['todos'][j]['checkList'])
              if(projects[i]['project']['todos'][j]['checkList'].hasOwnProperty(`${checkInput}`)){
             //  console.log(checkInput)
                value = checkInput
               
              }
            }
          }
              const checkListItem = document.createElement('input')
              checkListItem.setAttribute('type', 'checkbox')
              checkListItem.classList.add('checkListItem')
            //  console.log(value)
              const label = document.createElement('label')
              label.classList.add('checkItem')
              label.textContent = value

              const checkDivs = document.createElement('div')
              checkDivs.classList.add('checkDivs')

              const checkDiv = document.createElement('div')
              checkDiv.classList.add('checkDiv')

              targetButton.parentElement.parentElement.querySelector('.checkListDiv').appendChild(checkDiv)
              // checkDivs.appendChild(checkDiv)
              checkDiv.appendChild(checkListItem)
              checkDiv.appendChild(label)
              // checkDiv.querySelector('.checkListItem').remove()
              eventController().runCheckListStatus()
              // console.log(targetButton)
    //       storeData().populateStorage()
              // console.log(allProjects().getProjects())
        }
       }
       if(!targetButton.parentElement.parentElement.parentElement.querySelector('.saveChanges')){
        
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Checklist'  
          saveButton.classList.add('saveChanges') 
          targetButton.parentElement.parentElement.appendChild(saveButton)
          eventController().runSaveChanges()
        }
      //  console.log(todo)
      }else{
        // if checklist input field is empty and you plan to submit 
        // second project, error message appears
        // create an error message here if input is empty
      //  console.log('nope')
        if(!targetButton.parentElement.querySelector('.errorMessage')){
           targetButton.parentElement.querySelector('.checkListInput').after(errorMessage())
           targetButton.parentElement.querySelector('.errorMessage').style.marginTop = '23px'
        //   this.after(document.querySelector('.todoInput'), errorMessage())
          if(targetButton.parentElement.querySelector('.errorMessage')){
             setTimeout(() => {
               document.querySelector('.errorMessage').remove()
            }, 2000)
          }
        }
      }   
  }

  function saveCheckList(targetDiv){
 //  console.log('test save checklist')
 //  console.log(targetDiv)
   // console.log(targetDiv.parentElement.parentElement.parentElement.parentElement)
   const checkListHeaderContainer = targetDiv.parentElement.parentElement.querySelector('.checkListHeaderContainer')
   
   if(!checkListHeaderContainer.querySelector('.addCheckListFormButton')){
      const addCheckListFormButton = document.createElement('button')
      addCheckListFormButton.classList.add('addCheckListFormButton')
      addCheckListFormButton.textContent = 'Add'
  //    console.log(checkListHeaderContainer)
      checkListHeaderContainer.querySelector('.checkListHeading').after(addCheckListFormButton)
    }    
    // console.log(targetDiv)
    targetDiv.querySelector('.saveChanges').remove()  
    if(targetDiv.querySelector('.checkListInputDiv')){
       targetDiv.querySelector('.checkListInputDiv').remove() 
    }
     
    // targetDiv.querySelector('.checkDiv').classList.add('checkDivAdjust')
    // targetDiv.querySelector('.checkDiv').classList.remove('checkDiv')
    eventController().runCreateCheckList()
   // storeData(targetDiv.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent).editStorage()
  //  console.log(allProjects().getProjects())
  }

  function checkListStatus(targetDiv){
    // console.log('checkListStatus')
    document.body.style.backgroundColor = 'white'
    // console.log(e)
    // console.log(targetDiv)
    const targetButton = targetDiv.parentElement.parentElement
    const checkListForm = targetButton.parentElement.parentElement.querySelector('.checkListForm')
    
    if(!checkListForm.querySelector('.saveChanges')){
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save Checklist'  
        saveButton.classList.add('saveChanges') 
        checkListForm.appendChild(saveButton)
        eventController().runSaveChanges()
    }
  }

  return {
    createContainer,
    addCheckListForm,
    addCheckItem,
    saveCheckList,
    checkListStatus
  }
}

function projectsBoxDivTitle(e){
  // console.log(button)
  let className = e.target.classList
  if(className == 'allProjects'){
    // console.log('allProjects')
    document.querySelector('.projectTitle').textContent = 'All Projects'
    document.querySelector('.projectsBox').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }else if(className == 'completedProjects'){
    // console.log('completedProjects')
    console.log('disable all buttons here')
    console.log('maybe add something to activate them back or do something maybe inform them that to edit they need to go to allProjects or something')
    displayAllProjects(e)
    document.querySelector('.projectTitle').textContent = 'Completed Projects'
    document.querySelector('.projectsBox').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }else if(className == 'unCompletedProjects'){
    displayAllProjects(e)
    document.querySelector('.projectTitle').textContent = 'UnCompleted Projects'
      document.querySelector('.projectsBox').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
  }
}

let increment = (function idIncrement(value){
  const projects = allProjects().getProjects()
 //  console.log(allProjects().getProjects()[allProjects().getProjects().length - 1])
  return function increaseValue(){
    value += 1 
    return value
  }
}(Number(allProjects().getProjects()[allProjects().getProjects().length - 1]['project ID'])))
// console.log(Number(localStorage.key(localStorage.length - 1)))
function storeData (currentProjectName){
  let projects = allProjects().getProjects()
  // console.log(projects)
  // console.log(currentProjectName)
  // console.log(projects[projects.length - 1]['project ID'])
  // console.log(projects.length)
  function populateStorage(){
    for(let i = 0; i < projects.length; i++){       
      if(projects[i]['project']['projectName'] == currentProjectName){
        if(typeof projects[i]['project']['todos'] == 'object'){
        // console.log(i) 
        // console.log('check a') 
         // localStorage.setItem(`${increment()}`, JSON.stringify(projects[i]))
        }else if (typeof projects[i]['project']['todos'] == 'string'){
          // console.log('check b') 
        //  localStorage.setItem(`${projects[i]['project']['projectName']}`, projects[i]['project']['todos'])
        }
      }
    } 
    setStyles()
  }
  function editStorage(){
    for(let i = 0; i < projects.length; i++){       
      if(projects[i]['project']['projectName'] == currentProjectName){
        // if(typeof projects[i]['project']['todos'] == 'object'){
        // // console.log(i) 
        // console.log('check c') 
          // console.log(projects[i]) 
       //   localStorage.setItem(`${projects[i]['project ID']}`, JSON.stringify(projects[i]))
        
        // else if (typeof projects[i]['project']['todos'] == 'string'){
        //   console.log('check d') 
        //   localStorage.setItem(`${projects[i]['project']['projectName']}`, projects[i]['project']['todos'])
        // }
      }
    } 
    setStyles()
  }

  function setStyles(){
     const currentTitle = localStorage.getItem('projectTitle')
   
    // const currentColor = localStorage.getItem('bgcolor')
   // document.body.style.backgroundColor = currentColor
  
   if(document.querySelector('.actualProject')){
    document.querySelector('.actualProject .projectName').textContent = currentTitle    
   }
   else {
    let storedProject = []
    for(let i = 0; i < localStorage.length; i++){
      let newProject = {}
      newProject['project ID'] = localStorage.key(i)
      newProject.project = {}
      newProject.project['projectName'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['projectName']
      newProject.project['todos'] = JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['todos']
      // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))['project']['projectName'])
      storedProject.push(newProject)
    }

    const sortedProjects = storedProject.slice(0)
    sortedProjects.sort(function(a,b){
      return a['project ID'] - b['project ID']
    })
    // console.log(sortedProjects)
    for(let i = 0; i < sortedProjects.length; i++){

        const newProjectContainer = document.createElement('div')
        newProjectContainer.classList.add('newProjectContainer')
        newProjectContainer.classList.add('actualProject')

        const projectName = document.createElement('h2')
        projectName.textContent = 'Project Name'
        projectName.classList.add('projectName') 
        
        const titleContainer = document.createElement('div')
        titleContainer.classList.add('titleContainer')

        const titleContainerButtonsDiv = document.createElement('div')
        titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')

        const editProjectName = document.createElement('button')
        editProjectName.classList.add('editProjectName')
        editProjectName.textContent = 'Edit'

        const deleteProject = document.createElement('button')
        deleteProject.classList.add('deleteProject')
        deleteProject.textContent = 'Delete Project'

        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todoDiv')

        const todoDivTitle = document.createElement('div')
        todoDivTitle.classList.add('todoDivTitle')

        const task = document.createElement('h3')
        task.classList.add('task')
        task.textContent = 'Task'

        const createNewTodoButton = document.createElement('button')
        createNewTodoButton.classList.add('createNewTodo')
        createNewTodoButton.textContent = 'Add Todo'
        // console.log(sortedProjects[i])
        let newArray = sortedProjects[i]['project']['todos']
        // console.log(newArray)
        document.querySelector('.projectContainer').appendChild(newProjectContainer)
        let newk = null

        const newProjectName = document.createElement('h2')
        newProjectName.classList.add('newProjectName')
        newProjectName.textContent = sortedProjects[i]['project']['projectName']
      // console.log(storedProject[i]['project']['projectName'])
        const projectContainers = document.querySelectorAll('.actualProject')
      // console.log(projectContainers)
        projectContainers.forEach((projectContainer) => {
        if(!projectContainer.querySelector('.titleContainer')){
          
          projectContainer.appendChild(titleContainer)
          
          titleContainer.appendChild(projectName) 
          titleContainer.appendChild(newProjectName)
          titleContainer.appendChild(titleContainerButtonsDiv)
          
          titleContainerButtonsDiv.appendChild(editProjectName)
          titleContainerButtonsDiv.appendChild(deleteProject)
          
          projectContainer.appendChild(todoDiv)
          
          todoDiv.append(todoDivTitle)
          todoDivTitle.append(task)
          todoDivTitle.append(createNewTodoButton) 

          for(let j = 0; j < newArray.length; j++){
            const todoDivContent = document.createElement('div')
            todoDivContent.classList.add('todoDivContent')
            // console.log(todoDivContent)
            const todo = document.createElement('h4')
            todo.classList.add('todo')
            todo.textContent = newArray[j]['title']

            const statusText = document.createElement('p')
            statusText.classList.add('statusText')    

            const priority = document.createElement('p')
            priority.classList.add('priority')
            if(!newArray[j]['taskPriority']){
              priority.textContent = 'Task Priority : '
            }else{
              priority.textContent = 'Task Priority : ' + `${newArray[j]['taskPriority']}`
            }
            const taskButtonsDiv = document.createElement('div')
            taskButtonsDiv.classList.add('taskButtonsDiv')

            const editTodoButton = document.createElement('button')
            editTodoButton.classList.add('editTodoButton')
            editTodoButton.textContent = 'Edit task'

            const deleteTask = document.createElement('button')
            deleteTask.classList.add('deleteTask')
            deleteTask.textContent = 'Delete'

            const priorityButton = document.createElement('button')
            priorityButton.classList.add('priorityButton')
            priorityButton.textContent = 'Priority'

            const taskStatusButton = document.createElement('button')
            taskStatusButton.classList.add('taskStatusButton')
            taskStatusButton.textContent = 'Task Status'

            const dateDiv = document.createElement('div')
            dateDiv.classList.add('dateDiv')

            const currentDate = document.createElement('p')
            currentDate.classList.add ('currentDate')
            currentDate.textContent = `Created ${newArray[j]['dateCreated']}`

            const dueDateDiv = document.createElement('div')
            dueDateDiv.classList.add('dueDateDiv')

            const dueDateButton = document.createElement('button')
            dueDateButton.classList.add('dueDateButton')
            dueDateButton.textContent = 'Add Due Date'

            const descriptionDiv = document.createElement('div')
            descriptionDiv.classList.add('descriptionDiv')

            const descriptionHeading = document.createElement('h5')
            descriptionHeading.classList.add('descriptionHeading')
            descriptionHeading.textContent = ''

            const descriptionContentDiv = document.createElement('div')
            descriptionContentDiv.classList.add('descriptionContentDiv')

            const description = document.createElement('p')
            description.classList.add('description')
            description.textContent = newArray[j]['description']

            const editDescription = document.createElement('button')
            editDescription.classList.add('editDescription')
            editDescription.textContent = 'Edit'

            const noteDiv = document.createElement('div')
            noteDiv.classList.add('noteDiv')

            const noteHeading = document.createElement('h5')
            noteHeading.classList.add('noteHeading')
            noteHeading.textContent = ''

            const noteContentDiv = document.createElement('div')
            noteContentDiv.classList.add('noteContentDiv')

            const note = document.createElement('p')
            note.classList.add('note')
            note.textContent = newArray[j]['projectNote']

            const editNote = document.createElement('button')
            editNote.classList.add('editNote')
            editNote.textContent = 'Edit'

            const checkListContainer = document.createElement('div')
            checkListContainer.classList.add('checkListContainer')
        
            const checkListHeaderContainer = document.createElement('div')
            checkListHeaderContainer.classList.add('checkListHeaderContainer')

            const checkListHeading = document.createElement('p')
            checkListHeading.classList.add('checkListHeading')
            checkListHeading.textContent = 'Todo CheckList'

            const addCheckListFormButton = document.createElement('button')
            addCheckListFormButton.classList.add('addCheckListFormButton')
            addCheckListFormButton.textContent = 'Add'

            const checkListForm = document.createElement('form')
            checkListForm.classList.add('checkListForm')

            const checkListDiv = document.createElement('div')
            checkListDiv.classList.add('checkListDiv')
        
        // console.log(newArray[j]['checkList'])
            for(let prop in newArray[j]['checkList']){
                const checkDiv = document.createElement('div')
                checkDiv.classList.add('checkDiv')
                
                const checkListItem = document.createElement('input')
                checkListItem.setAttribute('type', 'checkbox')
                checkListItem.classList.add('checkListItem')
                const label = document.createElement('label')
                label.classList.add('checkItem')
                label.textContent = prop
                
                // console.log(newArray[j]['checkList'][prop])
                if(newArray[j]['checkList'][prop] == 'Complete'){
                  checkListItem.checked = true
                  // console.log(newArray[j]['checkList'][prop])
                }else if(newArray[j]['checkList'][prop] == 'Incomplete'){
                  checkListItem.checked = false
                  // console.log(newArray[j]['checkList'][prop])
                }
                checkListDiv.appendChild(checkDiv)
                checkDiv.appendChild(checkListItem)
                checkDiv.appendChild(label)
            }
        const checkDiv = document.createElement('div')
        checkDiv.classList.add('checkDiv')

        const lineBreak = document.createElement('hr')
        lineBreak.classList.add('lineBreak')        

        todoDiv.appendChild(todoDivContent)
        todoDivContent.appendChild(todo)

        if(newArray[j]['taskStatus'] == 'Completed'){
          statusText.textContent = newArray[j]['taskStatus']
          todoDivContent.appendChild(statusText)
        }
        
        todoDivContent.appendChild(priority)
        todoDivContent.appendChild(taskButtonsDiv)

        taskButtonsDiv.appendChild(editTodoButton)
        taskButtonsDiv.appendChild(deleteTask)
        taskButtonsDiv.appendChild(priorityButton)
        taskButtonsDiv.appendChild(taskStatusButton)

        todoDivContent.appendChild(dateDiv)
        
        if(newArray[j]['dueDate']){
          const dueDate = document.createElement('p')
          dueDate.classList.add('dueDate')
          dueDate.textContent = `Due Date is ${newArray[j]['dueDate']}`
          dueDateDiv.appendChild(dueDate)
          dueDateButton.textContent = 'Change Date'
        }

        dateDiv.appendChild(currentDate)
        dateDiv.appendChild(dueDateDiv)
        dueDateDiv.appendChild(dueDateButton)

        todoDivContent.appendChild(descriptionDiv)
        descriptionDiv.appendChild(descriptionHeading)
        descriptionDiv.appendChild(descriptionContentDiv)
        descriptionContentDiv.appendChild(description)
        descriptionDiv.appendChild(editDescription)

        todoDivContent.appendChild(noteDiv)
        noteDiv.appendChild(noteHeading)
        noteDiv.appendChild(noteContentDiv)
        noteContentDiv.appendChild(note)
        noteDiv.appendChild(editNote)

        todoDivContent.appendChild(checkListContainer)
        checkListContainer.appendChild(checkListHeaderContainer)
        checkListHeaderContainer.appendChild(checkListHeading)
        checkListHeaderContainer.appendChild(addCheckListFormButton)
        checkListContainer.appendChild(checkListForm)
        checkListForm.appendChild(checkListDiv)
        // checkListDiv.appendChild(checkDiv)
        todoDivContent.appendChild(lineBreak)
    }

    eventController().runEditButton()
    eventController().runDeleteProject()
    eventController().runCreateTaskButton()
    eventController().runTodoEditButton()
    eventController().runDeleteTask()
    eventController().runAddTaskPriority()
    eventController().runAddTaskStatus()
    eventController().runCalenderButton()
    eventController().runEditDescription()
    eventController().runEditNote()
    eventController().runCreateCheckList()
    eventController().runCheckListStatus()
  }
  })
  }  
// console.log(arr)    // document.querySelector('.actualProject .projectName').textContent = localStorage.key(0)
  //  document.querySelector('.projectName').style.fontSize = '2.5rem' 
  }  
  }

  

  return {
    populateStorage,
    editStorage,
    setStyles
  }

// projectName.onchange = populateStorage
}

// function addTodoBox (todo) {
//   const todoBoxDiv = document.createElement('div')
//   todoBoxDiv.classList.add('todoBox')
//   document.querySelector('.taskDiv').appendChild(todoBoxDiv)
//   console.log(todo)
//   if(todo == undefined){
//     const createNewTodo = document.createElement('button');
//     createNewTodo.classList.add('createNewTodo');
//     createNewTodo.textContent = '+';
//     todoBoxDiv.appendChild(createNewTodo)
//     eventController().runCreateTaskButton()
//   }else if(todo){
//     console.log('yes there is todo')
//   }

// }

function displayAllProjects (e){
  // console.log(e)
  let projects = allProjects().getProjects()
//  console.log(projects)
  // document.body.style.backgroundColor = 'blue'
  document.querySelector('.projectsBox').remove()
  let projectsBox = document.createElement('div')
  projectsBox.classList.add('projectsBox')
  document.querySelector('.projectsBoxDiv').appendChild(projectsBox)
// console.log(projects)
  

  function checkCompletedProjects(){
    let projects = allProjects().getProjects()
    let arr = projects.filter(value1 => {
      if(value1['project']['project status'] == 'InComplete'){
        return (value1['project']['project status'])
      }else if(value1['project']['project status'] == 'Completed'){
        return (value1['project']['project status'])
      }
    }).map(value => {
     return value['project']['project status']
    })
   return arr
  }
  
  for(let i = projects.length - 1; i >= 0; i--){       
    let currentProject = projects[i]
    let projectsBoxItems = document.createElement('div')
    projectsBoxItems.classList.add('projectsBoxItems')
    
    let spanElementProjectName = document.createElement('span')
    spanElementProjectName.classList.add('spanProjectName')

    let currentProjectStatusText = document.createElement('p')
    currentProjectStatusText.classList.add('nameProject')
    currentProjectStatusText.textContent = 'Project :'
    
    let dateCreatedProjectText = document.createElement('p')
    dateCreatedProjectText.classList.add('dateCreatedProject')
    dateCreatedProjectText.textContent = `Date Created : `

    let spanElementDateCreated = document.createElement('span')
    spanElementDateCreated.classList.add('spanElementDateCreated')
    
    let dueDateProjectText = document.createElement('p')
    dueDateProjectText.classList.add('dueDateProjectText')
    dueDateProjectText.textContent = `Due Date : `

    let spanDueDateProject = document.createElement('span')
    spanDueDateProject.classList.add('spanDueDateProject')

    let projectStatusText = document.createElement('p')
    projectStatusText.classList.add('projectStatusText')
    projectStatusText.textContent = `Project Status :`

    let spanProjectStatus = document.createElement('span')
    spanProjectStatus.classList.add('spanProjectStatus')

    let projectBoxButtonsDiv = document.createElement('div')
    projectBoxButtonsDiv.classList.add('projectBoxButtonsDiv')

    const addMoreInfoButton = document.createElement('button')
    addMoreInfoButton.classList.add('addMoreInfo')
    addMoreInfoButton.textContent = 'Add More Info'
    
    const viewTasksButton = document.createElement('button')
    viewTasksButton.classList.add('viewTasks')
    viewTasksButton.textContent = 'View All Tasks'

    const deleteProjectButton = document.createElement('button')
    deleteProjectButton.classList.add('deleteProject')
    deleteProjectButton.textContent = 'Delete Project'

    const projectStatusButton = document.createElement('button')
    projectStatusButton.classList.add('projectStatusButton')
    projectStatusButton.textContent = 'Project Status'
    
    if(e){
      if(e.target.className == 'submitProject' || e.target.className == 'saveChanges'  || e.target.className == 'allProjects'){
        let currentProjectName = projects[i]['project']['projectName']   
        let dateCreated = projects[i]['project']['Date Created']
        addElements(currentProjectName, dateCreated)        
      if(e.target.className == 'allProjects'){
        if(document.querySelector('.todoBoxContainer')){
          document.querySelector('.todoBoxContainer').remove()
          document.querySelector('.titleContainerButtonsDiv').remove()
          document.querySelector('.newProjectName').remove()
        }
        displayFirstProjectTodo()
      }
      }else if(e.target.className == 'completedProjects'){
//         if(document.querySelector('.currentTaskBox')){
//   document.querySelector('.currentTaskBox').remove()
// }
        if(projects[i]['project']['project status'] == 'Completed'){
        let currentProjectName = projects[i]['project']['projectName']   
        let dateCreated = projects[i]['project']['Date Created']
        if(document.querySelector('.todoBoxContainer')){
          document.querySelector('.todoBoxContainer').remove()
          document.querySelector('.titleContainerButtonsDiv').remove()
          document.querySelector('.newProjectName').remove()
        }
        addElements(currentProjectName, dateCreated)        
        displayFirstProjectTodo()
        }
        if(!checkCompletedProjects().includes('Completed')){
          // console.log(checkCompletedProjects())
          if(document.querySelector('.displayText')){
            document.querySelector('.displayText').remove()
          }
          addElements(undefined)
        }  
      }else if(e.target.className == 'unCompletedProjects'){   
        if(projects[i]['project']['project status'] == 'InComplete'){
          let currentProjectName = projects[i]['project']['projectName']   
          let dateCreated = projects[i]['project']['Date Created']
          if(document.querySelector('.todoBoxContainer')){
          document.querySelector('.todoBoxContainer').remove()
          document.querySelector('.titleContainerButtonsDiv').remove()
          document.querySelector('.newProjectName').remove()
          if(document.querySelector('.currentTaskBox')){
            document.querySelector('.currentTaskBox').remove()
          }
        }        
          addElements(currentProjectName, dateCreated)                
          displayFirstProjectTodo()
        }
        if(!checkCompletedProjects().includes('InComplete')){
          // console.log(checkCompletedProjects())
           if(document.querySelector('.displayText')){
            document.querySelector('.displayText').remove()
          }
          addElements(undefined)
        }        
      }      
    }
    else if(!e){
      let currentProjectName = projects[i]['project']['projectName']
      let dateCreated = projects[i]['project']['Date Created']
      addElements(currentProjectName, dateCreated)
    }
 
    function addElements(currentProjectName, dateCreated, status) {
      projectsBox.appendChild(projectsBoxItems)
      if(currentProjectName == undefined){       
        let displayText = document.createElement('p')
        displayText.classList.add('displayText')
        projectsBoxItems.remove()

        if(document.querySelector('.projectContainer .newProjectName')){
          document.querySelector('.projectContainer .newProjectName').remove()
          document.querySelector('.titleContainerButtonsDiv').remove()
          document.querySelector('.todoBoxContainer').remove()
        }

        if(e.target.className == 'completedProjects'){
          displayText.textContent = 'No Completed Project'
        }else{
          displayText.textContent = 'All Projects Completed'
        }     

        projectsBox.appendChild(displayText)
        if(document.querySelector('.currentTaskBox')){
          document.querySelector('.currentTaskBox').remove()
        }
        // document.querySelector('.currentTaskBox').remove()
        
     } else {     
        projectsBoxItems.appendChild(currentProjectStatusText)
        spanElementProjectName.textContent = currentProjectName
        currentProjectStatusText.appendChild(spanElementProjectName)

        projectsBoxItems.appendChild(dateCreatedProjectText)
        spanElementDateCreated.textContent = dateCreated
        dateCreatedProjectText.appendChild(spanElementDateCreated)

        projectsBoxItems.appendChild(dueDateProjectText)
        spanDueDateProject.textContent = 'No Available Date'
        dueDateProjectText.appendChild(spanDueDateProject)
        // console.log(projects[i]['project'])
        projectsBoxItems.appendChild(projectStatusText)
        spanProjectStatus.textContent = `${projects[i]['project']['project status']}`
        projectStatusText.appendChild(spanProjectStatus)

        projectsBoxItems.appendChild(projectBoxButtonsDiv)
        projectBoxButtonsDiv.appendChild(addMoreInfoButton)
        projectBoxButtonsDiv.appendChild(viewTasksButton)
        projectBoxButtonsDiv.appendChild(deleteProjectButton)
        projectBoxButtonsDiv.appendChild(projectStatusButton)
        disableDeleteButton()
    }
      }
        
  } 
    eventController().runTodosForProjects()
    eventController().runDeleteProject()
    disableButton()
    eventController().runAddProjectStatus()
}

function createProjectContainer(todo, e){
// console.log(todo)
  function createNewProjectContainer () {
    if(document.querySelector('.projectContainer')){
      console.log('a ran')
    document.querySelector('.projectContainer').remove()
  } else {
    console.log('b ran')
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('projectContainer')
    document.body.appendChild(projectContainer)

    // const titleContainerButtonsDiv = document.createElement('divZ')
    // titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
    // projectContainer.appendChild(titleContainerButtonsDiv)

    // const editProjectName = document.createElement('button')
    // editProjectName.classList.add('editProjectName')
    // editProjectName.textContent = 'Edit'
    // titleContainerButtonsDiv.appendChild(editProjectName)

    // const deleteProjectName = document.createElement('button')
    // deleteProjectName.classList.add('deleteProjectName')
    // deleteProjectName.textContent = 'Delete Project'
    // titleContainerButtonsDiv.appendChild(deleteProjectName)

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todoDiv')
    projectContainer.appendChild(todoDiv)

    const taskDiv = document.createElement('div')
    taskDiv.classList.add('taskDiv')
    todoDiv.appendChild(taskDiv)

    const tasksDivTitle = document.createElement('h3')
    tasksDivTitle.classList.add('tasksDivTitle')
    tasksDivTitle.textContent = 'Tasks'
    taskDiv.appendChild(tasksDivTitle)

    const currentTaskDiv = document.createElement('div')
    currentTaskDiv.classList.add('currentTaskDiv')
    todoDiv.appendChild(currentTaskDiv)

    const currentTaskDivTitle = document.createElement('h3')
    currentTaskDivTitle.classList.add('currentTaskDivTitle')
    currentTaskDivTitle.textContent = 'Current Task'
    currentTaskDiv.appendChild(currentTaskDivTitle)

    }    
  }  
  function createCurrentTaskBox (todo) {
      // console.log(todo.textContent)
      // console.log(todo.className)
      
       const currentTaskBox = document.createElement('div')
       currentTaskBox.classList.add('currentTaskBox')
       document.querySelector('.currentTaskDiv').appendChild(currentTaskBox)
    
       const task = document.createElement('h4')
       task.classList.add('todo')
      //  console.log(todo.className)
      //  console.log(todo.className)
       if(todo){
        if(todo.className == 'spanTaskName' || todo.className == 'todo'){
        task.textContent = todo.textContent
        console.log('check 1')
       }else{
        task.textContent = todo
        console.log('check 2')
       } 
       }
      
       currentTaskBox.appendChild(task)

       const priority = document.createElement('p')
       priority.classList.add('priority')
       priority.textContent = 'Task Priority : '
       currentTaskBox.appendChild(priority)

       const taskButtonsDiv = document.createElement('div')
       taskButtonsDiv.classList.add('taskButtonsDiv')
       currentTaskBox.appendChild(taskButtonsDiv)

       const dateDiv = document.createElement('div')
       dateDiv.classList.add('dateDiv')
       currentTaskBox.appendChild(dateDiv)

       const descriptionDiv = document.createElement('div')
       descriptionDiv.classList.add('descriptionDiv')
       currentTaskBox.appendChild(descriptionDiv)

       const noteDiv = document.createElement('div')
       noteDiv.classList.add('noteDiv')
       currentTaskBox.appendChild(noteDiv)

       const checkListContainer = document.createElement('div')
       checkListContainer.classList.add('checkListContainer')
       currentTaskBox.appendChild(checkListContainer)

       const checkListHeaderContainer = document.createElement('div')
       checkListHeaderContainer.classList.add('checkListHeaderContainer')
       checkListContainer.appendChild(checkListHeaderContainer)

       const checkListHeading = document.createElement('h5')
       checkListHeading.classList.add('checkListHeading')
       checkListHeading.textContent = 'Todo CheckList'
       checkListHeaderContainer.appendChild(checkListHeading)

       const addCheckListFormButton = document.createElement('button')
       addCheckListFormButton.classList.add('addCheckListFormButton')
       addCheckListFormButton.textContent = 'Add'
       checkListContainer.appendChild(addCheckListFormButton)
    }

  function addTodoBox (todo, e, todos) {
// console.log(e.target)
   const taskName = document.createElement('p')
   taskName.classList.add('taskName')   
// console.log('see')
   const spanTaskName = document.createElement('span')
   spanTaskName.classList.add('spanTaskName')

   const taskPriority = document.createElement('p')
   taskPriority.classList.add('taskPriority')

   const dateCreated = document.createElement('p')
   dateCreated.classList.add('dateCreated')

   const dueDate = document.createElement('p')
   dueDate.classList.add('dueDate')

   const taskStatus = document.createElement('p')
   taskStatus.classList.add('taskStatus')

   const todoBoxTaskButtonsDiv = document.createElement('div')
   todoBoxTaskButtonsDiv.classList.add('todoBoxTaskButtonsDiv')

   const viewMoreButton = document.createElement('button')
   viewMoreButton.classList.add('viewMoreInfo')

   const deleteTaskButton = document.createElement('button')
   deleteTaskButton.classList.add('deleteTask')

   const editTask = document.createElement('button')
   editTask.classList.add('editTodoButton')

   

  
  if(!document.querySelector('.todoBoxContainer')){    
    // console.log('todoBoxContainer')
    const todoBoxContainer = document.createElement('div')
    todoBoxContainer.classList.add('todoBoxContainer')
    document.querySelector('.taskDiv').appendChild(todoBoxContainer)
  }
  
  const todoBoxDiv = document.createElement('div')
  todoBoxDiv.classList.add('todoBox')
  document.querySelector('.todoBoxContainer').appendChild(todoBoxDiv)
  // console.log(e)
  // if(!e.target.className){
  //   console.log('undefined')
  // }
  // console.log(e.target)
  if(e.target.className == 'viewTasks'){
   // console.log(e.target.parentElement.parentElement.querySelector('span').textContent)
    // console.log('viewtasks')
    taskName.textContent = `Task Name :`
    todoBoxDiv.appendChild(taskName)

    spanTaskName.textContent = todos
    
    taskName.appendChild(spanTaskName)

    taskPriority.textContent = `Task Priority : Not Specified`
    todoBoxDiv.appendChild(taskPriority)

    dateCreated.textContent =  `Date Created : ${formatDate().getDate()}`
    todoBoxDiv.appendChild(dateCreated)

    dueDate.textContent = `Due Date : Not Specified`
    todoBoxDiv.appendChild(dueDate)

    taskStatus.textContent = `Task Status : Not Completed`
    todoBoxDiv.appendChild(taskStatus)

    todoBoxDiv.appendChild(todoBoxTaskButtonsDiv)
    
    editTask.textContent = 'Edit Task'
    todoBoxTaskButtonsDiv.appendChild(editTask)

    viewMoreButton.textContent = 'More Info'
    todoBoxTaskButtonsDiv.appendChild(viewMoreButton)

    deleteTaskButton.textContent = 'Delete'
    todoBoxTaskButtonsDiv.appendChild(deleteTaskButton)
    eventController().runCurrentDivInfo()
    // console.log(document.querySelector('.currentTaskBox'))
    if(!document.querySelector('.currentTaskBox')){
      const currentTaskBox = document.createElement('div')
      currentTaskBox.classList.add('currentTaskBox')
      document.querySelector('.currentTaskDivTitle').after(currentTaskBox)
    }
  }
  if(e.target.className == 'todoSubmitButton'){
    console.log('it is')
    let headerProjectValue = document.querySelector('.selectProject').value
    console.log(document.querySelector('.newProjectName'))
    console.log(headerProjectValue)
    if(document.querySelector('.newProjectName').textContent !== headerProjectValue){
       document.querySelector('.newProjectName').textContent = headerProjectValue
       document.querySelector('.currentTaskBox').remove()
       document.querySelector('.todoBox').remove()
       todosForProjects(e)
    } 
    
    if(document.querySelector('.createNewTodo')){
      document.querySelector('.createNewTodo').parentElement.remove()
    }
    taskName.textContent = `Task Name :`
    todoBoxDiv.appendChild(taskName)
    
    spanTaskName.textContent = todo
    
    taskName.appendChild(spanTaskName)
    console.log(document.querySelector('.createNewTodo'))

    editTask.textContent = 'Edit Task'

    const addMoreInfoButton = document.createElement('button')
    addMoreInfoButton.classList.add('includeMoreInfo')
    addMoreInfoButton.textContent = 'More Info'

    deleteTaskButton.textContent = 'Delete'

    const newTodoBoxDiv = document.createElement('div')
    newTodoBoxDiv.classList.add('todoBox')
    newTodoBoxDiv.classList.add('newTodoBox')
    document.querySelector('.todoBoxContainer').appendChild(newTodoBoxDiv)

    const createNewTodo = document.createElement('button');
    createNewTodo.classList.add('createNewTodo');
    createNewTodo.textContent = '+';
    newTodoBoxDiv.appendChild(createNewTodo)    

    todoBoxDiv.appendChild(todoBoxTaskButtonsDiv)
    todoBoxTaskButtonsDiv.appendChild(editTask)
    todoBoxTaskButtonsDiv.appendChild(addMoreInfoButton)
    todoBoxTaskButtonsDiv.appendChild(deleteTaskButton)
  
    eventController().runIncludeMoreInfo()
    
    
    editTask.disabled = true
  }
  
  if(!todo && e.target.classList == 'submitProject'){
    // console.log(e.target.classList)
    const createNewTodo = document.createElement('button');
    createNewTodo.classList.add('createNewTodo');
    createNewTodo.textContent = '+';
    todoBoxDiv.appendChild(createNewTodo)
    eventController().runCreateTaskButton()
    // console.log('box created')
    // console.log('check 1')
  }
  else if(todo && e.target.classList !== 'viewTasks' && e.target.className !== 'todoSubmitButton'){
    console.log('yes there is todo')
    //  console.log(e.target)
    taskName.textContent = `Task Name :`
    todoBoxDiv.appendChild(taskName)

    spanTaskName.textContent = todo
    
    taskName.appendChild(spanTaskName)
 
    taskPriority.textContent = `Task Priority : Not Specified`
    todoBoxDiv.appendChild(taskPriority)

    dateCreated.textContent =  `Date Created : ${formatDate().getDate()}`
    todoBoxDiv.appendChild(dateCreated)

    dueDate.textContent = `Due Date : Not Specified`
    todoBoxDiv.appendChild(dueDate)

    taskStatus.textContent = `Task Status : Not Completed`
    todoBoxDiv.appendChild(taskStatus)
    // console.log('box created')

    todoBoxDiv.appendChild(todoBoxTaskButtonsDiv)

    editTask.textContent = 'Edit Task'
    todoBoxTaskButtonsDiv.appendChild(editTask)

    viewMoreButton.textContent = 'More Info'
    todoBoxTaskButtonsDiv.appendChild(viewMoreButton)

    deleteTaskButton.textContent = 'Delete'
    todoBoxTaskButtonsDiv.appendChild(deleteTaskButton)


    const newTodoBoxDiv = document.createElement('div')
    newTodoBoxDiv.classList.add('todoBox')
    newTodoBoxDiv.classList.add('newTodoBox')
    document.querySelector('.todoBoxContainer').appendChild(newTodoBoxDiv)

    const createNewTodo = document.createElement('button');
    createNewTodo.classList.add('createNewTodo');
    createNewTodo.textContent = '+';
    newTodoBoxDiv.appendChild(createNewTodo)
    eventController().runCreateTaskButton()
    // console.log('check')
  }
  

}

return {
  createNewProjectContainer,
  createCurrentTaskBox,
  addTodoBox
}
}

function todosForProjects(e){
  //  console.log(e.target.parentElement.parentElement.querySelector('span').textContent)
  // if(document.querySelector('.todoBox')){
  //   document.querySelector('.todoBox').remove()
  // }
  // console.log(document.querySelector('.selectProject').value)
  // console.log(e.target)
  let currentProjectName = null;
 document.querySelector('.projectContainer').remove()
 createProjectContainer().createNewProjectContainer()
// console.log(document.querySelector('.projectContainer'))
  if(e.target.classList == 'todoSubmitButton'){
   console.log('this ran 1')
    currentProjectName = document.querySelector('.selectProject').value
    console.log('this ran')
  }else {
  console.log('this ran 3')
    currentProjectName = e.target.parentElement.parentElement.querySelector('span').textContent
   console.log('this ran 4')
  }
 let projects = allProjects().getProjects()
console.log('check 9')

 
  console.log(currentProjectName) 
 for(let i = 0; i < projects.length; i++){
  if(projects[i]['project']['projectName'] == currentProjectName){
   for(let j = 0; j < projects[i]['project']['todos'].length; j++ ){
    let todo = projects[i]['project']['todos'][j]['title']
   // console.log(todo)
    createProjectContainer().addTodoBox(undefined, e, todo)
  console.log(currentProjectName)
  }
  }  
 }

    const projectName = document.createElement('h2')
    projectName.classList.add('newProjectName')
    projectName.textContent = e.target.parentElement.parentElement.querySelector('.spanProjectName').textContent
    document.querySelector('.projectContainer').querySelector('.todoDiv').before(projectName)

    const titleContainerButtonsDiv = document.createElement('div')
    titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
    document.querySelector('.projectContainer').querySelector('.todoDiv').before(titleContainerButtonsDiv)
    
    const editProjectName = document.createElement('button')
    editProjectName.classList.add('editProjectName')
    editProjectName.textContent = 'Edit'
    titleContainerButtonsDiv.appendChild(editProjectName)

    const deleteProject = document.createElement('button')
    deleteProject.classList.add('deleteProject')
    deleteProject.textContent = 'Delete Project'
    titleContainerButtonsDiv.appendChild(deleteProject)
    
    const newTodoBoxDiv = document.createElement('div')
    newTodoBoxDiv.classList.add('todoBox')
    newTodoBoxDiv.classList.add('newTodoBox')
    
    const createNewTodo = document.createElement('button');
    createNewTodo.classList.add('createNewTodo');
    createNewTodo.textContent = '+';
    

    if(!document.querySelector('.todoBoxContainer')){
      const todoBoxContainer = document.createElement('div')
      todoBoxContainer.classList.add('todoBoxContainer')
      document.querySelector('.taskDiv').appendChild(todoBoxContainer)
      document.querySelector('.todoBoxContainer').appendChild(newTodoBoxDiv)
      newTodoBoxDiv.appendChild(createNewTodo)
    } else {
      document.querySelector('.todoBoxContainer').appendChild(newTodoBoxDiv)
      newTodoBoxDiv.appendChild(createNewTodo)
    }

    const todoBoxContainer = document.querySelector('.todoBoxContainer').lastChild
    
    const iconDiv = document.createElement('div')
    iconDiv.classList.add('iconDiv') 
    todoBoxContainer.appendChild(iconDiv)
    // console.log(document.querySelector('.iconDiv'))

    // const createNewTodo = document.createElement('button');
    // createNewTodo.classList.add('createNewTodo');
    // createNewTodo.textContent = '+';
    // newTodoBoxDiv.appendChild(createNewTodo)
     eventController().runCreateTaskButton()
     eventController().runEditButton()
     eventController().runDeleteProject()
     disableDeleteButton(e)
    //  console.log('check')
    // const newTodoBoxDiv = document.createElement('div')
    // newTodoBoxDiv.classList.add('todoBox')
    // newTodoBoxDiv.classList.add('newTodoBox')

    // const todoBoxContainer = document.querySelector('.todoBoxContainer')
    // todoBoxContainer.classList.add('todoBoxContainer')
    // todoBoxContainer.appendChild(newTodoBoxDiv)

    // const createNewTodo = document.createElement('button');
    // createNewTodo.classList.add('createNewTodo');
    // createNewTodo.textContent = '+';
    // newTodoBoxDiv.appendChild(createNewTodo)

    
    // console.log(newTodoBoxDiv)
    // console.log(allProjects().getProjects())
}
// createProjectContainer()

function disableButton(){
 // console.log('buttons')
 let projectBoxItems = document.querySelectorAll('.projectsBoxItems')
 let projects = allProjects().getProjects()

 projectBoxItems.forEach((box) => {
  // console.log(box.querySelector('span').textContent)
   for(let i = 0; i < projects.length; i++){
    // console.log(projects[i])
    // console.log(i)
    if(box.querySelector('.spanProjectName')){
    if(projects[i]['project']['projectName'] == box.querySelector('.spanProjectName').textContent){
     // console.log(projects[i]['project']['todos'].length)
      if(projects[i]['project']['todos'].length > 0){
        box.querySelector('.addMoreInfo').disabled = true
      }      
    }
    }

   }
 })
}

function disableDeleteButton(e){

 const deleteButtons = document.querySelectorAll('.projectsBox .deleteProject')
  deleteButtons.forEach((container) => {
   // console.log(container.parentElement.parentElement.querySelector('.spanProjectName'))
    if(container.parentElement.parentElement.querySelector('.spanProjectName').textContent == 'This Is A Sample Project'){
    //  console.log('yes')
    //  console.log(container)
      container.disabled = true
      if(document.querySelector('.titleContainerButtonsDiv')){
        if(document.querySelector('.projectContainer .newProjectName').textContent == 'This Is A Sample Project'){
          // console.log('yes')
          document.querySelector('.titleContainerButtonsDiv .deleteProject').disabled = true
        }
      }
    }
  })
}


function addProjectStatus(e){
  // console.log('projectStatus')
  // console.log(e)
  const projects = allProjects().getProjects()
  const projectName = e.target.parentElement.parentElement.querySelector('.spanProjectName').textContent
  // let checkListStatus = null
  // let todoStatus = null
  // console.log()
  // console.log(projectName)
  
  function projectStatus(){     
    if(!checkTaskStatus().includes('Not Completed') && checkTaskStatus().length !== 0){
      e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'Completed'
    //  e.target.parentElement.parentElement.querySelector('.projectStatus').textContent = `Project Status : Tasks Not Yet Completed`
      let status = 'Completed'
      updateProjectStatus(projectName, status)
      // console.log(allProjects().getProjects())
    } else if(checkTaskStatus().length == 0){

      e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'Completed'
     // e.target.parentElement.parentElement.querySelector('.projectStatus').textContent = `Project Status : Tasks Not Yet Completed`
      let status = 'Completed'
      updateProjectStatus(projectName, status)
      // e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'No Tasks In Project'
      // setTimeout(() => {
      // e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'Please Add Tasks To Project'
      // }, 3000) 
      // setTimeout(() => {
      // e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'Or Project Will Be Assumed To Be Completed'
      // }, 7000) 
    //   setTimeout(() => {
    //   e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'Completed'
    //  // e.target.parentElement.parentElement.querySelector('.projectStatus').textContent = `Project Status : Tasks Not Yet Completed`
    //   let status = 'Completed'
    //   updateProjectStatus(projectName, status)
    //   console.log(allProjects().getProjects())
    //   }, 13000) 
    }
    else {
      e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'Tasks Not Yet Completed'
      let status = 'InComplete'
      updateProjectStatus(projectName, status)
      console.log(allProjects().getProjects())
    }
    // console.log(checkListCheck())
    // console.log(checkTaskStatus())
    // console.log(checkTaskStatus().includes('Not Completed'))
    if(!checkTaskStatus().includes('InComplete') && checkTaskStatus().length !== 0 && checkListCheck().includes('Incomplete')){      
      e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent = 'CheckList Not Completed'
      if(e.target.parentElement.parentElement.querySelector('.spanProjectStatus').textContent == `CheckList Not Completed`){
         // e.target.parentElement.parentElement.querySelector('.projectStatus').textContent = `Project Status : Tasks Not Yet Completed`
          let status = 'Not Completed'
          updateProjectStatus(projectName, status)
          // console.log(allProjects().getProjects())

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'orange'
          }) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'rgb(230, 63, 63)'
          }, 500) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'orange'
          }, 1000) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'rgb(230, 63, 63)'
          }, 1500) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'orange'
          }, 2000) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'rgb(230, 63, 63)'
          }, 2500) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'orange'
          }, 3000) 

          setTimeout(() => {
          e.target.parentElement.parentElement.querySelector('.spanProjectStatus').style.backgroundColor = 'rgb(230, 63, 63)'
          }, 3500) 
      }
    }

    if(!checkTaskStatus().includes('Not Completed') && !checkListCheck().includes('Not Completed')){
      // console.log('Everything Soft')
      // console.log(checkTaskStatus())
      // console.log(checkListCheck())
      // console.log(allProjects().getProjects())
      let status = 'Completed'
      updateProjectStatus(projectName, status)
      // console.log(allProjects().getProjects())
    }
    // else{
    //   console.log('Complete')
    // }
    // console.log(allProjects().getProjects())
  }

  function checkTaskStatus(){
    let status = []    
    for(let i = 0; i < projects.length; i++){      
      if(projects[i]['project']['projectName'] == projectName){
        // status = console.log(projects[i]['project']['todos'])
        // console.log(projectName)
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
            if(projects[i]['project']['todos'][j]['taskStatus'] == 'Completed'){
              status.push('Completed')              
            }
            else{
              status.push('Not Completed')              
            }
        }
      }
    }    
    // console.log(allProjects().getProjects())
    // console.log(status)
    return status
  }

  function checkListCheck(){
    // console.log(allProjects().getProjects())
    let checkListStatus = []
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['project']['projectName'] == projectName){
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
          // console.log(projects[i]['project']['todos'][j]['checkList'])
          for(let k in projects[i]['project']['todos'][j]['checkList']){
            checkListStatus.push(projects[i]['project']['todos'][j]['checkList'][k])
          }
        }
      }
    }    
    return checkListStatus
  }

  
  const getProjectStatus = () => projectStatus()

  return {
    getProjectStatus
  }
}

function displayFirstProjectTodo(e){
  // console.log(document.querySelector('.currentTodoBox'))
  if(document.querySelector('.currentTaskBox')){
    document.querySelector('.currentTaskBox').remove()
  }
  // console.log(e)
  console.log(document.querySelector('.currentTodoBox'))

  let currentProjectName = null
  if(e && e.target.className == 'viewTasks'){

    document.querySelector('.newProjectName').remove()
    document.querySelector('.titleContainerButtonsDiv').remove()
    // console.log('a ran')
    document.querySelector('.todoBoxContainer').remove()
    // console.log('a ran')
    
    currentProjectName = e.target.parentElement.parentElement.querySelector('.spanProjectName').textContent
  } else {
        currentProjectName = document.querySelector('.projectsBox').children[0].querySelector('.spanProjectName').textContent
        // console.log('b ran')
  }
  console.log(document.querySelector('.todoBoxContainer'))

    // console.log(currentProjectName)
    let projects = allProjects().getProjects()
    // console.log(projects[0]['project']['projectName'])
    let projectName = projects[0]['project']['projectName']    
  
    
    // let todo = projects[0]['project']['todos'][0]['title']
    
    let projectContainer = document.querySelector('.projectContainer')
    
    let newProjectName = document.createElement('h2')
    newProjectName.textContent = currentProjectName
    newProjectName.classList.add('newProjectName')
    document.querySelector('.todoDiv').before(newProjectName)    

    let editProjectName = document.createElement('button')
    editProjectName.classList.add('editProjectName')
    editProjectName.textContent = 'Edit'

    let deleteProject = document.createElement('button')
    deleteProject.classList.add('deleteProject')
    deleteProject.textContent = 'Delete Project'


    let titleContainerButtonsDiv = document.createElement('div')
    titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')

    document.querySelector('.todoDiv').before(titleContainerButtonsDiv)

    titleContainerButtonsDiv.appendChild(editProjectName)
    titleContainerButtonsDiv.appendChild(deleteProject)

    
    let tasksDiv = document.querySelector('.taskDiv')
    let currentTaskDiv = document.querySelector('.currentTaskDiv')
    
    let tasksDivTitle = document.querySelector('.tasksDivTitle')
    
    let todoBoxContainer = document.createElement('div')
    todoBoxContainer.classList.add('todoBoxContainer')
    
    let todo = null
    let note = null
  
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['project']['projectName'] == currentProjectName){
        // console.log(currentProjectName)
        for(let j = 0; j < projects[i]['project']['todos'].length; j++){
          todo = projects[i]['project']['todos'][j]['title']
          note = projects[i]['project']['todos'][j]['projectNote']
          // console.log(projects[i])
          let taskPriorityStatus = 'Not Specified'

          let date = projects[i]['project']['todos'][j]['dateCreated']
          // console.log(date)
          let dueDatedata = 'Not Specified'

          let status = projects[i]['project']['todos'][j]['taskStatus']

          let todoBox = document.createElement('div')
          todoBox.classList.add('todoBox')

          let taskName = document.createElement('p')
          taskName.classList.add('taskName')
          taskName.textContent = `Task Name :` 

          let spanTaskName = document.createElement('span')
          spanTaskName.classList.add('spanTaskName')
          spanTaskName.textContent = todo
          let taskPriority = document.createElement('p')
          taskPriority.classList.add('taskPriority')
          taskPriority.textContent = `Task Priority : ${taskPriorityStatus}`

          let dateCreated = document.createElement('p')
          dateCreated.classList.add('dateCreated')
          dateCreated.textContent =  `Date Created : ${date}`

          let dueDate = document.createElement('p')
          dueDate.classList.add('dueDate')
          dueDate.textContent = `Due Date : ${dueDatedata}`

          let taskStatus = document.createElement('p')
          taskStatus.classList.add('taskStatus')
          taskStatus.textContent = `Task Status : ${status}`

          const todoBoxTaskButtonsDiv = document.createElement('div')
          todoBoxTaskButtonsDiv.classList.add('todoBoxTaskButtonsDiv')

          const viewMoreButton = document.createElement('button')
          viewMoreButton.classList.add('viewMoreInfo')

          const deleteTaskButton = document.createElement('button')
          deleteTaskButton.classList.add('deleteTask')

          const editTask = document.createElement('button')
          editTask.classList.add('editTodoButton')

              
    
          editTask.textContent = 'Edit Task'
          todoBoxTaskButtonsDiv.appendChild(editTask)

          viewMoreButton.textContent = 'More Info'
          todoBoxTaskButtonsDiv.appendChild(viewMoreButton)

          deleteTaskButton.textContent = 'Delete'
          todoBoxTaskButtonsDiv.appendChild(deleteTaskButton)
         

          tasksDivTitle.after(todoBoxContainer)
          todoBoxContainer.appendChild(todoBox)
          todoBox.appendChild(taskName)
          taskName.appendChild(spanTaskName)
          todoBox.appendChild(taskPriority)
          todoBox.appendChild(dateCreated)
          todoBox.appendChild(dueDate)
          todoBox.appendChild(taskStatus)
          todoBox.appendChild(todoBoxTaskButtonsDiv)
        }
      }
       eventController().runCurrentDivInfo()
    }
// console.log(document.querySelector('.todoBoxContainer'))
console.log(document.querySelector('.tasksDivTitle'))
    if(!document.querySelector('.todoBoxContainer')){
      let todoBoxContainer = document.createElement('div')
      todoBoxContainer.classList.add('todoBoxContainer')
      document.querySelector('.tasksDivTitle').after(todoBoxContainer)
    }

    const newTodoBoxDiv = document.createElement('div')
    newTodoBoxDiv.classList.add('todoBox')
    newTodoBoxDiv.classList.add('newTodoBox')
    document.querySelector('.todoBoxContainer').appendChild(newTodoBoxDiv)

    const createNewTodo = document.createElement('button');
    createNewTodo.classList.add('createNewTodo');
    createNewTodo.textContent = '+';
    newTodoBoxDiv.appendChild(createNewTodo)
    console.log(document.querySelector('.todoBoxContainer').children.length)
    
    if(document.querySelector('.todoBoxContainer').children.length > 1){
        createProjectContainer().createCurrentTaskBox(todo)
        createTaskButtonsDiv()
        createDate(document.querySelector('.todoBoxContainer'), currentProjectName, todo).getDateProjectWasCreated()
        addDate(document.querySelector('.todoBoxContainer')).getCreateButton()
        eventController().runCalenderButton()
        createDescription(currentProjectName, todo, document.querySelector('.todoBoxContainer')).getDisplayDescription()
        createNote(currentProjectName, note, todo, document.querySelector('.todoBoxContainer')).getDisplayNote()
        eventController().runCreateTaskButton()
        eventController().runDeleteTask()
        eventController().runAddTaskPriority()
        eventController().runAddTaskStatus()
        eventController().runEditDescription()
        eventController().runEditNote()
        deleteProject.disabled = true
        eventController().runEditButton()
        eventController().runCreateCheckList()
    }

    // console.log(allProjects().getProjects())
  }


  function createDivsCurrentTask(){
    document.body.style.backgroundColor = 'green'
  }

  function todoBoxButtonDiv(){
    let todoBoxTaskButtonsDiv = null

    let setDiv = function(value){
      todoBoxTaskButtonsDiv = value
    }

    let getDiv = function(){
      return todoBoxTaskButtonsDiv
    }

    // console.log(getDiv())
    return {
      setDiv,
      getDiv
    }
  }
displayFirstProjectTodo()
  // console.log(allProjects().getProjects())

// function displayCompletedProjects(e){
//   // console.log('completedProjects')
  
//   let projects = allProjects().getProjects()
//   for(let i = 0; i < projects.length; i++){
//   //  console.log(projects[i]['project']['project status'])
//     if(projects[i]['project']['project status'] == 'Complete'){
//       console.log('yes')
//       console.log(projects[i]['project'])
//       displayAllProjects(e)
//     }else{
//       console.log('no')
//       console.log(console.log(projects[i]['project']))
//     }
//   }
  
// }
// fix ----
// edit projectName does not seem to be working well. Also, it cleans up projectsBox instead of updating it so you need to call something there when editing, i think...
// ensure an exiting project name cannot be used
// when you finish, test everythng. So many tings not workimg. Save due date no longer working properly
// after edit button is clicked  on taskdiv, the newly formed currentTask div the bttons not working excetpt from edit button
/* bug when completed projects is clicked after a project is completed, no completed project still 
shows textContent still shows on the box and I am sure the same thing would happen for uncompleted projects
*/
// bug fix project status no longer working well
// you have not added buttons to tasks todoboxes. Also add button that when clicked 
// it shows the compelete details in current task div
// 1. error message so a project will not be written twice
// change due date in all projects boxes to number of todos or number of tasks
// style task and current task divs especially when a project is deleted as they looking too bare
// on first load-out, display default tasks and current task
// add button to delete all projects
// seems like project status button works just ones so when i click task status again project status does not update. Would need to fix that 
// depending on what i want. I might want to automatically update project status when task status is clicked or manually do it. Depends on what you want
// line 3495
// when submitting without todo currentTaskdiv is not cleaned


// // function displayCompletedProjects(e){
// //   // console.log('completedProjects')
  
// //   let projects = allProjects().getProjects()
// //   for(let i = 0; i < projects.length; i++){
// //   //  console.log(projects[i]['project']['project status'])
// //     if(projects[i]['project']['project status'] == 'Complete'){
// //       console.log('yes')
// //       console.log(projects[i]['project'])
// //       displayAllProjects(e)
// //     }else{
// //       console.log('no')
// //       console.log(console.log(projects[i]['project']))
// //     }
// //   }
  
// // }
