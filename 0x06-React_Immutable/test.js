const { Map, fromJS } = require("immutable");

describe("React immutable tests", () => {
  const testObj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
  };
  test("q0", () => {
    const getImmutableObject = require("./0-fromjs");
    expect(getImmutableObject(testObj)).toStrictEqual(fromJS(testObj));
    console.log(getImmutableObject(testObj));

  });
  test("q1", () => {
    const getImmutableObject = require("./1-map");
    expect(getImmutableObject(testObj)).toStrictEqual(Map(testObj));
    console.log(getImmutableObject(testObj));
  });
  /*
  test("q", () => {

  });
  test("q", () => {

  });
  test("q", () => {

  });
  test("q", () => {

  });
  test("q", () => {

  });
  test("q", () => {

  }); */
});