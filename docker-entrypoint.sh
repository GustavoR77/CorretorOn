#!/bin/bash

if [[ $NODE_ENV == 'development' ]]; then
  npm i -D
  npm run dev
fi

if [[ $NODE_ENV == 'production' ]]; then
  npm i -D
  npm run start
fi


