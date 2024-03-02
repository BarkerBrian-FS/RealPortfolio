import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <>
        <div>
        <nav className='Cup' style = {styles.navBar}>
            <Link to="/" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            <Link to="/experience" style={styles.link}>Experience</Link>
            <Link to="/matching" style={styles.link}>Projects</Link>
         </nav>
        </div>
        </>
    )
}

export default Nav

const styles= {
  
    navBar:{
        height: '100%',
        width: '5%',
        display: 'flex',
        flexDirection: 'row',
        padding: '5%',
    },
    link:{
        margin: ".5rem",
        textDecoration: "none",
        color: 'black'

    }
}