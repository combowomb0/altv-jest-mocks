const { Vehicle, Vector3, VehicleHandling } = require('../../lib/mocks/alt-client');

let veh;

describe('Vehicle', () => {
  beforeEach(() => {
    veh = new Vehicle();
  });

  test('should have properties', () => {
    expect(veh.gear).toBe(0);
    expect(veh.rpm).toBe(0);
    expect(veh.wheelsCount).toBe(0);
    expect(veh.all).toBeInstanceOf(Array);
    expect(veh.speedVector).toBeInstanceOf(Vector3);
    expect(veh.handling).toBeInstanceOf(VehicleHandling);
    expect(veh.speed).toBe(0);
  });

  test('should getByID', () => {
    expect(veh.getByID()).toBe(veh);
  });

  test('should getByScriptID', () => {
    expect(veh.getByScriptID()).toBe(veh);
  });
});
