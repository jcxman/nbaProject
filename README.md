### **Build Setup**

Notes:
$ means run in command prompt
You should run the following setup as an admin or root.
You may ignore the optional dependency errors.

## Preferred System: Ubuntu 14.04

## Install Git(if not installed)
•	Recent version (e.g. v2.x)

update my git in ubuntu using the following commands:
	sudo apt-add-repository ppa:git-core/ppa
	sudo apt-get update
	sudo apt-get install git


## Install Runtime and Package Manager(if not installed)
•	Node.js  (v0.10.x or above)
•	npm   (v2.1.0 or above)

Nodejs and npm version in my ubuntu:
node : v0.12.7
npm:2.11.3

## Check Version
•	$ node --version && npm --version

## Install Global Node Modules (if not installed)
•	$ npm install --global bower grunt-cli

## Install app (this may take a few minutes)
•	cd to root of unzipped directory
•	$ npm install
•	$ bower install

## Run server with live reload
•	$ grunt serve
