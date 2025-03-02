"use client";
import { socialLinks } from "@/JSONData";
import { Send } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    instagram: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: generateContactUsHTML(formData),
          subject: `Contact Us Submission of ${formData.name}`,
          email: ["gxurav.work@gmail.com", "itsgaurav3112003@gmail.com"],
        }),
      });

      const response2 = await fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: generateThankYouHTML(formData?.name),
          subject: `Thanks for Contacting us ${formData.name}!`,
          email: formData?.email,
        }),
      });

      if (response.ok && response2.ok) {
        setResponseMessage(
          "Thank you for reaching out! We'll get back to you soon."
        );
        setFormData({
          name: "",
          whatsapp: "",
          instagram: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {socialLinks.map(({ href, icon, label }) => (
                <div key={href} className="flex items-start mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mr-4">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">{label}</h4>
                    <a
                      href={href}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      {href}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 outline-none rounded-xl text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 outline-none rounded-xl text-white"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      WhatsApp
                    </label>
                    <input
                      type="text"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 outline-none rounded-xl text-white"
                      placeholder="Your WhatsApp number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">
                      Instagram
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 outline-none rounded-xl text-white"
                      placeholder="Your Instagram handle"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 outline-none rounded-xl text-white resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send className="ml-2 h-4 w-4" />
                </button>

                {responseMessage && (
                  <p className="text-white mt-4">{responseMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const generateContactUsHTML = (data) => {
  const { name, whatsapp, instagram, email, message } = data;

  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(to right, #6a11cb, #2575fc); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Contact Us Submission</h1>
        </div>
        <div style="padding: 20px;">
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Name:</strong> ${name}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>WhatsApp Number:</strong> ${whatsapp}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Instagram Profile:</strong> ${instagram}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Email Address:</strong> ${email}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Message:</strong> ${message}
          </p>
        </div>
        <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 14px; color: #555;">
          <p style="margin: 0;">Thank you for contacting us!</p>
        </div>
      </div>
    `;
};

const generateThankYouHTML = (name) => {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(to right, #00c6ff, #0072ff); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank You!</h1>
        </div>
        <div style="padding: 20px; text-align: center;">
          <p style="margin: 0 0 15px; font-size: 16px; color: #333;">
            Dear <strong>${name}</strong>,
          </p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #555;">
            Thank you for contacting us. We appreciate you taking the time to reach out and share your thoughts.
          </p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #555;">
            Our team will review your message and get back to you as soon as possible.
          </p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #333;">
            Have a great day!
          </p>
        </div>
        <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 14px; color: #555;">
          <p style="margin: 0;">This is an automated message. Please do not reply.</p>
        </div>
      </div>
    `;
};
