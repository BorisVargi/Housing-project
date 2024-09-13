const jwtConfig = require('./jwtConfig');

const cookieConfig = {
  access: {
      httpOnly: true,
  maxAge: jwtConfig.refresh.expiresIn,
  // Поля ниже могут пригодиться, если браузер не выписывает куки
  secure: true,
  sameSite: 'strict',
  },
  refresh: {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
  }

};

module.exports = cookieConfig;
