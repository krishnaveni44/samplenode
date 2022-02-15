import { useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import { ColorBox } from "./ColorBox";
//import { double, Msg } from "./Msg"; 
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import { Link } from "react-router-dom";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import { Msg } from "./components/Msg";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { NotificationsOffRounded } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SendIcon from '@mui/icons-material/Send';
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// import { Msg } from "./Msg";
// //import { Welcome } from "./Welcome.1";
// import { Welcome } from "./Welcome"; 

//import React from "react";


export default function App() { 

const INITIAL_MOVIE_LIST = [
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
  ];
const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

const [name, setName] = useState("");
const [poster, setPoster] = useState("");
const [rating, setRating] = useState("");
const [summary, setSummary] = useState("");

const history = useHistory();
const [mode,setMode] = useState("light");
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

return(
//   <ul>
//   <li>
//       {/* change the url bar but don't refresh */}
//       <Link to = "/movies">Movies</Link>
//   </li>
//   <li>
//   <Link to="/color-game">Color game</Link>
//   </li>
//   <li>
//   <Link to="/tic-tac-toe">Tic Tac Toe</Link>
//   </li>
//   <li>
//   <Link to="/movies/add">Add Movies</Link>
//   </li>
//   <li>
//       <Link to ="/">Home</Link>
//   </li>
// </ul> this will come after app div


<ThemeProvider theme={theme}>
  <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4} >
  <div className = "App"> 
   
    <AppBar position="static">
        <Toolbar>
         <Button color="inherit" onClick = {() => history.push("/")}>Home</Button>
         <Button color="inherit" onClick = {() => history.push("/movies")}>Movies</Button>
         <Button color="inherit" onClick = {() => history.push("/color-game")}>Color Game</Button>
         <Button color="inherit" onClick = {() => history.push("/tic-tac-toe")}>Tic Tac Toe</Button>
         <Button color="inherit" onClick = {() => history.push("/movies/add")}>
           Add Movies</Button>
           <Button 
           color="inherit"
           style = {{ marginLeft: "auto" }}
            startIcon = {
              mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
            }
            onClick = {() =>setMode(mode == "light" ? "dark": "light")}
            >
           {mode == "light" ? "dark": "light"} mode
           </Button>
        </Toolbar>
      </AppBar>

        {/* A <Switch> looks through all its child elements and renders the first one 
            which matches the current URL. Use a <Switch> you have multiple routers, but you want ...of them to render at a time. */}
<div className = "route-container">
<Switch>
      <Route exact path="/">
        <Msg />
      </Route>
    <Route path="/films">
        <Redirect to = "/movies" />
    </Route>
    {  /*Task -  Edit movie   -   /movies/edit/:id */ }
    <Route path="/movies/add">
        <AddMovie movieList = {movieList} setMovieList={setMovieList} />
     </Route>
     {/* :  -> makes id a variable */}
     <Route path = "/movies/edit/:id"> 
          <EditMovie movieList = {movieList} setMovieList={setMovieList} />
     </Route>
     {/* : -> makes id a variable */}
     <Route path = "/movies/:id">
        <MovieDetails movieList={movieList} />
    </Route>
    <Route path="/movies">
      <MovieList movieList = {movieList} setMovieList={setMovieList} />
     </Route>
    <Route path="/color-game">
      <AddColor />
    </Route>
    <Route path="/tic-tac-toe">
      <TicTacToe />
    </Route>
     <Route path="**"> 
        <NotFound /> 
    </Route>

  </Switch>
  </div>
  {/* <div className = "add-movie-form">
  
  </div> */}

{/* <ColorBox />
<AddColor /> */}
</div>
</Paper>
</ThemeProvider>
);
}

function AddMovie({ movieList, setMovieList }){
const [name, setName] = useState("");
const [poster, setPoster] = useState("");
const [rating, setRating] = useState("");
const [summary, setSummary] = useState("");
const [trailer, setTrailer] = useState("");
const history = useHistory();

  return (
  <div className = "add-movie-form">
    <TextField
      onChange = {(event) => setName(event.target.value)} 
      id="outlined-basic" 
      label="Name"
      variant="outlined"
      />
       {/* <input
        type = "text" 
        onChange = {(event) => setName(event.target.value)}
        placeholder = "Name"
         /> */}
      <TextField
        label = "Poster" 
        // placeholder = "Poster"
        onChange = {(event) => setPoster(event.target.value)}
        variant="outlined"
        />
       <TextField 
       label = "Rating" 
        //placeholder = "Rating" 
        onChange = {(event) => setRating(event.target.value)}
        variant="outlined"
        />
       <TextField 
       label = "Summary"
        // placeholder = "Summary"
         onChange = {(event) => setSummary(event.target.value)}
         variant="outlined"
         />
         <TextField 
        type="text"
        label = "Trailer"
          onChange = {(event) => setTrailer(event.target.value)}
         variant="outlined"
         />
     {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
  {/* Copy the movieList and add new movie to it */}
  <Button
    onClick = {() => {
      const newMovie = {
        name: name,
        poster: poster,
        rating: rating,
        summary: summary,
        trailer: trailer
      };

      setMovieList([...movieList, newMovie]);
      history.push("/movies");
    } }
   variant="contained"
   >
    Add Movie</Button>
   </div>
   );
}


function EditMovie({ movieList, setMovieList }){
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movie);
  
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  
    return (
    <div className = "add-movie-form">
      <TextField
        value = {name}
        onChange = {(event) => setName(event.target.value)} 
        id="outlined-basic" 
        label="Name"
        variant="outlined"
        />
         {/* <input
          type = "text" 
          onChange = {(event) => setName(event.target.value)}
          placeholder = "Name"
           /> */}
        <TextField
          value = {poster}
          label = "Poster" 
          // placeholder = "Poster"
          onChange = {(event) => setPoster(event.target.value)}
          variant="outlined"
          />
         <TextField 
         value = {rating}
         label = "Rating" 
          //placeholder = "Rating" 
          onChange = {(event) => setRating(event.target.value)}
          variant="outlined"
          />
         <TextField 
         value = {summary}
         label = "Summary"
          // placeholder = "Summary"
           onChange = {(event) => setSummary(event.target.value)}
           variant="outlined"
           />
           <TextField 
           value = {trailer}
          type="text"
          label = "Trailer"
            onChange = {(event) => setTrailer(event.target.value)}
           variant="outlined"
           />
       {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
    {/* Copy the movieList and add new movie to it */}
    <Button
      onClick = {() => {
        const updatedMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer
        };
        const copyMovieList = [...movieList];
        copyMovieList[id] = updatedMovie;
        setMovieList(copyMovieList);
        history.push("/movies");
      } }
     variant="contained"
     color = "success"
     >
      Save
      </Button>
     </div>
     );
  }
  



function MovieDetails({ movieList }){
  const { id } = useParams(); // extracting parameter from the URL
  console.log(id, movieList); 

    const movie = movieList[id];
    const history = useHistory();
  return(
    <div>
      {/* right click the youtube vedio and give copy embed code  */}
      <iframe 
      width="100%" 
      height="650"
      src={movie.trailer}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      ></iframe>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating} </p>
      </div>
    <p className="movie-summary">{movie.summary}</p>
    <Button 
      variant="contained"
      onClick = {() => history.goBack()}
      // onClick = {() => history.push("/movies")}
      // onClick = {() => history.goForward()}
      startIcon={<ArrowBackIosIcon />}
      >
       Back
    </Button>
    </div>
   </div>
  ); 
  }

function MovieList({ movieList, setMovieList }){
  const history = useHistory();
  return(
<div className="movie-list">
  {movieList.map(({ name, poster, rating, summary }, index) => 
  (
    <Movie 
    key={index}
    name = {name} 
    poster={poster} 
    rating = {rating} 
    summary={summary}
    
    deleteButton = {
    <IconButton
      onClick={() => {
        console.log(index);
        const copyMovieList = [...movieList];
        copyMovieList.splice(index, 1)
        setMovieList(copyMovieList)
      }}  
      aria-label = "delete"
      color="error"
      >
       <DeleteIcon />
       </IconButton>
      }

      editButton = {
        <IconButton
          onClick={() =>history.push(`/movies/edit/${index}`)}  
          aria-label = "delete"
          color="secondary"
          >
           <EditIcon />
           </IconButton>
          }
          id={index}
    />
  ))}
</div>
);
}


function NotFound(){
return(
  <div> 
    <h1 className="not-found">404</h1>
    <img
    width="100%"
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      alt="404 Not found"
    />
  </div>
);
}
function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
const [colorList, setColorList] = useState(
  ["crimson", "Orange", "teal", "yellow"]);
    
  // Todo - Capture - Typing event
  return(
    <div>
      <input 
      value = {color}
      style={styles}
      onChange = {(event) => setColor(event.target.value)}
      placeholder = "Enter a color" 
      />
   <button onClick = {()=> setColorList([...colorList, color])}>
     Add Color</button>

{colorList.map((clr) => (
  <ColorBox color = {clr} />
))}

   {/* <ColorBox color = "red" />
   <ColorBox color = "Orange" />
   <ColorBox color = "teal" /> */}
    </div>
  );
}

function ColorBox({ color }){
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style = {styles}></div>
}



// > 8.5 green
// <= 8.5 red

// Task
// 1.New Movie - AddMovie
// 2. Warning: Each child in a list should have a unique "key" prop - why?


// Task
function Movie({ name, poster, rating, summary, deleteButton, id, editButton }){
  // Normal JS
  // Conditional styling
const styles = {
  // backgroundColor: "green",
  color: rating > 8.5 ? "green" : "red",
};
// Inside return only jsx
// none -> block (conditional styling)
const [show, setShow] = useState(true);
 const history = useHistory();
// const summaryStyles = {
//  display: show ? "block" : "none",
// };
  return(
    <Card className = "movie-container">
        <img src={poster} alt={name} className="movie-poster"  />
       <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">{name}
           
        <IconButton
         color="primary"
         onClick = {() => setShow(!show)}
         aria-label="Toggle summary">
           {/* conditional rendering */}
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>

        <IconButton
        color="primary"
        onClick = {() => history.push(`/movies/${id}`)}
        aria-label="Toggle summary"
        >
          <InfoIcon />
          </IconButton>
       </h2>
       <p style={styles} className="movie-rating">⭐{rating}</p>
       </div>
        {/* <button onClick = {() => setShow(!show)}>Toggle Description</button> */}
        {/* <p style = {summaryStyles} className = "movie-summary">
          {summary}</p>     */}

          {/* conditional rendering */}
        {show ? <p className = "movie-summary">{summary}</p> : ""}
        </CardContent>
        <CardActions>
        <Counter />  {deleteButton} {editButton}
        </CardActions>
      </Card>
  );
}

function TicTacToe(){
  const [board,setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null]);
    
  useState([0,1,2,3,4,5,6,7,8]);

  const decideWinner = (board) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
   
// if winning condition present in board then we have a winner
for (let i=0; i < lines.length; i++){
  const [a,b,c] = lines[i];
  // console.log(a,b,c);
  if(board[a] != null && board[a] == board[b] && board[b] == board[c]){
    console.log("Winner is", board[a]);
return board[a]; 
  }
}
return null;
};

const winner = decideWinner(board);

 const [isXturn, setIsXTurn] = useState(true);

 // copy the board and replace with 'X' in the clicked GameBox
 // Update only untouched boxes & until no winner
  const handleClick = (index) => {

    if (winner == null && board[index] == null)
    {
    const boardCopy = [...board];
    console.log(boardCopy, index);
    boardCopy[index] = isXturn ? "X" : "O";
    setBoard(boardCopy);
    setIsXTurn(!isXturn);
    // console.log(index);
  }
};

const { width,height } = useWindowSize();

return (
<div className="full-game">
  {/* {winner ? <Confetti width={width} height={height} wind={0.3} /> : ""} */}
  {winner ? <Confetti width={width} height={height} gravity={0.01} /> : ""}
  <div className="board">
    {board.map((val, index) => ( 
    <GameBox val={val} onPlayerClick = {() => handleClick(index)} />
    ))}

    {/* <GameBox /> */}
    </div>
    {winner ? <h2>Winner is: {winner}</h2> : ""}
    <button 
    onClick = {() => {
      setBoard([null, null, null, null, null, null,null, null,null]);
      setIsXTurn(true);
    } }
    >Restart</button>
</div>
);
}

// Changing val requires hook
function GameBox({ val, onPlayerClick }) {
  // const val = "X";
  //const [val, setVal] = useState(null);
  const styles = {
    color:val == "X" ? "green" : "red",
  };
  return (<div 
    // onClick = {() => setVal(val=="X" ? "O": "X")}
    onClick = {() => onPlayerClick()} 
    style= {styles} 
     className="game-box">
    {val}
    </div>
  ); 
}
// Important
//Multi page -Advantage
// 1. Performance
// 2. Ease of access - organized
// 3. Sharing

// SPA
// 1. No refresh
// 2. Smooth experience

// React router DOM
// Conditional Rendering


// {} -> template syntax
// 
// camel case onClick -> C must be capital
// hooks - function - 'use'
// useState -> To inform react the value is update
// const [state, setState] = useState(Intial value)
// state -> current value
// setState -> helps to update state
function Counter(){
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return(
    <div className = "counter-container">
      <IconButton 
      className="like-dislike"
       onClick = {() =>setLike(like + 1)} 
       aria-label="like button" 
       color = "primary"
       >
       <Badge badgeContent={like} color="primary"> 
       👍
       </Badge>
       </IconButton>
    <IconButton 
      className="like-dislike"
       onClick = {() =>setDisLike(disLike + 1)} 
       aria-label="dislike button" 
       color = "error"
       >
         👎 {disLike}
      </IconButton>
      {/* <button className="like-dislike" onClick = {() =>setLike(like + 1)} >👍 {like} </button>
      <button className="like-dislike" onClick = {() => setDisLike(disLike + 1)}> 👎 {disLike} </button> */}
    </div>
  );
}









// Movie Task my try

// export default function App() {

//       const names = ["Mankatha", "Vishuvasam", "Thupakki", "Hangover","Avengers"];
//       const users = [
//         {
//           name: "Mankatha",
//           profile:"https://moviegalleri.net/wp-content/uploads/2011/05/vilayadu_mankatha_posters.jpg",
       
//              summary: "Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
//              Ratings: "⭐⭐⭐⭐⭐"
//             },
//         {
//           name: "Vishuvasam",
//           profile:"https://moviegalleri.net/wp-content/uploads/2018/08/Ajith-Viswasam-Movie-First-Look-Poster-HD.jpg",
         
//            summary:"Thookku Durai, a chieftain, gets separated from his wife, Niranjana, after their daughter, Swetha, gets injured during a fight. Years later, he tries to protect Swetha without revealing his identity.",
//           Ratings: "⭐⭐⭐⭐⭐"
//          },
//         {
//           name: "Vikram Vedha",
//           profile:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Vikram_Vedha_poster.jpg/220px-Vikram_Vedha_poster.jpg"
//             ,
//           summary:"Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders, he offers to tell Vikram a story, throwing Vikram's life into disarray.",
//           Ratings: "⭐⭐⭐"
//         },
//         {
//           name: "Veeram",
//           profile: "https://cdn.cinematerial.com/p/297x/oc38igjo/veeram-indian-movie-poster-md.jpg?v=1456468953"
//         ,
//         summary:"Vinayagam, an honest man, uses violence to settle disputes; he decides to mend his ways for his lover's sake; hell breaks loose when he learns about a gang of rowdies following his lover's family.",
//          Ratings: "⭐⭐⭐⭐"  
//         },
//         {
//           name: "Avengers",
//           profile: "https://m.media-amazon.com/images/I/81OmkfFqvsL._AC_SL1440_.jpg"
//         ,
//         summary: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
//         Ratings: "⭐⭐⭐⭐⭐"
//         }
//         ];
         
//   return (
//     <div className="App">
//       <Counter />
//       <Counter2 />
//       {users.map((usr) => (
//             <Welcome name={usr.name} profile={usr.profile} summary={usr.summary} Ratings={usr.Ratings} />
//           ))}
//     </div>
//   );
// }

  
// // Task - 1  Likes and Dislikes
// function Counter(){
//   const [like,setLike] = useState(0);
//   return(
//     <h1 className = "Good"> Likes
//     {/* <h4>Likes</h4>   */}
//       <button className = "Good2" onClick = {() => setLike(like + 1)}> 👍 {like}</button>
//     </h1>
//   )
// }

// function Counter2(){
//   const [disLike,setDislike] = useState(0);
//   return(
//     <h1 className = "Good"> Dislikes
//       <button className = "Good2" onClick = {() => setDislike(disLike + 1)}> 👎 {disLike}</button>
//     </h1>
//   )
// }

// function Welcome({ name, profile, summary, Ratings }) {
//     return (
//       <div className="come">
//         <h1>------------------------------------------------------------------</h1>
//         <img className="user-profile-pic" src={profile} alt="profile pic" />
//         <h1> {name}🎄😀</h1>
//         <h4>{summary}</h4>
//          <h4>{Ratings} </h4>  

//          <div class="star-rating">
//   <input type="radio" id="5-stars" name="rating" value="5" />
//   <label for="5-stars" class="star">&#9733;</label>
//   <input type="radio" id="4-stars" name="rating" value="4" />
//   <label for="4-stars" class="star">&#9733;</label>
//   <input type="radio" id="3-stars" name="rating" value="3" />
//   <label for="3-stars" class="star">&#9733;</label>
//   <input type="radio" id="2-stars" name="rating" value="2" />
//   <label for="2-stars" class="star">&#9733;</label>
//   <input type="radio" id="1-star" name="rating" value="1" />
//   <label for="1-star" class="star">&#9733;</label>
// </div>
//       </div>
//     );
//   }







// Task - 1
// // App -> component
// // Declaration
// export default function App() {
//   return (
//     <div className="App">
//       <Welcome name="Krishna" />
//       <Welcome name="Veni" />
//       <Welcome name="Sakthi" />
//     </div>
//   );
// }
// // Welcome

// function Welcome({ name }) {
//   // const name = "Krishna";
//   return (
//     <div className="Welcome">
//       <h1>Hello, {name} 🎄🍏🍟🍋</h1>
//     </div>
//   );
// }

// function Welcome(props) {
//   // const name = "Krishna";
//   console.log(props);
//   return (
//     <div className="come">
//       <h1>Hello, {props.name} 🎄🍏🍟🍋</h1>
//     </div>
//   );
// }

// function Welcome() {
//   const name = "Krishna";
//   return (
//     <div className="Welcome">
//       <h1>Hello, {name} 🎄🍏🍟🍋</h1>
//     </div>
//   );
// }

// Task - 2
// import Emoji from "react-emoji-render";
// export default function App() {
//   // const names = ["Krishna", "Veni", "Kaaviya"];
//   return (
//     <div className="App">
//       <Welcome
//         profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVObLYg8yliuXT3LoPS2YbgAqtBEwvzYXCg&usqp=CAU"
//         name="Krishna"
//       />
//       <Welcome
//         profile="data:)image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEX/mTMSiAf/////lyr//fkAgwAAAIgAAH4AAIUAAIIAAIMAAHMAAHbk5PDg4O7w8Pfp6fP5+f2lpctHR52Njb5BQZu+vtqrq8/ExN20tNSHh7tLS5/19fp/f7djY6mZmcXOzuXW1ugmJpE5OZgNDYtsbK1YWKRRUaF5ebQZGY7R0eWYmMUyMpcgIJBhYa3Bwd8/P5smJpNycrEwMJjLpwQ3AAAEs0lEQVR4nO2ba3eiSBCGnd7dvsgdEQFBxUtMos4kk///37Yaci9PducLnXN4H48K6IfisbqradrJBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAP+Qt8ZiLAZ+CEAyccOOHACQdOON/BSZxnq/n58TxfZXnsOhjxDZwE2Z0yU62llFpPjbrLAtchOXZyf1RTK0NqpZS2G3Kqlvdug3LqJD6SB2nMz1u1jIJoqW5XxpAidXTahFw6WdvMMOYkEpFH4l5EOW2tjbFZs3YYl0MnN4bOvVmcI7Gxu6V92YjovKjIlTm6C8yZk/pC6TALE7u9+PiShDP67FK7Cs2Vk5q6U6NSUdidIqSXjJ5hv0utinJIRo5ic+WEssQsmlgkNjNq6+MnPTObG4tExM2CpFwcxebIyVFLlXdbqS0xS3qen9/jtDv+S0ntqE9x4+RkKEvEr27bnviKxOxJx+p5n5QIyhTjpvo4cRJQDqis70JESq0npZPXVJwpRRZdmtgPqfooJ2NaJ05mWs/Wtgdd2bIja9FuRaISsW1FLelIYvMlWtuvuQjPhZONekmAhAYnolyKxI9rv479RCwpa6JdV6FtOqmNg/hcOKHfv0q6qisiSXJ0KbYpOUm3IqcWFDwX4SKp3CSKAyehkqbs+xG7cy9KJZpd7Me7RqhStMqOVrp+pTSy3xkWB04qGprYnz84WisbLxf7Q+EH9CgOe5F7trksjrZxzWiQUg0foAMne6qxfetIJeVL7i02XmBaegTeZuHRoVL2Y5RobeR++ACHd0JNR75sRzPqS1KvuK2q4qmoqtvCS0Uu56+jeumiHA/vpDT6UG/Koj/vUu03uR88tWmTtk+Bn9/vVXeFLOqi3NQHbcrBIxzeSaO7PiI8LVdpSxsrrwkew+rh4aEKL2Hl2TFLmx6WWfv25WEZ3smNln5fiIPTo3duiqDZBjM7kWRmwbYJNtXOvzv15abwpb4ZPMLhnTzStd3r1EiUPihVtc1UWqZNmxm1S19nHuuj1tvBIxzeCXWbbxMjdRSHYZHOdedEz9MiDOPobTYpetchD8bwTujKzmpofh/3xvN84lKdZc8ue1J0wPOUnB2adR5SkdKDR4g84QzvZMv6k2z0/cn7unNB3el4GZ9kH8cn84f5eMcnGMdyAlzvcHBdzPmj+ZPpOOZPMM92hf+cj+3HJ2Oaj30/b7/r5+3F6Oftu/s7J5sMX93fiU/0taWL8JzeBzzZnav3AU+juw8oqMZSN/v1/eJyXPeL/8+6gnxs6wqw/uQaWKd0hfpx+uV6tun41rMRN+qrdY/DT5u84nJ9bHptfexp1OtjX9ZRT7GO+gNX19sfx7ze3oL/ZVyl///OFv/f+cbACQdOOHDCgRPO5G/wmck/4DOTH+AzcMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHD+BbFYJ4t2z9g0AAAAAElFTkSuQmCC "
//         name="Veni"
//       />
//       <Welcome
//         profile="data:image/jpeg;base64,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 "
//         name="Kaaviya"
//       />

//       {/* {names.map((nm) => (
//         <Msg name={nm} />
//       ))} */}
//     </div>
//   );
// }
// function Welcome({ name, profile }) {
//   const txt = "Hello," + { name } + "😊😊🥗✨🎄";
//   return (
//     <div className="come">
//       <img className="user-profile-pic" src={profile} alt="profile pic" />
//       <Emoji text={txt} />
//       <h1>Hello, {name}😊😊🥗✨🎄</h1>
//     </div>
//   );
// }

{
  /* function Welcome({ name, profile }) {
   const txt = "Hello," + { name } + "😊😊🥗✨🎄";
   return (
   <div className="come">
   <img className="user-profile-pic" src={profile} alt="profile pic" />
   <Emoji text={txt} />
   <h1>Hello, {name}😊😊🥗✨🎄</h1>
   </div>
   );
 } */
}

// // Task - 3
// import Emoji from "react-emoji-render";
// export default function App() {
//   const names = ["Krishna", "Veni", "Sakthi", "Kaaviya"];
//   return (
//     <div className="App">
//       {names.map((nm) => (
//         <Msg name={nm} />
//       ))}
//     </div>
//   );
// }

// function Msg({ name }) {
//   return (
//     <div className="come">
//       <h1>Hello, {name}😀🥗🎄</h1>
//     </div>
//   );
// }

// Task - 4

// export default function App() {
//   const names = ["Krishna", "Veni", "Sakthi", "Kaaviya"];
//   const users = [
//     {
//       name: "Krishna",
//       profile:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVObLYg8yliuXT3LoPS2YbgAqtBEwvzYXCg&usqp=CAU"
//     },
//     {
//       name: "Veni",
//       profile:
//         "data:)image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAnFBMVEX/mTMSiAf/////lyr//fkAgwAAAIgAAH4AAIUAAIIAAIMAAHMAAHbk5PDg4O7w8Pfp6fP5+f2lpctHR52Njb5BQZu+vtqrq8/ExN20tNSHh7tLS5/19fp/f7djY6mZmcXOzuXW1ugmJpE5OZgNDYtsbK1YWKRRUaF5ebQZGY7R0eWYmMUyMpcgIJBhYa3Bwd8/P5smJpNycrEwMJjLpwQ3AAAEs0lEQVR4nO2ba3eiSBCGnd7dvsgdEQFBxUtMos4kk///37Yaci9PducLnXN4H48K6IfisbqradrJBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAP+Qt8ZiLAZ+CEAyccOOHACQdOON/BSZxnq/n58TxfZXnsOhjxDZwE2Z0yU62llFpPjbrLAtchOXZyf1RTK0NqpZS2G3Kqlvdug3LqJD6SB2nMz1u1jIJoqW5XxpAidXTahFw6WdvMMOYkEpFH4l5EOW2tjbFZs3YYl0MnN4bOvVmcI7Gxu6V92YjovKjIlTm6C8yZk/pC6TALE7u9+PiShDP67FK7Cs2Vk5q6U6NSUdidIqSXjJ5hv0utinJIRo5ic+WEssQsmlgkNjNq6+MnPTObG4tExM2CpFwcxebIyVFLlXdbqS0xS3qen9/jtDv+S0ntqE9x4+RkKEvEr27bnviKxOxJx+p5n5QIyhTjpvo4cRJQDqis70JESq0npZPXVJwpRRZdmtgPqfooJ2NaJ05mWs/Wtgdd2bIja9FuRaISsW1FLelIYvMlWtuvuQjPhZONekmAhAYnolyKxI9rv479RCwpa6JdV6FtOqmNg/hcOKHfv0q6qisiSXJ0KbYpOUm3IqcWFDwX4SKp3CSKAyehkqbs+xG7cy9KJZpd7Me7RqhStMqOVrp+pTSy3xkWB04qGprYnz84WisbLxf7Q+EH9CgOe5F7trksjrZxzWiQUg0foAMne6qxfetIJeVL7i02XmBaegTeZuHRoVL2Y5RobeR++ACHd0JNR75sRzPqS1KvuK2q4qmoqtvCS0Uu56+jeumiHA/vpDT6UG/Koj/vUu03uR88tWmTtk+Bn9/vVXeFLOqi3NQHbcrBIxzeSaO7PiI8LVdpSxsrrwkew+rh4aEKL2Hl2TFLmx6WWfv25WEZ3smNln5fiIPTo3duiqDZBjM7kWRmwbYJNtXOvzv15abwpb4ZPMLhnTzStd3r1EiUPihVtc1UWqZNmxm1S19nHuuj1tvBIxzeCXWbbxMjdRSHYZHOdedEz9MiDOPobTYpetchD8bwTujKzmpofh/3xvN84lKdZc8ue1J0wPOUnB2adR5SkdKDR4g84QzvZMv6k2z0/cn7unNB3el4GZ9kH8cn84f5eMcnGMdyAlzvcHBdzPmj+ZPpOOZPMM92hf+cj+3HJ2Oaj30/b7/r5+3F6Oftu/s7J5sMX93fiU/0taWL8JzeBzzZnav3AU+juw8oqMZSN/v1/eJyXPeL/8+6gnxs6wqw/uQaWKd0hfpx+uV6tun41rMRN+qrdY/DT5u84nJ9bHptfexp1OtjX9ZRT7GO+gNX19sfx7ze3oL/ZVyl///OFv/f+cbACQdOOHDCgRPO5G/wmck/4DOTH+AzcMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHD+BbFYJ4t2z9g0AAAAAElFTkSuQmCC "
//     },
//     {
//       name: "Kaaviya",
//       profile:
//         "data:image/jpeg;base64,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 "
//     }
//   ];
//   return (
//     <div className="App">
//       {/* Array of strings -> Array of Component / Transformation */}
//       {/* {names.map((nm) => (<Msg name = {nm} /> ))} */}
//       {users.map((usr) => (
//         <Welcome name={usr.name} profile={usr.profile} />
//       ))}
//       <Msg />
//     </div>
//   );
// }


