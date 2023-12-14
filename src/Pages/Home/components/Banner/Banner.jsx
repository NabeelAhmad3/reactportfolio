import React from "react";

const Banner = () => {
  return (
    <div className="banner bg-[#F5FCFF] p-20">
      <div className="max-w-[500px] banner-text">
        <p className="text-sm leading-8">
          <strong>Hey, I am Nabeel Ahmad</strong>
        </p>
        <h1 className="text-4xl font-bold leading-20 my-2">
          I create <span className="primary-color">product design</span>
          <br />
          and brand experience
        </h1>
        <p className="text-sm leading-5">
          I have alot of experience in various field of software development and designing website using new technologies
        </p>
        <button className="btn text-xs bg-primary text-white hover:bg-[#7b6db3] max-w-[150px] my-3">
          Get in Touch
        </button>
      </div>

      <img
        className="bg-[#F5FCFF]"
        src="./img/person1.JPG"
        width={`500px`}
        alt="img"
      />
    </div>
  );
};

export default Banner;
