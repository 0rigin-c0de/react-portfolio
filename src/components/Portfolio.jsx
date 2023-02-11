import React from "react";
import weatherApi from "../assets/portfolio/weather.png";
import restaurant from "../assets/portfolio/restaurant.png";
import bubbleSort from "../assets/portfolio/bubblesort.png";
import wikiViewer from "../assets/portfolio/wiki.png";
import '../index.css'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherApi,
    },

    {
      id: 2,
      src: restaurant,
    },
    {
      id: 3,
      src: bubbleSort,
    },
    {
      id: 4,
      src: wikiViewer,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-100% text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-100 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="btn  bg-gradient-to-r   to-blue-500 rounded-full w-1/1 py-2 px-4  m-4 duration-200 hover:scale-105 hover:brightness-50">
                  Demo
                </button>
                <button className="btn  bg-gradient-to-r   to-blue-500 rounded-full w-1/1 py-2 px-4  m-4 duration-200 hover:scale-105 hover:brightness-50">
                  <a href="https://github.com/0rigin-c0de">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
