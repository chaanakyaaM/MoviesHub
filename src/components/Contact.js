import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        If you like to give any suggestions or if you would like to contact me:
      </p>
      <div>
        <div className="name">
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" name="Name" />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="msg">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Contact;
