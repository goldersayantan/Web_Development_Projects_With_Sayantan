let inputTask = document.getElementById("task");
let addBtn = document.getElementById("add_task");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function() {
    if(inputTask.value !== "") {
        let item = document.createElement("li");
        item.innerText = ("⎈ " + inputTask.value);
        let delBtn = document.createElement("button");
        delBtn.innerText = "X";
        delBtn.classList.add("delete");
        item.appendChild(delBtn);
        ul.appendChild(item);
        inputTask.value = "";
    }
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove()
    }
})
