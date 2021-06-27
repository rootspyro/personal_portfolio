const HideNav = ()=> {
	if(window.screen.width > 1149 ) {

		const header = document.getElementById('header')
		const nav = document.getElementById('navbar') 

		if(window.scrollY < 5) {
			nav.style.opacity = 1
		}
		else if (window.scrollY >= 5 ) {
			nav.style.opacity = 0
			header.onmouseover = () => {
				nav.style.opacity = 1
			} 
			header.onmouseout = () => {
				if (window.scrollY > 5) {
					nav.style.opacity = 0
				}
			}
		}
	}
}

export default HideNav
