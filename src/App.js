import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/common/Home"
import Nav from"./component/common/Nav"
import VideosIndex from"./component/videos/VideoIndex"
import VideoShow from"./component/videos/VideoShow"
import Profile from"./component/profile/Profile"

export default function App() {
  return (
  <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/videos/:id" element={<VideoShow />} />
        <Route path="/about" element={<Profile/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<VideosIndex />} />
      </Routes>
    </Router>
  </>
  )
}

