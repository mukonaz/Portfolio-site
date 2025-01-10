import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ProfileCard from "./ProfileCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_ozcal0r", 
        "template_vp5zrkn", 
        formData,
        "ZUPi-vkuOvlytEkUY" 
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          setErrorMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-5">
      <div className="profile-card-container">
        <ProfileCard />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Create Something{" "}
          <span className="text-purple-500">Amazing</span>
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-6 py-3 rounded-md text-white font-medium ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>

        {isSuccess && (
          <p className="mt-4 text-green-500">Message sent successfully!</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
