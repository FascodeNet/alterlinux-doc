SPHINXBUILD   ?= sphinx-build
SPHINXINTL    ?= sphinx-intl
BUILDDIR      ?= ./build

.PHONY: clean gettext help html

clean:
	@rm -rf "$(BUILDDIR)/*"
	@echo
	@echo "Clean finished"

gettext_%:
	@$(SPHINXBUILD) -b gettext . "$(BUILDDIR)/locale/$*"
	@$(SPHINXINTL) update -l "$*" -p "$(BUILDDIR)/locale/$*"

gettext: gettext_ja
	@echo
	@echo "Build finished."

help:
	@echo "Please use 'make <target>'"
	@echo "clean       Clean $(BUILDDIR)"
	@echo "html        Build HTML"
	@echo "help        Show this message"

html_%:
	@sphinx-intl build
	@$(SPHINXBUILD) -b html -D language="$*" . "$(BUILDDIR)/html/$*"

html: html_en html_ja
	@echo
	@echo "Build finished."

%: Makefile