# CPM-Make

## Description
Adds dependencies to current machine upon building CMake for the first time. For example, if a specific dependency is needed for the current project, it will be downloaded before compiling your C++ application. This module also allows for linking of said dependency if it is downloaded successfully.

## Installation
Main Site: [CPM-Make GitHub](https://github.com/cpm-cmake/CPM.cmake)

### Manual Install
To install navigate to this [link](https://github.com/cpm-cmake/CPM.cmake/releases) and download the latest release.	

Add CPM.camke to the location where CMakeLists.txt file is located.

### Automatic download (with CMake)
CPM-Make can be downloaded directly by CMake. To do this you need to add the following code snippet to the start of your CMakeLists.txt file.
```cmake
set(CPM_DOWNLOAD_VERSION 0.28.4)
# Set download version to latest release before executing 

if(CPM_SOURCE_CACHE)
	set(CPM_DOWNLOAD_LOCATION "${CPM_SOURCE_CACHE}/cpm/CPM_${CPM_DOWNLOAD_VERSION}.cmake")
elseif(DEFINED ENV{CPM_SOURCE_CACHE})
	set(CPM_DOWNLOAD_LOCATION "$ENV{CPM_SOURCE_CACHE}/cpm/CPM_${CPM_DOWNLOAD_VERSION}.cmake")
else()
	set(CPM_DOWNLOAD_LOCATION "${CMAKE_BINARY_DIR}/cmake/CPM_${CPM_DOWNLOAD_VERSION}.cmake")
endif()

if(NOT (EXISTS ${CPM_DOWNLOAD_LOCATION}))
	message(STATUS "Downloading CPM.cmake to ${CPM_DOWNLOAD_LOCATION}")
	file(DOWNLOAD
			https://github.com/TheLartians/CPM.cmake/releases/download/v${CPM_DOWNLOAD_VERSION}/CPM.cmake
			${CPM_DOWNLOAD_LOCATION}
		)
endif()

include(${CPM_DOWNLOAD_LOCATION})
```

## Add a Package
Add a package to your C++ project. I am not sure if the list of packages is limited to those listed in on this page. Perhaps other packages can be installed this way with the right configuration.
```cmake
CPMAddPackage(
		NAME # The unique name of the dependency (should be the exported target's name)
		VERSION	# The minimum version of the dependency (optional, defaults to 0)
		OPTIONS	# Configuration options passed to the dependency (optional)
		DOWNLOAD_ONLY # If set, the project is downloaded, but not configured (optional)
		[...]         # Origin parameters forwarded to FetchContent_Declare, see below
		)
```

## Link a Library
Once downloaded and added it needs to be linked to your C++ project.
```cmake
if(*library_name*_ADDED)
	add_library(*library_name* INTERFACE)
	include_directories(${*library_source_dir}/include}
	target_include_directories(${PROJECT_NAME} INTERFACE ${*library_source_dir}/include)
	target_link_libraries{${PROJECT_NAME} *library_name*}
endif()
```

