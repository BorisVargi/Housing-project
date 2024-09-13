import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { Button, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

export default function SignupPage({ signupHandler }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    repeat: '',
  });
  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <Form onSubmit={(event) => signupHandler(event, formData)}>
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
        <Label for="nameInp"></Label>
        <Input
          value={formData.name}
          onChange={changeHandler}
          id="nameInp"
          name="name"
          placeholder="имя"
          type="text"
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
      <FormGroup>
        <Label for="repeatPass"></Label>
        <Input
          invalid={formData.repeat.length > 0 && formData.repeat !== formData.password}
          value={formData.repeat}
          onChange={changeHandler}
          id="repeatPass"
          name="repeat"
          placeholder="повтори пароль"
          type="password"
        />
        <FormFeedback>Пароли должны совпадать</FormFeedback>
      </FormGroup>
      <Button>Регистрация</Button>
    </Form>
  );
}
