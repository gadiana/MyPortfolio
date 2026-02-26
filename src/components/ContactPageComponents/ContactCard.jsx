import { useState } from "react";
import * as FaIcons from "react-icons/fa";

const ContactCard = ({ isDarkMode }) => {
  const [showForm, setShowForm] = useState(false);

  const contactItems = [
    {
      icon: <FaIcons.FaMapMarkerAlt className="inline-block mr-2" />,
      value: "Zamboanga City, Philippines",
    },
    {
      icon: <FaIcons.FaPhone className="inline-block mr-2" />,
      value: "+63 936 420 2029",
      link: "tel:+639364202029",
    },
    {
      icon: <FaIcons.FaFacebook className="inline-block mr-2" />,
      value: "facebook.com/johnezekiel.gadiana",
      link: "https://facebook.com/johnezekiel.gadiana",
    },
    {
      icon: <FaIcons.FaInstagram className="inline-block mr-2" />,
      value: "@zekelkiel",
      link: "https://www.instagram.com/zekelkiel/",
    },
    {
      icon: <FaIcons.FaGithub className="inline-block mr-2" />,
      value: "github.com/gadiana",
      link: "https://github.com/gadiana",
    },
  ];

  return (
    <div
      className="overflow-hidden rounded-lg border backdrop-blur-md max-w-md mx-auto"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.7)",
        borderColor: isDarkMode
          ? "rgba(255,255,255,0.1)"
          : "rgba(0,0,0,0.1)",
        boxShadow: isDarkMode
          ? "0 8px 32px rgba(0,0,0,0.37)"
          : "0 8px 32px rgba(31,38,135,0.15)",
      }}
    >

      <div
        className="flex w-[200%] transition-transform duration-500"
        style={{
          transform: showForm ? "translateX(-50%)" : "translateX(0)",
        }}
      >
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="w-1/2 p-6 space-y-4">
        <div className={`text-lg font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
          Get in Touch
        </div>
        <div className={`text-sm opacity-90 ${isDarkMode ? "text-gray-300" : "text-gray-700"} pb-4`}>
            Whether you have a question, want to connect, or just want to say hi, don't hesitate to get in touch!
        </div>
          {contactItems.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span
                className={`text-lg ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {item.icon}
              </span>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-2 hover:underline ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {item.value}
                </a>
              ) : (
                <span
                  className={`ml-2 ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {item.value}
                </span>
              )}
            </div>
          ))}

          <button
            onClick={() => setShowForm(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition w-full"
          >
            Send Message
          </button>
        </div>

        {/* RIGHT SIDE - EMAIL FORM */}
        <div className="w-1/2 p-6 space-y-4">
          <h3
            className={`text-lg font-semibold ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Send Email
          </h3>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded border outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 rounded border outline-none"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-2 rounded border outline-none"
          />

          <button
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Send
          </button>

          <button
            onClick={() => setShowForm(false)}
            className="w-full text-sm mt-2 underline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;