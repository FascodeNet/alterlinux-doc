import sys
import os

from datetime import date
from recommonmark.transform import AutoStructify


sys.path.insert(0, os.path.abspath("../"))

# Document Info
project = "Alter Linux"
copyright = f"{date.today().year}, Fascode Network" # ex. 2020, Fascode Network 
version = f"{date.today().strftime('%Y-%m-%d')}" # ex. 2020-12-17

# Build Setting
master_doc = "index"

## Set language
language = "en"

## Set locale dir
locale_dirs = ["locale"]

## Set gettext
gettext_compact = False

## Set exclude patterns
exclude_patterns = ["build"]

## Load .md only
source_suffix = ".rst"

# Theme Setting
html_theme = "sphinx_rtd_theme"

# Extension
extensions = [
    "sphinx_rtd_theme" # Sphinx theme
]