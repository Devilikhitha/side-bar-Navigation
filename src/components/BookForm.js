import React, { useState } from 'react';
import axios from 'axios';
import "./BookForm.css"

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [acPreference, setAcPreference] = useState('');
  const [fixedAmount, setFixedAmount] = useState('');

  const accommodationTypeAmounts = {
    'Accommodation 1': '999',
    'Accommodation 2': '1999',
    'Accommodation 3': '2999',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://roomsyncbackend.onrender.com/SubmitForm', {
        name,
        email,
        username,
        accommodationType,
        roomNumber,
        acPreference,
        fixedAmount,
      });
      console.log('Form submitted:', response.data);
      // Handle success or redirect to another page
      alert('Form submitted', response.data);
  
      // Reset form fields
      setName('');
      setEmail('');
      setUsername('');
      setAccommodationType('');
      setRoomNumber('');
      setAcPreference('');
      setFixedAmount('');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };
  

  const handleAccommodationTypeChange = (e) => {
    const selectedAccommodationType = e.target.value;
    setAccommodationType(selectedAccommodationType);
    setFixedAmount(accommodationTypeAmounts[selectedAccommodationType]);
  };

  return (
    <div className="formcontainer">
    <form onSubmit={handleSubmit} class="booking-form"> 
    <h2>Book a Room</h2>
  <p>Fill out the form below to book your room.</p>
      <label class="form-group">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label class="form-group">
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label class="form-group">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label class="form-group"> 
        Accommodation Type:
        <select value={accommodationType} onChange={handleAccommodationTypeChange}>
          <option value="">Select Accommodation Type</option>
          <option value="Accommodation 1">Single Bed</option>
          <option value="Accommodation 2">Shared Bed</option>
          <option value="Accommodation 3">Dormitory</option>
        </select>
      </label>
      <br />
      <label class="form-group">
        Room Number:
        <select value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)}>
          <option value="">Select Room Number</option>
          <option value="1">100</option>
          <option value="2">200</option>
          <option value="3">300</option>
        </select>
      </label>
      <br />
      <label class="form-group">
        AC Preference:
        <select value={acPreference} onChange={(e) => setAcPreference(e.target.value)}>
          <option value="">Select AC Preference</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br />
      <div class="form-group">
    <label for="check-in">Check-in Date:</label>
    <input type="date" id="check-in" name="check-in" required/>
  </div>
  <div class="form-group">
    <label for="check-out">Check-out Date:</label>
    <input type="date" id="check-out" name="check-out" required/>
  </div>
      <label class="form-group">
        Fixed Amount:
        <input type="text" value={fixedAmount} readOnly />
      </label >
      <br />
      <button class="formbtn" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;