import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Contact.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send "Thank You" email to the user
    const userParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_zm7u617", // YOUR_SERVICE_ID
        "template_pvqlsac", // template_id
        userParams, // Pass the user details as parameters
        "G9wu8bNlNNKbT6N9v" // public key
      )
      .then((response) => {
        console.log(
          "Thank You email sent successfully to the user!",
          response.status,
          response.text
        );

        // Clear the form fields after successful submission
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      })
      .catch((err) =>
        console.error("Failed to send Thank You email to the user:", err)
      );

    // 2. Send admin email with user details
    const adminParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_zm7u617", // YOUR_SERVICE_ID
        "template_fek9tnb", // template_id
        adminParams, // Pass the user details as parameters
        "G9wu8bNlNNKbT6N9v" // public key
      )
      .then((response) => {
        console.log(
          "Admin email sent successfully!",
          response.status,
          response.text
        );
      })
      .catch((err) => console.error("Failed to send admin email:", err));
  };

  return (

  <div
      id="contact"
      // style={{
      //   marginLeft: "20%", // Default margin for larger screens
      //   padding: "20px",
      //   transition: "margin-left 0.3s ease-in-out", // Smooth transition for responsive changes
      // }}
    >
      <section className='contact-container'>
      <h5 className='text-white'>CONTACT</h5>
      <div className='contact-icons'>
          <div className='icon'>
           <div className='icon1'>
             <h1><i class="fa-solid fa-envelope"></i></h1>
             <a href='www.linkedin.com/in/vignesh-c-819b8332a'>Linkedin</a>
           </div>
           <div className='icon2'>
             <h1><i class="fa-brands fa-github"></i></h1>
             <a href='https://github.com/vignesh333948'>Github</a>
           </div>
         </div>
         <div className='contact-form '>
            <form onSubmit={sendEmail}>
              <div className="name-container">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Your First Name"
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Your Last Name"
                  required
                />
              </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Text Your Message"
                  required
                  rows={3}
                />
              <Button type="submit" variant="success" id="footer-btn">
                Send
              </Button>
            </form>
          </div>
      </div>
      </section>
    </div>
  );
}

export default Contact;
