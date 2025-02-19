import React from 'react';
export default function Header() {
  return (
    <div
      id="header"
      className="text-center text-white p-3"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        backgroundColor: '#333',
        width: '20%',
        minWidth: '200px',
      }}
    >
      <div className="d-flex justify-content-center my-4">
        <img
          className="rounded-circle"
          src="vicky.jpg"
          alt="logo"
          height="100"
          width="100"
        />
      </div>
      <h2 className="text-white">VIGNESH</h2>
      <nav className="mt-4">
        <button
          className="navbar-toggler d-none text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list fs-1"></span>
        </button>
        <div className="collapse d-sm-block" id="menu">
          <ul className="list-unstyled mt-4">
            <li className="my-3">
              <a href="#home" className="text-white text-decoration-none">
                <i className="fa-solid fa-house p-2"></i> Home
              </a>
            </li>
            <li className="my-3">
              <a href="#about" className="text-white text-decoration-none">
                <i className="fa-solid fa-user p-2"></i> About
              </a>
            </li>
            <li className="my-3">
              <a href="#Skills" className="text-white text-decoration-none">
                <i className="fa-regular fa-file p-2"></i> Skills
              </a>
            </li>
            <li className="my-3">
              <a href="#projects" className="text-white text-decoration-none">
                <i className="fa-solid fa-book p-2"></i> Projects
              </a>
            </li>
            <li className="my-3">
              <a href="#contact" className="text-white text-decoration-none">
                <i className="fa-solid fa-phone p-2"></i> Contact
              </a>
            </li>
            <div className='icons d-flex flex-wrap gap-md-3'>
            <div className='ico'>
            <i class="bi bi-envelope"></i>
            </div>
            <div className='ico'>
            <a href='https://github.com/vignesh333948'><i class="bi bi-github"></i></a>
            
            </div>
            <div className='ico'>
            <i class="bi bi-linkedin"></i>
            </div>
            <div className='ico'>
            <i class="bi bi-instagram"></i>
            </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
