import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import "./VideoShow.css"

export default function VideoShow() {
  const  { id } = useParams();
  console.log(id)
    function videoOnReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
    const opts = {
        height: '340',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
      return ( 
        <span className="video-show">
          <YouTube 
              videoId={id} 
              opts={opts} 
              onReady={videoOnReady} 
          />
        </span>
      )
    
  
    
  }