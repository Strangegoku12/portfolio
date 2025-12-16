import { useState } from "react";


function Blog() {


    return (
        <>
            <div className="bg-zinc-900 rounded-2xl  ml-6 mr-6 border border-zinc-700">

                <div className="p-6">
                    <h1 className="text-white text-2xl font-semibold mb-3">
                        Blog
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="zinc-100 rounded-2xl p-4 border border-zinc-700 hover:border-yellow-400 transition">
                             <img
                                src="https://images.unsplash.com/photo-1765572045667-7f00f4b299ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                                alt="Blog Post"
                                className="rounded-xl w-full h-44 object-cover"
                            />
                            <h2 className="text-white mt-4 text-xl font-semibold mb-2">My First Blog Post</h2>
                            <p className="text-zinc-400 mb-4">
                                This is a sample blog post. Here, I will share my thoughts on web development and other topics.
                            </p>
                            <a href="#" className="text-yellow-400 hover:underline">Read More</a>
                        </div>

                        <div className="zinc-100 rounded-2xl p-4 border border-zinc-700 hover:border-yellow-400 transition">
                            <img
                                src="https://images.unsplash.com/photo-1765572045667-7f00f4b299ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                                alt="Blog Post"
                                className="rounded-xl w-full h-44 object-cover"
                            />
                            <h2 className="text-white text-xl mt-4 font-semibold mb-2">My First Blog Post</h2>
                            <p className="text-zinc-400 mb-4">
                                This is a sample blog post. Here, I will share my thoughts on web development and other topics.
                            </p>
                            <a href="#" className="text-yellow-400 hover:underline">Read More</a>
                        </div>

                        <div className="zinc-100 rounded-2xl p-4 border border-zinc-700 hover:border-yellow-400 transition">
                             <img
                                src="https://images.unsplash.com/photo-1765572045667-7f00f4b299ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                                alt="Blog Post"
                                className="rounded-xl w-full h-44 object-cover"
                            />
                            <h2 className="text-white text-xl mt-4 font-semibold mb-2">My First Blog Post</h2>
                            <p className="text-zinc-400 mb-4">
                                This is a sample blog post. Here, I will share my thoughts on web development and other topics.
                            </p>
                            <a href="#" className="text-yellow-400 hover:underline">Read More</a>
                        </div>

                                                <div className="zinc-100 rounded-2xl p-4 border border-zinc-700 hover:border-yellow-400 transition">
                             <img
                                src="https://images.unsplash.com/photo-1765572045667-7f00f4b299ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                                alt="Blog Post"
                                className="rounded-xl w-full h-44 object-cover"
                            />
                            <h2 className="text-white text-xl mt-4 font-semibold mb-2">My First Blog Post</h2>
                            <p className="text-zinc-400 mb-4">
                                This is a sample blog post. Here, I will share my thoughts on web development and other topics.
                            </p>
                            <a href="#" className="text-yellow-400 hover:underline">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;