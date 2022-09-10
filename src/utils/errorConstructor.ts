class ErrorConstructor {
  public errorMessage = (status, message) => ({ status, message })
}

export default new ErrorConstructor()
