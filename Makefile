SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = .
BUILDDIR      = build

.PHONY: clean help html

clean:
	@rm -r "$(BUILDDIR)/*"

help:
	@echo "clean	Clean $(BUILDDIR)"
	@echo "html		Build HTML"
	@echo "help		Show this message"

html:
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)