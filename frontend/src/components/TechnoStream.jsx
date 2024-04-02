import Header from "./Header"
import { Sidebar } from "./Sidebar"
export function TechnoStream() {
    return <div style={{width:"100%", height:"100%"}}>
        <Header />
        <Sidebar />
        <div style={{height:"100%",width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h2 style={{color:"grey"}}>No Content Yet</h2>
        </div>
    </div>
}