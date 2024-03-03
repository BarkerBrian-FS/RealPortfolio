import React from 'react';
import Nav from '../Components/topNav'
import figma from '../images/figma.png'
import css from '../images/css.png'
import js from '../images/js.png'
import nodejs from '../images/nodejs.png'
import html from '../images/html.png'
import react from '../images/physics.png'
import mongo from '../images/mongodb.svg'

const Experience = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div>
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
            <img src={js} alt='javascript'/>
            <img src={nodejs} alt='nodejs'/>
            <img src={react} alt='react'/>
            <img src={mongo} alt='mongodb'/>
            <img src={figma} alt='figma'/>
        </div>
        </>
    )
}

export default Experience

const styles={

    img:{
        
    }

}