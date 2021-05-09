const { WebSocketClient } = require("../../lib/mocks/alt-client");

let websocket;

describe("WebSocketClient", () => {
  beforeEach(() => {
    websocket = new WebSocketClient();
  });

  test("should have properties", () => {
    expect(websocket.pingInterval).toBe(0);
    expect(websocket.readyState).toBe(0);
    expect(websocket.perMessageDeflate).toBe(false);
    expect(websocket.url).toBe("");
    expect(websocket.autoReconnect).toBe(false);
  });

  test("should setExtraHeader", () => {
    expect(websocket.setExtraHeader()).toBeUndefined();
  });

  test("should stop", () => {
    expect(websocket.stop()).toBeUndefined();
  });

  test("should on", () => {
    expect(websocket.on()).toBeUndefined();
  });

  test("should start", () => {
    expect(websocket.start()).toBeUndefined();
  });

  test("should off", () => {
    expect(websocket.off()).toBeUndefined();
  });

  test("should getSubProtocols", () => {
    expect(websocket.getSubProtocols()).toBeInstanceOf(Array);
  });

  test("should send", () => {
    expect(websocket.send()).toBe(false);
  });

  test("should addSubProtocol", () => {
    expect(websocket.addSubProtocol()).toBeUndefined();
  });
});
