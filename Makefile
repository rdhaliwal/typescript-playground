SHELL = /bin/bash

help:
	@printf "\n\033[32mEnvironment Variables\033[0m\n"
	@cat $(MAKEFILE_LIST) | egrep -o "\\$$\{[a-zA-Z0-9_]*\}" | sort | uniq | \
		sed -E 's/^[\$$\{]*|\}$$//g' | xargs -I % echo % % | \
		xargs printf "echo \"\033[93m%-30s\033[0m \$$(printenv %s)\n\"" | bash | sed "s/echo //"
	@printf "\n\033[32mMake Targets\033[0m\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		cut -d: -f1,2 | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

.PHONY: require-%
require-%: ## Require the variable to be defined
	@: $(if $(value $*),,$(error $* is undefined))

.PHONY: build
build: ## Build the SPA
	$(info --- Compiling JS and assets)
	npm run build;

.PHONY: run
run: require-FILE## Run the file
	$(info --- Running the compiled JS file)
	node ./build/$(basename ${FILE})

.PHONY: watch
watch: ## Watch the ts file and run it when it's saved
	watchman-wait . --max-events 0 -p '*.ts' | while read line; do make build run FILE=$$line; done

.PHONY: clean
clean: ## Delete the build files
	rm -rf ./build;
	mkdir build;
