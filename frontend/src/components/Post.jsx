import { useEffect, useRef, useState } from "react";
import axios from "axios";
import person from "../assets/person.png"
import { Caution } from "./Caution";
import { Comment } from "./Comment";
export function Post(){
  let commentRef = useRef()
  const [posts, setPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState({})
  // const [isSaved, setIsSaved] = useState(true)
  const [isUserPost, setIsUserPost] = useState(true)
  const [likeLog, setLikeLog] = useState({})
  const [likeCountLog, setLikeCountLog] = useState({})
  const [commentCountLog, setCommentCountLog] = useState({})
  const [postDeletedlog, setPostDeletedLog] = useState({})
  const [commentClickLog, setCommentClickLog] = useState({})
  const [comments, setComments] = useState({})

  let arr =[];

  useEffect(()=>{
    axios.get('https://blogbook-backend.vercel.app/allposts', {
      headers: {
        "Authorization": sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      const res = response.data;
      res[0].reverse().map((post)=>{
        setComments((prevState => ({ ...prevState, [post._id] : post.comments.reverse()})))
      })
    })
  },[commentCountLog])

  useEffect(()=>{
    axios.get('https://blogbook-backend.vercel.app/allposts', {
      headers: {
        "Authorization": sessionStorage.getItem("token"),
      },
    })
    .then((response) => {
      const res = response.data;
      setPosts(res)
      res[0].reverse().map((post)=>{
        if(post.name === sessionStorage.getItem("username")){
          setIsUserPost((prevState=>({...prevState, [post._id]:true})))
        }
        setPostDeletedLog((prevState=>({...prevState, [post._id]:false})))
        setCommentClickLog((prevState => ({...prevState, [post._id]:false})))
        setLikeCountLog((prevState=>({...prevState, [post._id]:post.likes.length})))
        setCommentCountLog((prevState=>({...prevState, [post._id]:post.comments.length})))
        setComments((prevState=>({...prevState, [post._id]: post.comments.reverse()})))
        let exist = post.likes.find(ind => ind === sessionStorage.getItem("username"))
        exist ? setLikeLog((prevState=>({...prevState, [post._id]:true}))) : setLikeLog((prevState=>({...prevState, [post._id]:false})))
      })

    })
    .catch((e)=>{
      alert(e)
    })
  },[])

  useEffect(()=>{
    axios.get("https://blogbook-backend.vercel.app/isSaved",{
      headers:{
        "Authorization": sessionStorage.getItem("token")
      }
    })
    .then((res)=>{
      arr = res.data[0].savedPosts
      arr.map((id)=>{
        setSavedPosts((prevState => ({ ...prevState, [id]: true })))
      })
    })
    .catch((e)=>{
      alert(e);
    })
  },[])
  
  return (
    <div>
      {posts.map((post) => (
        post.map((thePost)=>(
          postDeletedlog[thePost._id] ? <></> : 
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
                    {isUserPost[thePost._id] ?                     
                    <div className="deletebutton" style={{marginRight: "10px"}} onClick={()=>{
                      setPostDeletedLog ((prevState=>({...prevState, [thePost._id]:true})))
                      axios.post("https://blogbook-backend.vercel.app/deletePost", {
                        id : thePost._id
                      },
                      {
                        headers: {
                          "Authorization": sessionStorage.getItem("token")
                        }
                      })
                      .then((res)=>{console.log(res)})
                      .catch((e)=>{alert(e)})
                    }}>                
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                        <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
                        </svg> 
                    </div> : 
                    <></>}


                    <div className="savebutton">
                      {savedPosts[thePost._id] ?                   
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" onClick={()=>{
                        axios.post("https://blogbook-backend.vercel.app/unsavePost",{
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
                        axios.post("https://blogbook-backend.vercel.app/savePost",{
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

                <div style={{height:"40px", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"20px", paddingRight:"20px"}}>
                      <div style={{width:"50px", height:"20px", display:"flex", justifyContent:"space-between", padding:"0px 5px", alignItems:"center"}}>
                        <i className="likeicon"></i>
                        <div className="likecount" style={{fontSize:14}}>{likeCountLog[thePost._id]}</div>
                      </div>
                      <div style={{width:"50px", height:"20px", display:"flex", justifyContent:"space-between", padding:"0px 5px", alignItems:"center"}}>
                        <i className="commenticon"></i>
                        <div className="commentcount" style={{fontSize:14}}>{commentCountLog[thePost._id]}</div>
                      </div>
                </div>
                
                <div className="line-c" style={{margin:0}}>
                  <div className="line" style={{width:"470px", margin:0}}></div>
                </div>

                <div className="likeandcomment-c">
                  <div className="likeandcomment">
                      {likeLog[thePost._id] ?                     
                          <div className="like" style={{width:"150px", height:"44px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"7px"}}
                          onClick={()=>{
                            axios.post("https://blogbook-backend.vercel.app/unliked",{
                              id : thePost._id
                            },{
                              headers:{
                                "Authorization":sessionStorage.getItem("token")
                              }
                            })
                            .then((res)=>{
                              setLikeCountLog(prevState => ({
                                ...prevState,
                                [thePost._id]: (prevState[thePost._id]) - 1
                              }))
                              setLikeLog((prevState=>({...prevState, [thePost._id]:false})))
                            })
                            .catch((e)=>{alert(e);})
      
                          }}>
                          <i className= "likebuttontrue"></i>
                          <div className="liketext-c">
                            <div className="liketexttrue">Like</div>
                          </div>
                        </div> : 
                            <div className="like" style={{width:"150px", height:"44px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"7px"}}
                            onClick={()=>{
                              axios.post("https://blogbook-backend.vercel.app/liked",{
                                id : thePost._id
                              },{
                                headers:{
                                  "Authorization":sessionStorage.getItem("token")
                                }
                              })
                              .then((res)=>{
                                setLikeCountLog(prevState => ({
                                  ...prevState,
                                  [thePost._id]: (prevState[thePost._id]) + 1
                                }))
                              setLikeLog((prevState=>({...prevState, [thePost._id]:true})))})
                              .catch((e)=>{alert(e);})
        
                            }}>
                            <i className= "likebuttonfalse"></i>
                            <div className="liketext-c">
                              <div className="liketextfalse">Like</div>
                            </div>
                          </div>}
                    <div className="comment" style={{width:"150px", height:"44px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"7px"}} onClick={()=>{
                      setCommentClickLog((prevState => ({...prevState, [thePost._id]:!commentClickLog[thePost._id]})))
                    }}>
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
                
                <div style={{backgroundColor:"#dadde1", overflowY:"scroll", maxHeight:"250px"}}>
                  {
                  comments[thePost._id].map((cmnt)=>(
                      commentClickLog[thePost._id]  ? 
                      <div style={{maxHeight:"300px", width:"100%", paddingTop:"10px", paddingBottom:"5px"}}>  
                      <Comment username={cmnt.username} comment={cmnt.comment}/></div> : <></>
                  ))}
                </div>

                <div className="cmnt-c">
                  <div className="cmnt">
                    <img src={person} alt="" className="pfp" style={{height:"32px", width:"32px", marginTop:"2px"}}></img>
                    <div className="postbox-c" style={{width:"430px", paddingTop:"2px", paddingBottom:"8px"}}>
                      <input id={`${thePost._id}cmnt`}  className="postbox" placeholder="Write a comment..." style={{width:"380px", height:"36.1px", display:"inline-block"}} ref={commentRef}/> 
                      <i className="cmnt-send" style={{display:"inline-block"}} onClick={()=>{
                        axios.post("https://blogbook-backend.vercel.app/postComment",{
                          comment : document.getElementById(`${thePost._id}cmnt`).value,
                          id : thePost._id
                        },{
                          headers:{
                            "Authorization": sessionStorage.getItem("token")
                          }
                        })
                        .then((res)=>{
                          setCommentCountLog((prevState => ({...prevState, [thePost._id] : commentCountLog[thePost._id]+1})))
                        })
                      }}></i>
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