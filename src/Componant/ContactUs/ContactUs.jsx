import React, { useState } from "react";
import "./contactus.css";
function ContactUs() {
  const [nameValue, setNameValue] = useState("");
  const [phone, setphone] = useState("");
  const [msg, setmsg] = useState("");
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const contactdes =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, adipisci perferendis ad enim doloremque voluptate et corrupti asperiores fugiat fuga facere consectetur natus placeat incidunt similique, animi earum pariatur accusamus numquam! Maxime eaque, similique dicta nihil asperiores est  provident quos magni sit adipisci excepturi velit id distinctio  itaque quaerat voluptatibus laborum quas,";
  const nameInp = (e) => {
    // setNameValue(e.target.value);
    let newvalue = e.target.value;
    if (newvalue.length < 7) {
      setNameValue(true);
    } else {
      setNameValue(false);
    }
  };
  const phoneN = (e) => {
    // setphone(e.target.value);
    const newPhone = e.target.value;
    if (newPhone.length < 11) {
      setphone(true);
    } else {
      setphone(false);
    }
  };
  const massage = (e) => {
    const newmsg = e.target.value;
    if (newmsg.length < 10) {
      setmsg(true);
    } else {
      setmsg(false);
    }
  };

  return (
    <>
      <div className="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-col col">
              <h1>
                Send us a message <i class="fa-regular fa-message"></i>
              </h1>
              <p>{contactdes}</p>
              <ul>
                <li>
                  <i class="fa-regular fa-envelope"></i>example123@gmail.com
                </li>
                <li>
                  <i class="fa-solid fa-phone-volume"></i>+92383-2838299
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>Address: itaque
                  quaerat voluptatibus laborum quas,
                </li>
              </ul>
            </div>
            <div className="contact-col col">
              <form onSubmit={onSubmit}>
                <label>Your Name</label>
                {nameValue ? (
                  <span style={{ color: "red" }}>invalid value</span>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name..."
                  required
                  onChange={nameInp}
                />
                <label>Phone Number</label>
                {phone ? (
                  <span style={{ color: "red" }}>incomplete phone</span>
                ) : "" || phone ? (
                  <span>valid</span>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  name="number"
                  id=""
                  placeholder="Enter your phone Number..."
                  required
                  onChange={phoneN}
                />
                <label>
                  Write your message here {msg ? <span>fill out</span> : ""}
                </label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message..."
                  required
                  onChange={massage}
                ></textarea>
                <br />
                <button type="submit" className="btnn">
                  Submit Now <i class="fa-solid fa-arrow-right-long"></i>
                </button>
                <span>{result}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
