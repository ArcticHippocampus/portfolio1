const button = document.getElementById('menu-button')
const menu = document.getElementById('menu-mobile-2')

console.log(menu)
console.log(button)

function clicked() {


    console.log(menu.style)
    if (menu.style.display === '') {
        menu.style.display = 'flex'
    }

    else if (menu.style.display === 'flex') {
        menu.style.display = ''
    }

}

button.addEventListener('click', clicked)
