import React, { Component } from 'react'
import './App.css'
import './navBar.css'

class NavBar extends Component {
   render() {
      return (
         <div class="navBar-container">
            <div class="navBar-about">
               About Me
            </div>
            <div class="navBar-projects">
               Projects
            </div>
            <div class="navBar-other">
               Other Stuff
            </div>
         </div>
      )
   }
}
export default NavBar