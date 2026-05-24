let btn = document.querySelector(".btndiv");
let newFiled = document.querySelector(".notediv");

// create note
btn.addEventListener("click", () => {
    createNote("");
    saveData();
});

// create note function
function createNote(text = "") {

    let inputdiv = document.createElement("div");
    inputdiv.classList.add("input");

    let textBox = document.createElement("textarea");
    textBox.value = text;
    textBox.placeholder = "Write your note...";

    let deleteImg = document.createElement("img");
    deleteImg.src = "images/delete.png";
    deleteImg.classList.add("delete");

    inputdiv.appendChild(textBox);
    inputdiv.appendChild(deleteImg);
    newFiled.appendChild(inputdiv);

    // delete note
    deleteImg.addEventListener("click", () => {
        inputdiv.remove();
        saveData();
    });

    // save on typing
    textBox.addEventListener("input", saveData);
}

// save data
function saveData() {
    let allNotes = document.querySelectorAll(".input textarea");
    let data = [];

    allNotes.forEach(note => {
        data.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(data));
}

// show data
function showData() {
    let data = JSON.parse(localStorage.getItem("notes"));

    if (data && data.length > 0) {
        data.forEach(text => {
            createNote(text);
        });
    }
}

showData();