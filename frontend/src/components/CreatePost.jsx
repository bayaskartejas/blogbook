import React from 'react'
import person from "../assets/person.png"

function CreatePost({name}) {
  return (
    <div className='createpost-c'>

      <div className='createpost'>

          <div className='pfpandpost'>
            <img src={person} alt="" className='pfp'/>
            <input className='postbox' placeholder={`What's on your mind, ${name}?`} />
          </div>

        <div className='line-c'>
          <div className='line' style={{width:"470px"}}></div>
        </div>

        <div className='postbutton-c'>
          <button className='postbutton'>Post</button>
        </div>
      </div>

    </div>
  )
}

export default CreatePost