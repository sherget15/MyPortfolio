import './App.css';
import siReact from 'simple-icons/icons/react';
import Icon, { CssThree, Express, Github, Gmail, Html5, Javascript, Linkedin, Microsoftsqlserver, Mongodb, Nodedotjs, Postgresql, ReactJs, Ruby, Rubyonrails, Sequelize } from '@icons-pack/react-simple-icons';
import { yellow } from '@material-ui/core/colors';
import React from 'react';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <header>

      <div className='left-header'>
        <a href='#home-section'>Home</a>
        <a href='#about-section'>About</a>
        <a href='#skills-section'>Skills</a>
        <a href='#projects-section'>Projects</a>
        <a href='#contact-section'>Contact</a>
        <a href="https://drive.google.com/file/d/12eubGP6CUOvsSOBZn9Wr0PwPNU2fMEOd/view?usp=sharing" download alt=' ' rel='noopener' target="_blank">Resume</a>
        {/* <a href="StephenHerget_Resume_2021.09.17x.pdf" download alt=' ' rel='noopener' target="_blank">Resume</a> */}
      </div>

        <div className='right-header'>
          
          <div className='github-header'>
            <a className='github-link' href='https://github.com/sherget15'>
              <Github className='gh1' color='white' size={45} />
            </a>
          </div>
          
          <div className='linkedin-header'>
            <a className='linkedin-link' href='https://www.linkedin.com/in/stephen-a-herget-50522942/'>
              <Linkedin className='l1' color='#0e76a8' size={45} />
            </a>
          </div>

          <div className='gmail-header'>
            <a className='gmail-link' href='mailto:herget06@gmail.com'>
              <Gmail className='g1' color='red' size={45} />
            </a>
          </div>

        </div>

      </header>


      <section className='home' id='home-section'>
        <div className='second-home'>
        <h1>Hello, my name is <span className='span-b1'>&lt;Stephen&gt;</span> Herget.</h1>
        <h2>I'm a web developer.</h2>
        </div>
      </section>


      <section className='about-me' id='about-section'>
        <div className='about-me2'>
          <h1>ABOUT ME</h1>
          <h2>I'm a detail oriented full-stack software developer driven by knowledge, collaboration, and problem solving. I apply vision, innovation, and a creative perspective in all environments with a focus on timely, cost effective, and quality final project/product delivery. I always enjoy new challenges, and equally enjoy looking for new creative approaches to challenges.</h2>
        </div>
      </section>


      <section className='skills' id='skills-section'>
        
        <div className='skills-top'></div>

        <div className='skills-div'>
          <div className='skills-title'>
          <h1>SKILLS</h1>
          <br />
          </div>

          <div className='skills-logos'>
          <div><Html5 color='#e34c26' size={70} /><h4>HTML5</h4></div>
          <div><Javascript color='#f0db4f' size={70} /><h4>Javascript <h4 className='es6'>ES6</h4></h4></div>
          <div><CssThree color='#264de4' size={70} /><h4>CSS3</h4></div>
          <div><Ruby color='#cc0000' size={70} /><h4>Ruby</h4></div>
          <div><Rubyonrails color='#CC0000' size={70} /><h4>Ruby On Rails</h4></div>
          <div><ReactJs color='#61DBFB' size={70} /><h4>REACT</h4></div>
          <div><Nodedotjs color='#68a063' size={70} /><h4>Node.JS</h4></div>
          <div><Express color='#000000' size={70} /><h4>Express</h4></div>
          <div><Mongodb color='#47A248' size={70} /><h4>MongoDB</h4></div>
          <div><Microsoftsqlserver color='#CC2927' size={70} /><h4>SQL</h4></div>
          <div><Postgresql color='#4169E1' size={70} /><h4>PostgreSQL</h4></div>
          </div>

        </div> 

        <div className='skills-bottom'></div>

      </section>


      <section className='projects' id='projects-section'>
        <div className='projects-div'>
          <h1>RECENT PROJECTS</h1>
          <a className='p1-link' href='https://sherget15.github.io/Cocktail-Connoisseur/'><img className='p1-img' src='https://i.imgur.com/smBirji.jpg'></img></a>
          <a className='p2-link' href='https://p2-zengarden.netlify.app'><img className='p2-img' src='https://i.imgur.com/cwySkeU.jpg'></img></a>
          <a className='p3-link' href='https://playlistify4real.netlify.app/'><img className='p3-img' src='https://i.imgur.com/Y7Dr5jD.jpg'></img></a>
        </div>
      </section>


      <section className='contact'>
        <div className='contact-div'>

          <h1>CONTACT ME</h1>
          <div className='contact-form' id='contact-section'>
            <div className='github-div'><a className='github-link2' href='https://github.com/sherget15'><Github color='white' size={75} /></a></div>
            <div className='linkedin-div'><a className='linkedin-link2' href='https://www.linkedin.com/in/stephen-a-herget-50522942/'><Linkedin color='#0e76a8' size={75} /></a></div>
            <div className='gmail-div'><a className='gmail-link2' href='mailto:herget06@gmail.com'><Gmail color='red' size={75} /></a></div>
          </div>

        </div>
      </section>


    </div>
  );
}

export default App;
