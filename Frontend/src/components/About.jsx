import React from 'react'

function About() {
  return (
    <>
      <div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src="f1.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Siddharth Seth</h1>
                    <p className="py-6">Siddharth Seth is passionate about this project. <br></br>He leads our team with vision and determination, <br></br>also has the knowldge of coding, he provides <br></br>the codes about html & css.</p>
                    <button className="btn glass">Thank You
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" 
                        strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="f3.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Siddharth Shakya</h1>
                    <p className="py-6">Siddharth Shakya gives the idea to make this project <br></br> & provide images of articles and plays role of <br></br>helper for all group members.</p>
                    <button className="btn glass">Thank You
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" 
                        strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
