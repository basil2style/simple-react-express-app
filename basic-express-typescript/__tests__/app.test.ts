import request from "supertest";

import  {app} from "../src/app";

describe("Test app controller", () => {
    test("Catch hello world route", async () => {
        const res = await request(app).get("/");
        expect(res.body).toEqual({ message:"Hello World" });
    });
  
    test("GET Error when a bad string is passed ab", async () => {
        const res = await request(app).get("/prime/median/ab");
        expect(res.body).toEqual({message: "Please fill the required field"});
    });

    test("GET prime median for 100", async () => {
        const res = await request(app).get("/prime/median/100");
        expect(res.body).toEqual({"message":[41]});
    });
    test("GET prime median for 1", async () => {
        const res = await request(app).get("/prime/median/1");
        expect(res.body).toEqual({"error": "Couldn't calculate the median"});
    });
});