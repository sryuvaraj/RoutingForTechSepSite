import React from 'react'
import SideBarProj from './SideBarProj'
import ContenProj from '../ContenProj'
import Presseure from '../Presseure'
import Skid from '../Skid'
import HPCU from '../HPCU'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

const Projects = () => {
  return (
    <>
    <div className='row'>
      <div className='col-md-3'>
      <div className="" style={{ backgroundColor: "#a3a29a",height:"85vh" }}>
        <div>
          <SideBarProj />
        </div>
      </div>
      </div>
      <div className='col-md-9' style={{ backgroundColor: "rgb(105,111,117)",height:"85vh",overflow:"auto" }}>
      <Outlet />
      </div>
    </div>
    </>
  )
}

export default Projects