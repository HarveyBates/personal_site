# Vim Commands

## Description
Useful vim commands for navigating files, creating, editing and deleting code.

## Modes
```bash
i # Insert mode (before cursor)
I # Insert mode (start of line)
a # Insert mode (after cursor) 
A # Insert mode (end of line)
v # Visual mode
V # Visual line mode
Ctrl-v # Visual block
: # Command mode
```

## Navigation
```bash
e # Move to end of word
w # Jump forward a word
w # Jump word forward
b # Jump word backward
% # Jump to corresponding bracket
} # Jump up to next space
{ # Jump down to next space
gg # Top of file
G # Bottom of file
M # Middle of screen
nG # Move to line number n
'' # Return to last position
```

## View
```bash
zt # Cursor at top of screen
zz # Put cursor at center of screen
zb # Put cursor at bottom of screen
```

## Modifying
```bash
dd # Delete line
dw # Delete word
dit # Delete inside html tags
dct # Delete inside html tages and go to insert mode
da* # Delete around defined char (*)
di* # Delete inside defined char (*)
dG # Delete from cursor to end of file
d} # Delete from cursor to next line break
d{ # Delete from cursor to previous line break

P # Paste before cursor
p # Paste after cursor
"+P # Paste before cursor (or above line) from system clipboard
"+p # Paste after cursor (or next line) from system clipboard

yw # Copy word
yy # Copy line

gQQ # Single line to multi-line
J # Join lines

:%s/\s+$//e # Remove whitespace from file
```

## Searching
```bash
?"term" # Search for term (case-sensitive)
:noh # Stop highlighting
```

### Regex 
Find some useful vim regex patterns here: [vimregex.com](http://www.vimregex.com/)

## Multi-line Editing
```bash
Ctrl-v # Enter visual block mode
j or k # Move down or up rows
i # Insert mode
esc # Escape (whereafter rows should load)
```
Alternative using visual-multi (if installed).
```bash
Ctrl-n # Open visual multi
n # Select next item
i # Edit and insert new text
esc esc # Escape visual multi-mode (must press twice)
```
### Indent or De-Indent Multiple Lines
#### Entire file.
```bash
gg=G
```
#### Selection
```bash
v # Enter visual mode
j or k # To select multiple lines
0...9< # To de-indent multiple times
0...9> # To indent multiple times
```

## Tags
Helps navigate between classes and functions in large code bases. Requires CTags.

### Installation
```bash
brew install ctags
```

### Generate
In the folder contain scripts you can run one of the following commands.
```bash
ctags -R . # For all tags in all programs
ctags -R --exclude=node_modules . # Exclude a folder
ctags -R --exclude=.git --exclude=node_modules . # Exclude multiple folders
```

### Usage 
```bash
:tags # Show tag stack
:tag "name" # Go to defined tag
Ctrl-] # Jump to tag definition
:tn # Jump to next tag
:tp # Jump to previous tag
g] # See all tags for a selected definition
```	

