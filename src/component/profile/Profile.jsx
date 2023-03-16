import fernando from"../profile/fernando.jpeg"
import elizabeth from"../profile/elizabeth.jpeg"
import florence from"../profile/florence.png"
import "./profile.css"

export default function Profile(){
  
  const teamMembers=[
   
    {
    name:"Elizabeth Bright ",
    url:"https://github.com/elizabethbright721",
    linkedin:"https://www.linkedin.com/in/elizabethbright721/",
    image:elizabeth,
    about:"I am  currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify"
    
    },
  
    {
    name:"Fernando Cortez",
    url:"https://github.com/CortezFernando",
    linkedin:"https://www.linkedin.com/in/fernando-cortez-61b759250/",
    image:fernando,
    about:"I am certified  mental health aid and phlebotomist who is also trained and certified in office management, Microsoft office, clinical, Medical assistant and Google IT. I am  currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify"
    
  },
  {
    name:"Florence Ernestina Osei",
    url:"https://github.com/pursuit-florence",
    linkedin:"https://www.linkedin.com/in/florence-ernestina-osei/",
    image:florence,
    about:"I am a certified IT support specialist, who is currently a fellow in pursuit studying Full Stack Web developing. Pursuit is a 12-months, Google funded software engineering fellowship with a 9% acceptance rate in graduates getting hired by leading companies such as Pinterest, JP Morgan and Spotify"
    
  }
  
  ]
  
  return(
          <div className="members">
            <h1 className="project-heading">A Brief Description Of our Project</h1>
            <p className="project">
              This is a  clone youtube project which  allows 
              you to search for videos in the search bar. The search will pull 
              videos based on what is typed in the bar. Then you go ahead and 
              choose a video and view it's content
              </p>
             
          <ul>
            {teamMembers.map((member, index) => 
            <li key={index} className="mem">
              
              <div className="member-image"><span className="overlay">
              <img src={member.image} alt='' className="card-img"/></span>
              
              </div>
              
              <div className="name">
                <h2 className="member-name">{member.name}</h2></div>
                  <p className="details">{member.about}</p>
                
              <a href={member.url}>
              <br></br>
                Github</a><br></br>
                <a href={member.linkedin}>
               
                linkedin</a><br></br>
             
              </li>
            
              )
            }
          </ul>
          
          <div>
          </div>
        </div>
  
        
  )
  }
  