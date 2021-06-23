class Animations {

	turnOn(id,seg) {
		
		let object = document.getElementById(id)
		let position = object.getBoundingClientRect().top
		let screenSize = window.innerHeight/3.5

		if ( position < screenSize ) {

			object.style.animation = `display ${seg}s `
			object.style.opacity = 1
		}
	}

	writeCommand(id) {

		let object = document.getElementById(id)
		let position = object.getBoundingClientRect().top
		let screenSize = window.innerHeight/3.5

		if ( position < screenSize ) {
			object.style.animation = 'write 2s steps(15)'
			object.style.width = 0
		}
	}

}

const animation = new Animations()

export default animation

