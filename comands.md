docker compose -f docker-compose.yml -f compose/dev.yml build
docker compose -f docker-compose.yml -f compose/dev.yml run web yarn
docker compose -f docker-compose.yml -f compose/dev.yml up