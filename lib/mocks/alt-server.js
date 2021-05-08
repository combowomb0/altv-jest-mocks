class MockVector3 {
  x = 0;
  z = 0;
  y = 0;
  normalize = jest.fn().mockReturnValue(new MockVector3());
  isInRange = jest.fn().mockReturnValue(false);
  toDegrees = jest.fn().mockReturnValue(new MockVector3());
  sub = jest.fn().mockReturnValue(new MockVector3());
  angleToDegrees = jest.fn().mockReturnValue(new MockVector3());
  toRadians = jest.fn().mockReturnValue(new MockVector3());
  toArray = jest.fn();
  mul = jest.fn().mockReturnValue(new MockVector3());
  add = jest.fn().mockReturnValue(new MockVector3());
  angleTo = jest.fn().mockReturnValue(new MockVector3());
  distanceTo = jest.fn().mockReturnValue(0);
  getlength = jest.fn().mockReturnValue(0);
  negative = jest.fn().mockReturnValue(new MockVector3());
  div = jest.fn().mockReturnValue(new MockVector3());
}
class MockVector2 {
  x = 0;
  y = 0;
  toRadians = jest.fn().mockReturnValue(new MockVector2());
  isInRange = jest.fn().mockReturnValue(false);
  mul = jest.fn().mockReturnValue(new MockVector2());
  toArray = jest.fn();
  div = jest.fn().mockReturnValue(new MockVector2());
  add = jest.fn().mockReturnValue(new MockVector2());
  normalize = jest.fn().mockReturnValue(new MockVector2());
  angleTo = jest.fn().mockReturnValue(new MockVector2());
  negative = jest.fn().mockReturnValue(new MockVector2());
  toDegrees = jest.fn().mockReturnValue(new MockVector2());
  getlength = jest.fn().mockReturnValue(0);
  sub = jest.fn().mockReturnValue(new MockVector2());
  distanceTo = jest.fn().mockReturnValue(0);
  angleToDegrees = jest.fn().mockReturnValue(new MockVector2());
}
class MockRGBA {
  g = 0;
  a = 0;
  r = 0;
  b = 0;
}
class MockBaseObject {
  type = 0;
  valid = false;
  hasMeta = jest.fn().mockReturnValue(false);
  destroy = jest.fn();
  getMeta = jest.fn();
  deleteMeta = jest.fn();
  setMeta = jest.fn();
}
class MockWorldObject extends MockBaseObject {
  dimension = 0;
  pos = new MockVector3();
}
class MockEntity extends MockWorldObject {
  id = 0;
  rot = new MockVector3();
  visible = false;
  all = 0;
  model = 0;
  netOwner = 0;
  hasStreamSyncedMeta = jest.fn().mockReturnValue(false);
  getByID = jest.fn();
  setSyncedMeta = jest.fn();
  getStreamSyncedMeta = jest.fn();
  deleteSyncedMeta = jest.fn();
  hasSyncedMeta = jest.fn().mockReturnValue(false);
  setStreamSyncedMeta = jest.fn();
  deleteStreamSyncedMeta = jest.fn();
  setNetOwner = jest.fn();
  getSyncedMeta = jest.fn();
  resetNetOwner = jest.fn();
}
class MockPlayer extends MockEntity {
  socialId = "";
  currentWeaponComponents = 0;
  armour = 0;
  maxArmour = 0;
  vehicle = 0;
  currentWeapon = 0;
  all = 0;
  name = "";
  entityAimingAt = 0;
  ping = 0;
  entityAimOffset = new MockVector3();
  hwidExHash = "";
  health = 0;
  flashlightActive = false;
  authToken = "";
  seat = 0;
  socialID = "";
  hwidHash = "";
  currentWeaponTintIndex = 0;
  ip = "";
  maxHealth = 0;
  setClothes = jest.fn();
  removeAllWeapons = jest.fn();
  setWeaponTintIndex = jest.fn();
  isEntityInStreamRange = jest.fn().mockReturnValue(false);
  giveWeapon = jest.fn();
  spawn = jest.fn();
  removeWeapon = jest.fn();
  removeWeaponComponent = jest.fn();
  addWeaponComponent = jest.fn();
  setWeather = jest.fn();
  getClothes = jest.fn();
  getProp = jest.fn();
  setProp = jest.fn();
  getByID = jest.fn();
  clearProp = jest.fn();
  kick = jest.fn();
  setDateTime = jest.fn();
  clearBloodDamage = jest.fn();
}
class MockVehicle extends MockEntity {
  destroyed = false;
  roofState = false;
  engineHealth = 0;
  primaryColor = 0;
  interiorColor = 0;
  darkness = 0;
  manualEngineControl = false;
  bodyAdditionalHealth = 0;
  nightlightOn = false;
  customPrimaryColor = new MockRGBA();
  frontWheels = 0;
  repairsCount = 0;
  lockState = 0;
  modKit = 0;
  handbrakeActive = false;
  pearlColor = 0;
  engineOn = false;
  all = 0;
  livery = 0;
  bodyHealth = 0;
  wheelType = 0;
  modKitsCount = 0;
  tireSmokeColor = new MockRGBA();
  dirtLevel = 0;
  windowTint = 0;
  numberPlateIndex = 0;
  sirenActive = false;
  headlightColor = 0;
  petrolTankHealth = 0;
  activeRadioStation = 0;
  lightsMultiplier = 0;
  neonColor = new MockRGBA();
  model = 0;
  driver = 0;
  neon = 0;
  dashboardColor = 0;
  numberPlateText = "";
  wheelsCount = 0;
  rearWheels = 0;
  flamethrowerActive = false;
  daylightOn = false;
  hasArmoredWindows = 0;
  wheelColor = 0;
  customTires = false;
  secondaryColor = 0;
  roofLivery = 0;
  customSecondaryColor = new MockRGBA();
  setExtra = jest.fn();
  setPartDamageLevel = jest.fn();
  setWindowOpened = jest.fn();
  isWheelDetached = jest.fn().mockReturnValue(false);
  getBumperDamageLevel = jest.fn().mockReturnValue(0);
  getPartBulletHoles = jest.fn().mockReturnValue(0);
  setDamageStatusBase64 = jest.fn();
  setSpecialLightDamaged = jest.fn();
  isWindowDamaged = jest.fn().mockReturnValue(false);
  setDoorState = jest.fn();
  setWheelHasTire = jest.fn();
  isWheelBurst = jest.fn().mockReturnValue(false);
  setRearWheels = jest.fn();
  doesWheelHasTire = jest.fn().mockReturnValue(false);
  setArmoredWindowHealth = jest.fn();
  setWheelOnFire = jest.fn();
  getModsCount = jest.fn().mockReturnValue(0);
  repair = jest.fn();
  getByID = jest.fn();
  getAttached = jest.fn().mockReturnValue(new MockVehicle());
  setBumperDamageLevel = jest.fn();
  getArmoredWindowShootCount = jest.fn().mockReturnValue(0);
  setGamestateDataBase64 = jest.fn();
  setAppearanceDataBase64 = jest.fn();
  getMod = jest.fn().mockReturnValue(0);
  isWindowOpened = jest.fn().mockReturnValue(false);
  setArmoredWindowShootCount = jest.fn();
  isLightDamaged = jest.fn().mockReturnValue(false);
  setScriptDataBase64 = jest.fn();
  getDamageStatusBase64 = jest.fn().mockReturnValue("");
  setHealthDataBase64 = jest.fn();
  setLightDamaged = jest.fn();
  setWheelHealth = jest.fn();
  getHealthDataBase64 = jest.fn().mockReturnValue("");
  getExtra = jest.fn().mockReturnValue(false);
  getDoorState = jest.fn().mockReturnValue(0);
  getAppearanceDataBase64 = jest.fn().mockReturnValue("");
  setPartBulletHoles = jest.fn();
  getGamestateDataBase64 = jest.fn().mockReturnValue("");
  getAttachedTo = jest.fn().mockReturnValue(new MockVehicle());
  getWheelHealth = jest.fn().mockReturnValue(0);
  setWheelDetached = jest.fn();
  isWheelOnFire = jest.fn().mockReturnValue(false);
  setMod = jest.fn();
  isSpecialLightDamaged = jest.fn().mockReturnValue(false);
  setWindowDamaged = jest.fn();
  getScriptDataBase64 = jest.fn().mockReturnValue("");
  setWheelBurst = jest.fn();
  getArmoredWindowHealth = jest.fn().mockReturnValue(0);
  getPartDamageLevel = jest.fn().mockReturnValue(0);
  setWheels = jest.fn();
}
class MockBlip extends MockWorldObject {}
class MockPointBlip extends MockBlip {}
class MockColshape extends MockWorldObject {
  playersOnly = false;
  colshapeType = 0;
  isEntityIn = jest.fn().mockReturnValue(false);
  isPointIn = jest.fn().mockReturnValue(false);
}
class MockColshapeCylinder extends MockColshape {}
class MockColshapeSphere extends MockColshape {}
class MockColshapeCircle extends MockColshape {}
class MockColshapeCuboid extends MockColshape {}
class MockColshapeRectangle extends MockColshape {}
class MockCheckpoint extends MockColshape {}
class MockVoiceChannel extends MockBaseObject {
  isPlayerMuted = jest.fn().mockReturnValue(false);
  addPlayer = jest.fn();
  mutePlayer = jest.fn();
  unmutePlayer = jest.fn();
  isPlayerInChannel = jest.fn().mockReturnValue(false);
  removePlayer = jest.fn();
}
class MockFile {
  read = jest.fn().mockReturnValue("");
  exists = jest.fn().mockReturnValue(false);
  read = jest.fn();
}
const mock = {
  deleteMeta: jest.fn(),
  getMeta: jest.fn(),
  hasMeta: jest.fn().mockReturnValue(false),
  setMeta: jest.fn(),
  deleteSyncedMeta: jest.fn(),
  getSyncedMeta: jest.fn(),
  hasSyncedMeta: jest.fn().mockReturnValue(false),
  setSyncedMeta: jest.fn(),
  clearEveryTick: jest.fn(),
  clearInterval: jest.fn(),
  clearNextTick: jest.fn(),
  clearTimeout: jest.fn(),
  clearTimer: jest.fn(),
  emit: jest.fn(),
  emitClient: jest.fn(),
  emitClient: jest.fn(),
  emitAllClients: jest.fn(),
  setPassword: jest.fn(),
  everyTick: jest.fn(),
  getNetTime: jest.fn().mockReturnValue(0),
  getResourceExports: jest.fn(),
  getResourceMain: jest.fn().mockReturnValue(""),
  getResourcePath: jest.fn().mockReturnValue(""),
  hasResource: jest.fn().mockReturnValue(false),
  hash: jest.fn().mockReturnValue(0),
  log: jest.fn(),
  logError: jest.fn(),
  logWarning: jest.fn(),
  nextTick: jest.fn(),
  off: jest.fn(),
  offClient: jest.fn(),
  on: jest.fn(),
  once: jest.fn(),
  on: jest.fn(),
  once: jest.fn(),
  on: jest.fn(),
  once: jest.fn(),
  onClient: jest.fn(),
  onClient: jest.fn(),
  onceClient: jest.fn(),
  onceClient: jest.fn(),
  setInterval: jest.fn(),
  setTimeout: jest.fn(),
  startResource: jest.fn(),
  restartResource: jest.fn(),
  stopResource: jest.fn(),
  isInDebug: jest.fn().mockReturnValue(false),
  resourceName: "",
  rootDir: "",
  defaultDimension: 0,
  globalDimension: 0,
  version: "",
  sdkVersion: 0,
  branch: "",
  Vector3: MockVector3,
  Vector2: MockVector2,
  RGBA: MockRGBA,
  BaseObject: MockBaseObject,
  WorldObject: MockWorldObject,
  Entity: MockEntity,
  Player: MockPlayer,
  Vehicle: MockVehicle,
  Blip: MockBlip,
  PointBlip: MockPointBlip,
  Colshape: MockColshape,
  ColshapeCylinder: MockColshapeCylinder,
  ColshapeSphere: MockColshapeSphere,
  ColshapeCircle: MockColshapeCircle,
  ColshapeCuboid: MockColshapeCuboid,
  ColshapeRectangle: MockColshapeRectangle,
  Checkpoint: MockCheckpoint,
  VoiceChannel: MockVoiceChannel,
  File: MockFile,
};
module.exports = {
  __esModule: true,
  default: mock,
  ...mock,
};
