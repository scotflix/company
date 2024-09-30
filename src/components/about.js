import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-white text-gray-800">
      <h1 className="text-5xl font-bold text-center">About Us</h1>
      <div className="mt-10 mx-auto w-3/4 text-center">
        <p className="text-lg">
          We are a passionate team of IT experts delivering innovative solutions to businesses of all sizes.
          Our mission is to drive digital transformation with top-notch software and cutting-edge technology.
        </p>
      </div>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center">Meet Our Team</h2>
        <div className="flex justify-center mt-10">
          <div className="p-6">
            <img src="team-member.jpg" alt="Team Member" className="w-40 h-40 rounded-full mx-auto"/>
            <h3 className="text-2xl font-semibold mt-4 text-center">John Doe</h3>
            <p className="text-center">CEO & Founder</p>
          </div>
          <div className="p-6">
            <img src="team-member.jpg" alt="Team Member" className="w-40 h-40 rounded-full mx-auto"/>
            <h3 className="text-2xl font-semibold mt-4 text-center">John Doe</h3>
            <p className="text-center">CEO & Founder</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>
    </div>
  );
};

export default About;
