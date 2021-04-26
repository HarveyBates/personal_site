## Description
Useful for converting files from one markup to another (e.g. .tex -> html).

## Setup
Direct: [Install Pandoc](https://pandoc.org/installing.html)

Homebrew (MacOS & Linux):
```bash
brew install pandoc
```

## Examples
### Markdown to html
```bash
pandoc -s input.md -c style.css -o output.html --metadata="Title"
```

### LaTeX to markdown
```bash
pandoc -s input.tex -o output.text
```

### Slide show (beamer)
```bash
pandoc -t beamer input.md -o output.pdf
pandoc -t beamer input.tex -o output.pdf
```

### Other
Useful commands can be found on the pandoc site.
[https://pandoc.org/demos.html](https://pandoc.org/demos.html)
