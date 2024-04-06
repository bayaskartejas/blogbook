import { useState, useRef } from "react";
import { Signup } from "./Signup";
import { useNavigate } from "react-router-dom"
import axios from "axios";
export function Signin() {
  const navigate = useNavigate()
  const idRef = useRef()
  const passwordRef = useRef()
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        event.preventDefault();
        setShowPopup(!showPopup);
    }
    const handleOverlayClick = (event) => {
        // Prevent closing when clicking on the overlay
        event.stopPropagation();
      };
    const handleSignin = (e) => {
      e.preventDefault();
      axios.post("https://blogbook-backend.vercel.app/signin", {
          id: idRef.current.value,
          password: passwordRef.current.value,
      })
      .then((res)=>{  
        navigate("/home")
        sessionStorage.setItem("token", res.data.token) 
        sessionStorage.setItem("username", res.data.username)
        sessionStorage.setItem("email", res.data.email)
        sessionStorage.setItem("name", res.data.name)
      })
      .catch((e)=>{
        alert(e)
      })
    }  
    return <div className="signincard">
        <form onSubmit={handleSignin} action="" className="signincardIn">
            <input type="text" id="username" placeholder="Email or Username" ref={idRef}/><br />
            <input type="password" id="password" placeholder="Password" ref={passwordRef}/><br />
            <button type="submit" id="login">Log in</button>
                <div className="line"></div>
            <h3 id="midtext">New to Blogbook ?</h3>
            <button id="newaccount" onClick={togglePopup}>Create new account</button>
        </form>

        {showPopup && (
        <div className="popupscreen">
          <div className="popup-overlay" onClick={handleOverlayClick}></div>
          <div className="popup">
            <div className="popup-content">
              <Signup setShowPopup={setShowPopup}/>
            </div>
          </div>
        </div>
      )}
    </div>
}