FROM node:18

run mkdir -p /home/app

COPY . /home/app

User node 

RUN npm install

EXPOSE 3000

CMD ["node","/home/app/server/index.js"]
 

