const { Booking, Insurance, Meal, Luggage } = require('../model');
const MealService = require('./MealService');
const InsuranceService = require('./InsuranceService');
const LuggageService = require('./LuggageService');
const UserService = require('./UserService');
const BookingService = require('./BookingService');
const FlightModel = require('../model/Flight');

class FlightService {
  constructor() {
  }

  createBooking(name, age, gender, flightNumber, airline, originAirport, destinationAirport, scheduledDepartureDate, scheduledArrivalDate) {
    const flight = this.findFlight(flightNumber, airline, originAirport, destinationAirport, scheduledDepartureDate, scheduledArrivalDate);
    const user = UserService.getUser(name, age, gender);
    return await BookingService.create(user, flight);
  }

  cancelBooking(booking) {
    return BookingService.cancel(booking);
  }

  findFlight(flightNumber, airline, originAirport, destinationAirport, scheduledDepartureDate, scheduledArrivalDate) {
    return await FlightModel.findOne({where: {flightNumber: flightNumber,
      airline: airline,
      originAirport: originAirport,
      destinationAirport: destinationAirport,
      scheduledDepartureDate: scheduledDepartureDate,
      scheduledArrivalDate: scheduledArrivalDate,
    }});
  }

  addInsuranceToBooking(booking, company, premium, cover, fromDate, toDate) {
    const insurance = InsuranceService.getInsurance(this.user, company, premium, cover, fromDate, toDate);
    return await BookingService.addInsurance(insurance);
  }

  addMealToBooking(type) {
    const meal = MealService.getMeal(type);
    return await BookingService.addMeal(meal);
  }

  addLuggageToBooking(weight) {
    const luggage = LuggageService.getLuggage(weight);
    return await BookingService.addLuggage(luggage);
  }
}

module.exports = new FlightService();
