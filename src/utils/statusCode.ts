class StatusCode {
  readonly status = {
    success: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
    serverError: 500

  }
}

export default new StatusCode()
