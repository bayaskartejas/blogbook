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
    return <div className="bg-white shadow-xl h-max w-max rounded-lg">
        <form onSubmit={handleSignin} action="" className="block text-center py-4">
            <input className="sm:mx-4 h-12 mb-3 rounded-md border border-gray-200 text-sm pl-3 py-4 sm:w-88 w-72 placeholder:text-gray-500 font-normal tracking-wide placeholder:text-sm" type="text" id="username" placeholder="Email or Username" ref={idRef}/><br />
            <input className="sm:mx-4 h-12 mb-3 rounded-md border border-gray-200 text-sm pl-3 py-4 sm:w-88 w-72 placeholder:text-gray-500 font-normal tracking-wide placeholder:text-sm" type="password" id="password" placeholder="Password" ref={passwordRef}/><br />
            <button className="sm:mx-4 mx-3 bg-blog-500 rounded-md text-lg py-3 mt-3 mb-5 text-white sm:w-88 w-72 font-bold tracking-wide hover:bg-blog-600" type="submit" id="login">Log in</button>
                <div className="border border-b-blog-700 w-full"></div>
                <div className="mt-4">
                  <h3 id="midtext">New to Blogbook ?</h3>
                  <button className="mt-4 mb-4   bg-blog-800 rounded-md text-lg leading-10 text-white sm:w-52 w-48 h-12 hover:bg-blog-900 font-bold tracking-wide" id="newaccount" onClick={togglePopup}>Create new account</button>
                </div>

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