import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
        <>
        <header style = {styles.myHeader}>
            <div  style = {styles.logo} >
                <h1 >Portfolio</h1>
            </div>
            <nav className='navLink' style = {styles.nav} >
                <Link to="/" style={styles.link}>About</Link>
                <Link to="/experience" style={styles.link}>Experience</Link>
                <Link to="/projects" style={styles.link}>Projects</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
             </nav>
        </header>
        </>
    )
}

export default Nav

const styles= {
    myHeader:{
        padding: '1%',
        backgroundColor: '#1b263b',
        color: '#F2AF29',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo:{
        fontFamily: 'Exo 2, sans-serif',
        fontSize: '1.6rem',
        fontWeight:  200,
        textShadow: '2px 2px 4px #000000',
        marginRight: '10%',
        marginTop: '-.5%',
        color: '#e0e1dd'
        
    },
    nav:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
    },
    link:{
        fontFamily: 'Exo 2, sans-serif',
        fontSize: '1.3rem',
        fontWeight:  'bold',
        textShadow: '2px 2px 4px #000000',
        margin: ".5rem",
        textDecoration: "none",
        color: '#e0e1dd'
    }
};