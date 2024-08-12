# Credit card validator

Credit card validator using the Luhn checksum algorithm

# How to run the project

## Option 1:

From the main folder use:

`make dev`  to run dev servers using docker and docker-compose

`make prod`  to build files and run for production

## Option 2:

From the main folder run `docker-compose up` to run dev servers

## Option 3

From one terminal instance of the terminal run `cd ./server && npm run dev` 

From a second terminal window run `cd ./client && npm run dev`


# Building the project
- Use the command `make prod` from the root folder
  
  Or
  
- Go to the client folder and run `npm run build`  from the terminal
- Go to the server folder and run `npm run build` from the terminal
- Still from the server folder run `npm run start` from the terminal
