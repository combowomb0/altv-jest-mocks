const { MemoryBuffer } = require("../../lib/mocks/alt-client");

let mbuffer;

describe("MemoryBuffer", () => {
  beforeEach(() => {
    mbuffer = new MemoryBuffer();
  })
  
  test("should free", () => {
    expect(mbuffer.free()).toBe(false);
  });

  test("should float", () => {
    expect(mbuffer.float()).toBe(0);
  });
  test("should double", () => {
    expect(mbuffer.double()).toBe(0);
  });

  test("should ubyte", () => {
    expect(mbuffer.ubyte()).toBe(0);
  });

  test("should string", () => {
    expect(mbuffer.string()).toBe("");
  });

  test("should short", () => {
    expect(mbuffer.short()).toBe(0);
  });

  test("should ushort", () => {
    expect(mbuffer.ushort()).toBe(0);
  });

  test("should byte", () => {
    expect(mbuffer.byte()).toBe(0);
  });

  test("should uint", () => {
    expect(mbuffer.uint()).toBe(0);
  });

  test("should int", () => {
    expect(mbuffer.int()).toBe(0);
  });

  test("should ulong", () => {
    expect(mbuffer.ulong()).toBeUndefined();
  });
  test("should adress", () => {
    expect(mbuffer.address()).toBeUndefined();
  });

  test("should long", () => {
    expect(mbuffer.long()).toBeUndefined();
  });
});
