const URL = process.env.YOUTUBE_API_KEY

export function getAllVideos(){
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`)
  .then((response)=> response.json())

}
console.log(getAllVideos())