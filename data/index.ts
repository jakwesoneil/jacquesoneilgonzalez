export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "About Me",
      description: "👋 Hi! I'm Jacques Oneil Gonzalez, a passionate IT student specializing in Application Development at Mapúa University. With a strong foundation in web and mobile development, I thrive on building innovative applications that deliver impactful, user-friendly experiences. My journey into software engineering has fueled my drive to create and continuously improve, from immersive 3D virtual labs to productivity-enhancing tools.",
      className: "lg:col-span-6 md:col-span-6 md:row-span-6 lg:min-h-[80vh] lg:min-w-[100%] flex items-center justify-center lg:mb-0 md:mb-0",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "text-5xl text-center text-blue-50 font-bold",
    },
    {
      id: 2,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      //className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center overflow-hidden",
      //imgClassName: "w-full h-full object-contain rounded-xl lg:rounded-lg",
      //titleClassName: "hidden",
      img:"toga.jpeg",
      //img: "/jakwes.jpg",
    },
    {
      id: 3,
      title: "School Attended",
      description: "Brief qualities description",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center overflow-hidden",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "hidden",
      img: "/mapua.png",
    },
    {
      id: 4,
      title: "My Tech Stack",
      description: "I constantly try to improve",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "text-xl text-center text-blue-50 font-semibold",
      techStack: ["/re.svg","/flutter.svg","java.svg", "/tail.svg", "/ts.svg"
      ],
    },
    {
      id: 5,
      title: "Skills",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "text-xl text-center text-blue-50 font-semibold",
      skill:["Collaboration", "Adaptability", "Active Listening", "Documentation", "Presentation", "Critical Thinking"],
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      img: "", 
      onClick: () => navigator.clipboard.writeText("jakwesoneilgonzalez@gmail.com"),
      titleClassName: "text-xl text-center text-blue-50 font-semibold",
      resumeLink:"/GONZALEZ-JACQUES_ONEIL-RESUME.pdf",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Web Pet Adoption Application for Dog Lovers",
      des: "Manage your pet adoption with a web application using JS and PHP.",
      img: "/p1.png",
      iconLists: ["/js.svg", "/php.svg", "/git.svg"],
      link: "https://github.com/jakwesoneil/SanaShelter_dogadoptionphp",
      gallery: ["/re.svg", "/tail.svg", "/ts.svg"]
    },

    {
      id: 2,
      title: "Android Pomodoro Timer Application ",
      des: "Boost your productivity with an android pomodoro timer application using Flutter. ",
      img: "/p2.png",
      iconLists: ["/flutter.svg"],
      link: "https://play.google.com/store/apps/details?id=com.application.slimodoro",
      gallery: ["/re.svg", "/tail.svg", "/ts.svg"]
    },
    
    {
      id: 3,
      title: "Web CMS for 3D Virtual Labs",
      des: "Learn Machine Shop Training with a web application using React, Tailwind, and, Laravel.",
      img: "/p3.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://bgvlabs.com",
      gallery: ["/re.svg", "/tail.svg", "/ts.svg"]
    },
    
  ];
  
  export const companies = [
    {
      id: 1,
      name: "McDonald's Philippines",
      img: "/e2.svg",
    },
    {
      id: 2,
      name: "Globe Telecom",
      img: "/e1.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title:  "Security Researcher Intern",
      className: "md:col-span-2",
      thumbnail: "/e1.svg",
      icon:["/aws.svg","/linux.svg"],
      companyName: "Globe Telecom",
      skill:["4/2024 - 7/2024"]
    },
    {
      id: 2,
      title: "Digital Technology Intern",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/e2.svg",
      icon:["/java.svg","/xpath.svg"],
      companyName: "McDo Philippines",
      skill:["9/2024 - 12/2024"]
    },
        {
      id: 3,
      title:  "Cloud Operations Jr. Associate",
      className: "md:col-span-2",
      thumbnail: "/e3.png",
      icon:["/aws.svg","/linux.svg"],
      companyName: "WTW",
      skill:["5/2025 - Present"]
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      target:"https://github.com/jakwesoneil"
    },
    {
      id: 2,
      img: "/link.svg",
      target:"https://www.linkedin.com/in/jacquesoneilgonzalez/"
    },
    {
      id: 3,
      img: "/gmail.svg",
      target:"mailto:jakwesoneilgonzalez@gmail.com?subject=Let's%20get%20in%20touch&body=Hi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
    },
  ];


export const cards = [
  {
    id: "lana-del-rey",
    title: "Summertime Sadness",
    description: "Lana Del Rey",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: `Lana Del Rey is celebrated for her melancholic and cinematic style...`,
  },
  // Add more cards as needed
];
