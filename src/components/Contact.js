import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Style/Contact.css";

// Contact section, does not send messages yet I plan to add this functionality in the future
const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const initialFormErrors = {
    nameError: false,
    emailError: false,
    messageError: false,
  };
 // State variables using the useState hook
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [`${name}Error`]: false,
    });
  };
// /\S+: The \S represents a non-whitespace character, and + is a quantifier that matches one or more occurrences of the preceding pattern. 
// So, \S+ matches one or more non-whitespace characters.
// @: Matches the "@" character literally, which separates the username from the domain in an email address.
// \S+: Another occurrence of \S+, matching one or more non-whitespace characters for the domain name.
// \.: Matches a period (dot) character literally, as it is used to separate the domain name segments in an email address.
// \S+: One more occurrence of \S+, matching one or more non-whitespace characters for the top-level domain (e.g., ".com", ".org", ".net").
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const { name, email, message } = formData;

  // Validation checks for each input field
    if (name.length <= 4) {
      setFormErrors((prevErrors) => ({ ...prevErrors, nameError: true }));
      valid = false;
    }
    if (!validateEmail(email)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, emailError: true }));
      valid = false;
    }
    if (message.length < 50) {
      setFormErrors((prevErrors) => ({ ...prevErrors, messageError: true }));
      valid = false;
    }

  // If all fields are valid, log form data, reset inputs, and set messageSent to true
    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setFormData(initialFormData);
      setMessageSent(true);
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="contact-header">Contact Me</h2>
            {messageSent && (
              <div className="alert alert-success" role="alert">
                Your message has been sent successfully!
              </div>
            )}
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  type="text"
                  className={formErrors.nameError ? "is-invalid" : ""}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.nameError && (
                  <div className="invalid-feedback">
                    Name must be more than 5 characters
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  className={formErrors.emailError ? "is-invalid" : ""}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.emailError && (
                  <div className="invalid-feedback">
                    A valid email is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  className={formErrors.messageError ? "is-invalid" : ""}
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {formErrors.messageError && (
                  <div className="invalid-feedback">
                    Message must be at least 100 characters
                  </div>
                )}
              </Form.Group>
              <Button type="submit" className="send-message-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;