const { BaseObject } = require("../../lib/mocks/alt-client");

let obj;

describe("BaseObject", () => {
  beforeEach(() => {
    obj = new BaseObject();
  })

  test("should have properties", () => {
    expect(obj.valid).toBe(false);
    expect(obj.type).toBe(0);
  })

  test("should deleteMeta", () => {
    expect(obj.deleteMeta()).toBeUndefined();
  })

  test("should getMeta", () => {
    expect(obj.getMeta()).toBeUndefined();
  })

  test("should destroy", () => {
    expect(obj.destroy()).toBeUndefined();
  })
  
  test("should setMeta", () => {
    expect(obj.setMeta()).toBeUndefined();
  })
  
  test("should hasMeta", () => {
    expect(obj.hasMeta()).toBe(false);
  })
})