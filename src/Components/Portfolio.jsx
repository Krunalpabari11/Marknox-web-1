import React from "react";
import sort from "../assets/img/portfolio/sorting.png";
import linkedin from "../assets/img/portfolio/linkedin.png";
import redlife from "../assets/img/portfolio/Admin-analytics.png";
import nptel from "../assets/img/portfolio/nptel.png";
import netflix from "../assets/img/portfolio/netflix.png";
import efficacy from "../assets/img/portfolio/efficacy.png";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

import InternshipSection from "./InternshipSection";
import ProjectSection from "./ProjectSection";
const Portfolio = () => {
  const animation = useAnimation();
  const internships = [
    {
      title: "Frontend Intern",
      company: "SETU",
      duration: "MAY 2024 - JULY 2024",
      description: "Worked on development of Freelancer Marketplace \n Integrated Stripe API for payment gateway.",
    },
    {
      title: "Frontend  Intern",
      company: "Across The Globe",
      duration: "AUG 2023 - SEP 2023",
      description: "Worked on the creation of Collabrative and Communcative Educational Portal",
    },
    {
      title: "Software Developer Intern",
      company: "Cargar",
      duration: "FEB 2023 - JUNE 2023",
      description: "Led the development of an intitutive website, ensuring full responsiveness and user-friendly experience.",
    },
  ];

  const projects = [
    {
      title: "Real Time Exam Proctoring",
      description: "A real-time exam proctoring system featuring webcam monitoring, facial recognition, screen recording, and behavior analysis.",
      githubUrl: "https://github.com/Krunalpabari11/Real-time-exam-proctoring",
    },
    {
      title: "Web-Flow Automation",
      description: "A drag-and-drop automation platform integrating multiple services (Google Drive, Slack, Discord) with secure authentication and real-time notifications.",
      githubUrl: "https://github.com/Krunalpabari11/saas-automation",
    },
    {
      title: "Chat Application",
      description: "A decentralized real-time communication platform built with Next.js and Socket.io featuring instant messaging capabilities.",
      githubUrl: "https://github.com/Krunalpabari11/HiFi",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-primary w-full text-white md:h-screen portfolio"
    >
      <InView onChange={(inview) => inViewHandler(inview, animation)}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            
          </div>
          <InternshipSection internships={internships} />
        </div>
      </InView>

      <InView onChange={(inview) => inViewHandler(inview, animation)}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
          </div>
          <ProjectSection projects={projects} />
        </div>
      </InView>
    </div>
  );
};

export default Portfolio;
