import React,{useState} from 'react';
import logo from '../ui/log.jpg';
import home from '../ui/home.png';
import horn from '../ui/bullhorn.png';
import tag from '../ui/price-tag.png';
import Bcase from '../ui/briefcase.png';
import Horn from '../ui/bullhorn.png';
import shield from '../ui/shield.png';
import power from '../ui/power.png';

import '../css/App.css';

export default function Sidebar() {

    const [nav, setNav] = useState([
        {label:'Home',slug:'/',icon:home},
        {label:'Discover',slug:'discover',icon:horn},
        {label:'Catagories',slug:'catagorie',icon:tag},

    ])

    const [currentPage,setCurrentPage] = useState("/");

    var navigation = [];
    for(let i =0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}> 
             <a href={nav[i].slug} className={"aic link noul flex c333" + (currentPage === nav[i].slug ? "on" : " " )}>
               <div>
                  <img  src={nav[i].icon} /> 
                </div>
        <h2 className="lbl s15">{nav[i].label}</h2>
                </a>
            </li>
        )
    }
    return (
        
        <div className="sidebar rel ">
            <a href="#" className="logo bl">
                <img src={logo} className="bl ico"/>
            </a>
            <ul className="nav">
            {navigation}        
            </ul>
            
            <div className="updated-course flex aic">
              <div><img src={Horn} className="ico bl s24" /> </div>
              <div className="lbl s13 fontb c333">Updated Course</div> 
            </div>
              <h2 className="authore s13 c777 mr20">by Samana Butool</h2>
        
        <div className="stats flex">

            <div className="stats-box flex">
                <div><img src={shield} className="ico bl s24" /> </div>
                <h2 className="val s13 c777 fontb">1600</h2>
                <h2 className="lbl s13 c777">points</h2>
            </div>
            
            <div className="stats-box flex">
                <div><img src={power} className="ico bl s24" /> </div>
                <h2 className="val s13 c777 fontb">55.6%</h2>
                <h2 className="lbl s13 c777 ">complete</h2>
            </div>
        </div>
        <div className="me flex aic">
              <div className="photo cfff"><img src="http://placeimg.com/100/100/people" className="bl" /> </div>
              <div className="lbl s13 fontb c333">Samana Butool</div> 
            </div>
    </div>
    )
}
