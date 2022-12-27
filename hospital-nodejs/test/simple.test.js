const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("respond with Hello World", (done) => {
        request(app).get("/test").expect("Hello World", done);
    })
})
// test('1+1=2', async () => {
//     await expect(1 + 1).toBe(2);
// });