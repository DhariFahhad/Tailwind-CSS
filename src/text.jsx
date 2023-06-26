import React from "react";

const Text = () => {
  return (
    <div
      className="text-shadow  cursor-all-scroll font-bold text-white hover:underline  sm:text-5xl md:text-6xl lg:text-7xl"
      style={{ cursor: "none", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
    >
      Buy or Rent Properties
      <br />
      with No Commission
    </div>
  );
};

export default Text;
