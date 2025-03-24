## Manual Installation
 - Install Nodejs locally
 - Clone the repo
 - Install dependencies (npm install)
 - Start the DB locally
    - docker run -p 5432:5432 -d -e POSGRES_PASSWORD=mysecretpassword postgres
    - take the connection string from neon.tech
 - Update the .env file with your connection string
 - npx prisma migrate dev
 - npx prisma generate
 - npm run build
 - npm run start

## Docker Installation
 - Install Docker
 - Create a network - `docker network create user_project`
 - Start postgres
    - `docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
 - Build the image - `docker build --network=host -t user-project .`
 - Start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user-project`

## Docker Compose Installation
 - Install Docker, docker-compose
 - Run `docker-compose up`