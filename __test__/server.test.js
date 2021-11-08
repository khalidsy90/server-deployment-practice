'use strict';
const {app}=require("../server");
const supertest=require("supertest");
const { expect } = require("@jest/globals");
const request=supertest(app);

describe("API Server Test",()=>{

    test("handle invalid URLS",async ()=>{
        const reponse =await request.get('/not-found')
        expect(reponse.status).toEqual(404)
    })

    test("handle errors",async ()=>{
        const response = await request.get('/bad')
        expect(response.status).toEqual(500)
    })
    test("handle sucsess",async ()=>{
        const response = await request.get('/')
        expect(response.text).toEqual("All thing is good")
    })

    test("timeStamper is work",async ()=>{
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(response.body.time).toBeDefined()
    })})

