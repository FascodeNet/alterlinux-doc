How to Contribute
=================

Coding Conventions
------------------

### General

-   Use the `bash` build-in command if possible
-   Add a dependency package if you use an external command (please try
    not to use it as much as possible)

### Output

-   Output all error messages to `STDERR`
-   If you have a function for messages, use that function
-   Minimize output and redundant output only allow when enabled by the
    argument

### Looks

-   Indent should be four spaces
-   The line break with `\` when using a lot of commands with many
    arguments (`xorriso`, etc.) or a lot of pipes
-   If you write a Todo in your code, write the date and user name

### Variables and functions

-   Write comments on all functions in summary and usage
-   The function definition does not use a `function` but uses
    `my_func () {}`
-   All variables use brackets like `${hoge}`
-   Declare variables that are used only in the function by `local`
-   Command substitution does not use a `` `echo hoge` `` but uses
    `$(echo hoge)`
-   Arithmetic expansion uses `$(( m + n ))`
-   Local variables, functions start their names with `_`

### if, for, test, case, while

-   The `test` command must use `[[`
-   `do`, `then`, etc. write on the same line as `while`, `for` and `if`
-   Align indents on `cases` as much as possible

### Example

``` bash
# Usage: test_hoge <str>
test_hoge () {
    local _var="${1}"
    if [[ "${var}" = "hoge" ]]; then
        echo "${var} is hoge"
        return 0
    else
        echo "${var} is not hoge"
        return 1
    fi
}
```

### Other

-   Use as few relative paths as possible.
-   Make sure to enclose the file path in `""`.

Issues
------

When you send the issue, please include the following information.

-   The URL to the image file used for the installation
-   The environment in which the problem occurred
-   What did we do
-   Screenshots, logs, etc.
-   If a problem happens when you\'re building, Please attach the file
    `build_options` in the working directory

Pull Request
------------

Please write content in either Japanese or English. Specifically, the
content refers to the following

-   What features you are going to add (or fix the problem)
-   Known issues (and how to deal with them if you can write about them)
-   About the references
-   Tested environment and development environment
