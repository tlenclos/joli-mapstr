all: scrapper web-app

scrapper:
	cd google-maps-scrapper && yarn && yarn start

web-app:
	yarn && yarn build