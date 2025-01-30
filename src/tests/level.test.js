const { response } = require("express");
let request = require("supertest");

request = request("http://localhost:8080");

describe("Level routes work", () => {
    it("Returns all levels", () => {
        return request
            .get("/levels")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).toBeGreaterThan(0);
            });
    });

    it("Returns specific level", () => {
        return request
            .get("/levels/1")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => expect(response.body.sceneName).toEqual("When the Stars Come Out"));
    });
});
