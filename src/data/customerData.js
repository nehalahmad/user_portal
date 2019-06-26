const customers = [
  {
    id: 1,
    name: "John Smith",
    age: 30,
    description: "John is a software engineer",
    mobile: "9555014713",
    type: {
      regular: true,
      corporate: false
    },
    loyalProgramSubscribed: true,
    pickupDate: new Date(),
    charges: "10",
    numberOfEmployees: 10,
    distanceTravelled: 100
  },
  {
    id: 2,
    name: "Kelly Hawkins",
    age: 30,
    description: "Kelly is UX Engineer",
    mobile: "9555014714",
    type: {
      regular: false,
      corporate: true
    },
    loyalProgramSubscribed: false,
    pickupDate: new Date(),
    charges: "5",
    numberOfEmployees: 5,
    distanceTravelled: 10
  }
];

export default customers;
