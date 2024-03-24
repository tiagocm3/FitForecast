import React, { useState } from 'react';
import fitforecastLogoImg from './fitforecast logo.png';
import './Blog.css'; 

const Blog = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="container">
      <h2>HikeHub: Where Trails Connect!</h2>
      <div className="logo-container">
        
      </div>
      <a href="main">
                <img src={fitforecastLogoImg} alt="Logo" className="fit-logo"/>
      </a>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Share your trail experiences..."
          rows="4"
          className="message-input"
        />
        <button type="submit" className="submit-btn">
          Post Message
        </button>
      </form>
      <div id="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
