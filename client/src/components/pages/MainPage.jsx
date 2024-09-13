import React from 'react'
import { Container } from 'react-bootstrap'

const contentStyle = {
  flexGrow: 1,
};
export default function MainPage() {
  return (
    <div style={contentStyle}>
    {/* Ваш основной контент страницы */}
    <Container >
      <h1>Добро пожаловать на страницу аренды жилья!</h1>
      {/* Форма или другие элементы */}
    </Container>
  </div>
  )
}


