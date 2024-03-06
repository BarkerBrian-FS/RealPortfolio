import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/topNav';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import ContactForm from '../Components/contactForm'
import spaceBg2 from '../images/spaceBg2.jpg'

const Contact = () => {
    return(
    <>
        <div>
            <Nav/>
        </div>
        <div>
        <div class='spaceBg2' style= {{backgroundImage: `url(${spaceBg2})`}} >
            <div style={styles.contactForm}>
                <ContactForm/>
            </div>
            <div style={styles.contactBtn}>
                <div>
                    <Link><img style={styles.github} src={github} alt='github'/></Link>
                </div>
                <div>
                    <Link><img style={styles.linkedIn} src={linkedIn} alt='linkedIn'/></Link>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Contact

const styles={
    github:{
        height: '105px',
        width: '105px',
        marginRight: '10px'
    },
    linkedIn:{
        height: '105px',
        width: '105px',
        marginLeft: '10px'
    },
    contactForm:{
        width: '100%'
    },
    contactBtn:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '705px',
        marginTop: '40px',
        justifyContent: 'spaceBetween'
    }

}