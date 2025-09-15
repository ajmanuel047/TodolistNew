// index.js
import "./styles.css"
import { createProject } from "./projectController";
import { allProjects } from "./projectController";

const newProjectButton = (function(){
  const createNewProjectButton = document.createElement('button');
  createNewProjectButton.classList.add('newProjectButton');
  createNewProjectButton.textContent = 'Create Project';
  document.body.appendChild(createNewProjectButton)
  return { createNewProjectButton }
})()

if(document.querySelector('.newProjectButton')){
    document.querySelector('.newProjectButton').addEventListener('click', function(){
      document.body.style.backgroundColor = 'green'
      createProject()
      allProjects()
      displayProject()
    })

}

function createNewProjectContainer(){
      const newProjectContainer = document.createElement('div');
      newProjectContainer.classList.add('newProjectContainer');
      document.querySelector('.projectContainer').appendChild(newProjectContainer);
      
      const projectName = document.createElement('h2');
      projectName.classList.add('projectName');
      projectName.textContent = 'School';
      newProjectContainer.appendChild(projectName);

      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todoDiv');
      newProjectContainer.appendChild(todoDiv);

      const todoName = document.createElement('h4');
      todoName.classList.add('todoName');
      todoName.textContent = 'Study Hard'
      todoDiv.appendChild(todoName)
}

function displayProject(){
  if(!document.querySelector('.projectContainer')){
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('projectContainer');
      document.body.appendChild(projectContainer);
      createNewProjectContainer()
  }else {
      createNewProjectContainer()
  }
}
     

