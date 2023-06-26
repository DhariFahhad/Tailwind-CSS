import React from "react";

const Header = () => {
  const navLinks = [
    { id: 1, title: "HOME", url: "#" },
    { id: 2, title: "PAGE", url: "#" },
    { id: 3, title: "PROPERTY", url: "#" },
  ];

  return (
    <div className="relative">
      <header className="left-0 right-0 top-0 flex w-full items-center justify-between bg-blue-500 bg-gray-800 p-4 px-8 py-4 text-white">
        <div className="mr-2 text-xl text-white">
          <i className="fas fa-home"></i>
        </div>
        <div className="hidden items-center sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="rounded px-2 py-1 font-bold text-white hover:underline"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <div className="mr-2 hidden text-xl text-white sm:block">
            <i className="fas fa-user"></i>
          </div>
          <div className="hidden font-bold text-white sm:block">Join Us</div>
          <button className="ml-2 block text-xl text-white sm:hidden">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>
      <div className="bg-blue-500 p-4 text-white sm:hidden">
        <div className="flex items-center justify-between">
          <div className="text-xl text-white">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="mb-2 font-bold text-white hover:underline"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
