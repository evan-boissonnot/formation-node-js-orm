import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./src/entity/User";

createConnection().then(connection => {
    const userRepository = connection.getRepository(User);
    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

    app.get("/users", function(req: Request, res: Response) {
        // here we will have logic to return all users

        let result = userRepository.find().then((value) => {
            res.send(value);
        });
    });

    app.get("/users/:id", function(req: Request, res: Response) {
        // here we will have logic to return user by id
    });

    app.post("/users", function(req: Request, res: Response) {
        // here we will have logic to save a user
    });

    app.put("/users/:id", function(req: Request, res: Response) {
        // here we will have logic to update a user by a given user id
    });

    app.delete("/users/:id", function(req: Request, res: Response) {
        // here we will have logic to delete a user by a given user id
    });

    // start express server
    app.listen(3000);
});