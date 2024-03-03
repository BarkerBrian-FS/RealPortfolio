import React from 'react';
import {Link} from 'react-router-dom'


const Nav = () => {
    return(
        <>
        <header style = {styles.myHeader}>
            <div  style = {styles.logo} >
                <h1>Portfolio</h1>
            </div>
            <nav className='Cup' style = {styles.nav} >
                <Link to="/" style={styles.link}>About</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
                <Link to="/experience" style={styles.link}>Experience</Link>
                <Link to="/matching" style={styles.link}>Projects</Link>
             </nav>
        </header>
        </>
    )
}

export default Nav

const styles= {
    myHeader:{
        padding: '1%',
        backgroundColor: '#003459',
        color: '#F2AF29',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo:{

        marginRight: '10%',
        marginTop: '-.5%',
        color: 'white',
        textDecoration: "none",
        fontFamily: 'sans-serif',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px #000000'
    },
    nav:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
    },
    link:{
        margin: ".5rem",
        textDecoration: "none",
        color: 'white'
    }
};