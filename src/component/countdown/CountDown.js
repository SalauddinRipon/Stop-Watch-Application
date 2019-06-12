import React from 'react'
import Digit from './Digit/digit'

const CountDown=(props) => {

    return(
       <div className="d-flex">
           <Digit color="palegreen" value={props.time.minit} />
           <Digit color="skyblue" value={props.time.sec} />
           <Digit color="salmon" value={props.time.mili} />
       </div>
    )
}



export default CountDown; 