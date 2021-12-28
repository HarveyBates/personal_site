# Web Functions in the Terminal

## Description
Commands for downloading and interacing with websites and web hosted files.

## Curl
Website: [Curl](https://curl.se/)

Used in termial to tranfer data over http/s.

```bash
curl https://www.example.com # Show html in terminal
curl https://www.example.com -O example.html # Save to html
curl https://www.example.com/filename.cpp -O "filename.cpp" # Save a file
# or
curl -O http://www.example.com/filename.cpp "filename.cpp"
```

## WGet

```bash
wget http://www.example.com/filename.cpp # Download file
```

## Ping 
Test website, get IP address and echo response.

```bash
ping sitename.com # Test site and get public IP address
ping -6 sitename.com # Request IPv6
ping -4 sitename.com # Request IPv4
ping -a sitename.com # Generate sound on successful request
```

## Lync (Web Browser in Terminal)
Lynx is a command line web browser, it works well in most cases.

Website: [Lynx](https://www.commandlinux.com/man-page/man1/lynx.1.html)

### Install (Homebrew):
```bash
brew install lynx
```

### Execute
```bash
lynx # Run
lynx sitename.com # Run on specific site
```
