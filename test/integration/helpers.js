import supertest from "supertest";
import chai from "chai";
import createApp from "../../src/app.js";

global.createApp = createApp;
global.supertest = supertest;
global.expect = chai.expect;