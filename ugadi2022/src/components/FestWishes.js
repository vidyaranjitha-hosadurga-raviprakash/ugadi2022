
import React from "react";
// import "../App.css"
import "../static/css/style.css"
import bgVideo from '../static/images/bg-video.mov'
import WishCard from './WishCard.js'

const wishMsgEng = ["/* ","Wish ", "you ", "a ", "Happy " , "Ugadi ", "2022 ", "... "," */  "];
const wishMsgKan = ["ಯುಗಾದಿ ", "ಹಬ್ಬದ ","ಹಾರ್ದಿಕ "," ಶುಭಾಶಯಗಳು ", "2022 ", "..."]
  
const FestWishes = () => {

    return <>
        <div className="wishcard-container">
            <video className='wishcard-video-bg' autoPlay loop muted>
                <source src={bgVideo} type='video/mp4' />       
            </video>
            <div className="wishcard-msg">
                <WishCard  msg={wishMsgKan} delay="700" className="wishcard-kannada"></WishCard>
                <WishCard  msg={wishMsgEng} delay="650" className="wishcard-english"></WishCard>
            </div>            
        </div>
        <div className="wishcard-footer">
                <label>@prismatic.hr | 2022</label>
        </div>
        </>
    }

export default FestWishes
