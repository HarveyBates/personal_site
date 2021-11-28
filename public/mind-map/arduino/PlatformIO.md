# PlatformIO


## Description
Platform IO allows for easy uploading and viewing of microcontroller input and outputs. This information covers the command line interface for PlatformIO.

Website: [PlatformIO](https://platformio.org/)

## Install 

Curl (requires python):

```bash
curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py -o get-platformio.py
python3 get-platformio.py
```

Add given path to PATH variables. If confused see this [link](https://docs.platformio.org/en/latest/core/installation.html).

Homebrew (MacOS & Linux):
```bash
brew install platformio
```


## Setup 

Website: [User Guide](https://docs.platformio.org/en/latest/core/userguide/index.html)

Pretty sure platformio-cli requires the main file name to be the same as the folder name.

```bash 
pio project init # Init project in current dir with folders and resources
```

Edit the .yml file with project specific configuration.

```bash
[env:teensy41]
platform = teensy
board = teensy41
framework = arduino

board_build.mcu = imxrt1062

lib_deps =
milesburton/DallasTemperature @^3.9.1

upload_protocol = teensy-cli

platform_packages = 
toolchain-gccarmnoneeabi@~1.90301.200702
tool-teensy@https://github.com/maxgerhardt/pio-tool-teensy-arm/archive/master.zip

```

## Execute

```bash
pio --help # Display help
pio run # Compile code
pio run -t upload # Run then upload
pio run -e board_name -t upload # Run and upload to specific board
```
