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
	$(NPM) run setup
	$(NPM) run --filter $(API_PATH) dev
.PHONY: app
app:
	$(NPM) run setup
	$(NPM) run --filter $(APP_PATH) dev