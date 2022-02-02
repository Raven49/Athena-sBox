import React,{useState} from 'react';

import Course1 from '../ui/web.png';
import Course2 from '../ui/web2.jpg';

export default function Home() {

    const [popularCourse, setpopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How to create Beautiful illustrate design in 60 minutes",
            tutor: {
                ID: 1,
                name:'Lana Mardiana',
                username:'@lanamariadana',
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration:'82 min',
            poster: Course1      
        },
        {
            ID: 2,
            title: "Learning How to create Beautiful illustrate design in 60 minutes",
            tutor: {
                ID: 1,
                name:'Uran Design',
                username:'@urandesign',
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration:'1 hr 12 min',
            poster: Course2
        }
    ])

    const [topTutors, settopTutors] = useState([
        {
                ID: 1,
                name:'Lana Mardiana',
                username:'@lanamariadana',
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,   
        },
        {             
                ID: 1,
                name:'Uran Design',
                username:'@urandesign',
                dp: "http://placeimg.com/100/100/people?tutor-" + 2,   
       },
       {             
                ID: 1,
                name:'Uran Design',
                username:'@urandesign',
                dp: "http://placeimg.com/100/100/people?tutor-" + 3,   
        },
        {
            ID: 4,
            name:'Lana Mardiana',
            username:'@lanamariadana',
            dp: "http://placeimg.com/100/100/people?tutor-" + 4,   
    },
    {             
            ID: 5,
            name:'Uran Design',
            username:'@urandesign',
            dp: "http://placeimg.com/100/100/people?tutor-" + 5,   
   },
   {             
            ID: 6,
            name:'Uran Design',
            username:'@urandesign',
            dp: "http://placeimg.com/100/100/people?tutor-" + 6,   
    }
    ])

    var tutorList = [];
    for(let i= 0; i < 8; i++ ){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live" + i}>
                <img src={"http://placeimg.com/100/100/people" + i } alt="no tutor" className="bl"/>
            </button>
        )
    }

    var courseList = [];
    for(let i= 0; i < popularCourse.length; i++ ){
        courseList.push(
            <a href="/products" className="course rel" key={"popular-course" + i}>
                <div className="block rel" style={{background:  " #e2e2e2 url(" + popularCourse[i].poster +" ) no-repeat center" }} >
                
                <div className="user aic abs flex">
                    <div className="pic">
                        <img src={popularCourse[i].tutor.dp} className="bl" alt=""/>
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 fontb name cfff">{popularCourse[i].tutor.name} </h2>
                        <h2 className="s13 fontn username cfff">@{popularCourse[i].tutor.username} </h2>
                    </div>
                </div>
                
                <div className="dura abs">
                <h2 className="s13 fontb name cfff">@{popularCourse[i].duration} </h2>
                </div>
             
                <div className="course-title abs">
                <h2 className="s15 fontb name cfff">{popularCourse[i].title} </h2>
                </div>
             
              </div>
            </a>
        );
    }
    var topTutorsList = [];
    for(let i= 0; i < topTutors.length; i++ ){
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"top-tutors" + i}>     
                <div className="user aic flex">
                    <div className="pic">
                        <img src={topTutors[i].dp} className="bl" alt=""/>
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 fontb name c333">{topTutors[i].name} </h2>
                        <h2 className="s13 fontn username c333">{topTutors[i].username} </h2>
                    </div>
                </div>
            </a>
        );
    }
    return (
        <div className="home-page rel">
         
            <div className="section rel">
                <h2 className="title s24 fontb"> Streaming <span className="fontn">Now</span>   </h2>
          <div className="tutors rel flex">
                {tutorList}
          </div> 
        </div>
        
        <div className="section section-b rel">
                <h2 className="title s24 fontb"> Populer <span className="fontn">Things</span>   </h2>
          <div className="courses rel flex">
                {courseList}
          </div> 
        </div>
        
        <div className="section section-b rel">
                <h2 className="title s24 fontb"> Top <span className="fontn">Tutors</span>   </h2>
          <div className="top-tutor rel flex">
                {topTutorsList}
          </div> 
        </div>
        
        </div>
    )
}
