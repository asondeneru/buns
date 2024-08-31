init:
	@yarn
	@doppler login

setup:
	@doppler setup
	@cd apps/web && doppler secrets download --no-file --format env > .env
	@yarn web prisma generate

env:
	@cd apps/web && doppler secrets download --no-file --format env > .env

generate:
	@yarn web prisma generate

migrate:
	@yarn web prisma migrate dev

prisma:
	@yarn web prisma generate
	@yarn web prisma studio

dev:
	@yarn web dev