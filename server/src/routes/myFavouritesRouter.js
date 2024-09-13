const verifyAccessToken = require('../middlewares/verifyAccessToken');
const { User } = require('../../db/models');

myFavouritesRouter.get('/favourites', verifyAccessToken, async (req, res) => {
  const posts = await PPPPPPP.findAll({
    where: { userId: res.locals.user.id },
    include: User,
  });
  res.json(posts);
});

// module.exports = myFavouritesRouter
