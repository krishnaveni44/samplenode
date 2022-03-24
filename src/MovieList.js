import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "./global";
import { Movie } from "./Movie";

// const API = "https://my-json-server.typicode.com/krishnaveni44/fun-data"
// function MovieList({ movieList, setMovieList }){
export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);
  //fetch returns always a promise
  // .then((data) => console.log(data)); // Response object
  // .then((mvs) => console.log(mvs));
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET"
      // headers: {
      //   "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzhiMDM4NjAwZDdjYjUyYmRiZTVkMSIsImlhdCI6MTY0ODAxOTUwMH0.Lx5PUM_ngmBTqpsw_vp5is64TC1X53vzTYH-JohPLy0"
      // }
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs)); // Auto refresh
  };
  // Delete movie -> Refresh data
  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
    // console.log("Deleting...", id);
  };

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary, id, _id }, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}

          deleteButton={<IconButton
            style={{ marginLeft: "auto" }}
            onClick={() => deleteMovie(_id)}
            // onClick={() => {
            //   console.log(index);
            //   const copyMovieList = [...movieList];
            //   copyMovieList.splice(index, 1)
            //   setMovieList(copyMovieList)
            // }}  
            aria-label="delete"
            color="error"
          >
            <DeleteIcon />
          </IconButton>}

          editButton={<IconButton
            onClick={() => history.push(`/movies/edit/${_id}`)}
            aria-label="delete"
            color="secondary"
          >
            <EditIcon />
          </IconButton>}
          id={_id} />
      ))}
    </div>
  );
}
