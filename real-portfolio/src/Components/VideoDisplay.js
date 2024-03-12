import React from 'react';
import asteroid from '../videos/asteroids.mp4';
import cryptoWatch from '../videos/cryptoWatch.mp4';

const videoDisplay = () => {
  return (
    <div className='container'>
        <div className='asteroid'>
            <h1>Asteroid Game</h1>
            <video src={asteroid} controls width="250" alt='asteroid' style={styles.asteroid}/>
        </div>
        <div className='cryptoWatch'>
            <h1>CryptoWatch</h1>
            <video src={cryptoWatch} controls width="250" alt='cryptoWatch'style={styles.cryptoWatch}/>
        </div>
    </div>
  )
}
export default videoDisplay

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    asteroid:{
        marginTop: '8%',
        height: 'auto',
        width: '80%',
        marginLeft: '10%',
    },
    cryptoWatch:{
        marginTop: '8%',
        marginBottom: '8%',
        height: 'auto',
        width: '80%',
        marginLeft: '10%',
    }
}