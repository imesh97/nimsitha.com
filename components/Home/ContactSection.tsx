import React from "react";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-200 tracking-wide">
          wanna talk?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#2D2D2D] border border-[#404040] rounded-lg focus:outline-none focus:border-blue-400 text-gray-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#2D2D2D] border border-[#404040] rounded-lg focus:outline-none focus:border-blue-400 text-gray-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-[#2D2D2D] border border-[#404040] rounded-lg focus:outline-none focus:border-blue-400 text-gray-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="bg-[#2D2D2D] rounded-lg p-6 border border-[#404040]">
            <h3 className="text-xl font-semibold text-gray-200 mb-6">
              Other Ways to Connect
            </h3>

            <div className="space-y-4">
              <p className="text-gray-300">
                Feel free to reach out through any of these platforms:
              </p>

              <div className="space-y-2">
                <a
                  href="mailto:imesh.nimsitha@gmail.com"
                  className="block px-4 py-2 hover:bg-[#404040] rounded transition-colors text-gray-300"
                >
                  imesh.nimsitha@gmail.com
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#404040] rounded transition-colors text-gray-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#404040] rounded transition-colors text-gray-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
