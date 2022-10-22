import React, { useState, useEffect } from 'react'
import SheepAudio from '../assets/sheepAudio.mp3'

const HomePage = () => {

  const [audio] = useState(new Audio(SheepAudio))
  const [playing, setPlaying] = useState({})
  const [nowPlaying, setNowPlaying] = useState('')




  const playSound = (animal) => {
    setPlaying({...playing, [`${animal}`]: !playing[animal]})
  }

  useEffect(() => {
    playing[nowPlaying] ? audio.play() : audio.pause()
    // eslint-disable-next-line
  }, [playing])

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div 
      className='sheep-card'
      onClick={() => {
        playSound('sheep')
        setNowPlaying('sheep')
      }}
      >
        <img style={{objectFit: 'contain', width: '100%', height: '100%'}}src='https://images.squarespace-cdn.com/content/v1/5f87b82c3640400719116914/1643926950607-9J43T33V94BO4INDIDNX/Sheep+website+header+%28Facebook+Cover%29.png?format=2500w' alt='goat'/>
      </div>
    </div>
  )
}

export default HomePage