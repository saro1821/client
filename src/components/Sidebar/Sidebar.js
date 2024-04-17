import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import { useStateValue } from '../ContextApi/StateProvider'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material'
import SidebarChat from '../SidebarChat/SidebarChat'
import axios from "axios"
import Pusher from "pusher-js"

const Sidebar = () => {
    const[{user}]=useStateValue()
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/all/rooms").then((response)=>{
            setRooms(response.data)
        })
    },[])

    useEffect(()=>{
        const pusher = new Pusher('447efe6e46f90442685e', {
            cluster: 'ap2'
          });
          const channel = pusher.subscribe('room');
          channel.bind('inserted', function(room) {
            setRooms((prevRooms)=>[...prevRooms,room])
          });
    },[])
    
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar
            src={user.photoURL}/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLarge/>
                </IconButton>
                <IconButton>
                    <Chat/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='search or start the chat'/>
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat addNewChat/>
            {
                rooms.map((room)=>(
                <SidebarChat key={room._id} id={room._id} name={room.name}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default Sidebar