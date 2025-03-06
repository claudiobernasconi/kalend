---
sidebar_position: 1
---

# Setup
Clone Kalend repo

    git clone git@github.com:claudiobernasconi/kalend.git

Install packages

    npm install

## Usage

Either connect to your app or setup example app from this repo

## Building Kalend
After changing code build package 

    npm run build

To access locally build package, you have to link it. Navigate to dist folder and run

    npm link kalend-evo

## Setup in your app
You might have to adjust your app and link react from kalend node_modules if you see errors in your app

Run from root of your app folder

    npm link YOUR_PATH/kalend-evo/node_modules/react
    npm link YOUR_PATH/kalend-evo/node_modules/react-dom
    npm link kalend-evo

## Updating Kalend

After each change in Kalend, you will have to rebuild package.
