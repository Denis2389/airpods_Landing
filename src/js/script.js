document.querySelector('.menu_btn').addEventListener('click', function(event) {
    event.preventDefault();

    const targetToBuySection = document.querySelector('.choose_color')
    targetToBuySection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.menu_info').addEventListener('click', function(event) {
    event.preventDefault();

    const targetToInfoSection = document.querySelector('.advantages')
    targetToInfoSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.menu_product').addEventListener('click', function(event) {
    event.preventDefault();

    const targetToProductSection = document.querySelector('.composition')
    targetToProductSection.scrollIntoView({
        behavior: 'smooth'
    });
});


const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');

    function formHandler(event) {
        event.preventDefault();

        const taskText = todoInput.value;

        const newTask = document.createElement('li')
        newTask.innerText = taskText;
        
        todoList.append(newTask)

        todoInput.value = '';

        todoInput.focus();
    }