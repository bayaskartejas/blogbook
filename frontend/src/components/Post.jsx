import { useEffect, useRef, useState } from "react";
import axios from "axios";
import person from "../assets/person.png"
export function Post(){
  const [posts, setPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState({})
  const [isSaved, setIsSaved] = useState(true)
  const [isUserPost, setIsUserPost] = useState(true)

  let arr =[];
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

  useEffect(()=>{
    axios.get("http://localhost:3000/isSaved",{
      headers:{
        "Authorization": sessionStorage.getItem("token")
      }
    })
    .then((res)=>{
      // ans = res.data[0].savedPost
      arr = res.data[0].savedPosts
      arr.map((id)=>{
        setSavedPosts((prevState => ({ ...prevState, [id]: true })))
      })
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])
  
  return (
    <div>
      {posts.map((post) => (
        post.map((thePost)=>(
          <div key={thePost._id} className="post-c" style={{position:"relative", display:"flex", justifyContent:"center"}}>
            <div key={thePost._id} className="post">
                <div className="pfpandname">
                  <div style={{width:"400px", display:"flex"}}>
                    <img src={person} alt="" className="pfp"/>
                    <div className="nameandtime">
                      <div className="name"><strong style={{fontWeight:"600" , fontSize:".9375rem", fontFamily:"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif", lineHeight:"1.3333", wordBreak:"break-word"}}>{thePost.name}</strong></div>
                      <div className="time" style={{fontFamily:"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif", fontWeight:"400", lineHeight:"1.2308", fontSize:".8125rem", color:"gray"}}>{thePost.time}</div>
                    </div>
                  </div>


                  <div style={{display:"flex"}}>
                    <div className="deletebutton" style={{marginRight: "10px"}}>
                      {isUserPost ?                   
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                        <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
                        </svg> : 
                      <></>}
                    </div>

                    <div className="savebutton">
                      {savedPosts[thePost._id] ?                   
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" onClick={()=>{
                        axios.post("http://localhost:3000/unsavePost",{
                          id: thePost._id
                        },{
                          headers:{
                            "Authorization": sessionStorage.getItem("token")
                          }
                        })
                        .then((res)=>{
                          setSavedPosts((prevState => ({ ...prevState, [thePost._id]: false })))
                        })
                      }}>
                      <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
                      </svg> : 
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" onClick={()=>{
                        axios.post("http://localhost:3000/savePost",{
                          id: thePost._id
                        },{
                          headers:{
                            "Authorization": sessionStorage.getItem("token")
                          }
                        })
                        .then((res)=>{
                          setSavedPosts((prevState => ({ ...prevState, [thePost._id]: true })))
                        })
                      }}>
                      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path transform="scale(8.53333,8.53333)" d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" id="strokeMainSVG" fill="#070505" stroke="#070505" stroke-linejoin="round"></path><g transform="scale(8.53333,8.53333)" fill="#ffffff" stroke="none" stroke-linejoin="miter"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z"></path></g></g>
                      </svg>}
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
                    <div className="like" style={{width:"150px", height:"44px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"7px"}}>
                      <i className="likebuttontrue"></i>
                      <div className="liketext-c">
                        <div className="liketexttrue">Like</div>
                      </div>

                    </div>
                    <div className="comment" style={{width:"150px", height:"44px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"7px"}}>
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