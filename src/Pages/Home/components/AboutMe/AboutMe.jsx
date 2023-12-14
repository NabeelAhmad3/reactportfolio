import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center m-16 md:m-18 lg:m-24 gap-20">
      <img src="./img/AboutMe.JPG" width={`600px`} alt="img" />
      <div className="max-w-3xl">
        <h3 className="font-bold text-5xl mb-3">About Me</h3>
        <p>

Hello, I'm <strong>Nabeel Ahmad</strong>, a seasoned web developer passionate about crafting 
digital experiences that leave a lasting impact. With a foundation built on
 code and creativity, I thrive in the dynamic world of web development.
<br /><br />
<strong>What I Do:</strong>
<br />
As a professional web developer, I transform ideas into reality. From
 elegant front-end designs to robust back-end solutions, I specialize 
 in creating websites that not only look stunning but also deliver seamless and engaging user experiences.
 <br /><br />
<strong>My Approach:</strong>
<br />
I believe in the power of clean code and intuitive design. Each line 
of code I write and every pixel I place is dedicated to enhancing the 
functionality and aesthetics of the digital landscape.
<br /><br />
<strong>Why Choose Me:</strong>
<br />
Driven by a commitment to excellence, I stay at the forefront of 
industry trends and technologies. Whether it's responsive design,
 efficient coding, or optimizing user journeys, I bring a wealth of experience to every project.
 <br /><br />
<strong>Let's Collaborate:</strong>
<br />
Whether you're looking to launch a new website, revamp an 
existing one, or explore the possibilities of web development, 
I'm here to collaborate and bring your vision to life.
Let's build something extraordinary together.
       </p>
      </div>
    </div>
  );
};

export default AboutMe;
