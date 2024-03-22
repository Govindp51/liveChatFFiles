import React from 'react'
import "./Mystyles.css";

function MessageSelf() {
    var props2 = { name: "You" , message: "This is a sample Message"}
  return (
    <div className='Message-self-container'>
        <div className='messageBox'>
            <p>{props2.message}</p>
            <p className='self-timeStamp'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf;