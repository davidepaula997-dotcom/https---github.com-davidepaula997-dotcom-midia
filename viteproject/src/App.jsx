import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() { 
  const [count, setCount] = useState(0)
  return (
    <>
     <nav className="navbar md:navbar-expand bg-1" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dark navbar</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDarkDrawer" aria-controls="navbarDarkDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabindex="-1" id="navbarDarkDrawer" aria-labelledby="navbarDarkDrawerLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarDarkDrawerLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body mb-2 md:mb-0">
        <ul className="nav navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
              Menu
            </button>
            <div className="menu">
              <a className="menu-item" href="#">Action</a>
              <a className="menu-item" href="#">Another action</a>
            
              <a className="menu-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="hstack gap-2" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn-solid btn-icon theme-secondary" type="submit">
            <svg className="bi" width="16" height="16"><use href="#search" /></svg>
          </button>
        </form>
      </div>
    </dialog>
  </div>
</nav>
    </>
  )
}


 

export default App
