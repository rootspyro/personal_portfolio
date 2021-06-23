import profileimg from '../img/Perfil-final.png'
import background from '../img/homeBack.jpg'
import face from '../img/Face.jpg'
import skills from '../img/skills.png'
const Home = () => {
	const view = `

			<div class="Home" id="Home">
			<style>
				.Home {
					background: url(${background});
					background-size:cover ;
					background-position: center;
				}
			</style>
				<div class="terminal">
					<div class="terminal-head">
						<p class="terminal-head-user">root@<span class="orange">spyro</span>:/Home#</p>	
						<p class="terminal-head-menu">
							_x
							<!--
							<i class="far fa-window-minimize"></i>
							<i class="far fa-clone"></i>
							<i class="fas fa-times"></i>
							-->
						</p>
					</div>
					<div class="terminal-body">
						<h1 class="presentation-title">Spyridon Mihalopoulos</h1>
						<h3 class="presentation-subtitle">Frontend . <spam class="orange">Backend</spam> . Developer</h3>
						<img class="presentation-img" src=${profileimg}>
						<a href="#About" class="meetme-btn">./meet_me.sh</a>
					</div>
				</div>
			</div>

			<div class="About" id="About">
				<p class="terminal-user">root@<spam class="orange">spyro</spam>:/About# <spam class=command>neofetch <span>&#160</span></span></p>
				<div class="about-container">
					<div class="about-neofetch">
						<div>	
							<img src="${face}" class="about-neofetch-img">
						</div>
						<div>
						<tt class="about-neofetch-info">
							root@<spam class="orange">spyro</spam><br>
							----------<br>
							<spam class="orange">Host:</spam>Spyridon Mihalopoulos</br>
							<spam class="orange">Student:</spam>Computer Engineering</br>
							<spam class="orange">Developer:</spam>FullStack</br>
							<spam class="orange">Frontend:</spam>40%</br>
							<spam class="orange">Backend:</spam>60%</br>
							<spam class="orange">Citizenship:</spam>Venezuelan</br>
						</tt>
						</div>
					</div>
					<div class="about-story">
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						</p>

						<a href="">>_See my projects</a>
					</div>
				</div>
			</div>

			<div class="Skills" id="Skills">
				<p class=terminal-user>root@<spam class="orange">spyro</spam>:/Skills# <span class=command>code skills.json<span>&#160</span></span></p>
				<div class="skills-info">	
					<div class="skills-frontend">
						<h3 class="skills-frontend-title orange">//FRONTEND</h3>
						<div class="skills-languages">
							<i class="fab fa-html5 orange"></i>
							<i class="fab fa-css3-alt orange"></i>
							<i class="fab fa-js-square orange"></i>
							<i class="fab fa-react orange"></i>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						<p>
					</div>
					<div class="skills-backend">
						<h3 class="skills-backend-title orange">//BACKEND</h3>
						<div class="skills-languages">
							<i class="fab fa-node-js orange"></i>
							<i class="fab fa-python orange"></i>
							<i class="fas fa-database orange"></i>
							<i class="fas fa-server orange"></i>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						</p>
					</div>
					<div class="skills-img">
						<img src="${skills}" alt="screenshot de codigo en json">
					</div>
				</div>
			</div>


	`
	return view
}

export default Home
