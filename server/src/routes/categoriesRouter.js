/* eslint-disable consistent-return */
const { TypeBuild } = require('../../db/models');
const categoriesRouter = require('express').Router();

categoriesRouter.route('/').get(async (req, res) => {
  try {
    const allCategories = await TypeBuild.findAll();
    res.json(allCategories);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: 'Ошибка получения всех категорий жилья' });
  }
});

categoriesRouter.route('/').post(async (req, res) => {
  try {
    const { housingType } = req.body;
    const newCategory = await TypeBuild.create({ housingType });
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, text: 'Ошибка создания категории' });
  }
});

categoriesRouter.route('/').delete(async (req, res) => {
  try {
    await TypeBuild.destroy({ where: {} });
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: 'Ошибка удаления всех категорий' });
  }
});

categoriesRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const category = await TypeBuild.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: 'Категория не найдена' });
    }

    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, text: 'Ошибка получения категории' });
  }
});
categoriesRouter.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await TypeBuild.destroy({
      where: { id },
    });
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Категория не найдена' });
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, text: 'Ошибка удаления категории' });
  }
});

module.exports = categoriesRouter;
