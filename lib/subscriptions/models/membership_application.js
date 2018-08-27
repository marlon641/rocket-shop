var MembershipApplication = function (args) {

    this.emailIsValid = function () {

    }

    this.heightIsValid = function () {

    }

    this.ageIsValid = function () {

    }

    this.weightIsValid = function () {

    }

    this.isValid = function () {
        return this.emailIsValid() &&
            this.heightIsValid() &&
            this.ageIsValid() &&
            this.weightIsValid();
    }

}

Model.exports = MembershipApplication;