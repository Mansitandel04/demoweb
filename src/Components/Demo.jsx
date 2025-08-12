

import React from "react";
import img1 from "../assets/Picture1.png";
import img2 from "../assets/Picture2.png";
import img3 from "../assets/Picture3.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";


const Demo = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-gradient-to-r from-green-50 to-teal-200 py-5 px-10 lg:px-40 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 mb-4 lg:mb-12 text-left">
          <h3 className="text-lg lg:text-3xl font-bold leading-tight text-gray-800 my-2">
            Prerequisites
          </h3>
          <h4 className="text-sm lg:text-lg text-gray-800">
            Before you get started with this guide, you'll need:
          </h4>
          <div className="text-gray-600 my-3 lg:my-6 text-xs lg:text-base">
            <ul>
              <li>1. A Foodchow account.</li>
              <li>2. A valid email address.</li>
              <li>
                3. A new phone number. Alternatively, you can migrate a live
                phone number.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-4 lg:mb-12 text-left">
          <p className="text-gray-600 my-1 lg:my-4 text-xs lg:text-base">
            The number must be able to receive an SMS or phone call. If the
            number can only receive phone calls, it cannot be using an IVR.
          </p>
          <p className="text-gray-600 mt-3 lg:mt-4 text-xs lg:text-base">
            If migrating from the current BSP to Foodchow using the Embedded
            Signup Flow, disable 2FA for the phone number at the source BSP.
          </p>
          <p className="mt-3 lg:mt-4 text-xs lg:text-base text-gray-600">
            During this process, you can either create a new Meta(Facebook)
            Business Account or select an existing one. We recommend using an
            existing Meta(Facebook) Business Account if someone within your
            company has already created and verified it. If this is the case,
            they will either need to invite you as an administrator with full
            access or you can share the Direct Facebook Registration link with
            the Meta(Facebook) business account owner. They can log in and
            complete the WhatsApp Business Account process.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gradient-to-r from-green-50 to-teal-200 py-3 lg:py-5 px-5 sm:px-10 lg:px-40">
        <div className="mb-12 text-center sm:w-2xl lg:w-full">
          <h1 className="text-xl lg:text-3xl font-bold text-gray-900">
            Let's Get Started
          </h1>
        </div>

        <div className="container mx-auto flex-col mb-12  space-y-12">
          <p className="text-gray-700 mt-10 mb-3 text-sm lg:text-lg">
            1. Start by logging into your Foodchow Dashboard. Then, select
            WhatsApp Select Continue with Facebook to proceed further. If you do
            not have access to the company's Facebook account, you can copy the
            URL and share it with your administrator
          </p>

          <p className="text-gray-700 mt-5 mb-3 text-sm lg:text-lg text-left">
            2. Select <span className="font-bold">Continue with Facebook</span>{" "}
            to proceed further. If you do not have the access to company's
            Facebook account, you can copy the URL and share it with your
            administrator.
          </p>
          <img src={img1} alt="img1" className="p-5 shadow-2xl mx-auto" />

          <p className="text-gray-700 mt-20 mb-3 text-sm lg:text-lg text-left mx-auto">
            3. Log into Facebook if you haven't already or click.
            <span className="font-bold">Continue as [your name]</span> if you're
            already signed in. After logging in, you will be shown an overview
            of the process of connecting your number to WhatsApp.
          </p>
          <img src={img2} alt="img2" className="p-5 shadow-2xl  mx-auto" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            4. Select <span className="font-bold">Get Started.</span>
          </p>
          <img src={img3} alt="img3" className="p-5 shadow-2xl  mx-auto" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            5. Fill in your business information and select.
            <span className="font-bold">Next.</span>
          </p>
          <img src={img7} alt="img7" className="p-5 shadow-2xl " />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            6. Next, you will be able to select a{" "}
            <span className="font-bold">WhatsApp Business Account (WABA)</span>{" "}
            and <span className="font-bold">WhatsApp Business Profile </span>or
            create a new one
          </p>
          <img src={img8} alt="img8" className="p-5 shadow-2xl" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            7. Now, provide details for your business information.
          </p>
          <img src={img9} alt="img9" className="p-5 shadow-2xl mx-auto" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            8. Create or select your WhatsApp Business account. Then, select{" "}
            <span className="font-bold">Next.</span>
          </p>
          <img src={img10} alt="img10" className="p-5 shadow-2xl mx-auto" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            9. Provide a WhatsApp Business display name and select the
            category. Then, select <span className="font-bold">Next.</span>
          </p>
          <img src={img11} alt="img11" className="p-5 shadow-2xl mx-auto" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            10. Next, you will receive a verification code on your registered
            phone number. Enter the verification code and select{" "}
            <span className="font-bold">Next.</span>
          </p>
          <img src={img12} alt="img12" className="p-5 shadow-2xl mx-auto" />

          <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
            11. Review the permissions requested and select{" "}
            <span className="font-bold">Continue.</span>
          </p>
          <img src={img13} alt="img13" className="p-5 shadow-2xl mx-auto " />

        <p className="text-gray-700 mt-20 mb-2 text-sm lg:text-lg text-left">
  12. You're all set to go. Select. <span className="font-bold">Finish.</span>
</p>
          <img src={img14} alt="img14" className="p-5 shadow-2xl  mx-auto" />

          
        </div>
      </section>
    </div>
  );
};

export default Demo;
