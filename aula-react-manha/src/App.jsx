import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF26xG5hXb9C8x45HlpeFviZz2_389ZfHCq_FQURtHg&s=10"
                alt="Logo Instagram" height="30" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider"></hr>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div class="container">
          <div class="row" id="linha-do-perfil">
            <div class="col-12 col-sm-4 p-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTywlpSeyHRdlnPs3iBdHd-wi1WMrXr7k5CImwDKB4Q&s=10"
                alt="foto de perfil" class="img-fluid rounded-circle" />
            </div>
            <div class="col-12 col-sm-8 p-5 d-flex flex-column justify-content-evenly">
              <div>
                <h1>Davi de Paula</h1>
                <h5>Desenvolvedor Fullstack Sênior</h5>
              </div>
              <div class="d-flex justify-content-between">
                <div>19 posts</div>
                <div>365 seguidores</div>
                <div>8 seguindo</div>
              </div>
            </div>
          </div>
          <div class="row text-center overflow-x-auto flex-nowrap" id="linha-dos-destaques">
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>
            <div class="destaque col-6 col-sm-4 col-md-3 col-lg-2">
              <img src="https://i.pinimg.com/736x/13/6f/37/136f37d9873bbbddaf5e25cd3a74859b.jpg"
                alt="foto de destaque" class="img-fluid rounded-circle img-thumbnail" />
              <p class="mt-3">destaque 1</p>
            </div>

          </div>
        </div>
        <div id="linha-do-feed"></div>
        <ul class="nav nav-pills mb-3 justify-content-evenly" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
              aria-selected="true">Feed</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
              data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
              aria-selected="false">Reels</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
              data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
              aria-selected="false">Marcados</button></li>
        </ul>
        <div class="tab-content" id="pills-tabContent"></div>
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
          tabindex="0">
          <div id="feed" class="row g-1">
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
            <img src="https://avatarfiles.alphacoders.com/376/thumb-1920-376048.png" alt="Post"
              class="img-fluid col-6 col-sm-4 col-md-3" />
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
          tabindex="0"></div>
        <div id="Reels" class="row g-1">
          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />
          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

          <img src="https://i.pinimg.com/736x/ca/1c/74/ca1c74780f1d3789e0fc21f40b1d0b98.jpg" alt="Post"
            class="img-fluid col-6 col-sm-4 col-md-3" />

        </div>


        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
          tabindex="0"> </div>


        <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
          tabindex="0"><div></div>
        </div>


      </main>
      <footer>

      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous">

      </script>

    </>
  )
}

export default App
