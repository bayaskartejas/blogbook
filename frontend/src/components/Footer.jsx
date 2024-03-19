export function Footer(){
    return <div className="footer-container">
        <div className="footer">
            <div className="footerIn">
                <div className="credits">
                    <div style={{display:"inline-block",lineHeight:2}}>This Project is created by :</div> <div style={{display:"inline-block", wordSpacing: "5px"}}>Tejas Bayaskar | Anjali Bamnote | Adesh Wasane</div>
                </div>
                <div style={{paddingLeft: "17px",}}>
                    <div style={{display:"inline-block"}}>These are the dependencies of our Project:</div> <div style={{display:"inline-block", wordSpacing: "5px"}}>Express | Cors | Jsonwebtoken | Body-parser | Mongoose | Zod | React | React-router-dom</div>
                </div>
                <div className="line"></div>
                <div className="links">
                    <div style={{marginBottom:"10px"}}> Blogbook © 2024</div>
                    <div style={{lineHeight: 2}}>Link to our Social Handles</div>
                        <div className="socials">
                        <div style={{display: "inline-block", marginRight:"40px"}}>
                        Instagram :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div>
                        <div style={{display:"inline-block", marginRight:"40px"}}>
                        LinkedIn :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div>
                        <div style={{display:"inline-block", marginRight:"40px"}}>
                        Twitter :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div> 
                        <div style={{display:"inline-block"}}>
                        GitHub :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div>                             
                        </div>

                </div>
                <div className="endcredits"></div>
            </div>
        </div>
    </div>
}