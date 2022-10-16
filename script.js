document.addEventListener('DOMContentLoaded',()=>{
    const navUL=document.querySelector('ul');
    const hamburger= document.getElementById('hamburger');
    hamburger.addEventListener('click',()=>{
        navUL.classList.toggle('show');
    });
});