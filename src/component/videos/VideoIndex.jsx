import {Link} from 'react-router-dom';


export default function VideoIndex({ allVideos }) {
    
    const videoThumbnails = allVideos.map(video => {
        return (
            <div> 
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