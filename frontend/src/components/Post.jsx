import { useEffect, useState } from "react";
import axios from "axios";
import person from "../assets/person.png"
export function Post(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/allposts', {
      headers: {
        "Authorization": sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      const res = response.data;
      setPosts(res)
    })
    .catch((e)=>{
      alert(e)
    })
  },[])
  return (
    <div>
      {posts.map((post) => (
        post.map((thePost)=>(
          <div id={thePost._id} key={thePost._id} className="post-c">
            <div id={thePost._id + "abc"} key={thePost._id} className="post">
                <div className="pfpandname">
                  <img src={person} alt="" className="pfp"/>
                  <div className="nameandtime">
                    <div id={thePost._id + "name"} className="name"><strong style={{fontWeight:"600" , fontSize:".9375rem", fontFamily:"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif", lineHeight:"1.3333", wordBreak:"break-word"}}>{thePost.name}</strong></div>
                    <div id={thePost._id + "time"} className="time" style={{fontFamily:"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif", fontWeight:"400", lineHeight:"1.2308", fontSize:".8125rem", color:"gray"}}>{thePost.time}</div>
                  </div>
                  <div id={thePost._id + "menu"} className="menubutton-c">
                    <div className="menubutton">
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ '--color': 'var(--secondary-icon)' }}>
                      <g fillRule="evenodd" transform="translate(-446 -350)">
                        <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                      </g>
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="blogtext-c">
                  <div id={thePost._id + "jkl"} className="blogtext">{thePost.blog}</div>
                </div>

                <div className="line-c" style={{margin:0}}>
                  <div className="line" style={{width:"470px", margin:0}}></div>
                </div>

                <div className="likeandcomment-c">
                  <div className="likeandcomment">
                    <div className="like">
                      <i className="likebutton"></i>
                      <div className="liketext-c">
                        <div className="liketext">Like</div>
                      </div>

                    </div>
                    <div className="comment">
                      <i className="commentbutton"></i>
                      <div className="commenttext-c">
                          <div className="commenttext">Comment</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="line-c" style={{margin:0}}>
                  <div className="line" style={{width:"470px", margin:0}}></div>
                </div>

                <div className="cmnt-c">
                  <div className="cmnt">
                    <img src={person} alt="" className="pfp" style={{height:"32px", width:"32px", marginTop:"2px"}}></img>
                    <div className="postbox-c" style={{width:"430px", paddingTop:"2px", paddingBottom:"8px"}}>
                      <input type="text" className="postbox" placeholder="Write a comment..." style={{width:"380px", height:"36.1px", display:"inline-block"}}/> 
                      <i className="cmnt-send" style={{display:"inline-block"}}></i>
                    </div>

                  </div>
                </div>

            </div>
        </div>          
        ))

      ))}
    </div>
  );
}