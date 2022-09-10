import statusCode from '../utils/statusCode'

export default (err, _req, res, _next) => {
  if (err.status) {
    console.log('AAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB')
    const { status, message } = err

    return res.status(status).json(message)
  }
  console.log(err)
  return res.status(statusCode.status).json({ message: 'Internal Error' })
}
