import React from 'react';
import Nav from '../Components/topNav';
import me from '../images/AboutBrian.png'
import spacebg from '../images/spacebg.jpg'

const About = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div style=
            {{backgroundImage: `url(${spacebg})`}}>
       
        <div style={styles.about}>
            <div style={styles.intro}>
                <h1 style={styles.name} class='name'>Brian Barker</h1>
                <p style={styles.para}>Welcome! I am a hardworking veteran looking to enter the tech field.
                I recently graduated from school for web development and design.
                I have a passion for creating in the digital space and would love to find a company to grow my skills.</p>
            </div>
            <div>
                <img src={me} alt='me' style={styles.img}/>
            </div>
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
    },
    name:{
        color: 'white',
        fontFamily: 'Anta, sans-serif',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '4rem',
        marginLeft: '20rem',
        marginTop: '6rem'
    },
    para:{
        fontFamily: 'Anta, sans-serif',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '1.8rem',
        color:'white',
        marginTop: '-2rem',
        marginLeft: '20rem'
    }
   
 
}