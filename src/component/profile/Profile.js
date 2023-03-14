import fernando from"../profile/fernando.jpeg"
import elizabeth from"../profile/elizabeth.jpeg"
import florence from"../profile/florence.png"
import "./profile.css"

export default function Profile(){
  const members=[
    {
    name:"Florence Ernestina Osei",
    url:"https://github.com/pursuit-florence",
    image:florence
    
  },
  
    {
    name:"Elizabeth Bright ",
    url:"https://github.com/elizabethbright721",
    image:elizabeth,
    
    },
  
    {
    name:"Fernando Cortez",
    url:"https://github.com/CortezFernando",
    image:fernando,
    
  }
  ]
  
  return(
          <div className="members">
          <ul>
            {members.map((member, index) => 
              
              
              <li key={index} className="mem">
              <h3>{member.name}</h3> 
              <a href={member.url}>
                Github</a>
              <img src={member.image} alt=''/> 
              </li>
            
              )
            }
          </ul>
          <div>
             <h3>A Brief Description Of our Project</h3>
             <article>
              This is a  clone youtube project which  allows 
              you to search for videos in the search bar. The search will pull 
              videos based on what is typed in the bar. Then you go ahead and 
              choose a video and view it's content
             </article>
          </div>
        </div>
  
        
  )
  }
  