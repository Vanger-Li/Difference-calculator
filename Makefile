install:
	npm install

publish-pack:
	npm publish --dry-run

test:
	npx -n --experimental-vm-modules jest