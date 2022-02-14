FROM mysql:8.0
FROM node:alpine
COPY . /indexReact.js
WORKDIR /TrabajoPracticoREACT_JuanSegundoSchmidAguerre
CMD node indexReact.js
