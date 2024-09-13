const checkId = (req, res, next) => {
  const {id} = req.params
  if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({message: 'Invalid ID'})
  }
  return next()
}

module.exports = checkId
