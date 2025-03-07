import './Contact.css'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'
function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e6059064-1dfc-4246-8e7b-c72e5c38b44f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let&lsquo;s talk</h1>
                <p>I&lsquo;m currently looking for job, so feel free to contact me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /><p>yashghatge012@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /><p>8828190868</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>KanjurMarg, Mumbai(400042)</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact