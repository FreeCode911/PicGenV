"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("all");

  const links = [
    { href: "#features", text: "Features" },
    { href: "#commands", text: "Commands" },
    { href: "https://discord.gg/5qbfgzjx7V", text: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white font-poppins relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

      <NewComponent
        logoIcon="fa-robot"
        logoText="PicGenV"
        links={links}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <div className="md:hidden p-4 bg-[#1a1a2e] border-t border-gray-800">
          <a href="#features" className="block py-2">
            Features
          </a>
          <a href="#commands" className="block py-2">
            Commands
          </a>
          <a href="https://discord.gg/5qbfgzjx7V" className="block py-2">
            Support
          </a>
        </div>
      )}

      <main className="container mx-auto px-6 py-12 relative">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Generate Unlimited Images with AI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your ultimate Discord companion for AI image generation and utility
            commands
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1229726500883005511&permissions=564017790057553&response_type=code&redirect_uri=https%3A%2F%2Flykcloud.me%2Fpicgenv%2Fthank-you&integration_type=0&scope=applications.commands.permissions.update+bot"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center"
          >
            <i className="fab fa-discord mr-2"></i>
            Add to Discord
          </a>
        </div>

        <section id="features" className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#1f2937]/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-image text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Custom Image Generation</h3>
            <p className="text-gray-300">
              Generate images with custom size and style using advanced AI
              models. Support for multiple art styles and resolutions.
            </p>
          </div>
          <div className="bg-[#1f2937]/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-wand-magic-sparkles text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Advanced Image Editing</h3>
            <p className="text-gray-300">
              Edit, enhance, and transform your images with AI-powered tools and
              filters
            </p>
          </div>
          <div className="bg-[#1f2937]/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-microphone text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Text-to-Speech</h3>
            <p className="text-gray-300">
              Convert text to natural-sounding speech with multiple voice
              options
            </p>
          </div>
          <div className="bg-[#1f2937]/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-download text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Media Download</h3>
            <p className="text-gray-300">
              Download content from Spotify and YouTube with high quality
              options
            </p>
          </div>
          <div className="bg-[#1f2937]/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-language text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Translation</h3>
            <p className="text-gray-300">
              Translate text between multiple languages instantly
            </p>
          </div>
          <div className="bg-[#1f2937]/30 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-shield text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Moderation Tools</h3>
            <p className="text-gray-300">
              Keep your server safe with advanced moderation features
            </p>
          </div>
        </section>

        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "all" ? "bg-purple-600" : "bg-[#1f2937]/30"
            }`}
          >
            All Commands
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "image" ? "bg-purple-600" : "bg-[#1f2937]/30"
            }`}
          >
            Image Commands
          </button>
          <button
            onClick={() => setActiveTab("utility")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "utility" ? "bg-purple-600" : "bg-[#1f2937]/30"
            }`}
          >
            Utility Commands
          </button>
        </div>

        <section
          id="commands"
          className="bg-[#1f2937]/30 backdrop-blur-md rounded-lg p-8 border border-gray-700/30 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Available Commands</h2>
          <div
            className={`grid md:grid-cols-2 gap-6 ${
              activeTab !== "all" && "hidden"
            }`}
          >
            <div>
              <h3 className="text-xl font-bold mb-4">General Commands</h3>
              <ul className="space-y-2">
                <li>
                  <code className="bg-[#2d3748]/50 backdrop-blur-sm px-2 py-1 rounded">
                    /help
                  </code>{" "}
                  - Display help message
                </li>
                <li>
                  <code className="bg-[#2d3748]/50 backdrop-blur-sm px-2 py-1 rounded">
                    /status
                  </code>{" "}
                  - Show bot status
                </li>
                <li>
                  <code className="bg-[#2d3748]/50 backdrop-blur-sm px-2 py-1 rounded">
                    /ping
                  </code>{" "}
                  - Check bot latency
                </li>
                <li>
                  <code className="bg-[#2d3748]/50 backdrop-blur-sm px-2 py-1 rounded">
                    /info
                  </code>{" "}
                  - Bot information
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Image Generation</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainComponent;