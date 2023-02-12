import React from "react";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";
import '../index.css'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-80% bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-bold sm:text-6xl font-bold text-white">
            I'm a FrontEnd Developer
          </h2>
          <p className="text text-justify font-bold text-gray-500 py-4 pt-4">
            I have 1+ year of learning Experience. Currently,
            I love to work on web application using technologies like React.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
