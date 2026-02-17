const sum = require("./sum");

describe("test for sum fnx",()=>{
test("adds 2+2 equal 4",()=>{
    expect(sum(2,3)).toBe(5);
})
test("adds -2+(-20) equal -22",()=>{
    expect(sum(-2,-20)).toBe(-22);
})

})

