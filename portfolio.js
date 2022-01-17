import emoji from "react-easy-emoji";

export const greetings = {
	name: "Sai Ramakanth Kodi",
	title: "Hi all, I'm Ramakanth",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with Angular / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
	resumeLink: "https://drive.google.com/file/d/1cu4jwhEnlF4yXn50A0Gzlbf04MKWhX7x/view",
};

export const openSource = {
	githubUserName: "KodiSaiRamakanth",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/rama.kanth3",
	instagram: "https://www.instagram.com/_mr.flashh/",
	twitter: "https://twitter.com/RamakanthSai",
	github: "https://github.com/kodisairamakanth",
	linkedin: "https://www.linkedin.com/in/sairamakanthkodi",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "Angular",
			fontAwesomeClassname: "logos:angular-icon",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "40",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "MLR Institute Of Technology",
		subHeader: "Bachelor of Technology in Computer Science",
		duration: "2018 - 2021",
		desc: "Class Representative(CR)",
		descBullets: [
			"Core Team member of CIE",
			"Member and organizer of START UP club.",
			"Organizing Committee Member for INVENTRON - a national level Hackathon.",
		],
	},
	{
		schoolName: "Ellenki College Of Engg.Tech",
		subHeader: "Diploma in Electronics and Communication Engineering",
		duration: "2015 - 2018",
		desc: "Stood 2nd in Technical Paper Presentation -2017, a national level symposium.",
		descBullets: [
			"Class Representative(CR)",
			"Presented a paper on Business Strategy representing our team, THE TEAM PHOENIX, at MLR INSTITUTE OF TECHNOLOGY, Dundigal, in the year 2018",
		],
	},
	{
		schoolName: "Kendriya Vidyalaya",
		subHeader: "CBSE",
		duration: "2005-2015",
		desc: "",
		descBullets: [
			
		],
	},
];

export const experience = [
	{
		role: "Traine Software Engineer",
		company: "Kapil IT Solutions",
		companylogo: "/img/icons/common/kapil.png",
		date: "April 2021 – Present",
		desc: "Full Stack Developer: Angular 9, .Net",
		descBullets: [
			"Developing & Building Finance Domain ERP Tools.",
			"Determined architectural and product design details for open-ended tasks or specifications.",
			"Wrote elegant, self-documenting code, easy to read and adapt for other developers."
		],
	},
	{
		role: "Android Developer Intern",
		company: "OSOS Pvt.Ltd",
		companylogo: "/img/icons/common/ososlogo.svg",
		date: "JULY 2020 – JAN 2021",
		desc:[ 
			"Handling the back-office operations (back end) of the app.",
			"Implemented features for various applications in Java, Kotlin, and C++.",
			"Collaborated with quality engineers, user research, product management, design, and support teams to ensure quality in all phases of app development. "
		]
	},
	{
		role: "Web Developer Intern",
		company: "ENTREESPHERE",
		companylogo: "/img/icons/common/logo3.png",
		date: "March 2019 – Aug 2019",
		desc:[ 
			"Designed and developed dynamic and interactive websites using MEAN Stack.",
			"Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."
	]
	},
];

export const projects = [
	{
		name: "Face Mask Detector",
		desc: " Developed using Python TensorFLow and Keras.",
		link: "https://www.linkedin.com/posts/sairamakanthkodi_artificialintelligence-machinelearning-deeplearning-activity-6676169275054661632-BDUI",
		github:"https://github.com/KodiSaiRamakanth/Face-Mask-Detector",

	},
	{
		name: "Freelance Projects",
		desc: [
			"E-commerce - Mobile and Web Applications and many more.",
			"Worked with an enthusiastic team"
			],
		link: "http://tarkeshdeva.herokuapp.com/",
	},
	{
		name: "COVID-19 Global Tracker",
		desc: "Designed and Developed using Tableau",
		github: "https://github.com/KodiSaiRamakanth",
		link: "https://public.tableau.com/app/profile/sai.ramakanth.kodi/viz/COVID-19GlobeTracker/Dashboard1",
	},
];


