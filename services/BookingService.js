const BookingModel = require('../model/Booking');

class BookingService {
  constructor() {
  }

  create(user, flight) {
    return await BookingModel.create({
      user_id: user.id,
      flight_id: flight.id,
      status: 'ACTIVE'
    });
  }

  cancel(booking) {
    booking.status = 'CANCELLED';
    return await BookingModel.update(booking);
  }

  addInsurance(insurance) {
    booking.insurance_id = insurance.id;
    return await BookingModel.update(booking);
  }

  addLuggage(luggage) {
    booking.luggage_id = luggage.id;
    return await BookingModel.update(booking);
  }

  addMeal(meal) {
    booking.meal_id = meal.id;
    return await BookingModel.update(booking);
  }
}

module.exports = new BookingService();
