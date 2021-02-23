import React, { useState } from "react";

const Contact = (props) => {
  //   const [contact, setContact] = useState("");
  //   const [message, setMessage] = useState("");
  const [contact, setContact] = useState({
    name: "",
    message: "",
  });

  const handleFormSubmit = () => {
    var email = "jeanarose.mathis.dev@gmail.com";
    var subject = "I saw your portfolio and want to connect!";
    var emailBody = contact.message;
    window.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title mt-6">Contact</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Name"
                value={contact.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                name="message"
                className="textarea"
                placeholder="Message"
                value={contact.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                className="button is-white"
                onClick={(e) => {
                  e.preventDefault();
                  setContact({
                    ...contact,
                    name: "",
                    message: ""
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
