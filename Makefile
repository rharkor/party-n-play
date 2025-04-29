# Variables
API_PATH = ./apps/api
APP_PATH = ./apps/app
NPM = pnpm

.PHONY: up
up:
	docker compose up -d
.PHONY: down
down:
	docker compose down
.PHONY: logs
logs:
	docker compose logs -f

.PHONY: api
api: 
	pnpm run setup
	pnpm run dev --filter ./apps/api
.PHONY: app
app:
	pnpm run setup
	pnpm run dev --filter ./apps/front