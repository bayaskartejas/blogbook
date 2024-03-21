import Header from "./Header"
import CreatePost from "./CreatePost"
import Sidebar from "./Sidebar"
import Post from "./Post"
import HomeFooter from "./HomeFooter"
export function Homepage(){
    let name = "tejas"
    return <div>
        <Header></Header>
        <CreatePost name={name}></CreatePost>
        {/* <Sidebar></Sidebar> */}
        {/* <div className="feed">
            <Post></Post>
        </div> */}
        {/* <HomeFooter></HomeFooter> */}

    </div>
}