import person from "../assets/person.png"
export function Comment({username, comment}){
    return <div style={{height:"max-content", width:"max-content", maxWidth:"400px", backgroundColor:"white", borderTopRightRadius:"15px", borderBottomRightRadius:"15px", borderBottomLeftRadius:"15px", padding:"5px", marginLeft:"20px"}}>
        <div style={{display:"flex", alignItems:"center", paddingLeft:"10px", paddingRight:"10px"}}>
            <img src={person} alt="profile" style={{height:"30px", borderRadius:"50%", border:"1px solid black"}}/>    
            <div style={{marginLeft:"5px"}}> <h4>{username}</h4> </div>
        </div>
        <div className="blogtext" style={{fontSize:14, width:"100%", paddingLeft:"10px", paddingRight:"10px", marginTop:"5px"}}>
            <div style={{wordWrap:"break-word", textAlign:"start"}}>
            {comment}
            </div>
        </div>
    </div>
}