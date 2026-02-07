// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";
import { addDescriptionToProject } from "./projectController";
import { addNoteToProject } from "./projectController";
import { formatDate } from "./dateformatter"
import { formatRFC7231 } from "date-fns"
import { dateController } from "./projectController.js"
import { ta } from "date-fns/locale";

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
            if(inputField.className !== 'headerTodoInput' && inputField.className !== 'calender'){
              if(inputField.value !== ''){
              // console.log(note)
            // console.log(this.parentElement.querySelector('.newProjectName'))  
            // console.log(projectName)
            //console.log(document.querySelector('.todoInput'))
                if(projectName && document.querySelector('.projectNameInput') && !document.querySelector('.todoInput')){
                    newProject(projectName, currentProjectName)
                    // console.log('test')
                    // console.log(allProjects().getProjects())
                    document.querySelector('.projectNameInput').remove()
                    targetDiv = e.target.parentElement
                    submitTask(this.parentElement.querySelector('.newProjectName').textContent, targetDiv)
                    createTask()
                    document.querySelector('.submitProject').remove()
                  }
                  else if(projectName && document.querySelector('.todoInput')){
                    // console.log('cjeck')
                    if(document.querySelector('.todoInput').value !== ''){
                        newProject(projectName, currentProjectName)
                        // console.log('test2')
                        // console.log(allProjects().getProjects())
                        document.querySelector('.projectNameInput').remove()
                        targetDiv = e.target.parentElement
                        submitTask(this.parentElement.querySelector('.newProjectName').textContent, targetDiv)
                        createTask()
                        document.querySelector('.submitProject').remove()
                    }
                  // console.log(description)
                  // console.log(targetDiv)
                    createDescription(projectName, todo[0]).getDescriptionInput()
                    //document.querySelector('.descriptionInput').remove()
                    createDescription(projectName, todo[0], targetDiv).getDisplayDescription()
                    // createDate(targetDiv).getDateDiv()
                 //   console.log(userInput().getNoteInput())
                    createNote(projectName, note, todo[0]).getNoteInput()
                    createNote(projectName, note, todo[0], targetDiv).getDisplayNote()
                    createDate(targetDiv, projectName).getDateProjectWasCreated()
                    addDate(targetDiv).getCreateButton()
                    // addDate(projectName).getCreateButton()
                     runCalenderButton()
                  
                    //   createTodoButton()        
                      // console.log(createNote().getNoteInput())
                //      createNote(this.parentElement.querySelector('.newProjectName').textContent).getNoteInput()
                    //document.querySelector('.descriptionInput').remove()
                 //     createNote(this.parentElement.querySelector('.newProjectName').textContent).getDisplayNote()
                    
                   //   document.querySelector('.noteHeading').style.marginTop = '15px'
                      // let targetDiv = e.target.parentElement
                      // submitTask(this.parentElement.querySelector('.newProjectName').textContent, targetDiv)
                      // createTask()
                      // dateProjectWasCreated(projectName)
                      // addDate(projectName).getCreateButton()
                      // runCalenderButton()
                        // if(document.querySelector('.descriptionInput') && document.querySelector('.projectName') && document.querySelector('.projectNameInput')){
                        //   document.querySelector('.projectName').remove()
                        //   document.querySelector('.projectNameInput').remove()
                        //   document.querySelector('.descriptionInput').remove()
                        //   document.querySelector('.noteInput').remove()
                        //   document.querySelector('.submitProject').remove()
                        // }
                    
                  // }    
                  //  else if(!document.querySelector('.todoInput')){
                  // newProject(projectName, currentProjectName)
                  // console.log('test')
                  // console.log(allProjects().getProjects())
                  // document.querySelector('.projectNameInput').remove()
                  // document.querySelector('.submitProject').remove()
                //    createDescription(this.parentElement.querySelector('.newProjectName').textContent).getDescriptionInput()
                  //document.querySelector('.descriptionInput').remove()
              //      createDescription(this.parentElement.querySelector('.newProjectName').textContent).getDisplayDescription()
              //      createNote(this.parentElement.querySelector('.newProjectName').textContent).getNoteInput()
                    //document.querySelector('.descriptionInput').remove()
              //      createNote(this.parentElement.querySelector('.newProjectName').textContent).getDisplayNote()
                  //  document.querySelector('.noteHeading').style.marginTop = '15px'
                    // dateProjectWasCreated(projectName)
                    // addDate(projectName).getCreateButton()
                    // runCalenderButton()
                    // console.log(allProjects().getProjects())
                    // document.querySelector('.projectNameInput').remove()
                    // document.querySelector('.submitProject').remove()
                    // if(document.querySelector('.descriptionInput') && document.querySelector('.projectName') && document.querySelector('.projectNameInput')){
                    // document.querySelector('.projectName').remove()
                    // document.querySelector('.projectNameInput').remove()
                    // document.querySelector('.descriptionInput').remove()
                    // document.querySelector('.noteInput').remove()
                    // document.querySelector('.submitProject').remove()
                    // }
                  // }         

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
      const currentProjectName = this.parentElement.querySelector('.newProjectName')
      console.log(currentProjectName)
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
      
      let arr = [].slice.call(this.parentElement.children)
      let currentProjectName = this.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
        // console.log(e.target)
       if(buttons.textContent == 'Save'){
        // console.log(currentTodo)
        console.log('na')
        console.log(currentProjectName)
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
        console.log(this.parentElement.parentElement)
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
  // document.body.style.backgroundColor = 'orange'
    if(document.querySelector('.saveChanges')){
      const saveChanges = document.querySelectorAll('.saveChanges')
      const saveChangesButtons = document.querySelectorAll('.saveChanges')
      
      saveChangesButtons.forEach((button) => {
        button.onclick = function(e){
        let targetDiv = e.target.parentElement
        document.body.style.backgroundColor = 'skyblue'
        if(e.target.className == 'saveChanges'){
     //      console.log(typeof this.parentElement)
           let todoInput = this.parentElement.querySelector('.todoInput')
           let note = userInput().getNoteInput()
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
          
           let currentProjectName = null
           const currentTodo = arr[arr.length - 1]
          //  console.log(document.querySelector('.todoInput'))
           if(document.querySelector('.todoInput')){
              currentProjectName = this.parentElement.querySelector('.newProjectName').textContent
              createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
              //  console.log(this.parentElement.querySelector('.todoDiv').lastChild)
              //  console.log(allProjects().getProjects())
              createTask(currentProjectName).displayTodo(targetDiv)
              //  createTask().getInputAndButton()
              todoInput.remove()    
            }else{
            currentProjectName = this.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
           }
          //  console.log(currentProjectName)
           
          //  const note = this.parentElement.querySelector('.note').textContent
          //  createTodo(currentProjectName, arr[arr.length - 1], currentTodo).createObject()
          // //  console.log(this.parentElement.querySelector('.todoDiv').lastChild)
          // //  console.log(allProjects().getProjects())
          //  createTask(currentProjectName).displayTodo(targetDiv)
          // //  createTask().getInputAndButton()
          //  todoInput.remove()           
           
          //  console.log(currentProjectName)
          //  console.log(currentTodo)
           createDescription(currentProjectName, currentTodo).getDescriptionInput()
          //  console.log(allProjects().getProjects())
           //   //document.querySelector('.descriptionInput').remove()
           createDescription(currentProjectName, currentTodo, targetDiv).getDisplayDescription()
          //  console.log(targetDiv)
          //  console.log(targetDiv.parentElement.parentElement)
          //  console.log(e.target.parentElement.className)

           if(e.target.parentElement.className == 'newProjectContainer'){
            targetDiv = e.target.parentElement
           }else {
            targetDiv = targetDiv.parentElement.parentElement
           }
          //   console.log(targetDiv)
          //  console.log(targetDiv.parentElement.parentElement)
          //  console.log(e.target.parentElement.className)
           this.remove()
           targetDiv.querySelectorAll('.todoDivContent').forEach((container) => {
            // let note = null
            // console.log(container.querySelector('.note'))
            // console.log(currentTodo)
            // console.log(container.querySelector('.todo'))
            if(container.querySelector('.todo').textContent == currentTodo){
            //  let note = container.querySelector('.note')
            //  console.log(note)
             createNote(currentProjectName, note, currentTodo).getNoteInput()
             createNote(currentProjectName, note, currentTodo, targetDiv).getDisplayNote()
            }
            
            // console.log(container)
           })
          
           eventController().runEditDescription()
          //  console.log(currentProjectName)
           eventController().runEditNote(currentProjectName)
          //  console.log(allProjects().getProjects())
          //  console.log(targetDiv)
          //  console.log(currentTodo)
           const todoDivContent = targetDiv.querySelectorAll('.todoDivContent')
           todoDivContent.forEach((container) => {
            // console.log('workkkk')
            if(!container.querySelector('.currentDate')){
              createDate(container, currentProjectName, currentTodo).getDateProjectWasCreated()
              addDate(targetDiv).getCreateButton()
              // console.log(allProjects().getProjects())
              runCalenderButton()
              //  addDate(projectName).getCreateButton()
            }
             
           })
          
          // console.log('you stopped here')
          // for some reason description input may or maynot remove
          // i need to know why
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

        // const headerTodoDiv = document.querySelector('.headerTodoDiv')
        // const descriptionDiv = document.createElement('div')
        // descriptionDiv.classList.add('descriptionDiv')
        // headerTodoDiv.appendChild(descriptionDiv)

        // const descriptionHeading = document.createElement('h5')
        // descriptionHeading.classList.add('descriptionHeading')
        // descriptionHeading.textContent = 'Describe Task'
        // descriptionDiv.appendChild(descriptionHeading)

        // const descriptionContentDiv = document.createElement('div')
        // descriptionContentDiv.classList.add('descriptionContentDiv')
        // descriptionDiv.appendChild(descriptionContentDiv)
      
       
        // const descriptionInput = document.createElement('input')
        // descriptionInput.classList.add('descriptionInput')
        // descriptionInput.placeholder = 'Describe Your Task'
        // descriptionDiv.appendChild(descriptionInput)
        
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
  // console.log(targetDiv)
  const todoSubmitButton = document.querySelector('.todoSubmitButton')
  todoSubmitButton.onclick = submitTodo
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
        document.body.style.backgroundColor = 'skyblue'
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
        document.body.style.backgroundColor = 'skyblue'
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
      document.body.style.backgroundColor = 'orange'
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
        console.log(currentDiv)
        console.log(targetDiv)
        // document.body.style.backgroundColor = 'purple'
        addDate(currentDiv).getDisplayCalender()
        displayDueDate(targetDiv)
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
      document.body.style.backgroundColor = 'orange'
    //  console.log(this.parentElement)
    const targetDiv = this.parentElement
      if(this.parentElement){
     // console.log(this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
      const calenderValues = this.parentElement.querySelector('.calender').value
      const projectName = this.parentElement.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent
      // document.body.style.backgroundColor = 'green'
    //  console.log('run again')
      // dateController(projectName, calenderValues)
      let dueDate = null
      let projects = allProjects().getProjects()
      let todoDivConent = targetDiv.parentElement.parentElement.querySelectorAll('.todoDivContent')

      todoDivConent.forEach((container) => {
        // console.log(container.querySelector('.todo').textContent)
        let todo = container.querySelector('.todo').textContent
         dateController(projectName, calenderValues, todo)
      for(let i = 0; i < projects.length; i++){
        if(projectName == projects[i]['projectName']){
          for(let j = 0; j < projects[i]['todos'].length; j++){
            if(projects[i]['todos'][j]['title'] == todo){
              dueDate = projects[i]['todos'][j].dueDate
            }
          }

        }
      }
      })
     
      // for(let i = 0; i < projects.length; i++){
      //   if(projectName == projects[i]['projectName']){
      //     dueDate = projects[i]['dueDate']
      //   }
      // }
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
        console.log('check')
        // console.log(targetDiv)
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
  const moreInforButton = document.querySelector('.addMoreInfo')
  moreInforButton.onclick = addMoreInfo
  
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
          runAddMoreInfoButton
         }
}

function userInput(){
  let projectNameInput;
  let headerTodoInput;
  let projectDescription;
  let note;
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
 
  
  
  const getUserInput = () => projectNameInput
  const getTaskNameInput = () => arr
  const getHeaderTodoInput = () => headerTodoInput
  const getProjectDescription = () => projectDescription
  const getNoteInput = () => note
  // const getTaskInput = () => taskInput
  // document.querySelector('.projectNameInput').value = ''

  return { 
    getUserInput,
    getTaskNameInput,
    getHeaderTodoInput,
    getProjectDescription,
    getNoteInput 
    // getTaskInput 
  }
}

        
function createTodoButton (targetDiv){
  const currentTodoContainer = document.querySelector('.projectContainer').lastChild.querySelectorAll('.todo')
 // const currentTodoDivContent = document.querySelectorAll('.todoDivContent')
//  console.log(targetDiv) 
 const currentTodoDivContent = targetDiv.querySelectorAll('.todoDivContent')
  const editTodoButton = document.createElement('button')
  editTodoButton.textContent = 'Edit'
  editTodoButton.classList.add('editTodoButton')
      // console.log(currentTodoDivContent.querySelector('.todo'))
      currentTodoDivContent.forEach((container) => {
        if(!container.querySelector('.editTodoButton')){
           container.querySelector('.todo').after(editTodoButton)
        }
      })
    eventController().runTodoEditButton()
    // console.log(allProjects().getProjects())
}

function createTodoDescription(currentDiv){
  const currentProjectName = document.querySelectorAll('.newProjectName')
  const projects = allProjects().getProjects()
  // console.log('checking')
  // console.log(targetDiv.querySelector('.todoDivContent'))
  // for(let i = 0; i < projects.length; i++){
  //   if(projects[i]['projectName'] == currentProjectName.textContent){
  //     console.log(currentProjectName.textContent)
  // console.log(currentDiv)
      // let currentDiv = targetDiv.querySelector('.todoDivContent')
      const descriptionDiv = document.createElement('div')
      descriptionDiv.classList.add('descriptionDiv')
      if(currentDiv.className == 'todoInput'){
        currentDiv.after(descriptionDiv)
      }else {
        currentDiv.appendChild(descriptionDiv)
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
        
      //  console.log(todoDivContent)
      todoDivContent.forEach((container) => {
          // console.log('yes')
          // console.log(container)
        container.querySelector('.descriptionDiv').after(noteDiv)
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
  // console.log(targetDiv)      
    if(projects[i]['projectName'] == targetDiv.querySelector('.newProjectName').textContent){
    //  console.log(projects[i]['projectName'])
      // console.log(targetDiv.querySelector('.newProjectName').textContent)
      let currentTask = projects[i]['todos']
      // console.log(currentTask[currentTask.length - 1])
      const todo = document.createElement('h4')
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
           // console.log(currentContainer.querySelector('.descriptionDiv'))
            currentContainer.querySelector('.descriptionDiv').before(todo)
          //  console.log(targetDiv.querySelector('.descriptionDiv'))
          })        
        // console.log(currentContainer)
        // console.log(projects)
      }
      const lineBreak = document.createElement('hr')
      lineBreak.classList.add('lineBreak')
      targetDiv.querySelector('.todoDiv').appendChild(lineBreak)
      createTodoButton(targetDiv)
      // console.log(targetDiv)
      // createTodoDescription(targetDiv)
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
      
  const editProjectNameButton = document.createElement('button')
  editProjectNameButton.textContent = 'Edit'
  editProjectNameButton.classList.add('editProjectName')        

  currentContainer.firstChild.appendChild(newProjectName)
  currentContainer.firstChild.appendChild(editProjectNameButton)

}


function createDescription (projectName, todo, targetDiv){ 
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
            document.querySelector('.descriptionInput').remove()
          }
        }        
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
            document.querySelector('.noteInput').remove()
          }
        }        
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
    // let todoDivContent = document.createElement('div')
    // todoDivContent.classList.add('todoDivContent')
    let todo = [userInput().getHeaderTodoInput()]
    projectNames.forEach((projectName) => {
  //    console.log(selectedProject)
  //    console.log(projectName.textContent)
      if(selectedProject.toLowerCase() == projectName.textContent.toLowerCase()){
        targetDiv = projectName.parentElement.parentElement
        // targetDiv.querySelector('.todoDiv').appendChild(todoDivContent)
        // console.log(targetDiv)
      }
    })
  //  console.log(targetDiv.querySelector('.todoDiv'))

      createTodo(selectedProject, todo).createObject()
      // createTask().getInputAndButton()
      // console.log(targetDiv.querySelector('.todoInput'))
      let projects = allProjects().getProjects()
      // console.log(selectedProject)
      for(let i = 0; i < projects.length; i++){
        if(projects[i]['projectName'] == selectedProject){
        for(let j = 0; j < projects[i]['todos'].length; j++){
            if(projects[i]['todos'][j]['title'] == todo){
              // console.log('yes')
              // console.log(todo)
              let currentTodo = document.createElement('h4')
              currentTodo.classList.add('todo')
              currentTodo.textContent = projects[i]['todos'][j]['title']

              // const editAndInfoDiv = document.createElement('div')
              // editAndInfoDiv.classList.add('editAndInfoDiv')

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
              todoDivContent.appendChild(editTodoButton)
              todoDivContent.appendChild(moreInfoButton)
              // editAndInfoDiv.appendChild(moreInfoButton)
              // currentDate.textContent = `Created ${projects[i]['todos'][j].dateCreated}`
              eventController().runTodoEditButton()
              eventController().runAddMoreInfoButton(targetDiv)
            }
        }
        }
      }
      // createTask().displayTodo(targetDiv)
    //  console.log(targetDiv)
      document.querySelector('.headerTodoInput').value = ''
    // createTask()
    // create error messages
    // ensure without project already existing this should not work
    // and an error message should be displayed
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
  console.log(this.parentElement)
  // document.body.style.backgroundColor = 'orange'  
  createTodoDescription(this.parentElement)
  createTodoNote(this.parentElement.parentElement)

  createDate(this.parentElement.parentElement).getDateDiv()
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save Changes'  
  saveButton.classList.add('saveChanges')          
  this.parentElement.appendChild(saveButton)
  eventController().runSaveChanges()
  this.parentElement.querySelector('.addMoreInfo').remove()
 }

function createDate (targetDiv, projectName, todo){
  console.log(targetDiv)
  function createDateDiv (){
    const dateDiv = document.createElement('div')
    dateDiv.classList.add('dateDiv')
    const todoDivContents = targetDiv.querySelectorAll('.todoDivContent')
    todoDivContents.forEach((todoDivContainer) => {
    todoDivContainer.appendChild(dateDiv)
    })    
  }

 function dateProjectWasCreated(){
// console.log(projectName)
console.log(targetDiv)
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
          
         console.log(projects)
        }
      }
      targetDiv.querySelector('.dateDiv').appendChild(currentDate)
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
  
  const dueDateDiv = null
  function addDueDateButton(){
    
    const dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('dueDateDiv')

    const addButton = document.createElement('button')
    addButton.textContent = 'Add Due Date'
    addButton.classList.add('dueDateButton')
    // console.log(targetDiv)
  
    const todoDivContent = targetDiv.querySelectorAll('.todoDivContent')
    todoDivContent.forEach((container) => {
      container.appendChild(dueDateDiv)
      dueDateDiv.appendChild(addButton)
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
calender.addEventListener('click', function(){           
    const saveDueDateButton = document.createElement('button')
    saveDueDateButton.classList.add('saveNewDate')
    saveDueDateButton.textContent = 'Save New Date'
   // console.log(this.parentElement.parentElement.parentElement.querySelector('.newProjectName').textContent)
    if(targetDiv.querySelector('.dueDateButton')){
      targetDiv.querySelector('.dueDateButton').after(saveDueDateButton)
      targetDiv.querySelector('.dueDateButton').remove()
    }else if(!targetDiv.querySelector('.saveNewDate')){
      console.log(this.parentElement)
      console.log(targetDiv)
      this.parentElement.querySelector('.changeDueDate').before(saveDueDateButton)
      this.parentElement.querySelector('.changeDueDate').remove()
      
    }
  


  // targetDiv.querySelector('button').classList.add('saveNewDate')
  // targetDiv.querySelector
  // console.log(targetDiv)
 eventController().runSaveDueDate()
  // console.log(calender.value)
})
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
/*
I THINK I AM FACING ISSUE BECAUSE I AM NOT THINKING OF THE SOLUTION IN
MY HEAD FIRST. IT HAS ALWAYS BEEN THE MOST EFFICIENT WAY I HAVE USED TO
SOLVE PROBLEMS. THINK OF THE SOLUTION IN YOUR HEAD FIRST AND THEN CREATE
THAT SOLUTION INTO CODE. YOU NEED TO VISUALIZE IT BEFORE YOU START WRITING
THE CODE. ALSO, THE BASICS OF CODING IS THAT YOU HAVE TO BREAK A COMPLEX
PROBLEM INTO SMALLER PIECES OR PROBLEMS AND SOLVE THEM. BEFORE YOU KNOW
IT YOU WILL HAVE GOTTEN THE OVERALL SOLUTION OF WHAT YOU ARE TRYING TO DO
*/