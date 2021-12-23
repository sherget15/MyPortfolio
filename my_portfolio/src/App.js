import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
      </header>

      <section className='home'>
      <h1>Hello, my name is Stephen Herget.</h1>
      <h4>I'm a web developer.</h4>
      </section>

      <section className='about-me'>
        <h1>About Me</h1>
        <p>I'm a detail oriented full-stack software developer driven by knowledge, collaboration, and problem solving. I apply vision, innovation, and a creative perspective in all environments with a focus on timely, cost effective, and quality final project/product delivery. I always enjoy new challenges, and equally enjoy looking for a creative approach to new challenges.</p>
      </section>

      <section className='projects'>
      <h1>Projects</h1>
      </section>

      <section className='contact'>
      <h1>Contact Me!</h1>

      <div className='contact-form'>
      <h3>Share</h3>
      <form>
        <label>Your Name</label>   
        {/* <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /> */}
        <br />
        <br />
        <label>Your Email</label>   
        {/* <input type="text" value={plantName} onChange={(e) => setEmail(e.target.value)} /> */}
        <br />
        <br />
        <label>Your Message</label>   
        {/* <input type="text" value={plantLocation} onChange={(e) => setMessage(e.target.value)} /> */}
        <br />
        <br />
        <button>Submit</button>
        <br />
        <br />
        <br />
      </form>
    </div>
      </section>

    </div>
  );
}

export default App;
