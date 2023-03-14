// const key = process.env.REACT_APP_API_KEY  
// console.log(process.env.REACT_APP_API_KEY )
// export function getVideos() {
//     return fetch (`https://youtube.googleapis.com/youtube/v3/search?key=${key}`
//     ).then((results) => results.json())
// }


// export function searchedVideos(artist) {
//     console.log(artist)
//     return fetch (`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${artist}&type=video&part=snippet&maxResults=10`
//     ).then((results) => results.json())
// }


const KEY = process.env.YOUTUBE_API_KEY

export function getAllVideos(){
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${KEY}`)
  .then((response)=> response.json())

}
console.log(getAllVideos())
