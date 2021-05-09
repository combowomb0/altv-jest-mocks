const { Voice } = require("../../lib/mocks/alt-client")

describe('Voice', () => {
  test('should have properties', () => {
    let voice = new Voice();
    expect(voice.muteInput).toBe(false);
    expect(voice.activityInputEnabled).toBe(false);
    expect(voice.activationKey).toBe(0);
  })
})
