import React from 'react';
import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0bd3d3]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        <img className='w-20px mx-auto' src={Logo} alt="Logo Image" />
        </h1>
       
        <p className='text-black py-4 max-w-[700px]'>
          I’m a recent full-stack developer graduate from Northwestern. Enjoy my Vice inspired portfolio and check out some of my work!
        </p>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
