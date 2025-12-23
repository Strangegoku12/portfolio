import { Mail, Phone, Linkedin, Github, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import reactLogo from "../assets/WhatsApp Image 2025-12-20 at 19.42.15 (1).jpeg";
import Aboutcomponent from "./Aboutcomponent";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

function Sidebar() {
  const [useicon] = useState([
    { icon: Mail, heading: "Email", para: "anany@gmail.com" },
    { icon: Phone, heading: "Phone", para: "8303952900" },
    { icon: Linkedin, heading: "Linkedin", para: "https://hosturl.link/0DjZiJ" },
    { icon: Github, heading: "Github", para: "https://url-shortener.me/3WSG" },
    { icon: Instagram, heading: "Instagram", para: "https://url-shortener.me/3WU8" },
    { icon: Facebook, heading: "Facebook", para: "https://url-shortener.me/3WUA" },
    { icon: Twitter, heading: "Twitter", para: "https://url-shortener.me/3WUD" },
  ]);
  const [activePage, setActivePage] = useState("about");


  return (
    <div className="min-h-screen bg-black flex pl-12 pt-16 pb-16">

      <div className="w-72 h-[650px] rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800
                      p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)]
                      border border-zinc-700">

        <div className="flex justify-center mb-4">
          <div className="h-30 w-30 rounded-xl bg-zinc-700 flex items-center  justify-center shadow-md">
            <img src={reactLogo} className="h-30 w-30 rounded-md" />
          </div>
        </div>

        <h1 className="text-white text-xl font-semibold text-center">
          Anany Tewari
        </h1>

        <div className="w-28 h-6 rounded-md bg-zinc-700 flex justify-center mb-2 mt-1 ml-16">
          <p className="text-zinc-400 whitespace-nowrap text-sm text-center ">
            Web Developer
          </p>
        </div>

        <hr className="border-zinc-700 mb-4" />

        <div className="space-y-4">
          {useicon.map((data, index) => (
            <div key={index} className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-lg bg-zinc-800
                              flex items-center justify-center
                              shadow-md border border-zinc-700">
                <data.icon size={18} className="text-yellow-400" />
              </div>

              <div>
                <p className="text-xs text-zinc-400 uppercase">
                  {data.heading}
                </p>
                <a
                  href={
                    data.heading === "Email"
                      ? `mailto:${data.para}`
                      : data.heading === "Phone"
                        ? `tel:${data.para}`
                        : data.para
                  }
                  target={data.heading === "Email" || data.heading === "Phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:underline cursor-pointer"
                >
                  {data.heading}
                </a>


              </div>

            </div>
          ))}
        </div>
        <div>

        </div>
      </div>

      <div className="flex-1">
        <div className="min-h-screen bg-black flex justify-center items-start ">
          <div className="relative w-full max-w-5xl">

            {/* NAVBARs */}
            <div className="absolute right-6 z-10">
              <div className="bg-zinc-800/80 backdrop-blur border border-zinc-700 rounded-sm px-4 py-2">
                <ul className="flex gap-4 text-white text-sm">
                  <li
                    onClick={() => setActivePage("about")}
                    className={`cursor-pointer ${activePage === "about" ? "text-yellow-400" : ""
                      }`}
                  >
                    About
                  </li>

                  <li
                    onClick={() => setActivePage("resume")}
                    className={`cursor-pointer ${activePage === "resume" ? "text-yellow-400" : ""
                      }`}
                  >
                    Experience
                  </li>

                  <li onClick={() => setActivePage("portfolio")}
                    className={`cursor-pointer ${activePage === "portfolio" ? "text-yellow-400" : ""
                      }`}>Projects</li>
                  <li onClick={() => setActivePage("Blog")} className={`cursor-pointer ${activePage === "Blog" ? "text-yellow-400" : ""} `}>Blog</li>
                  <li onClick={() => setActivePage("contact")}
                    className={`cursor-pointer ${activePage === "contact" ? "text-yellow-400" : ""
                      }`}>Contact</li>
                </ul>
              </div>
            </div>

            {/* CONTENT AREA */}
            {activePage === "about" && <Aboutcomponent />}
            {activePage === "resume" && <Resume />}
            {activePage === "portfolio" && <Portfolio />}
            {activePage === "Blog" && <Blog />}
            {activePage === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Sidebar;
