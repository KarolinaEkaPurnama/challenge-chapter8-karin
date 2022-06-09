const ApplicationError = require('./ApplicationError')

class EmailAlreadyTakenError extends ApplicationError {
  constructor (car) {
    super(`${car.name} is already rented!!`)
    this.car = car
  }

  get details () {
    return { email: this.email }
  }
}

module.exports = EmailAlreadyTakenError
