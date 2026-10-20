
import { useState } from 'react'
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [dropdownAberto, setDropdownAberto] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Affinity
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-controls="navbarDarkDrawer"
            aria-expanded={menuAberto}
            aria-label="Alternar navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuAberto ? 'show' : ''
            }`}
            id="navbarDarkDrawer"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Produto
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Descubra
                </a>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  onClick={() => setDropdownAberto(!dropdownAberto)}
                  aria-expanded={dropdownAberto}
                >
                  Ajuda
                </button>

                <ul
                  className={`dropdown-menu ${
                    dropdownAberto ? 'show' : ''
                  }`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
          
            </ul>

            <form
              className="d-flex gap-2"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-light"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
        <section class className="hero-content">
                <h1>
                  Criativamente
                </h1>
              
              </section>
    </>
  )
}

export default App
