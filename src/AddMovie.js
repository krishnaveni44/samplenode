import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik"; 
import * as yup from "yup";

export const movieValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name? 😀"),
  poster: yup
      .string()
      .required("Why not fill this poster? 😀")
      .min(4, "Need a longer poster 😀"),
  rating: yup.number().min(0).max(10).required("Why not fill this rating? 😀"),
  summary: yup
  .string()
  .required("Why not fill this summary 😀")
  .min(20, "Need a longer summary 😀"),
  trailer: yup
  .string()
  .required("Why not fill this trailer? 😀")
  .min(4, "Need a longer trailer 😀"),
});

// export function AddMovie({ movieList, setMovieList }) {
export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "", 
    },
     validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      // console.log("onSubmit", newMovie);
      addMovie(newMovie);
    },
  }); 
// https://cdn.123telugu.com/content/wp-content/uploads/2022/02/FIR-2.jpg
<iframe width="1280" height="720" src="https://www.youtube.com/embed/eVKIjoK7FnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  const addMovie = (newMovie) => { 
    // const newMovie = {  
    //    name: name,
    //    poster: poster,
    //    rating: rating,
    //    summary: summary,
    //    trailer: trailer, 
    //    };
           // 1. method must be POST  
           // 2. body - JSON data
           // 3. headers - JSON data
           // After POST is complete ->  movie to /movies
       console.log("onSubmit", newMovie);
       fetch(`${API}/movies/`, {
       method: "POST",
       body: JSON.stringify(newMovie),
       headers: {
         "Content-Type": "application/json", 
          },   
          }).then(() => history.push("/movies"));
          // setMovieList([...movieList, newMovie]); 
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
         // onChange={(event) => setName(event.target.value)}    
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
        }
         />
      
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
     {/* <Button onClick = {() => addMovie()} variant = "contained"> */}
     <Button type="submit" variant = "contained">
        Add Movie
      </Button>
  </form>
);
}



{/* <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };

// 1. method must be POST
// 2. body - JSON data
// 3. headers - JSON data
// After POST is complete -> movie to /movies
fetch(`${API}/movies/`,
     {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));

 // setMovieList([...movieList, newMovie]);
}
}
variant="contained"
></Button> */}
