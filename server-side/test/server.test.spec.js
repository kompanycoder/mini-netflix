// Require test dependencies
const chai = require("chai");
const expect = chai.expect;

// run small test to make sure of connectivity
describe("App connectivity Test", ()=>{
    let App = ()=>{
        let msg = "Functional app running successfully.";
        return msg;
    };
    App();
    it("Should render App successfully", ()=>{
        expect(App).to.be.instanceOf(Function);
    });
    it("should return a string", ()=>{
        expect(App.msg).to.equal.toString("Functional app running successfully.");
    })
})