import React from 'react'
import "../Home/Home.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <section className='home'>

      <div className='upper-home'>
        <div className='home-content'>
          <h3>Hi, I'm</h3>
          <h1>Salami Matthew</h1>
          <h3>And I'm a <span>
            <Typewriter
              words={['Full-stack Developer', 'Mechanical Engineer', 'Audio Engineer']}
              loop={0}
              cursor
              cursorStyle='_'
              cursorBlinking
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span></h3>

          <p className='about-me'>I'm a mechanical engineer, a react developer and an audio engineer. Click the button below to download my CV and feel free to contact me for work or more information.</p>

          <div className='social-icons'>
            <a target='_blank' href='https://www.instagram.com/salamiitheking/' style={{ "--i": 4 }}><InstagramIcon /></a>
            <a target='_blank' href='https://twitter.com/salamiitheking' style={{ "--i": 5 }}><TwitterIcon /></a>
            <a target='_blank' href='https://github.com/salami-matthew' style={{ "--i": 6 }}><GitHubIcon /></a>
          </div>
          <a target='_blank' href='https://drive.google.com/file/d/1NKKBdS16mKyMUo-iakIGzkKyWxY20jfN/view' className='contact-btn'>Download CV</a>
        </div>

        <div className='avatar-container'>
          <img className='avatar' src='./coding.gif' alt='code-gif' />
        </div>
      </div>

      <div className='skills'>
        <h1>My Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h3>Front-End</h3>
            <span>Html, CSS, Bootstrap, JavaScript, jQuery, ReactJS</span>
          </li>
          <li className='item'>
            <h3>Back-End</h3>
            <span>NodeJS, Express, MongoDB, Firebase</span>
          </li>
        </ol>
      </div>

    </section>
  )
}

export default Home