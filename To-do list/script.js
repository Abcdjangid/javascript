const inputBox = document.getElementById("input_box");
const BTN = document.getElementById("btn");
const listContainer = document.getElementById("list_container");

// connect connect botton with input box.
BTN.addEventListener("click", Addtask);
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        Addtask();
    }
})


// Add task when click on Add button or press Enter...
function Addtask() {
    if (inputBox.value === "") {
        alert("Must Need to Enter Task Name");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();

    }
    saveData();
    localData()
}, false);


function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function localData() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}

window.onload = function () {
    localData();
}
