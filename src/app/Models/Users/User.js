"use strict";
var User = (function () {
    function User(userInfo) {
        this.userId = userInfo.userId;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
        this.telephone = userInfo.telephone;
        this.mail = userInfo.mail;
        this.userPassword = userInfo.userPassword;
        this.UserTypeId = userInfo.UserTypeId;
        this.genderId = userInfo.genderId;
        this.dateOfBirth = userInfo.dateOfBirth;
        this.dateOfRegistration = userInfo.dateOfRegistration;
        this.street = userInfo.street;
        this.city = userInfo.city;
        this.streetNumber = userInfo.streetNumber;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map
