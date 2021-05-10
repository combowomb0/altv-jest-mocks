const { Vector3, Entity, Vector2 } = require('../../lib/mocks/alt-client');

let vector3;
let vector2;

describe('Vector3 ', () => {
  beforeEach(() => {
    vector3 = new Vector3();
  });

  test('should have properties', () => {
    expect(vector3.x).toBe(0);
    expect(vector3.y).toBe(0);
    expect(vector3.z).toBe(0);
  });

  test('should toDegrees', () => {
    expect(vector3.toDegrees()).toBe(vector3);
  });

  test('should angleTo', () => {
    expect(vector3.angleTo()).toBe(vector3);
  });

  test('should add', () => {
    expect(vector3.add()).toBe(vector3);
  });

  test('should toArray', () => {
    expect(vector3.toArray()).toBeInstanceOf(Array);
  });

  test('should negative', () => {
    expect(vector3.negative()).toBe(vector3);
  });

  test('should distanceTo', () => {
    expect(vector3.distanceTo()).toBe(0);
  });

  test('should getlength', () => {
    expect(vector3.getlength()).toBe(0);
  });

  test('should normalize', () => {
    expect(vector3.normalize()).toBe(vector3);
  });

  test('should div', () => {
    expect(vector3.div()).toBe(vector3);
  });

  test('should angleToDegrees', () => {
    expect(vector3.angleToDegrees()).toBe(vector3);
  });

  test('should toRadians', () => {
    expect(vector3.toRadians()).toBe(vector3);
  });

  test('should sub', () => {
    expect(vector3.sub()).toBe(vector3);
  });

  test('should mul', () => {
    expect(vector3.mul()).toBe(vector3);
  });

  test('should isInRange', () => {
    expect(vector3.isInRange()).toBe(false);
  });
});

describe('Vector2', () => {
  beforeEach(() => {
    vector2 = new Vector2();
  });

  test('should have properties', () => {
    expect(vector3.x).toBe(0);
    expect(vector3.y).toBe(0);
  });

  test('should toRadians', () => {
    expect(vector2.toRadians()).toBe(vector2);
  });
  test('should toDegrees', () => {
    expect(vector2.toDegrees()).toBe(vector2);
  });
  test('should distanceTo', () => {
    expect(vector2.distanceTo()).toBe(0);
  });
  test('should toArray', () => {
    expect(vector2.toArray()).toBeInstanceOf(Array);
  });
  test('should normalize', () => {
    expect(vector2.normalize()).toBe(vector2);
  });
  test('should getlength', () => {
    expect(vector2.getlength()).toBe(0);
  });
  test('should add', () => {
    expect(vector2.add()).toBe(vector2);
  });
  test('should div', () => {
    expect(vector2.div()).toBe(vector2);
  });
  test('should sub', () => {
    expect(vector2.sub()).toBe(vector2);
  });
  test('should negative', () => {
    expect(vector2.negative()).toBe(vector2);
  });
  test('should angleToDegrees', () => {
    expect(vector2.angleToDegrees()).toBe(vector2);
  });
  test('should mul', () => {
    expect(vector2.mul()).toBe(vector2);
  });
  test('should angleTo', () => {
    expect(vector2.angleTo()).toBe(vector2);
  });
  test('should isInRange', () => {
    expect(vector2.isInRange()).toBe(false);
  });
});
