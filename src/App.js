import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/common/Home"
import Nav from"./component/common/Nav"
import VideosIndex from"./component/videos/VideoIndex"
import VideoShow from"./component/videos/VideoShow"
import Profile from"./component/profile/Profile"
import Footer from "./component/common/Footer"
import "./App.css"

export default function App() {
  return (
  <div className="container">
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Profile/>}/>
         <Route path="/videos" element={<VideosIndex />} />
         <Route path="/videos/:id" element={<VideoShow />} />
           
      </Routes>
      <Footer />
    </Router>
  </div>
  )
}

