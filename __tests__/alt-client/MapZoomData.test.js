const { MapZoomData } = require("../../lib/mocks/alt-client");

let mapZoom;

describe('MapZoomData', () => {
  beforeEach(() =>{
    mapZoom = new MapZoomData();
  })
  
  test('should have properties', () => {
    expect(mapZoom.fZoomSpeed).toBe(0);
    expect(mapZoom.fZoomScale).toBe(0);
    expect(mapZoom.vTilesY).toBe(0);
    expect(mapZoom.vTilesX).toBe(0);
    expect(mapZoom.fScrollSpeed).toBe(0);
  })

  test('should reset', () => {
    expect(mapZoom.reset()).toBeUndefined();
  })

  test('should resetAll', () => {
    expect(mapZoom.resetAll()).toBeUndefined();
  })
  
  test('should get', () => {
    expect(mapZoom.get()).toBeInstanceOf(MapZoomData);
  })
  
})
