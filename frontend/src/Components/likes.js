import React, { useState } from 'react';

const Likes = () => {

    const [counter, setCounter ] = useState(0)

    // const LikesButton = () => {       
    //  var total = this.state.likes; 
    //     var newtotal = total + 1; 
    //     return (
    //         { newtotal }
    //             )
    //         }

    const updateLikes = () => {
        setCounter(counter+1)
    }
  return (
      <>
      <button href="#" onClick={updateLikes}>Like</button><br/>
      <hr/>
      <div>{counter} Likes</div>
      </>
  )
  }
export default Likes;