import { Link } from "react-router-dom";

const BlogCard = (data) => {
  let post = data && data.data;

  return (
    // <Link to={`/blog/post/${post.slug}`} >
    //   <div className=" relative group  flex flex-col rounded-lg shadow-2xl overflow-hidden  hover:shadow-md hover:cursor-pointer min-h-[350px] ">
    //     {/* <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70" /> */}

    //     <div className="flex-shrink-0">
    //       <img
    //         className="h-48 w-full object-cover"
    //         src={`http://localhost:8000${post.thumbnail}`}
    //         alt=""
    //       />
    //     </div>
    //     <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-slate-300">
    //       <div className="flex-1">
    //         <p className="text-sm font-medium text-indigo-600 ">
    //           <Link
    //             to={`/blog/categories/${post.category.id}`}
    //             className="hover:underline"
    //           >
    //             {post.category.name}
    //           </Link>
    //         </p>
    //         <Link to={`/blog/post/${post.slug}`} className="block mt-2 ">
    //           <p className="text-xl font-semibold text-gray-900 ">
    //             {post.title}
    //           </p>
    //           <p className="mt-3 text-base text-gray-500 ">
    //             {post.excerpt}
    //           </p>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
    <Link to={`/blog/post/${post.slug}`}>
      <div
        className="relative bg-white block rounded-lg shadow-lg mb-6 lg:mb-0 "
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <div className="relative overflow-hidden bg-no-repeat bg-cover h-[220px]">
          <img
            // src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
            src={`http://localhost:8000${post.thumbnail}`}
            className="w-full rounded-t-lg"
          />
          <Link to={`/blog/post/${post.slug}`}>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </Link>
          <svg
            className="absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ left: 0, bottom: 0 }}
          >
            <path
              fill="#fff"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="font-bold text-lg mb-3">{post.title}</h5>
          <p className="mb-4 pb-2">{post.excerpt}</p>
          <Link
            to={`/blog/post/${post.slug}`}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Learn more
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
