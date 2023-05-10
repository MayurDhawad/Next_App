import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Company Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
