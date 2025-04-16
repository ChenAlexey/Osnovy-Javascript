const burgerMenu = document.getElementById('burgerMenu')
const burgerCloseBtn = document.getElementById('burgerCloseBtn')

burgerCloseBtn.addEventListener('click', () => {
    burgerMenu.style.width = '0px'
    burgerMenu.style.padding = '0px'
    
})