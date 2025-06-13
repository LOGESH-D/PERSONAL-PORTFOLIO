import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    const mailtoLink = `mailto:logeshofficial333@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_self");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCall = () => window.open("tel:+919488110405", "_self");
  const handleLocation = () =>
    window.open("https://maps.app.goo.gl/NcmSETWcNfmhRjtH9", "_blank");

  const handleLinkedIn = () =>
    window.open("https://linkedin.com/in/your-profile", "_blank");
  const handleGithub = () =>
    window.open("https://github.com/your-username", "_blank");
  const handleTwitter = () =>
    window.open("https://twitter.com/your-handle", "_blank");
  const handleInstagram = () =>
    window.open("https://instagram.com/your-handle", "_blank");

  return (
    <div className="w-full bg-gray-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                Get in Touch
              </h3>

              {/* Location */}
              <div
                className="flex items-start cursor-pointer hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-200 group"
                onClick={handleLocation}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-orange-500/30 transition-all">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">
                    Location
                  </p>
                  <p className="text-white text-sm sm:text-base break-words">
                    Ranipet, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start cursor-pointer hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-200 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-orange-500/30 transition-all">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-white text-sm sm:text-base break-words">
                    logeshofficial333@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-start cursor-pointer hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-200 group"
                onClick={handleCall}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-orange-500/30 transition-all">
                  <Phone className="text-orange-500" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">Call</p>
                  <p className="text-white text-sm sm:text-base">
                    +91 9488110405
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 sm:pt-6 border-t border-gray-700">
                <h4 className="text-sm sm:text-base font-medium text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-6 mt-2">
                  <a
                    href="https://github.com/LOGESH-D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-3xl hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/logesh-d-6a155a265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-3xl hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                Send Message
              </h3>

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-orange-500 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-orange-500 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-orange-500 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder-gray-400 resize-vertical"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-orange-500 text-white font-medium rounded-lg text-sm sm:text-base hover:bg-orange-600 active:bg-orange-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
