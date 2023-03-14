import { useState, useEffect } from "react";
import {searchedVideos} from "../../api/fetch.js"

export default function Home() {
 const [searchString, setSearchString] = useState("")
//   // const [videosArtist, setVideosArtist] = useState([])

    const [allVideos, setAllVideos] = useState([])
  console.log(allVideos)
  console.log(searchString)
useEffect(() => {
    searchedVideos().then(response => {
      setAllVideos(response)
    }).catch((error) => console.log(error))
  }, [])
   function handleTextChange(event){ 
   setSearchString(event.target.value)
   }

   function handleSubmit(event){
    event.preventDefault();
    
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