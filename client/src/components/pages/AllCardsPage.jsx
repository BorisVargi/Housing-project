import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Card from '../ui/OneCard';
import axiosInstance from '../../service/axiosInstance';


export default function AllCardsPage() {
  const [allCards, setCards] = useState([])
    useEffect(() => {
    axios.get('/api/allCards')
      .then((res) => {
        setCards(res.data); // предполагается, что res.data — это массив с карточками
      })
      .catch((err) => {
        console.error("Error fetching cards:", err);
      });
  }, []);
  return <>
  
  {allCards.length
    ? allCards.map((card) => <Card key={card.id} card={card} />)
    : <div>Emptiness inside</div> }
  </>
  }

