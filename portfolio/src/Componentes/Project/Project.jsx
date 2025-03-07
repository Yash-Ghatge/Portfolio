import  { useEffect, useRef } from 'react';
import './Project.css';
import project1 from '../../assets/jobport.webp'
import project2 from '../../assets/blog.jpg'
const Project = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

   
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      image:project1,
      title: 'Project One',
      description: 'This project highlights my React and Node.js skills. Here i have build a Job Portal website where a User can apply for the job and employer post the job application and it is also mobile responsive.',
      link: 'https://github.com/Yash-Ghatge/T.Y-Project'
    },
    {
      id: 2,
      image: project2,
      title: 'Project Two',
      description: 'This project showcases my Python and Django expertise. Here i have build a Blog Post website where a User can post the blog it is simple and easy to use.',
      link: 'https://github.com/Yash-Ghatge/Django_Project'
    },
    
    
  ];

  return (
    <section id='project' className="project-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            ref={el => (cardsRef.current[index] = el)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
