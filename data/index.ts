export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience"},
    //{ name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "About Me",
      description: "👋 Hi! I'm Jacques Oneil Gonzalez, a passionate IT student specializing in Application Development at Mapúa University. With a strong foundation in web and mobile development, I thrive on building innovative applications that deliver impactful, user-friendly experiences. My journey into software engineering has fueled my drive to create and continuously improve, from immersive 3D virtual labs using to productivity-enhancing tools. I created numerous applications with different languages and frameworks ranging from Java, React, Flutter, PHP, and Python.",
      className: "lg:col-span-6 md:col-span-6 md:row-span-6 lg:min-h-[80vh] lg:min-w-[100%] flex items-center justify-center lg:mb-0 md:mb-0",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "text-5xl text-center text-blue-950 font-bold",
    },
    {
      id: 2,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "hidden",
      img: "/jakwes.jpg",
    },
    {
      id: 3,
      title: "School Attended",
      description: "Brief qualities description",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "text-xl text-center text-blue-950 font-semibold",
      img: "/mapua.png",
    },
    {
      id: 4,
      title: "My Tech Stack",
      description: "I constantly try to improve",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "text-xl text-center text-blue-950 font-semibold",
    },
    {
      id: 5,
      title: "Currently building a 3D Virtual Lab CMS",
      description: "The Inside Scoop",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      titleClassName: "text-xl text-center text-blue-950 font-semibold",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
      imgClassName: "w-full h-full object-cover rounded-lg ",
      img: "jakwes.jpg", // Optional image for this section
      onClick: () => navigator.clipboard.writeText("jakwesoneilgonzalez@gmail.com"),
      titleClassName: "text-xl text-center text-blue-950 font-semibold",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Web CMS for 3D Virtual Labs",
      des: "Learn Machine Shop Training with a web application using React, Tailwind, and, Laravel.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://bgvlabs.com",
    },
    {
      id: 2,
      title: "Web Centralized Vendor Management Repository",
      des: "Manage Vendors with a web application using React, Tailwind, and, Springboot.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/git.svg"],
      link: "https://github.com/jakwesoneil/gvendor",
    },
    {
      id: 3,
      title: "Android Pomodoro Timer Application ",
      des: "Boost your productivity with an android pomodoro timer application using Flutter. ",
      img: "/p2.svg",
      iconLists: ["/flutter.svg"],
      link: "https://play.google.com/store/apps/details?id=com.application.slimodoro",
    },
    {
      id: 4,
      title: "Web Pet Adoption Application for Dog Lovers",
      des: "Manage your pet adoption with a web application using JS and PHP.",
      img: "/p3.svg",
      iconLists: ["/js.svg", "/php.svg", "/git.svg"],
      link: "https://github.com/jakwesoneil/SanaShelter_dogadoptionphp",
    },
    
  ];
  
  export const feedbacks = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "McDonald's Philippines",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "Globe Telecom",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Test Engineer Intern",
      desc: "Integrated 20 automated test cases using Java.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Security Researcher Intern",
      desc: "Integrated an open-source SIEM on an AWS ec2 instance using Linux commands.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];