import { useState } from "react";
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (<div className="contact" id="contact">

    <div className="left">
      <div className="imgContainer">
        <img src="assets/programmer.png" alt="" />
      </div>
    </div>

    <div className="right">
      <h2>Contact.</h2>
      <h3>reinosofrancisco99@gmail.com</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="Submit">Send</button>
        {/* Can't send the email without providing a backend */}
        {/* {message && <span>Thanks. Your message has been sent successfully! </span>} */}
        {message && <span>This service is currently unavailable. Sorry! </span>}
      </form>

    </div>

    <a className="mobile_only_arrow" href="#intro">
      <img src="assets/arrow_up.png" alt=""/>
    </a>

  </div>);
}
