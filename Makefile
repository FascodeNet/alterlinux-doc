SPHINXBUILD   ?= sphinx-build
BUILDDIR      ?= ./build

.PHONY: clean help html

clean:
	@rm -r "$(BUILDDIR)"

help:
	@echo "Please use 'make <target>'"
	@echo "clean       Clean $(BUILDDIR)"
	@echo "html        Build HTML"
	@echo "help        Show this message"

html:
	@$(SPHINXBUILD) -b html . "$(BUILDDIR)"