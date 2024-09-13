const catchError = (res, error) => {
  console.error(error);
  return res.status(500).json({ message: `Error: ${error.message}` });
};

module.exports = catchError
