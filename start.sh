#!/bin/bash

cd backend
rails server -p 3005 &
cd ..
http-server -p 4000
