
import './App.css';
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cname: '',
    email: '',
    address: '',
    package: '',
    services: [], 
  });


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        services: checked
          ? [...prevFormData.services, value] 
          : prevFormData.services.filter((service) => service !== value), 
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form submitted:', formData);
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);

  };

  return (
    <div className='contact-form'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            placeholder='Enter Your First Name'
          />
          <br />
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            placeholder='Enter Your Last Name'
          />
        </div>
        
        <div>
          <label>Company Name:</label><br />
          <input
            type="text"
            name="cname"
            value={formData.cname}
            onChange={handleInputChange}
            required
            placeholder='Enter your Company Name'
          />
        </div>
        
        <div>
          <label>Email Address:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder='Enter your Email Address'
          />
        </div>
        
        <div>
          <label>Company Address:</label><br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder='Enter your Company Address'
          />
        </div>
        
        <div>
          <label>Package:</label><br />
          <select
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a package</option>
            <option value="Curriculum">Curriculum</option>
            <option value="Curriculum/Infrastructure">Curriculum/Infrastructure</option>
          </select>
        </div>
        
        <div>
          <h5>Our Services (Select the ones you need)</h5>
          <label>
            <input
              type="checkbox"
              name="services"
              value="Programming"
              checked={formData.services.includes('Programming')}
              onChange={handleInputChange}
            />
            Programming
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="AI Systems"
              checked={formData.services.includes('AI Systems')}
              onChange={handleInputChange}
            />
            AI Systems
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="WEB"
              checked={formData.services.includes('WEB')}
              onChange={handleInputChange}
            />
            WEB
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="IOT"
              checked={formData.services.includes('IOT')}
              onChange={handleInputChange}
            />
            IOT
          </label>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
