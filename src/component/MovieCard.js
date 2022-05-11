import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>{item.title}</div>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
        </div>
        <div>
          <span>{item.adult ? "X-RATED" : "rated T"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
