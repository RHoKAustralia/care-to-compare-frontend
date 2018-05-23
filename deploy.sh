#!/bin/bash -el

if [ -z ${ENVIRONMENT} ]; then
  ENVIRONMENT=$1
fi

if [ -z ${ENVIRONMENT} ]; then
  echo "Environment Name / Identifier is required for launching of the stack"
  echo "Please set the ENVIRONMENT environment variable"
  exit 255
fi

docker run --rm \
    -v `pwd`:/cwd \
    -e REACT_APP_API_ENDPOINT \
    node:9.11-alpine ash -c "cd /cwd && npm install && yarn build:prod"

aws s3 sync --delete build/ s3://${ENVIRONMENT}.caretocompare.com.au/