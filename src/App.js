import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/common/Home"

import Nav from"./component/common/Nav"
import Footer from"./component/common/Footer"
import VideosIndex from"./component/videos/VideoIndex"
import VideoShow from"./component/videos/VideoShow"
import Profile from"./component/profile/Profile"
function App() {
// const [allVideos, setAllVideos] = useState([])
  
// useEffect(() => {
//     getVideos().then(response => {
//       setAllVideos(response)
//     }).catch((error) => console.log(error))
//   }, [])

  return (
  <>
    <Router>
    <Nav/>
    <Routes>
    <Route path="videos/:id" element={<VideoShow/>} />
    <Route path="/about" element={<Profile/>}/>
    <Route path="/" element={<Home/>}/>
    </Routes>
    
    <VideosIndex />
    <Footer/>
    </Router>
  </>
  )
}

export default App;
