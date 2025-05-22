import emoji from "react-easy-emoji";

export const greetings = {
	name: "Sai Ramakanth Kodi",
	title: "Hi all, I'm Ramakanth",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with Angular / React.js / JavaScript / Nodejs and some other cool libraries and frameworks.",
	resumeLink: "https://drive.google.com/file/d/137ltJ1mFFflntHAVaDg8nA1oHtUTvWlt/view",
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
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "University Of South Florida",
		subHeader: "Master of Science in Business Analytics and Information Systems",
		duration: "AUG 2023 - Present",
		desc: "CGPA :  3.78",


	},
	{
		schoolName: "MLR Institute of Technology",
		subHeader: "Bachelor of Technology, Computer Science and Engineering",
		duration: "2018 - 2021",
		desc: "CGPA :  3.66",

	},

];

export const experience = [

	{
		role: "Front-End Engineer",
		company: "Algoscale Technologies",
		companylogo: "/img/icons/common/algoscale.png",
		date: "May 2021 - June 2023",
		//desc: "(.Net Full Stack)",
		descBullets: [
			"Developed and optimized React and Angular components, improving user experience and accessibility.",
			"Delivered responsive UI features for a large-scale healthcare platform, enhancing mobile-first performance.",
			"Worked with RESTful APIs and GraphQL to integrate front-end applications with backend services.",
			"Participated in daily stand-ups, sprint planning, and code reviews, following Agile methodologies.",
			"Provided operational support, debugging, and troubleshooting for UI-related issues in production."
		]

	},
	{
		role: "Front-End Developer",
		company: "Kapil IT Solutions",
		companylogo: "/img/icons/common/kapil.png",
		date: "April 2019 - April 2021",
		//desc: "(React & Angular)",
		descBullets: [
			"Designed and implemented interactive web applications using React, Angular, and TypeScript.",
			"Optimized web performance, reducing page load times by 30% through code splitting and lazy loading.",
			"Ensured cross-browser compatibility and responsive design for seamless multi-device user experiences.",
			"Collaborated with designers and backend engineers to align UI components with API integrations.",
			"Conducted A/B testing and usability research to improve customer engagement and UX."
		]

	},
	{
		role: "Software Engineer Intern",
		company: "OSOS Pvt.Ltd",
		companylogo: "/img/icons/common/ososlogo.svg",
		date: "July 2018 - January 2019",
		//desc: "(Front-End & Mobile Development)",
		descBullets: [
			"Developed mobile-friendly web applications with React, Angular, JavaScript, Java, and Kotlin.",
			"Assisted in implementing REST API calls and integrating UI components with backend data.",
			"Conducted QA testing to ensure compliance with UI/UX best practices.",
			"Collaborated with quality engineers, user research, product management, design, and support teams to ensure quality in all phases of app development.",
			"Wrote elegant, self-documenting code that is easy to read and adapt for other developers."
		  ]
		  
	}
];

export const projects = [
	{
		name: "Face Mask Detector",
		desc: " Developed using Python TensorFLow and Keras.",
		link: "https://www.linkedin.com/posts/sairamakanthkodi_artificialintelligence-machinelearning-deeplearning-activity-6676169275054661632-BDUI",
		github: "https://github.com/KodiSaiRamakanth/Face-Mask-Detector",

	},

	{
		name: "COVID-19 Global Tracker",
		desc: "Designed and Developed using Tableau",
		github: "https://github.com/KodiSaiRamakanth",
		link: "https://public.tableau.com/app/profile/sai.ramakanth.kodi/viz/COVID-19GlobeTracker/Dashboard1",
	},
	{
		name: "COBALT (by Claim shark)",
		desc: "COBALT (by Claim Shark) is US health care app which deals with health insurance of the users(claims, payments etc.) with automated BOT to verify the user’s data with dynamic dashboards, reports.",
		tech: "Technologies: React, Angular 13, TypeScript, .NET Core, SQL Server, Azure",
	},
	{
		name: "POS (Point Of Sale)",
		desc: "POS (Point Of Sale) is a complete Billing Management App with Sales, Inventory, Purchase, Security, Billing, Helpdesk, Remote Printers Integration, and Smart Dashboards of sales.",
		tech: "Technologies: Angular 11, React, TypeScript, .NET, PostgreSQL, Cordova, jQuery"
	},
	{
		name: "EasyChit",
		desc: "Easy Chit is a Loaning and Finance application. EasyCHIT is being continuously updated with new tech and real-world operations workflow of over 300+ branches so your business can leverage all our learning’s and experiences to grow your chit fund business efficiently.",
		tech: "Technologies: Angular 9, .NET, PostgreSQL, C#"
	},
	{
		name: "Spaarks (Mobile & WEB APP)",
		desc: "Spaarks is a local social network where you can discover shops, services, friends, jobs, and events near you. This is not a platform for buyers alone, instead sellers, home businesses and freelancers can also promote and sell your products and services in the local area.",
		tech: "Technologies: JAVA, XML, KOTLIN, Node JS, Angular"
	}
];


