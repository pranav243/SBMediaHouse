
import React, { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
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

    // Sending form data to FormSubmit
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
        setFormData({ firstName: '', lastName: '', email: '' }); // Clear form after submission
      } else {
        console.error("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="quote-container">
      <div className="quote-header">
        <h2>Get a Quote</h2>
        <p>Let's make something incredible together!</p>
        <p>Reach out to us today to discuss your project.</p>
      </div>

      {submitted ? (
        <p className="success-message">✅ Thank you! Your request has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="quote-form-group">
            <div className="quote-input-wrapper">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="quote-input-wrapper">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="quote-input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button className="quote-sendbutton" type="submit">
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
