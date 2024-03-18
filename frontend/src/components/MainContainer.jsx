import BLOGBOOK from "../assets/BLOGBOOK.png"
import { Signin } from "./Signin"
export function MainContainer(){
    return <div className="main-container">
        <div className="content-container">
            <div className="logotextdiv">
                <div className="logodiv">
                    <img className="logo" src={BLOGBOOK} alt="" />                
                </div>
                <h2 className="slogan">Blogbook helps you connect and share with the people in your life.</h2>
            </div>
            <div className="signin-container">
                <div className="signin-in">
                    <div className="signin-form">
                        <Signin />
                    </div>
                    <div className="signin-footer">
                        <h3>Unite, Share, Ignite, <strong>Connect!</strong></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
}