---
title: TB67H420FTG (H-Bridge / Motor/TEC Driver)
...

<p style="text-align: center;"><a href="https://harveybates.xyz/">Home</a> - <a href="https://harveybates.xyz/knowledge/index">Back</a></p>

## Description
This IC is useful for medium power motor drivers or limited power thermoelectric coolers (peltier modules). It can be configured for duel or single applications with the latter provding almost double the power. Be aware that this module runs HOT so sufficient cooling is needed.

For single motor mode, two digital pins are needed. For duel mode, 4 digital pins are needed. A I2C PWM breakout board such as the PCA9685 12-bit, 16-channel IC can be used if more digital pins are needed. This IC can have its I2C address configured to prevent conflicting addresses.

Alternative component: DRV8871. A single motor driver for up to 3.6 A or 1.8 A continuous with cooling.

## Resources
Pololu Website Guide: [TB67H420FTG](https://www.pololu.com/product/2999)

[Video](https://www.youtube.com/watch?v=LH3bHMQEy7U) on connecting motor to Teensy microcontroller.

[Schematic](https://www.pololu.com/product/2999#lightbox-picture0J8689)

## Setup
### Wiring
Single motor:

- INA1 = a digital pin

- INA2 = a digital pin

- PWMA = a digital pin

- GND = Ground

Do not connect VCC to Teensy as this is a regulated power OUTPUT from the motors input voltage source!

- A+ and A- = should be connected together via a jumper

- B+ and B- = should be connected together via a jumper

- VIN = supply voltage (normally 12 V)

- HBMode = should be connected to VCC (3.3 or 5 V) via a jumper

## Current Limiting
The TB67H420FTG can actively limit the current through the motors by using a fixed-frequency PWM current regulation (current chopping). This carrier board connects voltage dividers to the VREFA and VREFB pins that set the reference voltage to about 3.6 V.

In single-channel mode, the default 3.6 V reference voltage results in a nominal single-channel current limit of 9 A. The formula for the current chopping threshold in single-channel mode is Iout=VREF×2.5.

