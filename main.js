(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var a;t.g.importScripts&&(a=t.g.location+"");var n=t.g.document;if(!a&&n&&(n.currentScript&&(a=n.currentScript.src),!a)){var e=n.getElementsByTagName("script");e.length&&(a=e[e.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=a})();const a=t.p+"assets/4f5658b650a3e7693b1cd794a558c3b3.png",n=t.p+"assets/d46116ea7018f6994a56784982473f31.jpg",e=t.p+"assets/ac7916885564628c41aab97ffca3b9a8.jpg",s=t.p+"assets/18372fd2402e497a9000c84a2bccdbfe.png",i={"/":`\n\n\t\t\t<div class="Home" id="Home">\n\t\t\t<style>\n\t\t\t\t.Home {\n\t\t\t\t\tbackground: url(${n});\n\t\t\t\t\tbackground-size:cover ;\n\t\t\t\t\tbackground-position: center;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t\t<div class="terminal" id=terminal>\n\t\t\t\t\t<div class="terminal-head">\n\t\t\t\t\t\t<p class="terminal-head-user">root@<span class="orange">spyro</span>:/Home#</p>\t\n\t\t\t\t\t\t<p class="terminal-head-menu">\n\t\t\t\t\t\t\t_x\n\t\t\t\t\t\t\t\x3c!--\n\t\t\t\t\t\t\t<i class="far fa-window-minimize"></i>\n\t\t\t\t\t\t\t<i class="far fa-clone"></i>\n\t\t\t\t\t\t\t<i class="fas fa-times"></i>\n\t\t\t\t\t\t\t--\x3e\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="terminal-body">\n\t\t\t\t\t\t<h1 class="presentation-title">Spyridon Mihalopoulos</h1>\n\t\t\t\t\t\t<h3 class="presentation-subtitle">Frontend . <spam class="orange">Backend</spam> . Developer</h3>\n\t\t\t\t\t\t<img class="presentation-img" src=${a}>\n\t\t\t\t\t\t<a href="#About" class="meetme-btn">meet_me</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="About" id="About">\n\t\t\t\t<p class="terminal-user">root@<span class="orange">spyro</span>:/About# <span class=command>neofetch <span id=about-cursor>&#160</span></span></p>\n\t\t\t\t<h1 class="about-title orange">About Me</h1>\n\t\t\t\t<div class="about-container">\n\t\t\t\t\t<div class="about-neofetch" id="neofetch">\n\t\t\t\t\t\t<div>\t\n\t\t\t\t\t\t\t<img src="${e}" class="about-neofetch-img">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t<tt class="about-neofetch-info">\n\t\t\t\t\t\t\troot@<spam class="orange">spyro</spam><br>\n\t\t\t\t\t\t\t----------<br>\n\t\t\t\t\t\t\t<spam class="orange">Host:</spam>Spyridon Mihalopoulos</br>\n\t\t\t\t\t\t\t<spam class="orange">Student:</spam>Computer Engineering</br>\n\t\t\t\t\t\t\t<spam class="orange">Developer:</spam>FullStack</br>\n\t\t\t\t\t\t\t<spam class="orange">Frontend:</spam>40%</br>\n\t\t\t\t\t\t\t<spam class="orange">Backend:</spam>60%</br>\n\t\t\t\t\t\t\t<spam class="orange">Citizenship:</spam>Venezuelan</br>\n\t\t\t\t\t\t</tt>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="about-story" id=story>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tWelcome, if you are reading this you are probably looking for help, you are looking for someone who can help you with that goal you need. Maybe that website for your company, a blog, a sales page, an application or to enhance your personal brand.\n\t\t\t\t\t\t\t<br> <br>\n\t\t\t\t\t\t\tI'm Spyro and I'm a programmer and web developer.\n\t\t\t\t\t\t\tI love to learn, constantly improve my skills, solve problems and create solutions through technology. And for that reason, I want to help you achieve your goals.\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<a href="#Skills">See_my_experience</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="Skills" id="Skills">\n\t\t\t\t<p class=terminal-user>root@<spam class="orange">spyro</spam>:/Skills# <span class=command>code skills.json<span id=skills-cursor>&#160</span></span></p>\n\t\t\t\t<h1 class="skills-question orange">What's my experience?</h1>\n\t\t\t\t<p id="preskills">\n\t\t\t\t\tI will be honest with you, I am not the Senior Developer who drinks 7 cups of coffee a day, with a majestic beard and a MacBook pro, with the power of the 3 rings of the Full-Stack development.\n\t\t\t\t\t<br> <br>\n\t\t\t\t\tBut I have covered knowledge and experiences (University, courses and self-taught) that make me the developer that I am, \n\t\t\t\t\tdon't just believe my words, <a  class="orange" onclick="sProjects()">see for yourself.</a>\n\t\t\t\t</p>\n\t\t\t\t<div class="skills-info">\t\n\t\t\t\t<div class="skills-cards" id=cards>\n\t\t\t\t\t<div class="skills-frontend" id="skills-frontend">\n\t\t\t\t\t\t<h3 class="skills-frontend-title orange">//FRONTEND</h3>\n\t\t\t\t\t\t<div class="skills-languages">\n\t\t\t\t\t\t\t<i class="fab fa-html5 orange"></i>\n\t\t\t\t\t\t\t<i class="fab fa-css3-alt orange"></i>\n\t\t\t\t\t\t\t<i class="fab fa-js-square orange"></i>\n\t\t\t\t\t\t\t<i class="fab fa-react orange"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tI am not a user interface designer, but currently I can design and implement the view and functionality of a static page or a web application from scratch, using vanilla javascript, webpack, and frameworks like React.\n\t\t\t\t\t\t<p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="skills-backend" id="skills-backend">\n\t\t\t\t\t\t<h3 class="skills-backend-title orange">//BACKEND</h3>\n\t\t\t\t\t\t<div class="skills-languages">\n\t\t\t\t\t\t\t<i class="fab fa-node-js orange"></i>\n\t\t\t\t\t\t\t<i class="fab fa-python orange"></i>\n\t\t\t\t\t\t\t<i class="fas fa-database orange"></i>\n\t\t\t\t\t\t\t<i class="fas fa-server orange"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tToday, I am geared towards backend development with Node and Python (Flask and Django), using relational databases servers like MySQL and NoSQL like MongoDB. I also have experience developing in Linux environments and am familiar with Rest architecture APIs. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="skills-img" id="skills-img">\n\t\t\t\t\t\t<a href="${s}">\n\t\t\t\t\t\t<img src="${s}" alt="screenshot de codigo en json">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t`,"/Projects":"<h1>Projects</h1>","/404":"<h1>Error 404</h1>"},o=t.p+"assets/887dddcd43eedf3c3b7acc4d825ea783.png",l=[{name:"DCyTintro",link:"https://dcytintro.ddns.net/",img:o,description:"My first personal project. This website is for computer engineering students at my university to learn to code",github:"#"},{name:"test",link:"#",img:o,description:"this is just an example bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",github:"https://github.com/rootspyro?tab=repositories"},{name:"test",link:"#",img:o,description:"this is just an example bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",github:"https://github.com/rootspyro?tab=repositories"}],r=async()=>{const t=document.getElementById("main-container"),a=document.getElementById("projects-list"),n=document.getElementById("footer");a.innerHTML="",n.innerHTML='\n\t\t\n\t\t\t<div class="Contact" id="Contact">\n\t\t\t\t<p class=terminal-user>root@<span class="orange">spyro</span>:/Contact#<span class=command> node send_email.js<span id="contact-cursor">&#160</span></span></p>\n\t\t\t\t<h1 class=\'contact-title orange\'>LET\'S TALK!</h1>\n\t\t\t\t<form class="contact-form " id="contact-form" method="POST" name="contact" data-netlify="true"> \n\t\t\t\t\t<input type="text" placeholder="//what\'s_your_name?" autocomplete="name" class="contact-form-input" id="contact-name" name=name required> \n\t\t\t\t\t<input type="email" placeholder="//what\'s_your_email?" autocomplete="email" class="contact-form-input" name="email" required>\n\t\t\t\t\t\t<textarea class="contact-form-message" id="contact-message" placeholder="//Write_your_message" name=message required></textarea>\n\t\t\t\t\t<button class="contact-form-button" id="contact-send" type=submit>>_Send_email</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class="contact-info ">\n\t\t\t\t<div class="contact-info-email">\n\t\t\t\t\t<p>root.spyro@gmail.com</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="contact-info-socialmedia">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class="socialmedia-item"><a href="https://www.linkedin.com/in/spyridon-mihalopoulos-alvarez-110119215/" target=_blank><i class="fab fa-linkedin-in"></i></a></li>\n\t\t\t\t\t\t<li class="socialmedia-item"><a href="https://www.instagram.com/rootspyro/" target=_blank><i class="fab fa-instagram"></i></a></li>\n\t\t\t\t\t\t<li class="socialmedia-item"><a href="https://github.com/rootspyro" target=_blank><i class="fab fa-github"></i></a></li>\n\t\t\t\t\t\t<li class="socialmedia-item"><a href="" target=_blank><i class="fab fa-facebook-square"></i></a></li>\n\t\t\t\t\t\t<li class="socialmedia-item"><a href="https://twitter.com/rootspyro" target=_blank><i class="fab fa-twitter"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t';for(let t of l)a.innerHTML+=(e=t.name,s=t.link,o=t.img,r=t.description,c=t.github,`\n\t\t\t\n\t\t\t\t\t<div class="project-box">\n\t\t\t\t\t\t<div class="project-border">\n\t\t\t\t\t\t\t<div class="project-box-img">\n\t\t\t\t\t\t\t\t<a href="${s}">\n\t\t\t\t\t\t\t\t\t<img src="${o}" >\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="project-box-description">\n\t\t\t\t\t\t\t\t<p class= "project-name orange">${e}</p>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<p>${r}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="github-project-btn">\n\t\t\t\t\t\t\t<a href="${c}" class=orange><i class="fab fa-github"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t`);var e,s,o,r,c;let d=window.location.pathname,m=i[d]?i[d]:window.location.pathname="/404";t.innerHTML=await m},c=new class{turnOn(t,a){let n=document.getElementById(t);n.getBoundingClientRect().top<window.innerHeight/2&&(n.style.animation=`display ${a}s `,n.style.opacity=1)}writeCommand(t){let a=document.getElementById(t);a.getBoundingClientRect().top<window.innerHeight/2&&(a.style.animation="write 2s steps(15)",a.style.width=0)}};window.addEventListener("load",(()=>{r()})),window.addEventListener("hashchange",(()=>{r()})),window.addEventListener("scroll",(()=>{(()=>{if(window.screen.width>1149){const t=document.getElementById("header"),a=document.getElementById("navbar");window.scrollY<5?a.style.opacity=1:window.scrollY>=5&&(a.style.opacity=0,t.onmouseover=()=>{a.style.opacity=1},t.onmouseout=()=>{window.scrollY>5&&(a.style.opacity=0)})}})(),c.writeCommand("about-cursor"),c.turnOn("neofetch",2),c.turnOn("story",2),c.writeCommand("skills-cursor"),c.turnOn("cards",1.5),c.turnOn("skills-img",1.5),c.writeCommand("contact-cursor"),c.turnOn("contact-form",1.5)})),document.getElementById("burger-menu").addEventListener("click",(()=>{document.getElementById("navbar").classList.toggle("active")}))})();