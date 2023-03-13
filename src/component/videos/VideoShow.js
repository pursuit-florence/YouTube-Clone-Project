import React from "react";
import YouTube from "react-youtube";

/* https://www.youtube.com/watch?v=_nBlN9yp9R8 */

export default function VideoShow( {videoId} ) {
    function videoOnReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
      return ( 
        <YouTube 
            videoId="_nBlN9yp9R8" 
            opts={opts} 
            onReady={videoOnReady} 
        />
      )
    
  
    
  }