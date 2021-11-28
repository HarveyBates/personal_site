# Useful Pandoc commands

## Description
Useful for converting files from one markup to another (e.g. .tex -> html).

## Setup
Direct: [Install Pandoc](https://pandoc.org/installing.html)

Homebrew (MacOS & Linux):
```bash
brew install pandoc
```

## Examples
### Metadata
Insert at top of ``.md`` file to give some metadata in the form of a ``.yml`` file (without actually creating a ``.yml`` file).
```yml
---
title: TITLE
author:
- Author
date: \today{}
header: Header
footer: Footer
geometry: margin=3cm
abstract: Enter abstract 
header-includes:
- \usepackage{setspace}
- \doublespacing
- \usepackage{lineno}
- \linenumbers
...
```
### Links
Add some links to the header.
```html
<p style="text-align: center;"><a href="https://harveybates.xyz/">Home</a> - <a 
href="https://harveybates.xyz/knowledge/index">Back</a></p>
```


### Markdown to html
```bash
pandoc -s input.md -c style.css -o output.html --metadata="Title"
```

### LaTeX to markdown
```bash
pandoc -s input.tex -o output.text
```

### Markdown to pdf
```bash
pandoc -s input.md -o output.pdf
```
#### Citations
Define in ``.bib`` file.
```latex
@article{name2020,
	author={Name, LastName},
	title={Title},
	journal={Journal},
	year={2020},
}
```

Define in text.
```md
[@name2020]
```

Compile in terminal.
```bash
pandoc -s input.md --bibliography=ref.bib --citeproc -o output.pdf
```

### Figure numbering
Using [pandoc-fignos](https://github.com/tomduck/pandoc-fignos).

#### Install 
```bash
python3 -m pip install pandoc-fignos --user
```

#### Use
Define figure with caption:
```markdown
![Caption.](image.png){#fig:Name}
```
Reference figure with "Fig" extension:
```markdown
\*@Fig:Name
```

When compiling use the following tag.
```bash
--filter pandoc-fignos
```

### Slide show (beamer)
```bash
pandoc -t beamer input.md -o output.pdf
pandoc -t beamer input.tex -o output.pdf
```

### Other
Useful commands can be found on the pandoc site.
[https://pandoc.org/demos.html](https://pandoc.org/demos.html)
