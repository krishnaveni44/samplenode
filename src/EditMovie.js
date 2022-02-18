import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory} from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik"; 
import { movieValidationSchema } from "./AddMovie";


export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams();  // extracting parameter from the URL
  // const movie = movieList[id];
  // console.log(movie);
  // const [movie, setMovie] = useState({});
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`,
     {
      method: "GET",
    }) //returns always a promise

      // .then((data) => console.log(data)); // Response object
      .then((data) => data.json())
      // .then((mv) => console.log(mv))
      .then((mv) => setMovie(mv))
      .catch((err) => console.log(err));
  }, []);

console.log(movie);

  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);
  // const history = useHistory();

return(
  <div>
   { movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}
  </div>
);
}

  function EditMovieForm({ movie }){
    // const [name, setName] = useState(movie.name);
    // const [poster, setPoster] = useState(movie.poster);
    // const [rating, setRating] = useState(movie.rating);
    // const [summary, setSummary] = useState(movie.summary);
    // const [trailer, setTrailer] = useState(movie.trailer);
    
    const history = useHistory();
    
    const formik = useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer, 
      },
       validationSchema: movieValidationSchema,
      onSubmit: (updatedMovie) => {
        // console.log("onSubmit", newMovie);
        editMovie(updatedMovie);
      },
    }); 
    
    const editMovie = (updatedMovie) => {
      console.log("Updated", updatedMovie);
          // 1. method must be PUT & pass id
          // 2. body - JSON data
          // 3. headers - JSON data
          // 4. After PUT is complete -> movie to /movies

          fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "Content-Type": "application/json", 
               },   
               }).then(() => history.push("/movies"));
    };

    return (
    <form onSubmit = {formik.handleSubmit} className="add-movie-form">
      <TextField
         label="Name"
         name="name"
         id="name"        
         type="text"
         variant="outlined"
         onChange={formik.handleChange}
         value={formik.values.name}
         onBlur = {formik.handleBlur}
         error = {formik.touched.name && formik.errors.name}
         helperText = {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
          
        />
      {/* <input
             type = "text"
             onChange = {(event) => setName(event.target.value)}
             placeholder = "Name"
              /> */}
      <TextField
        type = "text"
        label="Poster"
        id = "poster"
        name="poster"
        variant="outlined"
        // placeholder = "Poster"
        onChange={formik.handleChange}
        value={formik.values.poster}
        onBlur = {formik.handleBlur}
        error = {formik.touched.poster && formik.errors.poster}
        helperText = {
          formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""
        } />
      <TextField
        text = "text"
        label="Rating"
        id="rating"
        name="rating"
        //placeholder = "Rating" 
        onChange={formik.handleChange}
        value={formik.values.rating}
        onBlur = {formik.handleBlur}
        variant="outlined" 
        error = {formik.touched.rating && formik.errors.rating}
        helperText = {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
        />
      <TextField
       type= "text"
       label="Summary"
       id="summary"
       name="summary"
       // placeholder = "Summary"
       onChange={formik.handleChange}
       value={formik.values.summary}
       onBlur = {formik.handleBlur}
       variant="outlined"
       error = {formik.touched.summary && formik.errors.summary}
       helperText = {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}
       />
      <TextField
         type="text"
         label="Trailer"
         id="trailer"
         name="trailer"
         onChange={formik.handleChange}
         value={formik.values.trailer}
         onBlur = {formik.handleBlur}
         // onChange={(event) => setTrailer(event.target.value)}
         variant="outlined" 
         error = {formik.touched.trailer && formik.errors.trailer}
         helperText = {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
         />
      {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
      {/* Copy the movieList and add new movie to it */}
      <Button color="success" type = "submit" variant = "contained">
        Save
      </Button>
    </form>
  );
}


