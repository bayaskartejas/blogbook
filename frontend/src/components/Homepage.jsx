import Header from "./Header"
import CreatePost from "./CreatePost"
import Sidebar from "./Sidebar"
import {Post} from "./Post"
import HomeFooter from "./HomeFooter"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Homepage(){
    const navigate = useNavigate()
    let name = "Tejas Bayaskar"
    let time ="20:12"
    let blogtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem vitae, distinctio laborum non sint veniam impedit ipsum unde quam, ea necessitatibus qui et? Debitis ullam adipisci quisquam nesciunt eligendi."
    let token = sessionStorage.getItem("token")
    useEffect(()=>{
        if(!token){
            navigate("/")
        }

    },[])

    return <div className="homepage">
        <Header></Header>
        <div className="feed">
                <CreatePost name={name}></CreatePost>    
                <Post></Post>               
        </div>
        {/* <HomeFooter></HomeFooter> */}

    </div>
}