---
title: Searching in the Terminal
...

<p style="text-align: center;"><a href="https://harveybates.xyz/">Home</a> - <a 
href="https://harveybates.xyz/knowledge/index">Back</a></p>

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
