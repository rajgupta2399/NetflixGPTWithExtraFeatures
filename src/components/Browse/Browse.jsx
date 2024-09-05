import React from "react";
import useNowPlayingMovies from "@/Hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className=" overflow-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
