#!/bin/sh
set -e

if [ -z ${OPENAI_API_KEY} ];then
    echo "OPENAI_API_KEY needs to be set"
    exit 1
fi

if [ -z ${MONGO_URL} ];then
  echo "MONGO_URL needs to be set"
  exit 1
fi

if [ -z ${JWT_SECRET} ];then
  echo "JWT_SECRET needs to be set"
  exit 1
fi