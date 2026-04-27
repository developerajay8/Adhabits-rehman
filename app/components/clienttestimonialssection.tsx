import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaArrowDownLong } from 'react-icons/fa6';
import Ctablock from './ctablock';

// Mock data for the testimonials
// Replace the 'image' paths with your actual screenshot paths
const testimonials = [
  { id: 1, image: "/c1.png" },
  { id: 2, image: "c2.png" },
  { id: 3, image: "c3.png" },
  { id: 4, image: "c4.png" },
  { id: 4, image: "c5.png" },
  { id: 4, image: "c5.png" },
  // Add more to make the loop seamless
];

const ClientTestimonials = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Title Section */}
       
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-[600] pb-3 ">
          <span className="text-[#ff5a1f]">
           Client
          </span>{" "}
          <span className="text-white">
          Testimonials
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Real WhatsApp screenshots from happy clients
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for "Fade" effect on sides */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 hidden md:block"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 hidden md:block"></div>

        <Marquee
          gradient={false}
          speed={50}
          autoFill
          pauseOnHover={true}
          className="py-4"
        >
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="mx-3 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-[280px] h-[460px] rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl shadow-black/50">
                <img 
                  src={item.image} 
                  alt={`Client Testimonial ${item.id}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

       {/* Bottom Icon */}
              <div className="flex justify-center mt-10">
                <div className="flex flex-col items-center gap-2 text-[#ff4d14] text-2xl animate-pulse">
                  <FaArrowDownLong />
                  <FaArrowDownLong />
                  <FaArrowDownLong />
                </div>
              </div>
      
              <div className="relative z-10 w-full max-w-[1080px] mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-10">
                      <Ctablock/>
                      </div>
    </section>
  );
};

export default ClientTestimonials;