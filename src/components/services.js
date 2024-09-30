import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Services = () => {
  const servicesRef = useRef([]);

  useEffect(() => {
    // Animate the services to pop out (scale up and down) in a loop
    anime({
      targets: servicesRef.current,
      scale: [1, 1.1],  // Pop out to 110% of original size
      easing: 'easeInOutQuad',
      direction: 'alternate',  // Go back to original size
      loop: true,              // Repeat the animation indefinitely
      duration: 800,           // Duration for each pop-in/pop-out cycle
      delay: anime.stagger(300), // Stagger the animation with a 300ms delay between each service
    });
  }, []);

  const services = [
    { title: "Software Development", description: "Custom software development for businesses." },
    { title: "Cloud Solutions", description: "Cloud services tailored for scalability and flexibility." },
    { title: "Cybersecurity", description: "Protect your data with industry-leading cybersecurity." },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[75px] mt-10 w-3/4 mx-auto"> {/* Added gap-[75px] for 2cm spacing */}
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              servicesRef.current[index] = el; // Store refs for each service
            }}
            className="bg-white shadow-lg p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
