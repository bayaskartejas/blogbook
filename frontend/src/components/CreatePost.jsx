import React from 'react'
import person from "../assets/person.png"
import { useRef } from 'react'
import axios from 'axios'

function CreatePost({name}) {
  let blogRef = useRef()
  return (
    <div className='createpost-c'>

      <div className='createpost'>

          <div className='pfpandpost'>
            <img src={person} alt="" className='pfp'/>
            <input className='postbox' placeholder={`What's on your mind, ${name}?`} ref={blogRef} />
          </div>

        <div className='line-c'>
          <div className='line' style={{width:"470px"}}></div>
        </div>

        <div className='postbutton-c'>
          <button className='postbutton' onClick={()=>{
            axios.post("http://localhost:3000/post", {
              blog: blogRef.current.value
            },{
              headers: {
                "Authorization": sessionStorage.getItem("token")
              }
            })
            .then((res)=>{
              window.location.reload();
            })      
            .catch((e)=>{
              alert(e.response.data.msg)
            })
            
          }}>Post</button>
        </div>
      </div>

    </div>
  )
}

export default CreatePost