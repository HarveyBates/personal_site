# Pandas useful commands

## Import
Data sorting, visualisation, basic statistics and line fitting.
```python
import pandas as pd
```

## Create dataframe (pandas)
Using ``.csv`` files.
```python
dataframe = pd.read_csv("filename.csv") # Basic loading
dataframe = pd.read_csv("filename.csv").dropna() # Remove null values
dataframe = pd.read_csv("filename.csv", delimiter=';') # Define seperator
```

Using ``.xlsx`` files.
```python
dataframe = pd.read_excel("filename.csv") # Basic loading
dataframe = pd.read_csv("filename.csv", sheet_name="name") # Define sheet name
```
