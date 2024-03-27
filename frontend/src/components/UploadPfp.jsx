import { useState } from "react";
export function UploadPfp(){
    const [image, setImage] = useState("")
    function convertToBase64(e){
        console.log(e);
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result)
        }
        reader.onerror = error => {
            console.log(error);
        }
    }
    return <div className="imgupload">
            <div style={{height:"100px"}}>
                <h1 style={{paddingLeft:"10px"}}>Let's upload your profile picture</h1>
                <h3 style={{color: "#606770", fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",fontSize: "15px", lineHeight: "24px", paddingLeft:"10px"}}>Please choose a square (1:1) photo.</h3>
                <input style={{paddingLeft:"10px", paddingTop:"10px", paddingBottom:"1px"}} className="uploadbutton" accept="image/" type="file" onChange={convertToBase64} />
            </div>
            <div style={{margin:"0"}} className="line"></div>    
            <div style={{height:"250px", width:"500px", display:"flex", justifyContent:"center", marginTop:"10px"}} className="square-container">
                <img style={{borderRadius:"50%", height:"250px", width:"250px", border:"2px solid #dadde1", objectFit:"cover", objectPosition:"center center"}} src={image} alt="" />
            </div>
            <div style={{width:"100%", marginTop:"20px", justifyContent:"center", display:"flex"}}>
                <button style={{width:"30px"}} className="signupbutton">Done</button>
            </div>
        </div>
}