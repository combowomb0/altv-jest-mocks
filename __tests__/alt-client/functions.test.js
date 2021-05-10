const alt = require('../../lib/mocks/alt-client');

describe('Functions', () => {
  test('should deleteMeta', () => {
    expect(alt.deleteMeta()).toBeUndefined();
  });
  test('should getMeta', () => {
    expect(alt.getMeta()).toBeUndefined();
  });
  test('should setMeta', () => {
    expect(alt.setMeta()).toBeUndefined();
  });
  test('should getSyncedMeta', () => {
    expect(alt.getSyncedMeta()).toBeUndefined();
  });
  test('should addGxtText', () => {
    expect(alt.addGxtText()).toBeUndefined();
  });
  test('should clearEveryTick', () => {
    expect(alt.clearEveryTick()).toBeUndefined();
  });
  test('should clearInterval', () => {
    expect(alt.clearInterval()).toBeUndefined();
  });
  test('should clearNextTick', () => {
    expect(alt.clearNextTick()).toBeUndefined();
  });
  test('should clearTimeout', () => {
    expect(alt.clearTimeout()).toBeUndefined();
  });
  test('should clearTimer', () => {
    expect(alt.clearTimer()).toBeUndefined();
  });
  test('should emit', () => {
    expect(alt.emit()).toBeUndefined();
  });
  test('should emitServer', () => {
    expect(alt.emitServer()).toBeUndefined();
  });
  test('should everyTick', () => {
    expect(alt.everyTick()).toBeUndefined();
  });
  test('should getCursorPos', () => {
    expect(alt.getCursorPos()).toBeInstanceOf(alt.Vector2);
  });
  test('should getPermissionState', () => {
    expect(alt.getPermissionState()).toBeUndefined();
  });
  test('should loadModel', () => {
    expect(alt.loadModel()).toBeUndefined();
  });
  test('should loadModelAsync', () => {
    expect(alt.loadModelAsync()).toBeUndefined();
  });
  test('should log', () => {
    expect(alt.log()).toBeUndefined();
  });
  test('should logError', () => {
    expect(alt.logError()).toBeUndefined();
  });
  test('should logWarning', () => {
    expect(alt.logWarning()).toBeUndefined();
  });
  test('should nextTick', () => {
    expect(alt.nextTick()).toBeUndefined();
  });
  test('should off', () => {
    expect(alt.off()).toBeUndefined();
  });
  test('should offServer', () => {
    expect(alt.offServer()).toBeUndefined();
  });
  test('should on', () => {
    expect(alt.on()).toBeUndefined();
  });
  test('should once', () => {
    expect(alt.once()).toBeUndefined();
  });
  test('should on', () => {
    expect(alt.on()).toBeUndefined();
  });
  test('should once', () => {
    expect(alt.once()).toBeUndefined();
  });
  test('should onServer', () => {
    expect(alt.onServer()).toBeUndefined();
  });
  test('should onceServer', () => {
    expect(alt.onceServer()).toBeUndefined();
  });
  test('should removeGxtText', () => {
    expect(alt.removeGxtText()).toBeUndefined();
  });
  test('should removeIpl', () => {
    expect(alt.removeIpl()).toBeUndefined();
  });
  test('should requestIpl', () => {
    expect(alt.requestIpl()).toBeUndefined();
  });
  test('should takeScreenshot', () => {
    expect(alt.takeScreenshot()).toBeUndefined();
  });
  test('should takeScreenshotGameOnly', () => {
    expect(alt.takeScreenshotGameOnly()).toBeUndefined();
  });
  test('should resetStat', () => {
    expect(alt.resetStat()).toBeUndefined();
  });
  test('should setCamFrozen', () => {
    expect(alt.setCamFrozen()).toBeUndefined();
  });
  test('should setConfigFlag', () => {
    expect(alt.setConfigFlag()).toBeUndefined();
  });
  test('should setCursorPos', () => {
    expect(alt.setCursorPos()).toBeUndefined();
  });
  test('should setInterval', () => {
    expect(alt.setInterval()).toBeUndefined();
  });
  test('should setMsPerGameMinute', () => {
    expect(alt.setMsPerGameMinute()).toBeUndefined();
  });
  test('should setRotationVelocity', () => {
    expect(alt.setRotationVelocity()).toBeUndefined();
  });
  test('should setStat', () => {
    expect(alt.setStat()).toBeUndefined();
  });
  test('should setTimeout', () => {
    expect(alt.setTimeout()).toBeUndefined();
  });
  test('should setWeatherCycle', () => {
    expect(alt.setWeatherCycle()).toBeUndefined();
  });
  test('should setWeatherSyncActive', () => {
    expect(alt.setWeatherSyncActive()).toBeUndefined();
  });
  test('should showCursor', () => {
    expect(alt.showCursor()).toBeUndefined();
  });
  test('should toggleGameControls', () => {
    expect(alt.toggleGameControls()).toBeUndefined();
  });
  test('should toggleVoiceControls', () => {
    expect(alt.toggleVoiceControls()).toBeUndefined();
  });
  test('should evalModule', () => {
    expect(alt.evalModule()).toBeUndefined();
  });
  test('should hasMeta', () => {
    expect(alt.hasMeta()).toBe(false);
  });
  test('should hasSyncedMeta', () => {
    expect(alt.hasSyncedMeta()).toBe(false);
  });
  test('should beginScaleformMovieMethodMinimap', () => {
    expect(alt.beginScaleformMovieMethodMinimap()).toBe(false);
  });
  test('should gameControlsEnabled', () => {
    expect(alt.gameControlsEnabled()).toBe(false);
  });
  test('should getGxtText', () => {
    expect(alt.getGxtText()).toBe('');
  });
  test('should getLicenseHash', () => {
    expect(alt.getLicenseHash()).toBe('');
  });
  test('should getLocale', () => {
    expect(alt.getLocale()).toBe('');
  });
  test('should getMsPerGameMinute', () => {
    expect(alt.getMsPerGameMinute()).toBe(0);
  });
  test('should getStat', () => {
    expect(alt.getStat()).toBe(0);
  });
  test('should hash', () => {
    expect(alt.hash()).toBe(0);
  });
  test('should isConsoleOpen', () => {
    expect(alt.isConsoleOpen()).toBe(false);
  });
  test('should isGameFocused', () => {
    expect(alt.isGameFocused()).toBe(false);
  });
  test('should isInStreamerMode', () => {
    expect(alt.isInStreamerMode()).toBe(false);
  });
  test('should isInDebug', () => {
    expect(alt.isInDebug()).toBe(false);
  });
  test('should isVoiceActivityInputEnabled', () => {
    expect(alt.isVoiceActivityInputEnabled()).toBe(false);
  });
  test('should isKeyToggled', () => {
    expect(alt.isKeyToggled()).toBe(false);
  });
  test('should isKeyDown', () => {
    expect(alt.isKeyDown()).toBe(false);
  });
  test('should isMenuOpen', () => {
    expect(alt.isMenuOpen()).toBe(false);
  });
  test('should isTextureExistInArchetype', () => {
    expect(alt.isTextureExistInArchetype()).toBe(false);
  });
  test('should getConfigFlag', () => {
    expect(alt.getConfigFlag()).toBe(false);
  });
  test('should doesConfigFlagExist', () => {
    expect(alt.doesConfigFlagExist()).toBe(false);
  });
  test('should loadYtyp', () => {
    expect(alt.loadYtyp()).toBe(false);
  });
  test('should unloadYtyp', () => {
    expect(alt.unloadYtyp()).toBe(false);
  });
  test('should hasResource', () => {
    expect(alt.hasResource()).toBe(false);
  });
});
