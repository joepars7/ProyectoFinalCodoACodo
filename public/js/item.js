const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity =document.querySelector('#quantity');

add.addEventListener('click', ()=> quantity.value = Number(quantity.value) + 1);
subtract.addEventListener('click', ()=> {
    let currentValue = Number(quantity.value);
    
    if (currentValue > 0) {
        quantity.value = currentValue - 1;
    } else {
        quantity.value = 0;
    }
});