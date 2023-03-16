import { useState } from "react";
import VideoIndex from "../videos/VideoIndex.jsx";
import "./Nav.css"
const key = process.env.REACT_APP_API_KEY;

export default function Home() {
  const [searchString, setSearchString] = useState("")
  const [allVideos, setAllVideos] = useState([])

  function handleTextChange(event){ 
    setSearchString(event.target.value)
   } 

    function handleSubmit(event){
      event.preventDefault();
      console.log(searchString)
      console.log(key)
      return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${searchString}&part=snippet&maxResults=3&type=video`)
      .then((results) => results.json())
      .then(response => {
      setAllVideos(response.items)
      
    })
}  
   return (
      <div className="search-button">
        <form onSubmit={handleSubmit}> 
          <input className="details"
            type="text"
            value={searchString}
            id="searchString"
            onChange={handleTextChange}
          
          />
          <input className="submit"type="submit" />
        </form>
        <div className="video-listing"> 
          {searchString.length ? <VideoIndex allVideos={allVideos}/> :<p> <span className="error">No Search Results Yet!, Please submit search above!</span></p>}
          <footer>This App was created by Elizabeth,Fernando and Florence </footer>  
      </div>
    </div>   
    )
  }