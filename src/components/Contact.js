import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../components/Particle";


function AccountSupportForm() {
  return (
    <Container fluid className="account-support-form">
      <Particle />
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="outer-container">
            <div className="heading-section mb-4">
              <h2>Like what you see?</h2>
              <p> I’m eager to explore potential collaborations that allow us to push boundaries, solve real-world problems, and create meaningful change. 
               <br className="br"/> Let’s see what we can build together!</p>
              
            </div>

            <div className="form-section">
              <Form>
                <Form.Group controlId="formName" className="mb-3 input">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mb-3 input">
                  <Form.Control type="tel" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 input">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3 input">
                  <Form.Control as="textarea" rows={4} placeholder="Your message description" />
                </Form.Group>

                <Button variant="primary" type="submit" className="send-button mt-4">
                  Send message
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountSupportForm;
