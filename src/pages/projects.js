const projects = (name, link, img, description, github) => {

	const view = `
			
					<div class="project-box">
						<div class="project-border">
							<div class="project-box-img">
								<a href="${link}" target="_blank">
									<img src="${img}" >
								</a>
							</div>
							<div class="project-box-description">
								<p class= "project-name orange"><a href="${link}" target="_blank">${name}</a></p>
								<br>
								<p>${description}</p>
							</div>
						</div>
						<div class="github-project-btn">
							<a href="${github}" class=orange><i class="fab fa-github"></i></a>
						</div>
					</div>
	`
	return view
}

export default projects
