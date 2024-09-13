import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import SignupPage from './components/pages/SignUpPage';
import SigninPage from './components/pages/SignInPage';
import AllCardsPage from './components/pages/AllCardsPage';
import OneCardPage from './components/pages/OneCardPage'; // Изменено название для четкости
import AddRentalForm from './components/pages/AddCardPage';
import axiosInstance, { setAccessToken } from './service/axiosInstance';
import FavouritesPage from './components/pages/FavouritesPage';

export default function App() {
  const [user, setUser] = useState();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => setUser(null));
  }, []);

  const signupHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    if (res.status !== 200) alert('Ошибка регистрации');
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/login', data);
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
  };

  const logoutHandler = async () => {
    await axiosInstance.get('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/add',
          element: <AddRentalForm />,
        },
        {
          path: '/signup',
          element: <SignupPage signupHandler={signupHandler} />,
        },
        {
          path: '/login',
          element: <SigninPage loginHandler={loginHandler} />,
        },
        {
          path: '/logout',
          element: <SigninPage logoutHandler={logoutHandler} />,
        },
        {
          path: '/cards', 
          element: <AllCardsPage />,
        },
        // {
        //   path: '/card/:id', 
        //   element: <OneCardPage />,
        // },
        {
          path: '/card/:id', // Добавлен маршрут для одной карточки
          element: <OneCardPage setFavourites={setFavourites} />,
        },
        {
          path: '/favourites', // Добавлен маршрут для избранных карточек
          element: <FavouritesPage favourites={favourites} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}




