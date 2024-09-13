import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const categories = [
  { name: 'Комната', path: '/category/room' },
  { name: 'Квартира', path: '/category/apartment' },
  { name: 'Дом', path: '/category/house' },
];

export default function NavigationBar({user}) {
  const [open, setOpen] = useState(false)

  return (

    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Логотип */}
        <LinkContainer to="/">
          <Navbar.Brand>
          <img
            src="/public/Logo.webp"
            alt="Housing Rental Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Housing Rental Company
          </Navbar.Brand>
        </LinkContainer>

        {user}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Категории жилья */}
            <NavDropdown title="Жилье" id="basic-nav-dropdown">
              {categories.map((category) => (
                <LinkContainer key={category.name} to={category.path}>
                  <NavDropdown.Item>{category.name}</NavDropdown.Item>
                </LinkContainer>
              ))}
            </NavDropdown>

            {/* Ссылка на избранное */}
            <LinkContainer to="/favorites">
              <Nav.Link>Избранное</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/add">
              <Nav.Link>Добавить</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/singlePage">
              <Nav.Link>карточка</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav>
            {/* Кнопки для входаб выхода и регистрации */}
            <LinkContainer to="/login">
              <Button variant="outline-light" className="me-2">Вход</Button>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Button variant="light"  className="me-2">Регистрация</Button>
            </LinkContainer>
            <LinkContainer to="/logout">
              <Button variant="outline-light">Выход</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

// const categories = [
//   { name: 'Комната', path: '/category/room' },
//   { name: 'Квартира', path: '/category/apartment' },
//   { name: 'Дом', path: '/category/house' },
// ];

// export default function NavigationBar({ user, logoutHandler }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         {/* Логотип */}
//         <LinkContainer to="/">
//           <Navbar.Brand>
//             <img
//               src="/Logo.webp"
//               alt="Housing Rental Logo"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             Housing Rental Company
//           </Navbar.Brand>
//         </LinkContainer>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpen(!open)} />
//         <Navbar.Collapse id="basic-navbar-nav" in={open}>
//           <Nav className="me-auto">
//             {/* Гостевой доступ */}
//             {!user && (
//               <>
//                 <LinkContainer to="/login">
//                   <Button variant="outline-light" className="me-2">Вход</Button>
//                 </LinkContainer>
//                 <LinkContainer to="/signup">
//                   <Button variant="light" className="me-2">Регистрация</Button>
//                 </LinkContainer>
//               </>
//             )}

//             {/* Навбар для администратора */}
//             {user?.isAdmin && (
//               <>
//                 <LinkContainer to="/add">
//                   <Nav.Link>Добавить</Nav.Link>
//                 </LinkContainer>

//                 <LinkContainer to="/singlePage">
//                   <Nav.Link>Карточка</Nav.Link>
//                 </LinkContainer>

//                 <Button variant="outline-light" onClick={logoutHandler}>Выход</Button>
//               </>
//             )}

//             {/* Навбар для пользователя */}
//             {user && !user.isAdmin && (
//               <>
//                 <NavDropdown title="Категории жилья" id="basic-nav-dropdown">
//                   {categories.map((category) => (
//                     <LinkContainer key={category.name} to={category.path}>
//                       <NavDropdown.Item>{category.name}</NavDropdown.Item>
//                     </LinkContainer>
//                   ))}
//                 </NavDropdown>

//                 <LinkContainer to="/favorites">
//                   <Nav.Link>Избранное</Nav.Link>
//                 </LinkContainer>

//                 <Button variant="outline-light" onClick={logoutHandler}>Выход</Button>
//               </>
//             )}
//           </Nav>

//           {user && (
//             <Navbar.Text className="me-2">
//               Привет, {user.name}
//             </Navbar.Text>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



// import React from 'react';
// import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// // import { Avatar, IconButton } from '@mui/material';  // Импортируем MUI Avatar для аватара
// // import { faker } from '@faker-js/faker';

// const categories = [
//   { name: 'Комната', path: '/category/room' },
//   { name: 'Квартира', path: '/category/apartment' },
//   { name: 'Дом', path: '/category/house' },
// ];

// // Компонент для отображения аватара пользователя
// const UserAvatar = ({ avatarType }) => {
//   return (
//     <IconButton sx={{ p: 0 }}>
//       <Avatar
//         alt="User Avatar"
//         src={`https://api.dicebear.com/9.x/${avatarType}/svg?seed=${faker.number.int({
//           max: 50,
//         })}`}
//       />
//     </IconButton>
//   );
// };

// export default function NavigationBar({ userData }) {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         {/* Логотип */}
//         <LinkContainer to="/">
//           <Navbar.Brand>
//             <img
//               src="/public/Logo.webp"
//               alt="Housing Rental Logo"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             Housing Rental Company
//           </Navbar.Brand>
//         </LinkContainer>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* Категории жилья */}
//             <NavDropdown title="Категории жилья" id="basic-nav-dropdown">
//               {categories.map((category) => (
//                 <LinkContainer key={category.name} to={category.path}>
//                   <NavDropdown.Item>{category.name}</NavDropdown.Item>
//                 </LinkContainer>
//               ))}
//             </NavDropdown>

//             {/* Ссылка на избранное */}
//             <LinkContainer to="/favorites">
//               <Nav.Link>Избранное</Nav.Link>
//             </LinkContainer>
//           </Nav>

//           <Nav>
//             {/* Кнопки для входа и регистрации */}
//             <LinkContainer to="/signin">
//               <Button variant="outline-light" className="me-2">Вход</Button>
//             </LinkContainer>
//             <LinkContainer to="/signup">
//               <Button variant="light">Регистрация</Button>
//             </LinkContainer>
//           </Nav>

//           {/* Аватар пользователя (если пользователь авторизован) */}
//           {/* {userData && <UserAvatar avatarType={userData.avatar} />} */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }





  


