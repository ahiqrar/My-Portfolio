import { useState } from 'react';
import { SectionId } from '../../types/enums';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';

// 📝 Edit Contact Info and Formspree Endpoint here
const contactConfig = {
  email: "iqrar.soomro.ahmed@gmail.com",
  phone: "+92 333 7244639",
  location: "Karachi, Pakistan",
  socials: {
    github: "https://github.com/ahiqrar",
    linkedin: "https://linkedin.com/in/iqrar-ahmed-68018226b"
  },
  // 🔗 Add your Formspree endpoint ID here (e.g., https://formspree.io/f/YOUR_ENDPOINT_ID)
  formspreeEndpoint: "https://formspree.io/f/placeholder",
  maxMessageLength: 1000
};

// Reusing Social Icons
const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const copyToClipboard = (text: string, field: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'message' && value.length > contactConfig.maxMessageLength) return;
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam protection (Honeypot)
    if (formData.honeypot) return;

    // Validation
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(contactConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id={SectionId.Contact} className="section">
      <div className={`container animate-fade-in`} style={{ animationFillMode: 'both' }}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Contact</span>
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          
          {/* Left Column: Contact Info */}
          <div className={styles.infoColumn}>
            <div className={styles.availability}>
              <span className={styles.pulseDot}></span>
              Available for work
            </div>
            
            <p className={styles.introText}>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'm happy to hear from you.
            </p>

            <div className={styles.contactCards}>
              
              {/* Email Row */}
              <a href={`mailto:${contactConfig.email}`} className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.rowContent}>
                  <span className={styles.rowLabel}>Email</span>
                  <span className={styles.rowValue}>{contactConfig.email}</span>
                </div>
                <div className={styles.rowActions}>
                  <button 
                    onClick={(e) => copyToClipboard(contactConfig.email, 'email', e)} 
                    className={styles.copyBtn}
                    aria-label="Copy email"
                  >
                    {copiedField === 'email' ? <Check size={16} className={styles.successIcon} /> : <Copy size={16} />}
                    {copiedField === 'email' && <span className={styles.tooltip}>Copied!</span>}
                  </button>
                  <ArrowRight size={18} className={styles.hoverArrow} />
                </div>
              </a>

              {/* Phone Row */}
              <a href={`tel:${contactConfig.phone}`} className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div className={styles.rowContent}>
                  <span className={styles.rowLabel}>Phone</span>
                  <span className={styles.rowValue}>{contactConfig.phone}</span>
                </div>
                <div className={styles.rowActions}>
                  <button 
                    onClick={(e) => copyToClipboard(contactConfig.phone, 'phone', e)} 
                    className={styles.copyBtn}
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? <Check size={16} className={styles.successIcon} /> : <Copy size={16} />}
                    {copiedField === 'phone' && <span className={styles.tooltip}>Copied!</span>}
                  </button>
                  <ArrowRight size={18} className={styles.hoverArrow} />
                </div>
              </a>

              {/* Location Row */}
              <div className={styles.contactRow}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.rowContent}>
                  <span className={styles.rowLabel}>Location</span>
                  <span className={styles.rowValue}>{contactConfig.location}</span>
                </div>
              </div>

            </div>

            <div className={styles.socialRow}>
              <a href={contactConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
                <GithubIcon size={20} />
              </a>
              <a href={contactConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              
              {status === 'success' ? (
                <div className={styles.successState} aria-live="polite">
                  <div className={styles.successCircle}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className={styles.resetBtn}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {status === 'error' && (
                    <div className={styles.globalError} aria-live="assertive">
                      <AlertCircle size={18} />
                      <span>Oops! Something went wrong. Please try again.</span>
                    </div>
                  )}

                  {/* Honeypot */}
                  <input type="text" name="honeypot" style={{ display: 'none' }} value={formData.honeypot} onChange={handleInputChange} tabIndex={-1} autoComplete="off" />

                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Your full name"
                      className={errors.name ? styles.inputError : ''}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <span id="name-error" className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="name@company.com"
                      className={errors.email ? styles.inputError : ''}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject <span className={styles.optional}>(Optional)</span></label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange} 
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.labelRow}>
                      <label htmlFor="message">Message</label>
                      <span className={styles.charCounter}>{formData.message.length} / {contactConfig.maxMessageLength}</span>
                    </div>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Tell me about your project or opportunity..."
                      className={errors.message ? styles.inputError : ''}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && <span id="message-error" className={styles.errorText}>{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitBtn} 
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className={styles.loader}></span>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
