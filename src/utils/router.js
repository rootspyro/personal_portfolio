import Nav from '../templates/nav'
import Routes from './routes'

const Router = async () => {
	const header = null || document.getElementById('header')
	const container = null || document.getElementById('main-container')

	let route = window.location.pathname

	//header.innerHTML = await Nav(route)

	let render = Routes[route] ? Routes[route] : window.location.pathname = '/404' 
	container.innerHTML = await render

}

export default Router
