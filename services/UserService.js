const UserModel = require('../model/User');

class UserService {
  constructor() {
  }

  getUser(name, age, gender) {
    return await UserModel.create({
      name: name,
      age: age,
      gender: gender
    });
  }

}

module.exports = new UserService();
