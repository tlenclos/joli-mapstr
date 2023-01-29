all: scrapper web-app

scrapper:
	cd google-maps-scrapper && yarn install --force && yarn start

web-app:
	yarn && yarn build