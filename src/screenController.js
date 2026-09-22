// index.js

import "./styles.css";
import { allProjects, projectPriorityController } from "./projectController";
import { editProject } from "./projectController";
import { createNewProjects } from "./projectController";
import { createTodo } from "./projectController";
import { addDescriptionToProject } from "./projectController";
import { addNoteToProject } from "./projectController";
import { formatDate } from "./dateformatter";
import { dateController } from "./projectController.js";
import { deleteProject } from "./projectController";
import { removeTaskFromArray } from "./projectController";
import { createTodoCheckList } from "./projectController";
import { updateCheckListStatus } from "./projectController";
import { updateTodoStatus } from "./projectController";
import { updateProjectStatus } from "./projectController";
import { deleteAllProjects } from "./projectController";
const myButtonState = todoBoxButtonDiv();

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

const newProjectButton = function () {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv");
  document.body.appendChild(headerDiv);

  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const projectsBoxDiv = document.createElement("div");
  projectsBoxDiv.classList.add("projectsBoxDiv");
  container.appendChild(projectsBoxDiv);

  const projectTitle = document.createElement("h2");
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = "All Projects";
  projectsBoxDiv.appendChild(projectTitle);

  const projectsBox = document.createElement("div");
  projectsBox.classList.add("projectsBox");
  projectsBoxDiv.appendChild(projectsBox);

  const newProjectButtonDiv = document.createElement("div");
  newProjectButtonDiv.classList.add("newProjectButtonDiv");
  headerDiv.appendChild(newProjectButtonDiv);

  const createNewProjectButton = document.createElement("button");
  createNewProjectButton.classList.add("newProjectButton");
  createNewProjectButton.textContent = "+";
  newProjectButtonDiv.appendChild(createNewProjectButton);

  const newProject = document.createElement("p");
  newProject.classList.add("addNewProject");
  newProject.textContent = "New Project";
  newProjectButtonDiv.appendChild(newProject);

  const projects = document.createElement("button");
  projects.classList.add("allProjects");
  projects.textContent = "All Projects";
  headerDiv.appendChild(projects);

  const completedProjects = document.createElement("button");
  completedProjects.classList.add("completedProjects");
  completedProjects.textContent = "Completed Projects";
  headerDiv.appendChild(completedProjects);

  const unCompletedProjects = document.createElement("button");
  unCompletedProjects.classList.add("unCompletedProjects");
  unCompletedProjects.textContent = "UnCompleted Projects";
  headerDiv.appendChild(unCompletedProjects);

  const headerAddToProjectDiv = document.createElement("div");
  headerAddToProjectDiv.classList.add("headerAddToProjectDiv");
  headerDiv.appendChild(headerAddToProjectDiv);

  const addTodo = document.createElement("button");
  addTodo.classList.add("addTodo");
  addTodo.textContent = "Add Todo To Project";
  headerAddToProjectDiv.appendChild(addTodo);

  const deleteAllProjects = document.createElement("button");
  deleteAllProjects.classList.add("deleteAllProjects");
  deleteAllProjects.textContent = "Delete All Projects";
  headerDiv.appendChild(deleteAllProjects);

  eventController().createNewProject();
  eventController().runAllProjectsClick();
  eventController().runCompletedProjectsClick();
  eventController().runUnCompletedProjectsClick();
  eventController().runDeleteAllProjects();
  eventController().runAddTodo();

  return { createNewProjectButton };
};
newProjectButton();

function defaultProject() {
  displayAllProjects(null);
  createProjectContainer().createNewProjectContainer();
}

defaultProject();

function eventController() {
  let currentProjectName = null;
  let projects = allProjects().getProjects();
  const createNewProject = function () {
    if (document.querySelector(".newProjectButton")) {
      document
        .querySelector(".newProjectButton")
        .addEventListener("click", function () {
          if (!document.querySelector(".submitProject")) {
            displayProject();
            positionEditColorIndicator();
          }
        });
    }
  };

  const runSubmitProject = function () {
    if (document.querySelector(".submitProject")) {
      document
        .querySelector(".submitProject")
        .addEventListener("click", function (e) {
          let projects = allProjects().getProjects();
          let projectName = userInput().getUserInput();
          let description = userInput().getProjectDescription();
          let note = userInput().getNoteInput();
          let todo = userInput().getTaskNameInput();
          let inputFields = e.target.parentElement.querySelectorAll("input");
          let targetDiv = null;

          let projectArray = projects.map((arr) => {
            return arr["project"]["projectName"];
          });
          if (!projectArray.includes(projectName)) {
            inputFields.forEach((inputField) => {
              if (inputField.value == "") {
                if (!document.querySelector(".errorMessage")) {
                  inputField.after(errorMessage());
                  e.target.parentElement.querySelector(
                    ".errorMessage",
                  ).style.marginTop = "2px";
                  setTimeout(() => {
                    e.target.parentElement
                      .querySelector(".errorMessage")
                      .remove();
                  }, 2000);
                }
              }
            });

            if (
              document.querySelector(".projectNameInput").value !== "" &&
              !document.querySelector(".todoInput")
            ) {
              disableAllButtons(e);
              projectSubmittingMessage(e);
              setTimeout(() => {
                if (document.querySelector(".todoBoxContainer")) {
                  document.querySelector(".todoBoxContainer").remove();
                }

                if (document.querySelector(".currentTaskBox")) {
                  document.querySelector(".currentTaskBox").remove();
                }
                createProjectContainer().addTodoBox(undefined, e);
                newProject(projectName, currentProjectName);
                e.target.parentElement
                  .querySelector(".projectNameInput")
                  .remove();
                targetDiv = e.target.parentElement;
                submitTask(projectName, targetDiv);
                createTask();
                displayAllProjects(e);
                e.target.parentElement.parentElement.remove();
                document.querySelector(".projectContainer").scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                storeData(projectName).populateStorage();
                runEditButton();
                runAddMoreInfoButton();
                createDeleteBoxes(e).createEmptyTaskBox();
              }, 5000);
            } else if (projectName && todo && description && note) {
              disableAllButtons(e);
              projectSubmittingMessage(e);
              if (projectName && document.querySelector(".todoInput")) {
                setTimeout(() => {
                  if (document.querySelector(".todoBoxContainer")) {
                    document.querySelector(".todoBoxContainer").remove();
                  }
                  if (document.querySelector(".currentTaskBox")) {
                    document.querySelector(".currentTaskBox").remove();
                  }

                  if (document.querySelector(".emptyCurrentTaskDivBox")) {
                    document.querySelector(".emptyCurrentTaskDivBox").remove();
                  }

                  let descriptionInput =
                    e.target.parentElement.querySelector(
                      ".descriptionInput",
                    ).value;
                  let noteInput = note;

                  if (
                    todo !== "" &&
                    descriptionInput !== "" &&
                    noteInput !== ""
                  ) {
                    newProject(projectName, currentProjectName);
                    if (!document.querySelector(".currentTaskBox")) {
                      if (document.querySelector(".todoBox"))
                        document.querySelector(".todoBox").remove();
                      if (document.querySelector(".newTodoBox")) {
                        document.querySelector(".newTodoBox").remove();
                      }
                      createProjectContainer(todo[0], e).addTodoBox(todo[0], e);
                    } else if (document.querySelector(".todoBoxContainer")) {
                      document.querySelector(".todoBoxContainer").remove();
                      document.querySelector(".currentTaskBox").remove();
                      createProjectContainer().addTodoBox(todo[0], e);
                    }
                    targetDiv = e.target.parentElement;
                    submitTask(projectName, targetDiv);
                    createTask();
                    createDescription(
                      projectName,
                      todo[0],
                      description[0],
                    ).getDescriptionInput();
                    createDescription(
                      projectName,
                      todo[0],
                      targetDiv,
                      e,
                    ).getDisplayDescription();
                    createDate(targetDiv, projectName, todo).getDateDiv();
                    createNote(projectName, note, todo[0]).getNoteInput();
                    createNote(
                      projectName,
                      note,
                      todo[0],
                      targetDiv,
                    ).getDisplayNote();
                    createDate(
                      targetDiv,
                      projectName,
                      todo,
                    ).getDateProjectWasCreated();
                    addDate(targetDiv).getCreateButton();
                    runCalenderButton();
                    createCheckList(targetDiv).createContainer();
                    displayAllProjects(e);
                    e.target.parentElement.parentElement.remove();
                    document.querySelector(".currentTaskDiv").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                    runEditButton();
                    runEditDescription(projectName);
                    runEditNote(projectName);
                    runDeleteProject(projectName);
                    runDeleteTask();
                    runAddTaskPriority();
                    runAddTaskStatus();
                    runCreateCheckList();
                    runAddMoreInfoButton();
                    storeData(projectName).populateStorage();
                  }
                }, 5000);
              }
            }
          } else {
            if (!this.parentElement.querySelector(".projectErrorMessage")) {
              if (this.parentElement.querySelector(".projectErrorMessage2")) {
                this.parentElement
                  .querySelector(".projectErrorMessage2")
                  .remove();
              }

              const projectErrorMessage = document.createElement("p");
              projectErrorMessage.classList.add("projectErrorMessage");
              projectErrorMessage.textContent = "Project Already Exist";
              this.after(projectErrorMessage);

              setTimeout(() => {
                projectErrorMessage.remove();
              }, 1500);

              setTimeout(() => {
                const projectErrorMessage2 = document.createElement("p");
                projectErrorMessage2.classList.add("projectErrorMessage2");
                projectErrorMessage2.textContent =
                  "Use A Different Project Name";
                this.after(projectErrorMessage2);
              }, 1500);

              setTimeout(() => {
                if (this.parentElement.querySelector(".projectErrorMessage2")) {
                  this.parentElement
                    .querySelector(".projectErrorMessage2")
                    .remove();
                }
              }, 3000);
            }
          }
          //
        });
    }
    runCreateTaskButton();
  };

  const runAllProjectsClick = function () {
    const allProjectButton = document.querySelector(".allProjects");
    allProjectButton.onclick = function (e) {
      projectsBoxDivTitle(e);
      displayAllProjects(e);
    };
  };

  const runCompletedProjectsClick = function () {
    const completedProjectButton = document.querySelector(".completedProjects");
    completedProjectButton.onclick = function (e) {
      projectsBoxDivTitle(e);
    };
  };

  const runUnCompletedProjectsClick = function () {
    const UnCompletedProjectButton = document.querySelector(
      ".unCompletedProjects",
    );
    UnCompletedProjectButton.onclick = function (e) {
      projectsBoxDivTitle(e);
    };
  };

  const runDeleteAllProjects = function () {
    const deleteAllProjectsButton =
      document.querySelector(".deleteAllProjects");
    deleteAllProjectsButton.onclick = function (e) {
      if (!document.querySelector(".deleteAllProjectsPopUpDiv")) {
        removeAllProjects(e).displayWarnigMessage();
      }
    };
  };

  const deleteProjectsConfirmationButton1 = function () {
    const confirmButton = document.querySelector(
      ".deleteProjectsConfirmationButton1",
    );
    const popUpMessage = document.querySelector(
      ".deleteAllProjectsPopUpMessage",
    );

    confirmButton.onclick = function (e) {
      //
      if (popUpMessage.textContent !== "Are You Sure") {
        removeAllProjects().displaySecondWarningMessage();
      } else {
        document
          .querySelector(".deleteAllProjectsPopUpDiv")
          .querySelectorAll("button")
          .forEach((button) => {
            button.disabled = true;
            //
            disableAllButtons(e);
            if (button.classList == "deleteProjectsConfirmationButton1") {
              projectSubmittingMessage(e);
            }
          });
        setTimeout(() => {
          removeAllProjects(e).completeDelete();
        }, 5000);
      }
    };
  };

  const deleteProjectsDeclineButton = function () {
    const declineButton = document.querySelector(
      ".deleteProjectsDeclineButton",
    );
    const popUpMessageDiv = document.querySelector(
      ".deleteAllProjectsPopUpDiv",
    );
    declineButton.onclick = function () {
      popUpMessageDiv.remove();
    };
  };

  const runCreateTaskButton = function () {
    const currentTodo = document.querySelectorAll(".createNewTodo");
    currentTodo.forEach((button) => {
      button.onclick = function (e) {
        createTask(undefined, undefined, e).createInputAndButton();
      };
    });
  };

  const submitTask = function (currentProjectName, targetDiv) {
    let arr = userInput().getTaskNameInput();
    createTodo(currentProjectName, arr).createObject();
    let taskInputs = document.querySelectorAll(".todoInput");
    taskInputs.forEach((inputs) => {
      inputs.remove();
    });
    createTask(currentProjectName).displayTodo(targetDiv);
  };

  const runEditButton = function () {
    let currentEditButton = document.querySelector(".editProjectName");
    let previousValue = null;

    currentEditButton.onclick = function (e) {
      let currentProjectName =
        this.parentElement.parentElement.querySelector(".newProjectName");

      currentProjectName.setAttribute("contenteditable", true);
      currentProjectName.classList.add("editContent");
      currentProjectName.style.cursor = "pointer";
      if (currentEditButton.textContent == "Save") {
        currentEditButton.textContent = "Edit";
        currentProjectName.setAttribute("contenteditable", false);
        currentProjectName.classList.remove("editContent");
        currentProjectName.style.cursor = "auto";
        const saveCompletedisplay = document.createElement("p");
        saveCompletedisplay.textContent = "Saved";
        saveCompletedisplay.classList.add("saved");

        this.parentElement.appendChild(saveCompletedisplay);
        setTimeout(() => {
          saveCompletedisplay.remove();
        }, 2000);

        editProject(previousValue, currentProjectName.textContent);

        for (let i = 0; i < projects.length; i++) {
          if (
            projects[i]["project"]["projectName"] ==
            currentProjectName.textContent
          ) {
            currentProjectName.textContent =
              projects[i]["project"]["projectName"];
          }
        }

        displayAllProjects(e);
        storeData(currentProjectName.textContent).editStorage();
        localStorage.removeItem(previousValue);
      } else if (currentEditButton.textContent == "Edit") {
        disableAllButtons(e);
        previousValue =
          e.target.parentElement.parentElement.querySelector(
            ".newProjectName",
          ).textContent;
        currentProjectName =
          e.target.parentElement.parentElement.querySelector(".newProjectName");
        currentProjectName.setAttribute("contenteditable", true);
        currentProjectName.classList.add("editContent");
        currentProjectName.style.cursor = "pointer";

        currentProjectName.addEventListener("focus", function () {
          currentEditButton.textContent = "Save";
          currentProjectName.style.cursor = "auto";
          document
            .querySelector(".titleContainerButtonsDiv .editProjectName")
            .classList.add("saveProjectName");
        });
      }
      addDisplayIndicator(e);
    };
  };

  const runTodoEditButton = function () {
    const editTodoButtons = document.querySelectorAll(".editTodoButton");
    let currentTodo = null;
    let previousTodo = null;
    if (document.querySelector(".editTodoButton")) {
      editTodoButtons.forEach((buttons) => {
        buttons.onclick = function (e) {
          let arr = [].slice.call(this.parentElement.parentElement.children);

          if (buttons.textContent == "Save") {
            if (
              document.querySelector(".currentTaskDiv .todo").textContent
                .length >
              document
                .querySelector(".currentTaskDiv .todo")
                .getAttribute("max")
            ) {
              document.querySelector(".todo").textContent = previousTodo;
              if (myButtonState.getDiv().className == "todoBox") {
                document.querySelector(".todo").textContent = myButtonState
                  .getDiv()
                  .querySelector(".spanTaskName").textContent;
              }
              document
                .querySelector(".todo")
                .setAttribute("contenteditable", false);
              buttons.textContent = "Edit";
              errorMessageReduceTextLength(e);
            } else {
              buttons.textContent = "Edit";
              currentTodo = document.querySelector(".todo");
              currentTodo.setAttribute("contenteditable", false);
              currentTodo.classList.remove("editContent");
              currentTodo.style.cursor = "auto";
              const saveCompletedisplay = document.createElement("p");
              saveCompletedisplay.textContent = "Saved";
              saveCompletedisplay.classList.add("todoSaved");

              e.target.parentElement.parentElement
                .querySelector(".priority")
                .before(saveCompletedisplay);
              document.querySelector(".todoSaved").style.marginBottom = "-26px";
              setTimeout(() => {
                saveCompletedisplay.remove();
              }, 1000);

              if (document.querySelector(".statusText")) {
                document.querySelector(".statusText").remove();
              }
              if (myButtonState.getDiv().querySelector(".todo")) {
                createTodo(
                  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                    ".newProjectName",
                  ).textContent,
                  arr,
                  currentTodo.textContent,
                  previousTodo,
                ).editTodo();
              } else {
                createTodo(
                  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                    ".newProjectName",
                  ).textContent,
                  arr,
                  currentTodo.textContent,
                  myButtonState.getDiv().querySelector(".spanTaskName")
                    .textContent,
                ).editTodo();
              }
              for (let i = 0; i < projects.length; i++) {
                if (
                  projects[i]["project"]["projectName"] ==
                  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                    ".newProjectName",
                  ).textContent
                ) {
                  for (
                    let j = 0;
                    j < projects[i]["project"]["todos"].length;
                    j++
                  ) {
                    if (
                      projects[i]["project"]["todos"][j]["title"] ==
                      currentTodo.textContent
                    ) {
                      let newTodo = projects[i]["project"]["todos"][j]["title"];
                      currentTodo.textContent = newTodo;
                    }
                  }
                }
              }
              const taskNames = document.querySelectorAll(".spanTaskName");
              taskNames.forEach((taskName) => {
                if (myButtonState.getDiv().querySelector(".spanTaskName")) {
                  if (
                    taskName.textContent ==
                    myButtonState.getDiv().querySelector(".spanTaskName")
                      .textContent
                  ) {
                    taskName.textContent = myButtonState
                      .getDiv()
                      .parentElement.parentElement.parentElement.querySelector(
                        ".todo",
                      ).textContent;
                  }
                } else if (myButtonState.getDiv().querySelector(".todo")) {
                  if (taskName.textContent == previousTodo) {
                    taskName.textContent = myButtonState
                      .getDiv()
                      .querySelector(".todo").textContent;
                  }
                }
              });
            }
            updateTodoStatus(
              document.querySelector(".newProjectName").textContent,
              currentTodo.textContent,
            );
            document.querySelectorAll(".spanTaskName").forEach((taskName) => {
              if (taskName.textContent == currentTodo.textContent) {
                taskName.parentElement.parentElement.querySelector(
                  ".spanTaskStatus",
                ).textContent = "InComplete";
              }
            });
            document
              .querySelectorAll(".spanProjectName")
              .forEach((spanProjectName) => {
                if (
                  spanProjectName.textContent ==
                  document.querySelector(".newProjectName").textContent
                ) {
                  spanProjectName.parentElement.parentElement.querySelector(
                    ".spanProjectStatus",
                  ).textContent = "InComplete";
                }
              });
            let statusText = document.createElement("p");
            statusText.classList.add("statusText");
            statusText.textContent = "InComplete";
            statusText.style.width = "50px";

            if (document.querySelector(".errorMessageText")) {
              setTimeout(() => {
                document.querySelector(".priority").before(statusText);
              }, 5000);
            } else {
              setTimeout(() => {
                document.querySelector(".priority").before(statusText);
              }, 1000);
            }
            updateProjectStatus(
              document.querySelector(".newProjectName").textContent,
              "InComplete",
            );
            storeData(
              document.querySelector(".newProjectName").textContent,
            ).editStorage();
          } else if (e.target.className == "editTodoButton") {
            if (document.querySelector(".statusText")) {
              document.querySelector(".statusText").remove();
            }
            disableAllButtons(e);
            document
              .querySelector(".todo")
              .setAttribute("contenteditable", true);
            document.querySelector(".todo").style.cursor = "pointer";
            for (let i = 0; i < arr.length; i++) {
              if (
                arr[i].querySelector(".spanTaskName") ||
                arr[i].className == "todo"
              ) {
                if (
                  arr[i].className == "todo" ||
                  arr[i].querySelector(".spanTaskName").className ==
                    "spanTaskName"
                ) {
                  if (arr[i].querySelector(".spanTaskName")) {
                    if (document.querySelector(".currentTaskBox")) {
                      document.querySelector(".currentTaskBox").remove();
                    }
                    createProjectContainer().createCurrentTaskBox(
                      e.target.parentElement.parentElement.querySelector(
                        ".spanTaskName",
                      ),
                    );
                    createTaskButtonsDiv();
                    myButtonState.setDiv(e.target.parentElement.parentElement);
                    createDate(
                      document.querySelector(".currentTaskDiv"),
                      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                        ".newProjectName",
                      ).textContent,
                      arr[i].querySelector(".spanTaskName").textContent,
                    ).getDateProjectWasCreated();
                    addDate(
                      document.querySelector(".currentTaskDiv"),
                    ).getCreateButton();
                    eventController().runCalenderButton();
                    createDescription(
                      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                        ".newProjectName",
                      ).textContent,
                      arr[i].querySelector(".spanTaskName").textContent,
                      document.querySelector(".currentTaskDiv"),
                    ).getDisplayDescription();
                    createNote(
                      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                        ".newProjectName",
                      ).textContent,
                      null,
                      arr[i].querySelector(".spanTaskName").textContent,
                      document.querySelector(".currentTaskDiv"),
                    ).getDisplayNote();
                    previousTodo =
                      arr[i].parentElement.querySelector(
                        ".spanTaskName",
                      ).textContent;
                    currentTodo =
                      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                        "h4",
                      );
                  } else {
                    myButtonState.setDiv(e.target.parentElement.parentElement);
                    previousTodo =
                      e.target.parentElement.parentElement.children[i]
                        .textContent;
                    currentTodo =
                      e.target.parentElement.parentElement.children[i];
                  }

                  disableAllButtons(e);
                  currentTodo.setAttribute("contenteditable", true);

                  currentTodo.classList.add("editContent");
                  currentTodo.style.cursor = "pointer";

                  currentTodo.addEventListener("focus", function () {
                    currentTodo.setAttribute("max", 32);
                    currentTodo.parentElement.querySelector(
                      ".editTodoButton",
                    ).textContent = "Save";
                    currentTodo.style.cursor = "auto";
                    document
                      .querySelector(".editTodoButton")
                      .classList.add("saveTodo");
                  });
                  document.querySelector(".todo").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }
            }
          }
          addDisplayIndicator(e);
        };
      });
    }
    positionEditColorIndicator();
  };

  const runSaveChanges = function () {
    if (document.querySelector(".saveChanges")) {
      const saveChangesButtons = document.querySelectorAll(".saveChanges");

      saveChangesButtons.forEach((button) => {
        button.onclick = function (e) {
          let targetDiv = e.target.parentElement;
          let projects = allProjects().getProjects();
          if (
            e.target.classList == "saveChanges" &&
            e.target.parentElement.classList == "checkListForm"
          ) {
            createCheckList().saveCheckList(targetDiv);
            let currentProjectName =
              document.querySelector(".newProjectName").textContent;
            let currentTodo = document.querySelector(".todo").textContent;
            let checkItem = document.querySelectorAll(".checkItem");
            let status = [];
            const checkItems = Array.from(
              document.querySelectorAll(".checkListItem"),
            );
            checkItems.forEach((checkItem) => {
              status.push(checkItem.checked);
            });

            for (let i = 0; i < checkItem.length; i++) {
              createTodoCheckList(
                currentProjectName,
                currentTodo,
                checkItem[i].textContent,
                status[i],
              );
            }
            updateCheckListStatus(currentProjectName, currentTodo, checkItem);
            let statusText = document.createElement("p");
            statusText.classList.add("statusText");

            if (!status.includes(false)) {
              if (document.querySelector(".statusText")) {
                document.querySelector(".statusText").remove();
              }

              document.querySelector(".todo").after(statusText);
              document.querySelector(".statusText").style.width = "87px";
              updateProjectStatus(currentProjectName, "Completed");

              const taskNames = document.querySelectorAll(".spanTaskName");
              const projectBoxItems =
                document.querySelectorAll(".projectsBoxItems");
              let todoStatus;
              taskNames.forEach((taskName) => {
                const todoText = currentTodo;
                if (taskName.textContent == todoText) {
                  for (let i = 0; i < projects.length; i++) {
                    if (
                      projects[i]["project"]["projectName"] ==
                      currentProjectName
                    ) {
                      for (
                        let j = 0;
                        j < projects[i]["project"]["todos"].length;
                        j++
                      ) {
                        if (
                          projects[i]["project"]["todos"][j]["title"] ==
                          todoText
                        ) {
                          todoStatus =
                            projects[i]["project"]["todos"][j]["taskStatus"];
                          if (
                            projects[i]["project"]["todos"][j]["taskStatus"] ==
                            "InComplete"
                          ) {
                            taskName.parentElement.parentElement.querySelector(
                              ".spanTaskStatus",
                            ).textContent = "Task Not Completed";
                          }
                          updateProjectStatus(currentProjectName, "InComplete");
                        }
                      }
                    }
                  }
                }
              });

              projectBoxItems.forEach((projectBox) => {
                if (
                  projectBox.querySelector(".spanProjectName").textContent ==
                  currentProjectName
                ) {
                  projectBox
                    .querySelector(".spanProjectName")
                    .parentElement.parentElement.querySelector(
                      ".spanProjectStatus",
                    ).textContent = todoStatus;
                }
              });
            } else {
              updateTodoStatus(currentProjectName, currentTodo);
              storeData(currentProjectName).editStorage();

              if (document.querySelector(".statusText")) {
                document.querySelector(".statusText").remove();
              }
              let statusText = document.createElement("p");
              statusText.classList.add("statusText");
              statusText.textContent = "CheckList Not Completed";
              document.querySelector(".todo").after(statusText);
              const projectsBoxItems =
                document.querySelectorAll(".projectsBoxItems");
              projectsBoxItems.forEach((projectBoxItem) => {
                if (
                  currentProjectName ==
                  projectBoxItem.querySelector(".spanProjectName").textContent
                ) {
                  projectBoxItem.querySelector(
                    ".spanProjectStatus",
                  ).textContent = "CheckList Not Completed";
                  updateProjectStatus(currentProjectName, "InComplete");
                  storeData(
                    document.querySelector(".newProjectName").textContent,
                  ).editStorage();
                }
              });
              const taskNames = document.querySelectorAll(".spanTaskName");
              taskNames.forEach((taskName) => {
                const todoText = currentTodo;
                if (taskName.textContent == todoText) {
                  taskName.parentElement.parentElement.querySelector(
                    ".spanTaskStatus",
                  ).textContent = "CheckList Not Completed";
                }
              });
            }
            storeData(
              document.querySelector(".newProjectName").textContent,
            ).editStorage();
            e.preventDefault();
          } else if (e.target.className == "saveChanges") {
            let todoInput = userInput().getTaskNameInput();
            let note = userInput().getNoteInput();
            let arr = [];
            let newArr = [];
            const taskInputs = document.querySelectorAll(".todoInput");
            const todos = Array.from(document.querySelectorAll(".todo"));
            todos.forEach((todo) => {
              arr.push(todo.textContent);
            });

            taskInputs.forEach((inputs) => {
              arr.push(inputs.value);
            });

            let currentProjectName = null;
            const currentTodo = arr[arr.length - 1];

            for (let i = 0; i < projects.length; i++) {
              if (todoInput) {
                if (
                  projects[i]["project"]["projectName"] ==
                  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                    ".newProjectName",
                  ).textContent
                ) {
                  for (
                    let j = 0;
                    j < projects[i]["project"]["todos"].length;
                    j++
                  ) {
                    if (
                      !newArr.includes(
                        projects[i]["project"]["todos"][j]["title"],
                      )
                    ) {
                      newArr.push(projects[i]["project"]["todos"][j]["title"]);
                    }
                  }
                }
              }
            }

            if (todoInput[0] !== "") {
              if (!newArr.includes(arr[arr.length - 1])) {
                setTimeout(() => {
                  createDeleteBoxes().deleteEmptyCurrentTaskDivBox();
                  createDeleteBoxes().deleteCurrentTaskBox();
                  if (document.querySelector(".todoInput")) {
                    currentProjectName =
                      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                        ".newProjectName",
                      ).textContent;
                    createTodo(
                      currentProjectName,
                      arr[arr.length - 1],
                      currentTodo,
                    ).createObject();
                    createTask(currentProjectName).displayTodo();
                    createDescription(
                      currentProjectName,
                      currentTodo,
                    ).getDescriptionInput();
                    createDescription(
                      currentProjectName,
                      currentTodo,
                      targetDiv,
                    ).getDisplayDescription();

                    if (
                      e.target.parentElement.className == "newProjectContainer"
                    ) {
                      targetDiv = e.target.parentElement;
                    } else {
                      targetDiv = targetDiv.parentElement.parentElement;
                    }

                    runDeleteTask();
                    runAddTaskPriority();
                    runAddTaskStatus();
                    runEditDescription();
                    runEditNote();
                    runCreateCheckList();
                    disableButton();
                    displayAllProjects(e);
                    runAddMoreInfoButton();
                    e.target.remove();
                    runCurrentDivInfo();
                    addDisplayIndicator(e);

                    targetDiv
                      .querySelectorAll(".todoDivContent")
                      .forEach((container) => {
                        if (
                          container.querySelector(".todoInput").value ==
                          currentTodo
                        ) {
                          createNote(
                            currentProjectName,
                            note,
                            currentTodo,
                          ).getNoteInput();
                          createNote(
                            currentProjectName,
                            note,
                            currentTodo,
                            targetDiv,
                          ).getDisplayNote();
                          runEditNote();

                          container.parentElement.remove();
                          createProjectContainer().addTodoBox(currentTodo, e);
                          runCurrentDivInfo();
                          runDeleteTask();
                          runTodoEditButton();
                        }
                        storeData(
                          document.querySelector(".newProjectName").textContent,
                        ).editStorage();
                      });
                  } else {
                    currentProjectName =
                      e.target.parentElement.parentElement.parentElement.querySelector(
                        ".newProjectName",
                      ).textContent;
                    createTodo(
                      currentProjectName,
                      arr[arr.length - 1],
                      currentTodo,
                    ).createObject();
                    createTask(currentProjectName).displayTodo(targetDiv);
                    createDescription(
                      currentProjectName,
                      currentTodo,
                    ).getDescriptionInput();
                    createDescription(
                      currentProjectName,
                      currentTodo,
                      targetDiv,
                    ).getDisplayDescription();

                    if (
                      e.target.parentElement.className == "newProjectContainer"
                    ) {
                      targetDiv = e.target.parentElement;
                    } else {
                      targetDiv = targetDiv.parentElement.parentElement;
                    }

                    targetDiv
                      .querySelectorAll(".todoDivContent")
                      .forEach((container) => {
                        if (
                          container.querySelector(".todo").textContent ==
                          currentTodo
                        ) {
                          createNote(
                            currentProjectName,
                            note,
                            currentTodo,
                          ).getNoteInput();
                          createNote(
                            currentProjectName,
                            note,
                            currentTodo,
                            targetDiv,
                          ).getDisplayNote();

                          const priority = document.createElement("p");
                          priority.classList.add("priority");
                          priority.textContent = "Task Priority : ";

                          const editTodo = document.createElement("button");
                          editTodo.classList.add("editTodoButton");
                          editTodo.textContent = "Edit Task";
                          addTaskButtons(
                            container,
                            currentProjectName,
                            targetDiv,
                          );
                        }
                      });
                  }
                  document.querySelector(".checkListContainer").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  createDate(targetDiv).getDateDiv();
                  createDate(
                    targetDiv,
                    currentProjectName,
                    currentTodo,
                  ).getDateProjectWasCreated();
                  addDate(targetDiv).getCreateButton();
                  runCalenderButton();
                  const projectsBoxItems =
                    document.querySelectorAll(".projectsBoxItems");
                  projectsBoxItems.forEach((projectBoxItem) => {
                    if (
                      currentProjectName ==
                      projectBoxItem.querySelector(".spanProjectName")
                        .textContent
                    ) {
                      projectBoxItem.querySelector(
                        ".spanProjectStatus",
                      ).textContent = "InComplete";
                      updateProjectStatus(currentProjectName, "InComplete");
                      storeData(
                        document.querySelector(".newProjectName").textContent,
                      ).editStorage();
                    }
                  });
                  storeData(
                    document.querySelector(".newProjectName").textContent,
                  ).editStorage();
                }, 6000);
                disableAllButtons(e);
                projectSubmittingMessage(e);
              } else {
                //
                todoAlreadyExistMessage(e, todoInput);
              }
            } else {
              todoAlreadyExistMessage(e, todoInput);
            }
          }
        };
      });
    }
  };

  const runAddTodo = function () {
    const addTodo = document.querySelector(".addTodo");

    addTodo.onclick = function () {
      if (document.querySelector(".projectInputDiv")) {
        document.querySelector(".projectInputDiv").remove();
      }
      if (!document.querySelector(".selectProject")) {
        if (document.querySelector(".deleteAllProjectsPopUpDiv")) {
          document.querySelector(".deleteAllProjectsPopUpDiv").remove();
        }
        document.querySelector(".addTodo").textContent =
          "Add Todo To Any Project";
        createTodoInputAndButton();

        eventController().runUpdateDropDown();
        eventController().runtodoSubmitButton();
      }
    };
  };

  const runUpdateDropDown = function () {
    const selectProject = document.querySelector(".selectProject");
    selectProject.onclick = updateDropDown().addProject;
  };

  const runtodoSubmitButton = function () {
    const todoSubmitButton = document.querySelector(".todoSubmitButton");
    todoSubmitButton.onclick = function (e) {
      submitTodo(e);
    };
  };

  const runEditDescription = function () {
    const editDescriptionButton = document.querySelectorAll(".editDescription");
    editDescriptionButton.forEach((editButton) => {
      editButton.onclick = function (e) {
        let currentTodo =
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
            ".todo",
          ).textContent;
        let projectName =
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
            ".newProjectName",
          ).textContent;
        editDescription();
        const currentDescription =
          e.target.parentElement.querySelector(".description");
        currentDescription.setAttribute("contenteditable", true);
        currentDescription.classList.add("editContent");
        currentDescription.style.cursor = "pointer";

        if (editButton.textContent == "Save") {
          editButton.textContent = "Edit";
          currentDescription.setAttribute("contenteditable", false);
          currentDescription.classList.remove("editContent");
          currentDescription.style.cursor = "auto";
          const saveCompletedisplay = document.createElement("p");
          saveCompletedisplay.textContent = "Saved";
          saveCompletedisplay.classList.add("saved");
          document.querySelector(".descriptionDiv").style.marginBottom =
            "-33px";
          e.target.parentElement.parentElement
            .querySelector(".descriptionContentDiv")
            .appendChild(saveCompletedisplay);
          setTimeout(() => {
            saveCompletedisplay.remove();
            document.querySelector(".descriptionDiv").style.marginBottom =
              "-33px";
            document.querySelector(".descriptionDiv").style.marginBottom =
              "-15px";
          }, 1000);
          addDescriptionToProject(
            projectName,
            currentDescription.textContent,
            currentTodo,
          );
          for (let i = 0; i < allProjects().getProjects().length; i++) {
            if (allProjects().getProjects()[i]["projectName"] == projectName) {
              currentDescription.textContent =
                allProjects().getProjects()[i]["description"];
              for (
                let j = 0;
                j < allProjects().getProjects()[i]["project"]["todos"].length;
                j++
              ) {
                if (
                  projects[i]["project"]["todos"][j]["title"] == currentTodo
                ) {
                  currentDescription.textContent =
                    allProjects().getProjects()[i]["project"]["todos"][j][
                      "description"
                    ];
                }
              }
            }
          }
          storeData(
            document.querySelector(".newProjectName").textContent,
          ).editStorage();
        }
        addDisplayIndicator(e);
        currentDescription.addEventListener("focus", function () {
          editButton.textContent = "Save";
          currentDescription.style.cursor = "auto";
          document
            .querySelector(".descriptionDiv .editDescription")
            .classList.add("saveDescription");
        });
      };
    });
  };

  const runEditNote = function (projectName) {
    const editNoteButton = document.querySelectorAll(".editNote");

    editNoteButton.forEach((editButton) => {
      editButton.onclick = function (e) {
        const currentNote = this.parentElement.querySelector(".note");
        currentNote.setAttribute("contenteditable", true);
        currentNote.classList.add("editContent");
        currentNote.style.cursor = "pointer";

        if (editButton.textContent == "Save") {
          editButton.textContent = "Edit";
          currentNote.setAttribute("contenteditable", false);
          currentNote.classList.remove("editContent");
          currentNote.style.cursor = "auto";
          const saveCompletedisplay = document.createElement("p");
          saveCompletedisplay.textContent = "Saved";
          saveCompletedisplay.classList.add("saved");
          document.querySelector(".noteDiv").style.marginBottom = "-33px";
          document.querySelector(".noteDiv").appendChild(saveCompletedisplay);

          setTimeout(() => {
            saveCompletedisplay.remove();
            document.querySelector(".noteDiv").style.marginBottom = "-15px";
          }, 1000);

          let currentTodo =
            e.target.parentElement.parentElement.parentElement.parentElement.querySelector(
              ".todo",
            ).textContent;
          addNoteToProject(
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
              ".newProjectName",
            ).textContent,
            currentNote.textContent,
            currentTodo,
          );

          for (let i = 0; i < allProjects().getProjects().length; i++) {
            if (
              allProjects().getProjects()[i]["project"]["projectName"] ==
              projectName
            ) {
              currentNote.textContent =
                allProjects().getProjects()[i]["projectNote"];
              for (
                let j = 0;
                j < allProjects().getProjects()[i]["project"]["todos"].length;
                j++
              ) {
                if (
                  projects[i]["project"]["todos"][j]["title"] == currentTodo
                ) {
                  currentNote.textContent =
                    allProjects().getProjects()[i]["project"]["todos"][j][
                      "projectNote"
                    ];
                }
              }
            }
          }
        }
        currentNote.addEventListener("focus", function () {
          editButton.textContent = "Save";
          currentNote.style.cursor = "auto";
          document.querySelector(".editNote").classList.add("saveNote");
        });
        storeData(
          document.querySelector(".newProjectName").textContent,
        ).editStorage();
        addDisplayIndicator(e);
      };
    });
  };

  const runCalenderButton = function () {
    const calerderButtons = document.querySelectorAll(".dueDateButton");

    calerderButtons.forEach((button) => {
      button.onclick = function (e) {
        const targetDiv = e.target.parentElement;
        addDate(targetDiv).getDisplayCalender();
        runCalender(targetDiv);
      };
    });
  };

  function displayDueDate(targetDiv) {
    const calenders = document.querySelectorAll(".calender");
    calenders.forEach((calender) => {
      createSaveDateButton(calender, targetDiv);
    });
  }

  function changeDate(targetDiv) {
    const changeDueDate = document.createElement("button");
    changeDueDate.classList.add("changeDueDate");
    changeDueDate.textContent = "Change Date";
    targetDiv.appendChild(changeDueDate);

    const changeDateButtons = document.querySelectorAll(".changeDueDate");

    changeDateButtons.forEach((button) => {
      button.onclick = function () {
        const currentDiv = this.parentElement;

        addDate(currentDiv).getDisplayCalender();
        displayDueDate(targetDiv);
      };
    });
  }

  const runCalender = function (targetDiv) {
    displayDueDate(targetDiv);
  };

  const runSaveDueDate = function () {
    const saveNewDateButtons = document.querySelectorAll(".saveNewDate");

    saveNewDateButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const targetDiv = e.target.parentElement;
        if (e.target.parentElement) {
          const calenderValues =
            e.target.parentElement.querySelector(".calender").value;
          const projectName =
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
              ".newProjectName",
            ).textContent;
          let dueDate = null;
          let projects = allProjects().getProjects();
          let todo =
            targetDiv.parentElement.parentElement.querySelector(
              ".todo",
            ).textContent;
          dateController(projectName, calenderValues, todo);

          for (let i = 0; i < projects.length; i++) {
            if (projectName == projects[i]["project"]["projectName"]) {
              for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
                if (projects[i]["project"]["todos"][j]["title"] == todo) {
                  dueDate = projects[i]["project"]["todos"][j].dueDate;
                }
              }
            }
          }

          if (!targetDiv.querySelector(".dueDate")) {
            const dueDateElement = document.createElement("p");
            dueDateElement.classList.add("dueDate");
            dueDateElement.textContent = `Due Date : ${dueDate}`;
            targetDiv.appendChild(dueDateElement);
          }
          targetDiv.querySelector(".dueDate").textContent =
            `Due Date: ${dueDate}`;
          displayUpdateMessage(targetDiv);

          e.target.parentElement.parentElement
            .querySelector(".calender")
            .remove();
          changeDate(targetDiv);
          const taskNames = document.querySelectorAll(".spanTaskName");
          taskNames.forEach((taskName) => {
            if (taskName.textContent == todo) {
              const dueDateText =
                taskName.parentElement.parentElement.querySelector(".dueDate");
              const dueDateInfo = document.querySelector(
                ".currentTaskDiv .dueDate",
              ).textContent;
              dueDateText.textContent = `${dueDateInfo}`;
            }
          });
          storeData(
            document.querySelector(".newProjectName").textContent,
          ).editStorage();
          e.target.remove();
        }
      });
    });
  };

  const runAddMoreInfoButton = function () {
    const moreInfoButtons = document.querySelectorAll(".addMoreInfo");
    moreInfoButtons.forEach((moreInfoButton) => {
      moreInfoButton.onclick = function (e) {
        let currentDiv = e.target.parentElement.parentElement;
        addMoreInfo(currentDiv, e);
        eventController().runSaveChanges();
      };
    });
  };

  const runDeleteProject = function () {
    const projects = allProjects().getProjects();
    const deleteButtons = document.querySelectorAll(".deleteProject");
    deleteButtons.forEach((button) => {
      button.onclick = function (e) {
        let currentProjectName = null;
        let targetDiv = null;
        if (
          e.target.parentElement.parentElement.classList == "projectsBoxItems"
        ) {
          currentProjectName =
            e.target.parentElement.parentElement.querySelector(
              ".spanProjectName",
            ).textContent;
          targetDiv = e.target.parentElement.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList == "projectContainer"
        ) {
          currentProjectName =
            e.target.parentElement.parentElement.querySelector(
              ".newProjectName",
            ).textContent;
          targetDiv = e.target.parentElement.parentElement;
        }
        const currentProject = document.body.querySelector(".projectContainer");
        for (let i = 0; i < projects.length; i++) {
          if (projects[i]["project"]) {
            if (projects[i]["project"]["projectName"] == currentProjectName) {
              const projectId = projects[i]["project ID"];
              localStorage.removeItem(projectId);
              currentProject.remove();
              targetDiv.remove();
              if (targetDiv.classList == "projectsBoxItems") {
                currentProject.remove();
                targetDiv.remove();
              } else if (targetDiv.classList == "projectContainer") {
                if (
                  document.querySelector(".projectsBoxItems .spanProjectName")
                    .textContent == currentProjectName
                ) {
                  document.querySelector(".projectsBoxItems").remove();
                }
              }
            }
          }
        }
        deleteProject(currentProjectName);
        updateDropDown(currentProjectName).removeProject();
        createProjectContainer().createNewProjectContainer();
        displayFirstProjectTodo(e);
        createDeleteBoxes(e).createEmptyTaskBox();
      };
    });
  };

  const runDeleteTask = function () {
    const deleteButtons = document.querySelectorAll(".deleteTask");
    deleteButtons.forEach((button) => {
      button.onclick = function (e) {
        deleteTask(e);
        activateAddMoreButton();
        runAddMoreInfoButton();
        if (!document.querySelector(".currentTaskBox")) {
          createDeleteBoxes(e).createEmptyTaskBox();
        }
        if (document.querySelector(".emptyCurrentTaskDivBox")) {
          document.querySelectorAll(".editTodoButton").forEach((button) => {
            button.disabled = true;
          });
        }
        if (document.querySelector(".todoBoxContainer").children.length == 2) {
          document
            .querySelector(".todoBoxContainer")
            .firstChild.querySelector(".editTodoButton").disabled = true;
        }
      };
    });
  };

  const runAddTaskPriority = function () {
    const taskPriorityButtons = document.querySelector(".priorityButton");
    taskPriorityButtons.onclick = function () {
      addTaskPriority();
      storeData(
        document.querySelector(".newProjectName").textContent,
      ).editStorage();
    };
  };

  const runAddTaskStatus = function () {
    const taskStatusButton = document.querySelectorAll(".taskStatusButton");
    taskStatusButton.forEach((button) => {
      button.onclick = function (e) {
        let currentProjectName =
          document.querySelector(".newProjectName").textContent;
        addTaskStatus(currentProjectName, e);
      };
    });
  };

  const runCreateCheckList = function () {
    const createCheckListButton = document.querySelector(
      ".addCheckListFormButton",
    );
    if (createCheckListButton) {
      createCheckListButton.onclick = function (e) {
        createCheckList().addCheckListForm(e.target);
        runAddCheckItem();
        runSaveChanges();
      };
    }
  };

  const runAddCheckItem = function () {
    const addCheckItemButtons = document.querySelectorAll(".addItemButton");
    addCheckItemButtons.forEach((currentButton) => {
      currentButton.onclick = function (e) {
        const targetButton = this;
        if (!document.querySelector(".checkListInput").value) {
          document.querySelector(".addItemButton").style.marginLeft = "-45px";
        }
        createCheckList().addCheckItem(targetButton);
        e.preventDefault();
      };
    });
  };

  const runCheckListStatus = function () {
    const checkBoxes = document.querySelectorAll(".checkListItem");
    checkBoxes.forEach((checkBox) => {
      checkBox.onclick = function (e) {
        const targetDiv = e.target.parentElement;
        const formDiv = targetDiv.parentElement.parentElement.parentElement;
        createCheckList().checkListStatus(targetDiv, formDiv);
      };
    });
  };
  const saveTodoChangesAddedFromHeader = function () {
    const newChangesButton = document.querySelectorAll(".saveNewChanges");
    newChangesButton.forEach((button) => {
      button.onclick = function (e) {
        if (
          userInput().getProjectDescription() !== "" &&
          userInput().getNoteInput() !== ""
        ) {
          const container = e.target.parentElement;
          const todo = container.querySelector(".todo");
          const projectContainer =
            e.target.parentElement.parentElement.parentElement;
          const currentProjectName =
            e.target.parentElement.parentElement.parentElement.querySelector(
              ".newProjectName",
            ).textContent;
          let projects = allProjects().getProjects();
          for (let i = 0; i < projects.length; i++) {
            if (projects[i]["project"]["projectName"] == currentProjectName) {
              if (e.target.parentElement.querySelector(".taskButtonsDiv")) {
                e.target.parentElement
                  .querySelector(".taskButtonsDiv")
                  .remove();
                addTaskButtons(
                  container,
                  currentProjectName,
                  todo.textContent,
                  projectContainer,
                );
                e.target.parentElement.querySelector(
                  ".todo",
                ).style.marginBottom = "30px";
              }
              e.target.parentElement
                .querySelector(".descriptionInput")
                .remove();
              e.target.parentElement.querySelector(".noteInput").remove();

              storeData(
                projectContainer.querySelector(".newProjectName").textContent,
              ).editStorage();
              e.target.remove();
            }
          }
        } else {
          if (userInput().getProjectDescription() == "") {
            e.target.parentElement.classList.add("todoDivContent_2");
            if (!e.target.parentElement.querySelector(".errorMessage")) {
              e.target.parentElement
                .querySelector(".descriptionDiv")
                .appendChild(errorMessage());
              setTimeout(() => {
                e.target.parentElement.querySelector(".errorMessage").remove();
              }, 2000);
            }
          } else if (userInput().getNoteInput() == "") {
            if (!e.target.parentElement.querySelector(".errorMessage")) {
              e.target.parentElement
                .querySelector(".noteDiv")
                .appendChild(errorMessage());
              setTimeout(() => {
                e.target.parentElement.querySelector(".errorMessage").remove();
              }, 2000);
            }
          }
        }
      };
    });
  };

  const runTodosForProjects = function () {
    const viewTaskButtons = document.querySelectorAll(".viewTasks");

    viewTaskButtons.forEach((taskButton) => {
      taskButton.onclick = function (e) {
        displayFirstProjectTodo(e);
        runDeleteTask();
        runTodoEditButton();
        runCreateTaskButton();
        document.querySelector(".todoBoxContainer").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        createDeleteBoxes(e).createEmptyTaskBox();
        if (document.querySelector(".currentTaskBox")) {
          addCheckItemsOnNewScreen(e);
        }
        disableSampleProjectButtons();
      };
    });
  };

  const runAddProjectStatus = function () {
    const addProjectStatusButtons = document.querySelectorAll(
      ".projectStatusButton",
    );
    addProjectStatusButtons.forEach((projectStatusButon) => {
      projectStatusButon.onclick = function (e) {
        projectStatusButon.style.backgroundColor = "rgb(79, 126, 126)";
        projectStatusButon.style.color = "white";
        setTimeout(() => {
          projectStatusButon.style.backgroundColor = "";
          projectStatusButon.style.color = "black";
        }, 3500);
        addProjectStatus(
          e.target.parentElement.parentElement.querySelector(".spanProjectName")
            .textContent,
          e,
        ).getProjectStatus();
      };
    });
  };

  const runCurrentDivInfo = function () {
    const moreInfoButtons = document.querySelectorAll(".viewMoreInfo");
    let note = null;
    let currentProjectName = null;
    let todo = null;
    let status = null;
    let taskPriorityStatus = null;
    let dueDate = null;
    moreInfoButtons.forEach((button) => {
      button.onclick = function (e) {
        createDeleteBoxes().deleteEmptyCurrentTaskDivBox();
        let projects = allProjects().getProjects();
        todo =
          e.target.parentElement.parentElement.querySelector(
            ".spanTaskName",
          ).textContent;
        if (document.querySelector(".currentTaskBox")) {
          document.querySelector(".currentTaskBox").remove();
        }
        for (let i = 0; i < projects.length; i++) {
          if (
            projects[i]["project"]["projectName"] ==
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
              ".newProjectName",
            ).textContent
          ) {
            currentProjectName = projects[i]["project"]["projectName"];
            for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
              if (projects[i]["project"]["todos"][j]["title"] == todo) {
                status = projects[i]["project"]["todos"][j]["taskStatus"];
                taskPriorityStatus =
                  projects[i]["project"]["todos"][j]["taskPriority"];
                dueDate = projects[i]["project"]["todos"][j]["dueDate"];
              }
            }
          }
        }

        document.querySelectorAll(".editTodoButton").forEach((button) => {
          if (button.disabled == true) {
            button.disabled = false;
          }
        });

        createProjectContainer().createCurrentTaskBox(
          e.target.parentElement.parentElement.querySelector(".spanTaskName"),
          status,
          taskPriorityStatus,
        );
        createTaskButtonsDiv();
        createDate(
          document.querySelector(".currentTaskDiv"),
          currentProjectName,
          e.target.parentElement.parentElement.querySelector(".spanTaskName")
            .textContent,
        ).getDateProjectWasCreated();
        addDate(
          document.querySelector(".currentTaskDiv"),
          dueDate,
        ).getCreateButton();
        eventController().runCalenderButton();
        createDescription(
          currentProjectName,
          todo,
          document.querySelector(".currentTaskDiv"),
        ).getDisplayDescription();
        createNote(
          currentProjectName,
          note,
          todo,
          document.querySelector(".currentTaskDiv"),
        ).getDisplayNote();

        document.querySelector(".currentTaskDiv").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        runEditDescription();
        runEditNote(document.querySelector(".newProjectName"));
        runDeleteTask();
        runAddTaskPriority();
        runAddTaskStatus();
        runTodoEditButton();
        runCreateCheckList();
        addCheckItemsOnNewScreen(e);
      };
    });
  };

  const runIncludeMoreInfo = function () {
    const includeMoreInfoButtons =
      document.querySelectorAll(".includeMoreInfo");
    includeMoreInfoButtons.forEach((button) => {
      button.onclick = function (e) {
        const todoBox = button.parentElement.parentElement;
        createTodoDescription(todoBox);
        createTodoNote(todoBox);
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Changes";
        saveButton.classList.add("saveChanges");
        todoBox.appendChild(saveButton);
        eventController().runSaveChanges();
        e.target.parentElement.parentElement
          .querySelector(".taskName")
          .remove();
        e.target.parentElement.remove();
      };
    });
  };
  const getCurrentProjectName = () => currentProjectName;

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
    runDeleteAllProjects,
    runTodosForProjects,
    runAddProjectStatus,
    runCurrentDivInfo,
    runIncludeMoreInfo,
    deleteProjectsConfirmationButton1,
    deleteProjectsDeclineButton,
  };
}

function addTaskButtons(container, currentProjectName, todo, projectContainer) {
  const note = userInput().getNoteInput();
  const priority = document.createElement("p");
  priority.classList.add("priority");
  priority.textContent = "Task Priority : ";

  const editTodo = document.createElement("button");
  editTodo.classList.add("editTodoButton");
  editTodo.textContent = "Edit Task";

  const deleteTask = document.createElement("button");
  deleteTask.classList.add("deleteTask");
  deleteTask.textContent = "Delete";

  const priorityButton = document.createElement("button");
  priorityButton.classList.add("priorityButton");
  priorityButton.textContent = "Task Priority";

  const taskStatusButton = document.createElement("button");
  taskStatusButton.classList.add("taskStatusButton");
  taskStatusButton.textContent = "Task Status";

  container.querySelector(".todo").after(priority);
  // priority.after(taskButtonsDiv)
  // taskButtonsDiv.appendChild(editTodo)
  // taskButtonsDiv.appendChild(deleteTask)
  // taskButtonsDiv.appendChild(priorityButton)
  // taskButtonsDiv.appendChild(taskStatusButton)

  createDescription(currentProjectName, todo).getDescriptionInput();
  createDescription(
    currentProjectName,
    todo,
    container,
  ).getDisplayDescription();

  createNote(currentProjectName, note, todo).getNoteInput();
  createNote(currentProjectName, note, todo, container).getDisplayNote();
  createDate(container, currentProjectName, todo).getDateProjectWasCreated();
  addDate(projectContainer).getCreateButton();
  eventController().runCalenderButton();
  createCheckList(projectContainer).createContainer();

  eventController().runEditDescription();
  eventController().runEditNote(currentProjectName);
  eventController().runDeleteTask();
  eventController().runAddTaskPriority();
  eventController().runAddTaskStatus();
  eventController().runTodoEditButton();
  eventController().runCreateCheckList();
}

function userInput(checkListInput) {
  let projectNameInput;
  let headerTodoInput;
  let projectDescription;
  let note;
  let checkInput;

  if (document.querySelector(".projectNameInput")) {
    projectNameInput = document.querySelector(".projectNameInput").value;
  }

  let arr = [];
  const taskInputs = document.querySelectorAll(".todoInput");
  taskInputs.forEach((inputs) => {
    arr.push(inputs.value);
  });

  if (document.querySelector(".headerTodoInput")) {
    headerTodoInput = document.querySelector(".headerTodoInput").value;
  }

  if (document.querySelector(".descriptionInput")) {
    projectDescription = document.querySelector(".descriptionInput").value;
  }

  if (document.querySelector(".noteInput")) {
    note = document.querySelector(".noteInput").value;
  }
  if (checkListInput) {
    checkInput = checkListInput.value;
  }

  const getUserInput = () => projectNameInput;
  const getTaskNameInput = () => arr;
  const getHeaderTodoInput = () => headerTodoInput;
  const getProjectDescription = () => projectDescription;
  const getNoteInput = () => note;
  const getCheckInput = () => checkInput;

  return {
    getUserInput,
    getTaskNameInput,
    getHeaderTodoInput,
    getProjectDescription,
    getNoteInput,
    getCheckInput,
  };
}

function createTaskButtonsDiv() {
  const taskButtonsDiv = document.querySelector(".taskButtonsDiv");

  const editTodoButton = document.createElement("button");
  editTodoButton.textContent = "Edit";
  editTodoButton.classList.add("editTodoButton");

  const deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete Task";
  deleteTask.classList.add("deleteTask");

  const taskPriority = document.createElement("button");
  taskPriority.textContent = "Priority";
  taskPriority.classList.add("priorityButton");

  const taskStatusButton = document.createElement("button");
  taskStatusButton.textContent = "Task Status";
  taskStatusButton.classList.add("taskStatusButton");

  if (taskButtonsDiv) {
    taskButtonsDiv.appendChild(editTodoButton);
    taskButtonsDiv.appendChild(deleteTask);
    taskButtonsDiv.appendChild(taskPriority);
    taskButtonsDiv.appendChild(taskStatusButton);
  }
  eventController().runTodoEditButton();
}

function createTodoDescription(currentDiv) {
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("descriptionDiv");
  if (currentDiv.className == "todoInput") {
    currentDiv.after(descriptionDiv);
  } else if (currentDiv.className == "todoBox") {
    currentDiv.appendChild(descriptionDiv);
  }

  const descriptionInput = document.createElement("input");
  descriptionInput.classList.add("descriptionInput");
  descriptionInput.placeholder = "Describe Your Task";
  descriptionDiv.appendChild(descriptionInput);
}

function createTodoNote(currentDiv) {
  const todoDivContent = currentDiv.querySelectorAll(".todoDivContent");
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("noteDiv");

  todoDivContent.forEach((container) => {
    container.appendChild(noteDiv);
  });

  if (currentDiv.className == "todoBox") {
    currentDiv.appendChild(noteDiv);
    currentDiv.querySelector(".noteDiv").style.marginTop = "30px";
  }
  const noteInput = document.createElement("input");
  noteInput.classList.add("noteInput");
  noteInput.placeholder = "Note On Task";
  noteDiv.appendChild(noteInput);
}

let count = -1;
function createNewProjectContainer() {
  function taskbuttonNumber() {
    const increaseNumber = () => count++;
    const getNewCount = () => count;

    return { increaseNumber, getNewCount };
  }

  taskbuttonNumber().increaseNumber();
  const projectInputDiv = document.createElement("div");
  projectInputDiv.classList.add("projectInputDiv");
  document.querySelector(".headerDiv").after(projectInputDiv);

  const newProjectContainer = document.createElement("div");
  newProjectContainer.classList.add("newProjectContainer");
  newProjectContainer.classList.add("actualProject");
  document.querySelector(".projectInputDiv").appendChild(newProjectContainer);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");
  newProjectContainer.appendChild(titleContainer);

  const projectName = document.createElement("h2");
  projectName.classList.add("projectName");
  projectName.textContent = "Project Name";
  titleContainer.appendChild(projectName);

  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  newProjectContainer.appendChild(cursor);

  const projectNameInput = document.createElement("input");
  projectNameInput.classList.add("projectNameInput");
  projectNameInput.setAttribute("maxLength", 32);
  cursor.appendChild(projectNameInput);

  const iElement = document.createElement("i");
  cursor.appendChild(iElement);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  newProjectContainer.appendChild(todoDiv);

  const todoTitleDiv = document.createElement("div");
  todoTitleDiv.classList.add("todoDivTitle");
  todoDiv.appendChild(todoTitleDiv);

  const task = document.createElement("h3");
  task.classList.add("task");
  task.textContent = "Tasks";
  todoTitleDiv.appendChild(task);

  const createNewTodo = document.createElement("button");
  createNewTodo.classList.add("createNewTodo");
  createNewTodo.classList.add(`${taskbuttonNumber().getNewCount()}`);
  createNewTodo.textContent = "+";
  todoTitleDiv.appendChild(createNewTodo);

  const submitProject = document.createElement("button");
  submitProject.classList.add("submitProject");
  submitProject.textContent = "Submit Project";
  newProjectContainer.appendChild(submitProject);
  eventController().runSubmitProject();
}

function displayProject() {
  if (!document.querySelector(".projectContainer")) {
    createNewProjectContainer();
  } else {
    createNewProjectContainer();
  }
}

function createTask(currentProjectName, newProjectNameDiv, e) {
  function createInputAndButton() {
    const todoInput = document.createElement("input");
    todoInput.classList.add("todoInput");
    todoInput.setAttribute("maxlength", 32);
    todoInput.placeholder = "New Task";

    const targetDiv = e.target.parentElement.parentElement.parentElement;
    const todoDivContent = document.createElement("div");
    todoDivContent.classList.add("todoDivContent");
    if (e.target.parentElement.className == "todoDivTitle") {
      e.target.parentElement.parentElement.appendChild(todoDivContent);
      todoDivContent.appendChild(todoInput);
      createTodoDescription(todoInput);
      createTodoNote(targetDiv);
      e.target.remove();
    } else {
      document
        .querySelector(".todoBoxContainer")
        .lastChild.appendChild(todoDivContent);
      todoDivContent.appendChild(todoInput);
      createTodoDescription(todoInput);
      createTodoNote(targetDiv);
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save Changes";
      saveButton.classList.add("saveChanges");
      todoDivContent.appendChild(saveButton);
      eventController().runSaveChanges();
      e.target.remove();
    }

    if (document.querySelector(".iconDiv")) {
      document.querySelector(".iconDiv").style.backgroundColor = "white";
      document.querySelector(".iconDiv").style.display = "none";
      document.querySelector(".iconDiv").remove();
    }
  }

  function displayTodo() {
    const projects = allProjects().getProjects();
    let todo;
    // let currentTaskBox = document.querySelector('.currentTaskBox')
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == currentProjectName) {
        let currentTask = projects[i]["project"]["todos"];
        todo = document.createElement("h4");

        const taskPriority = document.createElement("p");
        taskPriority.textContent = "Task Priority : ";
        taskPriority.classList.add("priority");

        for (let j = 0; j < currentTask.length; j++) {
          let currentTodo = currentTask[j]["title"];
          todo.textContent = currentTodo;
          todo.classList.add("todo");
        }
        if (!todo.textContent == "") {
          createProjectContainer().createCurrentTaskBox(todo);
        }
        createTaskButtonsDiv();
      }
    }
  }
  // const getInputAndButton = () => createInputAndButton
  // const getdisplayTodo = () => displayTodo()

  return {
    createInputAndButton,
    displayTodo,
  };
}

// function editContent (contentToEdit){
//   contentToEdit.setAttribute('contenteditable', true)
// }

function errorMessage() {
  const message = document.createElement("p");
  message.textContent = "Fill empty field(s) and submit";
  message.classList.add("errorMessage");
  return message;
}

function newProject(projectName, currentProjectName) {
  createNewProjects(projectName);
  const projects = allProjects().getProjects();
  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["project"]["projectName"] == projectName) {
      currentProjectName = projects[i]["project"]["projectName"];
    }
  }

  let currentContainer = document.querySelector(".projectContainer");
  if (currentContainer.querySelector(".newProjectName")) {
    currentContainer.querySelector(".newProjectName").remove();
    currentContainer.querySelector(".titleContainerButtonsDiv").remove();
    let newProjectName = document.createElement("h2");
    newProjectName.classList.add("newProjectName");
    newProjectName.textContent = currentProjectName;
    currentContainer.querySelector(".todoDiv").before(newProjectName);

    const titleContainerButtonsDiv = document.createElement("div");
    titleContainerButtonsDiv.classList.add("titleContainerButtonsDiv");

    const editProjectNameButton = document.createElement("button");
    editProjectNameButton.textContent = "Edit";
    editProjectNameButton.classList.add("editProjectName");

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProject");
    deleteProjectButton.textContent = "Delete Project";

    currentContainer
      .querySelector(".newProjectName")
      .after(titleContainerButtonsDiv);
    titleContainerButtonsDiv.appendChild(editProjectNameButton);
    titleContainerButtonsDiv.appendChild(deleteProjectButton);
  } else {
    if (
      document.querySelector(".editProjectName") &&
      document.querySelector(".deleteProject")
    ) {
      document.querySelector(".titleContainerButtonsDiv").remove();
    }

    let newProjectName = document.createElement("h2");
    newProjectName.classList.add("newProjectName");
    newProjectName.textContent = currentProjectName;
    currentContainer.querySelector(".todoDiv").before(newProjectName);

    const titleContainerButtonsDiv = document.createElement("div");
    titleContainerButtonsDiv.classList.add("titleContainerButtonsDiv");

    const editProjectNameButton = document.createElement("button");
    editProjectNameButton.textContent = "Edit";
    editProjectNameButton.classList.add("editProjectName");

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProject");
    deleteProjectButton.textContent = "Delete Project";

    currentContainer
      .querySelector(".newProjectName")
      .after(titleContainerButtonsDiv);
    titleContainerButtonsDiv.appendChild(editProjectNameButton);
    titleContainerButtonsDiv.appendChild(deleteProjectButton);
  }
}

function createDescription(projectName, todo) {
  function descriptionInput() {
    const description = userInput().getProjectDescription();
    addDescriptionToProject(projectName, description, todo);
  }

  function displayDescription() {
    let projects = allProjects().getProjects();
    let description = document.createElement("p");
    description.classList.add("description");
    let currentTaskBox = document.querySelector(".currentTaskBox");

    const descriptionDiv = document.querySelector(".descriptionDiv");
    const descriptionHeading = document.createElement("h5");
    descriptionHeading.classList.add("descriptionHeading");
    descriptionHeading.textContent = "Description";
    descriptionDiv.appendChild(descriptionHeading);

    currentTaskBox
      .querySelector(".descriptionDiv")
      .appendChild(descriptionHeading);

    const descriptionContentDiv = document.createElement("div");
    descriptionContentDiv.classList.add("descriptionContentDiv");
    currentTaskBox
      .querySelector(".descriptionDiv")
      .appendChild(descriptionContentDiv);

    let editDescription = document.createElement("button");
    editDescription.classList.add("editDescription");

    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == projectName) {
        for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
          if (projects[i]["project"]["todos"][j]["title"] == todo) {
            description.textContent =
              projects[i]["project"]["todos"][j]["description"];
            if (!projects[i]["project"]["todos"][j]["description"]) {
              editDescription.textContent = "Add Description";
            } else {
              editDescription.textContent = "Edit";
            }
          }
        }

        descriptionContentDiv.appendChild(description);
        descriptionContentDiv.appendChild(editDescription);
      }
    }
  }

  const getDescriptionInput = () => descriptionInput();
  const getDisplayDescription = () => displayDescription();

  return {
    getDescriptionInput,
    getDisplayDescription,
  };
}

function editDescription() {}

function createNote(projectName, note, todo) {
  function noteInput() {
    addNoteToProject(projectName, note, todo);
  }

  function displayNote() {
    let projects = allProjects().getProjects();
    let note = document.createElement("p");
    note.classList.add("note");
    let currentTaskBox = document.querySelector(".currentTaskBox");

    let noteHeading = document.createElement("div");
    noteHeading.classList.add("noteHeading");
    noteHeading.textContent = "Note";

    let noteContentDiv = document.createElement("div");
    noteContentDiv.classList.add("noteContentDiv");

    let editNote = document.createElement("button");
    editNote.classList.add("editNote");

    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == projectName) {
        for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
          if (projects[i]["project"]["todos"][j]["title"] == todo) {
            note.textContent =
              projects[i]["project"]["todos"][j]["projectNote"];
            if (!projects[i]["project"]["todos"][j]["projectNote"]) {
              editNote.textContent = "Add Note";
            } else {
              editNote.textContent = "Edit";
            }
          }
        }
        currentTaskBox.querySelector(".noteDiv").appendChild(noteHeading);
        currentTaskBox.querySelector(".noteDiv").appendChild(noteContentDiv);
        noteContentDiv.appendChild(note);
        noteContentDiv.appendChild(editNote);
      }
    }
  }

  const getNoteInput = () => noteInput();
  const getDisplayNote = () => displayNote();

  return {
    getNoteInput,
    getDisplayNote,
  };
}

function createTodoInputAndButton() {
  const headerAddToProjectDiv = document.querySelector(
    ".headerAddToProjectDiv",
  );

  const selectProject = document.createElement("select");
  selectProject.classList.add("selectProject");

  const addOption = document.createElement("option");
  addOption.textContent = "Select A Project";
  addOption.value = "";

  const headerTodoDiv = document.createElement("div");
  headerTodoDiv.classList.add("headerTodoDiv");

  const todoInput = document.createElement("input");
  todoInput.classList.add("headerTodoInput");
  todoInput.placeholder = "Type in Todo";

  const todoSubmitButton = document.createElement("button");
  todoSubmitButton.classList.add("todoSubmitButton");
  todoSubmitButton.textContent = "Submit Todo";

  selectProject.appendChild(addOption);
  headerAddToProjectDiv.appendChild(selectProject);
  headerAddToProjectDiv.appendChild(headerTodoDiv);
  headerTodoDiv.appendChild(todoInput);
  headerTodoDiv.appendChild(todoSubmitButton);
}

function updateDropDown(projectName) {
  function addProject() {
    const selectProject = document.querySelector(".selectProject");
    let arr = [];
    for (let i = 0; i < selectProject.options.length; i++) {
      //
      if (selectProject.options[i].value) {
        arr.push(selectProject.options[i].value);
      }
    }
    const projects = allProjects().getProjects();
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]) {
        if (!arr.includes(projects[i]["project"]["projectName"])) {
          const options = document.createElement("option");
          options.textContent = `${projects[i]["project"]["projectName"]}`;
          options.value = `${projects[i]["project"]["projectName"]}`;
          selectProject.add(options);
        }
      }
    }
  }

  function removeProject() {
    //
    const selectProject = document.querySelector(".selectProject");
    if (selectProject) {
      for (let i = 0; i < selectProject.options.length; i++) {
        if (selectProject[i].value == projectName) {
          selectProject.remove(i);
        }
      }
    }
  }
  return {
    addProject,
    removeProject,
  };
}

function submitTodo(targetButton) {
  if (
    document.querySelector(".headerTodoInput").value &&
    document.querySelector(".selectProject").value
  ) {
    let projects = allProjects().getProjects();
    let selectedProject = document.querySelector(".selectProject").value;
    let targetDiv;
    let projectNames = document.querySelectorAll(".spanProjectName");
    let todo = [userInput().getHeaderTodoInput()];
    let arr = [];
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == selectedProject) {
        for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
          arr.push(projects[i]["project"]["todos"][j]["title"]);
        }
      }
    }
    if (!arr.includes(userInput().getHeaderTodoInput())) {
      projectNames.forEach((projectName) => {
        if (
          selectedProject.toLowerCase() == projectName.textContent.toLowerCase()
        ) {
          targetDiv = projectName.parentElement.parentElement;
          createProjectContainer(todo, targetButton).addTodoBox(
            todo,
            targetButton,
          );
        }
      });
      createTodo(selectedProject, todo).createObject();
      let projects = allProjects().getProjects();
      for (let i = 0; i < projects.length; i++) {
        if (projects[i]["project"]["projectName"] == selectedProject) {
          for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
            if (projects[i]["project"]["todos"][j]["title"] === todo[0]) {
              eventController().runAddMoreInfoButton(targetDiv);
            }
          }
        }
      }
      displayFirstProjectTodo(targetButton);
      updateTodoStatus(selectedProject, todo[0], targetButton.target.className);
      storeData(selectedProject).editStorage();

      document.querySelector(".selectProject").remove();
      document.querySelector(".headerTodoInput").remove();
      targetButton.target.remove();
      addLinesToHeaderButtons();

      document
        .querySelectorAll(".spanProjectName")
        .forEach((spanProjectName) => {
          if (
            spanProjectName.textContent ==
            document.querySelector(".newProjectName").textContent
          ) {
            spanProjectName.parentElement.parentElement.querySelector(
              ".spanProjectStatus",
            ).textContent = "InComplete";
          }
        });
    } else {
      todoAlreadyExistMessage(targetButton.target);
    }
  } else if (!document.querySelector(".selectProject").value) {
    if (!document.querySelector(".selectProjectErrorMessage")) {
      const selectProjectErrorMessage = document.createElement("p");
      selectProjectErrorMessage.textContent = "Please Select Or Create Project";
      selectProjectErrorMessage.classList.add("selectProjectErrorMessage");
      document.querySelector(".selectProject").after(selectProjectErrorMessage);
      document.querySelector(".selectProjectErrorMessage").style.marginTop =
        "-14px";
      setTimeout(() => {
        document.querySelector(".selectProjectErrorMessage").remove();
      }, 3000);
    }
  } else if (!document.querySelector(".headerTodoInput").value) {
    if (!document.querySelector(".errorMessage")) {
      document.querySelector(".headerTodoInput").after(errorMessage());
      document.querySelector(".errorMessage").style.marginTop = "7px";
      setTimeout(() => {
        document.querySelector(".errorMessage").remove();
      }, 2000);
    }
  }
}

function addMoreInfo() {
  const todoBoxContainer =
    document.querySelector(".todoBoxContainer").lastChild;
  if (!todoBoxContainer.querySelector(".icon")) {
    todoBoxContainer.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("iconDiv");
    todoBoxContainer.appendChild(iconDiv);

    const icon = document.createElement("p");
    icon.classList.add("icon");
    icon.classList.add("iconIndicator");
    icon.textContent = "Add Below";

    iconDiv.appendChild(icon);

    setTimeout(() => {
      icon.classList.remove("iconIndicator");
    }, 600);

    setTimeout(() => {
      icon.classList.add("iconIndicator");
    }, 1200);

    setTimeout(() => {
      icon.classList.remove("iconIndicator");
    }, 1800);

    setTimeout(() => {
      icon.classList.add("iconIndicator");
    }, 2400);

    setTimeout(() => {
      icon.classList.remove("iconIndicator");
    }, 3000);

    setTimeout(() => {
      icon.classList.add("iconIndicator");
    }, 3600);

    setTimeout(() => {
      icon.classList.remove(".iconIndicator");
    }, 4200);

    setTimeout(() => {
      icon.classList.add("iconIndicator");
    }, 4800);

    setTimeout(() => {
      icon.classList.remove("iconIndicator");
    }, 5400);
  }
}

function createDate(targetDiv, projectName, todo) {
  function createDateDiv() {
    const dateDiv = document.querySelector(".dateDiv");
    const currentTaskBox = document.querySelector(".currentTaskBox");
    currentTaskBox.querySelector(".descriptionDiv").before(dateDiv);
    currentTaskBox.querySelector(".dateDiv").style.marginBottom = "-10px";
  }

  function dateProjectWasCreated() {
    const currentDate = document.createElement("p");
    currentDate.classList.add("currentDate");
    let calenderValues = undefined;
    const currentTaskBox = document.querySelector(".currentTaskBox");
    dateController(projectName, calenderValues, todo);
    let projects = allProjects().getProjects();
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == projectName) {
        for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
          if (projects[i]["project"]["todos"][j]["title"] == todo) {
            currentDate.textContent = `Created ${projects[i]["project"]["todos"][j].dateCreated}`;
          }
        }
      }
    }
    if (currentTaskBox.querySelector(".dateDiv")) {
      currentTaskBox.querySelector(".dateDiv").appendChild(currentDate);
    }
  }

  const getDateDiv = () => createDateDiv();
  const getDateProjectWasCreated = () => dateProjectWasCreated();

  return {
    getDateDiv,
    getDateProjectWasCreated,
  };
}

function addDate(targetDiv, dueDate) {
  function addDueDateButton() {
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("dueDateDiv");

    const addButton = document.createElement("button");
    addButton.textContent = "Add Due Date";
    addButton.classList.add("dueDateButton");
    const currentTaskDiv = document.querySelector(".currentTaskDiv");
    if (currentTaskDiv.querySelector(".dateDiv")) {
      currentTaskDiv.querySelector(".currentDate").after(dueDateDiv);
      dueDateDiv.appendChild(addButton);
    }

    if (dueDate) {
      let dueDateText = document.createElement("p");
      dueDateText.classList.add("dueDate");
      dueDateText.textContent = `Due Date : ${dueDate}`;

      document.querySelector(".dueDateButton").before(dueDateText);
    }
  }

  function displayCalender() {
    const calender = document.createElement("input");
    calender.classList.add("calender");
    calender.setAttribute("type", "date");
    if (!targetDiv.querySelector(".calender")) {
      targetDiv.appendChild(calender);
    }
  }

  const getCreateButton = () => addDueDateButton();
  const getDisplayCalender = () => displayCalender();

  return {
    getCreateButton,
    getDisplayCalender,
  };
}

function createSaveDateButton(calender, targetDiv) {
  calender.onclick = function () {
    const saveDueDateButton = document.createElement("button");
    saveDueDateButton.classList.add("saveNewDate");
    saveDueDateButton.textContent = "Save New Date";
    if (targetDiv.querySelector(".dueDateButton")) {
      targetDiv.querySelector(".dueDateButton").after(saveDueDateButton);
      targetDiv.querySelector(".dueDateButton").remove();
    } else if (!targetDiv.querySelector(".saveNewDate")) {
      if (this.parentElement.querySelector(".changeDueDate")) {
        this.parentElement
          .querySelector(".changeDueDate")
          .before(saveDueDateButton);
        this.parentElement.querySelector(".changeDueDate").remove();
      }
    }
    eventController().runSaveDueDate();
  };
}

function displayUpdateMessage(targetDiv) {
  const dateUpdated = document.createElement("p");
  dateUpdated.classList.add("dateUpdated");
  dateUpdated.textContent = "Date Updated";

  targetDiv.querySelector(".dueDate").after(dateUpdated);
  setTimeout(() => {
    dateUpdated.remove();
  }, 1000);
}

function todoAlreadyExistMessage(targetButton, todoInput) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "Todo name already exist for this project";
  errorMessage.classList.add("headerErrorMessage");

  errorMessage.style.marginTop = "7px";

  if (targetButton.className == "todoSubmitButton") {
    const headerAddToProjectDiv = document.querySelector(
      ".headerAddToProjectDiv",
    );
    headerAddToProjectDiv.appendChild(errorMessage);
  } else if (targetButton.target.className == "saveChanges") {
    if (todoInput[0] == "") {
      errorMessage.textContent = "Please Fill Empty Field";
      targetButton.target.parentElement
        .querySelector(".todoInput")
        .after(errorMessage);
    } else {
      if (
        !targetButton.target.parentElement.querySelector(".headerErrorMessage")
      ) {
        targetButton.target.parentElement
          .querySelector(".todoInput")
          .after(errorMessage);
      }
    }
  }
  setTimeout(() => {
    errorMessage.remove();
  }, 3000);
}

function deleteTask(e) {
  let currentContainer;
  let currentTodo;
  if (e.target.parentElement.parentElement.className == "todoBox") {
    currentContainer =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement;
    currentTodo =
      e.target.parentElement.parentElement.querySelector(".spanTaskName");
  } else {
    currentContainer =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    currentTodo =
      e.target.parentElement.parentElement.parentElement.querySelector(".todo");
  }
  const todoText = currentTodo.textContent;
  removeTaskFromArray(
    currentContainer.querySelector(".newProjectName").textContent,
    currentTodo.textContent,
  );
  const taskNames = document.querySelectorAll(".spanTaskName");
  taskNames.forEach((taskName) => {
    if (taskName.textContent == todoText) {
      if (e.target.parentElement.parentElement.className == "todoBox") {
        if (
          taskName.parentElement.parentElement &&
          taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
            ".currentTaskBox",
          )
        ) {
          if (
            taskName.textContent ==
            taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
              ".currentTaskBox .todo",
            ).textContent
          ) {
            taskName.parentElement.parentElement.parentElement.parentElement.parentElement
              .querySelector(".currentTaskBox")
              .remove();
          }
          taskName.parentElement.parentElement.remove();
        } else if (
          !taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
            ".currentTaskBox",
          )
        ) {
          taskName.parentElement.parentElement.remove();
        }
      } else {
        if (
          taskName.textContent ==
          taskName.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
            ".currentTaskBox .todo",
          ).textContent
        ) {
          taskName.parentElement.parentElement.parentElement.parentElement.parentElement
            .querySelector(".currentTaskBox")
            .remove();
        }
        taskName.parentElement.parentElement.remove();
      }
    }
  });
  storeData(
    document.querySelector(".newProjectName").textContent,
  ).editStorage();
}

function addTaskPriority() {
  const projects = allProjects().getProjects();
  const currentProjectName =
    document.querySelector(".newProjectName").textContent;
  const todo = document.querySelector(".todo").textContent;
  const taskPriority = document.querySelector(".priority");
  projectPriorityController(currentProjectName, todo).addPriorityToProject();
  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["project"]["projectName"] == currentProjectName) {
      for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
        if (projects[i]["project"]["todos"][j]["title"] == todo) {
          taskPriority.textContent = `Task Priority : ${projects[i]["project"]["todos"][j]["taskPriority"]}`;
          const taskNames = document.querySelectorAll(".spanTaskName");
          taskNames.forEach((taskName) => {
            const currentPriorityDiv =
              taskName.parentElement.parentElement.querySelector(
                ".taskPriority",
              );
            if (taskName.textContent == todo) {
              const todoTaskPriority =
                taskName.parentElement.parentElement.querySelector(
                  ".taskPriority",
                );
              todoTaskPriority.textContent = `Task Priority : ${projects[i]["project"]["todos"][j]["taskPriority"]}`;
              if (taskPriority.textContent == "Task Priority : High") {
                taskPriority.classList.add("high");
                currentPriorityDiv.classList.add("high");
                taskPriority.classList.remove("low");
                taskPriority.classList.remove("extreme");
                currentPriorityDiv.classList.remove("low");
                currentPriorityDiv.classList.remove("extreme");
              } else if (taskPriority.textContent == "Task Priority : Low") {
                taskPriority.classList.add("low");
                currentPriorityDiv.classList.add("low");
                taskPriority.classList.remove("extreme");
                taskPriority.classList.remove("high");
                currentPriorityDiv.classList.remove("extreme");
                currentPriorityDiv.classList.remove("high");
              } else if (
                taskPriority.classList.add("extreme") ||
                currentPriorityDiv.classList.add("extreme")
              ) {
                taskPriority.classList.add("extreme");
                currentPriorityDiv.classList.add("extreme");
                taskPriority.classList.remove("low");
                taskPriority.classList.remove("high");
                currentPriorityDiv.classList.remove("high");
                currentPriorityDiv.classList.remove("low");
              }
            }
          });
        }
      }
    }
  }
}

function addTaskStatus(projectName, e) {
  const todo = document.querySelector(".todo").textContent;
  let projects = allProjects().getProjects();
  let taskStatus;
  let allTaskStatus = [];
  let currentTodo =
    e.target.parentElement.parentElement.querySelector(".todo").textContent;
  let taskPriority = document.querySelector(".priority");

  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["project"]["projectName"] == projectName) {
      updateTodoStatus(projectName, currentTodo);
      for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
        if (projects[i]["project"]["todos"][j]["taskStatus"] == undefined) {
          allTaskStatus.push("InComplete");
        } else {
          allTaskStatus.push(projects[i]["project"]["todos"][j]["taskStatus"]);
        }
        if (projects[i]["project"]["todos"][j]["title"] == currentTodo) {
          taskStatus = projects[i]["project"]["todos"][j]["taskStatus"];
        }
      }
    }
  }

  let spanTaskNames = document.querySelectorAll(".spanTaskName");
  let statusText = document.createElement("p");
  statusText.classList.add("statusText");
  statusText.textContent = taskStatus;
  spanTaskNames.forEach((spanTaskName) => {
    if (spanTaskName.textContent == todo) {
      spanTaskName.parentElement.parentElement.querySelector(
        ".spanTaskStatus",
      ).textContent = taskStatus;
      if (!document.querySelector(".statusText")) {
        taskPriority.before(statusText);
        document.querySelector(".statusText").style.width = "50px";
        document.querySelector(".statusText").style.textAlign = "center";
      } else {
        document.querySelector(".statusText").remove();
        taskPriority.before(statusText);
        document.querySelector(".statusText").style.width = "50px";
        document.querySelector(".statusText").style.textAlign = "center";
      }
    }
  });

  let projectBoxItems = document.querySelectorAll(".projectsBoxItems");
  projectBoxItems.forEach((boxItem) => {
    if (boxItem.querySelector(".spanProjectName").textContent == projectName) {
      if (allTaskStatus.includes("InComplete")) {
        updateProjectStatus(projectName, "InComplete");
        boxItem.querySelector(".spanProjectStatus").textContent = "InComplete";
      } else if (!allTaskStatus.includes("InComplete")) {
        boxItem.querySelector(".spanProjectStatus").textContent = "Completed";
        updateProjectStatus(projectName, "Completed");
      }
    }
  });
  storeData(projectName).editStorage();
}

function createCheckList() {
  let currentTaskBox = document.querySelector(".currentTaskDiv");
  function createContainer() {
    const currentTaskDiv = document.querySelector(".currentTaskDiv");
    const checkListContainer = currentTaskBox.querySelector(
      ".checkListContainer",
    );
    const checkListHeaderContainer = document.querySelector(
      ".checkListHeaderContainer",
    );
    const checkListHeading = document.querySelector(".checkListHeading");
    const addCheckListFormButton = document.querySelector(
      ".addCheckListFormButton",
    );
    checkListHeaderContainer.classList.add("checkListHeaderContainer");

    currentTaskDiv
      .querySelector(".currentTaskBox")
      .appendChild(checkListContainer);
    if (
      !currentTaskDiv
        .querySelector(".currentTaskBox")
        .querySelector(".checkListContainer")
    ) {
      if (
        currentTaskDiv
          .querySelector(".currentTaskBox")
          .querySelector(".saveNewChanges")
      ) {
        currentTaskDiv
          .querySelector(".currentTaskBox")
          .querySelector(".saveNewChanges")
          .before(checkListContainer);
      }
    }
    checkListContainer.appendChild(checkListHeaderContainer);
    checkListHeaderContainer.appendChild(checkListHeading);
    checkListHeaderContainer.appendChild(addCheckListFormButton);
  }

  function addCheckListForm(targetButton) {
    if (
      !targetButton.parentElement.parentElement.querySelector(".checkListForm")
    ) {
      const checkListForm = document.createElement("form");
      checkListForm.classList.add(`checkListForm`);
      if (targetButton.parentElement.classList == "checkListContainer") {
        targetButton.parentElement.appendChild(checkListForm);
      } else {
        targetButton.parentElement.parentElement.appendChild(checkListForm);
      }
      const checkListDiv = document.createElement("div");
      checkListDiv.classList.add("checkListDiv");

      const checkListInputDiv = document.createElement("div");
      checkListInputDiv.classList.add("checkListInputDiv");

      const checkListInput = document.createElement("input");
      checkListInput.classList.add("checkListInput");

      const addItemButton = document.createElement("button");
      addItemButton.classList.add("addItemButton");
      addItemButton.textContent = "Add";

      checkListForm.appendChild(checkListDiv);
      checkListForm.appendChild(checkListInputDiv);
      checkListInputDiv.appendChild(checkListInput);
      checkListInputDiv.appendChild(addItemButton);
      targetButton.parentElement.parentElement
        .querySelector(".addCheckListFormButton")
        .remove();
    } else if (
      targetButton.parentElement.parentElement.querySelector(".checkListForm")
    ) {
      const checkListInputDiv = document.createElement("div");
      checkListInputDiv.classList.add("checkListInputDiv");
      const checkListInput = document.createElement("input");
      checkListInput.classList.add("checkListInput");

      const addItemButton = document.createElement("button");
      addItemButton.classList.add("addItemButton");
      addItemButton.textContent = "Add";

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save Checklist";
      saveButton.classList.add("saveChanges");
      const checkListForm =
        targetButton.parentElement.parentElement.querySelector(
          ".checkListForm",
        );

      checkListForm.appendChild(checkListInputDiv);
      checkListInputDiv.appendChild(checkListInput);
      checkListInputDiv.appendChild(addItemButton);
      checkListForm.appendChild(saveButton);
      targetButton.parentElement
        .querySelector(".addCheckListFormButton")
        .remove();
    }
  }

  function addCheckItem(targetButton) {
    let checkInput;
    if (
      targetButton.parentElement.querySelector(".checkListInput").value !== ""
    ) {
      checkInput = userInput(
        targetButton.parentElement.querySelector(".checkListInput"),
      ).getCheckInput();
      targetButton.parentElement.querySelector(".checkListInput").value = "";
      const checkListItem = document.createElement("input");
      checkListItem.setAttribute("type", "checkbox");
      checkListItem.classList.add("checkListItem");
      const label = document.createElement("label");
      label.classList.add("checkItem");
      label.textContent = checkInput;

      const checkDivs = document.createElement("div");
      checkDivs.classList.add("checkDivs");

      const checkDiv = document.createElement("div");
      checkDiv.classList.add("checkDiv");

      targetButton.parentElement.parentElement
        .querySelector(".checkListDiv")
        .appendChild(checkDiv);
      checkDiv.appendChild(checkListItem);
      checkDiv.appendChild(label);
      eventController().runCheckListStatus();

      if (
        !targetButton.parentElement.parentElement.parentElement.querySelector(
          ".saveChanges",
        )
      ) {
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Checklist";
        saveButton.classList.add("saveChanges");
        targetButton.parentElement.parentElement.appendChild(saveButton);
        eventController().runSaveChanges();
      }
      //
    } else {
      if (!targetButton.parentElement.querySelector(".errorMessage")) {
        targetButton.parentElement
          .querySelector(".checkListInput")
          .after(errorMessage());
        targetButton.parentElement.querySelector(
          ".errorMessage",
        ).style.marginTop = "23px";
      }
    }
  }

  function saveCheckList() {
    const checkListHeaderContainer = document.querySelector(
      ".checkListHeaderContainer",
    );

    if (!checkListHeaderContainer.querySelector(".addCheckListFormButton")) {
      const addCheckListFormButton = document.createElement("button");
      addCheckListFormButton.classList.add("addCheckListFormButton");
      addCheckListFormButton.textContent = "Add";
      checkListHeaderContainer
        .querySelector(".checkListHeading")
        .after(addCheckListFormButton);
    }
    document.querySelector(".saveChanges").remove();
    if (document.querySelector(".checkListInputDiv")) {
      document.querySelector(".checkListInputDiv").remove();
    }
    eventController().runCreateCheckList();
    storeData(
      document.querySelector(".newProjectName").textContent,
    ).editStorage();
  }

  function checkListStatus() {
    const checkListForm = document.querySelector(".checkListForm");

    if (!checkListForm.querySelector(".saveChanges")) {
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save Checklist";
      saveButton.classList.add("saveChanges");
      checkListForm.appendChild(saveButton);
      eventController().runSaveChanges();
    }
  }

  return {
    createContainer,
    addCheckListForm,
    addCheckItem,
    saveCheckList,
    checkListStatus,
  };
}

function projectsBoxDivTitle(e) {
  let className = e.target.classList;
  if (className == "allProjects") {
    document.querySelector(".projectTitle").textContent = "All Projects";
    document.querySelector(".projectsBox").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  } else if (className == "completedProjects") {
    displayAllProjects(e);
    document.querySelector(".projectTitle").textContent = "Completed Projects";
    document.querySelector(".projectsBox").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  } else if (className == "unCompletedProjects") {
    displayAllProjects(e);
    document.querySelector(".projectTitle").textContent =
      "UnCompleted Projects";
    document.querySelector(".projectsBox").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  } else if (className == "deleteAllProjects") {
    document.querySelector(".projectTitle").textContent = "All Projects";
    document.querySelector(".deleteAllProjectsPopUpDiv").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

let value;
function increment() {
  value = Number(
    allProjects().getProjects()[allProjects().getProjects().length - 1][
      "project ID"
    ],
  );
  return value;
}

function storeData(currentProjectName) {
  let projects = allProjects().getProjects();
  function populateStorage() {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == currentProjectName) {
        if (typeof projects[i]["project"]["todos"] == "object") {
          localStorage.setItem(`${increment()}`, JSON.stringify(projects[i]));
        } else if (typeof projects[i]["project"]["todos"] == "string") {
          //  localStorage.setItem(`${projects[i]['project']['projectName']}`, projects[i]['project']['todos'])
        }
      }
    }
  }
  function editStorage() {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == currentProjectName) {
        if (typeof projects[i]["project"]["todos"] == "object") {
          localStorage.setItem(
            `${projects[i]["project ID"]}`,
            JSON.stringify(projects[i]),
          );
        } else if (typeof projects[i]["project"]["todos"] == "string") {
          localStorage.setItem(
            `${projects[i]["project"]["projectName"]}`,
            projects[i]["project"]["todos"],
          );
        }
      }
    }
  }

  return {
    populateStorage,
    editStorage,
  };
}

function displayAllProjects(e) {
  if (document.querySelector(".projectInputDiv")) {
    document.querySelector(".projectInputDiv").remove();
  }
  let projects = allProjects().getProjects();
  document.querySelector(".projectsBox").remove();
  let projectsBox = document.createElement("div");
  projectsBox.classList.add("projectsBox");
  document.querySelector(".projectsBoxDiv").appendChild(projectsBox);

  function checkCompletedProjects() {
    let projects = allProjects().getProjects();
    let arr = projects
      .filter((value1) => {
        if (value1["project"]["project status"] == "InComplete") {
          return value1["project"]["project status"];
        } else if (value1["project"]["project status"] == "Completed") {
          return value1["project"]["project status"];
        }
      })
      .map((value) => {
        return value["project"]["project status"];
      });
    return arr;
  }

  for (let i = projects.length - 1; i >= 0; i--) {
    let projectsBoxItems = document.createElement("div");
    projectsBoxItems.classList.add("projectsBoxItems");

    let spanElementProjectName = document.createElement("span");
    spanElementProjectName.classList.add("spanProjectName");

    let currentProjectStatusText = document.createElement("p");
    currentProjectStatusText.classList.add("nameProject");
    currentProjectStatusText.textContent = "Project :";

    let dateCreatedProjectText = document.createElement("p");
    dateCreatedProjectText.classList.add("dateCreatedProject");
    dateCreatedProjectText.textContent = `Date Created : `;

    let spanElementDateCreated = document.createElement("span");
    spanElementDateCreated.classList.add("spanElementDateCreated");

    let dueDateProjectText = document.createElement("p");
    dueDateProjectText.classList.add("dueDateProjectText");
    dueDateProjectText.textContent = `Due Date : `;

    let spanDueDateProject = document.createElement("span");
    spanDueDateProject.classList.add("spanDueDateProject");

    let projectStatusText = document.createElement("p");
    projectStatusText.classList.add("projectStatusText");
    projectStatusText.textContent = `Project Status :`;

    let spanProjectStatus = document.createElement("span");
    spanProjectStatus.classList.add("spanProjectStatus");

    let projectBoxButtonsDiv = document.createElement("div");
    projectBoxButtonsDiv.classList.add("projectBoxButtonsDiv");

    const addMoreInfoButton = document.createElement("button");
    addMoreInfoButton.classList.add("addMoreInfo");
    addMoreInfoButton.textContent = "More Info";

    const viewTasksButton = document.createElement("button");
    viewTasksButton.classList.add("viewTasks");
    viewTasksButton.textContent = "All Tasks";

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProject");
    deleteProjectButton.textContent = "Delete";

    const projectStatusButton = document.createElement("button");
    projectStatusButton.classList.add("projectStatusButton");
    projectStatusButton.textContent = "Status";
    if (e) {
      if (
        e.target.className == "submitProject" ||
        e.target.className == "saveChanges" ||
        e.target.className == "allProjects" ||
        e.target.className.split(" ")[0] == "editProjectName" ||
        e.target.classList == "deleteAllProjects" ||
        e.target.classList == "deleteProjectsConfirmationButton1"
      ) {
        let currentProjectName = projects[i]["project"]["projectName"];
        let dateCreated = projects[i]["project"]["Date Created"];
        addElements(currentProjectName, dateCreated);

        if (e.target.className == "allProjects") {
          if (document.querySelector(".deleteAllProjectsPopUpDiv")) {
            document.querySelector(".deleteAllProjectsPopUpDiv").remove();
          }
          if (document.querySelector(".todoBoxContainer")) {
            document.querySelector(".todoBoxContainer").remove();
            document.querySelector(".titleContainerButtonsDiv").remove();
            document.querySelector(".newProjectName").remove();
          }
          displayFirstProjectTodo();
          createDeleteBoxes(e).createEmptyTaskBox();
        }
      } else if (e.target.className == "completedProjects") {
        if (document.querySelector(".deleteAllProjectsPopUpDiv")) {
          document.querySelector(".deleteAllProjectsPopUpDiv").remove();
        }
        if (projects[i]["project"]["project status"] == "Completed") {
          let currentProjectName = projects[i]["project"]["projectName"];
          let dateCreated = projects[i]["project"]["Date Created"];
          if (document.querySelector(".todoBoxContainer")) {
            document.querySelector(".todoBoxContainer").remove();
            document.querySelector(".titleContainerButtonsDiv").remove();
            document.querySelector(".newProjectName").remove();
          }
          addElements(currentProjectName, dateCreated);
          displayFirstProjectTodo();
          addCheckItemsOnNewScreen(e);
        } else if (!checkCompletedProjects().includes("Completed")) {
          if (document.querySelector(".displayText")) {
            document.querySelector(".displayText").remove();
          }
          addElements(undefined);
          createDeleteBoxes(e).createEmptyTaskBox();
        }
      } else if (e.target.className == "unCompletedProjects") {
        if (document.querySelector(".deleteAllProjectsPopUpDiv")) {
          document.querySelector(".deleteAllProjectsPopUpDiv").remove();
        }

        if (projects[i]["project"]["project status"] == "InComplete") {
          let currentProjectName = projects[i]["project"]["projectName"];
          let dateCreated = projects[i]["project"]["Date Created"];
          addElements(currentProjectName, dateCreated);
          displayFirstProjectTodo(e);
          createDeleteBoxes(e).createEmptyTaskBox();
        }
        if (!checkCompletedProjects().includes("InComplete")) {
          if (document.querySelector(".displayText")) {
            document.querySelector(".displayText").remove();
          }
          addElements(undefined);
          createDeleteBoxes(e).createEmptyTaskBox();
        }
      }
    } else if (!e) {
      let currentProjectName = projects[i]["project"]["projectName"];
      let dateCreated = projects[i]["project"]["Date Created"];
      addElements(currentProjectName, dateCreated);
    }

    function addElements(currentProjectName, dateCreated) {
      projectsBox.appendChild(projectsBoxItems);

      if (currentProjectName == undefined) {
        let displayText = document.createElement("p");
        displayText.classList.add("displayText");
        projectsBoxItems.remove();

        if (document.querySelector(".projectContainer .newProjectName")) {
          document.querySelector(".projectContainer .newProjectName").remove();
          document.querySelector(".titleContainerButtonsDiv").remove();
          if (document.querySelector(".todoBoxContainer")) {
            document.querySelector(".todoBoxContainer").remove();
          }
        }

        if (e.target.className == "completedProjects") {
          displayText.textContent = "No Completed Project";
          document
            .querySelector(".projectsBox")
            .classList.add("projectsBoxBorderBox");

          if (!document.querySelector(".todoBoxContainer")) {
            const todoBoxContainer = document.createElement("div");
            todoBoxContainer.classList.add("todoBoxContainer");
          }
        } else {
          displayText.textContent = "All Projects Completed";
          document
            .querySelector(".projectsBox")
            .classList.add("projectsBoxBorderBox");
        }
        projectsBox.appendChild(displayText);
        if (document.querySelector(".currentTaskBox")) {
          document.querySelector(".currentTaskBox").remove();
        }
      } else {
        projectsBoxItems.appendChild(currentProjectStatusText);
        spanElementProjectName.textContent = currentProjectName;
        currentProjectStatusText.appendChild(spanElementProjectName);

        projectsBoxItems.appendChild(dateCreatedProjectText);
        spanElementDateCreated.textContent = dateCreated;
        dateCreatedProjectText.appendChild(spanElementDateCreated);

        projectsBoxItems.appendChild(dueDateProjectText);
        spanDueDateProject.textContent = "No Available Date";
        dueDateProjectText.appendChild(spanDueDateProject);
        //
        projectsBoxItems.appendChild(projectStatusText);
        spanProjectStatus.textContent = `${projects[i]["project"]["project status"]}`;
        projectStatusText.appendChild(spanProjectStatus);
        //
        projectsBoxItems.appendChild(projectBoxButtonsDiv);
        projectBoxButtonsDiv.appendChild(addMoreInfoButton);
        projectBoxButtonsDiv.appendChild(viewTasksButton);
        projectBoxButtonsDiv.appendChild(deleteProjectButton);
        projectBoxButtonsDiv.appendChild(projectStatusButton);
        disableDeleteButton();
      }
    }
  }
  eventController().runTodosForProjects();
  eventController().runDeleteProject();
  disableButton();
  eventController().runAddProjectStatus();
  eventController().runCreateTaskButton();
}

function createProjectContainer() {
  function createNewProjectContainer() {
    if (document.querySelector(".projectContainer")) {
      document.querySelector(".projectContainer").remove();
    } else {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("projectContainer");
      document.querySelector(".container").appendChild(projectContainer);
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todoDiv");
      projectContainer.appendChild(todoDiv);

      const taskDiv = document.createElement("div");
      taskDiv.classList.add("taskDiv");
      todoDiv.appendChild(taskDiv);

      const tasksDivTitle = document.createElement("h3");
      tasksDivTitle.classList.add("tasksDivTitle");
      tasksDivTitle.textContent = "All Current Project Tasks";
      taskDiv.appendChild(tasksDivTitle);

      const currentTaskDiv = document.createElement("div");
      currentTaskDiv.classList.add("currentTaskDiv");
      todoDiv.appendChild(currentTaskDiv);

      const currentTaskDivTitle = document.createElement("h3");
      currentTaskDivTitle.classList.add("currentTaskDivTitle");
      currentTaskDivTitle.textContent = "Current Task Information";
      currentTaskDiv.appendChild(currentTaskDivTitle);
    }
  }

  function createCurrentTaskBox(todo, todoStatus, taskPriorityStatus) {
    const currentTaskBox = document.createElement("div");
    currentTaskBox.classList.add("currentTaskBox");
    document.querySelector(".currentTaskDiv").appendChild(currentTaskBox);
    const task = document.createElement("h4");
    task.classList.add("todo");
    if (todo) {
      if (todo.className == "spanTaskName" || todo.className == "todo") {
        task.textContent = todo.textContent;
      } else {
        task.textContent = todo;
      }
    }

    currentTaskBox.appendChild(task);

    let editDisplayIndicatorDiv = document.createElement("div");
    editDisplayIndicatorDiv.classList.add("editDisplayIndicatorDiv");
    task.before(editDisplayIndicatorDiv);

    const priority = document.createElement("p");
    priority.classList.add("priority");

    if (taskPriorityStatus) {
      priority.textContent = `Task Priority : ${taskPriorityStatus}`;
    } else {
      priority.textContent = `Task Priority : Not Specified`;
    }
    currentTaskBox.appendChild(priority);

    let taskPriorityIndicator = function () {
      if (taskPriorityStatus == "Low") {
        document.querySelector(".priority").classList.add("low");
      } else if (taskPriorityStatus == "High") {
        document.querySelector(".priority").classList.add("high");
      } else if (taskPriorityStatus == "Extremely High") {
        document.querySelector(".priority").classList.add("extreme");
      }
    };
    taskPriorityIndicator();

    const statusText = document.createElement("p");
    statusText.classList.add("statusText");
    statusText.textContent = todoStatus;
    priority.before(statusText);
    document.querySelector(".statusText").style.width = "52px";
    document.querySelector(".statusText").style.textAlign = "center";

    const taskButtonsDiv = document.createElement("div");
    taskButtonsDiv.classList.add("taskButtonsDiv");
    currentTaskBox.appendChild(taskButtonsDiv);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("dateDiv");
    currentTaskBox.appendChild(dateDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("descriptionDiv");
    currentTaskBox.appendChild(descriptionDiv);

    const noteDiv = document.createElement("div");
    noteDiv.classList.add("noteDiv");
    currentTaskBox.appendChild(noteDiv);

    const checkListContainer = document.createElement("div");
    checkListContainer.classList.add("checkListContainer");
    currentTaskBox.appendChild(checkListContainer);

    const checkListHeaderContainer = document.createElement("div");
    checkListHeaderContainer.classList.add("checkListHeaderContainer");
    checkListContainer.appendChild(checkListHeaderContainer);

    const checkListHeading = document.createElement("h5");
    checkListHeading.classList.add("checkListHeading");
    checkListHeading.textContent = "Todo CheckList";
    checkListHeaderContainer.appendChild(checkListHeading);

    const addCheckListFormButton = document.createElement("button");
    addCheckListFormButton.classList.add("addCheckListFormButton");
    addCheckListFormButton.textContent = "Add";
    checkListHeaderContainer.appendChild(addCheckListFormButton);
  }

  function addTodoBox(todo, e, todos) {
    const taskName = document.createElement("p");
    taskName.classList.add("taskName");

    const spanTaskName = document.createElement("span");
    spanTaskName.classList.add("spanTaskName");

    const taskPriority = document.createElement("p");
    taskPriority.classList.add("taskPriority");

    const dateCreated = document.createElement("p");
    dateCreated.classList.add("dateCreated");

    const dueDate = document.createElement("p");
    dueDate.classList.add("dueDate");

    const taskStatus = document.createElement("p");
    taskStatus.classList.add("taskStatus");

    const spanTaskStatus = document.createElement("span");
    spanTaskStatus.classList.add("spanTaskStatus");

    const todoBoxTaskButtonsDiv = document.createElement("div");
    todoBoxTaskButtonsDiv.classList.add("todoBoxTaskButtonsDiv");

    const viewMoreButton = document.createElement("button");
    viewMoreButton.classList.add("viewMoreInfo");

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("deleteTask");

    const editTask = document.createElement("button");
    editTask.classList.add("editTodoButton");

    if (!document.querySelector(".todoBoxContainer")) {
      const todoBoxContainer = document.createElement("div");
      todoBoxContainer.classList.add("todoBoxContainer");
      document.querySelector(".taskDiv").appendChild(todoBoxContainer);
    }

    const todoBoxDiv = document.createElement("div");
    todoBoxDiv.classList.add("todoBox");
    document.querySelector(".todoBoxContainer").appendChild(todoBoxDiv);

    if (e.target.className == "viewTasks") {
      taskName.textContent = `Task Name :`;
      todoBoxDiv.appendChild(taskName);

      spanTaskName.textContent = todos;

      taskName.appendChild(spanTaskName);

      taskPriority.textContent = `Task Priority : Not Specified`;
      todoBoxDiv.appendChild(taskPriority);

      dateCreated.textContent = `Date Created : ${formatDate().getDate()}`;
      todoBoxDiv.appendChild(dateCreated);

      dueDate.textContent = `Due Date : Not Specified`;
      todoBoxDiv.appendChild(dueDate);

      taskStatus.textContent = `Task Status : Not Completed`;
      todoBoxDiv.appendChild(taskStatus);

      todoBoxDiv.appendChild(todoBoxTaskButtonsDiv);

      editTask.textContent = "Edit Task";
      todoBoxTaskButtonsDiv.appendChild(editTask);

      viewMoreButton.textContent = "More Info";
      todoBoxTaskButtonsDiv.appendChild(viewMoreButton);

      deleteTaskButton.textContent = "Delete";
      todoBoxTaskButtonsDiv.appendChild(deleteTaskButton);
      eventController().runCurrentDivInfo();
      if (!document.querySelector(".currentTaskBox")) {
        const currentTaskBox = document.createElement("div");
        currentTaskBox.classList.add("currentTaskBox");
        document.querySelector(".currentTaskDivTitle").after(currentTaskBox);
      }
    }
    if (!todo && e.target.classList == "submitProject") {
      const createNewTodo = document.createElement("button");
      createNewTodo.classList.add("createNewTodo");
      createNewTodo.textContent = "+";
      todoBoxDiv.appendChild(createNewTodo);
      eventController().runCreateTaskButton();
    } else if (
      todo &&
      e.target.classList !== "viewTasks" &&
      e.target.className !== "todoSubmitButton"
    ) {
      taskName.textContent = `Task Name :`;
      todoBoxDiv.appendChild(taskName);

      spanTaskName.textContent = todo;

      taskName.appendChild(spanTaskName);

      taskPriority.textContent = `Task Priority : Not Specified`;
      todoBoxDiv.appendChild(taskPriority);

      dateCreated.textContent = `Date Created : ${formatDate().getDate()}`;
      todoBoxDiv.appendChild(dateCreated);

      dueDate.textContent = `Due Date : Not Specified`;
      todoBoxDiv.appendChild(dueDate);

      taskStatus.textContent = `Task Status : `;
      todoBoxDiv.appendChild(taskStatus);

      spanTaskStatus.textContent = "InComplete";
      taskStatus.appendChild(spanTaskStatus);

      todoBoxDiv.appendChild(todoBoxTaskButtonsDiv);

      editTask.textContent = "Edit Task";
      todoBoxTaskButtonsDiv.appendChild(editTask);

      viewMoreButton.textContent = "More Info";
      todoBoxTaskButtonsDiv.appendChild(viewMoreButton);

      deleteTaskButton.textContent = "Delete";
      todoBoxTaskButtonsDiv.appendChild(deleteTaskButton);

      const newTodoBoxDiv = document.createElement("div");
      newTodoBoxDiv.classList.add("todoBox");
      newTodoBoxDiv.classList.add("newTodoBox");
      document.querySelector(".todoBoxContainer").appendChild(newTodoBoxDiv);

      const createNewTodo = document.createElement("button");
      createNewTodo.classList.add("createNewTodo");
      createNewTodo.textContent = "+";
      newTodoBoxDiv.appendChild(createNewTodo);
      eventController().runCreateTaskButton();
    }
  }

  return {
    createNewProjectContainer,
    createCurrentTaskBox,
    addTodoBox,
  };
}

function disableButton() {
  let projectBoxItems = document.querySelectorAll(".projectsBoxItems");
  let projects = allProjects().getProjects();

  projectBoxItems.forEach((box) => {
    for (let i = 0; i < projects.length; i++) {
      if (box.querySelector(".spanProjectName")) {
        if (
          projects[i]["project"]["projectName"] ==
          box.querySelector(".spanProjectName").textContent
        ) {
          if (projects[i]["project"]["todos"].length > 0) {
            box.querySelector(".addMoreInfo").disabled = true;
          }
        }
      }
    }
  });
}

function disableDeleteButton() {
  const deleteButtons = document.querySelectorAll(
    ".projectsBox .deleteProject",
  );
  deleteButtons.forEach((button) => {
    if (
      button.parentElement.parentElement.querySelector(".spanProjectName")
        .textContent == allProjects().getProjects()[0]["project"]["projectName"]
    ) {
      button.disabled = true;
      if (document.querySelector(".titleContainerButtonsDiv")) {
        if (
          document.querySelector(".projectContainer .newProjectName")
            .textContent ==
          allProjects().getProjects()[0]["project"]["projectName"]
        ) {
          document.querySelector(
            ".titleContainerButtonsDiv .deleteProject",
          ).disabled = true;
        }
      }
    }
  });
}

function addProjectStatus(currentProjectName, e) {
  const projectName = currentProjectName;
  function projectStatus() {
    let projects = allProjects().getProjects();
    let currentProjectName =
      e.target.parentElement.parentElement.querySelector(
        ".spanProjectName",
      ).textContent;
    let taskStatus = [];
    let checkListStatusCheck = [];
    for (let i = 0; i < projects.length; i++) {
      if (projects[i]["project"]["projectName"] == currentProjectName) {
        for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
          if (projects[i]["project"]["todos"][j]["taskStatus"] == undefined) {
            taskStatus.push("InComplete");
          } else {
            taskStatus.push(projects[i]["project"]["todos"][j]["taskStatus"]);
            if (projects[i]["project"]["todos"][j]["checkList"]) {
              checkListStatusCheck.push(
                ...Object.values(
                  projects[i]["project"]["todos"][j]["checkList"],
                ),
              );
            }
          }
        }

        if (!taskStatus.includes("InComplete")) {
          e.target.parentElement.parentElement.querySelector(
            ".spanProjectStatus",
          ).textContent = "Completed";
          updateProjectStatus(projectName, "Completed");
        } else if (taskStatus.includes("InComplete")) {
          e.target.parentElement.parentElement.querySelector(
            ".spanProjectStatus",
          ).textContent = "InComplete";
          updateProjectStatus(projectName, "InComplete");
          if (checkListStatusCheck.includes("Incomplete")) {
            e.target.parentElement.parentElement.querySelector(
              ".spanProjectStatus",
            ).textContent = "CheckList Not Completed";
            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(39,42,42)";
            });

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(55,96,127)";
            }, 500);

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(39,42,42)";
            }, 1000);

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(55,96,127)";
            }, 1500);

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(39,42,42)";
            }, 2000);

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(55,96,127)";
            }, 2500);

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(39,42,42)";
            }, 3000);

            setTimeout(() => {
              e.target.parentElement.parentElement.querySelector(
                ".spanProjectStatus",
              ).style.backgroundColor = "rgb(55,96,127)";
            }, 3500);
          }
        }
        let projectsBoxItems = document.querySelectorAll(".projectsBoxItems");
        let sampleProjectName =
          allProjects().getProjects()[0]["project"]["projectName"];

        projectsBoxItems.forEach((box) => {
          let currentProjectName =
            box.querySelector(".spanProjectName").textContent;
          if (currentProjectName !== sampleProjectName) {
            storeData(currentProjectName).editStorage();
          }
        });
      }
    }
  }

  const getProjectStatus = () => projectStatus();

  return {
    getProjectStatus,
  };
}

function displayFirstProjectTodo(e) {
  document.querySelector(".projectContainer").remove();
  let currentProjectName = null;
  if (e) {
    if (e.target.className == "viewTasks") {
      currentProjectName =
        e.target.parentElement.parentElement.querySelector(
          ".spanProjectName",
        ).textContent;
    } else if (e.target.className == "todoSubmitButton") {
      currentProjectName = document.querySelector(".selectProject").value;
    } else if (
      e.target.className == "deleteProject" ||
      e.target.className == "unCompletedProjects" ||
      e.target.className == "deleteAllProjects"
    ) {
      currentProjectName = document
        .querySelector(".projectsBox")
        .children[0].querySelector(".spanProjectName").textContent;
    }
  } else {
    currentProjectName = document
      .querySelector(".projectsBox")
      .children[0].querySelector(".spanProjectName").textContent;
  }
  let projects = allProjects().getProjects();

  createProjectContainer().createNewProjectContainer();

  let newProjectName = document.createElement("h2");
  newProjectName.textContent = currentProjectName;
  newProjectName.classList.add("newProjectName");
  document.querySelector(".todoDiv").before(newProjectName);

  let titleContainerButtonsDiv = document.createElement("div");
  titleContainerButtonsDiv.classList.add("titleContainerButtonsDiv");
  document.querySelector(".todoDiv").before(titleContainerButtonsDiv);

  let editProjectName = document.createElement("button");
  editProjectName.classList.add("editProjectName");
  editProjectName.textContent = "Edit";

  let deleteProject = document.createElement("button");
  deleteProject.classList.add("deleteProject");
  deleteProject.textContent = "Delete Project";

  titleContainerButtonsDiv.appendChild(editProjectName);
  titleContainerButtonsDiv.appendChild(deleteProject);

  let tasksDivTitle = document.querySelector(".tasksDivTitle");

  let todoBoxContainer = document.createElement("div");
  todoBoxContainer.classList.add("todoBoxContainer");

  let todo = null;
  let note = null;
  // let status = null
  let taskPriorityStatus = null;
  let taskDueDate = null;
  let checkList = null;
  let todoStatus;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["project"]["projectName"] == currentProjectName) {
      for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
        todo = projects[i]["project"]["todos"][j]["title"];
        note = projects[i]["project"]["todos"][j]["projectNote"];
        todoStatus = projects[i]["project"]["todos"][j]["taskStatus"];

        if (projects[i]["project"]["todos"][j]["taskPriority"] == undefined) {
          taskPriorityStatus = "Not Specified";
        } else {
          taskPriorityStatus =
            projects[i]["project"]["todos"][j]["taskPriority"];
        }
        let date;
        if (projects[i]["project"]["todos"][j]["dateCreated"] == undefined) {
          date = `${formatDate().getDate()}`;
        } else {
          date = projects[i]["project"]["todos"][j]["dateCreated"];
        }
        let dueDatedata = "Not Specified";
        taskDueDate = projects[i]["project"]["todos"][j]["dueDate"];

        // if(projects[i]['project']['todos'][j]['checkList']){
        //    status = Object.values(projects[i]['project']['todos'][j]['checkList'])
        // }else{
        todoStatus = projects[i]["project"]["todos"][j]["taskStatus"];
        // }
        let todoBox = document.createElement("div");
        todoBox.classList.add("todoBox");

        checkList = projects[i]["project"]["todos"][j]["checkList"];

        let taskName = document.createElement("p");
        taskName.classList.add("taskName");
        taskName.textContent = `Task Name :`;

        let spanTaskName = document.createElement("span");
        spanTaskName.classList.add("spanTaskName");
        spanTaskName.textContent = todo;

        let taskPriority = document.createElement("p");
        taskPriority.classList.add("taskPriority");
        taskPriority.textContent = `Task Priority : ${taskPriorityStatus}`;

        let dateCreated = document.createElement("p");
        dateCreated.classList.add("dateCreated");
        dateCreated.textContent = `Date Created : ${date}`;

        let dueDate = document.createElement("p");
        dueDate.classList.add("dueDate");
        dueDate.textContent = `Due Date : ${dueDatedata}`;
        let taskStatus = document.createElement("p");
        taskStatus.classList.add("taskStatus");
        taskStatus.textContent = `Task Status : `;
        let spanTaskStatus = document.createElement("span");
        spanTaskStatus.classList.add("spanTaskStatus");
        if (!todoStatus) {
          spanTaskStatus.textContent = "InComplete";
        } else {
          spanTaskStatus.textContent = todoStatus;
        }

        const todoBoxTaskButtonsDiv = document.createElement("div");
        todoBoxTaskButtonsDiv.classList.add("todoBoxTaskButtonsDiv");

        const viewMoreButton = document.createElement("button");
        viewMoreButton.classList.add("viewMoreInfo");

        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("deleteTask");

        const editTask = document.createElement("button");
        editTask.classList.add("editTodoButton");

        editTask.textContent = "Edit Task";
        todoBoxTaskButtonsDiv.appendChild(editTask);

        viewMoreButton.textContent = "More Info";
        todoBoxTaskButtonsDiv.appendChild(viewMoreButton);

        deleteTaskButton.textContent = "Delete";
        todoBoxTaskButtonsDiv.appendChild(deleteTaskButton);

        tasksDivTitle.after(todoBoxContainer);
        todoBoxContainer.appendChild(todoBox);
        todoBox.appendChild(taskName);
        taskName.appendChild(spanTaskName);
        todoBox.appendChild(taskPriority);
        todoBox.appendChild(dateCreated);
        todoBox.appendChild(dueDate);
        todoBox.appendChild(taskStatus);
        taskStatus.appendChild(spanTaskStatus);
        todoBox.appendChild(todoBoxTaskButtonsDiv);
      }
    }
    eventController().runCurrentDivInfo();
    eventController().runAddMoreInfoButton();
  }

  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["project"]["projectName"] == currentProjectName) {
      for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
        let todoBoxAll = document.querySelectorAll(".todoBox");
        todoBoxAll.forEach((box) => {
          if (
            projects[i]["project"]["todos"][j]["title"] ==
            box.querySelector(".spanTaskName").textContent
          ) {
            if (projects[i]["project"]["todos"][j]["taskPriority"] == "Low") {
              box.querySelector(".taskPriority").classList.add("low");
            } else if (
              projects[i]["project"]["todos"][j]["taskPriority"] == "High"
            ) {
              box.querySelector(".taskPriority").classList.add("high");
            } else if (
              projects[i]["project"]["todos"][j]["taskPriority"] ==
              "Extremely High"
            ) {
              box.querySelector(".taskPriority").classList.add("extreme");
            }
          }
        });
      }
    }
  }
  if (!document.querySelector(".todoBoxContainer")) {
    let todoBoxContainer = document.createElement("div");
    todoBoxContainer.classList.add("todoBoxContainer");
    document.querySelector(".tasksDivTitle").after(todoBoxContainer);
  }
  const newTodoBoxDiv = document.createElement("div");
  newTodoBoxDiv.classList.add("todoBox");
  newTodoBoxDiv.classList.add("newTodoBox");
  document.querySelector(".todoBoxContainer").appendChild(newTodoBoxDiv);

  const createNewTodo = document.createElement("button");
  createNewTodo.classList.add("createNewTodo");
  createNewTodo.textContent = "+";
  newTodoBoxDiv.appendChild(createNewTodo);
  if (document.querySelector(".todoBoxContainer").children.length > 1) {
    createProjectContainer().createCurrentTaskBox(
      todo,
      todoStatus,
      taskPriorityStatus,
      checkList,
    );
    createTaskButtonsDiv();
    createDate(
      document.querySelector(".todoBoxContainer"),
      currentProjectName,
      todo,
    ).getDateProjectWasCreated();
    addDate(
      document.querySelector(".todoBoxContainer"),
      taskDueDate,
    ).getCreateButton();
    eventController().runCalenderButton();
    createDescription(
      currentProjectName,
      todo,
      document.querySelector(".todoBoxContainer"),
    ).getDisplayDescription();
    createNote(
      currentProjectName,
      note,
      todo,
      document.querySelector(".todoBoxContainer"),
    ).getDisplayNote();
    eventController().runCreateTaskButton();
    eventController().runDeleteTask();
    eventController().runAddTaskPriority();
    eventController().runAddTaskStatus();
    eventController().runEditDescription();
    eventController().runEditNote();
    eventController().runEditButton();
    eventController().runCreateCheckList();
    addCheckItemsOnNewScreen(e);
    eventController().runAddMoreInfoButton();
  }
  if (
    document.querySelector(".newProjectName").textContent ==
    allProjects().getProjects()[0]["project"]["projectName"]
  ) {
    document.querySelector(
      ".titleContainerButtonsDiv .deleteProject",
    ).disabled = true;
    disableSampleProjectButtons(e);
  }
  eventController().runEditButton();
  eventController().runCreateTaskButton();
  createDeleteBoxes(e).createEmptyTaskBox();
  eventController().runDeleteProject();
}

function todoBoxButtonDiv() {
  let todoBoxTaskButtonsDiv = null;

  let setDiv = function (value) {
    todoBoxTaskButtonsDiv = value;
  };

  let getDiv = function () {
    return todoBoxTaskButtonsDiv;
  };

  return {
    setDiv,
    getDiv,
  };
}

function removeAllProjects(e) {
  const deleteAllProjectsPopUpDiv = document.createElement("div");
  deleteAllProjectsPopUpDiv.classList.add("deleteAllProjectsPopUpDiv");

  const deleteAllProjectsPopUpMessage = document.createElement("p");
  deleteAllProjectsPopUpMessage.classList.add("deleteAllProjectsPopUpMessage");
  deleteAllProjectsPopUpMessage.textContent =
    "Do You Want To Delete All Projects";

  const deleteProjectsConfirmationDiv = document.createElement("div");
  deleteProjectsConfirmationDiv.classList.add("deleteProjectsConfirmationDiv");

  const deleteProjectsConfirmationButton1 = document.createElement("button");
  deleteProjectsConfirmationButton1.classList.add(
    "deleteProjectsConfirmationButton1",
  );
  deleteProjectsConfirmationButton1.textContent = "Yes";

  const deleteProjectsDeclineButton = document.createElement("button");
  deleteProjectsDeclineButton.classList.add("deleteProjectsDeclineButton");
  deleteProjectsDeclineButton.textContent = "No";

  function displayWarnigMessage() {
    document.querySelector(".projectsBoxDiv").before(deleteAllProjectsPopUpDiv);
    deleteAllProjectsPopUpDiv.appendChild(deleteAllProjectsPopUpMessage);
    deleteAllProjectsPopUpDiv.appendChild(deleteProjectsConfirmationDiv);
    deleteProjectsConfirmationDiv.appendChild(
      deleteProjectsConfirmationButton1,
    );
    deleteProjectsConfirmationDiv.appendChild(deleteProjectsDeclineButton);
    projectsBoxDivTitle(e);
    eventController().deleteProjectsConfirmationButton1();
    eventController().deleteProjectsDeclineButton();
    displayAllProjects(e);
    if (e.target.className == "deleteAllProjects") {
      displayFirstProjectTodo(e);
      createDeleteBoxes(e).createEmptyTaskBox();
    }
  }

  function displaySecondWarningMessage() {
    const popUpMessage = document.querySelector(
      ".deleteAllProjectsPopUpMessage",
    );
    popUpMessage.textContent = "Are You Sure";
  }

  function completeDelete() {
    deleteAllProjects();
    displayAllProjects();
    e.target.parentElement.parentElement.remove();
    if (document.querySelector(".todoBoxContainer")) {
      document.querySelector(".todoBoxContainer").remove();
      document.querySelector(".titleContainerButtonsDiv").remove();
      document.querySelector(".newProjectName").remove();
    }
    localStorage.clear();
    displayFirstProjectTodo();
  }
  return {
    displayWarnigMessage,
    completeDelete,
    displaySecondWarningMessage,
  };
}

function addDisplayIndicator(e) {
  let todoButton = document.querySelector(".editTodoButton");
  let descriptionHeading = document.querySelector(".descriptionHeading");
  let noteHeading = document.querySelector(".noteHeading");
  let titleContainerButtonsDiv = document.querySelector(
    ".titleContainerButtonsDiv",
  );
  let editDisplayIndicatorDiv = document.querySelector(
    ".editDisplayIndicatorDiv",
  );

  const editDisplayIndicator = document.createElement("p");
  editDisplayIndicator.classList.add("editDisplayIndicator");
  editDisplayIndicator.textContent = "Click Text Below";
  if (e.target.className.split(" ")[0] == "editTodoButton") {
    if (
      !document.querySelector(".editDisplayIndicatorDiv .editDisplayIndicator")
    ) {
      editDisplayIndicatorDiv.appendChild(editDisplayIndicator);
      document
        .querySelector(".editDisplayIndicator")
        .classList.add("editDisplayIndicatorColor");
      showDisplayIndicatorColor(e);
    } else if (
      document.querySelector(".editDisplayIndicatorDiv .editDisplayIndicator")
        .style.visibility == "hidden"
    ) {
      document.querySelector(
        ".editDisplayIndicatorDiv .editDisplayIndicator",
      ).style.visibility = "visible";
      showDisplayIndicatorColor(e);
    } else if (todoButton.className.split(" ")[1] == "saveTodo") {
      document.querySelector(
        ".editDisplayIndicatorDiv .editDisplayIndicator",
      ).style.visibility = "hidden";
      document.querySelector(".saveTodo").classList.remove("saveTodo");
    }
    positionEditColorIndicator();
  } else if (e.target.className.split(" ")[0] == "editDescription") {
    if (
      document.querySelector(".description").textContent == "" &&
      !document.querySelector(".descriptionDiv .editDisplayIndicator")
    ) {
      editDisplayIndicator.textContent = "Click Space Below";
      descriptionHeading.after(editDisplayIndicator);
    } else if (
      !document.querySelector(".descriptionDiv .editDisplayIndicator") &&
      document.querySelector(".description").textContent !== ""
    ) {
      descriptionHeading.after(editDisplayIndicator);
      document
        .querySelector(".descriptionDiv .editDisplayIndicator")
        .classList.add("editDisplayIndicatorColor");
      showDisplayIndicatorColor(e);
    } else if (
      document.querySelector(".descriptionDiv .editDisplayIndicator").style
        .display == "none"
    ) {
      document.querySelector(
        ".descriptionDiv .editDisplayIndicator",
      ).style.display = "block";
      showDisplayIndicatorColor(e);
    } else if (e.target.className.split(" ")[1] == "saveDescription") {
      document.querySelector(
        ".descriptionDiv .editDisplayIndicator",
      ).style.display = "none";
      document
        .querySelector(".saveDescription")
        .classList.remove("saveDescription");
    }
  } else if (e.target.className.split(" ")[0] == "editNote") {
    if (
      document.querySelector(".note").textContent == "" &&
      !document.querySelector(".noteDiv .editDisplayIndicator")
    ) {
      editDisplayIndicator.textContent = "Click Space Below";
      noteHeading.after(editDisplayIndicator);
    } else if (
      !document.querySelector(".noteDiv .editDisplayIndicator") &&
      document.querySelector(".note").textContent !== ""
    ) {
      noteHeading.after(editDisplayIndicator);
      document
        .querySelector(".noteDiv .editDisplayIndicator")
        .classList.add("editDisplayIndicatorColor");
      showDisplayIndicatorColor(e);
    } else if (
      document.querySelector(".noteDiv .editDisplayIndicator").style.display ==
      "none"
    ) {
      document.querySelector(".noteDiv .editDisplayIndicator").style.display =
        "block";
      showDisplayIndicatorColor(e);
    } else if (e.target.className.split(" ")[1] == "saveNote") {
      document.querySelector(".noteDiv .editDisplayIndicator").style.display =
        "none";
      document.querySelector(".saveNote").classList.remove("saveNote");
    }
  } else if (e.target.className.split(" ")[0] == "editProjectName") {
    if (
      !document.querySelector(".titleContainerButtonsDiv .editDisplayIndicator")
    ) {
      titleContainerButtonsDiv.appendChild(editDisplayIndicator);
      document
        .querySelector(".titleContainerButtonsDiv .editDisplayIndicator")
        .classList.add("editDisplayIndicatorColor");
      showDisplayIndicatorColor(e);
    } else if (
      document.querySelector(".titleContainerButtonsDiv .editDisplayIndicator")
        .style.display == "none"
    ) {
      document.querySelector(
        ".titleContainerButtonsDiv .editDisplayIndicator",
      ).style.display = "block";
      document.querySelector(
        ".titleContainerButtonsDiv .editDisplayIndicatorColor",
      ).style.visibility = "visible";
      showDisplayIndicatorColor(e);
    } else if (e.target.className.split(" ")[1] == "saveProjectName") {
      document.querySelector(
        ".titleContainerButtonsDiv .editDisplayIndicator",
      ).style.display = "none";
      document
        .querySelector(".titleContainerButtonsDiv .editProjectName")
        .classList.remove("saveProjectName");
    }
    positionEditColorIndicator();
  }
  eventController().runDeleteTask();
  eventController().runAddTaskStatus();
  eventController().runEditDescription();
  eventController().runEditNote();
  eventController().runCreateCheckList();
}

function showDisplayIndicatorColor(e) {
  let targetDiv = null;
  if (e.target.className == "editDescription") {
    targetDiv = e.target.parentElement.parentElement.className;
  } else if (e.target.className == "editTodoButton") {
    targetDiv = document.querySelector(".editDisplayIndicatorDiv").className;
  } else if (e.target.className == "editNote") {
    targetDiv = e.target.parentElement.parentElement.className;
  } else if (e.target.className == "editProjectName") {
    targetDiv = e.target.parentElement.className;
  }
  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.remove("editDisplayIndicatorColor");
    }, 700);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.add("editDisplayIndicatorColor");
    }, 700);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.remove("editDisplayIndicatorColor");
    }, 1300);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.add("editDisplayIndicatorColor");
    }, 1900);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.remove("editDisplayIndicatorColor");
    }, 2500);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.add("editDisplayIndicatorColor");
    }, 3100);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.remove("editDisplayIndicatorColor");
    }, 3700);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.add("editDisplayIndicatorColor");
    }, 4300);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.remove("editDisplayIndicatorColor");
    }, 4900);
  }

  if (document.querySelector(".editDisplayIndicator")) {
    setTimeout(() => {
      document
        .querySelector(`.${targetDiv} .editDisplayIndicator`)
        .classList.add("editDisplayIndicatorColor");
    }, 5500);
  }
}

function positionEditColorIndicator() {
  if (document.querySelector(".projectInputDiv")) {
    if (
      document.querySelector(".titleContainerButtonsDiv .editDisplayIndicator")
    ) {
      document
        .querySelector(".titleContainerButtonsDiv .editDisplayIndicator")
        .classList.add("editDisplayIndicatorTitleButtonsDiv");
    }
  }
}

function projectSubmittingMessage(e) {
  const displayWaitingMessage = document.createElement("p");
  displayWaitingMessage.classList.add("displayWaitingMessage");
  setTimeout(() => {
    displayWaitingMessage.classList.add("shrink");
  }, 400);
  setTimeout(() => {
    displayWaitingMessage.classList.remove("shrink");
  }, 900);
  setTimeout(() => {
    displayWaitingMessage.classList.add("shrink");
  }, 1400);
  setTimeout(() => {
    displayWaitingMessage.classList.remove("shrink");
  }, 1900);
  setTimeout(() => {
    displayWaitingMessage.classList.add("shrink");
  }, 2400);
  setTimeout(() => {
    displayWaitingMessage.classList.remove("shrink");
  }, 2900);
  setTimeout(() => {
    displayWaitingMessage.classList.add("shrink");
  }, 3400);
  setTimeout(() => {
    displayWaitingMessage.classList.remove("shrink");
  }, 3900);
  setTimeout(() => {
    displayWaitingMessage.classList.add("shrink");
  }, 4400);
  setTimeout(() => {
    displayWaitingMessage.classList.remove("shrink");
  }, 4900);

  displayWaitingMessage.textContent = "Please Wait";
  if (e.target.className == "submitProject") {
    if (!document.querySelector(".displayWaitingMessage")) {
      document.querySelector(".submitProject").after(displayWaitingMessage);
    } else {
      document.querySelector(".displayWaitingMessage").remove();
      document
        .querySelector(".submitProject")
        .appendChild(displayWaitingMessage);
    }
  } else if (e.target.className == "saveChanges") {
    e.target.after(displayWaitingMessage);
  } else if (e.target.classList == "deleteProjectsConfirmationButton1") {
    document
      .querySelector(".deleteAllProjectsPopUpDiv")
      .appendChild(displayWaitingMessage);
  }
}

function disableAllButtons(e) {
  let allButtons = document.querySelectorAll("button");
  let allInputs = document.querySelectorAll("input");
  let allEditDisplayIndicator = document.querySelectorAll(
    ".editDisplayIndicator",
  );

  allButtons.forEach((button) => {
    button.disabled = true;
    document.querySelector(".newProjectButton").disabled = false;
  });

  allEditDisplayIndicator.forEach((indicator) => {
    indicator.style.visibility = "hidden";
  });

  allInputs.forEach((input) => {
    input.disabled = true;
  });

  if (
    e.target.className == "saveChanges" ||
    e.target.classList == "submitProject" ||
    e.target.className == "editProjectName" ||
    e.target.className == "deleteProjectsConfirmationButton1" ||
    e.target.className == "editTodoButton"
  ) {
    let buttons = document
      .querySelector(".titleContainerButtonsDiv")
      .querySelectorAll("button");
    let headerDivButtons = document
      .querySelector(".headerDiv")
      .querySelectorAll("button");
    let projects = allProjects().getProjects();

    setTimeout(() => {
      let todoBoxButtons = document
        .querySelector(".todoBoxContainer")
        .querySelectorAll("button");
      let projectBoxItems = document.querySelectorAll(".projectsBoxItems");
      let sampleProjectName =
        allProjects().getProjects()[0]["project"]["projectName"];
      projectBoxItems.forEach((projectBox) => {
        let projectName;

        if (
          projectBox.querySelector(".spanProjectName").textContent !==
          sampleProjectName
        ) {
          projectName =
            projectBox.querySelector(".spanProjectName").textContent;
          projectBox.querySelector(".addMoreInfo").disabled = false;
          projectBox.querySelector(".viewTasks").disabled = false;
          projectBox.querySelector(".deleteProject").disabled = false;
          projectBox.querySelector(".projectStatusButton").disabled = false;
          for (let i = 0; i < projects.length; i++) {
            if (projectName == projects[i]["project"]["projectName"]) {
              if (projects[i]["project"]["todos"].length !== 0) {
                projectBox.querySelector(".addMoreInfo").disabled = true;
              }
              projectName = projects[i]["project"]["projectName"];
            }
          }
        } else {
          projectBox.querySelector(".viewTasks").disabled = false;
          projectBox.querySelector(".projectStatusButton").disabled = false;
        }
      });

      headerDivButtons.forEach((button) => {
        button.disabled = false;
      });

      if (e.target.className != "deleteProjectsConfirmationButton1") {
        buttons.forEach((button) => {
          button.disabled = false;
        });

        todoBoxButtons.forEach((button) => {
          button.disabled = false;
        });

        allInputs.forEach((button) => {
          button.disabled = false;
        });

        if (document.querySelector(".currentTaskBox")) {
          let currentTaskBoxButtons = document
            .querySelector(".currentTaskBox")
            .querySelectorAll("button");
          currentTaskBoxButtons.forEach((button) => {
            button.disabled = false;
          });
        }
      }
      if (document.querySelector(".deleteAllProjectsPopUpDiv")) {
        let buttonsDeleteAllProjects = document
          .querySelector(".deleteAllProjectsPopUpDiv")
          .querySelectorAll("button");
        buttonsDeleteAllProjects.forEach((button) => {
          button.disabled = false;
        });
      }
    }, 6000);
  }
}

function activateAddMoreButton() {
  displayAllProjects();
}

function errorMessageReduceTextLength(e) {
  const errorMessageText = document.createElement("p");
  errorMessageText.classList.add("errorMessageText");
  errorMessageText.textContent = "Characters Must Not Exceed 32";

  if (document.querySelector(".statusText")) {
    document.querySelector(".statusText").remove();
  }

  if (e.target.className == "editTodoButton") {
    document.querySelector(".todo").after(errorMessageText);
    disableAllButtons(e);
    setTimeout(() => {
      document.querySelector(".errorMessageText").remove();
    }, 2500);
    setTimeout(() => {
      errorMessageText.textContent = "Try Again";
      document.querySelector(".todo").after(errorMessageText);
      errorMessageText.style.width = "45px";
      errorMessageText.style.textAlign = "center";
    }, 2500);
    setTimeout(() => {
      errorMessageText.textContent = "Try Again";
      document.querySelector(".errorMessageText").remove();
    }, 5000);
  }
}

function addLinesToHeaderButtons() {
  const headerButtons = document.querySelectorAll(".headerDiv button");
  headerButtons.forEach((button) => {
    if (
      button.className !== "newProjectButton" &&
      !button.querySelector(".lineBreak")
    ) {
      const lineBreak = document.createElement("hr");
      lineBreak.classList.add("lineBreak");
      button.appendChild(lineBreak);
    }
  });
}

function createDeleteBoxes(e) {
  function createEmptyTaskBox() {
    if (!document.querySelector(".emptyCurrentTaskDivBoxContent")) {
      const currentTaskDiv = document.querySelector(".currentTaskDiv");
      const emptyCurrentTaskDivBox = document.createElement("div");
      emptyCurrentTaskDivBox.classList.add("emptyCurrentTaskDivBox");
      const emptyCurrentTaskDivBoxContent = document.createElement("p");
      emptyCurrentTaskDivBoxContent.classList.add(
        "emptyCurrentTaskDivBoxContent",
      );
      emptyCurrentTaskDivBoxContent.textContent = "No Selected Task";
      if (!document.querySelector(".todoBoxContainer")) {
        const todoBoxContainer = document.createElement("div");
        todoBoxContainer.classList.add("todoBoxContainer");
        document.querySelector(".tasksDivTitle").after(todoBoxContainer);
      }
      if (document.querySelector(".todoBoxContainer").children.length < 2) {
        currentTaskDiv.appendChild(emptyCurrentTaskDivBox);
        emptyCurrentTaskDivBox.appendChild(emptyCurrentTaskDivBoxContent);
      }
      if (e) {
        if (e.target.className == "deleteTask") {
          if (!document.querySelector(".emptyCurrentTaskDivBox")) {
            currentTaskDiv.appendChild(emptyCurrentTaskDivBox);
            emptyCurrentTaskDivBox.appendChild(emptyCurrentTaskDivBoxContent);
          }
        }
      }
      emptyCurrentTaskDivBox.style.height = "229px";
    }
    if (e) {
      if (
        !document.querySelector(".emptyBox") &&
        e.target.className !== "submitProject"
      ) {
        const emptyBox = document.createElement("div");
        emptyBox.classList.add("emptyBox");
        const emptyBoxContent = document.createElement("p");
        emptyBoxContent.classList.add("emptyBoxContent");
        emptyBoxContent.textContent = "Task Not Available";
        emptyBox.style.height = "229px";
        if (!document.querySelector(".todoBoxContainer")) {
          document
            .querySelector(".projectContainer .taskDiv")
            .appendChild(emptyBox);
          emptyBox.appendChild(emptyBoxContent);
        } else {
          if (document.querySelector(".todoBoxContainer").children.length < 1) {
            document.querySelector(".todoBoxContainer").remove();
            document
              .querySelector(".projectContainer .taskDiv")
              .appendChild(emptyBox);
            emptyBox.appendChild(emptyBoxContent);
          }
        }
      }
    }
  }

  function deleteEmptyCurrentTaskDivBox() {
    if (document.querySelector(".emptyCurrentTaskDivBox")) {
      document.querySelector(".emptyCurrentTaskDivBox").remove();
    }
  }

  function deleteCurrentTaskBox() {
    if (document.querySelector(".currentTaskBox")) {
      document.querySelector(".currentTaskBox").remove();
    }
  }
  return {
    createEmptyTaskBox,
    deleteEmptyCurrentTaskDivBox,
    deleteCurrentTaskBox,
  };
}

function addCheckItemsOnNewScreen(e) {
  let projects = allProjects().getProjects();
  let currentProjectName = null;

  if (e) {
    if (
      e.target.className == "viewTasks" ||
      e.target.className == "completedProjects"
    ) {
      currentProjectName =
        e.target.parentElement.parentElement.querySelector(
          ".spanProjectName",
        ).textContent;
    } else if (e.target.className == "viewMoreInfo") {
      currentProjectName =
        document.querySelector(".newProjectName").textContent;
    }
  } else {
    currentProjectName = document
      .querySelector(".projectsBox")
      .children[0].querySelector(".spanProjectName").textContent;
  }

  if (document.querySelector(".checkListContainer")) {
    document.querySelector(".checkListContainer").remove();
  }
  const currentTaskBox = document.querySelector(".currentTaskBox");

  const checkListContainer = document.createElement("div");
  checkListContainer.classList.add("checkListContainer");
  currentTaskBox.appendChild(checkListContainer);

  const checkListHeaderContainer = document.createElement("div");
  checkListHeaderContainer.classList.add("checkListHeaderContainer");
  checkListContainer.appendChild(checkListHeaderContainer);

  const checkListHeading = document.createElement("h5");
  checkListHeading.classList.add("checkListHeading");
  checkListHeading.textContent = "Todo CheckList";
  checkListHeaderContainer.appendChild(checkListHeading);

  const addCheckListFormButton = document.createElement("button");
  addCheckListFormButton.classList.add("addCheckListFormButton");
  addCheckListFormButton.textContent = "Add";

  if (
    allProjects().getProjects()[0]["project"]["projectName"] ==
    document.querySelector(".newProjectName").textContent
  ) {
    checkListHeaderContainer.appendChild(addCheckListFormButton);
    addCheckListFormButton.disabled = true;
  } else {
    checkListHeaderContainer.appendChild(addCheckListFormButton);
  }
  const checkListForm = document.createElement("form");
  checkListForm.classList.add(`checkListForm`);
  checkListContainer.appendChild(checkListForm);

  const checkListDiv = document.createElement("div");
  checkListDiv.classList.add("checkListDiv");
  checkListForm.appendChild(checkListDiv);

  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["project"]["projectName"] == currentProjectName) {
      let currentTodo = null;
      if (e) {
        if (
          e.target.className == "viewTasks" ||
          e.target.className == "completedProjects"
        ) {
          currentTodo =
            projects[i]["project"]["todos"][
              projects[i]["project"]["todos"].length - 1
            ]["checkList"];
        } else if (e.target.className == "viewMoreInfo") {
          let todoBoxTodo =
            e.target.parentElement.parentElement.querySelector(
              ".spanTaskName",
            ).textContent;
          for (let j = 0; j < projects[i]["project"]["todos"].length; j++) {
            if (projects[i]["project"]["todos"][j]["title"] == todoBoxTodo) {
              currentTodo = projects[i]["project"]["todos"][j]["checkList"];
            }
          }
        }
      } else {
        currentTodo =
          projects[i]["project"]["todos"][
            projects[i]["project"]["todos"].length - 1
          ]["checkList"];
      }
      for (let key in currentTodo) {
        let checkStatus = currentTodo[key];
        const checkDiv = document.createElement("div");
        checkDiv.classList.add("checkDiv");
        checkListDiv.appendChild(checkDiv);
        const checkListItem = document.createElement("input");
        checkListItem.setAttribute("type", "checkbox");
        checkListItem.classList.add("checkListItem");

        const label = document.createElement("label");
        label.classList.add("checkItem");
        label.textContent = key;

        if (checkStatus == "Complete") {
          checkListItem.checked = true;
        } else {
          checkListItem.checked = false;
        }
        checkDiv.appendChild(checkListItem);
        checkDiv.appendChild(label);
      }
    }
  }
  eventController().runCreateCheckList();
  eventController().runCheckListStatus();
}

function disableSampleProjectButtons() {
  if (
    document
      .querySelector(".projectsBox")
      .children[
        document.querySelector(".projectsBox").children.length - 1
      ].querySelector(".spanProjectName").textContent ==
    document.querySelector(".newProjectName").textContent
  ) {
    const projectContainerButtons = document.querySelectorAll(
      ".projectContainer button",
    );
    const checklikstInput = document.querySelectorAll(".checkDiv input");
    const projectBoxButtonsDiv = document
      .querySelector(".projectsBox")
      .children[
        document.querySelector(".projectsBox").children.length - 1
      ].querySelectorAll(".projectBoxButtonsDiv button");
    document.querySelector(".addCheckListFormButton").remove();

    projectBoxButtonsDiv.forEach((button) => {
      button.disabled = true;
    });
    projectContainerButtons.forEach((button) => {
      button.disabled = true;
    });
    checklikstInput.forEach((input) => {
      input.disabled = true;
    });
  }
}

displayFirstProjectTodo();
addLinesToHeaderButtons();

// due date on todobox not display on reload.
