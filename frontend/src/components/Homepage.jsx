import Header from "./Header"
import CreatePost from "./CreatePost"
import {Sidebar} from "./Sidebar"
import {Post} from "./Post"
import HomeFooter from "./HomeFooter"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export function Homepage(){
    const navigate = useNavigate()
    let token = sessionStorage.getItem("token")

    useEffect(()=>{
        if(!token){
            navigate("/")
        }

    },[])

    return <div className="homepage">
        <Header></Header>
        <div className="feed" style={{zIndex:0, position:"absolute", width:"100%"}}>
                <Sidebar />
                <CreatePost name={name}></CreatePost>    
                <Post></Post>               
        </div>
        <div className="menudiv" style={{height:"max-content", width:"200px", border:"1px solid black", zIndex:1, marginLeft:"700px", paddingLeft:"10px"}}>
        </div>

    </div>
}