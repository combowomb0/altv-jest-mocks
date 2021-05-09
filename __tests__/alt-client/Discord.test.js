const { DiscordUser, Discord } = require("../../lib/mocks/alt-client");

describe('DiscordUser', () => {
  test('should have properties', () => {
    let user = new DiscordUser();
    expect(user.id).toBe('');
    expect(user.name).toBe('');
    expect(user.discriminator).toBe('');
    expect(user.avatar).toBe('');
  })
})

describe('Discord', () => {
  test('should have properties', () => {
    let discord = new Discord();
    expect(discord.currentUser).toBeInstanceOf(DiscordUser);
  })
})
