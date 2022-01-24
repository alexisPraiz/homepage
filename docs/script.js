document.querySelector('.label').addEventListener('click',()=>{
    const icon = document.querySelector('.icon_show');
    icon.classList.toggle('close_icon-show');
    icon.setAttribute('src','recursos/close.svg');
   
    if(!icon.classList.contains('close_icon-show')){
        icon.removeAttribute('src','recursos/close.svg');
        icon.setAttribute('src','recursos/hamburger.svg');
    }
});