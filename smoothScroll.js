const linkHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
// создаём массив
const newArray = [...linkHead, mainScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        // получаем id атрибута и отрезаем первый символ (#)
        const ID = event.target.getAttribute('href').substr(1)
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})