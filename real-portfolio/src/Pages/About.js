import React from 'react';
import Nav from '../Components/topNav';
import me from '../images/AboutBrian.png'

const About = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div style={styles.about}>
            <div style={styles.intro}>
                <h1 style={styles.name}>Brian Barker</h1>
                <p style={styles.para}>Welcome! I am a hardworking veteran looking to enter the tech field.
                I recently graduated from school for web development and design.
                I have a passion for creating in the digital space and would love to find a company to grow my skills.</p>
            </div>
            <div>
                <img src={me} alt='me' style={styles.img}/>
            </div>
        </div>
        </>
    )
}

export default About

const styles={
    about:{
        display: 'flex',
        flexDirection: 'row'
    },
    img:{
        height: '1200px',
        width: 'auto',
        marginTop: '-30rem',
        marginRight: '-5rem'

    }
 
}