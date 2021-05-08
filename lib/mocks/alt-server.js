class MockVector3 {
  z = 0;
  y = 0;
  x = 0;
  negative = jest.fn().mockReturnValue(new MockVector3());
  add = jest.fn().mockReturnValue(new MockVector3());
  mul = jest.fn().mockReturnValue(new MockVector3());
  sub = jest.fn().mockReturnValue(new MockVector3());
  distanceTo = jest.fn().mockReturnValue(0);
  toRadians = jest.fn().mockReturnValue(new MockVector3());
  getlength = jest.fn().mockReturnValue(0);
  normalize = jest.fn().mockReturnValue(new MockVector3());
  angleToDegrees = jest.fn().mockReturnValue(new MockVector3());
  angleTo = jest.fn().mockReturnValue(new MockVector3());
  toDegrees = jest.fn().mockReturnValue(new MockVector3());
  toArray = jest.fn().mockReturnValue([]);
  isInRange = jest.fn().mockReturnValue(false);
  div = jest.fn().mockReturnValue(new MockVector3());
}
class MockVector2 {
  y = 0;
  x = 0;
  toRadians = jest.fn().mockReturnValue(new MockVector2());
  isInRange = jest.fn().mockReturnValue(false);
  normalize = jest.fn().mockReturnValue(new MockVector2());
  angleToDegrees = jest.fn().mockReturnValue(new MockVector2());
  angleTo = jest.fn().mockReturnValue(new MockVector2());
  distanceTo = jest.fn().mockReturnValue(0);
  getlength = jest.fn().mockReturnValue(0);
  div = jest.fn().mockReturnValue(new MockVector2());
  toDegrees = jest.fn().mockReturnValue(new MockVector2());
  mul = jest.fn().mockReturnValue(new MockVector2());
  toArray = jest.fn().mockReturnValue([]);
  add = jest.fn().mockReturnValue(new MockVector2());
  sub = jest.fn().mockReturnValue(new MockVector2());
  negative = jest.fn().mockReturnValue(new MockVector2());
}
class MockRGBA {
  r = 0;
  a = 0;
  b = 0;
  g = 0;
}
class MockBaseObject {
  valid = false;
  type = 0;
  destroy = jest.fn();
  hasMeta = jest.fn().mockReturnValue(false);
  setMeta = jest.fn();
  getMeta = jest.fn();
  deleteMeta = jest.fn();
}
class MockWorldObject extends MockBaseObject {
  pos = new MockVector3();
  dimension = 0;
}
class MockEntity extends MockWorldObject {
  model = 0;
  id = 0;
  visible = false;
  rot = new MockVector3();
  netOwner = 0;
  all = [];
  resetNetOwner = jest.fn();
  getByID = jest.fn().mockReturnValue(new MockEntity());
  getSyncedMeta = jest.fn();
  hasStreamSyncedMeta = jest.fn().mockReturnValue(false);
  hasSyncedMeta = jest.fn().mockReturnValue(false);
  setStreamSyncedMeta = jest.fn();
  deleteStreamSyncedMeta = jest.fn();
  setSyncedMeta = jest.fn();
  setNetOwner = jest.fn();
  getStreamSyncedMeta = jest.fn();
  deleteSyncedMeta = jest.fn();
}
class MockPlayer extends MockEntity {
  socialID = '';
  vehicle = 0;
  maxArmour = 0;
  maxHealth = 0;
  currentWeapon = 0;
  armour = 0;
  entityAimingAt = new MockEntity();
  flashlightActive = false;
  ping = 0;
  authToken = '';
  currentWeaponTintIndex = 0;
  socialId = '';
  currentWeaponComponents = [];
  hwidHash = '';
  ip = '';
  entityAimOffset = new MockVector3();
  name = '';
  seat = 0;
  health = 0;
  all = [];
  hwidExHash = '';
  getProp = jest.fn();
  removeWeapon = jest.fn();
  getClothes = jest.fn();
  addWeaponComponent = jest.fn();
  getByID = jest.fn().mockReturnValue(new MockPlayer());
  removeWeaponComponent = jest.fn();
  clearBloodDamage = jest.fn();
  clearProp = jest.fn();
  giveWeapon = jest.fn();
  setWeather = jest.fn();
  setWeaponTintIndex = jest.fn();
  setProp = jest.fn();
  removeAllWeapons = jest.fn();
  kick = jest.fn();
  setDateTime = jest.fn();
  setClothes = jest.fn();
  spawn = jest.fn();
  isEntityInStreamRange = jest.fn().mockReturnValue(false);
}
class MockVehicle extends MockEntity {
  hasArmoredWindows = 0;
  pearlColor = 0;
  manualEngineControl = false;
  numberPlateIndex = 0;
  petrolTankHealth = 0;
  wheelType = 0;
  rearWheels = 0;
  interiorColor = 0;
  customSecondaryColor = new MockRGBA();
  customTires = false;
  dashboardColor = 0;
  wheelsCount = 0;
  secondaryColor = 0;
  bodyHealth = 0;
  livery = 0;
  model = 0;
  activeRadioStation = 0;
  engineOn = false;
  tireSmokeColor = new MockRGBA();
  darkness = 0;
  windowTint = 0;
  primaryColor = 0;
  modKitsCount = 0;
  lightsMultiplier = 0;
  flamethrowerActive = false;
  neon = 0;
  sirenActive = false;
  destroyed = false;
  nightlightOn = false;
  handbrakeActive = false;
  daylightOn = false;
  lockState = 0;
  frontWheels = 0;
  dirtLevel = 0;
  customPrimaryColor = new MockRGBA();
  wheelColor = 0;
  engineHealth = 0;
  modKit = 0;
  repairsCount = 0;
  neonColor = new MockRGBA();
  driver = new MockPlayer();
  headlightColor = 0;
  bodyAdditionalHealth = 0;
  roofState = false;
  all = [];
  roofLivery = 0;
  numberPlateText = '';
  repair = jest.fn();
  getAppearanceDataBase64 = jest.fn().mockReturnValue('');
  setPartDamageLevel = jest.fn();
  isWheelOnFire = jest.fn().mockReturnValue(false);
  isSpecialLightDamaged = jest.fn().mockReturnValue(false);
  setExtra = jest.fn();
  getArmoredWindowShootCount = jest.fn().mockReturnValue(0);
  setWheelOnFire = jest.fn();
  setAppearanceDataBase64 = jest.fn();
  isWheelBurst = jest.fn().mockReturnValue(false);
  getMod = jest.fn().mockReturnValue(0);
  isWindowDamaged = jest.fn().mockReturnValue(false);
  getPartBulletHoles = jest.fn().mockReturnValue(0);
  setWheelHealth = jest.fn();
  getDoorState = jest.fn().mockReturnValue(0);
  setMod = jest.fn();
  isWheelDetached = jest.fn().mockReturnValue(false);
  setDoorState = jest.fn();
  setArmoredWindowShootCount = jest.fn();
  getModsCount = jest.fn().mockReturnValue(0);
  setWheelDetached = jest.fn();
  getExtra = jest.fn().mockReturnValue(false);
  setScriptDataBase64 = jest.fn();
  getHealthDataBase64 = jest.fn().mockReturnValue('');
  setWindowDamaged = jest.fn();
  getAttachedTo = jest.fn().mockReturnValue(new MockVehicle());
  getDamageStatusBase64 = jest.fn().mockReturnValue('');
  getPartDamageLevel = jest.fn().mockReturnValue(0);
  getBumperDamageLevel = jest.fn().mockReturnValue(0);
  setHealthDataBase64 = jest.fn();
  getAttached = jest.fn().mockReturnValue(new MockVehicle());
  isWindowOpened = jest.fn().mockReturnValue(false);
  setDamageStatusBase64 = jest.fn();
  setWheelBurst = jest.fn();
  getScriptDataBase64 = jest.fn().mockReturnValue('');
  setSpecialLightDamaged = jest.fn();
  setWheelHasTire = jest.fn();
  getWheelHealth = jest.fn().mockReturnValue(0);
  setWheels = jest.fn();
  setRearWheels = jest.fn();
  setLightDamaged = jest.fn();
  doesWheelHasTire = jest.fn().mockReturnValue(false);
  getArmoredWindowHealth = jest.fn().mockReturnValue(0);
  setPartBulletHoles = jest.fn();
  setBumperDamageLevel = jest.fn();
  getByID = jest.fn().mockReturnValue(new MockVehicle());
  setArmoredWindowHealth = jest.fn();
  isLightDamaged = jest.fn().mockReturnValue(false);
  getGamestateDataBase64 = jest.fn().mockReturnValue('');
  setGamestateDataBase64 = jest.fn();
  setWindowOpened = jest.fn();
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
  isPlayerInChannel = jest.fn().mockReturnValue(false);
  addPlayer = jest.fn();
  mutePlayer = jest.fn();
  unmutePlayer = jest.fn();
  removePlayer = jest.fn();
}
class MockFile {
  read = jest.fn().mockReturnValue([]);
  read = jest.fn().mockReturnValue('');
  exists = jest.fn().mockReturnValue(false);
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
  getResourceMain: jest.fn().mockReturnValue(''),
  getResourcePath: jest.fn().mockReturnValue(''),
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
  resourceName: '',
  rootDir: '',
  defaultDimension: 0,
  globalDimension: 0,
  version: '',
  sdkVersion: 0,
  branch: '',
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
