import React from 'react'
import Countdown from 'react-countdown';


const Timer = () => {
  const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is completed
      return <span style={{fontSize:'50px', fontWeight:600, color:"white"}}>00:00:00</span>;
    } else {
      // Render the hours, minutes, and seconds
      return (
        <span style={{fontSize:'42px', fontWeight:600, color:"#28a745"}}>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      );
    }
  };

  return (
    <div className='container ' style={{paddingBottom:"20px", borderRadius:'7px',}}>
      <Countdown renderer={renderer} date={Date.now() + twoHoursInMilliseconds} />
    </div>
  )
}

export default Timer
