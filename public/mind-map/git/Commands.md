# Version control using Git

## Description
Useful commands for using git control system.

## Setup
Direct: [Install Git](https://git-scm.com/)

Homebrew (MacOS & Linux):
```bash
brew install git
```

## Clone repository
```bash
git clone "https://repositoryname.com"
```

## Initialise remote repository
```bash
git remote add origin "https://repositoryname.com"
git remote -v # Check if remote origin has been added
```

## Normal workflow
```bash
git add .
git commit -m "commit message goes here"
git push origin master
```

## Status
```bash
git status # Get information
```

## Branches
```bash
git branch "branchname" # Create a branch
git branch or git branch --list # List branches
git branch -d "branchname" # Delete branch
git branch -m "newbranchname" # Rename branch
git branch -d "branchname" # Delete branch
git checkout "branchname" # Switch to branch (after commiting chages to current branch)
```

## Pushing changes
```bash
git push origin master # Push to master branch
git push -u origin "branchname" # Push to new branch (create it on push)
```

## Stash 
Save current branch without committing.
```bash
git stash # Save current changes
git stash # Get back changes
git stash list # List stashed changes
```

## Cached
```bash
git rm --cached . # Remove files from commit (usesful for when adding items to .gitignore)
```

## Reset 
After a bad commit use this to get back to a previous commit. **Note you will loose changes made so back up your files somehow...**
```bash
git reset --hard "gitcommitkey" # Git commit key found on github
```

