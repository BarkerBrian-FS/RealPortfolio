import React from 'react';
import Nav from '../Components/topNav';
import spaceBgProject from '../images/spaceBgProject.jpg'
import Video from '../Components/VideoDisplay';

const Projects = () => {
    return(
        <>
        <div>
            <Nav/>
        </div>
        <div class='spaceBgProject' style= {{backgroundImage: `url(${spaceBgProject})`}} >
            <div className='video'>
                <Video/>
            </div>
        </div>
        </>
    )
}

export default Projects

