This is a monorepo for both the front end and the api server of the face-recognition app.

After cloning this repo, follow the instructions below to run the app.

Important: Run the API Server before running the front end.

API server instructions:
1. Make sure you have docker (and docker-compose) installed and running on your computer.
   **Docker-compose is automatically installed with docker on Mac/Windows. It requires separate installation on Linux.
2. Make sure you are in the packages/api-server directory
3. run npm install
4. Run 'docker-compose up' (you may have to run 'docker-compose up --build' for the first setup phase)

Important: if you are getting conflict errors, you should run docker stop <container name> that is already running in the background. 
Important: if you are getting other erros, you should run docker-compose down to bring everything down, and start over.

Front end instructions
1. Make sure you are in the packages/front-end directory
2. Run `npm install`
3. Run `npm start`
4. If not automatically opened, on your browser, navigate to localhost:5000

The following are sample username/passwords for testing: (you can also register your own users)
Usernames: mehrdad@gmail.com, jackjack@yahoo.com, mary@gmail.com
Use password 123456 for all the usernames to login.
