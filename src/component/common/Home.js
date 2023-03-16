import { useState } from "react";
import VideoIndex from "../videos/VideoIndex.js";
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
      return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${searchString}&part=snippet&maxResults=3&type=video`)
      .then((results) => results.json())
      .then(response => {
      setAllVideos(response.items)
      setModal(false)
    }).catch((error) => {setModal(true)})
}  
   return (
      <div>
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            value={searchString}
            id="searchString"
            onChange={handleTextChange}
          
          />
          <input type="submit" />
        </form>
        {modal ? (<div className="modal">
            <div className="modalContent">
                <p>Please submit a search above</p>
                <button onClick={()=> setModal(!modal)}>close</button>
            </div>
        </div>) : null }
        <div className="video-listing"> 
          {searchString.length ? <VideoIndex allVideos={allVideos}/> : 
          <p>No search result yet. Please submit a search above.</p>}  
      </div>
    </div>   
    )
  }