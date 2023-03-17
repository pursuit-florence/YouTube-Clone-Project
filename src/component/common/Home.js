import { useState } from "react";
import VideoIndex from "../videos/VideoIndex.js";
import "./Home.css"
const key = process.env.REACT_APP_API_KEY;

export default function Home() {
  const [searchString, setSearchString] = useState("")
  const [allVideos, setAllVideos] = useState([])
  const [modal, setModal] = useState(true)

  if(modal) {
    document.body.classList.add('limited')
  } else {
    document.body.classList.remove('limited')
  }

  function handleTextChange(event){ 
    setSearchString(event.target.value)
   } 

    function handleSubmit(event){
      event.preventDefault();

      return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${searchString}&part=snippet&maxResults=9&type=video`)
      
      .then((results) => results.json())
      .then(response => {
      setAllVideos(response.items)
      setModal(false)
    }).catch((error) => {setModal(true)})
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
          <input className="submit" type="submit" />
        </form>
        {modal ? (<div className="modal">
            <div className="modalContent">
                <p>Please submit a search above</p>
                <button onClick={()=> setModal(!modal)}>close</button>
            </div>
        </div>) : null }
        <div className="video-listing"> 
        {searchString.length ? <VideoIndex allVideos={allVideos}/> :<p> <span className="error">No Search Results Yet!, Please submit search above!</span></p>}
          <footer>This App was created by Elizabeth,Fernando and Florence </footer>   
      </div>
    </div>   
    )
  }