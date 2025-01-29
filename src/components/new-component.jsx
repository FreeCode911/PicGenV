"use client";
import React from "react";

function NewComponent({ logoIcon, logoText, links, isMenuOpen, onMenuToggle }) {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-2">
        <i className={`fas ${logoIcon} text-3xl text-purple-500`}></i>
        <span className="text-2xl font-bold">{logoText}</span>
      </div>

      <div className="hidden md:flex space-x-6">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="hover:text-purple-400">
            {link.text}
          </a>
        ))}
      </div>

      <button onClick={onMenuToggle} className="md:hidden">
        <i
          className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
        ></i>
      </button>
    </nav>
  );
}

function NewComponentStory() {
  const links = [
    { href: "#features", text: "Features" },
    { href: "#commands", text: "Commands" },
    { href: "https://discord.gg/5qbfgzjx7V", text: "Support" },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <NewComponent
        logoIcon="fa-robot"
        logoText="PicGenV"
        links={links}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}

export default NewComponent;