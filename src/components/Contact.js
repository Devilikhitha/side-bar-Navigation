import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>
       <section id="contact">
    <h2>Contact</h2>
    
    <div class="contact-info">
      <p>If you have any questions or inquiries, feel free to reach out to us using the contact details provided below:</p>
      
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      
      <p>We look forward to hearing from you!</p>
    </div>
    
    <div class="contact-form">
      <h3>Send us a Message</h3>
      
      <form action="https://roomsyncbackend.onrender.com/submitContactForm" method="POST">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
    </div>
  )
}
