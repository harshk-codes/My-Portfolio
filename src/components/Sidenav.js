import React from "react";
export default function Sidenav() {
  return (
    <>
      <div className="navbar">
        <div className="upper-nav">
          <a href="/">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="middle-nav">
          <ul className="nav-list">
            <li className="middle-icons">
              <a className="about" href="/about">
                <i className="fa-regular fa-address-card"></i>
              </a>
              <div className="hover-info1">
                <h4>About me</h4>
                <span className="span1"></span>
              </div>
            </li>
            <li className="middle-icons">
              <a className="projects" href="/projects">
                <i className="fa-sharp fa-solid fa-flask-vial"></i>
              </a>
              <div className="hover-info2">
                <h4>Projects</h4>
                <span className="span2"></span>
              </div>
            </li>
            <li className="middle-icons">
              <a className="blogs" href="#hashnodeLinkOfMyBlogs">
                <i className="fa-brands fa-blogger-b"></i>
              </a>
              <div className="hover-info3">
                <h4>Blogs</h4>
                <span className="span3"></span>
              </div>
            </li>
            <li className="middle-icons">
              <a className="contact" href="/">
                <i className="fa-solid fa-address-book"></i>
              </a>
              <div className="hover-info4">
                <h4>Contact me</h4>
                <span className="span4"></span>
              </div>
            </li>
          </ul>
        </div>
        <div className="lower-nav">
          <ul>
            <li>
              <a href="https://github.com/harshk-codes">
                <i className="fa-brands fa-github github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/harshk_t">
                <i className="fa-brands fa-twitter twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/harshk_t">
                <i className="fa-brands fa-linkedin linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/harshk_t">
                <i className="fa-brands fa-instagram instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
