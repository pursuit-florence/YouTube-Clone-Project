import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./component/common/Home"
import {getVideos} from "./api/fetch.js"
import Nav from"./component/common/Nav"
import Footer from"./component/common/Footer"
import VideosIndex from"./component/videos/VideoIndex"
import VideoShow from"./component/videos/VideoShow"
function App() {
const [allVideos, setAllVideos] = useState([])
  
useEffect(() => {
    getVideos().then(response => {
      setAllVideos(response)
    }).catch((error) => console.log(error))
  }, [])

  return (
  <>
  <Router>
    <Routes>
    <Home /> 
    <Nav/>
    <VideosIndex />
    <Route path="videos/:id" element={<VideoShow/>} />
    <Footer/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
