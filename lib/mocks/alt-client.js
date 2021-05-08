class MockVector3 {
  y = 0;
  z = 0;
  x = 0;
  toDegrees = jest.fn().mockReturnValue(new MockVector3());
  toArray = jest.fn();
  sub = jest.fn().mockReturnValue(new MockVector3());
  angleToDegrees = jest.fn().mockReturnValue(new MockVector3());
  div = jest.fn().mockReturnValue(new MockVector3());
  getlength = jest.fn().mockReturnValue(0);
  mul = jest.fn().mockReturnValue(new MockVector3());
  isInRange = jest.fn().mockReturnValue(false);
  angleTo = jest.fn().mockReturnValue(new MockVector3());
  negative = jest.fn().mockReturnValue(new MockVector3());
  distanceTo = jest.fn().mockReturnValue(0);
  normalize = jest.fn().mockReturnValue(new MockVector3());
  toRadians = jest.fn().mockReturnValue(new MockVector3());
  add = jest.fn().mockReturnValue(new MockVector3());
}
class MockVector2 {
  y = 0;
  x = 0;
  add = jest.fn().mockReturnValue(new MockVector2());
  div = jest.fn().mockReturnValue(new MockVector2());
  normalize = jest.fn().mockReturnValue(new MockVector2());
  toArray = jest.fn();
  angleToDegrees = jest.fn().mockReturnValue(new MockVector2());
  negative = jest.fn().mockReturnValue(new MockVector2());
  sub = jest.fn().mockReturnValue(new MockVector2());
  mul = jest.fn().mockReturnValue(new MockVector2());
  angleTo = jest.fn().mockReturnValue(new MockVector2());
  getlength = jest.fn().mockReturnValue(0);
  toRadians = jest.fn().mockReturnValue(new MockVector2());
  isInRange = jest.fn().mockReturnValue(false);
  toDegrees = jest.fn().mockReturnValue(new MockVector2());
  distanceTo = jest.fn().mockReturnValue(0);
}
class MockRGBA {
  r = 0;
  b = 0;
  a = 0;
  g = 0;
}
class MockBaseObject {
  type = 0;
  valid = false;
  deleteMeta = jest.fn();
  getMeta = jest.fn();
  setMeta = jest.fn();
  hasMeta = jest.fn().mockReturnValue(false);
  destroy = jest.fn();
}
class MockWorldObject extends MockBaseObject {
  pos = new MockVector3();
}
class MockCheckpoint extends MockWorldObject {
  nextPos = new MockVector3();
  radius = 0;
  color = new MockRGBA();
  height = 0;
  checkpointType = 0;
  isEntityIn = jest.fn().mockReturnValue(false);
  isPointIn = jest.fn().mockReturnValue(false);
}
class MockEntity extends MockWorldObject {
  visible = false;
  model = 0;
  all = 0;
  rot = new MockVector3();
  pos = new MockVector3();
  id = 0;
  scriptID = 0;
  hasSyncedMeta = jest.fn().mockReturnValue(false);
  getStreamSyncedMeta = jest.fn();
  getSyncedMeta = jest.fn();
  hasStreamSyncedMeta = jest.fn().mockReturnValue(false);
  getByID = jest.fn();
  getByScriptID = jest.fn();
}
class MockPlayer extends MockEntity {
  headRot = new MockVector3();
  micLevel = 0;
  maxArmour = 0;
  entityAimingAt = 0;
  health = 0;
  isTalking = false;
  aimPos = new MockVector3();
  isInRagdoll = false;
  moveSpeed = 0;
  entityAimOffset = 0;
  nonSpatialVolume = 0;
  all = 0;
  name = "";
  seat = 0;
  isAiming = false;
  local = new MockPlayer();
  spatialVolume = 0;
  currentWeapon = 0;
  vehicle = 0;
  flashlightActive = false;
  currentWeaponComponents = 0;
  maxHealth = 0;
  armour = 0;
  getByID = jest.fn();
  getByScriptID = jest.fn();
}
class MockVehicle extends MockEntity {
  speedVector = new MockVector3();
  all = 0;
  gear = 0;
  handling = 0;
  speed = 0;
  wheelsCount = 0;
  rpm = 0;
  getByID = jest.fn();
  getByScriptID = jest.fn();
}
class MockWebView extends MockBaseObject {
  url = "";
  isVisible = false;
  emit = jest.fn();
  off = jest.fn();
  unfocus = jest.fn();
  on = jest.fn();
  focus = jest.fn();
}
class MockBlip extends MockWorldObject {
  gxtName = "";
  pulse = false;
  highDetail = false;
  flashInterval = 0;
  asMissionCreator = false;
  headingIndicatorVisible = false;
  display = 0;
  category = 0;
  secondaryColor = 0;
  scale = 0;
  alpha = 0;
  showCone = false;
  heading = 0;
  flashes = false;
  outlineIndicatorVisible = false;
  color = 0;
  routeColor = new MockRGBA();
  flashesAlternate = false;
  tickVisible = false;
  size = new MockVector2();
  name = "";
  route = false;
  shortRange = false;
  sprite = 0;
  priority = 0;
  number = 0;
  shrinked = false;
  crewIndicatorVisible = false;
  flashTimer = 0;
  friendIndicatorVisible = false;
  bright = false;
  fade = jest.fn();
}
class MockAreaBlip extends MockBlip {}
class MockRadiusBlip extends MockBlip {}
class MockPointBlip extends MockBlip {}
class MockHandlingData {
  tractionCurveMaxRatio = 0;
  antiRollBarForce = 0;
  rollCentreHeightFront = 0;
  seatOffsetDistX = 0;
  suspensionLowerLimit = 0;
  unkFloat2 = 0;
  centreOfMassOffset = new MockVector3();
  driveInertia = 0;
  tractionSpringDeltaMax = 0;
  tractionCurveMin = 0;
  clutchChangeRateScaleDownShift = 0;
  mass = 0;
  unkFloat1 = 0;
  seatOffsetDistY = 0;
  tractionCurveLateralRatio = 0;
  brakeBiasRear = 0;
  handBrakeForce = 0;
  suspensionForce = 0;
  steeringLock = 0;
  modelFlags = 0;
  tractionBiasFront = 0;
  monetaryValue = 0;
  oilVolume = 0;
  tractionCurveLateral = 0;
  tractionLossMult = 0;
  tractionSpringDeltaMaxRatio = 0;
  suspensionUpperLimit = 0;
  weaponDamageMult = 0;
  tractionCurveMax = 0;
  percentSubmerged = 0;
  inertiaMultiplier = new MockVector3();
  rollCentreHeightRear = 0;
  deformationDamageMult = 0;
  suspensionReboundDamp = 0;
  initialDriveGears = 0;
  tractionCurveMinRatio = 0;
  handlingFlags = 0;
  downforceModifier = 0;
  camberStiffnesss = 0;
  seatOffsetDistZ = 0;
  unkFloat5 = 0;
  clutchChangeRateScaleUpShift = 0;
  driveMaxFlatVel = 0;
  brakeForce = 0;
  initialDragCoeff = 0;
  steeringLockRatio = 0;
  damageFlags = 0;
  tractionBiasRear = 0;
  suspensionBiasRear = 0;
  unkFloat4 = 0;
  brakeBiasFront = 0;
  initialDriveForce = 0;
  percentSubmergedRatio = 0;
  antiRollBarBiasFront = 0;
  initialDriveMaxFlatVel = 0;
  lowSpeedTractionLossMult = 0;
  suspensionBiasFront = 0;
  handlingNameHash = 0;
  engineDamageMult = 0;
  suspensionCompDamp = 0;
  driveBiasFront = 0;
  suspensionRaise = 0;
  petrolTankVolume = 0;
  collisionDamageMult = 0;
  antiRollBarBiasRear = 0;
  acceleration = 0;
  getForHandlingName = jest.fn().mockReturnValue(new MockHandlingData());
  getForModelName = jest.fn().mockReturnValue(new MockHandlingData());
}
class MockMapZoomData {
  fZoomScale = 0;
  vTilesY = 0;
  fZoomSpeed = 0;
  vTilesX = 0;
  fScrollSpeed = 0;
  reset = jest.fn();
  get = jest.fn().mockReturnValue(new MockMapZoomData());
  resetAll = jest.fn();
}
class MockLocalStorage {
  set = jest.fn();
  deleteAll = jest.fn();
  get = jest.fn();
  clear = jest.fn();
  save = jest.fn();
  get = jest.fn().mockReturnValue(new MockLocalStorage());
  delete = jest.fn();
}
class MockMemoryBuffer {
  free = jest.fn().mockReturnValue(false);
  int = jest.fn().mockReturnValue(0);
  ulong = jest.fn();
  ubyte = jest.fn().mockReturnValue(0);
  address = jest.fn();
  ushort = jest.fn().mockReturnValue(0);
  byte = jest.fn().mockReturnValue(0);
  string = jest.fn().mockReturnValue("");
  uint = jest.fn().mockReturnValue(0);
  long = jest.fn();
  float = jest.fn().mockReturnValue(0);
  double = jest.fn().mockReturnValue(0);
  short = jest.fn().mockReturnValue(0);
}
class MockDiscord {
  currentUser = 0;
}
class MockFile {
  read = jest.fn().mockReturnValue("");
  read = jest.fn();
  exists = jest.fn().mockReturnValue(false);
}
class MockVoice {
  activationKey = 0;
  activityInputEnabled = false;
  muteInput = false;
}
class MockWebSocketClient extends MockBaseObject {
  url = "";
  readyState = 0;
  perMessageDeflate = false;
  pingInterval = 0;
  autoReconnect = false;
  stop = jest.fn();
  off = jest.fn();
  send = jest.fn().mockReturnValue(false);
  getSubProtocols = jest.fn();
  addSubProtocol = jest.fn();
  setExtraHeader = jest.fn();
  on = jest.fn();
  start = jest.fn();
}
const mock = {
  deleteMeta: jest.fn(),
  getMeta: jest.fn(),
  hasMeta: jest.fn().mockReturnValue(false),
  setMeta: jest.fn(),
  getSyncedMeta: jest.fn(),
  hasSyncedMeta: jest.fn().mockReturnValue(false),
  addGxtText: jest.fn(),
  beginScaleformMovieMethodMinimap: jest.fn().mockReturnValue(false),
  clearEveryTick: jest.fn(),
  clearInterval: jest.fn(),
  clearNextTick: jest.fn(),
  clearTimeout: jest.fn(),
  clearTimer: jest.fn(),
  emit: jest.fn(),
  emitServer: jest.fn(),
  everyTick: jest.fn(),
  gameControlsEnabled: jest.fn().mockReturnValue(false),
  getCursorPos: jest.fn(),
  getGxtText: jest.fn().mockReturnValue(""),
  getLicenseHash: jest.fn().mockReturnValue(""),
  getLocale: jest.fn().mockReturnValue(""),
  getMsPerGameMinute: jest.fn().mockReturnValue(0),
  getPermissionState: jest.fn(),
  getStat: jest.fn().mockReturnValue(0),
  hash: jest.fn().mockReturnValue(0),
  isConsoleOpen: jest.fn().mockReturnValue(false),
  isGameFocused: jest.fn().mockReturnValue(false),
  isInStreamerMode: jest.fn().mockReturnValue(false),
  isInDebug: jest.fn().mockReturnValue(false),
  isVoiceActivityInputEnabled: jest.fn().mockReturnValue(false),
  isKeyToggled: jest.fn().mockReturnValue(false),
  isKeyDown: jest.fn().mockReturnValue(false),
  isMenuOpen: jest.fn().mockReturnValue(false),
  isTextureExistInArchetype: jest.fn().mockReturnValue(false),
  loadModel: jest.fn(),
  loadModelAsync: jest.fn(),
  log: jest.fn(),
  logError: jest.fn(),
  logWarning: jest.fn(),
  nextTick: jest.fn(),
  off: jest.fn(),
  offServer: jest.fn(),
  on: jest.fn(),
  once: jest.fn(),
  on: jest.fn(),
  once: jest.fn(),
  onServer: jest.fn(),
  onceServer: jest.fn(),
  removeGxtText: jest.fn(),
  removeIpl: jest.fn(),
  requestIpl: jest.fn(),
  takeScreenshot: jest.fn(),
  takeScreenshotGameOnly: jest.fn(),
  resetStat: jest.fn(),
  setCamFrozen: jest.fn(),
  setConfigFlag: jest.fn(),
  getConfigFlag: jest.fn().mockReturnValue(false),
  doesConfigFlagExist: jest.fn().mockReturnValue(false),
  setCursorPos: jest.fn(),
  setInterval: jest.fn(),
  setMsPerGameMinute: jest.fn(),
  setRotationVelocity: jest.fn(),
  setStat: jest.fn(),
  setTimeout: jest.fn(),
  setWeatherCycle: jest.fn(),
  setWeatherSyncActive: jest.fn(),
  showCursor: jest.fn(),
  toggleGameControls: jest.fn(),
  toggleVoiceControls: jest.fn(),
  loadYtyp: jest.fn().mockReturnValue(false),
  unloadYtyp: jest.fn().mockReturnValue(false),
  evalModule: jest.fn(),
  hasResource: jest.fn().mockReturnValue(false),
  resourceName: "",
  version: "",
  sdkVersion: 0,
  branch: "",
  Vector3: MockVector3,
  Vector2: MockVector2,
  RGBA: MockRGBA,
  BaseObject: MockBaseObject,
  WorldObject: MockWorldObject,
  Checkpoint: MockCheckpoint,
  Entity: MockEntity,
  Player: MockPlayer,
  Vehicle: MockVehicle,
  WebView: MockWebView,
  Blip: MockBlip,
  AreaBlip: MockAreaBlip,
  RadiusBlip: MockRadiusBlip,
  PointBlip: MockPointBlip,
  HandlingData: MockHandlingData,
  MapZoomData: MockMapZoomData,
  LocalStorage: MockLocalStorage,
  MemoryBuffer: MockMemoryBuffer,
  Discord: MockDiscord,
  File: MockFile,
  Voice: MockVoice,
  WebSocketClient: MockWebSocketClient,
};
module.exports = {
  __esModule: true,
  default: mock,
  ...mock,
};
