
const inputBOX = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deletedContainer = document.getElementById("deleted-container");
const clearAllButton = document.getElementById("clear-all");
const clearDeletedButton = document.getElementById("clear-deleted");


function addTask() {
    if (inputBOX.value === '') {
        alert("veillez remplir ce champs.");
    } else {
        let li = document.createElement("li");

     
        let text = document.createTextNode(inputBOX.value);
        li.appendChild(text);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.addEventListener("click", toggleTask);
        li.appendChild(checkbox);

       
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00D7"; 
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", deleteTask);
        li.appendChild(deleteBtn);

        listContainer.appendChild(li);
    }
    inputBOX.value = ""; 
}

function toggleTask(event) {
    const task = event.target.parentElement;
    task.classList.toggle("checked");
}

function deleteTask(event) {
    const task = event.target.parentElement;
    listContainer.removeChild(task);


    const deletedTask = document.createElement("li");
    deletedTask.innerText = task.textContent.replace("\u00D7", "").trim(); 

    let restoreBtn = document.createElement("button");
    restoreBtn.innerText = "Restaurer";
    restoreBtn.style.backgroundColor = "#2ecc71"; 
    restoreBtn.addEventListener("click", restoreTask);

    deletedTask.appendChild(restoreBtn);
    deletedContainer.appendChild(deletedTask);
}


function restoreTask(event) {
    const task = event.target.parentElement;
    deletedContainer.removeChild(task);

    
    let li = document.createElement("li");
    li.innerText = task.textContent.replace("Restaurer", "").trim(); 

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("click", toggleTask);
    li.appendChild(checkbox);

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00D7";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);
}


clearDeletedButton.addEventListener("click", function() {
    deletedContainer.innerHTML = ""; 
});


clearAllButton.addEventListener("click", function() {
    listContainer.innerHTML = ""; 
});


document.getElementById("add-task-btn").addEventListener("click", addTask);


inputBOX.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});