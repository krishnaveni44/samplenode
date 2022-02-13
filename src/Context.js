import "./styles.css";
import { useState } from "react";
import { useContext, createContext } from "react";

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)


const themeCtx = createContext(null);

// export default function App(){
// // Conditional Styling
//     const styles = { background: "black" };
//     return (
//         <div style = {styles} className = "App">
//             <List setMode={setMode} mode={mode}/>
//         </div>
//     );
// }

// const List = ({ setMode }) => (
//     <ul>
//         <ListItem value = "light 💡" setMode={setMode} mode={mode} />
//         <ListItem value = "dark 🌙" setMode = {setMode} mode={mode}/>
//     </ul>
// );

// const ListItem = ( { value, setMode, mode }) => (
//     <li>
//         <Button value = {value} setMode={setMode} mode={mode}/>
//     </li>
// );

// const Button = ( { value, setMode, mode }) => {
//     const styles = { 
//         background: mode ==="light" ? "black" : "white", 
//         color: mode ==="light" ? "black" : "white"
//     };  
//     return(
//         <button 
//         style = {styles}
//         onClick={() => setMode(value === "light 💡" ? "light" : "dark") }
//         >
//         {value}
//         </button>
//     ) ;
// };

