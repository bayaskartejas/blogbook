export function Footer(){
    return <div className="footer-container">
        <div className="footer">
            <div className="footerIn">
                <div className="creditfooter">
                    <div>
                        <div className="credits">This Project is created by :</div> <div className="credits">Tejas Bayaskar | Anjali Bamnote | Adesh Wasane</div>
                        <div >
                        <div  className="credits">These are the dependencies of our Project:</div>
                        <div className="credits">Express | Cors | Jsonwebtoken | Body-parser | Mongoose | Zod | React | React-router-dom</div>
                        </div>
                    </div>

                </div>

                <div className="linediv">
                    <div id="line"></div>
                </div>

                <div className="links">
                    <div style={{paddingBottom:"10px"}}> Blogbook © 2024</div>
                    <div className="credits">Link to our Social Handles</div>
                        <div className="socials">
                        <div className="credits">
                        Instagram :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div>
                        <div className="credits" style={{marginLeft:"20px"}}>
                        LinkedIn :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div>
                        <div className="credits" style={{marginLeft:"20px"}}>
                        Twitter :
                        <a href="">Tejas</a>
                        <a href="">Anjali</a>
                        <a href="">Adesh</a>
                        </div> 
                        <div className="credits" style={{marginLeft:"20px"}}>
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