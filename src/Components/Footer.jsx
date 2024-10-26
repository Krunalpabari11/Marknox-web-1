import React from "react";
import { Socials } from "./Socials";
import glasses from "../assets/img/logos/glasses.svg";
export const Footer = () => {
  return (
    <footer className="bg-primary py-12 items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 items-center justify-between">
          <div className="flex space-x-6">
            <Socials />
          </div>
          <img className="w-1/4" src={glasses} />
          <p className="text-white text-sm font-normal">
            Created by @KrunalPabari
          </p>
        </div>
      </div>
    </footer>
  );
};
