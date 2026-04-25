import state from "../../assets/images/state.png";
import mongo from "../../assets/images/mongo.png";

const Blogs = () => {
  // 👉 future: fetch from backend
  const blogs = [
    {
      id: 1,
      title: "What is State in React?",
      date: "25 Apr 2023",
      category: "React",
      image: state,
      link: "https://medium.com/@emonshimoul/what-is-state-in-react-5f1513dfb7e1",
    },
    {
      id: 2,
      title: "Steps to Connect MongoDB Database",
      date: "25 Apr 2023",
      category: "MongoDB",
      image: mongo,
      link: "https://medium.com/@emonshimoul/steps-to-connect-mongodb-database-49a1c5f6c30a",
    },
    {
      id: 3,
      title: "What is State in React?",
      date: "25 Apr 2023",
      category: "React",
      image: state,
      link: "https://medium.com/@emonshimoul/what-is-state-in-react-5f1513dfb7e1",
    },
    {
      id: 4,
      title: "Steps to Connect MongoDB Database",
      date: "25 Apr 2023",
      category: "MongoDB",
      image: mongo,
      link: "https://medium.com/@emonshimoul/steps-to-connect-mongodb-database-49a1c5f6c30a",
    },
  ];

  return (
    <section className="min-h-screen bg-[#10101a] text-white px-6 lg:px-16 xl:px-24 py-16">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h3 className="text-4xl font-light uppercase tracking-[6px]">
            My Blog
          </h3>
          <span className="block w-[70px] h-[2px] bg-green-500 mx-auto mt-3"></span>
        </div>

        {/* BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="group block bg-[#0b0b13] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-xs text-gray-400 mb-2">
                  {blog.date} • {blog.category}
                </p>

                <h4 className="text-lg font-semibold group-hover:text-green-400 transition">
                  {blog.title}
                </h4>

              </div>
            </a>
          ))}

        </div>

        {/* MORE BUTTON */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@emonshimoul"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-green-500 hover:bg-white hover:text-green-500 transition"
          >
            More Blogs
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blogs;