export function Footer(){
    return <div className="md:flex md:fixed md:bottom-0 md:h-28 md:w-full md:bg-white md:pt-4 hidden">
        <div className="w-full h-full fixed flex justify-center">
            <div className="justify-center flex text-center w-full text-zinc-600 text-xs tracking-wide">
                <div className="">
                    <div className="">
                        <div className="credits leading-4">This Project is created by :</div> <div className="credits">Tejas Bayaskar</div>
                        <div >
                        <div  className="credits leading-4">These are the dependencies of my Project:</div>
                        <div className="credits leading-4">Express | Cors | Tailwind | Jsonwebtoken | Body-parser | Mongoose | Zod | React | React-router-dom | Nodemailer | Otp-generator</div>
                        </div>
                        <div> Blogbook © 2024</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}