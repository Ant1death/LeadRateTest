'use strict'
import VanillaTilt from 'vanilla-tilt';
window.addEventListener('DOMContentLoaded',() => {
    const todoItem = document.querySelectorAll('.todo__list-item');
    todoItem.forEach((item,i) => {
        let todoCheckbox = item.querySelector('.input-container__item');
        item.addEventListener('click', (e) => {
            const target = e.target;
            if(todoCheckbox.checked == false) {
                todoCheckbox.checked = true;
                item.classList.add('checked');
            } else {
                todoCheckbox.checked = false;
                item.classList.remove('checked');
            }
        });
    })
})