const { Player, Vector3, Entity } = require('../../lib/mocks/alt-client');

let player;

describe('Player', () => {
  beforeEach(() => {
    player = new Player();
  });

  test('should have properties', () => {
    expect(player.micLevel).toBe(0);
    expect(player.flashlightActive).toBe(false);
    expect(player.currentWeaponComponents).toBeInstanceOf(Array);
    expect(player.all).toBeInstanceOf(Array);
    expect(player.maxHealth).toBe(0);
    expect(player.name).toBe('');
    expect(player.currentWeapon).toBe(0);
    expect(player.maxArmour).toBe(0);
    expect(player.aimPos).toBeInstanceOf(Vector3);
    expect(player.nonSpatialVolume).toBe(0);
    expect(player.headRot).toBeInstanceOf(Vector3);
    expect(player.vehicle).toBe(0);
    expect(player.isAiming).toBe(false);
    expect(player.moveSpeed).toBe(0);
    expect(player.isInRagdoll).toBe(false);
    expect(player.isTalking).toBe(false);
    expect(player.seat).toBe(0);
    expect(player.armour).toBe(0);
    expect(player.health).toBe(0);
    expect(player.entityAimOffset).toBeInstanceOf(Vector3);
    expect(player.spatialVolume).toBe(0);
    expect(player.local).toBe(player);
    expect(player.entityAimingAt).toBeInstanceOf(Entity);
  });

  test('should getByID', () => {
    expect(player.getByID()).toBe(player);
  });

  test('should getByScriptID', () => {
    expect(player.getByScriptID()).toBe(player);
  });
});
