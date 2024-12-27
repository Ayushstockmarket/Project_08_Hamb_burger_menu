const add=document.querySelector('#add');
const close=document.querySelector('#close');
const menu_open_side=document.querySelector('#menu-open-side');
add.addEventListener('click',()=>{
    add.classList.add('hide');
    close.classList.remove('hide');
    menu_open_side.classList.add('menu-btn-options');
})
close.addEventListener('click',()=>{
    add.classList.remove('hide');
    close.classList.add('hide');
    menu_open_side.classList.remove('menu-btn-options');
    menu_open_side.classList.add('hide');
})
