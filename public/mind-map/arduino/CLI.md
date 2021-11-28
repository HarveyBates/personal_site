# Arduino Command Line Interface (CLI)

## Description
Build and run arduino sketches from the command line.

## Installation
Website: [Installing ArduinoCLI](https://arduino.github.io/arduino-cli/latest/installation/)

Homebrew:
```bash
brew install arduino-cli
```

## Setup
Website: [Getting Started](https://arduino.github.io/arduino-cli/latest/getting-started/)

```bash
arduino-cli help core # Help page
# Create config file to store commands so i dont have to type them in the terminal
arduino-cli config init # Create yaml file 
arduino-cli sketch new SKETCH_NAME # Create new sketch in current dir
arduino-cli core update-index # Update cli with latest libraries and boards
arduino-cli board list # List connected devices (core shows the device i need to install)
arduino-cli core install arduino:samd # Install boards (change arduino:samd for core value)
arduino-cli core list # List all installed boards
arduino-cli lib search SEARCH_TERM # search for a library
arduino-cli lib install LIBRARY # Install a lib from the searched items
```

If I want to install 3<sup>rd</sup> party boards see the above link.

## Run
```bash
arduino-cli core update-index
arduino-cli sketch new FILENAME # Folder must be same name as file
arduino-cli board list # Get name of board and FQBN (Fully qualified board name)
arduino-cli compile --fqbn arduino:avr:nano FILENAME # replace arduino bit with FQBN
arduino-cli upload -p YourBoardPort --fqbn YourBoardFQBN YourSketchName # Upload 
```

Probably best to create a bash executable for each project / board so you can run all these processes in the background.
