import React from 'react'
import SideBar from '../compnent/sidenav/SideBar'
import MainContent from './mainContent'

export default function MainRouteContent() {
  return (
    <div id="wrapper" className='d-flex flex-column' >
      <div><SideBar /></div>
      <div className='maincontent-left' ><MainContent /></div>
    </div>
  )
}
  