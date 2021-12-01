
path := $(shell pwd)

network := --network minha-rede

##########################################################
# APP

app_port 	:= 4000:4000
app_volume 	:= $(path)/app:/var/www/app
app_workdir := /var/www/app
app_cmd 	:= npm run dev

preperapp:
	docker run -d -p 4000:4000 -v $(path)/app:/var/www/app --name myapp -w /var/www/app --network minha-rede node npm run dev

upapp:
	docker start myapp

downapp:
	docker stop myapp
##########################################################
# MONGO
prepermongo:
	docker run -d -p 27017:27017 --name mymongo --network minha-rede mongo

upmongo:
	docker star mymongo

downmongo:
	docker stop mymongo
##########################################################
# REDIS

upredis:
	docker run -d -p ???? --name myredis --network minha-rede redis

downredis:
	docker stop myredis

createNetwork:
	docker network create --driver bridge minha-rede

