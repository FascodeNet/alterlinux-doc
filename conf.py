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

## Set locale dir
locale_dirs = ["locale"]

## Set exclude patterns
exclude_patterns = ["build"]

## Load .md only
source_suffix = ".md"
source_parsers = {".md": "markdown"}

# Theme Setting
html_theme = "sphinx_rtd_theme"

# Extension
extensions = [
    "sphinx_rtd_theme", # Sphinx theme
    "recommonmark", # Load markdown
    "sphinx_markdown_tables" # Load markdown tables
]

# Recommonmark Setting
def setup(app):
    app.add_config_value("recommonmark_config", {"auto_toc_tree_section": "Contents"}, True)
    app.add_transform(AutoStructify)