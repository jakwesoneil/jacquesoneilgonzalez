export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-4 md:col-span-6 md:row-span-4 lg:min-h-[60vh] flex items-center justify-center",
        imgClassName: "w-full h-full object-cover",
        titleClassName: "text-2xl text-center text-white font-semibold",
        img: "/b1.svg",
        spareImg: "",
      },
      {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
        imgClassName: "w-full h-auto object-cover",
        titleClassName: "text-xl text-left text-neutral-800",
        img: "",
        spareImg: "",
      },
      {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-3 md:col-span-6 md:row-span-2 flex items-center justify-center",
        imgClassName: "w-16 h-16 object-contain",
        titleClassName: "text-xl text-center text-neutral-800 font-semibold",
        img: "",
        spareImg: "",
      },
      {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-4 md:col-span-6 md:row-span-2 flex items-center justify-center",
        imgClassName: "w-32 h-32 object-cover",
        titleClassName: "text-xl text-left text-neutral-800",
        img: "/grid.svg",
        spareImg: "/b4.svg",
      },
      {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "lg:col-span-4 md:col-span-6 md:row-span-3 flex items-center justify-center",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 object-cover",
        titleClassName: "text-2xl text-center text-neutral-800 font-semibold",
        img: "/b5.svg",
        spareImg: "/grid.svg",
      },
      {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex items-center justify-center",
        imgClassName: "w-32 h-32 object-cover",
        titleClassName: "text-xl text-center text-neutral-800",
        img: "",
        spareImg: "",
      },      
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Web CMS for 3D Virtual Labs",
      des: "Learn Machine Shop Training with a web application using React, Tailwind, and, Laravel.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://bgvlabs.com",
    },
    {
      id: 2,
      title: "Web Centralized Vendor Management Repository",
      des: "Manage Vendors with a web application using React, Tailwind, and, Springboot.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/jakwesoneil/gvendor",
    },
    {
      id: 3,
      title: "Android Pomodoro Timer Application ",
      des: "Boost your productivity with an android pomodoro timer application using Flutter. ",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://play.google.com/store/apps/details?id=com.application.slimodoro",
    },
    {
      id: 4,
      title: "Web Pet Adoption Application for Dog Lovers",
      des: "Manage your pet adoption with a web application using JS and PHP.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/jakwesoneil/SanaShelter_dogadoptionphp",
    },
    
  ];
  
  /*export const testimonials = [
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
  ];*/
  
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