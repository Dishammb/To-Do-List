const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new task item (li)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create the delete button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This is the 'x' character
        li.appendChild(span);
    }
    // Clear the input box after adding
    inputBox.value = "";
    saveData(); // Save the new list to local storage
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the current list to the browser's local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load and display the list from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask() to display data when the page loads
showTask();
