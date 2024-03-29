export function Caution({cautionName}){
    return <div style={{width:"100%", height:"100%", backgroundColor: "rgba(255, 255, 255, 0.8)", zIndex:6, position:"absolute", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="caution">
            <h1 style={{width:"100%", display:"flex", justifyContent:"center"}}>Do you really want to {cautionName} ?</h1>
            <div style={{display:'flex', justifyContent:"space-around", alignItems:"center", marginTop:"30px"}}>
                <button className="yesButton">Yes</button>
                <button className="noButton">No</button>                
            </div>

        </div>
    </div>
}