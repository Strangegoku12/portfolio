import { Code, Brain, BarChart3, Gamepad2 } from "lucide-react";
import github from "../assets/github.png";
import football from "../assets/football.jpg";
import books from "../assets/books.jpg";

function Aboutcomponent() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      desc: "Building fast, scalable, and responsive web applications using modern frameworks.",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      desc: "Solving complex problems with efficient logic, clean code, and optimized solutions.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      desc: "Analyzing data to extract insights using Python, Pandas, and visualization tools.",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      desc: "Passionate about strategic and competitive gaming to enhance focus and decision-making.",
    },
  ];
  function downloadcv() {
    window.open("https://drive.google.com/file/d/1CZpV1Xr_UG7rmXhlQiOCzHMSytI1glUj/view?usp=sharing", "_blank");
  }
  return (
    <>

      <div className="bg-zinc-900 rounded-2xl  ml-6 mr-6 border border-zinc-700">

        <div className="p-6">
          <h1 className="text-white text-2xl font-semibold mb-3">
            About Me
          </h1>

          <p className="text-zinc-400 mb-4">
            I am a Software Developer with 2 years of hands-on experience building web applications using HTML, CSS, JavaScript, Python, React, and Angular. I have backend experience with Node.js, Express.js, MongoDB, and PostgreSQL, along with strong fundamentals in data analysis and machine learning using NumPy, Pandas, and Scikit-learn. I am proficient with Docker, Git, and GitHub for efficient development and collaboration.
            Beyond coding, I enjoy reading books and playing football. I am deeply passionate about technology, actively moving towards AI, and always excited to collaborate with innovative teams and startups.
          </p>

          <button
            onClick={downloadcv}
            className="inline-flex items-center gap-2 rounded-xl
             bg-gradient-to-r from-indigo-500 to-purple-600
             px-6 py-3 text-sm font-semibold text-white
             shadow-lg shadow-purple-500/30
             transition-all duration-300
             hover:from-indigo-600 hover:to-purple-700
             hover:scale-105 active:scale-95 mb-4"
          >
            Download CV
          </button>

          {/* WHAT I'M DOING */}
          <h1 className="text-white text-2xl font-semibold mb-6">
            What I'm Doing
          </h1>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-zinc-800/60 backdrop-blur
                       p-6 border border-zinc-700
                       shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                       hover:border-yellow-400 transition"
              >
                <div className="flex gap-4 items-start">

                  {/* ICON */}
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-700">
                    <item.icon className="text-yellow-400" size={26} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <h1 className="text-white text-2xl font-semibold mb-2 mt-8">
            What I’m Working On
          </h1>
          <p className="text-zinc-400 text-sm mb-6">
            Actively building modern web applications, contributing to open-source projects on GitHub,
            and continuously improving my frontend and backend skills.
          </p>

          <img src={github} alt="GitHub Contributions" />



         

          <h1 className="text-white text-2xl font-semibold mb-4 mt-8">
            My Hobbies  
          </h1>
          <div className="flex">
          <img src={football} className="w-60 h-60 mr-4 rounded-lg" />
          <img src={books} className="w-60 h-60 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcomponent;
