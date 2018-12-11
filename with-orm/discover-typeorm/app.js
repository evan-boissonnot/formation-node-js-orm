"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var typeorm_1 = require("typeorm");
var User_1 = require("./src/entity/User");
typeorm_1.createConnection().then(function (connection) {
    var userRepository = connection.getRepository(User_1.User);
    // create and setup express app
    var app = express();
    app.use(bodyParser.json());
    // register routes
    app.get("/users", function (req, res) {
        // here we will have logic to return all users
        var result = userRepository.find().then(function (value) {
            res.send(value);
        });
    });
    app.get("/users/:id", function (req, res) {
        // here we will have logic to return user by id
    });
    app.post("/users", function (req, res) {
        // here we will have logic to save a user
    });
    app.put("/users/:id", function (req, res) {
        // here we will have logic to update a user by a given user id
    });
    app.delete("/users/:id", function (req, res) {
        // here we will have logic to delete a user by a given user id
    });
    // start express server
    app.listen(3000);
});
