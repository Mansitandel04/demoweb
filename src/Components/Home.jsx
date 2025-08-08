import React from "react";
import heroimg from "../assets/heroimg.webp";
import Demo from "./Demo";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-teal-200">
     <Navbar/>
      <section className="mt-10  py-25  lg:px-50 " >
        <div className="max-w-7xl  flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 px-10  mb-12   text-left">
            <h1 className="text-3xl  lg:text-5xl font-bold leading-tight text-gray-800">
              Onboarding  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-800 ml-2">
                Guide
              </span>
              <br />
            </h1>
            <p className="text-gray-700 my-4  sm:text-sm  lg:text-lg">
              Foodchow's WhatsApp Embedded Sign-up provides an easy way to
              register a WhatsApp Access API App for your business/brand. This
              process is self-service and can be started from Foodchow's
              Dashboard.
            </p>

            <p className="mt-6   text-md text-gray-600">
              Registering a WhatsApp Business account will allow you to send and
              receive messages from your company's brand using Foodchow's APIs.
              Meta enforces certain restrictions and you will likely need to
              complete Meta Business Verification before making your App live.
            </p>
          
          </div>

          {/* Right Image Section */}
          <div className="w-1/2 relative flex justify-center">
            <img
              src={heroimg}
              alt="heroimg"
              className="rounded-3xl w-80 shadow-lg"
            />
          </div>
        </div>
       
      </section>
       <Demo/>
    </div>
  );
};

export default Home;
