const Nav = (path) => {

	(path === '/') ? path = '/Home' : path = path 

	const view = `
		
			<label for="burger-menu"><i class="fas fa-bars"></i></label>
			<input type="checkbox" id="burger-menu" name="burger-menu">
			<nav>
				<p id="root@spyro-path">root@<span class="spyro">spyro</span>:${path}/#</p>
				<ul class="nav-menu">
					<li class="nav-menu-item"><a href="/">/Home</a></li>
					<li class="nav-menu-item"><a href="/About">/About</a></li>
					<li class="nav-menu-item"><a href="/Skills">/Skills</a></li>
					<li class="nav-menu-item"><a href="/Projects">/Projects</a></li>
					<li class="nav-menu-item"><a href="/Contact">/Contact</a></li>
				</ul>
			</nav>
	`
	return view
}

export default Nav

