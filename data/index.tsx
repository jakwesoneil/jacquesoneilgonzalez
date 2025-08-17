import React from "react";
import { FaUser, FaBriefcase, FaCertificate, FaCode, FaBookOpen, FaEnvelope } from "react-icons/fa";
import { start } from "repl";

  export const navBarItems = [
    { title: "About", icon: <FaUser />, href: "#about" },
    { title: "Experience", icon: <FaBriefcase />, href: "#experience" },
    { title: "Certifications", icon: <FaCertificate />, href: "#certifications" },
    { title: "Projects", icon: <FaCode />, href: "#projects" },
    { title: "Publications", icon: <FaBookOpen />, href: "#publications" },
    { title: "Contact", icon: <FaEnvelope />, href: "#contact" },
  ]; 
  export const infos = [
    {
      quote: "Finished a Bachelors Degree on Information Technology with a specialization on Application Development.",
      name: "Mapúa University",
      designation: "Student",
      src: "/am1.jpeg",
    },
    {
      quote: "Volunteered at meetups, and helped organize events to help students who are interested in learning Kubernetes.",
      name: "K8sUG Philippines",
      designation: "Volunteer",
      src: "/am2.jpg",
    },
    {
      quote:
        "Currently working on a 24x7 shifting schedule, managing cloud infrastructure and ensuring system reliability.",
      name: "Willis Towers Watson",
      designation: "Cloud Operations Junior Associate",
      src: "/am3.jpg",
    },
  ];

  export const exps = [
  {
    company: "Globe Telecom",
    logo: "e1.svg",
    position: "Security Researcher Intern",
    src: "exp1.jpg",
    startDate: "Apr 2024",
    endDate: "Jul 2024",
  },
  {
    company: "McDo Philippines",
    logo: "e2.svg",    
    position: "QA Intern",
    src: "exp2.png",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
  },
    {
    company: "WTW",
    logo: "e3.png",
    position: "Cloud Ops Jr. Associate",
    src: "exp3.jpg",
    startDate: "May 2025",
    endDate: "Present",
  },

  ];
  
  export const certs = [
    {
      id: 1,
      title: "TOEIC Listening and Reading",
      dateTaken: "March 2024",
      status: "Active",
      certsrc: "https://www.makaitalia.com/wp-content/uploads/2017/03/logo-toeic-transparent1.png",
      certLink:
        "https://learn.microsoft.com/en-us/users/jacquesoneilgonzalez-7554/credentials/bea2b9fbbdc516d3?ref=https%3A%2F%2Fwww.linkedin.com%2F",
     
    },
    {
      id: 2,
      title: "Microsoft Azure Fundamentals",
      dateTaken: "June 2024",
      status: "Active",
      certsrc: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      certLink:
        "https://learn.microsoft.com/en-us/users/jacquesoneilgonzalez-7554/credentials/bea2b9fbbdc516d3?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      
    },
  ];

  export const projs = [
    {
      id: 1,
      title: "Web Pet Adoption Application for Dog Lovers",
      description: "Manage your pet adoption with a web application using JS and PHP.",
      src: "/p1.png",
      projText: "Visit",
      projLink: "https://github.com/jakwesoneil/SanaShelter_dogadoptionphp",
      skills:["JavaScript", "PHP"],
    },

    {
      id: 2,
      title: "Android Pomodoro Timer Application ",
      description: "Boost your productivity with an android pomodoro timer application using Flutter. ",
      src: "/p2.png",
      iconLists: ["/flutter.svg"],
      projText: "Visit",
      projLink: "https://github.com/jakwesoneil/slimodoro",
      skills:["Flutter"],
    },
      
    {
      id: 3,
      title: "Web CMS for 3D Virtual Labs",
      description: "Learn Machine Shop Training with a web application using React, Tailwind, and, Laravel.",
      src: "/p3.png",
      projText: "Visit",
      projLink: "https://github.com/jakwesoneil/bgv-frontend",
      skills: ["React", "Tailwind", "Typescript"],
    },
    {
      id: 4,
      title: "BossPaCheque",
      description: "Clean and format CSV files for easy data management using React Native and Tailwind",
      src: "/p4.png",
      projText: "Visit",
      projLink: "https://github.com/JaiLayos/BossPaCheque",
      skills: ["React Native", "Tailwind", "Python"], 
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
      className: "md:col-span-2", 
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

