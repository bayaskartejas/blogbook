import Header from "./Header"
import CreatePost from "./CreatePost"
import Sidebar from "./Sidebar"
import {Post} from "./Post"
import HomeFooter from "./HomeFooter"
export function Homepage(){
    let name = "Tejas Bayaskar"
    let time ="20:12"
    let blogtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem vitae, distinctio laborum non sint veniam impedit ipsum unde quam, ea necessitatibus qui et? Debitis ullam adipisci quisquam nesciunt eligendi."
    return <div className="homepage">
        <Header></Header>
        {/* <Sidebar></Sidebar> */}
        <div className="feed">
                <CreatePost name={name}></CreatePost>    
                <Post name={name} time={time} blogtext={blogtext}></Post>               
        </div>
        {/* <HomeFooter></HomeFooter> */}

    </div>
}