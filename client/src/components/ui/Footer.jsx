// import React from 'react';
import { Container } from 'react-bootstrap';

export default function App() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '5px 0',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '80%',
    marginTop: 'auto',
  };

  const mainWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '40vh',
  };

  return (
    <div style={mainWrapperStyle}>
        <div style={{ flex: 1 }}>
      </div>
        <footer style={footerStyle}>
        <Container>
          <p>Адрес офиса: Москва, ул. Тверская, д. 1</p>
          <p>Email службы поддержки: support@rentalcompany.com</p>
        </Container>
      </footer>
    </div>
  );
}

