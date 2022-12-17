import React from 'react'
export default function Homepage() {
  return (
    <>
      <div className="main">
        <div className="section-1">
          <div className="heading">
            <h1>
              <span>H</span>
              <span>e</span>
              <span>y</span>
              <span>,</span> <span>I</span>
              <span>'</span>
              <span>m</span> <span>H</span>
              <span>a</span>
              <span>r</span>
              <span>s</span>
              <span>h</span>
              <span>.</span>
            </h1>
            <h1>
              <span>T</span>
              <span>h</span>
              <span>i</span>
              <span>s</span> <span>i</span>
              <span>s</span> <span>m</span>
              <span>y</span> <span>P</span>
              <span>o</span>
              <span>r</span>
              <span>t</span>
              <span>f</span>
              <span>o</span>
              <span>l</span>
              <span>i</span>
              <span>o</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </h1>
          </div>

          <div className="description">
            <div className="upper">
              <img src="/images/profile.png" alt="profile" />
              <h1>Me in Brief:</h1>
            </div>
            <div className="bottom">
              <div className="info">
                <p>
                  I develop <b>MERN</b> websites and getting better at it. A
                  "freshmen" exploring the world of computer science and{" "}
                  <b>Open-Source</b>. Wishing to be a <b>DevOps</b> engineer. I
                  like creating Pixel art, gaming and playing piano.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="review-div">
            <div className="review">
              <h2>Review me👇</h2>
              <label htmlFor="name">Name: </label>
              <input type="text" className="name" />
              <textarea name="reaction" className="reaction" rows="10"></textarea>
            </div>
          </div>

          <div className="astro-div">
            <img className="astro" src="/images/Astron.png" alt="astronaut" />
          </div>
        </div>
      </div>
    </>
  );
}
