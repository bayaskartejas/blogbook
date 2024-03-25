export function PostMenu({saveStatus, setSaveStatus}){
    return <div>
        <div className="postmenu">
            <div style={{height:"40px", display:"flex"}} onClick={()=>{setSaveStatus(!saveStatus)}}>
                <div style={{height:"40px", width:"70%", paddingLeft:"20px", paddingTop:"15px"}}><h3 >Save post</h3></div>
                {saveStatus ? 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256" style={{marginTop:"4px"}}
                >
                  <g fillOpacity="0" fill="#dddddd" fillRule="nonzero">
                    <path d="M0,256v-256h256v256z" id="bgRectangle" />
                  </g>
                  <g fill="none" fillRule="nonzero" stroke="#353535" strokeLinejoin="round">
                    <path
                      transform="scale(8.53333,8.53333)"
                      d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z"
                      fill="#353535"
                    />
                    <g transform="scale(8.53333,8.53333)" fill="#ffffff">
                      <path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" />
                    </g>
                  </g>
                </svg> : 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256" style={{marginTop:"4px"}}
                >
                  <g fillOpacity="0" fill="#dddddd" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <path d="M0,256v-256h256v256z" id="bgRectangle" />
                  </g>
                  <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <path
                      transform="scale(8.53333,8.53333)"
                      d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z"
                      id="strokeMainSVG"
                      fill="#070505"
                      stroke="#070505"
                      strokeLinejoin="round"
                    />
                    <g transform="scale(8.53333,8.53333)" fill="#090909" stroke="none" strokeLinejoin="miter">
                      <path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" />
                    </g>
                  </g>
                </svg>
                }
            </div>
            <div className="line" style={{margin:0}}>
            </div>
            <div style={{height:"40px", display:"flex"}}>
             <div style={{height:"40px", width:"70%", paddingLeft:"20px", paddingTop:"15px"}}><h3>Delete Post</h3></div>
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30" style={{marginTop:"4px"}}
            >
                <path
                d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                fill="#000000"
                />
            </svg>
            </div>
        </div> 
    </div>

}