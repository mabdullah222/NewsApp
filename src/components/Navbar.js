import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
        <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-a active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-a active mx-2" aria-current="page" to="/Bus">Buisness</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-a active mx-2" aria-current="page" to="/ent">Entertainment</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-a mx-2" to="/sports">Sports</Link>
            <Link className="nav-a mx-2" to="/technology">Technology</Link>
            <Link className="nav-a mx-2" to="/health">Health</Link>
            <Link className="nav-a mx-2" to="/science">Science</Link>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>
    </div>
    )
  }
}

export default Navbar
