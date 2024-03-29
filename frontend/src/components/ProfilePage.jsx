import { useNavigate } from "react-router-dom";
import { UploadPfp } from "./UploadPfp";
import { useState, useEffect } from "react";

export function ProfilePage({image}){
    const [buttonClicked, setButtonClicked] = useState(false)
    const [imageExists, setImageExists] = useState(false)
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()   
        useEffect(()=>{
        if(!token){
            navigate("/")
        }

    },[])
    return <div style={{position:"relative", zIndex:3, height:"100%", width:"100%", display:"flex", justifyContent:"center"}}>
            <div style={{height:"250px", width:"100%", display:"block", alignItems:"center",justifyContent:"center", background:"white", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px", boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)"}} className="square-container">
                <div style={{height:"220px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <img style={{borderRadius:"50%", height:"180px", width:"180px", border:"2px solid #dadde1", objectFit:"cover", objectPosition:"center center", marginRight:"30px"}} src={image} alt="" />
                    <h1 style={{fontSize:30, marginTop:"60px"}}>Rahul Mishra</h1>
                </div>
                {imageExists ? 
                    <></> : 
                    <div style={{height:"30px", width:"100%", display:"flex", alignItems:"center",justifyContent:"center", paddingBottom:"10px"}} onClick={()=>{setButtonClicked(true)}}>
                    <button style={{width:"200px", fontSize:"16px", display:"flex", justifyContent:"space-between", alignItems:"center", height:"25px", border:"1px solid black", backgroundColor:"#dadde1", color:"black"}} className="postbutton">
                        <i className="camera"></i>
                        Upload Profile Photo</button>
                </div>}
            </div>
                {buttonClicked ? 
                    <div>
                        <div style={{position:"fixed", top:0, left:0, zIndex:5, width:"100%", height:"100%", backgroundColor: "rgba(255, 255, 255, 0.8)", display:"flex", justifyContent:"center", alignItems:"center"}}
                            onClick={()=>{setButtonClicked(!buttonClicked)}}>
                        </div>
                        <div style={{position:"fixed", top:"20%", left:"35%", zIndex:7}}>
                            <UploadPfp />
                        </div>
                    </div>
                     : <></>}
    </div>
}