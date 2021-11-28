# Searching in the Terminal

## Description
Commands for searching for/within files and folders in the terminal.

## Find
Useful for finding files and folders that match your search term. Must include quotations when searching. Full-stop represents the current working directory.


```bash
find . -name "search_term" # Search for files matching *search_term*
find . -name "*.cpp" # Search for files matching widcard - extension
```

## Search within files with grep
Use grep to search for occurrences of words or characters within files and folders.
```bash
grep "search_term" "filename" # Search for occurances of search_term in a given file
grep "search_term" * # Search all files in dir for occurances
grep -E "word1|word2" * # Search for multiple search terms
grep -rl "search_term" /path # Search subriectories and print out filenames with matches
```

### Grep flags
```bash
-w # Only display whole words
-i # Non-case sensitive
-r # Search sub-directories as well
-c # Count number of matches in each file
-E # Search for multiple search terms
-x # Only show exact matches
```

## Regex
```bash
\ # Escape following character	
. # Any one character
* # Any number of previous character (including none)
+ # Any number of previous character (not including zero)
$ # End of line
^ # Beginning of line
\S # Any non-whitespace character
\s # Any whitespace character
? # Optional
[a-z] or [:lower:] # Match any lowercase character from a to z
[A-Z] or [:upper:] # Match any uppercase character from A to Z
[0-9] or [:digit:] # Match any digit between 0 and 9
[A-Za-z] # Any letter
\n # New line
\r # Carriage return 
\t # Tab
? # Optional
```
