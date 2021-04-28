Flight Management System contains the following components. Please refer class_diagram.png to find out the associations between the components. Please consider FlightService as the main service with which customer will interact. This FlightService will again interact with other services to manage meal, insurance, bookings and luggage. Other services are not reflected in the class_diagram because of time constraints -

Customer - It is a simple end-user who interacts with FlightService to create and manage bookings.

FlightService - This service is used to create bookings and add-ons to the booking like meals, luggage insurance, etc.

Flight - This component refers to a flight and contains all the information that a flight contains like flight number, airports, scheduled/actual arrival and departure dates, etc.

Airport - This component refers airport. Contains name, address and timezone.

Crew - This component refers to a flight crew. Each crew has a name and rank (pilot, flight attendant, etc.)

Meal - This component refers to a meal. Each meal can have types - like veg, non-veg, Chinese, etc.

Luggage - This component refers to the luggage categories which includes maxWeight and amount.

Insurance - Each flight booking can have insurance which is applicable within fromDate and toDate period.

AdminUser - AdminUser is a special user which can perform admin operations on all the components. For e.g. for the flight component, it can perform cancelFlight operation which will update the "status" of the flight to cancel.

https://app.creately.com/diagram/aUlb9uCy2qB/edit
