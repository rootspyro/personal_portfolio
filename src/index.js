import Router from './utils/router'
//import activateMenu from './utils/activate-menu'


window.addEventListener('load', ()=> {
	Router()
})
window.addEventListener('hashchange',()=>{
	Router()
})

const navbarBtn = document.getElementById('burger-menu')

navbarBtn.addEventListener('click', () => {
	const nav = document.getElementById('navbar')
	nav.classList.toggle('active')
})


