import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const fetchDetail = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?api_key=cf71cac131e64006963c7567cf2c7e58&append_to_response=casts,videos,images,releases&language=en-US"
    );
    const res = await data.json();
    console.log(res);
  };

  useEffect(() => {
    fetchDetail();
  }, []);
  return <div>MoviesDetails</div>;
};

export default MoviesDetails;
