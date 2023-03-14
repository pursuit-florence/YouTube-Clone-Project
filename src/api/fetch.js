// const KEY =   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}`



export function searchedVideos(artist) {
    return fetch (`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${artist}&type=video&part=snippet&maxResults=5`
    ).then((results) => results.json())
}



// export function getAllVideos(){
//   return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
//   .then((response)=> response.json())

// }
//  console.log(getAllVideos())
