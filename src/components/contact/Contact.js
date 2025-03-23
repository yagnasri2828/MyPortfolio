import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "emailjs-com";  // Import EmailJS

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Enter a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please enter a Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Send email using EmailJS
      const templateParams = {
        from_name: username,
        from_email: email,
        phone: phoneNumber,
        subject: subject,
        message: message,
      };

      emailjs
        .send(
          "gmail", // Replace with your EmailJS Service ID
          "template_8olcxes", // Replace with your EmailJS Template ID
          templateParams,
          "kE3hwwyF5otUpQC3n" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
            setSuccessMsg(`Thank you ${username}, Your message has been sent successfully!`);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.log("Email failed to send:", error);
            setErrMsg("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {/* Error Message */}
              {errMsg && (
                <p className="py-3 text-orange-500 text-base tracking-wide animate-bounce text-center">
                  {errMsg}
                </p>
              )}

              {/* Name & Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="contactInput"
                  type="email"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="contactInput"
                  type="text"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="contactTextArea"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>

              {/* Success Message (Moved Below) */}
              {successMsg && (
                <p className="py-3 text-green-500 text-base tracking-wide animate-bounce text-center">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
