/* eslint-disable no-restricted-syntax */
const checkBody = (req, res, next) => {
  for (const key in req.body) {
    if (req.body[key] === undefined) {
      return res.status(400).json({message: 'Invalid form data'})
  }
}
return next()
}

// const checkBody = (fields) => (req, res, next) => {
//  if (!fields.every((el) => !!req.body[el])){
//   return res.status(400).json({message: 'Invalid form data'})
//  }
//  return next()
// }

module.exports = checkBody
