
// var expect = require("chai").expect;

// describe("canary test", function() {
//   // A "canary" test is one we set up to always pass
//   // This can help us ensure our testing suite is set up correctly before writing real tests
//   it("should pass this canary test", function() {
//     expect(true).to.be.true;
//   });
// });

// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server");
// var db = require("../models");
// var expect = chai.expect;

// // Setting up the chai http plugin
// chai.use(chaiHttp);

// var request;

// describe("GET /api/user", function() {
//   // Before each test begins, create a new request server for testing
//   // & delete all examples from the db
//   beforeEach(function() {
//     request = chai.request(server);
//     return db.sequelize.sync({ force: true });
//   });

//   it("should find all examples", function(done) {
//     // Add some examples to the db to test with
//     db.User.bulkCreate([
//       { first_name: "odufa", age: 24, astrology_sign: "cancer" },
//       { first_name: "roxxanne", age: 21, astrology_sign: "pisces" }
//     ]).then(function() {
//       // Request the route that returns all examples
//       request.get("/api/user").end(function(err, res) {
//         var responseStatus = res.status;
//         var responseBody = res.body;

//         // Run assertions on the response

//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseBody)
//           .to.be.an("array")
//           .that.has.lengthOf(2);

//         expect(responseBody[0])
//           .to.be.an("object")
//           .that.includes({ first_name: "odufa", age: 24, astrology_sign: "cancer" },);

//         expect(responseBody[1])
//           .to.be.an("object")
//           .that.includes({ first_name: "roxxanne", age: 21, astrology_sign: "pisces" });

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//     });
//   });
// });

