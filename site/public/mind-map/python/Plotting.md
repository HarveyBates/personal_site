# Plotting data in Python with Matplotlib

## Description
Useful commands for programming within Jupyter Notebook.

## Data Preparation
### Useful imports
Data sorting, visualisation, basic statistics and line fitting.
```python
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib.ticker as mticker
import seaborn as sns
```

## Plotting Data
### Subplots
```python
fig, ax = plt.subplots(1, 1, figsize=(8,8)) # Single column
fig, (ax, ax1) = plt.subplots(1, 2, figsize=(8, 8)) # Single column multiple plots
fig, [[ax, ax1], [ax2, ax3]] = plt.suplots(2, 2) # Multi-row multi-column 
```

### Basic Settings
```python
ax.set_ylabel("LABEL")
ax.set_xlabel("LABEL")
ax.grid(color="lightgrey")
ax.set_ylim(lower, upper)
ax.set_xlim(lower, upper)
ax.legend(loc="upper right")
```

### Dates
```python
ax.set_xlim([datetime.date(YYYY, MM, DD), datetime.date(YYYY, MM, DD)])
ax.xaxis.set_major_locator(mdates.DayLocator(interval=n))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=n))
plt.setp(ax.get_xticklabels(), rotation=30, ha="right, rotation_mode="anchor")
```

### Text and Arrows
```python
ax.text(0.05, 0.95, "TEXT", transform=ax.transAxes, fontsize=16, va='top')
ax.annotate('TEXT', xy=(0, 0), xytext=(0, 0),
            arrowprops=dict(facecolor='black', shrink=0.05))
```

### Exporting and Displaying 
```python
plt.tight_layout() # Use this or bbox_inches
plt.savefig("name.png", dpi=300, bbox_inches='tight')
plt.show()
```


