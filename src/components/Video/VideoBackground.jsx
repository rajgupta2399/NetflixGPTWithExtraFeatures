import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "@/store/movieSlice";
import { useState } from "react";
import useMovieTrailer from "@/Hooks/useMovieTrailer ";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen mt-[-18px]">
      <iframe
        className="w-screen aspect-video  "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
