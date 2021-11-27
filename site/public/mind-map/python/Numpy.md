# Numpy

## Description
Useful commands for numpy.

## Import
```python
import numpy as np
```

## Random
```python
np.random.randint(10) # Generates random int between 0 and 10
np.random.random(4) # Generates random array of length 4 between 0 and 1
np.random.rand(2, 3) # Generates 2 x 3 array of floats between 0 and 1
```

## Create numpy array 
Basic array:
```python
array = np.array([1, 2, 3, 4])
# or 
array = [1, 2, 3, 4]
array = np.array(array) # >[1, 2, 3, 4]
```
Zero filled array:
```python
array = np.zeros(4) # >[0, 0, 0, 0]
```
1D array with *n* numbers:
```python
array = np.arange(4) # >[0, 1, 2, 3]
```
1D random array:
```python
array = np.random.random(4) # >[0.521, 0.219, 0.972, 0.814]
```
1D evenly spaced array between two numbers:
```python
array = np.linspace(0, 1, 4) # >[0, 0.333, 0.666, 1]
# np.linspace(start, stop, n)
```

## Operations
```python
np.copy(arr) # Copy array
np.append(arr, vals) # Appends to end of array
np.insert(arr, 3, vals) # Appends before index 3
np.concatenate((arr, arr1), axis=0) # Put arr1 at end of arr
np.split(arr, 2) # Split into two arrays
np.sort(arr)
np.reshape(3, 5) # Reshape to 3 by 5
```

## Information
```python
np.shape(arr)
arr.dtype # Get datatype within array
arr.size # Get size of array
np.array_equal(arr, arr1) # Compare arrays
```

## Arithmetic Operations
```python
np.max(arr)
np.min(arr)
np.sum(arr)
np.mean(arr) # Mean of arr
np.std(arr) # Stdev of arr
np.sqrt(arr)
np.exp(arr) # Exponent of arr
np.add(arr, arr1) 
np.subtract(arr, arr1)
np.divide(arr, arr1)
np.multiply(arr, arr1)
```