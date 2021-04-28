const InsuranceModel = require('../model/Insurance');

class InsuranceService {
  constructor() {
  }

  getInsurance(user, company, premium, cover, fromDate, toDate) {
    return await InsuranceModel.create({
      name: user.name,
      age: user.age,
      gender: user.gender,
      company: company,
      premium: premium,
      cover: cover,
      fromDate: fromDate,
      toDate: toDate,
    });
  }

}

module.exports = new InsuranceService();
