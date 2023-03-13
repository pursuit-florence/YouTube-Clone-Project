import { useState } from "react";
import { searchedVideos } from "../../api/fetch";

export default function Home({ allVideos }) {
  const [searchString, setSearchString] = useState("")
  const [videosArtist, setVideosArtist] = useState([])

  function handleTextChange(event){ 
    setSearchString(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    
      searchedVideos(searchString).then(response => {
    
        setVideosArtist(response.items)
        console.log(videosArtist)
      }).catch((error) => console.log(error))
    
  }


    return (
      <div>
        {/* <h2>{videosArtist.snippet}</h2> */}
        <form onSubmit={handleSubmit}> 
        <input
          type="text"
          value={searchString}
          id="searchString"
          onChange={handleTextChange}
        
        />
    
      <input type="submit" />
        </form>
      </div>
        
    )
  }