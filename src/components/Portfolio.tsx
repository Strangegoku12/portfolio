import { useState } from "react";
  const projects = [
        {
            category: "Frontend",
            projectname: "TaskFlow",
            img: "https://images.unsplash.com/photo-1765825365130-52e276bca060?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            openproject: "https://github.com/Strangegoku12/Taskmanagement",
            sourcecode: ""

        },
        {
            category: "Backend",
            projectname: "ShopSphere",
            img: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
            openproject: "https://github.com/hasan-py/MERN_Stack_Project_Ecommerce_Hayroo",
            sourcecode: ""

        },
        {
            category: "DataScience",
            projectname: "Icc_WorldCup",
            img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
            openproject: "https://github.com/Strangegoku12/ICC_wrold_cup",
            sourcecode: ""

        },
        {
            category: "Frontend",
            projectname: "Portfolio",
            img: "https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvfGVufDB8fDB8fHww",
            openproject: "https://github.com/Strangegoku12/portfolio",
            sourcecode: ""

        },
         {
            category: "Backend",
            projectname: "Employee Management System",
            img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
            openproject: "https://github.com/Strangegoku12/employemanagement",
            sourcecode: ""

        }

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