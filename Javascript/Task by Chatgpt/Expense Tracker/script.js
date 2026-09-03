const expenseTitle = document.getElementById("expenseTitle");

const expensePrice = document.getElementById("expensePrice");

const expenseCategory = document.getElementById("expenseCategory");

const addBtn = document.getElementById("addBtn");

const expenseContainer = document.getElementById("expenseContainer");

addBtn.addEventListener("click", addexpense);

function addexpense() {

    const title = expenseTitle.value.trim();
    const price = expensePrice.value;
    const category = expenseCategory.value.trim();

    if (title === "" || price === "" || category === "") {
        alert("Please fill all fields");
        return;
    }

    document.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            addexpense();
        }

    });

    const card = document.createElement("div");

    card.classList.add("expenseCard");

    card.innerHTML = `
        <div class="expenseInfo">
            <p>Title : ${title}</p>
            <p>Price : ${price}</p>
            <p>Category : ${category}</p>
            <button class="removeBtn"> <i class="fa-solid fa-trash-can"></i> Remove</button>
        </div>`

    expenseContainer.appendChild(card);

    const removeBtn = card.querySelector(".removeBtn");

    removeBtn.addEventListener("click", function () {
        card.remove();
    });

    expenseTitle.value = "";
    expensePrice.value = "";
    expenseCategory.value = "";

}



