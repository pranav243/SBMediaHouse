// import React, { useState } from 'react';
// import { SocialIcon } from 'react-social-icons'


// export default function ContactForm(){
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         message: ''
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//           ...prevState,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//       };
    
//       return (
//         <div className="contact-container">
//           <h2>Let's Chat</h2>
          
//           <div className="contact-info">
//             <div className="contact-info-group">
//               <label>Phone</label>
//               <p>8484807211</p>
//             </div>
            
//             <div className="contact-info-group">
//               <label>Email</label>
//               <p>sb.medianproduction@gmail.com</p>
//             </div>
            
//             <div className="contact-info-group">
//               <label>Social Media</label>
//               <div className="contact-social-links">
//                     <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.facebook.com/sakshibhutada/" />
//                     <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.instagram.com/sakshi__bhutada_/" />
//                     <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.linkedin.com/in/sakshibhutada/" />
//                     <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://x.com/sakshibhutada" />
//               </div>
//             </div>
//           </div>
    
//           <form onSubmit={handleSubmit}>
//             <div className="contact-form-row">
//               <div className="contact-form-group">
//                 <label>First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
              
//               <div className="contact-form-group">
//                 <label>Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
              
//               <div className="contact-form-group">
//                 <label>Email *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
    
//             <div className="contact-form-group">
//               <label>Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//               />
//             </div>
    
//             <button className='contact-sendbutton' type="submit">Send</button>
//           </form>
//         </div>
//       );
// }

import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formsubmit.co/sb.medianproduction@gmail.com";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Clear form
      } else {
        console.error("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-container">
      <h2>Let's Chat</h2>

      <div className="contact-info">
        <div className="contact-info-group">
          <label>Phone</label>
          <p>8484807211</p>
        </div>

        <div className="contact-info-group">
          <label>Email</label>
          <p>sb.medianproduction@gmail.com</p>
        </div>

        <div className="contact-info-group">
          <label>Social Media</label>
          <div className="contact-social-links">
            <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.facebook.com/sakshibhutada/" />
            <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.instagram.com/sakshi__bhutada_/" />
            <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.linkedin.com/in/sakshibhutada/" />
            <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://x.com/sakshibhutada" />
          </div>
        </div>
      </div>

      {submitted ? (
        <p className="success-message">✅ Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button className="contact-sendbutton" type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
