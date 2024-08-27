init:
	@yarn
	@doppler login

setup:
	@doppler setup
	@cd apps/web && yarn dlx prisma generate

generate:
	@cd apps/web && yarn dlx prisma generate

migrate:
	@cd apps/web && yarn dlx prisma migrate dev

prisma:
	@cd apps/web && yarn dlx prisma generate
	@cd apps/web && yarn dlx prisma studio

dev:
	@cd apps/web && doppler secrets download --no-file --format env > .env
	@yarn workspace web dev