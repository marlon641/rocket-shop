var assert = require("assert");
var MembershipApplication = require("../models/membership_application");

describe('Membership application requirements', function () {
    var validApp;

    before(function () {
        //arrange the data here
        validApp = new MembershipApplication({
            first: 'Test',
            last: 'User',
            email: 'test@test.com',
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe("Application valid if...", function () {
        it('All validators are successful', function () {     //this is a callback function
            assert(validApp.isValid(), "Application not valid");
        });
        it("Email is 4 or more chars and contains an @", function () {
            assert(validApp.emailIsValid());
        });
        it("Height is between 60 and 75 inches", function () {
            assert(validApp.emailIsValid());
        });
        it("Age is between 15 and 100", function () {
            assert(validApp.emailIsValid());
        });
        it("Weight is between 100 and 300", function () {
            assert(validApp.emailIsValid());
        });

        it("First and last name are provided", function () {
            assert(validApp.nameIsValid());
        });
    })

    describe("Application invalid if...", function () {

        it.skip("is past the validUntil date", function() {
            //figure this out
        })

        it("Email is 4 chars or less", function () {
            var app = new MembershipApplication({email: "a@a"});
            assert(!app.emailIsValid());
        })
        it("Email doesn't have an @", function () {
            var app = new MembershipApplication({email: "abcde"});
            assert(!app.emailIsValid());
        })
        it("Email is omitted", function () {
            var app = new MembershipApplication();
            assert(!app.emailIsValid());
        })
        it("Height is less than 60 inches", function () {
            var app = new MembershipApplication({height: 59});
            assert(!app.heightIsValid());
        })
        it("Height is more than 75 inches", function () {
            var app = new MembershipApplication({email: 76});
            assert(!app.heightIsValid());
        })
        it("Height is omitted", function () {
            var app = new MembershipApplication();
            assert(!app.heightIsValid());
        })
        it("Age is less than 15", function () {
            var app = new MembershipApplication({age: 14});
            assert(!app.ageIsValid());
        })
        it("Age is more than 100", function () {
            var app = new MembershipApplication({age: 101});
            assert(!app.ageIsValid());
        })
        it("Age is omitted", function () {
            var app = new MembershipApplication();
            assert(!app.ageIsValid());
        })
        it("Weight is less than 100", function () {
            var app = new MembershipApplication({weight: 99});
            assert(!app.weightIsValid());
        })
        it("Weight is more than 300", function () {
            var app = new MembershipApplication({weight: 301});
            assert(!app.weightIsValid());
        })
        it("Weight is omitted", function () {
            var app = new MembershipApplication();
            assert(!app.weightIsValid());
        })
        it("First name is not provided", function () {
            var app = new MembershipApplication();
            assert(!app.nameIsValid());
        })
        it("Last name is not provided", function () {
            var app = new MembershipApplication();
            assert(!app.nameIsValid());
        })
    })
})
