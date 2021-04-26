## Description

Various bash commands that are useful but don't have a specific order that is worthy of their own page. Also contains useful terminal based programs.

## Date and Time

```bash
cal # Display calendar
cal -3 # Display calendar with next and prev month
date # Display date
```

## System
Display certain system information.

```bash
top # Display current processes
system_profiler SPDisplayDataType | grep Resolution # Get sys resolution (MacOS)
```

## Tree
Displays the current folders tree structure in the terminal.

```bash
brew install tree # Install
tree # Run to display tree structure
```

## Newsboat
RSS terminal reader for RSS feeds.

```bash
brew install newboat # Install
newsboat # Run
vi ~/.newsboat/urls # Add RSS feed URL's
vi ~/.newsboat/config # Add specific configuration
```

For config resources see this [link](https://wiki.archlinux.org/index.php/Newsboat#Configuration).

## File transfer (for android devices)
Add and remove files from android device on a mac. Run from GUI application after installation.

```bash
brew install --cash android-file-transfer # Install
```

