# LLDB Cheatsheet

LLDB is a debugger for C/C++ that runs in the terminal.

 `(lldb)` denotes a function being run in lldb.

### Summary

```bash
# Opening
c++ -g -std=c++17 -o <output_exe> <file_name> # With debug flags (-g)
lldb main # Open executable main

# Breakpoints
(lldb) b main.cpp : <line_number> # Set breakpoint online number
(lldb) b set -n <function_name> # e.g. Foo(int)
(lldb) br l # List breakpoints
(lldb) br del <line_number> # Delete breakpoint

# Run
(lldb) r

# Watch variable
(lldb) watch set var <variable_name>
(lldb) watch modify -c '(<variable_name> == 5)' # Break on condition
(lldb) watch list

# Navigation
(lldb) n # Next line
(lldb) s # Step into function on current line
(lldb) c # Continue until next breakpoint (or end)

# Variables
(lldb) p <variable_name> # Print variable value
(lldb) fr v # Print all variables in current frame

# Frames
(lldb) fr s # Current point of execution
(lldb) fr v # Print all variables in current frame
(lldb) fr s <frame_id> # Go to specific frame
(lldb) bt # List frames up until point

# Exiting
(lldb) kill # Kill the process (but stay in lldb)
(lldb) quit # Exit lldb
```

### Open File

```bash
lldb main # Where main is your executable
# Note main must be compiled with -g flag
# E.g. c++ -g -std=c++17 -o main main.cpp

# or
lldb
(lldb) file "path/to/file"

# or if arguments are supplied 
lldb -- main arg1 arg2 # note the -- before the executable
```

### Breakpoints

Executable must be compiled with the `-g` flag.

#### Set

By line number:

```bash
(lldb) breakpoint set -f <filename> -l <line_number>
# or
(lldb) b <filename> : <line_number>
# or
(lldb) break <filename> : <line_number>
```

By function:

```bash
(lldb) breakpoint set --name <function_name>
# or
(lldb) b set -n <function_name> # e.g. Foo(int)
```

On a class method:

```bash
(lldb) b Foo::foo()
```

Inside a namespace:

```bash
(lldb) b NameSpace::foo(int)
```

#### List

```bash
(lldb) breakpoint list
# or
(lldb) br l
```

#### Delete

Deletion is based on the breakpoint ID (obtained using `br l`).

```bash
(lldb) br del # All
(lldb) br del <line_number> # Specific
```

#### Watch

Watch a specific variable to see it changes (also based on conditionals). Must be running before setting.

```bash
(lldb) watch set var <variable_name>
# Stop based on condition
(lldb) watch modify -c '(<variable_name> == 5)'
# List watch
(lldb) watch list
```

### Run

```bash
process launch
# or
(lldb) run
# or
(lldb) r
```

### Navigation

#### Step Over

Go to next line.

```bash
(lldb) next
# or 
(lldb) n
```

#### Step Into

Go into function on current line. If multiple (functions) exist it will go into them in order.

```bash
(lldb) step
# or
(lldb) s
```

#### Continue

Run until next breakpoint or end of program.

```bash
(lldb) continue
# or
(lldb) c
```

### Variables

#### Inspecting

View variable contents.

```bash
(lldb) print <variable_name>
# or
(lldb) p <variable_name>
```

#### Frames

Inspect all variables around a specific call site.

```bash
(lldb) frame <variable_name>
# or
(lldb) fr v 
```

See what frame the debugger is up to. Or select a specific frame.

```bash
(lldb) frame select
# or
(lldb) fr s # Current point of execution

# Or to see a specific frame
(lldb) frame select <frame_id>
# or
(lldb) fr s <frame_id>
```

#### Back-tracing

Lists the current call stack. Most recent function at the top of the stack (descending order). 

```bash
(lldb) bt
```

Useful for debugging crashes by seeing the programs state before the crash occurred, for example:

```bash
lldb main
(lldb) r
# Error occurs
(lldb) bt # List frames of execution
(llsb) fr s <frame_id> # Select frame before crash
(llsb) fr v # List varaibles prior to crash
```

### Terminating

```bash
# Kill the process (but stay in lldb)
(lldb) kill
# Exit lldb
(lldb) quit
```
