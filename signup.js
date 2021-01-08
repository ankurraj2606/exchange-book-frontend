import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Form>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="text"
          id="fname"
          placeholder="Enter First Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="text"
          id="lname"
          placeholder="Enter Last Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email Id</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Enter Email Id"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Signup;
