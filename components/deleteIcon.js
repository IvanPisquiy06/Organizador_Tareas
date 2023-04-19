const deleteIcon = () => {
    const trash = document.createElement("i");
    trash.classList.add("fas","fa-trash-alt","trashIcon","icon");
    trash.addEventListener("click", deleteTask);
    return trash;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}

export default deleteIcon