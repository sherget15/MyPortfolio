import './App.css';
import siReact from 'simple-icons/icons/react';
import Icon, { Github, Gmail, Linkedin, ReactJs } from '@icons-pack/react-simple-icons';

function App() {
  return (

    <div className="App">

      <header>

        <div className='left-header'>
          <h6>Home</h6>
          <h6>About Me</h6>
          <h6>Projects</h6>
          <h6>Contact</h6>
          <h6>Resume</h6>
        </div>

        <div className='middle-header'></div>

        <div className='right-header'>
          <div className='github-div'>
            <a className='github-link' href='https://github.com/sherget15'>
              <Github color='white' size={45} />
            </a>
          </div>
          
          <div className='linkedin-div'>
            <a className='linkedin-link' href='https://www.linkedin.com/in/stephen-a-herget-50522942/'>
              <Linkedin color='#0e76a8' size={45} />
            </a>
          </div>

          <div className='gmail-div'>
            <a className='gmail-link' href='mailto:herget06@gmail.com'>
              <Gmail color='red' size={75} />
            </a>
          </div>

        </div>

      </header>

      <section className='home'>
        {/* <img className='profile-img' src='https://i.imgur.com/ZSg4C3H.jpg'></img> */}
        <h1>Hello, my name is Stephen Herget.</h1>
        <h4>I'm a web developer.</h4>
      </section>

      <section className='about-me'>
        <h1>About Me</h1>
        <p>I'm a detail oriented full-stack software developer driven by knowledge, collaboration, and problem solving. I apply vision, innovation, and a creative perspective in all environments with a focus on timely, cost effective, and quality final project/product delivery. I always enjoy new challenges, and equally enjoy looking for new creative approaches to challenges.</p>
      </section>

      <section className='skills'>
        <h1>Skills</h1>
        <p>HTML5, CSS3, Javascript, REACT, ES6, NodeJS, Express, MongoDB, SQL, PostrgeSQL, Ruby</p>
      </section>

      <section className='projects'>
      <h1>Recent Projects</h1>

      <a className='p1-link' href='https://sherget15.github.io/Cocktail-Connoisseur/'><img className='p1-img' src='https://i.imgur.com/smBirji.jpg'></img></a>
      <a className='p2-link' href='https://p2-zengarden.netlify.app'><img className='p2-img' src='https://i.imgur.com/cwySkeU.jpg'></img></a>
      <a className='p3-link' href='https://playlistify4real.netlify.app/'><img className='p3-img' src='https://i.imgur.com/Y7Dr5jD.jpg'></img></a>

      </section>

      <section className='contact'>


      <h1>Contact Me!</h1>

      <div className='contact-form'>

      <div className='github-div'>
      <a className='github-link' href='https://github.com/sherget15'><Github color='black' size={75} /></a>
      </div>

      <div className='linkedin-div'>
      <a className='linkedin-link' href='https://www.linkedin.com/in/stephen-a-herget-50522942/'><Linkedin color='#0e76a8' size={75} /></a>
      </div>

      <div className='gmail-div'>
        <a className='gmail-link' href='mailto:herget06@gmail.com'>
        <Gmail color='red' size={75} />
        <h4>EMAIL ME</h4>
        </a>
        <h6>herget06@gmail.com</h6>
      </div>
      
      </div>


      </section>


    </div>
  );
}

export default App;
