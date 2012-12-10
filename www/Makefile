build:
	@component build -o ./js/build
	@uglifyjs ./js/build/build.js -o ./js/build/build-min.js -c -m

build-dev:
	@component build -o ./js/build --dev -n build-dev

components: component.json
	@component install --dev

clean:
	rm -rf ./js/build components

.PHONY: clean



