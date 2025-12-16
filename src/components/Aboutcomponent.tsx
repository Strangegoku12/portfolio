import { Palette, Code, Smartphone, Camera } from "lucide-react";

function Aboutcomponent() {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      desc: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: Code,
      title: "Web Development",
      desc: "High-quality development of sites at the professional level.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Professional development of applications for iOS and Android.",
    },
    {
      icon: Camera,
      title: "Photography",
      desc: "I make high-quality photos of any category at a professional level.",
    },
  ];

  return (
    <>

      <div className="bg-zinc-900 rounded-2xl  ml-6 mr-6 border border-zinc-700">
        
        <div className="p-6">
          <h1 className="text-white text-2xl font-semibold mb-3">
            About Me
          </h1>

          <p className="text-zinc-400 mb-8">
            Hello 👋 I am Anany Tewari, a web developer passionate about
            building clean and modern UI.
          </p>

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
        </div>
      </div>
    </>
  );
}

export default Aboutcomponent;
