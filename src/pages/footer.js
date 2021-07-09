const Footer = () => {
	const view = `
		
			<div class="Contact" id="Contact">
				<p class=terminal-user>root@<span class="orange">spyro</span>:/Contact#<span class=command> node send_email.js<span id="contact-cursor">&#160</span></span></p>
				<h1 class='contact-title orange'>LET'S TALK!</h1>
				<form class="contact-form " id="contact-form" method="POST" name="contact" data-netlify="true"> 
					<input type="text" placeholder="//what's_your_name?" autocomplete="name" class="contact-form-input" id="contact-name" name=name required> 
					<input type="email" placeholder="//what's_your_email?" autocomplete="email" class="contact-form-input" name="email" required>
						<textarea class="contact-form-message" id="contact-message" placeholder="//Write_your_message" name=message required></textarea>
					<button class="contact-form-button" id="contact-send" type=submit>>_Send_email</button>
				</form>
			</div>
			<div class="contact-info ">
				<div class="contact-info-email">
					<p>root.spyro@gmail.com</p>
				</div>
				<div class="contact-info-socialmedia">
					<ul>
						<li class="socialmedia-item"><a href="https://www.linkedin.com/in/spyridon-mihalopoulos-alvarez-110119215/" target=_blank><i class="fab fa-linkedin-in"></i></a></li>
						<li class="socialmedia-item"><a href="https://www.instagram.com/rootspyro/" target=_blank><i class="fab fa-instagram"></i></a></li>
						<li class="socialmedia-item"><a href="https://github.com/rootspyro" target=_blank><i class="fab fa-github"></i></a></li>
						<li class="socialmedia-item"><a href="" target=_blank><i class="fab fa-facebook-square"></i></a></li>
						<li class="socialmedia-item"><a href="https://twitter.com/rootspyro" target=_blank><i class="fab fa-twitter"></i></a></li>
					</ul>
				</div>
			</div>
	`

	return view
}

export default Footer
