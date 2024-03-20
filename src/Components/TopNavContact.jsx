import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const TopNavContact = () => {
    const aLink = {
        textDecoration:"none",
        color:"white",
        borderLeft:"2px solid white"
    }
  return (
    <>
    <div>
        <div className='py-1' style={{display:'flex', justifyContent:"flex-end", backgroundColor:"rgb(28,70,108)", fontSize:"18px"}}>
            <a href='#' style={aLink}><p className='px-3'><MdOutlineMail  size={20}/> sales@techsepengg.com</p></a>
            <a href='#' style={aLink}><p className='px-3'><FaPhone /> Singapore +65 6265 7215</p></a>
            <a href='#' style={aLink}><p className='px-3'><FaPhone /> India +91 44 26810358</p></a>
        </div>
    </div>
    </>
  )
}

export default TopNavContact