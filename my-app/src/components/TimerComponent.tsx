import React, { useEffect, useState } from 'react'

interface Props {
    
}

const TimerComponent = (props: Props) => {
    const [time, setTime] = useState(new Date());
 
    useEffect(() => {
      const timer = setTimeout(() => {
        setTime(new Date())
      }, 1000);
      return () => {
        clearTimeout(timer);
        console.log('Timer Cleared');
      }
    })
    return (
        <div>
          <h1>Current Timer At : {time.toLocaleTimeString()}</h1>  
        </div>
    )
}

export default TimerComponent
