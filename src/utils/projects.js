class Projects {
		
	showProjects(){
		const projectModal = document.getElementById('Projects')

		if (window.screen.width <= 1149 ){

			const nav = document.getElementById('navbar') 
			nav.classList.toggle('active')
		}

		projectModal.style.display = 'block'
		document.body.style.overflow = 'hidden'
	}

	hideProjects(){
		const projectModal = document.getElementById('Projects')
		projectModal.style.display = 'none'
		document.body.style.overflowY = 'scroll'
	}
			
}

const projects = new Projects()

export default projects
