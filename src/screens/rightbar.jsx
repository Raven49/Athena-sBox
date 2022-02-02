import React,{useState} from 'react'
import '../css/App.css';

import Course3 from '../ui/course3.jpg';
import Course4 from '../ui/course4.jpg';
import Course5 from '../ui/course5.jpg';
import Cake from '../ui/cake.png';

export default function Rightbar() {

  const [ popularCourse, setPopularCourse] = useState([
    {
        ID: 1,
        title: "Machine Learning A-Z:Hands on Python & R in Data Science",
        tutor: {
            ID: 1,
            name:'Kirill Eremenko,Hadelin De Ponteves',
            
            dp: "http://placeimg.com/100/100/people?tutor-" + 1,
        },
        duration:'82 min',
        poster: Course3      
    },
    {
        ID: 2,
        title: "Android App Development Course with Kotlin & Java | Android",
        tutor: {
            ID: 1,
            name:'Oak Academy,Mehemek Ongel',
          
            dp: "http://placeimg.com/100/100/people?tutor-" + 2,
        },
        duration:'1 hr 12 min',
        poster: Course4
    },
    {
      ID: 3,
      title: "Blockchain A-Z™: Learn How To Build Your First Blockchain",
      tutor: {
          ID: 1,
          name:'Kirill Eremenko,Hadelin De Ponteves',
          
          dp: "http://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration:'2 hr 10 min',
      poster: Course5    
  }
])
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
                    <h2 className="s13 fontn username cfff">{popularCourse[i].tutor.username} </h2>
                </div>
            </div>
            
            <div className="dura abs">
            <h2 className="s13 fontb name cfff">{popularCourse[i].duration} </h2>
            </div>
         
            <div className="course-title abs">
            <h2 className="s15 fontb name cfff">{popularCourse[i].title} </h2>
            </div>
         
          </div>
        </a>
    );
}


    return (
        <div className="rightbar rel">

          <div className="section section-b rel">
             <h2 className="title s24 fontb"> Advanced <span className="fontn">Search </span>   </h2>             
             <div className="searchbox rel flex">
               <input type="text" className="qry s15 fontb" placeholder="Startwriting something"  name="" id=""/>
               <button className="go cfff s15 fontb">Search</button>
             </div> 
          </div>

          <div className="section section-b rel">
             <div className="courses rel flex">
               <div className="course-a">
                {courseList[0]}             
               </div>
               <div className="flex cols">
                  {courseList[1]}
                  {courseList[2]}
                </div>
             </div> 
          </div>

          <div className="section section-b rel ">
            <h2 className="title s24 fontb"> Special <span className="fontn">Offers </span>   </h2>    
             <div className="offer rel flex">
               <div className="meta">
                   <h2 className="h1 s20 fontb"> 50 Days Premium  </h2>    
                   <span className="h2  fontb"> Get it before 5.5.2020  </span>    
                  <button className="s13 fontb">Learn more</button>
               </div>
               <div className="vector rel">
                    <img src={Cake} alt="" />
               </div>
               <div className="ring abs"></div>
             </div> 
          </div>

        </div>
    );
}
