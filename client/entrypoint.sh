#!/bin/bash

environment="client"

if ! [[ -d "/$environment/node_modules" ]]
    then
        echo "node_modules not found, running install commands"
        cd /$environment/ && npm install
fi
    echo "node_modules found, running $npmCommand."
    cd /$environment/ && npm run dev