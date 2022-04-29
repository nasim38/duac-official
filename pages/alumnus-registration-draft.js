import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AlumnusRegistration = () => {
  // declaring states for form fields --------------------
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [homeDistrict, setHomeDistrict] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [workplaceAddress, setWorkplaceAddress] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [duSession, setduSession] = useState("");
  const [duHall, setDuHall] = useState("");
  const [duDepartment, setDuDepartment] = useState("");

  // for handling changes in controlled form fields -----------
  const changeHandler = (e) => {
    switch (e.target.id) {
      case "fullName":
        setFullName(e.target.value);
        console.log(fullName);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        console.log(phoneNumber);
    }
  };
  // for handlign submit button ---------------
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.id == "fullName") console.log(e.target.value);
    console.log(e);
  };
  // here we'll create a registration form for almunus members ----------
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                onChange={changeHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                onChange={changeHandler}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Select aria-label="Blood Group">
                <option>Select a blood group</option>
                <option value="1">O+</option>
                <option value="2">O- </option>
                <option value="3">A+ </option>
                <option value="4">A- </option>
                <option value="5">B+ </option>
                <option value="6">B- </option>
                <option value="7">AB+ </option>
                <option value="8">AB- </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="religion">
              <Form.Label>Religion</Form.Label>
              <Form.Select aria-label="Religion">
                <option>Select your religion</option>
                <option value="1">Islam</option>
                <option value="2">Hindu</option>
                <option value="3">Christian</option>
                <option value="4">Buddhist</option>
                <option value="5">Others</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="maritalStatus">
              <Form.Label>Marital Status</Form.Label>
              <Form.Check
                name="marriage"
                type="radio"
                id="Married"
                label="Married"
              />

              <Form.Check
                name="marriage"
                type="radio"
                id="Unmarried"
                label="Unmarried"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="homeDistrict">
              <Form.Label>Home District</Form.Label>
              <Form.Control type="text" placeholder="Home District" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="currentJob">
              <Form.Label>Current Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your job designation and post"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="workplaceAddress">
              <Form.Label>Workplace Address</Form.Label>
              <Form.Control type="text" placeholder="Where your workplace is" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="presentAddress">
              <Form.Label>Present Address</Form.Label>
              <Form.Control type="text" placeholder="Your present address" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="permanentAddress">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control type="text" placeholder="Your permanent address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="duSession">
              <Form.Label>Dhaka University Session</Form.Label>
              <Form.Control
                type="text"
                placeholder="Provide year with 4 digits"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="duDepartment">
              <Form.Label>Dhaka University Department Name</Form.Label>
              <Form.Control type="text" placeholder="Department Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="duHall">
            <Form.Label>Dhaka University Hall Name</Form.Label>
            <Form.Control type="text" placeholder="University hall name" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AlumnusRegistration;
