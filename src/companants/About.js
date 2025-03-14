import React from 'react';

export default function About() {
  return (
    <>
      <div id="about" className="text-center p-6 bg-blue-600">
        <h1 className="text-white text-2xl font-bold">ABOUT</h1>
        <p className="p-4 font-sans text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-screen-md mx-auto break-words">
          Passionate and detail-oriented BSc Computer Science graduate (2024) currently 
          pursuing a Full Stack Python Developer course. Equipped with strong skills in 
          <span className="font-semibold text-yellow-300"> HTML, CSS, JavaScript, React, Bootstrap, Python , Django, MySQL,</span> 
          and C, I have hands-on experience in developing responsive and visually appealing websites. 
          I thrive on tackling complex challenges and am dedicated to creating seamless user experiences. 
          Eager to bring my innovative mindset and collaborative spirit to a dynamic team, I am committed 
          to contributing to transformative projects in the tech landscape.
        </p>
        <div className="flex justify-center mt-4">
          <a href="VIGNESH C.pdf">
            <button className="b1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg shadow-lg">
              RESUME
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
