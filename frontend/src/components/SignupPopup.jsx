import { useState } from "react";
import { Signup } from "./Signup";
export function SignupPopup(){
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    return <div className="signup-popup-container">
            <button onClick={togglePopup}>Create Account</button>
            {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <h2>Sign Up</h2>
                    <button onClick={togglePopup}>Close</button>
                </div>
            </div>
        )}
        </div>
}