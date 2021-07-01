import Footer from '../pages/footer'
import Routes from './routes'

const Router = async () => {
	//const header = null || document.getElementById('header')
	const container = null || document.getElementById('main-container')
	const footer = null || document.getElementById('footer')

	footer.innerHTML = Footer()

	let route = window.location.pathname

	let render = Routes[route] ? Routes[route] : window.location.pathname = '/404' 
	container.innerHTML = await render

}

export default Router
