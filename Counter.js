import { Icon, IconButton } from '@mui/material';
import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
export default function Counter() {
  const [like,setlike]=useState(0);
  const [dislike,setdislike]=useState(0);
  const incrementlike=()=>{setlike(like+1)};
  const incrementdislike=()=>{setdislike(dislike+1)};

  return (
   <div>
    <IconButton aria-label='like' color='primary' onClick={incrementlike} >
    <Badge badgeContent={like} color="primary">
      👍   
       </Badge>
    </IconButton>
    <IconButton aria-label='dislike' color='error' onClick={incrementdislike}>
    <Badge badgeContent={dislike} color="error">
      👎
       </Badge>
       </IconButton>
   </div>
  );
}
