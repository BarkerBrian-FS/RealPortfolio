import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/topNav';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import ContactForm from '../Components/contactForm'

const Contact = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div>
            <div style={styles.contactForm}>
                <ContactForm/>
            </div>
            <div style={styles.contactBtn}>
                <Link><img style={styles.github} src={github} alt='github'/></Link>
                <Link><img style={styles.linkedIn} src={linkedIn} alt='linkedIn'/></Link>
            </div>
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
    },
    contactForm:{
        width: '100%'
    },
    contactBtn:{
        marginLeft: '660px',
        marginTop: '50px'
    }

}