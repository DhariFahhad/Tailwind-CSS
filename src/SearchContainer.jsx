import React from "react";

const SearchContainer = () => {
  return (
    <div className=" mb-2 flex justify-center p-3 ">
      <div className=" inline-flex items-center rounded-lg  bg-gray-900 bg-white bg-opacity-20 pl-10 shadow-lg  backdrop-blur-lg backdrop-saturate-100 backdrop-filter ">
        <div className="mb-6  mr-3 ">
          <label
            htmlFor="category"
            className="mr-2 text-sm font-medium text-white"
          >
            Category:
          </label>
          <select
            id="category"
            className="w-full rounded  bg-white p-2 text-gray-900"
          >
            <option value="apartments">Apartments</option>
            <option value="villas">Villas</option>
            <option value="houses">Houses</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="text-sm font-medium text-white">
            Location:
          </label>
          <select
            id="location"
            className="w-full rounded   bg-white p-2 text-gray-900"
          >
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
            <option value="mecca">Mecca</option>
          </select>
        </div>
        <button className="  m-11 rounded font-bold  text-white ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
