
import React from "react";
import Typist from "react-typist";
import "../App.css"
import "../static/css/style.css"
import sample from '../static/images/bg-video.mov'

const FestWish = () => {
  const comments = ["/* ", " */  "]  
  const textsEng = ["Wish ", "you ", "a ", "Happy " , "Ugadi ", "2022 ", "... "];
  const textsKan = ["ಯುಗಾದಿ ", "ಹಬ್ಬದ ","ಹಾರ್ದಿಕ "," ಶುಭಾಶಯಗಳು ", "2022 ", "..."]


  return <><div className="wishcard-container">

            <video className='wishcard-video-bg' autoPlay loop muted>
            
                    <source src={sample} type='video/mp4' />       
                    
            </video>
            <div className="wishcard-msg">
            <Typist className="wishcard-kannada">
                <Typist.Delay ms={7000} />
                {textsKan.map((text) => (
                    <label>
                        {text} 
                    </label>        
                )) }
            </Typist>             

            <Typist className="wishcard-english">
            {comments[0]}
            <Typist.Delay ms={6500} />
            {textsEng.map((text) => (
                <label>
                    {text} 
                </label>        
            )) }
            {comments[comments.length-1]}
            </Typist>
            </div>
            
            
            
            
            
            
            
        </div>
        <div  className="wishcard-footer">
                <label>@prismatic.hr | 2022</label>
            </div>
        </>
}

export default FestWish
