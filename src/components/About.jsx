import React from "react";
import '../index.css'

const About = () => {
  return (
    <div
      name="about"
      className="w-80% h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <h2 className="text-xl">Sunil Kumar | Frontend Developer</h2>
        <ul className="about  list-disc list-inside pt-3">
          <li className="pt-2">I'm a Self Taught Developer from India.</li>
          <li className="pt-2">I have spent more than a year teaching myself how to code. It has been a crazy ride.</li>
          <li className="pt-2">I'm Currently Learning Javascript with React.</li>
          <li className="pt-2"> And here are some things that helped me the most while learning code.</li>
        </ul>
        <br />
      </div>
    </div >
  );
};

export default About;
