import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    setSuccessMessage('Message sent successfully!');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, email, subject, and message */}
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Contact;
