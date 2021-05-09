const { VehicleHandling, Vector3 } = require('../../lib/mocks/alt-client');

let handling;

describe('VehicleHandling', () => {
  beforeEach(() => {
    handling = new VehicleHandling();
  })
  test('should have properties', () => {
    expect(handling.handlingNameHash).toBe(0);
    expect(handling.acceleration).toBe(0);
    expect(handling.antiRollBarBiasFront).toBe(0);
    expect(handling.antiRollBarBiasRear).toBe(0);
    expect(handling.antiRollBarForce).toBe(0);
    expect(handling.brakeBiasFront).toBe(0);
    expect(handling.brakeBiasRear).toBe(0);
    expect(handling.brakeForce).toBe(0);
    expect(handling.camberStiffness).toBe(0);
    expect(handling.centreOfMassOffset).toBeInstanceOf(Vector3);
    expect(handling.clutchChangeRateScaleDownShift).toBe(0);
    expect(handling.clutchChangeRateScaleUpShift).toBe(0);
    expect(handling.collisionDamageMult).toBe(0);
    expect(handling.damageFlags).toBe(0);
    expect(handling.deformationDamageMult).toBe(0);
    expect(handling.downforceModifier).toBe(0);
    expect(handling.driveBiasFront).toBe(0);
    expect(handling.driveInertia).toBe(0);
    expect(handling.driveMaxFlatVel).toBe(0);
    expect(handling.engineDamageMult).toBe(0);
    expect(handling.handBrakeForce).toBe(0);
    expect(handling.handlingFlags).toBe(0);
    expect(handling.inertiaMultiplier).toBeInstanceOf(Vector3);
    expect(handling.initialDragCoeff).toBe(0);
    expect(handling.initialDriveForce).toBe(0);
    expect(handling.initialDriveGears).toBe(0);
    expect(handling.initialDriveMaxFlatVel).toBe(0);
    expect(handling.lowSpeedTractionLossMult).toBe(0);
    expect(handling.mass).toBe(0);
    expect(handling.modelFlags).toBe(0);
    expect(handling.monetaryValue).toBe(0);
    expect(handling.oilVolume).toBe(0);
    expect(handling.percentSubmerged).toBe(0);
    expect(handling.percentSubmergedRatio).toBe(0);
    expect(handling.petrolTankVolume).toBe(0);
    expect(handling.rollCentreHeightFront).toBe(0);
    expect(handling.rollCentreHeightRear).toBe(0);
    expect(handling.seatOffsetDistX).toBe(0);
    expect(handling.seatOffsetDistY).toBe(0);
    expect(handling.seatOffsetDistZ).toBe(0);
    expect(handling.steeringLock).toBe(0);
    expect(handling.steeringLockRatio).toBe(0);
    expect(handling.suspensionBiasFront).toBe(0);
    expect(handling.suspensionBiasRear).toBe(0);
    expect(handling.suspensionCompDamp).toBe(0);
    expect(handling.suspensionForce).toBe(0);
    expect(handling.suspensionLowerLimit).toBe(0);
    expect(handling.suspensionRaise).toBe(0);
    expect(handling.suspensionReboundDamp).toBe(0);
    expect(handling.suspensionUpperLimit).toBe(0);
    expect(handling.tractionBiasFront).toBe(0);
    expect(handling.tractionBiasRear).toBe(0);
    expect(handling.tractionCurveLateral).toBe(0);
    expect(handling.tractionCurveLateralRatio).toBe(0);
    expect(handling.tractionCurveMax).toBe(0);
    expect(handling.tractionCurveMaxRatio).toBe(0);
    expect(handling.tractionCurveMin).toBe(0);
    expect(handling.tractionCurveMinRatio).toBe(0);
    expect(handling.tractionLossMult).toBe(0);
    expect(handling.tractionSpringDeltaMax).toBe(0);
    expect(handling.tractionSpringDeltaMaxRatio).toBe(0);
    expect(handling.unkFloat1).toBe(0);
    expect(handling.unkFloat2).toBe(0);
    expect(handling.unkFloat4).toBe(0);
    expect(handling.unkFloat5).toBe(0);
    expect(handling.weaponDamageMult).toBe(0);
  })

  test('should isModified', () => {
    expect(handling.isModified()).toBe(false);
  })
  
  test('should reset', () => {
    expect(handling.reset()).toBeUndefined();
  })
})
