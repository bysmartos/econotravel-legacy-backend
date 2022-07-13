import express from 'express';
import request from 'supertest';
import { userRoute } from '../../src/route';


const app = express();

app.use(express.json())
app.use(userRoute);


describe("POST /user/register", () => {
    describe("when passed a username and password", () => {

        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)
                .post('/user/register')
                .send({
                    email: "mi@mail.com",
                    password: "1234",
                    name:"Laura",
                    last_name:"Rodríguez",
                    role:"client"
                });

            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })

    })

    describe("when the email or password is missing", () => {

        test("should return a 400 status code to show there was a user error.", async () => {
            const response = await request(app)
                .post('/user/register')
                .send({ password: "1234" });

            expect(response.status).toEqual(400);
        })

    })

})

describe("GET /user/all", () => {
    describe("cuando se entre en la url muestra todos los usuarios", () => {

        test('should respond with a 201 & content-type "application/json', async () => {
            const response = await request(app)
                .get('/user/all')

            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        })

    })

    // describe("when something's wrong", () => {

    //     test("should return a 400 status code to show there was a user error.", async () => {
    //         const response = await request(app)
    //             .get('/user/all')
    //             //.send({ password: "1234" });

    //         expect(response.status).toEqual(400);
    //     })
    // })

})