const studentName = document.getElementById("studentName");

const studentMarks = document.getElementById("studentMarks");

const addBtn = document.getElementById("addBtn");

const studentContainer = document.getElementById("studentContainer");

addBtn.addEventListener("click", addStudent);

function addStudent() {

    const name = studentName.value.trim();

    const marks = studentMarks.value;

    if (name === "" || marks === "") {
        alert("Please enter name and marks");
        return;
    }


    let result;

    if (marks >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    const card = document.createElement("div");

    card.classList.add("student-card");

    card.innerHTML = `
        <div class="student-info">
            <h4>${name}</h4>
            <h4>${marks}</h4>
            <h4>${result}</h4>
            <button class="remove-btn"> <i class="fa-solid fa-trash-can"></i> Remove</button>
        </div>

    `
    studentContainer.appendChild(card);

    const removeBtn = card.querySelector(".remove-btn");

    removeBtn.addEventListener("click",function(){
        card.remove();
    });

    studentName.value="";

    studentMarks.value="";
}