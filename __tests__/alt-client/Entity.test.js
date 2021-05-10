const { Entity, Vector3 } = require('../../lib/mocks/alt-client');

let entity;

describe('Entity', () => {
  beforeEach(() => {
    entity = new Entity();
  });

  test('should have properties', () => {
    expect(entity.scriptID).toBe(0);
    expect(entity.model).toBe(0);
    expect(entity.visible).toBe(false);
    expect(entity.pos).toBeInstanceOf(Vector3);
    expect(entity.rot).toBeInstanceOf(Vector3);
    expect(entity.all).toBeInstanceOf(Array);
    expect(entity.id).toBe(0);
  });

  test('should getSyncedMeta', () => {
    expect(entity.getSyncedMeta()).toBeUndefined();
  });

  test('should getByID', () => {
    expect(entity.getByID()).toBe(entity);
  });

  test('should getStreamSyncedMeta', () => {
    expect(entity.getStreamSyncedMeta()).toBeUndefined();
  });

  test('should hasStreamSyncedMeta', () => {
    expect(entity.hasStreamSyncedMeta()).toBe(false);
  });

  test('should hasSyncedMeta', () => {
    expect(entity.hasSyncedMeta()).toBe(false);
  });

  test('should getByScriptID', () => {
    expect(entity.getByScriptID()).toBe(entity);
  });
});
