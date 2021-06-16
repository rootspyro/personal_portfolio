const Footer = () => {
	const view = `
		
			<div class="Contact" id="Contact">
				<p>root@<spam class="orange">spyro</spam>:/Contact#</p>
				<h1 class='contact-title orange'>LET'S TALK!</h1>
				<form class="contact-form " id="contact-form">
					<input type="text" placeholder="//what's_your_name?" autocomplete="name" class="contact-form-name" id="contact-name" required>
					<textarea class="contact-form-message" id="contact-message" placeholder="//Write_your_message" required></textarea>
					<button class="contact-form-button" id="contact-send">>_Send_email</button>
				</form>
			</div>
			<div class="contact-info ">
				<div class="contact-info-email">
					<p>root.spyro@gmail.com</p>
				</div>
				<div class="contact-info-socialmedia">
					<ul>
						<li class="socialmedia-item"><a href="" target=_blank><i class="fab fa-linkedin-in"></i></a></li>
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
