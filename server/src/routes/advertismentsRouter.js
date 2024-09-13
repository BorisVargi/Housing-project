const { Advertisment, Favourite } = require('../../db/models');
const advertismentRouter = require('express').Router();
const checkBody = require('../middlewares/checkBody');
const checkId = require('../middlewares/checkId');
const catchError = require('../../utils/catchError');

advertismentRouter
  .route('/')
  .get(async (req, res) => {
    console.log(Advertisment);
    try {
      const allAdvertis = await Advertisment.findAll();
      res.json(allAdvertis);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка получения всех объявлений' });
    }
  })
  .post(checkBody, checkId, async (req, res) => {
    try {
      const { typesId, price, photo, description } = req.body;
      const newAdvertis = await Advertisment.create({
        typesId,
        price,
        photo,
        description,
      });
      res.status(201).json(newAdvertis);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка создания объявления' });
    }
  });

advertismentRouter
  .route('/:id')
  .get(checkId, async (req, res) => {
    try {
      const { id } = req.params;
      const oneAdvertis = await Advertisment.findByPk(id);
      if (!oneAdvertis) {
        return res.status(404).json({ message: 'Объявление не найдено' });
      }
      res.json(oneAdvertis);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка получения объявления' });
    }
  })
  .delete(checkId, async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAdvertis = await Advertisment.destroy({
        where: { id },
      });
      if (!deletedAdvertis) {
        return res.status(404).json({ message: 'Объявление не найдено' });
      }
      res.status(204).end();
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка удаления объявления' });
    }
  })
  .patch(checkBody, checkId, async (req, res) => {
    try {
      const { id } = req.params;
      const { typesId, price, photo, description } = req.body;
      const [updated] = await Advertisment.update(
        { typesId, price, photo, description },
        { where: { id } },
      );
      if (!updated) {
        return res.status(404).json({ message: 'Объявление не найдено' });
      }
      const updatedAdvertis = await Advertisment.findByPk(id);
      res.json(updatedAdvertis);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка обновления объявления' });
    }
  });

advertismentRouter.route('/favorites/:userId').get(async (req, res) => {
  try {
    const { userId } = req.params;

    const favorites = await Favourite.findAll({
      where: { userId },
      include: {
        model: Advertisment,
        attributes: ['id', 'typesId', 'price', 'photo', 'description'],
      },
    });
    const favAdvertis = favorites.map((favorite) => favorite.Advertisment);

    res.json(favAdvertis);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: 'Ошибка получения избранных объявлений' });
  }
});

module.exports = advertismentRouter;
