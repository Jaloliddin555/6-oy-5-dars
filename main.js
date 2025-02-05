const elForm = document.getElementById("form");
const elInput = document.getElementById("user");
const box = document.getElementById("list");

elForm.addEventListener("submit", (anonim) => {
    anonim.preventDefault();
    const inputningQiymati = elInput.value;


    const newLi = document.createElement("li");
    const userName = document.createElement("h2");
    const check = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    newLi.className = "item"

    userName.textContent = inputningQiymati;
    check.type = "checkbox";
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";

    newLi.append(check,userName,deleteBtn,editBtn);
    box.append(newLi);

    elInput.value = "";
})