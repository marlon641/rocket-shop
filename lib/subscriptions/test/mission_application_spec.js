var assert = require("assert");
var MembershipApplication = require("../models/membership_application");

describe("Applying for a mission", function() {
    var validApp;

    before(function() {
        //arrange the data here
        validApp = new MembershipApplication( {
            first : "Test",
            last : "User",
            email : "test@test.com",
            age : 30,
            height : 66,
            weight : 180
        });
    });

    describe("using valid email, first, last, height, age, weight", function() {
        it("Is valid", function() {     //this is a callback function
           assert(validApp.isValid(), "Application not valid");
        });
        it("Reports valid email", function() {
            assert(validApp.emailIsValid());
        });
        it("Reports valid height", function() {
            assert(validApp.emailIsValid());
        });
        it("Reports valid age", function() {
            assert(validApp.emailIsValid());
        });
        it("Reports valid weight", function() {
            assert(validApp.emailIsValid());
        });
        it("Reports valid age", function() {
            assert(validApp.emailIsValid());
        });
    })
})
