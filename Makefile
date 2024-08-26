env-web-init:
	@cd apps/web && doppler login

env-web-setup:
	@cd apps/web && doppler setup

dev-web:
	@cd apps/web && doppler secrets download --no-file --format env > .env
	@yarn workspace web dev