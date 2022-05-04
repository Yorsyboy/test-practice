const stringLength = require("./task1.js");
const reverseString = require("./task2.js");
const calculate = require("./task3.js");
const capitalize  = require("./task4.js");

//Task 1
it("string length", () => {
  expect(stringLength.stringLength("")).toBe(0);
});

it("string length expanded must be between 1 and 10", () => {
  expect(stringLength.stringLength2("developer")).toBe(9);
});

//Task 2
it("reverse string", () => {
  expect(reverseString.reverseString("software")).toMatch("erawtfos");
});

//Task 3
const cal = new calculate();
describe("add", () => {
  it("addition", () => {
    expect(cal.add(1, 1)).toBe(2);
  });
});

describe("subtract", () => {
  it('subtraction', () => {
    expect(cal.subtract(1, 1)).toBe(0);
  })
});

describe("divide", () => {
  it('division', () => {
    expect(cal.divide(1, 1)).toBe(1);
  })
});

describe("mutiply", () => {
  it('multiplication', () => {
    expect(cal.multiply(1, 1)).toBe(1);
  })
});

//Task 4
it('Captilize', () => {
    expect(capitalize.capitalize("microverse")).toMatch("Microverse");
})