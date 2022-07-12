import express from 'express';
import request from 'supertest';
import {experienciasRoute} from '../../src/route';


const app = express();
app.use(express.json())
app.use(experienciasRoute);




describe("DELETE  /experiencias/:id", () => {
    describe("when passed all info", () => {
        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)
                .delete('/experiencias/106')
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })
        // should save the username and password in the database
        // should respond with a json object that contains the id from the database. (probably jwt in the real world)
    })
    describe("when something is wrong", () => {
        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .delete('/experiencias/id')
            expect(response.status).toEqual(400);
        })
        // should return a json object that contains an error message.
        // should specify json as the content type in the http header.
    })
  })

