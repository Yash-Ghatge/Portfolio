import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Home.css'
const Home = () => {
  const handleDownload = () => {
    const resumeUrl = "/Yash.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Yash.docx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    
    <div id='home' className='hero'>
      <h1><span>I am Yash Ghatge,</span>Full Stack Developer</h1>
      <p>Hi, I am full stack developer with expertise in React, Node.js, Express.js, MongoDB, Python, and Django.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink></div>
        <div className="hero-resume" onClick={handleDownload}>My resume</div>
      </div>
    </div>
  )
}

export default Home
