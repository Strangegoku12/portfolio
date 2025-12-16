import { useState } from "react";
  const projects = [
        {
            category: "Frontend",
            projectname: "TaskFlow",
            img: "https://images.unsplash.com/photo-1765825365130-52e276bca060?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            openproject: "http://127.0.0.1:5500/vcard-personal-portfolio/#",
            sourcecode: ""

        },
        {
            category: "Backend",
            projectname: "ShopSphere",
            img: "https://images.unsplash.com/photo-1765572045667-7f00f4b299ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
            openproject: "https://www.youtube.com/",
            sourcecode: ""

        },
        {
            category: "Frontend",
            projectname: "",
            img: "",
            openproject: "",
            sourcecode: ""

        },
        {
            category: "Frontend",
            projectname: "",
            img: "",
            openproject: "",
            sourcecode: ""

        },

    ]

function Portfolio() {
    const filter = ["All", "Frontend", "Backend", "DataScience", "MobileApp", "ARVR"]
    const [active, setActive] = useState("All");

  
      const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

    return (
        <>
            <div className="bg-zinc-900 rounded-2xl  ml-6 mr-6 border border-zinc-700">

                <div className="p-6">
                    <h1 className="text-white text-2xl font-semibold mb-3">
                        Portfolio
                    </h1>
                    <div className="flex gap-4 mb-4">
                        {filter.map((item, index) => {
                            return <button
                                key={index}
                                onClick={() => setActive(item)}
                                className={`text-sm font-medium transition ${active === item
                                        ? "text-yellow-400"
                                        : "text-zinc-400 hover:text-yellow-400"
                                    }`}
                            >
                                {item}
                            </button>
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((item, index) => (
                            <div key={index} className="group cursor-pointer" onClick={item.openproject ? () => window.open(item.openproject, "_blank") : undefined}>
                               
                                <div className="bg-zinc-800 rounded-2xl p-4 mb-4 transition group-hover:bg-zinc-700">
                                    <img
                                        src={item.img}
                                        alt={item.projectname}
                                        className="rounded-xl w-full h-44 object-cover"
                                    />
                                </div>

                                <h3 className="text-white text-lg font-semibold">
                                    {item.projectname}
                                </h3>

                                <p className="text-zinc-400 text-sm mt-1">
                                    {item.category}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;