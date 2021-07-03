const projects = [
	{
		name: 'My University Website',
		img : '',
		link: 'https://dcytintro.ddns.net/',
		github: '',
		description: 'This website is a personal project that I created for the introductory computer science students at my university.'
	},
]

const getProjects = ()=> {
	for( let e of projects ) {
		console.log(`Project name: ${e.name}`)
		console.log(`Project link: ${e.link}`)
	}
}

export default getProjects
