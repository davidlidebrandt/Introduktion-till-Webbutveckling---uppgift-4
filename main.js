// Min egen lösning som dock inte lagras/hanteras i en array med objekt

// const addToDoButton = document.querySelector("#addToDoButton");
// const addToDoInput = document.querySelector("#toDoInput");
// const toDoList = document.querySelector("#toDoList");
// const numberOfFinishedToDos = document.querySelector("#numberOfFinishedToDos");

// addToDoButton.addEventListener("click", toDoListener)

// function toDoListener() {
//     if (addToDoInput.value === "") {
//         alert("Write something");
//       } else {
//         let currentlyFinishedItems = parseInt(numberOfFinishedToDos.textContent);
//         const trashCan = document.createElement("img");
//         trashCan.src = "trashcan.svg";
//         const toDoItem = document.createElement("li");
//         toDoItem.textContent = addToDoInput.value;
//         toDoItem.append(trashCan);
//         toDoList.append(toDoItem);
//         addToDoInput.value = "";
//         trashCan.addEventListener("click", (event)=> {
//             trashCan.remove();
//             toDoItem.remove();
//             currentlyFinishedItems--;
//             numberOfFinishedToDos.textContent = currentlyFinishedItems >= 0 ? currentlyFinishedItems : 0;
//             event.stopPropagation();
//         })
//         toDoItem.addEventListener("click", () => {
//           if (toDoItem.classList.contains("finishedToDo")) {
//             toDoItem.classList.remove("finishedToDo");
//             currentlyFinishedItems--;
//           } else {
//             toDoItem.classList.add("finishedToDo");
//             currentlyFinishedItems++;
//           }
//           numberOfFinishedToDos.textContent = currentlyFinishedItems;
//         });
//       }
//     }
