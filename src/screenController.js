// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects, projectPriorityController } from "./projectController";
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

function defaultProject(){
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('projectContainer');
      document.querySelector('.headerDiv').after(projectContainer);

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

      let projects = allProjects().getProjects()
      let currentProjectName = projects[0]['projectName']

      let newProjectName = document.createElement('h2')
      newProjectName.classList.add('newProjectName')
      newProjectName.textContent = currentProjectName
      
      titleContainer.appendChild(newProjectName)

      const titleContainerButtonsDiv = document.createElement('div')
      titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
    
      const editProjectName = document.createElement('button')
      editProjectName.classList.add('editProjectName')
      editProjectName.textContent = 'Edit'

      const deleteProject = document.createElement('button')
      deleteProject.classList.add('deleteProject')
      deleteProject.textContent = 'Delete Project'

      titleContainer.appendChild(titleContainerButtonsDiv)
      titleContainerButtonsDiv.appendChild(editProjectName)
      titleContainerButtonsDiv.appendChild(deleteProject)

      eventController().runEditButton()
      eventController().runDeleteProject()
      // console.log(projects)
      
      const todoDiv = document.createElement('div')
      todoDiv.classList.add('todoDiv')

      const todoDivTitle = document.createElement('div')
      todoDivTitle.classList.add('todoDivTitle')

      const task = document.createElement('h3')
      task.classList.add('task')
      task.textContent = 'Task'

      const addTodo = document.createElement('button')
      addTodo.classList.add('createNewTodo')
      addTodo.textContent = 'Add Todo'
      
      newProjectContainer.appendChild(todoDiv)
      todoDiv.appendChild(todoDivTitle)
      todoDivTitle.appendChild(task)
      todoDivTitle.appendChild(addTodo)

      const todoDivContent = document.createElement('div')
      todoDivContent.classList.add('todoDivContent')

      const todo = document.createElement('h4')
      todo.classList.add('todo')
      todo.textContent = projects[0]['todos'][0]['title']

      const priority = document.createElement('p')
      priority.classList.add('priority')
      priority.textContent = 'Task Priority : '

      const taskButtonsDiv = document.createElement('div')
      taskButtonsDiv.classList.add('taskButtonsDiv')

      const editTodo = document.createElement('button')
      editTodo.classList.add('editTodoButton')
      editTodo.textContent = 'Edit'

      const deleteTask = document.createElement('button')
      deleteTask.classList.add('deleteTask')
      deleteTask.textContent = 'Delete Task'

      const priorityButton = document.createElement('button')
      priorityButton.classList.add('priorityButton')
      priorityButton.textContent = 'Priority'

      const taskStatusButton = document.createElement('button')
      taskStatusButton.classList.add('taskStatusButton')
      taskStatusButton.textContent = 'Task Status'


      todoDiv.appendChild(todoDivContent)
      todoDivContent.appendChild(todo)
      todoDivContent.appendChild(priority)
      todoDivContent.appendChild(taskButtonsDiv)
      

      taskButtonsDiv.appendChild(editTodo)
      taskButtonsDiv.appendChild(deleteTask)
      taskButtonsDiv.appendChild(priorityButton)
      taskButtonsDiv.appendChild(taskStatusButton)

      eventController().runTodoEditButton()
      eventController().runDeleteTask()
      eventController().runAddTaskPriority()
      eventController().runAddTaskStatus()

      const descriptionDiv = document.createElement('div')
      descriptionDiv.classList.add('descriptionDiv')

      const descriptionHeading = document.createElement('h5')
      descriptionHeading.classList.add('descriptionHeading')
      descriptionHeading.textContent = 'Describe Task'

      const descriptionContentDiv = document.createElement('div')
      descriptionContentDiv.classList.add('descriptionContentDiv')

      const description = document.createElement('p')
      description.classList.add('description')
      description.textContent = projects[0]['todos'][0]['description']

      const editDescription = document.createElement('button')
      editDescription.classList.add('editDescription')
      editDescription.textContent = 'Edit'

      todoDivContent.appendChild(descriptionDiv)
      descriptionDiv.appendChild(descriptionHeading)
      descriptionDiv.appendChild(descriptionContentDiv)
      descriptionContentDiv.appendChild(description)
      descriptionDiv.appendChild(editDescription)

      eventController().runEditDescription()

      const noteDiv = document.createElement('div')
      noteDiv.classList.add('noteDiv')

      const noteHeading = document.createElement('h5')
      noteHeading.classList.add('noteHeading')
      noteHeading.textContent = 'Note'

      const noteContentDiv = document.createElement('div')
      noteContentDiv.classList.add('noteContentDiv')

      const note = document.createElement('p')
      note.classList.add('note')
      note.textContent = projects[0]['todos'][0]['projectNote']

      const editNote = document.createElement('button')
      editNote.classList.add('editNote')
      editNote.textContent = 'Edit'

      todoDivContent.appendChild(noteDiv)
      noteDiv.appendChild(noteHeading)
      noteDiv.appendChild(noteContentDiv)
      noteContentDiv.appendChild(note)
      noteDiv.appendChild(editNote)

      eventController().runEditNote()

      const dateDiv = document.createElement('div')
      dateDiv.classList.add('dateDiv')

      const currentDate = document.createElement('p')
      currentDate.classList.add('currentDate')
      currentDate.textContent = projects[0]['todos'][0]['dateCreated']
      
      const dueDateDiv = document.createElement('div')
      dueDateDiv.classList.add('dueDateDiv')

      const dueDateButton = document.createElement('button')
      dueDateButton.classList.add('dueDateButton')
      dueDateButton.textContent = 'Add Due Date'

      todoDivContent.appendChild(dateDiv)
      dateDiv.appendChild(currentDate)
      dateDiv.appendChild(dueDateDiv)
      dueDateDiv.appendChild(dueDateButton)

      eventController().runCalenderButton()

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

      todoDivContent.appendChild(checkListContainer)
      checkListContainer.appendChild(checkListHeaderContainer)
      checkListHeaderContainer.appendChild(checkListHeading)
      checkListHeaderContainer.appendChild(addCheckListFormButton)

      eventController().runCreateCheckList()

      const checkListForm = document.createElement('form')
      checkListForm.classList.add(`checkListForm`)
      checkListContainer.appendChild(checkListForm)
      //  console.log('check')

      const checkListDiv = document.createElement('div')
      checkListDiv.classList.add('checkListDiv')      

      const checkDiv = document.createElement('div')
      checkDiv.classList.add('checkDiv')    

      const checkListItem = document.createElement('input')
      checkListItem.setAttribute('type', 'checkbox')
      checkListItem.classList.add('checkListItem')
      const label = document.createElement('label')
      label.textContent = projects[0]['todos'][0]['checkList'][0]
      checkListItem.checked = true

      const checkDiv2 = document.createElement('div')
      checkDiv2.classList.add('checkDiv')

      const checkListItem2 = document.createElement('input')
      checkListItem2.setAttribute('type', 'checkbox')
      checkListItem2.classList.add('checkListItem')
      const label2 = document.createElement('label')
      label2.textContent = projects[0]['todos'][0]['checkList'][1]
      checkListItem2.checked = true

      checkListForm.appendChild(checkListDiv)
      checkListDiv.appendChild(checkDiv)
   
      checkDiv.appendChild(checkListItem)      
      checkDiv.appendChild(label)

      checkListDiv.appendChild(checkDiv2)
      checkDiv2.appendChild(checkListItem2)  
      checkDiv2.appendChild(label2) 
      // eventController().runCreateTaskButton()
      // eventController().runSaveChanges()
      const lineBreak = document.createElement('hr')
      lineBreak.classList.add('lineBreak')
      todoDivContent.appendChild(lineBreak)
      
}

defaultProject()

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
        let inputFields = document.querySelectorAll('input')
        let targetDiv = null
        // console.log(inputFields)

        let projectArray = projects.map((arr) => {
          return arr.projectName
        })        
        if(!projectArray.includes(projectName)){
          // console.log('yes')
            inputFields.forEach((inputField) => {          
            if(inputField.className !== 'headerTodoInput' && inputField.className !== 'calender' && inputField.className !== 'checkListInput'){
              if(inputField.value !== ''){
                if(projectName && document.querySelector('.projectNameInput') && !document.querySelector('.todoInput')){
                    newProject(projectName, currentProjectName)
                    console.log('test')
                    // console.log(allProjects().getProjects())
                    document.querySelector('.projectNameInput').remove()
                    targetDiv = e.target.parentElement
                    submitTask(this.parentElement.querySelector('.newProjectName').textContent, targetDiv)
                    createTask()
                    document.querySelector('.submitProject').remove()
                  }
                  else if(projectName && document.querySelector('.todoInput')){
                    // console.log('cjeck')
                    // console.log(e.target.parentElement)
                    if(document.querySelector('.todoInput').value !== '' && document.querySelector('.descriptionInput').value !== '' && document.querySelector('.noteInput').value !== ''){
                        newProject(projectName, currentProjectName)
                        // console.log('test2')

                        document.querySelector('.projectNameInput').remove()
                        targetDiv = e.target.parentElement
                        submitTask(this.parentElement.querySelector('.newProjectName').textContent, targetDiv)
                        createTask()
                        document.querySelector('.submitProject').remove()

                        createDescription(projectName, todo[0]).getDescriptionInput()
                        //document.querySelector('.descriptionInput').remove()
                        createDescription(projectName, todo[0], targetDiv).getDisplayDescription()
                        // createDate(targetDiv).getDateDiv()
                    //   console.log(userInput().getNoteInput())
                        createNote(projectName, note, todo[0]).getNoteInput()
                        createNote(projectName, note, todo[0], targetDiv).getDisplayNote()
                        createDate(targetDiv, projectName).getDateProjectWasCreated()
                        addDate(targetDiv).getCreateButton()
                        // console.log('checklist check')
                        runCalenderButton()
                        createCheckList(targetDiv).createContainer()
                      }
                    }          
                  }
          else if(inputField.value == ''){            
                if(!document.querySelector('.errorMessage')){
                inputField.after(errorMessage())
                console.log(this.parentElement)
                this.parentElement.querySelector('.errorMessage').style.marginTop = '7px'
                setTimeout(() => {
                document.querySelector('.errorMessage').remove()
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
        runEditButton()
        runEditDescription(projectName)
        runEditNote(projectName)        
        runDeleteProject()
        runDeleteTask()
        runAddTaskPriority()
        runAddTaskStatus()
        runCreateCheckList()
      })      
  }
runCreateTaskButton()
}

  const runCreateTaskButton = function(){
        let currentContainer = document.querySelector('.projectContainer')
        const currentTodo = document.querySelectorAll('.createNewTodo')
        const todoInput = document.querySelector('.todoInput')
       const taskCreator = createTask()

        currentTodo.forEach((button) => {  
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
      document.body.style.backgroundColor = 'orange'
      const currentProjectName = this.parentElement.parentElement.querySelector('.newProjectName')
      console.log(currentProjectName)
      console.log(this.parentElement.parentElement)
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
         this.parentElement.appendChild(saveCompletedisplay)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 2000)
         createNewProjects(previousValue, currentProjectName.textContent)
         for(let i = 0; i < projects.length; i++){
             if(projects[i]['projectName'] == currentProjectName.textContent){
                currentProjectName.textContent = projects[i]['projectName']
             }
         }
         console.log(allProjects().getProjects())
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
      // console.log(this.parentElement.parentElement.children)
      console.log(this.parentElement.parentElement)
      console.log(e.target.parentElement.parentElement)
      console.log('start from here')
      /*
      first thing first is to try and delete existing taskbuttonsdiv
      when a new one is created
      */
      // console.log(this.parentElement)
      // console.log(this.parentElement.parentElement)
      // console.log(this.parentElement.parentElement.children)
      let arr = [].slice.call(this.parentElement.parentElement.children)
      // console.log(arr)
      
      let currentProjectName = this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
   
       if(buttons.textContent == 'Save'){
        // console.log(currentTodo)
        // console.log('na')
        // console.log(currentProjectName)
         buttons.textContent = 'Edit'
         currentTodo.setAttribute('contenteditable', false)
         currentTodo.classList.remove('editContent')
         currentTodo.style.cursor = 'auto'
         const saveCompletedisplay = document.createElement('p')
         saveCompletedisplay.textContent = 'Saved'
         saveCompletedisplay.classList.add('saved')
        //  adjust the saveCompletedisplay because it not moving when the text
        //  is longer
         this.parentElement.parentElement.parentElement.querySelector('.todoDivTitle').appendChild(saveCompletedisplay)
        // console.log(this.parentElement.parentElement)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
        //  console.log(currentTodo.textContent)
        //  console.log(previousTodo)
         createTodo(currentProjectName, arr, currentTodo.textContent, previousTodo).editTodo()
      //   console.log('check')
      //  console.log(allProjects().getProjects())
      // console.log(projects)
         for(let i = 0; i < projects.length; i++){
             if(projects[i]['projectName'] == currentProjectName){
                for(let j = 0; j < projects[i]['todos'].length; j++ ){
                    if(projects[i]['todos'][j]['title'] == currentTodo.textContent){
                        let newTodo = projects[i]['todos'][j]['title']
            //            console.log(newTodo)
                        currentTodo.textContent = newTodo         
                                     
                    }
                  }
              }
              //  console.log('check 5')  
         }         
      } 
      else if(buttons.textContent == 'Edit'){
        // console.log('yes')
        // console.log(arr)
      for(let i = 0; i < arr.length; i++){
        // console.log(arr[i].className)
        
        // console.log(this)
        if(arr[i].className == 'todo'){
          // console.log(this)
          previousTodo = this.parentElement.parentElement.children[i].textContent
          currentTodo = this.parentElement.parentElement.children[i]
          //  console.log(currentTodo)
          //  console.log(previousTodo)
          currentTodo.setAttribute('contenteditable', true)
          // currentTodo.style.backgroundColor = 'orange'
          currentTodo.classList.add('editContent')
          currentTodo.style.cursor = 'pointer'
          currentTodo.addEventListener('focus', function(e){
          document.body.style.backgroundColor = 'red'
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
  // document.body.style.backgroundColor = 'orange'
    if(document.querySelector('.saveChanges')){
      const saveChanges = document.querySelectorAll('.saveChanges')
      const saveChangesButtons = document.querySelectorAll('.saveChanges')
      
      saveChangesButtons.forEach((button) => {
        button.onclick = function(e){
        let targetDiv = e.target.parentElement
       
        let projects = allProjects().getProjects()
        if(e.target.classList == 'saveChanges' && e.target.parentElement.classList == 'checkListForm'){
          // console.log('it is checkList')
          createCheckList().saveCheckList(targetDiv)
          e.preventDefault()
        }
      else if (e.target.className == 'saveChanges'){
          console.log('check 2')
         // e.target.parentElement.querySelector('.todoDivTitle').querySelector('.lineBreak').remove()
      // document.body.style.backgroundColor = 'skyblue'
           let todoInput = this.parentElement.querySelector('.todoInput')
           let note = userInput().getNoteInput()
         //   console.log(this)
            //console.log(todoInput)
           // console.log(this.parentElement)
            //console.log(this.parentElement.querySelector('.newProjectName'))
            //console.log(this.parentElement.querySelector('.todoInput'))
            let arr = []
            let newArr = []
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
          
           let currentProjectName = null
           const currentTodo = arr[arr.length - 1]
          //  console.log(document.querySelector('.todoInput'))

          for(let i = 0; i < projects.length; i++){
            // console.log(this)
            // console.log(this.parentElement.querySelector('.newProjectName'))
            // console.log(this.parentElement.querySelector('.todoInput'))
              
            if(todoInput){
            if(projects[i]['projectName'] == this.parentElement.querySelector('.newProjectName').textContent){
           //   console.log(this.parentElement.querySelector('.newProjectName').textContent)
              //  console.log(projects[i]['todos'])
             for(let j = 0; j < projects[i]['todos'].length; j++){
                     newArr.push(projects[i]['todos'][j]['title'])
                    // console.log('check 6')
                  }
                }
                //  console.log('check 7')
          //    console.log('adding todo to a project after adding todo from header to same project creates an error')
              }
            }
         if(!newArr.includes(arr[arr.length - 1])){
         //   console.log('it does not')
            if(document.querySelector('.todoInput')){
            currentProjectName = this.parentElement.querySelector('.newProjectName').textContent
            createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
            createTask(currentProjectName).displayTodo(targetDiv)
            todoInput.remove()    
            createDescription(currentProjectName, currentTodo).getDescriptionInput()
            createDescription(currentProjectName, currentTodo, targetDiv).getDisplayDescription()

            if(e.target.parentElement.className == 'newProjectContainer'){
              targetDiv = e.target.parentElement
              } else {
                  targetDiv = targetDiv.parentElement.parentElement
              }

          //  console.log(e.target.parentElement.className)
           this.remove()
           targetDiv.querySelectorAll('.todoDivContent').forEach((container) => {
            if(container.querySelector('.todo').textContent == currentTodo){
             createNote(currentProjectName, note, currentTodo).getNoteInput()
             createNote(currentProjectName, note, currentTodo, targetDiv).getDisplayNote()
            }
           })         
            }else{
            currentProjectName = this.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
            createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
            createTask(currentProjectName).displayTodo(targetDiv)
            // todoInput.remove()    
            createDescription(currentProjectName, currentTodo).getDescriptionInput()
            createDescription(currentProjectName, currentTodo, targetDiv).getDisplayDescription()

            if(e.target.parentElement.className == 'newProjectContainer'){
              targetDiv = e.target.parentElement
              } else {
                  targetDiv = targetDiv.parentElement.parentElement
              }

          //  console.log(e.target.parentElement.className)
           this.remove()
           targetDiv.querySelectorAll('.todoDivContent').forEach((container) => {
            if(container.querySelector('.todo').textContent == currentTodo){
             createNote(currentProjectName, note, currentTodo).getNoteInput()
             createNote(currentProjectName, note, currentTodo, targetDiv).getDisplayNote()
          
             const priority = document.createElement('p')
             priority.classList.add('priority')
             priority.textContent = 'Task Priority : '

             const taskButtonsDiv = document.createElement('div')
             taskButtonsDiv.classList.add('taskButtonsDiv')

             const editTodo = document.createElement('button')
             editTodo.classList.add('editTodoButton')
             editTodo.textContent = 'Edit'
// console.log(targetDiv)
//              const deleteTask = document.createElement('button')
//              deleteTask.classList.add('deleteTask')
//              deleteTask.textContent = 'Delete Task'

//              const priorityButton = document.createElement('button')
//              priorityButton.classList.add('priorityButton')
//              priorityButton.textContent = 'Priority'

//              const taskStatusButton = document.createElement('button')
//              taskStatusButton.classList.add('taskStatusButton')
//              taskStatusButton.textContent = 'Task Status'

//              container.querySelector('.todo').after(priority)
//              priority.after(taskButtonsDiv)
//              taskButtonsDiv.appendChild(editTodo)
//              taskButtonsDiv.appendChild(deleteTask)
//              taskButtonsDiv.appendChild(priorityButton)
//              taskButtonsDiv.appendChild(taskStatusButton)

//              eventController().runEditDescription()
//              eventController().runEditNote(currentProjectName)
//              eventController().runDeleteTask()
//              eventController().runAddTaskPriority()
//              eventController().runAddTaskStatus()
//              eventController().runTodoEditButton()
//              createCheckList(targetDiv).createContainer()
//              runCreateCheckList()
addTaskButtons(container, currentProjectName, targetDiv)
            }
           })   
          }          
          // console.log(targetDiv)
          //  eventController().runEditDescription()
          //  eventController().runEditNote(currentProjectName)
          //  eventController().runDeleteTask()
          //  eventController().runAddTaskPriority()
          //  eventController().runAddTaskStatus()
          //  eventController().runTodoEditButton()
          //  createCheckList(targetDiv).createContainer()
          //  runCreateCheckList()
           const todoDivContent = targetDiv.querySelectorAll('.todoDivContent')
           todoDivContent.forEach((container) => {
            if(!container.querySelector('.currentDate')){
              createDate(container, currentProjectName, currentTodo).getDateProjectWasCreated()
              addDate(targetDiv).getCreateButton()
              // console.log(allProjects().getProjects())
              runCalenderButton()
              //  addDate(projectName).getCreateButton()
            }
             
           })
         }
         else {
          // console.log(arr[arr.length - 1])
            // console.log('it does')
            // console.log(this)
            todoAlreadyExistMessage(this)
         }
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
  selectProject.onclick = updateDropDown().addProject

}

const runtodoSubmitButton = function (){
  
  const todoSubmitButton = document.querySelector('.todoSubmitButton')
  todoSubmitButton.onclick = function (e){        
    submitTodo(e.target)
    runTodoEditButton()
  }
//  eventController().runAddMoreInfoButton()
}

const runEditDescription = function () {
 // console.log(projectName)
  const editDescriptionButton = document.querySelectorAll('.editDescription')
  let previousDescription;
  
  editDescriptionButton.forEach((editButton) => {
    // console.log(this)
    editButton.onclick = function () {
      document.body.style.backgroundColor = 'orange'
      let currentTodo = this.parentElement.parentElement.querySelector('.todo').textContent
      let projectName = this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
      console.log(this.parentElement.parentElement.parentElement.parentElement)
      editDescription()
      const currentDescription = this.parentElement.querySelector('.description')
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
         

         // adjust the saveCompletedisplay because it not moving when the text
         // is longer
        //  console.log(this.parentElement.parentElement)
         this.parentElement.parentElement.querySelector('.descriptionContentDiv').appendChild(saveCompletedisplay)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
        // console.log(currentDescription.textContent)
        // console.log(this.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
         addDescriptionToProject(projectName, currentDescription.textContent, currentTodo)
        //  console.log(allProjects().getProjects().length)
        console.log(projectName)
        console.log(currentDescription.textContent)
        console.log(currentTodo)
        for(let i = 0; i < allProjects().getProjects().length; i++){
             if(allProjects().getProjects()[i]['projectName'] == projectName){
              // console.log(projectName)
                // console.log(allProjects().getProjects()[i]['todos'])
                currentDescription.textContent = allProjects().getProjects()[i]['description']
              for(let j = 0; j < allProjects().getProjects()[i]['todos'].length; j++){
                if(projects[i]['todos'][j]['title'] == currentTodo){
                 console.log(allProjects().getProjects())
                  currentDescription.textContent= allProjects().getProjects()[i]['todos'][j]['description'] 
                }
                  
              }
            }
         }         
      }
      currentDescription.addEventListener('focus', function(e){
        // document.body.style.backgroundColor = 'skyblue'
        editButton.textContent = 'Save'
        currentDescription.style.cursor = 'auto'
      })
    }
  })  
}

const runEditNote = function (projectName) {
 // console.log(projectName)
  const editNoteButton = document.querySelectorAll('.editNote')
  // let previousDescription;
  // console.log(this)
  editNoteButton.forEach((editButton) => {
    // console.log(this)
    editButton.onclick = function () {
 //     console.log(this.parentElement.querySelector('.description'))
    //  editNote()
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
         this.parentElement.appendChild(saveCompletedisplay)
         setTimeout(() => {
           saveCompletedisplay.remove()
         }, 1000)
       // console.log(currentNote.textContent)
       //console.log(this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
       let currentTodo = this.parentElement.parentElement.querySelector('.todo').textContent
        console.log(currentTodo)
       addNoteToProject(this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent, currentNote.textContent, currentTodo)
         
        for(let i = 0; i < allProjects().getProjects().length; i++){
          // console.log(allProjects().getProjects()[i]['projectName'])
          // console.log(projectName)
             if(allProjects().getProjects()[i]['projectName'] == projectName){
                // console.log(projectName)
                // console.log(allProjects().getProjects()[i]['projectName'])
                // console.log(allProjects().getProjects()[i]['todos'])
                currentNote.textContent = allProjects().getProjects()[i]['projectNote']
              for(let j = 0; j < allProjects().getProjects()[i]['todos'].length; j++){
                if(projects[i]['todos'][j]['title'] == currentTodo){
                  // console.log(allProjects().getProjects())
                  currentNote.textContent= allProjects().getProjects()[i]['todos'][j]['projectNote'] 
                }
                  
              }
            }
         }         
      }
console.log(allProjects().getProjects())
      currentNote.addEventListener('focus', function(e){
        // document.body.style.backgroundColor = 'skyblue'
        editButton.textContent = 'Save'
        currentNote.style.cursor = 'auto'
      })
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
    button.addEventListener('click', function(){
      // document.body.style.backgroundColor = 'orange'
    //  console.log(this.parentElement)
    const targetDiv = this.parentElement
    //console.log(targetDiv.parentElement.parentElement.querySelector('.todo').textContent)
      if(this.parentElement){
     // console.log(this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
      const calenderValues = this.parentElement.querySelector('.calender').value
      const projectName = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
      // document.body.style.backgroundColor = 'green'
    //  console.log('run again')
      // dateController(projectName, calenderValues)
      let dueDate = null
      let projects = allProjects().getProjects()
      let todo = targetDiv.parentElement.parentElement.querySelector('.todo').textContent
      // console.log(targetDiv)
      // console.log(todo)
      // todoDivConent.forEach((container) => {
        // console.log(container.querySelector('.todo').textContent)
        // let todo = container.querySelector('.todo').textContent
         dateController(projectName, calenderValues, todo)
      for(let i = 0; i < projects.length; i++){
        if(projectName == projects[i]['projectName']){
          for(let j = 0; j < projects[i]['todos'].length; j++){
            if(projects[i]['todos'][j]['title'] == todo){
           //   console.log(todo)
              // dateController(projectName, calenderValues, todo)
              dueDate = projects[i]['todos'][j].dueDate
            }
          }

        }
      }
      console.log(allProjects().getProjects())
      // })
 
      if(!targetDiv.querySelector('.dueDate')){
        const dueDateElement = document.createElement('p')
        dueDateElement.classList.add('dueDate')
        dueDateElement.textContent = `Due Date is ${dueDate}`
        targetDiv.appendChild(dueDateElement)
        // console.log(allProjects().getProjects())
      //  console.log('check1')
        // console.log(targetDiv)
      }else{
        targetDiv.querySelector('.dueDate').textContent = `Due Date is ${dueDate}`
        displayUpdateMessage(targetDiv)
        // console.log('check')
        // console.log(allProjects().getProjects())
      }
// console.log(this.parentElement.parentElement.querySelector('.calender'))
      
      this.parentElement.parentElement.querySelector('.calender').remove()
     targetDiv.querySelector('button').remove()
      changeDate(targetDiv)
      }
     })
  })
}

const runAddMoreInfoButton = function (){
  const moreInfoButton = document.querySelector('.addMoreInfo')
  moreInfoButton.onclick = function(e){
    let currentDiv = e.target.parentElement
    addMoreInfo(currentDiv)
    
    eventController().runSaveChanges()
    // console.log('check 1')
  }
  
}

const runDeleteProject = function (targetDiv){
 
  const deleteButtons = document.querySelectorAll('.deleteProject')
  deleteButtons.forEach((button) => {
    button.onclick = function (){
      // document.body.style.backgroundColor = 'red'
      const currentProject = this.parentElement.parentElement.parentElement
      const currentProjectName = currentProject.querySelector('.newProjectName').textContent
      deleteProject(currentProjectName)
      currentProject.remove()
      updateDropDown(currentProjectName).removeProject()
    }
  })
}

const runDeleteTask = function(){
  const deleteButtons = document.querySelectorAll('.deleteTask')
  deleteButtons.forEach((button) => {
    button.onclick = deleteTask
  })
}

const runAddTaskPriority = function(){
  const taskPriorityButtons = document.querySelectorAll('.priorityButton')
  taskPriorityButtons.forEach((button) => {
    button.onclick = addTaskPriority
  })
}

const runAddTaskStatus = function(){
  const taskStatusButton = document.querySelectorAll('.taskStatusButton')
  taskStatusButton.forEach((button) => {
    button.onclick = addTaskStatus
  })
}

const runCreateCheckList = function(){
  const createCheckListButton = document.querySelectorAll('.addCheckListFormButton')
  createCheckListButton.forEach((button) => {
    // console.log(this)
    // console.log(todo)
    // console.log(targetDiv)
    button.onclick = function(e){
      const targetButton = this
      createCheckList().addCheckListForm(targetButton)
      runAddCheckItem()
      runSaveChanges()
      // console.log(e.target.classList)
      // console.log(targetButton)
    }
  })
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
          if(projects[i]['projectName'] == currentProjectName){
            // console.log('yes it is')
            if(e.target.parentElement.querySelector('.taskButtonsDiv')){
              e.target.parentElement.querySelector('.taskButtonsDiv').remove()
              addTaskButtons(container, currentProjectName, todo.textContent, projectContainer)
              e.target.parentElement.querySelector('.todo').style.marginBottom = '30px'
              console.log(e.target.parentElement.querySelector('.todo'))
            }            
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
          saveTodoChangesAddedFromHeader
         }
}

function addTaskButtons(container, currentProjectName, todo, projectContainer){
  // console.log(container)
  // console.log(currentProjectName)
  // console.log(targetDiv)
    const note = userInput().getNoteInput()
    document.body.style.backgroundColor = 'coral'
  // console.log(container)
    const priority = document.createElement('p')
    priority.classList.add('priority')
    priority.textContent = 'Task Priority : '

    const taskButtonsDiv = document.createElement('div')
    taskButtonsDiv.classList.add('taskButtonsDiv')

    const editTodo = document.createElement('button')
    editTodo.classList.add('editTodoButton')
    editTodo.textContent = 'Edit'

    const deleteTask = document.createElement('button')
    deleteTask.classList.add('deleteTask')
    deleteTask.textContent = 'Delete Task'

    const priorityButton = document.createElement('button')
    priorityButton.classList.add('priorityButton')
    priorityButton.textContent = 'Priority'

    const taskStatusButton = document.createElement('button')
    taskStatusButton.classList.add('taskStatusButton')
    taskStatusButton.textContent = 'Task Status'

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
  // let taskInput = null
  if(document.querySelector('.projectNameInput')){
    projectNameInput = document.querySelector('.projectNameInput').value
   // console.log(projectNameInput)
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

        
function createTodoButton (targetDiv){
  const currentTodoContainer = document.querySelector('.projectContainer').lastChild.querySelectorAll('.todo')
 // const currentTodoDivContent = document.querySelectorAll('.todoDivContent')
//  console.log(targetDiv) 
  const currentTodoDivContent = targetDiv.querySelectorAll('.todoDivContent')
  const taskButtonsDiv = document.createElement('div')
  taskButtonsDiv.classList.add('taskButtonsDiv')

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

      // console.log(currentTodoDivContent.querySelector('.todo'))
      currentTodoDivContent.forEach((container) => {
        if(!container.querySelector('.editTodoButton')){
           container.querySelector('.priority').after(taskButtonsDiv)
           taskButtonsDiv.appendChild(editTodoButton)
           taskButtonsDiv.appendChild(deleteTask)
           taskButtonsDiv.appendChild(taskPriority)
           taskButtonsDiv.appendChild(taskStatusButton)
        }
      })
    eventController().runTodoEditButton()
    // console.log(allProjects().getProjects())
}

function createTodoDescription(currentDiv){
  const currentProjectName = document.querySelectorAll('.newProjectName')
  const projects = allProjects().getProjects()

  const descriptionDiv = document.createElement('div')
  descriptionDiv.classList.add('descriptionDiv')
  if(currentDiv.className == 'todoInput'){
    currentDiv.after(descriptionDiv)
    // console.log(currentDiv)
  }else {
      // console.log(currentDiv)
    currentDiv.querySelector('.lineBreak').before(descriptionDiv)
    // console.log(currentDiv)
  }
  

  const descriptionHeading = document.createElement('h5')
  descriptionHeading.classList.add('descriptionHeading')
  descriptionHeading.textContent = 'Describe Task'
  descriptionDiv.appendChild(descriptionHeading)

  const descriptionContentDiv = document.createElement('div')
  descriptionContentDiv.classList.add('descriptionContentDiv')
  descriptionDiv.appendChild(descriptionContentDiv)


  const descriptionInput = document.createElement('input')
  descriptionInput.classList.add('descriptionInput')
  descriptionInput.placeholder = 'Describe Your Task'
  descriptionDiv.appendChild(descriptionInput)


  //   }
  // }

}

function createTodoNote(currentDiv){
      // console.log(currentDiv)
      const todoDivContent = currentDiv.querySelectorAll('.todoDivContent')
      const noteDiv = document.createElement('div')
      noteDiv.classList.add('noteDiv')

  //       if(currentDiv.className == 'todoInput'){
  //   currentDiv.after(descriptionDiv)
  //   console.log(currentDiv)
  // }else {
  //     console.log(currentDiv)
  //   currentDiv.querySelector('.lineBreak').appendChild(descriptionDiv)
  //   console.log(currentDiv)
  // }
        // console.log(currentDiv.className)
      //  console.log(todoDivContent)
      todoDivContent.forEach((container) => {
          // console.log('yes')
          // console.log(container)
        if(container.querySelector('.lineBreak')){
          container.querySelector('.lineBreak').before(noteDiv)
        }else{
          container.appendChild(noteDiv)       
        }

      })

      const noteHeading = document.createElement('h5')
      noteHeading.classList.add('noteHeading')
      noteHeading.textContent = 'Note'
      noteDiv.appendChild(noteHeading)

      const noteContentDiv = document.createElement('div')
      noteContentDiv.classList.add('noteContentDiv')
      noteDiv.appendChild(noteContentDiv)

      const noteInput = document.createElement('input')
      noteInput.classList.add('noteInput')
      noteInput.placeholder = 'Note On Task'
      noteDiv.appendChild(noteInput)
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
      createNewTodo.textContent = 'Add Todo';
      todoTitleDiv.appendChild(createNewTodo);



      // const descriptionDiv = document.createElement('div')
      // descriptionDiv.classList.add('descriptionDiv')
      // newProjectContainer.appendChild(descriptionDiv)

      // const descriptionHeading = document.createElement('h3')
      // descriptionHeading.classList.add('descriptionHeading')
      // descriptionHeading.textContent = 'Describe Your Project'
      // descriptionDiv.appendChild(descriptionHeading)

      // const descriptionInput = document.createElement('input')
      // descriptionInput.classList.add('descriptionInput')
      // descriptionInput.placeholder = 'Describe Your Project'
      // descriptionDiv.appendChild(descriptionInput)

      // const noteDiv = document.createElement('div')
      // noteDiv.classList.add('noteDiv')
      // newProjectContainer.appendChild(noteDiv)

      // const noteHeading = document.createElement('h3')
      // noteHeading.classList.add('noteHeading')
      // noteHeading.textContent = 'Add Notes On Project Below'
      // noteDiv.appendChild(noteHeading)

      // const noteInput = document.createElement('input')
      // noteInput.classList.add('noteInput')
      // noteDiv.appendChild(noteInput)      

      const submitProject = document.createElement('button')
      submitProject.classList.add('submitProject');
      submitProject.textContent = 'Submit Project';      
      newProjectContainer.appendChild(submitProject);
      eventController().runSubmitProject()
      
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
    // console.log(this.parentElement.querySelector('.lineBreak'))
    if(this.parentElement.querySelector('.lineBreak')){
      this.parentElement.querySelector('.lineBreak').remove()
    }

    if(!document.querySelector('.todoInput')){
   // document.body.style.backgroundColor = 'blue'
    setTimeout(() => {
     // document.body.style.backgroundColor = 'pink'
    }, "500")
    const todoInput = document.createElement('input');
    todoInput.classList.add('todoInput');
    todoInput.placeholder = 'New Todo'
    const targetDiv = this.parentElement.parentElement.parentElement
    const todoDivContent = document.createElement('div')
    todoDivContent.classList.add('todoDivContent')
    const containers = document.querySelectorAll('.newProjectContainer')
    containers.forEach((container) => {
       let currentContainer = this.parentElement.parentElement.parentElement
      //  console.log(currentContainer.lastChild)
       if(currentContainer.lastChild.className !== 'submitProject' && currentContainer.lastChild.className !== 'saveChanges'){
          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save Changes'  
          saveButton.classList.add('saveChanges')          
          currentContainer.appendChild(saveButton)
          eventController().runSaveChanges()
      }
    })

        this.parentElement.parentElement.appendChild(todoDivContent)
        todoDivContent.appendChild(todoInput)
        createTodoDescription(todoInput)
        createTodoNote(targetDiv)
        createDate(targetDiv).getDateDiv()
    } 
    else{
    //  console.log('no')
  //    console.log(this.parentElement.parentElement.querySelector('.todoInput'))
      if(!document.querySelector('.errorMessage')){ 
        // console.log('message')   
        this.parentElement.parentElement.querySelector('.todoInput').after(errorMessage())
        document.querySelector('.errorMessage').style.marginTop = '3px'
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
//  console.log(projects)
  for(let i = 0; i < projects.length; i++){   
  // console.log(projects[i]['projectName'].toLowerCase())      
  // console.log(targetDiv.querySelector('.newProjectName'))      
  if(targetDiv.querySelector('.newProjectName')){
        if(projects[i]['projectName'] == targetDiv.querySelector('.newProjectName').textContent){
    //  console.log(projects[i]['projectName'])
      // console.log(targetDiv.querySelector('.newProjectName').textContent)
      let currentTask = projects[i]['todos']
      // console.log(currentTask[currentTask.length - 1])
      const todo = document.createElement('h4')
      const taskPriority = document.createElement('p')
      taskPriority.textContent = 'Task Priority : '
      taskPriority.classList.add('priority')
     // console.log(currentTask)
        for(let j = 0; j < currentTask.length; j++){
     //   console.log(targetDiv)
          let currentTodo = currentTask[j]['title']
     //     console.log(currentTodo)
          todo.textContent = currentTodo
          todo.classList.add('todo') 
          let containers = targetDiv.querySelectorAll('.todoDivContent')
          // console.log(targetDiv)
          containers.forEach((currentContainer) => {
         //   console.log(currentContainer.querySelector('.descriptionDiv'))
            if(currentContainer.querySelector('.descriptionDiv')){
               currentContainer.querySelector('.descriptionDiv').before(todo)
              //  console.log(currentContainer.querySelector('.todo'))
              //  console.log(currentContainer.querySelector('.taskButtonsDiv'))
               currentContainer.querySelector('.todo').after(taskPriority)
              }
            
          //  console.log(targetDiv.querySelector('.descriptionDiv'))
          })        
        // console.log(currentContainer)
        // console.log(projects)
      }
      const lineBreak = document.createElement('hr')
      lineBreak.classList.add('lineBreak')
      targetDiv.querySelector('.todoDiv').lastChild.appendChild(lineBreak)
      createTodoButton(targetDiv)
      // console.log(targetDiv)
      // createTodoDescription(targetDiv)
    }
  }
  }
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
    if(projects[i]['projectName'] == projectName){
      currentProjectName = projects[i]['projectName']    
    }
  }
    
  let currentContainer = document.querySelector('.projectContainer').lastChild;
  let newProjectName = document.createElement('h2')
  newProjectName.classList.add('newProjectName')
  newProjectName.textContent = currentProjectName 

  const titleContainerButtonsDiv = document.createElement('div')
  titleContainerButtonsDiv.classList.add('titleContainerButtonsDiv')
      
  const editProjectNameButton = document.createElement('button')
  editProjectNameButton.textContent = 'Edit'
  editProjectNameButton.classList.add('editProjectName')     
  
  const deleteProjectButton = document.createElement('button')
  deleteProjectButton.classList.add('deleteProject')
  deleteProjectButton.textContent = 'Delete Project'

  currentContainer.firstChild.appendChild(newProjectName)
  currentContainer.firstChild.appendChild(titleContainerButtonsDiv)
  titleContainerButtonsDiv.appendChild(editProjectNameButton)
  titleContainerButtonsDiv.appendChild(deleteProjectButton)

}


function createDescription (projectName, todo, targetDiv){ 
  // console.log(projectName)
  // console.log(todo)
  // console.log(targetDiv)
  function descriptionInput () {
    // console.log(document.querySelector('.descriptionInput'))
     const description = userInput().getProjectDescription()
    //  console.log(description)
    // console.log(document.querySelector('.descriptionInput'))
     addDescriptionToProject(projectName, description, todo)
    //  document.querySelector('.descriptionInput').remove()
    // console.log(projectName)
    // console.log('description') 

  }

  function displayDescription (){
   // console.log(projects)
    let projects = allProjects().getProjects()
    let description = document.createElement('p')
    description.classList.add('description')
    let descriptionContentDiv = targetDiv.querySelectorAll('.descriptionContentDiv')
    // console.log(this)
    // console.log(targetDiv)
    let editDescription = document.createElement('button')
    editDescription.classList.add('editDescription')
    editDescription.textContent = 'Edit'

    // console.log(descriptionContentDiv)
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['projectName'] == projectName){
        for(let j = 0; j < projects[i]['todos'].length; j++){
          if(projects[i]['todos'][j]['title'] == todo){
            description.textContent = projects[i]['todos'][j]['description']     
          }
        }        
        document.querySelector('.descriptionInput').remove()
        descriptionContentDiv.forEach((div) => {
          div.appendChild(description)
          div.after(editDescription)
        })
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

  function displayNote (){
   // console.log(projects)
    let projects = allProjects().getProjects()
    let note = document.createElement('p')
    note.classList.add('note')
    let noteContentDiv = targetDiv.querySelectorAll('.noteContentDiv')
  
    let editNote = document.createElement('button')
    editNote.classList.add('editNote')
    editNote.textContent = 'Edit'
 
    for(let i = 0; i < projects.length; i++){
      if(projects[i]['projectName'] == projectName){
        for(let j = 0; j < projects[i]['todos'].length; j++){
          if(projects[i]['todos'][j]['title'] == todo){
            note.textContent = projects[i]['todos'][j]['projectNote']            
          }
        }   
        document.querySelector('.noteInput').remove()     
        noteContentDiv.forEach((div) => {
          div.appendChild(note)
          div.after(editNote)
        })
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
    //  console.log(projects[i]['projectName'])
      if(!arr.includes(projects[i]['projectName'])){
        const options = document.createElement('option')
        options.textContent = `${projects[i]['projectName']}`
        options.value = `${projects[i]['projectName']}`
        selectProject.add(options)
        // console.log(arr)
        //  console.log(selectProject)
      }
    }
  }

  function removeProject(){
    // console.log(projectName)
    const selectProject = document.querySelector('.selectProject')
    if(selectProject){
      for(let i = 0; i < selectProject.options.length; i++){
        if(selectProject[i].value == projectName){
          console.log(selectProject[i].value)
          console.log(i)
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
  

  if(document.querySelector('.headerTodoInput').value && document.querySelector('.selectProject').value){
    let currentProjects = allProjects().getProjects()
    let selectedProject = document.querySelector('.selectProject').value
    let targetDiv;
    let projectNames = document.querySelectorAll('.newProjectName')
    let todo = [userInput().getHeaderTodoInput()]
    let arr = []
    for(let i = 0; i < currentProjects.length; i++){
      if(currentProjects[i]['projectName'] == selectedProject){
          for(let j = 0; j < currentProjects[i]['todos'].length; j++){
              arr.push(currentProjects[i]['todos'][j]['title'])
          }
        }
    //  console.log('adding todo to a project after adding todo from header to same project creates an error')
       }

    if(!arr.includes(userInput().getHeaderTodoInput())){
        projectNames.forEach((projectName) => {
        if(selectedProject.toLowerCase() == projectName.textContent.toLowerCase()){
            targetDiv = projectName.parentElement.parentElement
      }
      })

        createTodo(selectedProject, todo).createObject()
        let projects = allProjects().getProjects()
        for(let i = 0; i < projects.length; i++){
          if(projects[i]['projectName'] == selectedProject){
          for(let j = 0; j < projects[i]['todos'].length; j++){
              if(projects[i]['todos'][j]['title'] == todo){
                let currentTodo = document.createElement('h4')
                currentTodo.classList.add('todo')
                currentTodo.textContent = projects[i]['todos'][j]['title']

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

                targetDiv.querySelector('.todoDiv').appendChild(todoDivContent)
                todoDivContent.appendChild(currentTodo)
                todoDivContent.appendChild(taskButtonsDiv)
                taskButtonsDiv.appendChild(editTodoButton)
                taskButtonsDiv.appendChild(moreInfoButton)

                const lineBreak = document.createElement('hr')
                lineBreak.classList.add('lineBreak')
                targetDiv.querySelector('.todoDiv').lastChild.appendChild(lineBreak)
                // console.log('checking')
                
                eventController().runAddMoreInfoButton(targetDiv)
                
                // console.log('check 3')
            }
          }
       }
        }

        document.querySelector('.headerTodoInput').value = ''
      } 
      else{         
        todoAlreadyExistMessage(targetButton)
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
 }

 function addMoreInfo (currentDiv) {
console.log(currentDiv.parentElement)
  createTodoDescription(currentDiv.parentElement)
  createTodoNote(currentDiv.parentElement.parentElement)

  currentDiv.parentElement.querySelector('.descriptionDiv').style.marginTop = '-10px'

  createDate(currentDiv.parentElement.parentElement).getDateDiv()
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Submit Changes'  
  saveButton.classList.add('saveNewChanges')          
  currentDiv.parentElement.querySelector('.lineBreak').before(saveButton)
  
  currentDiv.parentElement.querySelector('.editTodoButton').remove()
  currentDiv.parentElement.querySelector('.addMoreInfo').remove()
  // console.log('check 4')
  eventController().saveTodoChangesAddedFromHeader()
 }

function createDate (targetDiv, projectName, todo){
  // console.log(todo)
  function createDateDiv (){
    const dateDiv = document.createElement('div')
    dateDiv.classList.add('dateDiv')
    const todoDivContents = targetDiv.querySelectorAll('.todoDivContent')
    todoDivContents.forEach((todoDivContainer) => {
      if(todoDivContainer.querySelector('.lineBreak')){
        todoDivContainer.querySelector('.lineBreak').before(dateDiv)
      }else{
        todoDivContainer.appendChild(dateDiv)
      }    
    })    
  }

 function dateProjectWasCreated(){
// console.log(projectName)
// console.log(targetDiv)
      const currentDate = document.createElement('p')
      currentDate.classList.add('currentDate')
      let calenderValues;
      const todoDivContent = targetDiv.querySelectorAll('.todoDivContent')
      todoDivContent.forEach((container) => {
        todo = container.querySelector('.todo').textContent
      })
      dateController(projectName, calenderValues, todo)
      let projects = allProjects().getProjects()
      for (let i = 0; i < projects.length; i++) {
        if (projects[i]['projectName'] == projectName) {
          for(let j = 0; j < projects[i]['todos'].length; j++){
              if(projects[i]['todos'][j]['title'] == todo){
                currentDate.textContent = `Created ${projects[i]['todos'][j].dateCreated}`
              }
          }
       //   console.log(projects[i]['dateCreated'])
          
        //  console.log(projects)
        //  console.log('start from here. due date is not entering the right todo')
        }
      }
      // console.log(targetDiv.querySelector('.dateDiv'))
      // console.log(targetDiv)
      if(targetDiv.querySelector('.dateDiv')){
        // console.log(targetDiv.querySelector('.dateDiv'))
        // console.log(currentDate)
         targetDiv.querySelector('.dateDiv').appendChild(currentDate)
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
  // console.log(targetDiv)
  const dueDateDiv = null
  function addDueDateButton(){
    
    const dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('dueDateDiv')

    const addButton = document.createElement('button')
    addButton.textContent = 'Add Due Date'
    addButton.classList.add('dueDateButton')
    // console.log(targetDiv)
  
    const todoDivContent = targetDiv.querySelectorAll('.todoDivContent')
    // console.log(todoDivContent)
    todoDivContent.forEach((container) => {
      // console.log('container')
      // console.log(container.children.length)
      if(!container.querySelector('.dueDateDiv') && container.children.length > 3){
        // console.log(container.querySelector('.dateDiv'))
        container.querySelector('.dateDiv').appendChild(dueDateDiv)
         dueDateDiv.appendChild(addButton)
        //  console.log(allProjects().getProjects())
      }

    })
   // document.querySelector('.projectContainer').lastChild.querySelector('.currentDate').after(dueDateDiv)
   // document.querySelector('.projectContainer').lastChild.querySelector('.dueDateDiv').appendChild(addButton)
    
  }

  function displayCalender(){
   // console.log(targetDiv.parentElement.parentElement.querySelector('.newProjectName'))
    // document.body.style.backgroundColor = 'orange'
    // console.log('test')
    
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
  targetDiv.querySelector('.dueDate').appendChild(dateUpdated)
  setTimeout(() => {
   dateUpdated.remove()
  }, 1000)
}

function todoAlreadyExistMessage(targetButton){
  // console.log(targetButton)
  // console.log(targetButton.className)
  const errorMessage = document.createElement('p')
  errorMessage.textContent = 'This Todo name already exist for this project'
  errorMessage.classList.add('errorMessage')

  errorMessage.style.marginTop = '7px'

  if(targetButton.className == 'todoSubmitButton'){
      const headerAddToProjectDiv = document.querySelector('.headerAddToProjectDiv')
      headerAddToProjectDiv.appendChild(errorMessage)
  }else if(targetButton.className == 'saveChanges'){
      console.log(targetButton.parentElement.querySelector('.todoInput'))
      targetButton.parentElement.querySelector('.todoInput').after(errorMessage)
  }
    

  setTimeout(() => {
  errorMessage.remove()
  }, 3000) 
}

function deleteTask(){
  // document.body.style.backgroundColor = 'orange'
  const currentContainer = this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
  const currentTodo = this.parentElement.parentElement.querySelector('.todo')
  removeTaskFromArray(currentContainer, currentTodo.textContent)
  currentTodo.parentElement.remove()
}

function addTaskPriority(){
  // document.body.style.backgroundColor = 'blue'
  const projects = allProjects().getProjects()
  const currentProjectName = this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
  const todo = this.parentElement.parentElement.querySelector('.todo').textContent
  const taskPriority = this.parentElement.parentElement.querySelector('.priority')
  console.log(taskPriority)
  projectPriorityController(currentProjectName, todo)
  for(let i = 0; i < projects.length; i++){
    if(projects[i]['projectName'] == currentProjectName){
        for(let j = 0; j < projects[i]['todos'].length; j++ ){
          if(projects[i]['todos'][j]['title'] == todo){
            // console.log(projects[i]['todos'][j]['taskPriority'])
            taskPriority.textContent = `Task Priority : ${projects[i]['todos'][j]['taskPriority']}`
             if(taskPriority.textContent == 'Task Priority : High'){
              taskPriority.classList.add('high')
              taskPriority.classList.remove('low')
              taskPriority.classList.remove('extreme')
            }else if(taskPriority.textContent == 'Task Priority : Low'){
              taskPriority.classList.add('low')
              taskPriority.classList.remove('extreme')
              taskPriority.classList.remove('high')
            }else if(taskPriority.classList.add('extreme')){
              taskPriority.classList.add('extreme')
              taskPriority.classList.remove('low')
              taskPriority.classList.remove('high')
            }
          }
       }
    }
  }

}

function addTaskStatus(){
  // document.body.style.backgroundColor = 'orange'
  const todo = this.parentElement.parentElement.querySelector('.todo')
  const priority = this.parentElement.parentElement.querySelector('.priority')
  
  if(!this.parentElement.parentElement.querySelector('.statusText')){
      const statusText = document.createElement('p')
      statusText.textContent = 'Completed'
      statusText.classList.add('statusText')
      todo.after(statusText)
  } else {
      this.parentElement.parentElement.querySelector('.statusText').remove()
  }
}

function createCheckList(targetDiv, todo){
  // let currentDiv = null
  // console.log(targetDiv)
  function createContainer(){
    // document.body.style.backgroundColor = 'orange'
    // currentDiv = targetDiv
    const currentContainer = targetDiv.querySelectorAll('.todoDivContent')
    const checkListContainer = document.createElement('div')
    checkListContainer.classList.add('checkListContainer')

    const checkListHeaderContainer = document.createElement('div')
    checkListHeaderContainer.classList.add('checkListHeaderContainer')

    const checkListHeading = document.createElement('p') 
    checkListHeading.classList.add('checkListHeading')         
    checkListHeading.textContent = 'Todo Checklist'

    const addCheckListFormButton = document.createElement('button')
    addCheckListFormButton.classList.add('addCheckListFormButton')
    addCheckListFormButton.textContent = 'Add'

    // console.log(currentContainer)
    currentContainer.forEach((todoDivContainer) => {
      // console.log(todoDivContainer.querySelector('.lineBreak'))
      if(!todoDivContainer.querySelector('.checkListContainer')){
      // console.log('check if running')
        if(todoDivContainer.querySelector('.saveNewChanges')){
        // console.log('confirm if running')
          todoDivContainer.querySelector('.saveNewChanges').before(checkListContainer)
          // console.log('start from here')
          /*
          no checklist adding when adding project. it adds only when todo
          is added from header
          */
        } else{
          todoDivContainer.querySelector('.lineBreak').before(checkListContainer)
        }
      }     
    })

    checkListContainer.appendChild(checkListHeaderContainer)
    checkListHeaderContainer.appendChild(checkListHeading)
    checkListHeaderContainer.appendChild(addCheckListFormButton)
    // console.log(targetDiv)

    // console.log(projectName)
    // console.log(todo)
  }


  function addCheckListForm(targetButton){
    document.body.style.backgroundColor = 'pink'
    // console.log(targetButton)
    const checkListContainer = targetButton.parentElement.parentElement
    // console.log(checkListContainer)

    if(!checkListContainer.querySelector('.checkListForm')){
       const checkListForm = document.createElement('form')
       checkListForm.classList.add(`checkListForm`)
       checkListContainer.appendChild(checkListForm)
      //  console.log('check')

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
       
      } else if(checkListContainer.querySelector('.checkListForm')){
       const checkListInputDiv = document.createElement('div')
       checkListInputDiv.classList.add('checkListInputDiv')

       const checkListInput = document.createElement('input')
       checkListInput.classList.add('checkListInput')

       const addItemButton = document.createElement('button')
       addItemButton.classList.add('addItemButton')
       addItemButton.textContent = 'Add'

       const saveButton = document.createElement('button');
       saveButton.textContent = 'Save Checklist'  
       saveButton.classList.add('saveChanges') 
      // console.log(targetButton.parentElement.parentElement.querySelector('.checkListForm').appendChild(checkListInputDiv))
       const checkListForm =   targetButton.parentElement.parentElement.querySelector('.checkListForm')
       checkListForm.appendChild(checkListInputDiv)
       checkListInputDiv.appendChild(checkListInput)
       checkListInputDiv.appendChild(addItemButton)
       checkListForm.appendChild(saveButton)
       targetButton.parentElement.querySelector('.addCheckListFormButton').remove()
      }
          // console.log(projects)
  }

  function addCheckItem(targetButton){
    // document.body.style.backgroundColor = 'orange'
    let checkInput;
    if(targetButton.parentElement.querySelector('.checkListInput').value !== ''){
       checkInput = userInput(targetButton.parentElement.querySelector('.checkListInput')).getCheckInput()
       targetButton.parentElement.querySelector('.checkListInput').value = ''
      //  console.log(checkInput)
       const todo = targetButton.parentElement.parentElement.parentElement.parentElement.querySelector('.todo').textContent
       const currentProjectName = targetButton.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
       createTodoCheckList(currentProjectName, todo, checkInput)
       let projects = allProjects().getProjects()
       let value;
       for(let i = 0; i < projects.length; i++){
        if(projects[i]['projectName'] == currentProjectName){
          for(let j = 0; j < projects[i]['todos'].length; j++){
            if(projects[i]['todos'][j]['title'] == todo){
              value = projects[i]['todos'][j].checkList[projects[i]['todos'][j].checkList.length - 1]

            }
          }
                        const checkListItem = document.createElement('input')
              checkListItem.setAttribute('type', 'checkbox')
              const label = document.createElement('label')
              label.textContent = value

              const checkDiv = document.createElement('div')
              checkDiv.classList.add('checkDiv')
              targetButton.parentElement.parentElement.querySelector('.checkListDiv').appendChild(checkDiv)
              checkDiv.appendChild(checkListItem)
              checkDiv.appendChild(label)
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
        console.log('nope')
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

    const addCheckListFormButton = document.createElement('button')
    addCheckListFormButton.classList.add('addCheckListFormButton')
    addCheckListFormButton.textContent = 'Add'

    const checkListHeading = targetDiv.parentElement.querySelector('.checkListHeading')
    checkListHeading.after(addCheckListFormButton)
    // console.log(targetDiv)
    targetDiv.querySelector('.saveChanges').remove()  
    targetDiv.querySelector('.checkListInputDiv').remove()    
    // targetDiv.querySelector('.checkDiv').classList.add('checkDivAdjust')
    // targetDiv.querySelector('.checkDiv').classList.remove('checkDiv')
    eventController().runCreateCheckList()
  //  console.log(allProjects().getProjects())
  }

  return {
    createContainer,
    addCheckListForm,
    addCheckItem,
    saveCheckList
  }
}
/*
I THINK I AM FACING ISSUE BECAUSE I AM NOT THINKING OF THE SOLUTION IN
MY HEAD FIRST. IT HAS ALWAYS BEEN THE MOST EFFICIENT WAY I HAVE USED TO
SOLVE PROBLEMS. THINK OF THE SOLUTION IN YOUR HEAD FIRST AND THEN CREATE
THAT SOLUTION INTO CODE. YOU NEED TO VISUALIZE IT BEFORE YOU START WRITING
THE CODE. ALSO, THE BASICS OF CODING IS THAT YOU HAVE TO BREAK A COMPLEX
PROBLEM INTO SMALLER PIECES OR PROBLEMS AND SOLVE THEM. BEFORE YOU KNOW
IT YOU WILL HAVE GOTTEN THE OVERALL SOLUTION OF WHAT YOU ARE TRYING TO DO
*/

/* several scenerios i have not yet worked on
1. when you add todo from headertodo and without saving you add another todo,
it creates an issue when you click the addmoreinfo button for the first 
and maybe the second
2. i need to put date close to todo name
*/