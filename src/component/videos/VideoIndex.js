import {Link} from 'react-router-dom';
import './VideoIndex.css';

export default function VideoIndex({ allVideos }) {
    
    const videoThumbnails = allVideos.map(video => {
        return (
            <div className="video-thumbnail"> 
                <Link to={`/videos/${video.id.videoId}`}>
                 <img src={video.snippet.thumbnails.medium.url} alt="video img" />
                 </Link>  
               <p>{video.snippet.title}</p>
            </div>
           
        )
    })
    
    return (
        <>
            {videoThumbnails}
        </>
    );

  }