import React from 'react';
import OneCardPafe from '../pages/OneCardPage'

export default function FavouritesPage({ favourites }) {
  return (
    <div>
      <h1>Избранные карточки</h1>
      {favourites.length > 0 ? (
        favourites.map((card) => <Card key={card.id} card={card} />)
      ) : (
        <p>Нет избранных карточек</p>
      )}
    </div>
  );
}
