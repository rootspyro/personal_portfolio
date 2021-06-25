import Router from './utils/router'
import animation from './utils/animations'
//import activateMenu from './utils/activate-menu'


window.addEventListener('load', ()=> {
	Router()
})
window.addEventListener('hashchange',()=>{
	Router()
})




window.addEventListener('scroll', ()=>{
	
	//ABOUT 
	animation.writeCommand('about-cursor')
	animation.turnOn('neofetch',2)

	//SKILLS
	animation.writeCommand('skills-cursor')
	animation.turnOn('skills-frontend',1.5)
	animation.turnOn('skills-backend', 1.5)
	animation.turnOn('skills-img', 1.5)

	//CONTACT
	animation.writeCommand('contact-cursor')
	animation.turnOn('contact-form', 1.5)

	
})


const navbarBtn = document.getElementById('burger-menu')

navbarBtn.addEventListener('click', () => {
	const nav = document.getElementById('navbar')
	nav.classList.toggle('active')
})




