# LoRaWAN Libraries

## Description
Low power wide area network protocol (LoRaWAN) is used to send long range messages between nodes and clients. These messages are quite small ~51 bytes, but with proper packaging can provide sufficient information for capturing remote sensor data.

## Setup
### MCCI-lmic - arduino-lmic
Fairly low-level library that requires some configuration to ensure the right region is selected before integrating into your project.

Documentation: [arduino-lmic](https://github.com/mcci-catena/arduino-lmic)

#### Installation
To install navigate to the Arduino Library Manager and search for "MCCI-limc".

Alternatively, download the repository as a zip and unpack it in your Arduino/Libraries folder.

Before using, navigate to lmic_project_config.h (in Arduino/Libraries/MCCI-lmic folder) and comment out regions except for your specific region.

```cpp
//#define CFG_eu868 1
//#define CFG_us915 1
#define CFG_au915 1
//#define CFG_as923 1
//#define LMIC_COUNTRY_CODE LMIC_COUNTRY_CODE_JP	/* for as923-JP */
//#define CFG_kr920 1
//#define CFG_in866 1
```

### Alternative (arduino-lorawan)
Higher level more "arduinoesque" type library.

Documentation: [arduino-lorawan](https://github.com/mcci-catena/arduino-lorawan)

## Other good resources
[Node-Red with LoRaWAN Node](https://marcoroda.com/2020/04/12/TTGO-LORA-TTN.html)
[Adafruit LoRaWAN tutorial](https://learn.adafruit.com/the-things-network-for-feather/arduino-code)


