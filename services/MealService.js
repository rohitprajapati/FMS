const MealModel = require('../model/Meal');

class MealService {
  constructor() {
  }

  getMeal(type) {
    // find meal from database
    return await MealModel.findOne({where: {type: type}});
  }

}

module.exports = new MealService();
