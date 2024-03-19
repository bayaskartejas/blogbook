import { useState } from "react";
import { Signup } from "./Signup";
export function Signin() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        event.preventDefault();
        setShowPopup(!showPopup);
    }
    const handleOverlayClick = (event) => {
        // Prevent closing when clicking on the overlay
        event.stopPropagation();
      };
    return <div className="signincard">
        <form action="" className="signincardIn">
            <input type="text" id="username" placeholder="Email or Username"/><br />
            <input type="password" id="password" placeholder="Password"/><br />
            <button id="login">Log in</button>
            <div className="line"></div>
            <h3 id="midtext">New to Blogbook ?</h3>
            <button id="newaccount" onClick={togglePopup}>Create new account</button>
        </form>

        {showPopup && (
        <div>
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