var Emitter = require("events").EventEmitter;   //nodes event emitter
var util = require("util");

var ReviewProcess = function (args) {
        var callback;

    //make sure the app is valid  (midpoint of the process)
    this.ensureAppValid = function (app) {
        if (app.isValid()) {
            this.emit("validated", app);
        }
        else {
            this.emit("invalid", app.validationMessage());
        }
    };

    //find the next mission   (midpoint of the process)
    this.findNextMission = function(app) {
        //stub this out for now
        app.mission = {
            commander : null,
            pilot : null,
            MAVPilot : null,
            passengers : []
        };
        this.emit("mission-selected", app);
    };

    //make sure role selected is available     (midpoint of the process)
    this.roleIsAvailable = function(app) {
        //we have no concept of role selection just yet
        //TODO: What about a role? Need more info
        this.emit("role-available", app);
    };

    //make sure height/weight/age is right for role      (midpoint of the process)
    this.ensureRoleCompatible = function(app) {
        // TODO: find out about roles and height/weight etc
        this.emit("role-compatible", app);
    };

    //accept the app with a message     (endpoint of the process)
    this.acceptApplication = function(app) {
        callback(null, {
            success: true,
            message: "Welcome to the Mars Program!"
        });
    };

    //deny the app with a message     (endpoint of the process)
    this.denyApplication = function(message) {
        callback(null, {
            success : false,
            message : message
        })
    };

    this.processApplication = function(app, next) {     //next is a callback. (this is the start of the process)
        callback = next;
        this.emit("application-received", app)
    };

    //event path. when each thing finishes, it fires an event, below receives it and does the next thing
    this.on("application-received", this.ensureAppValid);
    this.on("validated", this.findNextMission);
    this.on("mission-selected", this.roleIsAvailable);
    this.on("role-available", this.ensureRoleCompatible);
    this.on("role-compatible", this.acceptApplication);

    //sad path
    this.on("invalid", this.denyApplication);

};

util.inherits(ReviewProcess, Emitter);  //inherit the node emitter with nodes util library
module.exports = ReviewProcess;