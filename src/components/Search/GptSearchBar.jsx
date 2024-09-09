import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  return (
    <div>
      <form action="" className="flex justify-center align-middle ">
        <input
          type="text"
          name=""
          id=""
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-3 m-4 w-1/2"
        />
        <button className="font-semibold text-white bg-red-600 border-red-600 px-4 rounded-md w-[150px] h-[50px] mt-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
