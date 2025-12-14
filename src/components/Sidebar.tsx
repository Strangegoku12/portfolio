import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import Aboutcomponent from "./Aboutcomponent";

function Sidebar() {
    const [useicon] = useState([
        { icon: Mail, heading: "Email", para: "anany@gmail.com" },
        { icon: Phone, heading: "Phone", para: "8303952900" },
        { icon: Linkedin, heading: "Linkedin", para: "ananytiwari" },
        { icon: Github, heading: "Github", para: "github.com/anany" },
        { icon: Github, heading: "Github", para: "github.com/anany" },
        { icon: Github, heading: "Github", para: "github.com/anany" },
        { icon: Github, heading: "Github", para: "github.com/anany" },
    ]);

    return (
        <div className="min-h-screen bg-black flex pl-12 pt-16 pb-16">

            <div className="w-72 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800 
                      p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)]
                      border border-zinc-700">

                <div className="flex justify-center mb-4">
                    <div className="h-20 w-20 rounded-xl bg-zinc-700 flex items-center justify-center shadow-md">
                        <img src={reactLogo} className="h-12 w-12" />
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
                                <p className="text-sm text-white">
                                    {data.para}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
    <Aboutcomponent/>


export default Sidebar;
