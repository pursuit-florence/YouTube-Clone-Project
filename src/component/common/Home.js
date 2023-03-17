import { useState } from "react";
import VideoIndex from "../videos/VideoIndex.js";
import "./Home.css"
const key = process.env.REACT_APP_API_KEY;

export default function Home() {
  const [searchString, setSearchString] = useState("")
  const [allVideos, setAllVideos] = useState([])
  const [modal, setModal] = useState(true)

  // if(modal) {
  //   document.body.classList.add('limited')
  // } else {
  //   document.body.classList.remove('limited')
  // }

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
    })
      .catch((error) => {
        console.log(error)
        setModal(false)})
}  
   return (
    <div>
      <div className="search-button">
        <form onSubmit={handleSubmit}> 
          <input className="search-box"
            type="text"
            value={searchString}
            id="searchString"
            onChange={handleTextChange}
          /> 
          <input className="submit" type="submit" />
        </form>
        </div>
        {modal ? (<div className="modal">
            <div className="modalContent">
                <p>Please submit a search.</p>
                <button onClick={()=> setModal(!modal)}>Close</button>
            </div>
        </div>) : null }
        <div > 
          {searchString.length ? <span className="video-listing"><VideoIndex allVideos={allVideos}/></span>: <p> <span className="error"> No Search Results Yet!, Please submit search above!</span></p>}
        </div>
    </div>   
    )
  }