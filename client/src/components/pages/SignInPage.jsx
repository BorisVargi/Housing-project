import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { Button, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

export default function SigninPage({ signinHandler }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',

  });
  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <Form onSubmit={(event) => signinHandler(event, formData)}>
      <FormGroup>
        <Label for="emailInp"></Label>
        <Input
          value={formData.email}
          onChange={changeHandler}
          id="emailInp"
          name="email"
          placeholder="Email"
          type="email"
        />
      </FormGroup>
 
      <FormGroup>
        <Label for="pass"></Label>
        <Input
          value={formData.password}
          onChange={changeHandler}
          id="pass"
          name="password"
          placeholder="пароль"
          type="password"
        />
      </FormGroup>
      <Button>Вход</Button>

    </Form>
  );
}
