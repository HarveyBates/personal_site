# Working with dates in Python

## Description
Useful commands when working with dates in python.

## Imports
Data sorting, visualisation, basic statistics and line fitting.
```python
import pandas as pd
import numpy as np
from datetime import datetime
```

## Converting
Convert pandas dataframe column values to datetime.
```python 
dataFrame["timestamps"] = pd.to_datetime(dataFrame["timestamps"])
```
Alternative for array data.
```python
dfTimeStamps = [datetime.strptime(time, "%Y-%m-%d %H:%M:%S") for time in dataFrame["timestamps"]]
# Replace formatted string with your time stamp structure
```

## Indexing
Get dataframe values between particular dates.
```python
range = dataFrame[dataFrame["timestamps"].between("DD-MM-YYYY HH:MM:SS", "DD-MM-YYYY HH:MM:SS")]
```

## Aligning
Align date times from two separate dataframes. Useful for analysing data from separate sources.
```python
# May have to remove minute and second values if they don't match
df1["matching_column_name"] = df1["matching_column_name"].apply(lambda t: t.replace(minute=0, second=0))
df2["matching_column_name"] = df2["matching_column_name"].apply(lambda t: t.replace(minute=0, second=0))

mergedDataFrame = pd.merge_asof(df1, df2, on="matching_column_name") # This will drop any values that don't match
```

