import React from 'react';
import Nav from '../Components/topNav';
import figma from '../images/figma.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import html from '../images/html.png';
import react from '../images/physics.png';
import mongo from '../images/mongodb.svg';

const Experience = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div style={styles.experience}>
            <div style= {styles.htmlBlock}>
                <img style={styles.html} src={html} alt='html'/>
                <p>2 1/2 years of experience working with HTML5</p>
            </div>
            <div style={styles.cssBlock}>
                <img style={styles.css} src={css} alt='css'/>
                <p>2 1/2 years of experience working with CSS</p>
            </div>
            <div style={styles.jsBlock}>
                <img style={styles.js} src={js} alt='javascript'/>
                <p>2 1/2 years of experience working with Javascript</p>
            </div>
            <div style={styles.nodeBlock}>
                <img style={styles.node} src={nodejs} alt='nodejs'/>
                <p>2 1/2 years of experience working with nodeJs</p>
            </div>
            <div style={styles.reactBlock}>
                <img style={styles.react} src={react} alt='react'/>
                <p>2 1/2 years of experience working with react</p>
            </div>
            <div style={styles.mongoBlock}>
                <img style={styles.mongo} src={mongo} alt='mongodb'/>
                <p>2 1/2 years of experience working with MongoDb</p>
            </div>
            <div style={styles.figmaBlock}>
                <img style={styles.figma} src={figma} alt='figma'/>
                <p>2 1/2 designing websites and apps with Figma</p>
            </div>
        </div>
        </>
    )
}

export default Experience

const styles={
    experience:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '60px',
        marginLeft: '100px',
    },
    html:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    htmlBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    css:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row'
    },
    cssBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    js:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
    },
    jsBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    nodeBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    node:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
    },
    reactBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    react:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
    },
    mongoBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    mongo:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
    },
    figmaBlock:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '30px',
        fontSize: '1.5rem'
    },
    figma:{
        height: '120px',
        width: '120px',
        display: 'flex',
        flexDirection: 'row',
    }

}