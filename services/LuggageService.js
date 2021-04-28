const LuggageModel = require('../model/Luggage');

class LuggageService {
  constructor() {
  }

  getLuggage(weight) {
    return await LuggageModel.findOne({
      where:
        { maxWeight: { '$se': weight } }
    });
  }

}

module.exports = new LuggageService();
