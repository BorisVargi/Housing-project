import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axiosInstance from '../../service/axiosInstance';

const categories = [
  { name: 'Комната', value: 'room' },
  { name: 'Квартира', value: 'apartment' },
  { name: 'Дом', value: 'house' },
];

export default function AddCardPage() {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState([55.751244, 37.618423]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Формирование данных для отправки
    const formData = new FormData();
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('address', address);
    formData.append('coordinates', coordinates);

    // Отправка данных на сервер
    axiosInstance.post('/rentals', formData).then(res => console.log(res.data));
  };

  return (
    <Form onSubmit={handleSubmit} encType="multipart/form-data">
      <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="category"></Label>
        <Input
          type="select"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Выберите категорию</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.name}
            </option>
          ))}
        </Input>
      </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="price"></Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Введите цену"
            />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="description"></Label>
        <Input
          type="textarea"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание"
        />
      </FormGroup>

      <FormGroup>
        <Label for="image">Фото</Label>
        <Input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </FormGroup>

      <FormGroup>
        <Label for="address"></Label>
        <Input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          // onBlur={() => findCoordinates(address)}
          placeholder="Введите адрес"
        />
      </FormGroup>

      {/* Карта с отмеченной точкой */}
      <YMaps>
        <Map defaultState={{ center: coordinates, zoom: 9 }} width="100%" height="400px">
          <Placemark geometry={coordinates} />
        </Map>
      </YMaps>

      <Button type="submit" color="primary" className="mb-5">Добавить</Button>
    </Form>
  );
}



// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input, Col, Row, Alert, Spinner } from 'reactstrap';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import axiosInstance from '../../service/axiosInstance';

// const categories = [
//   { name: 'Комната', value: 'room' },
//   { name: 'Квартира', value: 'apartment' },
//   { name: 'Дом', value: 'house' },
// ];

// export default function AddCardPage() {
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [address, setAddress] = useState('');
//   const [coordinates, setCoordinates] = useState([55.751244, 37.618423]);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     if (!category || !price || !description || !image || !address) {
//       setError('Все поля должны быть заполнены.');
//       return false;
//     }
//     if (price <= 0) {
//       setError('Цена должна быть больше нуля.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     // Валидация формы
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       setLoading(true);

//       // Формирование данных для отправки
//       const formData = new FormData();
//       formData.append('category', category);
//       formData.append('price', price);
//       formData.append('description', description);
//       formData.append('image', image);
//       formData.append('address', address);
//       formData.append('coordinates', coordinates);

//       // Отправка данных на сервер
//       const res = await axiosInstance.post('/rentals', formData);
//       setSuccess('Объявление успешно добавлено.');
//       setCategory('');
//       setPrice('');
//       setDescription('');
//       setImage(null);
//       setAddress('');
//       setCoordinates([55.751244, 37.618423]);
//     } catch (error) {
//       setError('Произошла ошибка при добавлении объявления.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} encType="multipart/form-data">
//       {error && <Alert color="danger">{error}</Alert>}
//       {success && <Alert color="success">{success}</Alert>}

//       <Row form>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="category">Категория</Label>
//             <Input
//               type="select"
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">Выберите категорию</option>
//               {categories.map((cat) => (
//                 <option key={cat.value} value={cat.value}>
//                   {cat.name}
//                 </option>
//               ))}
//             </Input>
//           </FormGroup>
//         </Col>

//         <Col md={6}>
//           <FormGroup>
//             <Label for="price">Цена</Label>
//             <Input
//               type="number"
//               id="price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="Введите цену"
//             />
//           </FormGroup>
//         </Col>
//       </Row>

//       <FormGroup>
//         <Label for="description">Описание</Label>
//         <Input
//           type="textarea"
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Введите описание"
//         />
//       </FormGroup>

//       <FormGroup>
//         <Label for="image">Фото</Label>
//         <Input
//           type="file"
//           id="image"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//       </FormGroup>

//       <FormGroup>
//         <Label for="address">Адрес</Label>
//         <Input
//           type="text"
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Введите адрес"
//         />
//       </FormGroup>

//       {/* Карта с отмеченной точкой */}
//       <YMaps>
//         <Map
//           defaultState={{ center: coordinates, zoom: 9 }}
//           width="100%"
//           height="400px"
//           onClick={(e) => setCoordinates(e.get('coords'))}
//         >
//           <Placemark geometry={coordinates} />
//         </Map>
//       </YMaps>

//       <Button type="submit" color="primary" className="mb-5">
//         {loading ? <Spinner size="sm" /> : 'Добавить'}
//       </Button>
//     </Form>
//   );
// }


