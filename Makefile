dev:
	docker-compose up

prod:
	cd ./client && npm install && npm run build
	cd ./server && npm install && npm run build
	cd ./server && APP_ENV="production" npm run start