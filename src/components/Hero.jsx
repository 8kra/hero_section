import React from "react";

const Hero = () => {
  return (
    <div className="pt-20 flex flex-col md:flex-row justify-between ">
      <div className="md:w-1/3 p-5 flex flex-col justify-between ">
        <div className="space-y-10">
          <h1 className="text-4xl md:text-6xl text-purple-600 font-bold">
            from Clicks to Conversations
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            tenetur incidunt obcaecati dolorem iure ducimus suscipit maxime
            impedit quidem nisi?
          </p>
          <div className="space-x-5">
            <button className="px-5 py-2 bg-purple-600 text-white font-bold rounded-md">
              Start Now
            </button>
            <button>
              <span className="px-3 py-2 rounded-md bg-stone-900 text-white">
                ↗️
              </span>{" "}
              <span>learn more</span>
            </button>
          </div>
          <div className="h-12 bg-gray-100 rounded-md flex items-center space-x-2">
            <input
              type="text"
              placeholder="search your daily groceries"
              className="outline-0 bg-transparent px-4 w-11/12"
            />
            <button className="w-36 rounded-md bg-purple-600 text-white h-full">
              Search
            </button>
          </div>
        </div>

        <div className="space-y-2 py-5">
          <p className="text-sm text-gray-500">
            ✔️ <span>30 days money back garentee</span>
          </p>
          <p className="text-sm text-gray-500">
            ✔️ <span>Monthly subscribtion</span>
          </p>
        </div>
      </div>
      <div className="md:w-1/">
        <img src="/hero_img.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
