build:
	docker-compose build --no-cache
up:
	docker-compose up -d
down:
	docker-compose down
ps:
	docker-compose ps
bash:
	docker-compose exec app bash
