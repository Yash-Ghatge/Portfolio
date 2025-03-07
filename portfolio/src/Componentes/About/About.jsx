import { useEffect } from 'react';
import './About.css';
import about from '../../assets/about.jpg';

function About() {
  useEffect(() => {
    const aboutSection = document.querySelector('.about');
    const title = document.querySelector('.title');
    const sections = document.querySelector('.sections');
    const leftImage = document.querySelector('.left');
    const rightText = document.querySelector('.right');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('show');
          title.classList.add('show');
          sections.classList.add('show');
          leftImage.classList.add('show');
          rightText.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
  }, []);

  return (
    <div id='about' className="about">
      <div className="title">
        <h1>About me</h1>
      </div>
      <div className="sections">
        <div className="left">
          <img src={about} alt="img" />
        </div>
        <div className="right">
          <div className="para">
            <p>Hi, I am Yash! 🚀 a passionate full-stack developer with expertise in React, Node.js, Express.js, MongoDB, Python, and Django. I love building scalable web applications, crafting seamless user experiences, and solving complex problems with NumPy and Pandas.</p>
            <p>With a strong foundation in backend and frontend development, I strive to create efficient, responsive, and user-friendly applications. Whether it is designing RESTful APIs, optimizing databases, or developing dynamic UI components, I am always up for a challenge!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
