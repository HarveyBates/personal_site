# Using JSON with C++

## Description
JSON formatted data is a great asset for sending and receiving formatted information. In C++ the nlohmann library provides an easy way to create and display JSON formatted data.

Documentation: [https://github.com/nlohmann/json](https://github.com/nlohmann/json)

## Installation
Homebrew (MacOS & Linux)
```bash
brew install nlohmann-json
```

## Linking
Link with CMakeLists.txt (CMake):

```cmake
find_package(nlohmann_json 3.2.0 REQUIRED)
target_link_libraries(foo PRIVATE nlohmann_json::nlohmann_json)
```

### CPM-Make (Package manager):

Check in releases for the latest version.

You will need the URL specific to that release version and the SHA256 key.

Only get the include folder as we don't want to download all the test examples.

```cmake
CPMAddPackage(
	NAME nlohmann_json
	VERSION 3.9.0
	# Just get the latest (3.9.0) version, and only the include folder as the rep is big
	URL https://github.com/nlohmann/json/releases/download/v3.9.0/include.zip
	URL_HASH SHA256=5b9b819aed31626aefe2eace23498cafafc1691890556cd36d2a8002f6905009
)
```

## Usage
### Initialisation
```cpp
#include "nlohmann/json.hpp"
using json = nlohmann::json;
```

### Construct JSON Class
```cpp
json j;
```

### Add values
```cpp
j["value_name"] = "value"; // Single value
j["value_name1"]["value_name2"] = "value"; // Nested value
```

### Convert string to JSON object
```cpp
std::string input = "{"happy":true,"pi":3.141}";
j = input;
std::cout << j.dump(4) << std::endl;
```

### Print formatted JSON object
```cpp
int n = 4;
// n represents an int for the number of spaces to indent
std::cout << j.dump(n) << std::endl;
```

### Example output
```json
{
	"value_name": "value", 
	"value_name1" {
		"value_name2": "value"
	}
}
```
