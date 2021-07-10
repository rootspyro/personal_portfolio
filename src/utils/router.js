import Routes from './routes'
import projects from '../pages/projects'
import projectsList from './projects-list'

const Router = async () => {
	const container = null || document.getElementById('main-container')
	const project = null || document.getElementById('projects-list')

	project.innerHTML = ''
	
	for (let e of projectsList) {
		project.innerHTML += projects(e.name, e.link, e.img, e.description, e.github)
	}

	let route = window.location.pathname

	let render = Routes[route] ? Routes[route] : window.location.pathname = '/404' 
	container.innerHTML = await render

}

export default Router
