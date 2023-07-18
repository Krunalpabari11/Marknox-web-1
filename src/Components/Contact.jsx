import React, { useState } from "react";
import { inViewHandler } from "../animationHandler";
import { inView, motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from "emailjs-com";

export const Contact = () => {
  const animation = useAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, sendEmailStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      sendEmailStatus("empty");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          sendEmailStatus("success");
        },
        (error) => {
          console.log(error.message);
        }
      );
  };

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="contact" className="section bg-primary">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animation}
        >
          <div className="flex flex-col pt-12 gap-y-8 lg:gap-x-8 lg:flex-row">
            <div className="flex flex-col">
              <h1 className="section-title text-md font-semibold underline  text-fuchsia-800">
                Contact me
              </h1>
              <p className="text-lg text-gray-200 font-normal mt-4 max-w-md">
                Submit the form below or send me an email at
                bhuyanpartha2001@gmail.com
              </p>
            </div>
            <form
              className="space-y-8 w-full max-w-[780px] pt-4 lg:pt-12 "
              onSubmit={sendEmail}
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="input shadow-md bg-[#011221] border-[#1E2D3D] rounded-lg  text-white"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input shadow-md bg-[#011221] border-[#1E2D3D] rounded-lg  text-white"
                  type="text"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input shadow-md bg-[#011221] border-[#1E2D3D] rounded-lg  text-white"
                  type="text"
                  placeholder="Your subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="textarea shadow-md bg-[#011221] border-[#1E2D3D] rounded-lg text-white"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="btn btn-lg bg-fuchsia-700 hover:bg-fuchsia-900 rounded-lg">
                Send message
              </button>
              <div className="email-status mt-4 font-light text-sm">
                {emailStatus === "success" && (
                  <p className="text-green-400">Email sent succeddfully</p>
                )}
                {emailStatus === "empty" && (
                  <p className="text-yellow-400">
                    Please fill in all the fields before submitting
                  </p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </InView>
  );
};
