class MockVector3 {
  z = 0;
  x = 0;
  y = 0;
  toDegrees = jest.fn().mockReturnValue(this);
  angleTo = jest.fn().mockReturnValue(this);
  add = jest.fn().mockReturnValue(this);
  toArray = jest.fn().mockReturnValue([]);
  negative = jest.fn().mockReturnValue(this);
  distanceTo = jest.fn().mockReturnValue(0);
  getlength = jest.fn().mockReturnValue(0);
  normalize = jest.fn().mockReturnValue(this);
  div = jest.fn().mockReturnValue(this);
  angleToDegrees = jest.fn().mockReturnValue(this);
  toRadians = jest.fn().mockReturnValue(this);
  sub = jest.fn().mockReturnValue(this);
  mul = jest.fn().mockReturnValue(this);
  isInRange = jest.fn().mockReturnValue(false);
}
class MockVector2 {
  x = 0;
  y = 0;
  toRadians = jest.fn().mockReturnValue(this);
  toDegrees = jest.fn().mockReturnValue(this);
  distanceTo = jest.fn().mockReturnValue(0);
  toArray = jest.fn().mockReturnValue([]);
  normalize = jest.fn().mockReturnValue(this);
  getlength = jest.fn().mockReturnValue(0);
  add = jest.fn().mockReturnValue(this);
  div = jest.fn().mockReturnValue(this);
  sub = jest.fn().mockReturnValue(this);
  negative = jest.fn().mockReturnValue(this);
  angleToDegrees = jest.fn().mockReturnValue(this);
  mul = jest.fn().mockReturnValue(this);
  angleTo = jest.fn().mockReturnValue(this);
  isInRange = jest.fn().mockReturnValue(false);
}
class MockRGBA {
  a = 0;
  r = 0;
  g = 0;
  b = 0;
}
class MockBaseObject {
  valid = false;
  type = 0;
  deleteMeta = jest.fn();
  getMeta = jest.fn();
  destroy = jest.fn();
  setMeta = jest.fn();
  hasMeta = jest.fn().mockReturnValue(false);
}
class MockWorldObject extends MockBaseObject {
  pos = new MockVector3();
}
class MockCheckpoint extends MockWorldObject {
  checkpointType = 0;
  color = new MockRGBA();
  nextPos = new MockVector3();
  height = 0;
  radius = 0;
  isPointIn = jest.fn().mockReturnValue(false);
  isEntityIn = jest.fn().mockReturnValue(false);
}
class MockEntity extends MockWorldObject {
  scriptID = 0;
  model = 0;
  visible = false;
  pos = new MockVector3();
  rot = new MockVector3();
  all = [];
  id = 0;
  getSyncedMeta = jest.fn();
  getByID = jest.fn().mockReturnValue(this);
  getStreamSyncedMeta = jest.fn();
  hasStreamSyncedMeta = jest.fn().mockReturnValue(false);
  hasSyncedMeta = jest.fn().mockReturnValue(false);
  getByScriptID = jest.fn().mockReturnValue(this);
}
class MockPlayer extends MockEntity {
  micLevel = 0;
  flashlightActive = false;
  currentWeaponComponents = [];
  all = [];
  maxHealth = 0;
  name = '';
  currentWeapon = 0;
  maxArmour = 0;
  aimPos = new MockVector3();
  nonSpatialVolume = 0;
  headRot = new MockVector3();
  vehicle = 0;
  isAiming = false;
  moveSpeed = 0;
  isInRagdoll = false;
  isTalking = false;
  seat = 0;
  armour = 0;
  health = 0;
  entityAimOffset = new MockVector3();
  spatialVolume = 0;
  local = this;
  entityAimingAt = new MockEntity();
  getByID = jest.fn().mockReturnValue(this);
  getByScriptID = jest.fn().mockReturnValue(this);
}
class MockVehicle extends MockEntity {
  gear = 0;
  rpm = 0;
  wheelsCount = 0;
  all = [];
  speedVector = new MockVector3();
  handling = 0;
  speed = 0;
  getByID = jest.fn().mockReturnValue(this);
  getByScriptID = jest.fn().mockReturnValue(this);
}
class MockWebView extends MockBaseObject {
  url = '';
  isVisible = false;
  unfocus = jest.fn();
  emit = jest.fn();
  on = jest.fn();
  off = jest.fn();
  focus = jest.fn();
}
class MockBlip extends MockWorldObject {
  scale = 0;
  shrinked = false;
  category = 0;
  gxtName = '';
  tickVisible = false;
  number = 0;
  flashInterval = 0;
  showCone = false;
  crewIndicatorVisible = false;
  pulse = false;
  flashesAlternate = false;
  highDetail = false;
  secondaryColor = 0;
  name = '';
  headingIndicatorVisible = false;
  asMissionCreator = false;
  routeColor = new MockRGBA();
  color = 0;
  outlineIndicatorVisible = false;
  sprite = 0;
  priority = 0;
  route = false;
  flashTimer = 0;
  bright = false;
  shortRange = false;
  flashes = false;
  heading = 0;
  size = new MockVector2();
  display = 0;
  friendIndicatorVisible = false;
  alpha = 0;
  fade = jest.fn();
}
class MockAreaBlip extends MockBlip {}
class MockRadiusBlip extends MockBlip {}
class MockPointBlip extends MockBlip {}
class MockHandlingData {
  brakeForce = 0;
  antiRollBarBiasFront = 0;
  suspensionLowerLimit = 0;
  suspensionReboundDamp = 0;
  percentSubmergedRatio = 0;
  tractionCurveMax = 0;
  tractionSpringDeltaMax = 0;
  clutchChangeRateScaleDownShift = 0;
  suspensionRaise = 0;
  driveBiasFront = 0;
  oilVolume = 0;
  driveInertia = 0;
  brakeBiasFront = 0;
  initialDragCoeff = 0;
  downforceModifier = 0;
  suspensionBiasFront = 0;
  handlingFlags = 0;
  percentSubmerged = 0;
  suspensionForce = 0;
  centreOfMassOffset = new MockVector3();
  seatOffsetDistY = 0;
  brakeBiasRear = 0;
  tractionLossMult = 0;
  seatOffsetDistX = 0;
  seatOffsetDistZ = 0;
  unkFloat2 = 0;
  tractionBiasRear = 0;
  unkFloat4 = 0;
  damageFlags = 0;
  unkFloat1 = 0;
  deformationDamageMult = 0;
  tractionCurveLateral = 0;
  tractionCurveLateralRatio = 0;
  modelFlags = 0;
  handBrakeForce = 0;
  initialDriveForce = 0;
  rollCentreHeightFront = 0;
  rollCentreHeightRear = 0;
  tractionSpringDeltaMaxRatio = 0;
  weaponDamageMult = 0;
  camberStiffnesss = 0;
  mass = 0;
  acceleration = 0;
  suspensionUpperLimit = 0;
  lowSpeedTractionLossMult = 0;
  handlingNameHash = 0;
  suspensionCompDamp = 0;
  initialDriveMaxFlatVel = 0;
  driveMaxFlatVel = 0;
  clutchChangeRateScaleUpShift = 0;
  antiRollBarBiasRear = 0;
  suspensionBiasRear = 0;
  tractionCurveMinRatio = 0;
  collisionDamageMult = 0;
  initialDriveGears = 0;
  steeringLock = 0;
  engineDamageMult = 0;
  inertiaMultiplier = new MockVector3();
  petrolTankVolume = 0;
  tractionCurveMaxRatio = 0;
  steeringLockRatio = 0;
  tractionBiasFront = 0;
  unkFloat5 = 0;
  tractionCurveMin = 0;
  antiRollBarForce = 0;
  monetaryValue = 0;
  getForModelName = jest.fn().mockReturnValue(this);
  getForHandlingName = jest.fn().mockReturnValue(this);
}
class MockMapZoomData {
  fZoomSpeed = 0;
  fZoomScale = 0;
  vTilesY = 0;
  vTilesX = 0;
  fScrollSpeed = 0;
  reset = jest.fn();
  resetAll = jest.fn();
  get = jest.fn().mockReturnValue(this);
}
class MockLocalStorage {
  delete = jest.fn();
  get = jest.fn().mockReturnValue(this);
  clear = jest.fn();
  get = jest.fn();
  save = jest.fn();
  deleteAll = jest.fn();
  set = jest.fn();
}
class MockMemoryBuffer {
  free = jest.fn().mockReturnValue(false);
  float = jest.fn().mockReturnValue(0);
  double = jest.fn().mockReturnValue(0);
  ubyte = jest.fn().mockReturnValue(0);
  string = jest.fn().mockReturnValue('');
  address = jest.fn();
  long = jest.fn();
  short = jest.fn().mockReturnValue(0);
  ushort = jest.fn().mockReturnValue(0);
  byte = jest.fn().mockReturnValue(0);
  uint = jest.fn().mockReturnValue(0);
  int = jest.fn().mockReturnValue(0);
  ulong = jest.fn();
}
class MockDiscord {
  currentUser = 0;
}
class MockFile {
  read = jest.fn().mockReturnValue([]);
  exists = jest.fn().mockReturnValue(false);
  read = jest.fn().mockReturnValue('');
}
class MockVoice {
  muteInput = false;
  activityInputEnabled = false;
  activationKey = 0;
}
class MockWebSocketClient extends MockBaseObject {
  pingInterval = 0;
  readyState = 0;
  perMessageDeflate = false;
  url = '';
  autoReconnect = false;
  setExtraHeader = jest.fn();
  stop = jest.fn();
  on = jest.fn();
  start = jest.fn();
  getSubProtocols = jest.fn().mockReturnValue([]);
  off = jest.fn();
  send = jest.fn().mockReturnValue(false);
  addSubProtocol = jest.fn();
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
  getGxtText: jest.fn().mockReturnValue(''),
  getLicenseHash: jest.fn().mockReturnValue(''),
  getLocale: jest.fn().mockReturnValue(''),
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
  resourceName: '',
  version: '',
  sdkVersion: 0,
  branch: '',
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
