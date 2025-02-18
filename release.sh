#!/bin/bash

cd client && npm run build-prod && cd .. && ./sync.sh
