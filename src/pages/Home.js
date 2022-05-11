import React, { useEffect, useState } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  //loading이 true면 loading spinner를 보여주고
  //loading이 false면 데이터를 보여준다.

  //true: 데이터 도착 전
  //false: 데이터 도착 후, 에러가 났을 때
  if (loading) {
    return <ClipLoader color="red" loading={loading} size={150} />;
  }
  //useEffect보다 먼저 실행 -> 조건부 렌더링
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h2 style={{ marginTop: "30px" }}>Popular Movies</h2>
      <MovieSlide movies={popularMovies} />
      <h2>Top Rated Movies</h2>
      <MovieSlide movies={topRatedMovies} />
      <h2>Upcoming Movies</h2>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};

export default Home;
