import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/topNav';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';

const Contact = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div>
            <Link><img style={styles.github} src={github} alt='github'/></Link>
            <Link><img style={styles.linkedIn} src={linkedIn} alt='linkedIn'/></Link>
        </div>
        </>
    )
}

export default Contact

const styles={
    github:{
        height: '120px',
        width: '120px'
    },
    linkedIn:{
        height: '120px',
        width: '120px'
    }
}