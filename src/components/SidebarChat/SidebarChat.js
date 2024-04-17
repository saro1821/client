import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const SidebarChat = ({addNewChat,name,id}) => {
    const[seed,setSeed] =useState("")

useEffect(()=>{
setSeed(Math.floor(Math.random() * 5000))
},[])

const createChat =async()=>{
  const roomName = prompt("please enter name for the group")
  if(roomName){
    try {
      await axios.post("http://localhost:5000/group/create",{
    groupName:roomName})
    } catch (error) {
      console.log(error);
    }
  }
}
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
        <Avatar 
  src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${seed}`}
  alt="avatar"
/>
<div className='sidebarChat__info'>
    <h2>{name}</h2>
</div>
    </div>
    </Link>
  ):(
    <div className='sidebar__chats' onClick={createChat}>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat