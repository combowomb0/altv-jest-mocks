const { WorldObject, Vector3 } = require("../../lib/mocks/alt-client")

describe("WorldObject", () => {
  test("should have Vector3 pos", () => {
    let worldObject = new WorldObject();
    expect(worldObject.pos).toBeInstanceOf(Vector3);
  })
})