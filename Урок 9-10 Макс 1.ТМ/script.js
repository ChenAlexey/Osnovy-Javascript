function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim(); // обрезает пробелы в конце и в начале
    console.log(taskText);

    if (taskText === "") return; // если пусто, не добавляем

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // чексбокс

    // Урок 9-10 Таск менеджер    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";
    checkbox.addEventListener("change", function(){
        li.classList.toggle("completed", checkbox.checked);
    });

    //Текст задачи
    let text  = document.createElement("span");
    text.textContent = taskText; // textContent - это текст внутри тега span

    // Кнопка удаления
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Удалить"

    deleteBtn.className = "btn btn-danger btn-sm ms-3";
    deleteBtn.onclick = function () {
        li.remove();
    }

    // добавляем элементы в li

    li.appendChild(checkbox);
    li.appendChild(text);
    li.append(deleteBtn);

    // добавляем в список созданный элемент списка
    document.getElementById("taskList").appendChild(li);

    //очищаем input
    input.value = "";

}