var assert = require("assert");
var ReviewProcess = require("/Users/mmorris/projects/rocket-shop/lib/subscriptions/processes/review.js");
var MembershipApplication = require("/Users/mmorris/projects/rocket-shop/lib/subscriptions/models/membership_application.js");

describe("The Review Process", function () {

    describe('Receiving a valid application', function () {
        var decision;
        before(function (done) {    //construct the scenario in the before block
            validApp = new MembershipApplication({
                first: "Test",
                last: "User",
                email: "test@test.com",
                age: 30,
                height: 66,
                weight: 180
            })
            var review = new ReviewProcess();
            review.processApplication(validApp, function (err, result) {
                decision = result;
                done();
            })
        })

        it('returns success', function () {
            assert(decision.success, decision.message);   //assert success. else return the message
        })

    })
});