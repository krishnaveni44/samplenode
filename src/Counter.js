import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

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

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  useEffect(() => {
    console.log("Like is update", like);
  }, [like, disLike]);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);
  return (
    <div className="counter-container">
      <IconButton
        className="like-dislike"
        //onClick = {() =>setLike(like + 1)} 
        onClick={incrementLike}
        aria-label="like button"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        className="like-dislike"
        //  onClick = {() =>setDisLike(disLike + 1)} 
        onClick={incrementDisLike}
        aria-label="dislike button"
        color="error"
      >
        👎 {disLike}
      </IconButton>
      {/* <button className="like-dislike" onClick = {() =>setLike(like + 1)} >👍 {like} </button>
            <button className="like-dislike" onClick = {() => setDisLike(disLike + 1)}> 👎 {disLike} </button> */}
    </div>
  );
}
