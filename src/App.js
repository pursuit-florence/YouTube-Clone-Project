import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from"./component/common/Home"
import Nav from"./component/common/Nav"
import Footer from"./component/common/Footer"
import VideosIndex from"./component/videos/VideoIndex"
import VideoShow from"./component/videos/VideoShow"
function App() {
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
