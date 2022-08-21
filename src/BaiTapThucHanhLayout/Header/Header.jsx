import React, { Component } from 'react'
import '../StyleComponent/style.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className='container'>
          <a className="navbar-brand font-weight-bold" href="#">Start Bootstrap</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav1" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          </div>
          
        </nav>
        </header>
     
       
      </div>

    )
  }
}
