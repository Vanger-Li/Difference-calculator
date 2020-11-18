install:
	npm install

publish-pack:
	npm publish --dry-run

test:
	npx -n --experimental-vm-modules jest

link:
	npm link

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix

test-coverage:
	npm test -- --coverage --coverageProvider=v8
