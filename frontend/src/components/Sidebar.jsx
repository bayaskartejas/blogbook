import React from 'react'
import bwhite from "../assets/b-white.png"
import person from "../assets/person.png"
import { useNavigate } from "react-router-dom"
export function Sidebar() {
  const navigate = useNavigate()
  return (
    <div style={{width:"250px", height:"max-content", zIndex:1, position:"fixed", marginTop:"70px", marginLeft:"10px"}}>
      <div className='icons'><img src={person} className='icon3' style={{border:"1px solid black"}}></img><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"600"}}>{sessionStorage.getItem("username")}</div></div>
      <div className='icons'><div className='icon2'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Find Friends</div></div>
      <div className='icons'><img src={bwhite} className='icon3'></img><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Welcome</div></div>
      <div className='icons'><div className='icon4'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Memories</div></div>
      <div className='icons'><div className='icon5'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Saved</div></div>
      <div className='icons'><div className='icon6'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Groups</div></div>
      <div className='icons'><div className='icon7'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Marketplace</div></div>
      <div className='icons'><div className='icon8'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Feeds</div></div>
      <div className='icons'><div className='icon9'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Events</div></div>
      <div className='icons'><div className='icon10'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Ads Manager</div></div>
      <div className='icons'><div className='icon11'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Fundraisers</div></div>
      <div className='icons' onClick={()=>{navigate("/ts")}}><div className='icon12'></div><div style={{marginLeft:"15px", fontSize:"14px", fontWeight:"400"}}>Technostream</div></div>
    </div>
  )
}