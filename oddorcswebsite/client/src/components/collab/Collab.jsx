import React from 'react'
import './collab.css'
import { useState } from 'react';

import axios from 'axios';


const Collab = () => {

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const [formData, setFormData] = useState( {
        name: '',
        email: '',
        project: '',
        social: '',
        message: '',
      });

      const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
        project: '',
        social: '',
      });

      // eslint-disable-next-line
      const validateForm = () => {
        let newErrors = { ...errors };
        let isValid = true;
    
        if (!formData.name) {
          newErrors.name = 'Name is required';
          isValid = false;
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
          isValid = false;
        }
        if (!formData.project) {
          newErrors.project = 'Project is required';
          isValid = false;
        }
        if (!formData.social) {
          newErrors.social = 'Social is required';
          isValid = false;
        }
        if (!formData.message) {
          newErrors.message = 'Message is required';
          isValid = false;
        } else if (formData.message.length > 1000) {
          newErrors.message = 'Message is too long';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://www.oddorcs.io/api/email', formData)
            .then(res => {
                setSubmissionSuccess(true);
                console.log(res.data);
                setFormData({
                  name: '',
                  email: '',
                  project: '',
                  social: '',
                  message: '',
                });
                setTimeout(() => {
                  setSubmissionSuccess(false);
                }, 3000);  // 3000ms = 3 seconds
            })
            .catch(err => {
                console.log(err);
            });
    }

  return (
    <div>
        <div className='collab-content'id='collab'>
            <h2>Collab With Us</h2>
        </div>
        <form action='/api/email'method='post' onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={formData.name}
      />
      {errors.name && <div className="error">{errors.name}</div>}
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        value={formData.email}
      />
      {errors.email && <div className="error">{errors.email}</div>}
      <br />
      <label htmlFor="project">Project:</label>
      <input
        type="text"
        name="project"
        id="project"
        onChange={handleChange}
        value={formData.project}
      />
      {errors.project && <div className="error">{errors.project}</div>}
      <br />
      <label htmlFor="social">Social Media:</label>
      <input
        type="text"
        name="social"
        id="social"
        onChange={handleChange}
        value={formData.social}
      />
      {errors.social && <div className="error">{errors.social}</div>}
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        onChange={handleChange}
        value={formData.message}
      />
      {errors.message && <div className="error">{errors.message}</div>}
      <br />
      {/* form fields */}
      {submissionSuccess && <p className='submission-message'> Submitted </p>}
      <button 
      type="submit">Send</button>
    </form>
    </div>
  );
}

export default Collab