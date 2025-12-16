function Contact() {
  return (
    <>
      <div className="bg-zinc-900 rounded-2xl ml-6 mr-6 border border-zinc-700">
        <div className="p-6">
          {/* Heading */}
          <h1 className="text-white text-2xl font-semibold mb-6">
            Contact Form
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-zinc-400 focus:outline-none focus:border-yellow-400 transition"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-zinc-400 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-zinc-400 resize-none focus:outline-none focus:border-yellow-400 transition"
            />

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 text-yellow-400 px-6 py-3 rounded-xl hover:bg-zinc-700 hover:border-yellow-400 transition"
              >
                ✈ Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
