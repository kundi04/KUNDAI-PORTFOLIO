import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../components/Particle";

function AccountSupportForm() {
  // State for each form field
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8f8c6286-7e05-4de2-bc04-6774789a9038");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // Optionally clear the form fields after successful submission
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } else {
      console.error("Form submission error", res);
    }
  };

  return (
    <Container fluid className="account-support-form">
      <Particle />
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="outer-container">
            <div className="heading-section mb-4">
              <h2>Like what you see?</h2>
              <p>
                I’m eager to explore potential collaborations that allow us to push boundaries, solve real-world problems, and create meaningful change. 
                <br className="br" /> Let’s see what we can build together!
              </p>
            </div>

            <div className="form-section">
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formName" className="mb-3 input">
                  <Form.Control 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mb-3 input">
                  <Form.Control 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 input">
                  <Form.Control 
                    type="email" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3 input">
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Your message description" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    name="message" 
                  />
                </Form.Group>
              </Form>
         <Button  className="send mt-4">
                  Send message
                </Button> 
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountSupportForm;
