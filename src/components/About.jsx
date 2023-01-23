import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f890e7] text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>My Name is Jakub Sobieraj Full Stack Developer Enjoyer of tacos</p>
            </div>
            <div>
              <p>I love to sandbox and play with design tools! Bootstrap, Materialize, Bulma, Tailwind, and good old fashisoned CSS.
                 In my coding bootcamp, I loved that my groups let me focus mainly front end design, as it let me try and give our projects
                 their own personality. </p> 
                 <br></br>
              <p> Feel free to look at some of my work below, I used Bootstrap, Foundation, and CSS for my 3 group projects, and Tailwind to create my Miami Vice inspired Portfolio.</p> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
