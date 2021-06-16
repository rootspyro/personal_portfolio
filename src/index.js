import Router from './utils/router'
//import activateMenu from './utils/activate-menu'


window.addEventListener('load', Router())
window.addEventListener('hashchange', Router())

const navbarBtn = document.getElementById('burger-menu')

navbarBtn.addEventListener('click', () => {
	const nav = document.getElementById('navbar')
	nav.classList.toggle('active')
})


// Send Email Function 
const mailBtn = document.getElementById('contact-send');
mailBtn.addEventListener('click', () => {

	const name = document.getElementById('contact-name').value	
	const msg = document.getElementById('contact-message').value
	window.location.href = `mailto:root.spyro@gmail.com?subject=Hola,%20me%20llamo%20${name}%20y%20me%20interesan%20tus%20servicios.&body=${msg}`

})
