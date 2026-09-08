import { personalInfo } from '../../data/portfolioData';
import { SectionId } from '../../types/enums';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id={SectionId.Contact} className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <p className={styles.description}>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, 
              or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.contactForm} card`}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
