// index.js
import "./styles.css"
// import { createNewProject } from "./projectController";
import { allProjects } from "./projectController";
import { createNewProjects } from "./projectController";


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
        let newProjectName = document.createElement('h3')
        newProjectName.textContent = currentProjectName
        currentContainer.firstChild.appendChild(newProjectName)

        document.querySelector('.projectNameInput').remove()
        document.querySelector('.submitProject').remove()
      })
  }}
  return { createNewProject, runSubmitProject }
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


function createNewProjectContainer(){

      
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

      const todoName = document.createElement('h4');
      todoName.classList.add('todoName');
      todoName.textContent = 'Study Hard'
      todoDiv.appendChild(todoName)

      const submitProject = document.createElement('button')
      submitProject.classList.add('submitProject');
      submitProject.textContent = 'Submit Project';      
      newProjectContainer.appendChild(submitProject);
      eventController().runSubmitProject()
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
     

