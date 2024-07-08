import BLOGBOOK from "../assets/BLOGBOOK.png"
import { Signin } from "./Signin"
export function MainContainer(){
    return <div className="w-full h-svh absolute top-0 flex justify-center content-center items-center">
            <div className="md:flex grid justify-center items-center w-max h-max mb-10">
                <div className="md:w-2/4 h-max">
                    <div className="h-full flex justify-center md:block">
                        <img className="md:h-44 sm:h-36 h-32" src={BLOGBOOK} alt="" />                
                    </div>
                    <h2 className="text-2xl ml-5 text-wrap font-normal my-8 hidden md:flex">Blogbook helps you connect and share with the people in your life.</h2>
                </div>
                <div className="mx-4">
                    <div className="signin-in">
                        <div className="signin-form">
                            <Signin />
                        </div>
                        <div className="signin-footer justify-center flex mt-4">
                            <h3>Unite, Share, Ignite, <strong>Connect!</strong></h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}