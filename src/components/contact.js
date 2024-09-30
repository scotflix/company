import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const inputRefs = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  useEffect(() => {
    // Animate the border colors to create a rainbow effect
    inputRefs.current.forEach((input) => {
      anime({
        targets: input,
        borderImage: [
          {
            value: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
            duration: 3000,
            easing: 'linear',
          },
          {
            value: 'linear-gradient(90deg, violet, red, orange, yellow, green, blue, indigo)',
            duration: 3000,
            easing: 'linear',
          },
          {
            value: 'linear-gradient(90deg, blue, indigo, violet, red, orange, yellow, green)',
            duration: 3000,
            easing: 'linear',
          },
        ],
        borderImageSlice: 1,
        borderWidth: '4px',
        loop: true,
      });
    });
  }, []);

  return (
    <div className="py-20 bg-white text-gray-800">
      <h1 className="text-5xl font-bold text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-10 w-3/4 mx-auto">
        <div className="mb-6">
          <label className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            ref={(el) => (inputRefs.current[0] = el)} // Attach ref
            className="w-full p-3 rounded-lg border-4 border-transparent"
            style={{
              borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
              borderImageSlice: 1,
              borderWidth: '4px',
            }}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            ref={(el) => (inputRefs.current[1] = el)} // Attach ref
            className="w-full p-3 rounded-lg border-4 border-transparent"
            style={{
              borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
              borderImageSlice: 1,
              borderWidth: '4px',
            }}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            ref={(el) => (inputRefs.current[2] = el)} // Attach ref
            className="w-full p-3 rounded-lg border-2 border-red-500 transition-all duration-300"
            style={{
              borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
              borderImageSlice: 1,
              borderWidth: '4px',
            }}
            placeholder="Your Company"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            ref={(el) => (inputRefs.current[3] = el)} // Attach ref
            className="w-full p-3 rounded-lg border-4 border-transparent"
            style={{
              borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
              borderImageSlice: 1,
              borderWidth: '4px',
            }}
            placeholder="Your Message"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">Send Message</button>
      </form>

      {/* Office Locations Section */}
      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center">Our Office Locations</h2>
        <div className="mt-10 w-3/4 mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h3 className="text-2xl font-semibold">Main Office</h3>
            <p className="mt-4">Garissa Road, Gretsa University</p>
            <p>Administration Block, Second floor</p>
            <p className="mt-4">Phone: (254) 456-7890</p>
            <p>Email: contact@yourcompany.com</p>
          </div>

          <div className="w-full md:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3251.5682333451!2d37.0917977!3d-1.0530935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e4fcd9860ab%3A0xd1e1401b70a8f023!2sGretsa%20University!5e1!3m2!1sen!2ske!4v1727470140972!5m2!1sen!2ske"
              width="600"
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
