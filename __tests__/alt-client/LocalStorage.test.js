const { LocalStorage } = require("../../lib/mocks/alt-client");

let storage;

describe('LocalStorage', () => {
  beforeEach(() => {
    storage = new LocalStorage();
  })

  test('should delete', () => {
    expect(storage.delete()).toBeUndefined();
  })
  test('should clear', () => {
    expect(storage.clear()).toBeUndefined();
  })
  test('should get', () => {
    expect(storage.get()).toBeUndefined();
  })
  test('should save', () => {
    expect(storage.save()).toBeUndefined();
  })
  test('should deleteAll', () => {
    expect(storage.deleteAll()).toBeUndefined();
  })
  test('should set', () => {
    expect(storage.set()).toBeUndefined();
  })
})

  
