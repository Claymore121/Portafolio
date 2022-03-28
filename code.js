//menu hamburgesa

const iconoMenu = document.querySelector("#icon");
const menu = document.querySelector('#menu');
const link = document.querySelector('.nav-link');
const link2= document.querySelector('.nav-link2');
const link3= document.querySelector('.nav-link3');
const link4= document.querySelector('.nav-link4');
const link0=document.querySelector(".nav-link0");


iconoMenu.addEventListener('click', ()=>{
    
    menu.classList.toggle("active");
    

})
link0.addEventListener('click',()=>{
    menu.classList.toggle("active");
    console.log("hola");
})
link.addEventListener('click', ()=>{
    menu.classList.toggle("active");
    console.log("hola");
})
link2.addEventListener('click', ()=>{
    menu.classList.toggle("active");
    console.log("hola");
})
link3.addEventListener('click', ()=>{
    menu.classList.toggle("active");
    console.log("hola");
})
link4.addEventListener('click', ()=>{
    menu.classList.toggle("active");
    console.log("hola");
})






