const {Checkpoint, RGBA, Vector3} = require('../../lib/mocks/alt-client');
let checkpoint;

describe('', () => {
  beforeEach(() =>{
    checkpoint = new Checkpoint();
  })
  
  test('should have properties', () => {
    expect(checkpoint.checkpointType).toBe(0);
    expect(checkpoint.color).toBeInstanceOf(RGBA);
    expect(checkpoint.nextPos).toBeInstanceOf(Vector3);
    expect(checkpoint.height).toBe(0);
    expect(checkpoint.radius).toBe(0);
  })

  test('should isPointIn', () => {
    expect(checkpoint.isPointIn()).toBe(false);
  })

  test('should isEntityIn', () => {
    expect(checkpoint.isEntityIn()).toBe(false);
  })
  
  
})
