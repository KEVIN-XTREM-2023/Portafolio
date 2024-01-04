import React from 'react'
import { Link } from "react-router-dom";
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
       
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
        
       
    </div>
)


const renderContent = {
1:(
    <h1 className='sm:text-xl sm: leading-snug text-center neo-brutalism-blue 
    py-4 px-8 text-white mx-5'>
        <span className='font-semibold'>Kevin Saquinga 👋 </span>

       
    </h1>
),
2:(
    <InfoBox 
        text="Ingeniero de Software, Ecuador  😎"
        link="/about"
        btnText="Acerca de Mi"

    />
),
3:(
    <InfoBox 
        text="Proyetos"
        link="/projects"
        btnText=""

    />
),
4:(
    <InfoBox 
        text="Contactanos"
        link="/contact"
        btnText=""

    />
)

}




const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo