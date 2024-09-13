// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Container } from 'react-bootstrap';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import axiosInstance from '../../service/axiosInstance';

// export default function SingleCardPage() {
//   const { id } = useParams();
//   const [card, setCard] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCard = async () => {
//       try {
//         const res = await axiosInstance.get(`/api/card/${id}`);
//         setCard(res.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке карточки:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCard();
//   }, [id]);

//   if (loading) return <div>Загрузка...</div>;
//   if (!card) return <div>Карточка не найдена</div>;

//   return (
//     <Container>
//       <Card className="mb-5">
//         <Card.Img variant="top" src={card.imageUrl} />
//         <Card.Body>
//           <Card.Title>{card.name}</Card.Title>
//           <Card.Text>
//             <strong>Цена:</strong> {card.price} ₽
//           </Card.Text>
//           <Card.Text>
//             <strong>Описание:</strong> {card.description}
//           </Card.Text>
//           <Card.Text>
//             <strong>Адрес:</strong> {card.address}
//           </Card.Text>
//         </Card.Body>
//       </Card>

//       {/* Карта с местоположением */}
//       <YMaps>
//         <Map
//           defaultState={{ center: card.coordinates, zoom: 12 }}
//           width="100%"
//           height="400px"
//         >
//           <Placemark geometry={card.coordinates} />
//         </Map>
//       </YMaps>
//     </Container>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axiosInstance from '../../service/axiosInstance';

export default function SingleCardPage({ addToFavourites }) {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await axiosInstance.get(`/api/card/${id}`);
        setCard(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке карточки:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleAddToFavourites = () => {
    addToFavourites(card);
    setIsFavourite(true); // Обновляем состояние, если карточка добавлена
  };

  if (loading) return <div>Загрузка...</div>;
  if (!card) return <div>Карточка не найдена</div>;

  return (
    <Container>
      <Card className="mb-5">
        <Card.Img variant="top" src={card.imageUrl} />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>
            <strong>Цена:</strong> {card.price} ₽
          </Card.Text>
          <Card.Text>
            <strong>Описание:</strong> {card.description}
          </Card.Text>
          <Card.Text>
            <strong>Адрес:</strong> {card.address}
          </Card.Text>

          {/* Кнопка для добавления в избранное */}
          <Button
            variant={isFavourite ? "success" : "primary"}
            onClick={handleAddToFavourites}
            disabled={isFavourite}
          >
            {isFavourite ? "Добавлено в избранное" : "В избранное"}
          </Button>
        </Card.Body>
      </Card>

      {/* Карта с местоположением */}
      <YMaps>
        <Map
          defaultState={{ center: card.coordinates, zoom: 12 }}
          width="100%"
          height="400px"
        >
          <Placemark geometry={card.coordinates} />
        </Map>
      </YMaps>
    </Container>
  );
}


