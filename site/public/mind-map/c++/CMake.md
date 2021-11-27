# CMake Introduction

## Description

CMake allows for C++ applications to be compiled without entering library, linkers and files manually each time you want to compile your project.

## Installation

Main Site: [CMake](https://cmake.org/install/)

### Homebrew (MacOS & Linux)
```bash
brew install --cask cmake
```

## Setup
Create a file called CMakeLists.txt in your working directory

### Define Operating System
```cmake
if(UNIX AND NOT APPLE)
	... # Linux
elseif(APPLE)
	... # MacOS
else()
	... # Windows
endif()
```

### Define Minimum Version
Documentation: [cmake_minimum_required](https://cmake.org/cmake/help/latest/command/cmake_minimum_required.html)
```cmake
cmake_minimum_required(VERSION "3.19.2")
# Just use current version you are using
```

### Define Project Name
```cmake
project("project_name")
```

### Locate Installed Package
```cmake
find_package(*package_name* REQUIRED)
```

### Set Source Directory
```cmake
set(NAME_SRC
	src/main.cpp
	src/example.cpp)
```

### Set Include Directory
This is where all your C++ header (.h or .hpp) files will be located
```cmake
set(NAME_H
	include/main.h
	include/example.h)	
```

### Set Executable Path
This is where an executable (.exe) file will be generated.
```cmake
set(EXE_PATH ${CMAKE_BINARY_DIR}/bin)
# CMAKE_BINARY_DIR represents the directroy where your CMakeLists.txt file is located
```

### Include Directories
```cmake
include_directories(${CMAKE_SOURCE_DIR}/include ...)
```

### Add Executable
Add components to create an executable.
```cmake
add_executable(${PROJECT_NAME} ${NAME_SRC} ${NAME_H})
```

### Add Compile Features
Add custom compile features such as the C++ version to be used.
```cmake
target_compile_features(${PROJECT_NAME} PUBLIC cxx_std_17)
```

### Link Libraries
Link your project to external libraries.
```cmake
target_link_libraries(${PROJECT_NAME} PRIVATE *library_name* ...)
```

### Target Include Directories
Target - links to specific project

Normal - links globally
```cmake
target_include_directories(${PROJECT_NAME} PRIVATE *library_name* ...)
```

## Overall Structure

```cmake
cmake_minimum_required(VERSION "3.19.2")

project("project_name")

find_package(*package_name* REQUIRED)

set(NAME_SRC
	src/main.cpp
	src/example.cpp)

set(NAME_H
	include/main.h
	include/example.h)

set(EXE_PATH ${CMAKE_BINARY_DIR}/bin)

include_directories(${CMAKE_SOURCE_DIR}/include ...)

add_executable(${PROJECT_NAME} ${NAME_SRC} ${NAME_H})

target_compile_features(${PROJECT_NAME} PUBLIC cxx_std_17)

target_link_libraries(${PROJECT_NAME} PRIVATE *library_name* ...)

target_include_directories(${PROJECT_NAME} PRIVATE *library_name* ...)
```
