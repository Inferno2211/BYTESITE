import { useEffect, useState } from "react";
import BlogCard from "../components/Blog/BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/blogs`).then((response) => {
      response.json().then((blogs) => {
        setBlogs(blogs);
      });
    });
  }, [apiUrl]);

  const categories = ["News", "Projects", "Ideas", "Competitions"];

  return (
    <div className="flex flex-col min-h-screen mt-16">
      <section
        className="relative bg-cover bg-center h-auto py-16 sm:py-32 md:py-48 lg:py-64"
        style={{
          backgroundImage:
            "url('https://4kwallpapers.com/images/walls/thumbs_3t/15593.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 w-full px-4 sm:px-8 pb-5 sm:pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
              Exploring the Wonders of Coding
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:mb-8">
              An amazing victory, this post unveils the secrets that made our
              project possible.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-100 text-xs sm:text-sm">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLvDyoV20-zjbSQvmih9SIzHj-PGijbhZQ0A37n3-uhs84mlyz9=s476-c-no"
              alt="Author"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>Abir Thakur</span>
            <span className="mx-1">•</span>
            <span>31 Nov 2024</span>
            <span className="mx-1">•</span>
            <span>10 mins read</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-gray-900 px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Blog</h2>
        <p className="text-white text-sm sm:text-base mb-8">
          Here, we share competition tips, project guides, and stories that
          inspire you to code.
        </p>

        <div className="flex items-center gap-3 sm:gap-4 mb-8 flex-wrap">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-indigo-500 text-white text-sm sm:text-base">
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-indigo-100 hover:text-indigo-500 text-sm sm:text-base"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs ? (
            blogs.map((post, index) => (
              <BlogCard key={index} index={index} post={post} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
