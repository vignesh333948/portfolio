import React from 'react'
export default function About() {
  return (
    <>
      <div id='about' className='text-center p-6'>
        <h1 className='text-white'>ABOUT</h1>
        <p className='p-3 font-family-Liberation Sans text-white'>Passionate and detail-oriented BSc Computer Science graduate (2024) currently pursuing a Full Stack Python Developer course. Equipped with strong skills in HTML,CSS,JavaScript,React,Bootstrap,Django,Mysql and C,I have hands-on experience in developing responsive and visually appealing websites. I thrive on tackling complex challenges and Am dedicated to creating seamless user experiences. Eager to bring my innovative mindset and collaborative spirit to a dynamic team, I am committed to contributing to transformative projects in the tech landscape.</p>
        <div eventKey="cv" title="cv" className="tab-content">
                  <div className="cv">
                    <div>
                      <a href="ESWARK RESUME.pdf">
                        <button className="b1">RESUME</button>
                      </a>
                    </div>
                  </div>
                  <br /> <br /> <br />
        </div>
    </div>
    </>
  )
}
