import React, { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    setStatus("submitting");

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setStatus("success");
        formRef.current.reset();

        setTimeout(() => setStatus("idle"), 3000);
      })

      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };
  return (
    <section className="w-full h-full flex justify-center mt-7">
      <main className="flex flex-col justify-center w-full px-8 py-14 md:px-24 md:py-10 bg-[#1a1c1e] backdrop-blur-sm shadow-md">
        <div className="w-3/4 md:w-1/3 text-white flex flex-col text-left mb-7">
          <h1 className="md:text-5xl text-4xl">Contact Us</h1>
          <p className="text-base mt-4 text-gray-400">
            Please feel free to contact us and we will get back to you soon as
            we can.
          </p>
        </div>

        {/* Form & Info */}
        <div className="flex flex-col md:flex-row md:mt-16 md:space-x-60">
          <form
            ref={formRef}
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            data-netlify-honeypot="bot-field"
            className="flex flex-col md:w-1/2 text-left text-white space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="relative z-0">
              <input
                type="text"
                name="name"
                required
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Name
              </label>
            </div>

            <div class="relative z-0">
              <input
                type="email"
                name="email"
                required
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>

            <div class="relative z-0">
              <textarea
                name="message"
                required
                id="message"
                rows={1}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="message"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full h-10  text-xl  
                  ${
                    status === "success"
                      ? "bg-green-500 text-white"
                      : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#5e6061] hover:bg-gray-700 text-white"
                  }`}
            >
              {status === "submitting"
                ? "Sending..."
                : status === "success"
                ? "Sent 🎉"
                : status === "error"
                ? "Error ❌"
                : "Submit"}
            </button>
          </form>

          {/* Infomation */}
          <div className="flex flex-col place-content-center mt-7 md:mt-7 w-1/2 text-white text-left space-y-4">
            <div className="flex flex-col">
              <h1 className="text-2xl">Visit us</h1>
              <p className="text-gray-400">Kamla Nagar, Agra.</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">Talk to us</h1>
              <a href="tel:+919808935476" className="text-gray-400">
                +91 9808935476
              </a>
              <a href="mailto:ravip2886@gmail.com" className="text-gray-400">
                ravip2886@gmail.com
              </a>
            </div>
            <div className="flex flex-row space-x-6 ">
              <a
                href="https://github.com/ravikumar07-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="size-5 hover:text-white transition duration-200 ease-in-out 
                  hover:drop-shadow-[0_0_10px_#000000] hover:scale-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-kumar-a45295354/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="size-5 hover:text-white transition duration-200 ease-in-out 
                  hover:drop-shadow-[0_0_10px_#000000] hover:scale-110"
                />
              </a>
              <a
                href="https://www.instagram.com/the_ravi_prajapati_?igsh=MWg1anN1eHE2YmhvMw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="size-5 hover:text-white transition duration-200 ease-in-out 
                  hover:drop-shadow-[0_0_10px_#000000] hover:scale-110"
                />
              </a>
              <a
                href="https://www.facebook.com/share/15xwRCKpyd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="size-5 hover:text-white transition duration-200 ease-in-out 
                  hover:drop-shadow-[0_0_10px_#000000] hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
