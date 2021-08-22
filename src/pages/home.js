import profileimg from '../img/Perfil-final.png'
import background from '../img/homeBack.jpg'
import face from '../img/Face.jpg'
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
				<div class="terminal" id=terminal>
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
						<a href="#About" class="meetme-btn">meet_me</a>
					</div>
				</div>
			</div>

			<div class="About" id="About">
				<p class="terminal-user">root@<span class="orange">spyro</span>:/About# <span class=command>neofetch <span id=about-cursor>&#160</span></span></p>
				<h1 class="about-title orange">About Me</h1>
				<div class="about-container">
					<div class="about-neofetch" id="neofetch">
						<div>	
							<img src="${face}" class="about-neofetch-img">
						</div>
						<div>
						<tt class="about-neofetch-info">
							root@<spam class="orange">spyro</spam><br>
							----------<br>
							<span class="orange">Host:</span>Spyridon Mihalopoulos</br>
							<span class="orange">Studies:</span>Computer Engineering</br>
							<span class="orange">Developer:</span>FullStack</br>
							<span class="orange">Frontend:</span>40%</br>
							<span class="orange">Backend:</span>60%</br>
							<span class="orange">Citizenship:</span>Venezuelan</br>
						</tt>
						</div>
					</div>
					<div class="about-story" id=story>
						<p>
							Welcome, if you are reading this you are probably looking for help, you are looking for someone who can help you with that goal you need. Maybe that website for your company, a blog, a sales page, an application or to enhance your personal brand.
							<br> <br>
							I'm Spyro and I'm a programmer and web developer.
							I love to learn, constantly improve my skills, solve problems and create solutions through technology. And for that reason, I want to help you achieve your goals.
						</p>

						<a onclick='sProjects()'>Look_my_projects</a>
					</div>
				</div>
			</div>

			<div class="Skills" id="Skills">
				<p class=terminal-user>root@<spam class="orange">spyro</spam>:/Skills# <span class=command>code skills.json<span id=skills-cursor>&#160</span></span></p>
				<h1 class="skills-question orange">What's my experience?</h1>
				<p id="preskills">
					I will be honest with you, I am not the Senior Developer who drinks 7 cups of coffee a day, with a majestic beard and a MacBook pro, with the power of the 3 rings of the Full-Stack development.
					<br> <br>
					But I have covered knowledge and experiences (University, courses and self-taught) that make me the developer that I am, 
					don't just believe my words, <a  class="orange" onclick="sProjects()">see for yourself.</a>
				</p>
				<div class="skills-info">	
				<div class="skills-cards" id=cards>
					<div class="skills-frontend" id="skills-frontend">
						<h3 class="skills-card-title orange">//FRONTEND</h3>
						<div class="skills-languages">
							<i class="fab fa-html5 orange"></i>
							<i class="fab fa-css3-alt orange"></i>
							<i class="fab fa-js-square orange"></i>
							<i class="fab fa-react orange"></i>
						</div>
						<p>
							I am not a user interface designer, but currently I can design and implement the view and functionality of a static page or a web application from scratch, using vanilla javascript, webpack, and frameworks like React.
						<p>
					</div>
					<div class="skills-backend" id="skills-backend">
						<h3 class="skills-card-title orange">//BACKEND</h3>
						<div class="skills-languages">
							<i class="fab fa-node-js orange"></i>
							<i class="fab fa-python orange"></i>
							<i class="fas fa-database orange"></i>
							<i class="fas fa-server orange"></i>
						</div>
						<p>
							Today, I am geared towards backend development with Node and Python (Flask and Django), using relational databases servers like MySQL and NoSQL like MongoDB. I also have experience developing in Linux environments and am familiar with Rest architecture APIs. 
						</p>
					</div>
				</div>
				<div class="skills-json" id="json">
						<h3>root@<span class="orange">spyro</span>:~# cat Skills.json</h3>
						<pre>
							<code>

 {
  <span class="orange strong">"Skills"</span> : {
    <span class="orange strong">"Linux / Terminal"</span> : "85%",
    <span class="orange strong">"Git"</span> : "70%",
    <span class="orange strong">"API"</span> : "Rest",
    <span class="orange strong">"Languages"</span> : {
     <span class="orange strong">"Javascript"</span> : "65%",
     <span class="orange strong">"Python"</span> : "70%",
     <span class="orange strong">"Html / Css"</span> : "70%",
      <span class="orange strong">"SQL"</span> : "55%"
  },
   <span class="orange strong">"Frameworks"</span> : {
    <span class="orange strong">"Node / Express"</span> : "40%"
    <span class="orange strong">"Flask"</span> : "40%",
    <span class="orange strong">"React"</span> : "WIP"
   }
  }
 }
							</code>
						</pre>
					</div>
				</div>
			</div>


	`
	return view
}

export default Home
