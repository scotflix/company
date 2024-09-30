import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import About from './about';
import Contact from './contact';
import Services from './services';

const Home = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the button to pop out (scale up and down) in a loop
    anime({
      targets: buttonRef.current,
      scale: [1, 1.1],  // Button pops out to 110% of its original size
      easing: 'easeInOutQuad',
      direction: 'alternate',  // Alternate between scaling up and scaling back down
      loop: true,              // Run the animation indefinitely
      duration: 800,           // Duration for each pop-in/pop-out cycle
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center bg-blue-500 text-white text-center">
        <h1 className="text-5xl font-bold">Innovative IT Solutions for Modern Businesses</h1>
        <p className="mt-4 text-xl">We provide cutting-edge IT services tailored to your business needs</p>
        {/* Add ref to the button for animation */}
        <button ref={buttonRef} className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold">
          Get a Free Consultation
        </button>
      </div>

      {/* Key Services Section */}
      <section className="py-20 bg-gray-100">
        <Services />
      </section>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
