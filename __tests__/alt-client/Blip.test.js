const { Blip, RGBA, Vector2 } = require('../../lib/mocks/alt-client');

let blip;

describe('Blip', () => {
  beforeEach(() => {
    blip = new Blip();
  });

  test('should have properties', () => {
    expect(blip.scale).toBe(0);
    expect(blip.shrinked).toBe(false);
    expect(blip.category).toBe(0);
    expect(blip.gxtName).toBe('');
    expect(blip.tickVisible).toBe(false);
    expect(blip.number).toBe(0);
    expect(blip.flashInterval).toBe(0);
    expect(blip.showCone).toBe(false);
    expect(blip.crewIndicatorVisible).toBe(false);
    expect(blip.pulse).toBe(false);
    expect(blip.flashesAlternate).toBe(false);
    expect(blip.highDetail).toBe(false);
    expect(blip.secondaryColor).toBe(0);
    expect(blip.name).toBe('');
    expect(blip.headingIndicatorVisible).toBe(false);
    expect(blip.asMissionCreator).toBe(false);
    expect(blip.routeColor).toBeInstanceOf(RGBA);
    expect(blip.color).toBe(0);
    expect(blip.outlineIndicatorVisible).toBe(false);
    expect(blip.sprite).toBe(0);
    expect(blip.priority).toBe(0);
    expect(blip.route).toBe(false);
    expect(blip.flashTimer).toBe(0);
    expect(blip.bright).toBe(false);
    expect(blip.shortRange).toBe(false);
    expect(blip.flashes).toBe(false);
    expect(blip.heading).toBe(0);
    expect(blip.size).toBeInstanceOf(Vector2);
    expect(blip.display).toBe(0);
    expect(blip.friendIndicatorVisible).toBe(false);
    expect(blip.alpha).toBe(0);
  });

  test('should fade', () => {
    expect(blip.fade()).toBeUndefined();
  });
});
