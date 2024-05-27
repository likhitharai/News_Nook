// import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Nook</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {/* <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li> */}
      </ul>
      <span className="navbar-text">
      Stay informed with our news app.
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
