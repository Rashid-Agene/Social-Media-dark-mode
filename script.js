const buttonDark = document.querySelector('.dark');
const image = document.getElementById('image');
const lightImage = '/asset/switch-button.svg';
const darkImage = '/asset/dark-switch.svg';
const darkModeTags =document.querySelectorAll('body,header, .social, .card, .can, .dark');


buttonDark.addEventListener('click', () => {
    if (image.src.endsWith(darkImage)){
        image.src = lightImage;
    }
    else{
        image.src = darkImage;
    }

    darkModeTags.forEach(element =>{
        element.classList.toggle('light-mode');
    });
    
});




















