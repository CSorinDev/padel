async function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    status: statusCode,
    error: err.message,
  })
}

export default errorHandler
